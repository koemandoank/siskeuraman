"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getCurrentFamilyMember } from "@/lib/helpers/family";

export async function updateSetting(formData: FormData) {
  const member = await getCurrentFamilyMember();
  if (!member) throw new Error("Unauthorized");

  const currency = formData.get("currency") as string;
  const timezone = formData.get("timezone") as string;
  const language = formData.get("language") as string;

  await prisma.setting.upsert({
    where: { familyId: member.familyId },
    update: { currency, timezone, language },
    create: {
      familyId: member.familyId,
      currency,
      timezone,
      language,
    },
  });

  revalidatePath("/dashboard/settings");
}
