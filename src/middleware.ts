import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "./lib/prisma";

/**
 * Middleware:
 * - Refresh Supabase session
 * - Create DB profile when first login
 * - Redirect unauthenticated users to /login
 * - Enforce basic RBAC for /admin paths
 */
export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Try to read session user
  const { data } = await supabase.auth.getUser();
  const sbUser = data.user;

  const pathname = request.nextUrl.pathname;

  // Allow public assets, health, and login page
  const publicPaths = ["/login", "/api/auth/me", "/api/health", "/"];
  if (publicPaths.some((p) => pathname === p || pathname.startsWith(`/public${p}`))) {
    return response;
  }

  // If user not logged in, redirect to /login for protected routes
  if (!sbUser) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Ensure DB record exists (lightweight)
  try {
    const authId = sbUser.id;
    const existing = await prisma.user.findUnique({ where: { id: authId } });
    if (!existing) {
      const email = sbUser.email ?? "";
      const fullName = (sbUser.user_metadata as any)?.full_name ?? (sbUser.user_metadata as any)?.name ?? "";
      const username = email.split("@")[0] + Math.floor(Math.random() * 1000);

      await prisma.user.create({
        data: {
          id: authId,
          email,
          fullName: fullName || username,
          username,
          role: "ANAK",
        },
      });
    }
  } catch (e) {
    // don't block on DB errors — allow the request but log server-side
    // eslint-disable-next-line no-console
    console.warn("prisma user sync failed", e);
  }

  // Basic RBAC: protect /admin to ADMINISTRATOR only
  if (pathname.startsWith("/admin")) {
    try {
      const user = await prisma.user.findUnique({ where: { id: sbUser.id } });
      if (!user || user.role !== "ADMINISTRATOR") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
