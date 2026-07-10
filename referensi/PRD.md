# PRD.md

# Product Requirement Document

## Project Information

**Project Name** : Sistem Keuangan Keluarga Pak Maman

**Application Name** : SISKEURAMAN

**Version** : 1.0

**Platform** : Web Application

**Hosting** : Vercel

**Database** : Supabase PostgreSQL

**Framework** : Next.js 15 + TypeScript

---

# 1. Latar Belakang

SISKEURAMAN adalah aplikasi keuangan keluarga yang dirancang untuk membantu seluruh anggota keluarga mencatat, mengelola, dan menganalisis kondisi keuangan secara terpusat.

Aplikasi harus mudah digunakan oleh pengguna yang tidak memiliki latar belakang akuntansi, namun tetap menyediakan laporan dan analisis yang lengkap.

---

# 2. Tujuan

* Mencatat seluruh pemasukan dan pengeluaran keluarga.
* Mengetahui posisi keuangan secara real-time.
* Mengontrol anggaran keluarga.
* Mengelola tabungan dan target keuangan.
* Mengingatkan tagihan yang akan jatuh tempo.
* Menyediakan laporan yang mudah dipahami.
* Menjadi pusat informasi keuangan keluarga.

---

# 3. Target Pengguna

### Administrator

Mengelola seluruh sistem, pengguna, pengaturan, dan backup.

### Ayah

Mengelola seluruh transaksi keluarga, melihat laporan, menyetujui transaksi besar.

### Ibu

Mengelola transaksi harian, belanja, tagihan, dan tabungan.

### Anak

Mencatat uang saku, tabungan pribadi, dan melihat data miliknya sendiri.

---

# 4. Ruang Lingkup

Aplikasi mencakup:

* Dashboard
* Pemasukan
* Pengeluaran
* Kategori
* Dompet
* Transfer
* Tagihan
* Tabungan
* Target Keuangan
* Hutang
* Piutang
* Investasi
* Aset
* Laporan
* Grafik
* Pengaturan
* Audit Log
* Backup

---

# 5. Functional Requirements

## Authentication

* Login
* Logout
* Session Management
* Role Based Access Control
* Reset Password

---

## Dashboard

Menampilkan:

* Total Saldo
* Total Pemasukan
* Total Pengeluaran
* Cash Flow
* Grafik Bulanan
* Grafik Tahunan
* Pengeluaran Terbesar
* Kategori Terbesar
* Tagihan Mendatang
* Progress Target Keuangan
* Progress Tabungan
* 10 Transaksi Terakhir

---

## Pemasukan

Fitur:

* Tambah
* Edit
* Hapus
* Detail
* Filter
* Search
* Upload Bukti
* Export

Field:

* Tanggal
* Nomor Transaksi
* Kategori
* Dompet
* Nominal
* Keterangan
* Lampiran

---

## Pengeluaran

Fitur:

* CRUD
* Upload Nota
* Filter
* Search
* Export

Field:

* Tanggal
* Nomor Transaksi
* Kategori
* Dompet
* Nominal
* Lokasi
* Keterangan
* Lampiran

---

## Dompet

Jenis:

* Kas
* Rekening Bank
* E-Wallet

Fitur:

* Saldo Awal
* Saldo Berjalan
* Riwayat Mutasi

---

## Transfer

* Antar Dompet
* Riwayat Transfer
* Validasi Saldo

---

## Tagihan

* Tambah Tagihan
* Jadwal Jatuh Tempo
* Status Pembayaran
* Pengingat

---

## Tabungan

* Target Nominal
* Progress
* Deadline
* Riwayat Setoran

---

## Target Keuangan

* Target
* Progress
* Deadline
* Persentase

---

## Investasi

Jenis:

* Emas
* Saham
* Reksa Dana
* Deposito
* Crypto
* Properti

---

## Aset

Jenis:

* Rumah
* Mobil
* Motor
* Tanah
* Elektronik
* Perhiasan

---

## Laporan

Laporan:

* Harian
* Mingguan
* Bulanan
* Tahunan
* Custom

Output:

* PDF
* Excel
* Print

---

## Audit Log

Mencatat:

* Login
* Logout
* Tambah Data
* Edit Data
* Hapus Data
* Restore Data
* Backup

---

# 6. Non Functional Requirements

* Responsive
* Mobile Friendly
* Cepat
* Aman
* Mudah digunakan
* Mudah dikembangkan
* Modular
* Reusable
* Production Ready

---

# 7. Hak Akses

| Modul       | Admin | Ayah |  Ibu  |     Anak     |
| ----------- | :---: | :--: | :---: | :----------: |
| Dashboard   |   ✔   |   ✔  |   ✔   |       ✔      |
| Pemasukan   |   ✔   |   ✔  |   ✔   | Data Sendiri |
| Pengeluaran |   ✔   |   ✔  |   ✔   | Data Sendiri |
| Dompet      |   ✔   |   ✔  | Lihat |     Lihat    |
| Transfer    |   ✔   |   ✔  |   ✔   |       ✖      |
| Tagihan     |   ✔   |   ✔  |   ✔   |       ✖      |
| Tabungan    |   ✔   |   ✔  |   ✔   |       ✔      |
| Target      |   ✔   |   ✔  |   ✔   |     Lihat    |
| Investasi   |   ✔   |   ✔  | Lihat |       ✖      |
| Aset        |   ✔   |   ✔  | Lihat |       ✖      |
| Pengguna    |   ✔   |   ✖  |   ✖   |       ✖      |
| Pengaturan  |   ✔   |   ✖  |   ✖   |       ✖      |
| Audit Log   |   ✔   |   ✖  |   ✖   |       ✖      |

---

# 8. KPI

* Waktu login < 2 detik
* Waktu buka dashboard < 3 detik
* Waktu simpan transaksi < 1 detik
* Error rate < 1%
* Uptime target 99%

---

# 9. Acceptance Criteria

Aplikasi dinyatakan selesai apabila:

* Seluruh modul CRUD berfungsi.
* Hak akses berjalan sesuai role.
* Dashboard menampilkan data secara real-time.
* Saldo selalu konsisten.
* Tidak terdapat error TypeScript.
* Lulus proses build Next.js.
* Berhasil di-deploy ke Vercel.
* Terhubung ke Supabase tanpa error.
* Seluruh laporan dapat diekspor.
* Antarmuka konsisten pada desktop, tablet, dan mobile.

---

# 10. Pengembangan Selanjutnya

Versi berikutnya akan menambahkan:

* Budget Planner
* AI Financial Insight
* OCR Scan Struk
* Sinkronisasi Google Calendar
* Notifikasi Email
* Progressive Web App (PWA)
* Multi Bahasa
* Impor Mutasi Bank
* Dashboard AI
* Analisis Prediksi Pengeluaran
