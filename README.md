# README.md

# 💰 SISKEURAMAN

## Sistem Keuangan Keluarga Pak Maman

SISKEURAMAN adalah aplikasi manajemen keuangan keluarga berbasis web yang modern, responsif, dan mudah digunakan. Aplikasi ini dirancang untuk membantu keluarga mencatat pemasukan, pengeluaran, tabungan, investasi, aset, tagihan, serta menyajikan laporan keuangan secara real-time.

Target utama aplikasi adalah menjadi sistem keuangan keluarga yang ringan, aman, dan dapat dikembangkan menjadi aplikasi SaaS di masa depan.

---

# Project Information

**Application Name**

SISKEURAMAN

**Full Name**

Sistem Keuangan Keluarga Pak Maman

**Version**

1.0.0

**Status**

Development

---

# Technology Stack

## Frontend

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide React
* Recharts
* TanStack Table
* React Hook Form
* Zod
* Zustand

---

## Backend

* Next.js Server Actions
* Route Handlers

---

## Database

* Supabase PostgreSQL
* Prisma ORM

---

## Authentication

* Supabase Auth
* JWT Session
* Role Based Access Control (RBAC)

---

## Storage

* Supabase Storage

---

## Deployment

* GitHub
* Vercel


---

# Main Features

* Dashboard
* Authentication
* User Management
* Wallet Management
* Income Management
* Expense Management
* Transfer
* Savings
* Financial Goals
* Bills
* Investments
* Assets
* Debt
* Receivables
* Reports
* Charts
* Notifications
* Audit Logs
* Backup & Restore
* Settings

---

# Project Structure

```text
SISKEURAMAN/

app/
components/
features/
hooks/
lib/
middleware/
providers/
services/
store/
types/
utils/
constants/
public/
prisma/
docs/

README.md
PROMPT.md
PRD.md
ARCHITECTURE.md
DATABASE.md
API.md
UIUX.md
DEPLOYMENT.md
ROADMAP.md
CONTRIBUTING.md
```


---

# Documentation

| File            | Description              |
| --------------- | ------------------------ |
| README.md       | Gambaran umum proyek     |
| PROMPT.md       | Instruksi utama untuk AI |
| PRD.md          | Kebutuhan aplikasi       |
| DATABASE.md     | Desain database          |
| ARCHITECTURE.md | Arsitektur sistem        |
| API.md          | Spesifikasi API          |
| UIUX.md         | Standar desain antarmuka |
| DEPLOYMENT.md   | Panduan deployment       |
| ROADMAP.md      | Rencana pengembangan     |
| CONTRIBUTING.md | Standar pengembangan     |

---

# AI Workflow

Sebelum membuat kode, AI wajib membaca dokumen dengan urutan berikut:

1. README.md
2. PROMPT.md
3. PRD.md
4. ARCHITECTURE.md
5. DATABASE.md
6. API.md
7. UIUX.md
8. CONTRIBUTING.md
9. DEPLOYMENT.md
10. ROADMAP.md

AI tidak boleh mengubah requirement tanpa persetujuan.

---

# Development Workflow

1. Analisis kebutuhan.
2. Rancang database.
3. Implementasi backend.
4. Implementasi frontend.
5. Integrasi modul.
6. Pengujian.
7. Dokumentasi.
8. Deployment.


---

# Environment Variables

```env
NEXT_PUBLIC_APP_NAME=SISKEURAMAN

NEXT_PUBLIC_APP_URL=

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

DATABASE_URL=

DIRECT_URL=
```

---

# Local Development

```bash
git clone <repository>

cd siskeuraman

npm install

cp .env.example .env.local

npm run dev
```

---

# Build

```bash
npm run build
```

---

# Production

Deploy menggunakan:

* GitHub
* Vercel
* Supabase

Setelah konfigurasi environment selesai, aplikasi harus dapat dijalankan tanpa perubahan kode tambahan.


---

# Coding Standards

Seluruh kode harus mengikuti:

* Clean Architecture
* SOLID
* DRY
* KISS
* TypeScript Strict Mode
* Feature Based Structure
* Reusable Components

---

# Security

Aplikasi wajib menerapkan:

* Authentication
* Authorization
* RBAC
* Server-side Validation
* Input Sanitization
* Rate Limiting
* Audit Logging
* Environment Variable Protection

---

# Performance

Target performa:

* Login < 2 detik
* Dashboard < 3 detik
* CRUD < 1 detik
* Optimasi query database
* Lazy Loading
* Dynamic Import
* Image Optimization
* Pagination

---

# Deployment Target

GitHub

↓

Vercel

↓

Supabase

↓

Production

---

# Future Development

Versi berikutnya akan mencakup:

* Progressive Web App (PWA)
* AI Financial Insight
* OCR Scan Receipt
* WhatsApp Notification
* Email Notification
* Google Calendar Integration
* Multi Currency
* Multi Language
* Family Sharing
* Multi Household
* Open Banking Integration (jika tersedia)

---

# License

Internal Project

SISKEURAMAN dikembangkan sebagai proyek manajemen keuangan keluarga dengan arsitektur modern yang siap dikembangkan menjadi aplikasi berskala lebih besar di masa depan.
