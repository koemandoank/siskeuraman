# ROADMAP.md

# SISKEURAMAN Development Roadmap

## Project

Sistem Keuangan Keluarga Pak Maman

Version 1.0

Target Platform

Next.js 15 + Supabase + Vercel

---

# Development Strategy

Pengembangan menggunakan pendekatan bertahap (Sprint Based Development).

Prinsip:

* Satu sprint menghasilkan fitur yang siap digunakan.
* Tidak melanjutkan sprint berikutnya sebelum sprint saat ini selesai dan tervalidasi.
* Seluruh fitur harus memiliki dokumentasi dan pengujian.

---

# Sprint 0 — Project Foundation

## Tujuan

Membangun fondasi proyek.

### Deliverables

* Repository GitHub
* Next.js 15
* TypeScript
* Tailwind CSS
* shadcn/ui
* Prisma ORM
* Supabase
* Environment Variables
* ESLint
* Prettier
* Husky (opsional)
* Struktur folder sesuai ARCHITECTURE.md
* Konfigurasi dasar aplikasi

### Acceptance Criteria

* Project berhasil dijalankan secara lokal.
* Build berhasil tanpa error.
* Terhubung ke Supabase.

---

# Sprint 1 — Authentication & Layout

## Tujuan

Membangun autentikasi dan kerangka aplikasi.

### Deliverables

* Login
* Logout
* Session
* Middleware
* RBAC
* Dashboard Layout
* Sidebar
* Navbar
* Footer
* Theme Switch
* Profile Menu
* Notifikasi dasar

### Acceptance Criteria

* Pengguna dapat login.
* Role diterapkan dengan benar.
* Halaman terlindungi oleh middleware.

---

# Sprint 2 — Dashboard

## Tujuan

Menyediakan ringkasan kondisi keuangan.

### Deliverables

* KPI Cards
* Cash Flow
* Grafik Bulanan
* Grafik Tahunan
* Ringkasan Dompet
* Tagihan Mendatang
* Target Keuangan
* Progress Tabungan
* Aktivitas Terbaru
* Quick Actions

### Acceptance Criteria

* Dashboard menampilkan data real-time.
* Semua widget responsif.

---

# Sprint 3 — Master Data

## Deliverables

* Pengguna
* Role
* Kategori
* Dompet
* Pengaturan

### Acceptance Criteria

* CRUD lengkap.
* Validasi berjalan.
* Audit Log aktif.

---

# Sprint 4 — Income Management

## Deliverables

* CRUD Pemasukan
* Upload Bukti
* Filter
* Search
* Sorting
* Pagination
* Export

### Acceptance Criteria

* Saldo dompet bertambah otomatis.
* Dashboard diperbarui secara otomatis.
* Audit Log tercatat.

---

# Sprint 5 — Expense Management

## Deliverables

* CRUD Pengeluaran
* Upload Nota
* Filter
* Search
* Export

### Acceptance Criteria

* Saldo dompet berkurang otomatis.
* Validasi saldo.
* Audit Log aktif.

---

# Sprint 6 — Wallet & Transfer

## Deliverables

* CRUD Dompet
* Transfer Antar Dompet
* Riwayat Transfer
* Rekonsiliasi Saldo

### Acceptance Criteria

* Transfer menggunakan transaksi database.
* Saldo selalu konsisten.

---

# Sprint 7 — Bills

## Deliverables

* CRUD Tagihan
* Jadwal Jatuh Tempo
* Reminder
* Pembayaran Tagihan

### Acceptance Criteria

* Tagihan dapat dibayar.
* Pengeluaran dibuat otomatis.
* Notifikasi muncul sesuai jadwal.

---

# Sprint 8 — Savings & Financial Goals

## Deliverables

* Tabungan
* Target Keuangan
* Progress
* Setoran
* Penarikan

### Acceptance Criteria

* Progress dihitung otomatis.
* Dashboard diperbarui.

---

# Sprint 9 — Assets & Investments

## Deliverables

* CRUD Aset
* CRUD Investasi
* Perhitungan Nilai
* ROI

