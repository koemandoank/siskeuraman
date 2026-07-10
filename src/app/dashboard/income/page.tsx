import { prisma } from "@/lib/prisma";
import { getCurrentFamilyMember } from "@/lib/helpers/family";
import {
  createTransaction,
  deleteTransaction,
} from "@/features/transaction/actions";

export default async function IncomePage() {
  const member = await getCurrentFamilyMember();
  if (!member) return null;

  const [wallets, categories, transactions] = await Promise.all([
    prisma.wallet.findMany({
      where: { familyId: member.familyId, isActive: true },
    }),
    prisma.category.findMany({
      where: { familyId: member.familyId, type: "INCOME", isActive: true },
    }),
    prisma.transaction.findMany({
      where: { familyId: member.familyId, type: "INCOME" },
      include: { wallet: true, category: true },
      orderBy: { transactionDate: "desc" },
      take: 50,
    }),
  ]);

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 pt-6">
      <h1 className="text-2xl font-bold text-green-600">Pemasukan</h1>

      <div className="border-border rounded-lg border p-4">
        <h2 className="mb-3 font-semibold">Tambah Pemasukan</h2>
        <form action={createTransaction} className="space-y-3">
          <input type="hidden" name="type" value="INCOME" />
          <div className="grid gap-3 sm:grid-cols-2">
            <select
              name="walletId"
              required
              className="border-input bg-background h-9 rounded-md border px-3 text-sm"
            >
              <option value="">Pilih Dompet</option>
              {wallets.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name} (Rp {Number(w.balance).toLocaleString("id-ID")})
                </option>
              ))}
            </select>
            <select
              name="categoryId"
              required
              className="border-input bg-background h-9 rounded-md border px-3 text-sm"
            >
              <option value="">Pilih Kategori</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <input
              name="amount"
              type="number"
              step="0.01"
              required
              placeholder="Nominal"
              className="border-input bg-background h-9 rounded-md border px-3 text-sm"
            />
            <input
              name="transactionDate"
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="border-input bg-background h-9 rounded-md border px-3 text-sm"
            />
          </div>
          <input
            name="description"
            placeholder="Keterangan (opsional)"
            className="border-input bg-background h-9 w-full rounded-md border px-3 text-sm"
          />
          <button
            type="submit"
            className="bg-green-600 text-primary-foreground hover:bg-green-700 inline-flex h-9 items-center rounded-md px-4 text-sm font-medium"
          >
            Simpan
          </button>
        </form>
      </div>

      <div className="space-y-2">
        {transactions.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            Belum ada pemasukan.
          </p>
        ) : (
          transactions.map((t) => (
            <div
              key={t.id}
              className="border-border flex items-center justify-between rounded-lg border p-3"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    Rp {Number(t.amount).toLocaleString("id-ID")}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {t.category.name}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">
                  {t.wallet.name}
                  {t.description ? ` — ${t.description}` : ""}
                  {" — "}
                  {new Date(t.transactionDate).toLocaleDateString("id-ID")}
                </p>
              </div>
              <form action={deleteTransaction}>
                <input type="hidden" name="id" value={t.id} />
                <input type="hidden" name="type" value="INCOME" />
                <button
                  type="submit"
                  className="text-destructive hover:text-destructive/80 text-sm"
                >
                  Hapus
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
