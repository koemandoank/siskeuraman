# Changelog

## Sprint 6 — Transaksi (Pemasukan & Pengeluaran)

- Prisma schema: model `Transaction` (INCOME/EXPENSE)
- Transaction Server Actions: create + delete (dengan update saldo wallet via Prisma transaction)
- Halaman Pemasukan: form + daftar + hapus
- Halaman Pengeluaran: form + daftar + hapus
- Sidebar: link ke halaman pemasukan & pengeluaran (active state fix)
- Dashboard: KPI total pemasukan/pengeluaran + transaksi terbaru
- Validasi saldo cukup untuk pengeluaran
- Update wallet balance otomatis saat tambah/hapus transaksi

## Sprint 5 — Dashboard KPI

- KPI Cards: Total Saldo, Dompet Aktif, Jumlah Kategori
- Quick Actions: kelola kategori, dompet, catat pemasukan/pengeluaran
- Ringkasan Dompet: daftar dompet + saldo di dashboard
- Enhanced empty state keluarga (buat/gabung dari dashboard)
- Welcome message dengan nama user

## Sprint 4 — Layout Dashboard

- Theme provider + ThemeToggle (light/dark/system)
- Sidebar dengan navigasi (Dashboard, Keluarga, Kategori, Dompet, dll)
- Navbar dengan theme toggle
- Dashboard layout (sidebar kiri + navbar atas + konten)
- Zustand store untuk theme
- Hapus header/navbar individual dari halaman, pindah ke shared layout

## Sprint 3 — Master Data

- Install dependency: lucide-react, recharts, tanstack-table, react-hook-form, zod, zustand
- Prisma schema: model `Category`, `Wallet`, `Setting`
- CRUD Kategori (pemasukan/pengeluaran) + halaman
- CRUD Dompet (cash/bank/e-wallet) + saldo + halaman
- Halaman Settings (mata uang, zona waktu, bahasa)
- Helper `getCurrentFamilyMember`
- Update dokumentasi (README, PRD, ARCHITECTURE, DATABASE, API, UIUX, dll) mengacu referensi

## Sprint 2 — Manajemen Keluarga

- Prisma schema: model `Family`, `FamilyMember` (relasi many-to-many Profile ↔ Family)
- Server Actions: createFamily, joinFamily, removeMember
- Dashboard: daftar keluarga user + form buat/gabung keluarga
- Halaman detail keluarga: daftar anggota + hapus anggota (admin only)
- Kode undangan unik per keluarga (cuid)

## Sprint 1 — Auth

- Prisma schema: model `Profile` (id, email, name, role)
- Middleware: route protection + session refresh
- Server Actions: login, register, logout
- Halaman Login (useActionState)
- Halaman Register (useActionState)
- Auth callback route
- Dashboard page (protected)
- Supabase SSR middleware client

## Sprint 0 — Setup

- Init Next.js 15 + TypeScript + App Router
- Init Tailwind CSS v4 + PostCSS
- Init shadcn/ui (base-nova, Tailwind v4 compatible)
- Init Prisma ORM + Supabase PostgreSQL adapter
- Init Supabase Auth client (browser, server, admin)
- Fix ESLint config for Next.js 15 flat config
- Init git repo and push to GitHub

## Dokumentasi

- Update seluruh docs/ mengacu referensi SISKEURAMAN
