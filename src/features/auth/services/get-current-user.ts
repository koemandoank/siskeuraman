import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

/**
 * Mengambil user Supabase Auth yang sedang login beserta profile-nya
 * di tabel public.users. Di-cache per request (React cache) agar tidak
 * query berulang di layout + page yang sama.
 */
export const getCurrentUser = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) return null;

  const profile = await prisma.user.findUnique({
    where: { id: authUser.id },
  });

  if (!profile || !profile.isActive || profile.deletedAt) return null;

  return profile;
});
