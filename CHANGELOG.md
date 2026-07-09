# CHANGELOG.md

# Changelog

Semua perubahan penting pada proyek **SISKEURAMAN** harus dicatat pada dokumen ini.

Dokumen ini mengikuti prinsip **Keep a Changelog** dan **Semantic Versioning**.

---

# Versioning

Format:

MAJOR.MINOR.PATCH

Contoh:

1.0.0

1.1.0

1.1.1

2.0.0

---

# Change Type

Gunakan kategori berikut:

Added

Changed

Fixed

Removed

Deprecated

Security

Performance

Documentation

Refactor

---

# [Unreleased]

## Added

* Sprint 0 — Project Foundation:
  * Scaffold Next.js 15 (App Router) + TypeScript + `src/` directory.
  * Tailwind CSS 3 + shadcn/ui (base-nova style, komponen inti: card, dialog,
    drawer, dropdown-menu, badge, tabs, accordion, skeleton, sonner, table,
    breadcrumb, sidebar, avatar, form, dll).
  * Struktur folder sesuai ARCHITECTURE.md: `features/*` (15 modul),
    `components`, `hooks`, `lib`, `services`, `store`, `types`, `constants`,
    `providers`, `middleware`.
  * Prisma schema lengkap (`prisma/schema.prisma`) mencakup seluruh tabel
    DATABASE.md: users, categories, wallets, income, expense, transfers,
    bills, savings, saving_transactions, goals, assets, investments, debts,
    receivables, notifications, activity_logs, settings.
  * Prisma client singleton (`src/lib/prisma.ts`).
  * Supabase client browser & server helper (`src/lib/supabase/*`).
  * Middleware dasar refresh session Supabase Auth (`src/middleware.ts`).
  * Prisma seed skeleton (`prisma/seed.ts`) — data user per role.
  * ESLint (flat config + FlatCompat), Prettier + prettier-plugin-tailwindcss.
  * `.env` / `.env.local` / `.env.example` dengan placeholder.

## Changed

* Belum ada.

## Fixed

* Belum ada.

---

# [1.0.0] - Initial Release

## Added

* Struktur proyek Next.js 15.
* Konfigurasi TypeScript.
* Tailwind CSS.
* shadcn/ui.
* Prisma ORM.
* Supabase PostgreSQL.
* Supabase Auth.
* Supabase Storage.
* Dashboard dasar.
* Login.
* Logout.
* Role Based Access Control.
* Middleware.
* Layout Dashboard.
* Sidebar.
* Navbar.
* Theme Switch.
* CRUD Dompet.
* CRUD Pemasukan.
* CRUD Pengeluaran.
* CRUD Kategori.
* CRUD Tagihan.
* CRUD Tabungan.
* CRUD Target Keuangan.
* CRUD Investasi.
* CRUD Aset.
* CRUD Hutang.
* CRUD Piutang.
* Dashboard KPI.
* Grafik.
* Audit Log.
* Backup.
* Restore.
* Export PDF.
* Export Excel.

---

## Security

* RBAC.
* Server Validation.
* Environment Variables.
* Row Level Security.
* Audit Log.

---

## Documentation

* README.md
* PROMPT.md
* PRD.md
* DATABASE.md
* ARCHITECTURE.md
* API.md
* UIUX.md
* DEPLOYMENT.md
* ROADMAP.md
* CONTRIBUTING.md

---

# Changelog Rules

Seluruh perubahan wajib dicatat.

Minimal meliputi:

* Nomor versi
* Tanggal
* Jenis perubahan
* Ringkasan perubahan

---

# Semantic Version Rules

MAJOR

Perubahan besar yang tidak kompatibel.

MINOR

Penambahan fitur baru.

PATCH

Perbaikan bug.

---

# Example

Version:

1.2.0

Added

* Budget Planner

Changed

* Dashboard lebih cepat.

Fixed

* Kesalahan perhitungan saldo.

Security

* Perbaikan validasi login.

Performance

* Optimasi query laporan.

Documentation

* Update API.md

---

# AI Rules

Setiap selesai mengembangkan fitur:

1. Update CHANGELOG.md.
2. Tambahkan versi.
3. Tambahkan tanggal.
4. Jelaskan perubahan secara singkat.
5. Jangan menghapus riwayat versi sebelumnya.

CHANGELOG.md menjadi sumber utama untuk mengetahui evolusi proyek.
