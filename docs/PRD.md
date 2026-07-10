# PRD — Product Requirement Document

**Aplikasi**: SIKARA (Sistem Keuangan Keluarga)
**Versi**: 1.0
**Platform**: Web Application
**Hosting**: Vercel
**Database**: Supabase PostgreSQL
**Framework**: Next.js 15 + TypeScript

---

## 1. Latar Belakang

SIKARA adalah aplikasi keuangan keluarga yang dirancang untuk membantu seluruh anggota keluarga mencatat, mengelola, dan menganalisis kondisi keuangan secara terpusat. Aplikasi harus mudah digunakan oleh pengguna tanpa latar belakang akuntansi, namun tetap menyediakan laporan dan analisis yang lengkap.

---

## 2. Tujuan

- Mencatat seluruh pemasukan dan pengeluaran keluarga
- Mengetahui posisi keuangan secara real-time
- Mengontrol anggaran keluarga
- Mengelola tabungan dan target keuangan
- Mengingatkan tagihan yang akan jatuh tempo
- Menyediakan laporan yang mudah dipahami
- Menjadi pusat informasi keuangan keluarga

---

## 3. Target Pengguna

| Role | Deskripsi |
|------|-----------|
| **Administrator** | Mengelola seluruh sistem, pengguna, pengaturan, backup |
| **Ayah** | Mengelola transaksi, melihat laporan, menyetujui transaksi besar |
| **Ibu** | Mengelola transaksi harian, belanja, tagihan, tabungan |
| **Anak** | Mencatat uang saku, tabungan pribadi, melihat data sendiri |

---

## 4. Ruang Lingkup

- Dashboard
- Pemasukan (Income)
- Pengeluaran (Expense)
- Kategori (Category)
- Dompet (Wallet)
- Transfer
- Tagihan (Bills)
- Tabungan (Savings)
- Target Keuangan (Goals)
- Hutang (Debt)
- Piutang (Receivables)
- Investasi (Investment)
- Aset (Asset)
- Laporan (Reports)
- Grafik (Charts)
- Pengaturan (Settings)
- Audit Log
- Backup & Restore

---

## 5. Functional Requirements

### Authentication
- Login, Logout, Session Management, RBAC, Reset Password

### Dashboard
- Total Saldo, Pemasukan, Pengeluaran, Cash Flow
- Grafik Bulanan/Tahunan
- Pengeluaran/Kategori Terbesar
- Tagihan Mendatang
- Progress Target & Tabungan
- 10 Transaksi Terakhir

### Pemasukan & Pengeluaran
- CRUD + Upload Bukti + Filter + Search + Export
- Field: Tanggal, No. Transaksi, Kategori, Dompet, Nominal, Keterangan, Lampiran

### Dompet
- Kas, Rekening Bank, E-Wallet
- Saldo awal + saldo berjalan + riwayat mutasi

### Fitur lain
- Transfer antar dompet, Tagihan + jadwal, Tabungan + target, Investasi, Aset, Hutang/Piutang, Laporan (PDF/Excel)

---

## 6. Hak Akses

| Modul | Admin | Ayah | Ibu | Anak |
|-------|:-----:|:----:|:---:|:----:|
| Dashboard | ✔ | ✔ | ✔ | ✔ |
| Pemasukan | ✔ | ✔ | ✔ | Data sendiri |
| Pengeluaran | ✔ | ✔ | ✔ | Data sendiri |
| Dompet | ✔ | ✔ | Lihat | Lihat |
| Transfer | ✔ | ✔ | ✔ | ✖ |
| Tagihan | ✔ | ✔ | ✔ | ✖ |
| Tabungan | ✔ | ✔ | ✔ | ✔ |
| Target | ✔ | ✔ | ✔ | Lihat |
| Investasi | ✔ | ✔ | Lihat | ✖ |
| Aset | ✔ | ✔ | Lihat | ✖ |
| Pengguna | ✔ | ✖ | ✖ | ✖ |
| Pengaturan | ✔ | ✖ | ✖ | ✖ |
| Audit Log | ✔ | ✖ | ✖ | ✖ |

---

## 7. Non Functional Requirements

- Responsive, Mobile Friendly, Cepat, Aman
- Mudah digunakan dan dikembangkan
- Modular, Reusable, Production Ready

---

## 8. Acceptance Criteria

- Seluruh modul CRUD berfungsi
- Hak akses sesuai role
- Dashboard real-time, saldo konsisten
- Tidak ada error TypeScript
- Build Next.js sukses
- Deploy ke Vercel berhasil
- Laporan bisa diexport
- Antarmuka konsisten di semua perangkat
