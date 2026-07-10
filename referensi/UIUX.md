# UIUX.md

# User Interface & User Experience Guideline

## Project

**SISKEURAMAN**

Sistem Keuangan Keluarga Pak Maman

Version 1.0

---

# Design Philosophy

SISKEURAMAN harus memiliki tampilan yang:

* Modern
* Bersih
* Profesional
* Minimalis
* Cepat
* Mudah digunakan
* Konsisten
* Responsif
* Ramah untuk semua usia

Inspirasi desain:

* Notion
* Stripe Dashboard
* Vercel Dashboard
* Linear
* Google Workspace

Jangan meniru secara langsung, tetapi gunakan sebagai referensi gaya desain.

---

# Design Principles

* Mobile First
* Accessibility First
* Consistency
* Simplicity
* Readability
* Reusable Components
* Fast Interaction
* Minimal Click

---

# Color Palette

## Primary

Blue

#2563EB

---

## Success

Green

#16A34A

---

## Warning

Orange

#F59E0B

---

## Danger

Red

#DC2626

---

## Info

Sky

#0284C7

---

## Background Light

#F8FAFC

---

## Background Dark

#0F172A

---

## Card

Light

#FFFFFF

Dark

#1E293B

---

## Border

Light

#E2E8F0

Dark

#334155

---

# Typography

Font

Geist

Fallback

Inter

System Sans

---

## Heading

Bold

Large

---

## Body

Regular

Readable

---

## Caption

Small

Muted

---

# Border Radius

Small

8px

Medium

12px

Large

16px

---

# Shadow

Gunakan shadow yang halus.

Jangan menggunakan shadow berlebihan.

---

# Icons

Gunakan Lucide React.

Seluruh icon harus konsisten.

---

# Layout

Desktop

Sidebar kiri

Navbar atas

Content

Footer

---

Tablet

Sidebar dapat di-collapse.

---

Mobile

Bottom Navigation atau Drawer.

Sidebar berubah menjadi Slide Menu.

---

# Sidebar

Berisi:

Dashboard

Transaksi

Dompet

Tabungan

Tagihan

Laporan

Pengaturan

Logout

Sidebar harus dapat di-collapse.

---

# Navbar

Berisi:

Logo

Breadcrumb

Search

Notification

Theme Switch

User Menu

---

# Dashboard

Dashboard harus menampilkan:

KPI Cards

Chart

Recent Transactions

Upcoming Bills

Saving Progress

Financial Goals

Quick Actions

---

# KPI Card

Minimal berisi:

Icon

Title

Amount

Percentage

Trend

Gunakan warna sesuai status.

---

# Charts

Gunakan Recharts.

Jenis:

Bar

Line

Pie

Area

Donut

Semua chart responsif.

---

# Tables

Gunakan TanStack Table.

Harus memiliki:

Search

Filter

Sorting

Pagination

Column Visibility

Export

Sticky Header

Responsive

---

# Forms

Gunakan React Hook Form.

Seluruh field memiliki:

Label

Placeholder

Helper Text

Validation

Error Message

Required Indicator

---

# Buttons

Jenis:

Primary

Secondary

Outline

Ghost

Danger

Success

Loading

Disabled

Gunakan ukuran:

Small

Medium

Large

---

# Dialog

Gunakan Dialog untuk:

Delete Confirmation

Edit

Detail

Settings

---

# Drawer

Gunakan Drawer pada mobile.

---

# Toast

Gunakan Toast untuk:

Success

Error

Warning

Information

Posisi:

Top Right (Desktop)

Bottom (Mobile)

---

# Loading

Gunakan Skeleton.

Hindari spinner penuh kecuali operasi lama.

---

# Empty State

Semua halaman wajib memiliki Empty State.

Isi:

Icon

Judul

Deskripsi

Tombol aksi

---

# Error State

Gunakan pesan yang mudah dipahami.

Sediakan tombol Retry.

---

# Notifications

Notification Center berisi:

Unread

Read

Mark All Read

---

# Theme

Support:

Light

Dark

System

Tema disimpan pada preferensi pengguna.

---

# Accessibility

Minimal memenuhi WCAG 2.1 AA.

Gunakan:

* Kontras warna yang cukup
* Keyboard navigation
* Focus state
* ARIA label
* Screen reader friendly

---

# Responsive Breakpoints

Mobile

< 640px

Tablet

640px - 1023px

Desktop

> = 1024px

---

# Animation

Gunakan animasi ringan.

Contoh:

Fade

Slide

Scale

Duration maksimal 300ms.

Hindari animasi yang mengganggu.

---

# Financial Colors

Pemasukan

Hijau

Pengeluaran

Merah

Transfer

Biru

Tabungan

Ungu

Investasi

Emas

Tagihan

Oranye

---

# Page Standards

Setiap halaman wajib memiliki:

* Page Title
* Breadcrumb
* Search
* Filter
* Action Button
* Content
* Pagination
* Empty State
* Loading State
* Error State

---

# Dashboard Widgets

Widget yang tersedia:

* Total Saldo
* Total Pemasukan
* Total Pengeluaran
* Cash Flow
* Saldo Dompet
* Pengeluaran Terbesar
* Pemasukan Terbesar
* Tagihan Mendatang
* Target Keuangan
* Progress Tabungan
* Kalender Keuangan
* Grafik Bulanan
* Aktivitas Terbaru

---

# AI Design Rules

Saat menghasilkan UI:

* Gunakan komponen shadcn/ui terlebih dahulu sebelum membuat komponen baru.
* Jangan mencampur lebih dari dua gaya desain dalam satu halaman.
* Jaga konsistensi warna, spacing, dan tipografi.
* Prioritaskan kemudahan penggunaan dibanding dekorasi.
* Semua halaman harus konsisten dengan design system ini.
* Hindari penggunaan warna mencolok yang tidak memiliki makna.
* Pastikan tampilan optimal pada desktop, tablet, dan mobile.
* Jangan mengubah design system tanpa persetujuan.

---

# UX Goals

Pengguna harus dapat:

* Login dalam beberapa detik.
* Menambah transaksi kurang dari 30 detik.
* Menemukan laporan dengan maksimal tiga klik.
* Memahami kondisi keuangan keluarga hanya dengan melihat dashboard.
* Mengoperasikan aplikasi tanpa perlu membaca panduan khusus.

UI harus terasa ringan, cepat, profesional, dan memberikan pengalaman yang nyaman bagi seluruh anggota keluarga, baik yang terbiasa menggunakan teknologi maupun yang baru pertama kali menggunakan aplikasi keuangan.
