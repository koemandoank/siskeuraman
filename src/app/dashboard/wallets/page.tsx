import { prisma } from "@/lib/prisma";
import { getCurrentFamilyMember } from "@/lib/helpers/family";
import { createWallet, deleteWallet } from "@/features/wallet/actions";

const typeLabels: Record<string, string> = {
  CASH: "Tunai",
  BANK: "Bank",
  E_WALLET: "E-Wallet",
};

export default async function WalletsPage() {
  const member = await getCurrentFamilyMember();
  if (!member) return null;

  const wallets = await prisma.wallet.findMany({
    where: { familyId: member.familyId },
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 pt-6">
      <h1 className="text-2xl font-bold">Dompet</h1>

      <div className="border-border mb-8 rounded-lg border p-4">
        <h2 className="mb-3 font-semibold">Tambah Dompet</h2>
        <form action={createWallet} className="flex flex-wrap gap-2">
          <input
            name="name"
            placeholder="Nama dompet"
            required
            className="border-input bg-background h-9 flex-1 rounded-md border px-3 text-sm"
          />
          <select
            name="type"
            required
            className="border-input bg-background h-9 rounded-md border px-3 text-sm"
          >
            <option value="CASH">Tunai</option>
            <option value="BANK">Bank</option>
            <option value="E_WALLET">E-Wallet</option>
          </select>
          <input
            name="balance"
            type="number"
            step="0.01"
            defaultValue="0"
            placeholder="Saldo awal"
            className="border-input bg-background h-9 w-28 rounded-md border px-3 text-sm"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center rounded-md px-4 text-sm font-medium"
          >
            Tambah
          </button>
        </form>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {wallets.length === 0 && (
          <p className="text-muted-foreground col-span-full text-sm">
            Belum ada dompet.
          </p>
        )}
        {wallets.map((w) => (
          <div
            key={w.id}
            className="border-border rounded-lg border p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: w.color }}
                />
                <span className="font-medium">{w.name}</span>
              </div>
              <span className="text-muted-foreground text-xs">
                {typeLabels[w.type]}
              </span>
            </div>
            <p className="text-lg font-semibold">
              Rp {Number(w.balance).toLocaleString("id-ID")}
            </p>
            <form action={deleteWallet} className="mt-2">
              <input type="hidden" name="id" value={w.id} />
              <button
                type="submit"
                className="text-destructive hover:text-destructive/80 text-sm"
              >
                Hapus
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