### Acceptance Criteria

* Nilai aset dan investasi dapat dipantau.

---

# Sprint 10 — Debt & Receivables

## Deliverables

* Hutang
* Piutang
* Riwayat Pembayaran
* Status

### Acceptance Criteria

* Sisa hutang/piutang dihitung otomatis.

---

# Sprint 11 — Reports

## Deliverables

* Laporan Harian
* Mingguan
* Bulanan
* Tahunan
* Custom
* Export PDF
* Export Excel
* Print

### Acceptance Criteria

* Seluruh laporan akurat.
* Filter berfungsi.

---

# Sprint 12 — Charts & Analytics

## Deliverables

* Pie Chart
* Line Chart
* Bar Chart
* Cash Flow
* Income vs Expense
* Analisis Kategori

### Acceptance Criteria

* Grafik interaktif.
* Data sesuai laporan.

---

# Sprint 13 — Notifications

## Deliverables

* Notification Center
* Reminder
* Email Notification
* Status Notifikasi

### Acceptance Criteria

* Pengguna menerima notifikasi yang relevan.

---

# Sprint 14 — Audit & Backup

## Deliverables

* Audit Log
* Backup
* Restore
* Activity History

### Acceptance Criteria

* Seluruh aktivitas penting tercatat.
* Backup dan restore berhasil.

---

# Sprint 15 — Optimization

## Deliverables

* Optimasi Query
* Lazy Loading
* Dynamic Import
* Image Optimization
* Cache
* SEO Dasar

### Acceptance Criteria

* Build sukses.
* Performa meningkat.
* Tidak ada error utama.

---

# Sprint 16 — Production Release

## Deliverables

* Deployment ke Vercel
* Konfigurasi Domain
* Pengujian Produksi
* Dokumentasi Akhir

### Acceptance Criteria

* Aplikasi siap digunakan.

---

# Backlog (Future Features)

Fitur berikut tidak menjadi target versi 1.0, tetapi dipertimbangkan untuk pengembangan selanjutnya:

* Budget Planner
* Multi Family Account
* Multi Currency
* Multi Language
* Progressive Web App (PWA)
* Offline Mode
* AI Financial Insight
* OCR Scan Receipt
* WhatsApp Notification
* Telegram Notification
* Google Calendar Integration
* Impor Mutasi Bank
* Sinkronisasi Rekening (jika tersedia API)
* Dashboard AI
* Analisis Prediktif Pengeluaran
* Target Anggaran Otomatis
* Widget Homescreen
* Integrasi QRIS (jika tersedia)

---

# Definition of Done (DoD)

Setiap sprint dianggap selesai jika:

* Semua requirement sprint terpenuhi.
* Tidak ada error TypeScript.
* Build berhasil.
* Tidak ada error ESLint.
* CRUD berjalan normal.
* Hak akses sesuai role.
* Dokumentasi diperbarui.
* Audit Log berjalan.
* UI responsif.
* Kode mengikuti ARCHITECTURE.md dan CONTRIBUTING.md.
* Perubahan telah diuji secara manual.

---

# Development Rules

Selama pengembangan:

1. Jangan melompati sprint.
2. Selesaikan satu sprint sebelum memulai sprint berikutnya.
3. Jangan mengubah struktur database tanpa memperbarui DATABASE.md.
4. Jangan menambahkan endpoint tanpa memperbarui API.md.
5. Jangan membuat komponen baru jika komponen reusable sudah tersedia.
6. Pastikan seluruh perubahan tetap sesuai dengan PRD.md.
7. Selalu prioritaskan kestabilan aplikasi dibanding penambahan fitur baru.

---

# Final Goal

Target akhir SISKEURAMAN adalah menjadi aplikasi manajemen keuangan keluarga yang:

* Modern
* Aman
* Cepat
* Mudah digunakan
* Responsif
* Mudah dikembangkan
* Siap diproduksi
* Memiliki dokumentasi lengkap
* Memiliki arsitektur yang dapat berkembang menjadi aplikasi SaaS di masa depan
