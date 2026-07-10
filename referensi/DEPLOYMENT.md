# DEPLOYMENT.md

# Deployment Guide

## Project

**SISKEURAMAN**

Sistem Keuangan Keluarga Pak Maman

Version 1.0

---

# Deployment Target

Source Code

↓

GitHub

↓

Vercel

↓

Supabase PostgreSQL

↓

Production

---

# Technology Stack

Framework

* Next.js 15

Language

* TypeScript

Package Manager

* npm

Hosting

* Vercel

Database

* Supabase PostgreSQL

ORM

* Prisma

Authentication

* Supabase Auth

Storage

* Supabase Storage

---

# Requirements

Pastikan telah memiliki akun:

* GitHub
* Vercel
* Supabase

Install:

* Node.js LTS (versi terbaru yang didukung)
* Git
* Visual Studio Code (opsional)
* Prisma CLI (akan terpasang melalui dependency proyek)

---

# Clone Repository

```bash
git clone <repository-url>

cd siskeuraman
```

---

# Install Dependency

```bash
npm install
```

---

# Environment Variables

Buat file:

.env.local

Isi:

```env
NEXT_PUBLIC_APP_NAME=SISKEURAMAN

NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

DATABASE_URL=

DIRECT_URL=
```

Jangan pernah commit file .env.

---

# Setup Supabase

Buat Project baru.

Aktifkan:

* Authentication
* Storage
* Database

Bucket yang harus dibuat:

avatars

receipts

documents

exports

backup

---

# Database

Generate Prisma Client

```bash
npx prisma generate
```

Migration

If your environment allows a shadow database and direct connections, use migrations:

```bash
npx prisma migrate dev
```

If your network or Supabase setup prevents shadow DB usage (e.g., IPv6-only hosts or pooler restrictions), the recommended alternative is to use `prisma db push` to synchronize the schema without creating migration history:

```bash
npm run db:push
```

Seed Database

```bash
npm run seed
```

Reset Database (Development)

If migrations are used:

```bash
npx prisma migrate reset
```

If you used `db push`, recreate schema manually or drop and `db push` again as needed.

Notes:
- `prisma db push` is suitable for development and when shadow DB is unavailable, but it does not create migration files. Create proper migrations once a shadow DB / direct DB access is available.
- Be cautious with `--accept-data-loss` when using db push in production.

---

# Local Development

Menjalankan project

```bash
npm run dev
```

Akses:

http://localhost:3000

---

# Build Production

```bash
npm run build
```

Jika build berhasil, lanjutkan deployment.

---

# Deploy to GitHub

Inisialisasi repository (jika belum ada)

```bash
git init
```

Commit

```bash
git add .

git commit -m "Initial Commit"
```

Push

```bash
git push origin main
```

---

# Deploy to Vercel

1. Login ke Vercel.
2. Import repository GitHub.
3. Pilih project SISKEURAMAN.
4. Tambahkan seluruh Environment Variables.
5. Jalankan deployment.
6. Tunggu hingga proses selesai.

---

# Environment Variables di Vercel

Tambahkan:

* NEXT_PUBLIC_APP_NAME
* NEXT_PUBLIC_APP_URL
* NEXT_PUBLIC_SUPABASE_URL
* NEXT_PUBLIC_SUPABASE_ANON_KEY
* SUPABASE_SERVICE_ROLE_KEY
* DATABASE_URL
* DIRECT_URL

Pastikan nilainya sesuai dengan project Supabase.

---

# Domain

Development

localhost

Preview

Vercel Preview URL

Production

Custom Domain (opsional)

---

# Authentication

Pastikan URL berikut telah didaftarkan pada Supabase Auth:

Development

http://localhost:3000

Preview

https://<preview>.vercel.app

Production

https://your-domain.com

---

# Storage

Pastikan bucket memiliki kebijakan akses (policy) yang sesuai.

Pisahkan bucket publik dan privat sesuai kebutuhan.

---

# Build Checklist

Sebelum deployment, pastikan:

* npm run build berhasil
* Tidak ada error TypeScript
* Tidak ada error ESLint
* Tidak ada environment variable yang kosong
* Prisma migration telah dijalankan (atau `prisma db push` jika shadow DB tidak tersedia)
* Seed data tersedia (opsional untuk development)

# Health check endpoint

A health endpoint tersedia di `/api/health`. Gunakan untuk verifikasi otomatis di Vercel atau monitoring:

- GET /api/health — mengembalikan JSON dengan status konektivitas DB dan apakah env vars penting tersedia.

Di Vercel, gunakan URL tersebut sebagai readiness/health check agar deployment gagal jika variabel penting tidak diset atau DB tidak dapat dijangkau.

---

# Backup

Backup meliputi:

* Database
* Storage
* Environment Variables (disimpan secara aman di luar repository)

Lakukan backup sebelum migration besar atau perubahan struktur database.

---

# Restore

Urutan restore:

1. Database
2. Storage
3. Environment Variables
4. Deploy ulang aplikasi jika diperlukan

---

# Monitoring

Gunakan:

* Vercel Logs
* Supabase Logs

Pantau:

* Error aplikasi
* Error database
* Performa query
* Penggunaan storage
* Penggunaan bandwidth

---

# Security Checklist

* HTTPS aktif
* Environment Variables tidak bocor
* Service Role Key hanya digunakan di server
* Row Level Security (RLS) aktif
* Rate Limiting diterapkan
* Input divalidasi dengan Zod
* Audit Log aktif

---

# Update Application

Setiap perubahan dilakukan melalui Git.

Alur:

Developer

↓

Commit

↓

Push

↓

GitHub

↓

Vercel Auto Deploy

---

# Rollback

Jika deployment gagal:

1. Pilih deployment sebelumnya di Vercel.
2. Lakukan rollback.
3. Perbaiki masalah pada branch development.
4. Deploy ulang setelah validasi.

---

# Production Checklist

Sebelum aplikasi digunakan:

* Semua modul CRUD telah diuji.
* Hak akses setiap role telah diverifikasi.
* Dashboard menampilkan data dengan benar.
* Export PDF dan Excel berfungsi.
* Upload file berhasil.
* Audit Log berjalan.
* Backup berhasil.
* Restore berhasil.
* Tidak ada data sensitif yang terekspos.
* Seluruh halaman responsif pada desktop, tablet, dan mobile.

---

# Maintenance

Lakukan secara berkala:

* Update dependency.
* Periksa log error.
* Optimasi query database.
* Backup database dan storage.
* Audit keamanan.
* Review performa aplikasi.
* Dokumentasikan perubahan pada ROADMAP.md dan README.md.

Deployment dianggap selesai apabila aplikasi dapat diakses melalui URL Vercel, seluruh modul berfungsi normal, terhubung ke Supabase, dan siap digunakan dalam lingkungan produksi.
