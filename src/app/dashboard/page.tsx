import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { createFamily, joinFamily } from "@/features/family/actions";
import Link from "next/link";
import {
  Wallet,
  Tags,
  Users,
  PiggyBank,
  Receipt,
  Plus,
  ArrowRight,
} from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const memberships = await prisma.familyMember.findMany({
    where: { profileId: user.id },
    include: { family: true },
  });

  const familyIds = memberships.map((m) => m.familyId);

  const [walletAgg, walletCount, incomeAgg, expenseAgg, recentTransactions] =
    await Promise.all([
      prisma.wallet.aggregate({
        _sum: { balance: true },
        where: { familyId: { in: familyIds }, isActive: true },
      }),
      prisma.wallet.count({
        where: { familyId: { in: familyIds }, isActive: true },
      }),

      prisma.transaction.aggregate({
        _sum: { amount: true },
        where: { familyId: { in: familyIds }, type: "INCOME" },
      }),
      prisma.transaction.aggregate({
        _sum: { amount: true },
        where: { familyId: { in: familyIds }, type: "EXPENSE" },
      }),
      prisma.transaction.findMany({
        where: { familyId: { in: familyIds } },
        include: { wallet: true, category: true },
        orderBy: { transactionDate: "desc" },
        take: 5,
      }),
    ]);

  const wallets = await prisma.wallet.findMany({
    where: { familyId: { in: familyIds }, isActive: true },
    orderBy: { balance: "desc" },
  });

  const totalBalance = Number(walletAgg._sum.balance || 0);
  const totalIncome = Number(incomeAgg._sum.amount || 0);
  const totalExpense = Number(expenseAgg._sum.amount || 0);

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4 pt-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground text-sm">
          Selamat datang, {user.user_metadata?.name || user.email}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border-border rounded-lg border p-4">
          <div className="text-muted-foreground mb-1 flex items-center gap-2 text-sm">
            <Wallet className="size-4" />
            Total Saldo
          </div>
          <p className="text-2xl font-bold">
            Rp {totalBalance.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="border-border rounded-lg border p-4">
          <div className="mb-1 flex items-center gap-2 text-sm text-green-600">
            <PiggyBank className="size-4" />
            Total Pemasukan
          </div>
          <p className="text-2xl font-bold text-green-600">
            Rp {totalIncome.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="border-border rounded-lg border p-4">
          <div className="mb-1 flex items-center gap-2 text-sm text-red-600">
            <Receipt className="size-4" />
            Total Pengeluaran
          </div>
          <p className="text-2xl font-bold text-red-600">
            Rp {totalExpense.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="border-border rounded-lg border p-4">
          <div className="text-muted-foreground mb-1 flex items-center gap-2 text-sm">
            <Wallet className="size-4" />
            Dompet Aktif
          </div>
          <p className="text-2xl font-bold">{walletCount}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <QuickAction
          href="/dashboard/income"
          icon={PiggyBank}
          label="Catat Pemasukan"
        />
        <QuickAction
          href="/dashboard/expense"
          icon={Receipt}
          label="Catat Pengeluaran"
        />
        <QuickAction
          href="/dashboard/categories"
          icon={Tags}
          label="Kelola Kategori"
        />
        <QuickAction
          href="/dashboard/wallets"
          icon={Wallet}
          label="Kelola Dompet"
        />
      </div>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Ringkasan Dompet</h3>
          <Link
            href="/dashboard/wallets"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm"
          >
            Lihat semua <ArrowRight className="size-3" />
          </Link>
        </div>
        {wallets.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            Belum ada dompet. Buat dompet terlebih dahulu.
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {wallets.map((w) => {
              const typeLabel = { CASH: "Tunai", BANK: "Bank", E_WALLET: "E-Wallet" }[w.type];
              return (
                <div
                  key={w.id}
                  className="border-border flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: w.color }}
                    />
                    <div>
                      <p className="font-medium">{w.name}</p>
                      <p className="text-muted-foreground text-xs">{typeLabel}</p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    Rp {Number(w.balance).toLocaleString("id-ID")}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {recentTransactions.length > 0 && (
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Transaksi Terbaru</h3>
            <div className="flex gap-3">
              <Link
                href="/dashboard/income"
                className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm"
              >
                Pemasukan <ArrowRight className="size-3" />
              </Link>
              <Link
                href="/dashboard/expense"
                className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm"
              >
                Pengeluaran <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            {recentTransactions.map((t) => (
              <div
                key={t.id}
                className="border-border flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      t.type === "INCOME" ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium">
                      {t.type === "INCOME" ? "Pemasukan" : "Pengeluaran"} — Rp{" "}
                      {Number(t.amount).toLocaleString("id-ID")}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {t.category.name} · {t.wallet.name}
                      {t.description ? ` · ${t.description}` : ""}
                    </p>
                  </div>
                </div>
                <span className="text-muted-foreground text-xs">
                  {new Date(t.transactionDate).toLocaleDateString("id-ID")}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Keluarga Saya</h3>
          <Link
            href="/dashboard/families"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm"
          >
            Lihat semua <ArrowRight className="size-3" />
          </Link>
        </div>
        {memberships.length === 0 ? (
          <div className="border-border rounded-lg border p-6 text-center">
            <Users className="text-muted-foreground mx-auto mb-2 size-8" />
            <p className="text-muted-foreground mb-4 text-sm">
              Belum bergabung dengan keluarga mana pun.
            </p>
            <div className="flex justify-center gap-3">
              <details className="group">
                <summary className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex cursor-pointer items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium">
                  <Plus className="size-4" /> Buat Keluarga
                </summary>
                <div className="bg-card border-border absolute z-10 mt-2 rounded-lg border p-3 shadow-lg">
                  <form action={createFamily} className="flex gap-2">
                    <input
                      name="name"
                      placeholder="Nama keluarga"
                      required
                      className="border-input bg-background h-9 rounded-md border px-3 text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center rounded-md px-3 text-sm font-medium"
                    >
                      Buat
                    </button>
                  </form>
                </div>
              </details>
              <details className="group">
                <summary className="border-border hover:bg-accent inline-flex cursor-pointer items-center gap-1 rounded-md border px-3 py-1.5 text-sm font-medium">
                  Gabung Keluarga
                </summary>
                <div className="bg-card border-border absolute z-10 mt-2 rounded-lg border p-3 shadow-lg">
                  <form action={joinFamily} className="flex gap-2">
                    <input
                      name="inviteCode"
                      placeholder="Kode undangan"
                      required
                      className="border-input bg-background h-9 rounded-md border px-3 text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center rounded-md px-3 text-sm font-medium"
                    >
                      Gabung
                    </button>
                  </form>
                </div>
              </details>
            </div>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {memberships.map((m) => (
              <Link
                key={m.id}
                href={`/dashboard/families/${m.family.id}`}
                className="border-border bg-card hover:bg-accent rounded-lg border p-4 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">{m.family.name}</p>
                  <span className="text-muted-foreground text-xs">
                    {m.role === "ADMIN" ? "Admin" : "Anggota"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function QuickAction({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="border-border hover:bg-accent flex items-center gap-3 rounded-lg border p-3 transition-colors"
    >
      <Icon className="text-muted-foreground size-5" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
