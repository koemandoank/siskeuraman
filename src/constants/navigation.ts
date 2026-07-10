import type { Role } from "@prisma/client";
import {
  LayoutDashboard,
  ArrowDownCircle,
  ArrowUpCircle,
  Wallet,
  ArrowLeftRight,
  Receipt,
  PiggyBank,
  Target,
  Landmark,
  TrendingUp,
  FileBarChart,
  Users,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  roles: Role[];
};

const ALL_ROLES: Role[] = ["ADMINISTRATOR", "AYAH", "IBU", "ANAK"];
const PARENTS_ONLY: Role[] = ["ADMINISTRATOR", "AYAH", "IBU"];

export const NAV_ITEMS: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard, roles: ALL_ROLES },
  { title: "Pemasukan", href: "/income", icon: ArrowDownCircle, roles: ALL_ROLES },
  { title: "Pengeluaran", href: "/expense", icon: ArrowUpCircle, roles: ALL_ROLES },
  { title: "Dompet", href: "/wallet", icon: Wallet, roles: ALL_ROLES },
  { title: "Transfer", href: "/transfer", icon: ArrowLeftRight, roles: PARENTS_ONLY },
  { title: "Tagihan", href: "/bill", icon: Receipt, roles: PARENTS_ONLY },
  { title: "Tabungan", href: "/saving", icon: PiggyBank, roles: ALL_ROLES },
  { title: "Target Keuangan", href: "/goal", icon: Target, roles: ALL_ROLES },
  { title: "Aset", href: "/asset", icon: Landmark, roles: PARENTS_ONLY },
  { title: "Investasi", href: "/investment", icon: TrendingUp, roles: PARENTS_ONLY },
  { title: "Laporan", href: "/report", icon: FileBarChart, roles: PARENTS_ONLY },
  { title: "Pengguna", href: "/user", icon: Users, roles: ["ADMINISTRATOR"] },
  { title: "Pengaturan", href: "/setting", icon: Settings, roles: ALL_ROLES },
];

export const ROLE_LABEL: Record<Role, string> = {
  ADMINISTRATOR: "Administrator",
  AYAH: "Ayah",
  IBU: "Ibu",
  ANAK: "Anak",
};
