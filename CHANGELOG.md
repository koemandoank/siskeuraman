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

* Sprint 0 — Project Foundation: Next.js 15 + TypeScript + Tailwind CSS 3 +
  shadcn/ui (base-nova, komponen inti), struktur folder ARCHITECTURE.md
  (`features/*` 15 modul), Prisma schema lengkap (20 model DATABASE.md),
  Prisma client singleton, Supabase client browser/server, middleware dasar,
  seed skeleton, ESLint + Prettier. Koneksi ke project Supabase asli
  (ap-southeast-1) — schema di-push via `prisma db push`, seed 4 user
  (satu per role) berhasil.
* Sprint 1 — Authentication & Layout: Login/Logout via Supabase Auth
  (Server Actions + `useActionState`), session check (`getCurrentUser`,
  cached per request) + middleware redirect otomatis, RBAC dasar (menu
  sidebar difilter per role), layout aplikasi (Sidebar collapsible,
  Navbar dengan theme toggle & user menu, Footer, route group `(app)`),
  theme switch light/dark/system (`next-themes`), halaman dashboard awal
  (KPI placeholder — data asli menyusul Sprint 2).

## Changed

* Belum ada.

## Fixed

* Regresi konfigurasi Tailwind (sempat ter-revert ke v4 oleh proses lain,
  menyebabkan build Vercel gagal) — dikembalikan ke v3 + lockfile
  di-regenerate.

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
