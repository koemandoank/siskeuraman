import { NextResponse } from "next/server";
import { getOrCreateUserFromRequest } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {
    const { sessionUser, dbUser } = await getOrCreateUserFromRequest();

    if (!sessionUser) return NextResponse.json({ ok: false, error: "not_authenticated" }, { status: 401 });

    if (!dbUser || dbUser.role !== "ADMINISTRATOR") {
      return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
    }

    const users = await prisma.user.count();
    const wallets = await prisma.wallet.count();

    return NextResponse.json({ ok: true, stats: { users, wallets } });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
