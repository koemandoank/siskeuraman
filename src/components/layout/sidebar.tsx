"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wallet,
  Tags,
  PiggyBank,
  Receipt,
  FileText,
  Settings,
  Users,
  ArrowRightLeft,
  LogOut,
} from "lucide-react";
import { logout } from "@/features/auth/actions";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/families", label: "Keluarga", icon: Users },
  { href: "/dashboard/categories", label: "Kategori", icon: Tags },
  { href: "/dashboard/wallets", label: "Dompet", icon: Wallet },
  { href: "/dashboard/income", label: "Pemasukan", icon: PiggyBank },
  { href: "/dashboard/expense", label: "Pengeluaran", icon: Receipt },
  { href: "#", label: "Transfer", icon: ArrowRightLeft },
  { href: "#", label: "Laporan", icon: FileText },
  { href: "/dashboard/settings", label: "Pengaturan", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-r bg-card flex h-screen w-56 flex-col overflow-y-auto">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="text-lg font-bold">
          SIKARA
        </Link>
      </div>
      <nav className="flex-1 space-y-0.5 p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href !== "#" && pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t p-2">
        <form action={logout}>
          <button
            type="submit"
            className="text-muted-foreground hover:text-foreground flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors"
          >
            <LogOut className="size-4" />
            Keluar
          </button>
        </form>
      </div>
    </aside>
  );
}
