import type { Metadata } from "next";
import { getCurrentUser } from "@/features/auth/services/get-current-user";
import { ROLE_LABEL } from "@/constants/navigation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wallet, ArrowDownCircle, ArrowUpCircle, PiggyBank } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard — SISKEURAMAN",
};

const PLACEHOLDER_CARDS = [
  { label: "Saldo Total", icon: Wallet },
  { label: "Pemasukan Bulan Ini", icon: ArrowDownCircle },
  { label: "Pengeluaran Bulan Ini", icon: ArrowUpCircle },
  { label: "Progress Tabungan", icon: PiggyBank },
];

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Selamat datang, {user?.fullName}
        </h1>
        <p className="text-sm text-muted-foreground">
          {user ? ROLE_LABEL[user.role] : ""} — berikut ringkasan keuangan
          keluarga Pak Maman.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PLACEHOLDER_CARDS.map((card) => (
          <Card key={card.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardDescription>{card.label}</CardDescription>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardTitle className="px-6 pb-4 text-2xl">
              Rp 0
            </CardTitle>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ringkasan &amp; Grafik</CardTitle>
          <CardDescription>
            KPI lengkap, grafik cash flow, dan transaksi terakhir akan
            tersedia pada Sprint 2 — Dashboard.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
