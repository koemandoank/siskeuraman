# CONTRIBUTING.md

# Contributing Guide

Selamat datang di proyek **SISKEURAMAN (Sistem Keuangan Keluarga Pak Maman)**.

Dokumen ini berisi standar pengembangan yang wajib dipatuhi oleh seluruh kontributor, baik manusia maupun AI Coding Assistant.

---

# Tujuan

* Menjaga kualitas kode.
* Menjaga konsistensi struktur proyek.
* Mempermudah pemeliharaan aplikasi.
* Mengurangi bug.
* Menghindari duplikasi kode.
* Memastikan aplikasi siap production.

---

# Tech Stack

Framework:

* Next.js 15 (App Router)

Language:

* TypeScript

Database:

* Supabase PostgreSQL

ORM:

* Prisma

Authentication:

* Supabase Auth

Styling:

* Tailwind CSS

UI Component:

* shadcn/ui

Validation:

* Zod

Form:

* React Hook Form

State:

* Zustand

Chart:

* Recharts

Deployment:

* Vercel

---

# Development Principles

Ikuti prinsip berikut:

* SOLID
* DRY
* KISS
* Clean Code
* Clean Architecture
* Feature Based Structure
* Modular Programming
* Reusable Component
* Mobile First
* Server First

---

# Before Writing Code

Sebelum membuat kode:

1. Baca README.md.
2. Baca PRD.md.
3. Baca DATABASE.md.
4. Baca ARCHITECTURE.md.
5. Pastikan requirement telah dipahami.
6. Jangan mengubah requirement tanpa persetujuan.

---

# Folder Rules

Jangan membuat folder baru tanpa alasan yang jelas.

Gunakan struktur yang telah ditentukan.

Semua fitur harus berada di dalam folder **features**.

Komponen umum harus berada di **components**.

Utility harus berada di **utils**.

Library eksternal harus dibungkus di dalam folder **lib**.

---

# Component Rules

Gunakan komponen reusable.

Jangan menulis komponen yang sama lebih dari satu kali.

Jika sebuah komponen dapat digunakan ulang, pindahkan ke folder **components**.

Komponen harus memiliki satu tanggung jawab utama (Single Responsibility Principle).

---

# Business Logic

Jangan menulis business logic di dalam komponen UI.

Business logic harus dipisahkan ke:

* services
* server actions
* lib
* utils

---

# Database Rules

Seluruh akses database menggunakan Prisma.

Jangan membuat query SQL langsung di komponen.

Gunakan transaction jika lebih dari satu tabel diperbarui.

Seluruh perubahan penting wajib dicatat ke tabel activity_logs.

---

# API Rules

Gunakan:

* Server Actions untuk operasi internal.
* Route Handlers untuk endpoint publik atau integrasi.

Semua request harus:

* divalidasi dengan Zod,
* memeriksa autentikasi,
* memeriksa hak akses,
* menangani error dengan baik.

---

# Validation Rules

Semua input harus divalidasi.

Validasi dilakukan di:

* Client
* Server

Jangan mempercayai data dari client.

---

# UI Rules

Gunakan komponen shadcn/ui.

Semua halaman harus memiliki:

* Loading State
* Error State
* Empty State
* Success Feedback

Gunakan Toast untuk notifikasi.

Gunakan Dialog untuk konfirmasi.

---

# Styling Rules

Gunakan Tailwind CSS.

Jangan menggunakan inline style kecuali benar-benar diperlukan.

Gunakan design token dan utility class secara konsisten.

Dukung Light Mode dan Dark Mode.

---

# TypeScript Rules

Strict Mode wajib aktif.

Hindari penggunaan `any`.

Gunakan interface atau type yang jelas.

Semua fungsi harus memiliki tipe parameter dan nilai balik.

---

# Security Rules

Jangan pernah:

* Menyimpan password dalam bentuk plain text.
* Menyimpan secret di sisi client.
* Mengirim Service Role Key ke browser.
* Melewati proses validasi.
* Mematikan middleware keamanan tanpa alasan.

Gunakan:

* RBAC
* Environment Variables
* Input Sanitization
* Rate Limiting
* Audit Logging

---

# Performance Rules

Gunakan:

* Server Components secara default.
* Client Components hanya jika diperlukan.
* Lazy Loading.
* Dynamic Import.
* Pagination.
* Debounce pada pencarian.
* Optimasi query database.

---

# Naming Convention

Folder:

* kebab-case

File:

* kebab-case

Component:

* PascalCase

Variable:

* camelCase

Function:

* camelCase

Constant:

* UPPER_SNAKE_CASE

Database:

* snake_case

---

# Commit Convention

Gunakan format:

feat: fitur baru

fix: perbaikan bug

refactor: perbaikan struktur tanpa mengubah fungsi

style: perubahan tampilan atau format

docs: perubahan dokumentasi

test: penambahan atau perubahan pengujian

chore: tugas pemeliharaan

Contoh:

feat: add income module

fix: correct wallet balance calculation

docs: update deployment guide

---

# Pull Request Checklist

Sebelum menggabungkan perubahan, pastikan:

* Build berhasil.
* Tidak ada error TypeScript.
* Tidak ada error ESLint.
* Tidak ada warning penting.
* Semua fitur yang diubah telah diuji.
* Dokumentasi diperbarui jika diperlukan.

---

# Code Review Checklist

Pastikan:

* Tidak ada duplikasi kode.
* Penamaan konsisten.
* Struktur folder sesuai.
* Tidak ada dead code.
* Tidak ada komentar yang tidak relevan.
* Tidak ada hardcoded value yang seharusnya menjadi konfigurasi.
* Error ditangani dengan baik.
* Validasi lengkap.

---

# Testing

Setiap fitur baru harus diuji:

* Unit Test (jika tersedia)
* Integration Test
* Manual Testing

Pastikan:

* CRUD berjalan normal.
* Role berjalan sesuai hak akses.
* Dashboard menampilkan data yang benar.
* Perhitungan saldo akurat.
* Export dan import berfungsi.

---

# Documentation

Jika menambahkan:

* Modul baru
* API baru
* Tabel baru
* Fitur baru

Maka dokumentasi berikut harus diperbarui:

* PRD.md
* DATABASE.md
* API.md
* ROADMAP.md (jika relevan)

---

# AI Coding Rules

Jika proyek dikerjakan menggunakan AI:

* Jangan menghasilkan kode tanpa membaca dokumentasi proyek.
* Jangan mengubah arsitektur tanpa persetujuan.
* Jangan menghapus fitur yang sudah ada.
* Gunakan kembali komponen yang sudah tersedia sebelum membuat yang baru.
* Jika requirement tidak jelas, minta klarifikasi terlebih dahulu.
* Kerjakan satu modul hingga selesai dan tervalidasi sebelum berpindah ke modul berikutnya.
* Pastikan setiap perubahan tetap kompatibel dengan Vercel, Supabase, Prisma, dan Next.js 15.

---

# Project Goal

Target akhir proyek adalah menghasilkan aplikasi keuangan keluarga yang:

* Stabil
* Aman
* Cepat
* Mudah digunakan
* Mudah dikembangkan
* Siap diproduksi
* Memiliki kualitas setara aplikasi SaaS modern
* Menjadi fondasi untuk pengembangan fitur baru di masa depan tanpa perubahan besar pada arsitektur inti.
