# ARCHITECTURE.md

# System Architecture

## Project

**SISKEURAMAN (Sistem Keuangan Keluarga Pak Maman)**

Version : 1.0

Framework : Next.js 15 (App Router)

---

# 1. Architecture Principle

Aplikasi harus dibangun berdasarkan prinsip:

* Clean Architecture
* Feature Based Structure
* Modular Design
* Separation of Concerns
* SOLID
* DRY
* KISS
* Reusable Components
* Server First
* Mobile First
* Responsive Design
* Production Ready

Seluruh kode harus mudah dipelihara, mudah diuji, dan mudah dikembangkan.

---

# 2. Technology Stack

## Frontend

* Next.js 15 App Router
* React
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
* Prisma ORM

---

## Database

Supabase PostgreSQL

---

## Authentication

Supabase Auth

JWT

Role Based Access Control (RBAC)

---

## Storage

Supabase Storage

---

## Deployment

GitHub

↓

Vercel

↓

Supabase

---

# 3. Folder Structure

```text
src/

app/

components/

features/

hooks/

lib/

services/

store/

types/

utils/

constants/

middleware/

providers/

styles/

prisma/

public/

docs/
```

---

# 4. Feature Structure

Setiap fitur memiliki struktur yang konsisten.

```text
features/

dashboard/

income/

expense/

wallet/

transfer/

bill/

saving/

goal/

asset/

investment/

report/

setting/

user/
```

Masing-masing fitur memiliki:

```text
components/

actions/

schemas/

types/

services/

hooks/

constants/
```

---

# 5. Component Structure

Komponen dibagi menjadi:

UI Components

Layout Components

Feature Components

Shared Components

Reusable Components

Komponen tidak boleh bergantung langsung pada database.

---

# 6. Layout

Layout utama:

Guest Layout

Authentication Layout

Dashboard Layout

Dashboard Layout terdiri dari:

Navbar

Sidebar

Breadcrumb

Main Content

Footer

Notification Panel

---

# 7. Authentication Flow

User Login

↓

Supabase Auth

↓

Session

↓

Middleware

↓

Role Validation

↓

Dashboard

Jika session habis:

Redirect ke Login.

---

# 8. Authorization

Gunakan Role Based Access Control.

Role:

Administrator

Ayah

Ibu

Anak

Seluruh halaman harus memverifikasi role sebelum ditampilkan.

---

# 9. Middleware

Middleware bertugas:

Memeriksa login.

Memeriksa role.

Redirect jika belum login.

Redirect jika role tidak sesuai.

Logging request.

---

# 10. State Management

Gunakan Zustand.

Digunakan hanya untuk:

Theme

Sidebar

User Preference

Notification

Data transaksi tetap berasal dari server.

---

# 11. Form Handling

Gunakan:

React Hook Form

*

Zod

Validasi dilakukan:

Client Side

Server Side

---

# 12. Data Flow

User

↓

Form

↓

Validation

↓

Server Action

↓

Prisma

↓

Supabase

↓

Response

↓

Toast

↓

Refresh Data

---

# 13. CRUD Flow

Create

↓

Validation

↓

Insert

↓

Audit Log

↓

Refresh Dashboard

Update

↓

Validation

↓

Update

↓

Audit Log

↓

Refresh

Delete

↓

Soft Delete

↓

Audit Log

↓

Refresh

---

# 14. Error Handling

Semua proses wajib memiliki:

Loading

Success

Error

Retry

Toast Notification

Error tidak boleh langsung ditampilkan dari database.

Gunakan pesan yang mudah dipahami pengguna.

---

# 15. Logging

Semua aktivitas penting dicatat.

Contoh:

Login

Logout

Tambah Data

Edit

Hapus

Restore

Export

Import

Backup

---

# 16. Notification

Gunakan Toast.

Gunakan Dialog Confirmation.

Gunakan Alert untuk kesalahan fatal.

---

# 17. Upload

Semua file disimpan ke Supabase Storage.

Folder:

receipts/

avatars/

documents/

exports/

backup/

Validasi:

Ukuran maksimum

Jenis file

Nama file unik

---

# 18. Performance

Gunakan:

Lazy Loading

Dynamic Import

Pagination

Debounce Search

Caching

Image Optimization

Server Component sebanyak mungkin.

---

# 19. Security

Semua request harus divalidasi.

Gunakan:

Middleware

RBAC

Environment Variable

Server Validation

Zod

Escape HTML

Sanitize Input

CSRF Protection

Rate Limiting

Audit Log

Tidak boleh menyimpan Secret Key di Client.

---

# 20. UI Standard

Gunakan:

Card

Dialog

Drawer

Popover

Dropdown

Badge

Tabs

Accordion

Skeleton

Loading Spinner

Empty State

Toast

Semua mengikuti shadcn/ui.

---

# 21. Coding Standard

Gunakan TypeScript.

Tidak menggunakan any kecuali benar-benar diperlukan.

Gunakan async/await.

Gunakan named export.

Gunakan const.

Gunakan Arrow Function.

Gunakan Server Actions untuk operasi CRUD jika memungkinkan.

Pisahkan logic bisnis dari komponen UI.

---

# 22. Naming Convention

Folder

kebab-case

Component

PascalCase

Function

camelCase

Variable

camelCase

Constant

UPPER_CASE

Database Table

snake_case

Column

snake_case

---

# 23. Environment Variables

Minimal:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

SUPABASE_SERVICE_ROLE_KEY

DATABASE_URL

DIRECT_URL

NEXTAUTH_SECRET (jika digunakan)

APP_NAME

APP_URL

---

# 24. Deployment Flow

Developer

↓

GitHub

↓

Vercel Build

↓

Prisma Migration

↓

Supabase

↓

Production

---

# 25. Code Quality Rules

Seluruh kode harus:

* Modular
* Reusable
* Mudah dibaca
* Mudah diuji
* Tidak ada duplikasi
* Tidak ada dead code
* Tidak ada hardcode
* Memiliki komentar seperlunya
* Mengikuti ESLint dan Prettier

---

# 26. AI Development Rules

Saat menghasilkan kode, AI wajib:

1. Membaca PRD.md terlebih dahulu.
2. Mengikuti DATABASE.md.
3. Mengikuti ARCHITECTURE.md.
4. Menggunakan struktur folder yang telah ditentukan.
5. Tidak membuat struktur baru tanpa alasan yang jelas.
6. Menyelesaikan satu modul hingga lengkap sebelum berpindah ke modul berikutnya.
7. Memastikan setiap modul dapat dijalankan sebelum melanjutkan.
8. Menghasilkan kode yang siap di-deploy ke Vercel tanpa perubahan besar.

---

# 27. Future Architecture

Struktur harus mudah dikembangkan untuk mendukung:

* Progressive Web App (PWA)
* Mobile App (React Native)
* Multi Family Account
* Multi Currency
* AI Financial Assistant
* OCR Scan Receipt
* WhatsApp Notification
* Email Notification
* Google Calendar Integration
* Open Banking Integration (jika tersedia)
* Multi Language
* Plugin atau modul tambahan tanpa mengubah arsitektur inti.
