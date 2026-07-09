import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  const result: any = { ok: true, services: {} };

  // Check environment variables
  const required = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "DATABASE_URL",
  ];
  result.services.env = {};
  for (const k of required) {
    result.services.env[k] = !!process.env[k];
  }

  // Check DB connectivity (non-blocking)
  try {
    await prisma.$queryRaw`SELECT 1`;
    result.services.db = { ok: true };
  } catch (e) {
    result.services.db = { ok: false, error: String(e) };
    result.ok = false;
  }

  return NextResponse.json(result);
}
