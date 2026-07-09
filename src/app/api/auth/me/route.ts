import { NextResponse } from "next/server";
import { getOrCreateUserFromRequest } from "../../../../lib/auth";

export async function GET() {
  try {
    const { sessionUser, dbUser } = await getOrCreateUserFromRequest();

    if (!sessionUser) return NextResponse.json({ ok: false, error: "not_authenticated" }, { status: 401 });

    return NextResponse.json({ ok: true, user: dbUser });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
