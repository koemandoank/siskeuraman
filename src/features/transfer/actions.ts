"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getCurrentFamilyMember } from "@/lib/helpers/family";
import { createClient } from "@/lib/supabase/server";
import { randomUUID } from "crypto";

export async function createTransfer(formData: FormData) {
  const member = await getCurrentFamilyMember();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!member || !user) throw new Error("Unauthorized");

  const fromWalletId = formData.get("fromWalletId") as string;
  const toWalletId = formData.get("toWalletId") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const description = formData.get("description") as string;
  const transactionDate = formData.get("transactionDate") as string;

  if (!amount || amount <= 0) throw new Error("Nominal harus lebih dari 0");
  if (fromWalletId === toWalletId) {
    throw new Error("Dompet asal dan tujuan tidak boleh sama");
  }

  const [fromWallet, toWallet] = await Promise.all([
    prisma.wallet.findUnique({
      where: { id: fromWalletId, familyId: member.familyId },
    }),
    prisma.wallet.findUnique({
      where: { id: toWalletId, familyId: member.familyId },
    }),
  ]);
  if (!fromWallet || !toWallet) throw new Error("Dompet tidak ditemukan");
  if (Number(fromWallet.balance) < amount) {
    throw new Error("Saldo dompet asal tidak mencukupi");
  }

  const pairId = randomUUID();
  const date = transactionDate ? new Date(transactionDate) : new Date();

  await prisma.$transaction([
    prisma.transaction.create({
      data: {
        familyId: member.familyId,
        walletId: fromWalletId,
        profileId: user.id,
        type: "TRANSFER",
        amount,
        description: description
          ? `Transfer ke ${toWallet.name}: ${description}`
          : `Transfer ke ${toWallet.name}`,
        transferPairId: pairId,
        transactionDate: date,
      },
    }),
    prisma.transaction.create({
      data: {
        familyId: member.familyId,
        walletId: toWalletId,
        profileId: user.id,
        type: "TRANSFER",
        amount,
        description: description
          ? `Transfer dari ${fromWallet.name}: ${description}`
          : `Transfer dari ${fromWallet.name}`,
        transferPairId: pairId,
        transactionDate: date,
      },
    }),
    prisma.wallet.update({
      where: { id: fromWalletId },
      data: { balance: { decrement: amount } },
    }),
    prisma.wallet.update({
      where: { id: toWalletId },
      data: { balance: { increment: amount } },
    }),
  ]);

  revalidatePath("/dashboard/transfer");
  revalidatePath("/dashboard");
}

export async function deleteTransfer(formData: FormData) {
  const member = await getCurrentFamilyMember();
  if (!member) throw new Error("Unauthorized");

  const pairId = formData.get("transferPairId") as string;

  const pair = await prisma.transaction.findMany({
    where: { transferPairId: pairId, familyId: member.familyId },
  });
  if (pair.length !== 2) throw new Error("Data transfer tidak ditemukan");

  await prisma.$transaction([
    ...pair.map((t) =>
      prisma.wallet.update({
        where: { id: t.walletId },
        data: {
          // reverse: the "from" row had money removed, "to" row had money added.
          // We reverse each row individually using its own sign via description marker
          // is unreliable, so instead reverse using amount direction below.
          balance: { increment: 0 },
        },
      })
    ),
  ]);

  // Reverse balances correctly: find which row decremented vs incremented
  // by re-deriving from description prefix.
  const fromRow = pair.find((t) => t.description?.startsWith("Transfer ke"));
  const toRow = pair.find((t) => t.description?.startsWith("Transfer dari"));

  if (fromRow && toRow) {
    await prisma.$transaction([
      prisma.wallet.update({
        where: { id: fromRow.walletId },
        data: { balance: { increment: fromRow.amount } },
      }),
      prisma.wallet.update({
        where: { id: toRow.walletId },
        data: { balance: { decrement: toRow.amount } },
      }),
      prisma.transaction.deleteMany({ where: { transferPairId: pairId } }),
    ]);
  } else {
    // fallback: just delete records without balance reversal ambiguity
    await prisma.transaction.deleteMany({ where: { transferPairId: pairId } });
  }

  revalidatePath("/dashboard/transfer");
  revalidatePath("/dashboard");
}
