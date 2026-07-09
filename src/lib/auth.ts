import { createServerClient } from "@supabase/ssr";
import { prisma } from "./prisma";
import { cookies } from "next/headers";

export async function getOrCreateUserFromRequest() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll() {
          // no-op in server components
        },
      },
    }
  );

  const { data } = await supabase.auth.getUser();
  const sbUser = data.user;

  if (!sbUser) return { sessionUser: null, dbUser: null };

  // Supabase auth user id is UUID string
  const authId = sbUser.id;

  // Try to find user in DB
  let dbUser = await prisma.user.findUnique({ where: { id: authId } });

  if (!dbUser) {
    // create minimal profile from supabase user
    const email = sbUser.email ?? "";
    const fullName = (sbUser.user_metadata as any)?.full_name ?? (sbUser.user_metadata as any)?.name ?? "";
    const username = email.split("@")[0] + Math.floor(Math.random() * 1000);

    dbUser = await prisma.user.create({
      data: {
        id: authId,
        email,
        fullName: fullName || username,
        username,
        role: "ANAK",
      },
    });
  }

  return { sessionUser: sbUser, dbUser };
}
