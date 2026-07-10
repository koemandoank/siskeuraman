# Panduan Instalasi SISKEURAMAN

Panduan lengkap untuk menginstal dan mengatur aplikasi SISKEURAMAN.

## 📋 Prasyarat

Sebelum memulai instalasi, pastikan Anda memiliki:

1. **Akun Google** - Untuk akses Google Sheets dan Apps Script
2. **Browser modern** - Chrome, Firefox, Edge, atau Safari
3. **Koneksi internet** - Diperlukan untuk Google Apps Script

## 📥 Langkah 1: Persiapan Google Cloud

### Buat Spreadsheet Database

1. Buka [Google Sheets](https://sheets.google.com)
2. Klik **Blank spreadsheet** atau **+** untuk membuat baru
3. Beri nama spreadsheet: `SISKEURAMAN Database`
4. **Catat Spreadsheet ID** dari URL:
   ```
   URL: https://docs.google.com/spreadsheets/d/1ABC123xyz.../edit
   
   Spreadsheet ID: 1ABC123xyz...
   ```
   
   Spreadsheet ID adalah string antara `/d/` dan `/edit`.

### Atur Izin Spreadsheet

1. Klik tombol **Share** di kanan atas
2. Pada "Share with people and groups":
   - Pastikan **Anyone with the link** dapat **Viewer**
3. Klik **Done**

## 📝 Langkah 2: Buat Project Apps Script

### Buat Project Baru

1. Buka [Google Apps Script](https://script.google.com)
2. Klik **New project**
3. Beri nama project: `SISKEURAMAN`
4. **Catat Script ID** dari URL project:
   ```
   URL: https://script.google.com/home/projects/1ABC123xyz.../edit
   
   Script ID: 1ABC123xyz...
   ```

## 📁 Langkah 3: Upload Source Code

### 3.1. Setup File HTML

1. Di project Apps Script, klik **Add a file** → **HTML**
2. Beri nama file, contoh: `login`
3. Copy content dari `html/login.html` ke file tersebut
4. Ulangi untuk semua file HTML yang ada di folder `html/`

### 3.2. Setup File CSS dan JS dalam HTML

Karena Apps Script tidak mendukung folder untuk HTML, kita perlu:

1. Buat file HTML baru untuk setiap halaman
2. Sisipkan CSS langsung di dalam tag `<style>` di file HTML
3. Sisipkan JavaScript langsung di dalam tag `<script>` di file HTML

### 3.3. Setup File Apps Script

1. Hapus file `Code.gs` default
2. Klik **Add a file** → **Script**
3. Beri nama `config`
4. Copy content dari `apps-script/config.gs`
5. Ulangi untuk semua file `.gs` yang ada

### Struktur yang Benar

```
SISKEURAMAN (Project)
├── config.gs           (dari apps-script/config.gs)
├── Code.gs            (dari apps-script/Code.gs)
├── Auth.gs            (dari apps-script/Auth.gs)
├── Database.gs       (dari apps-script/Database.gs)
├── Income.gs          (dari apps-script/Income.gs)
├── Expense.gs        (dari apps-script/Expense.gs)
├── Wallet.gs          (dari apps-script/Wallet.gs)
├── Transfer.gs        (dari apps-script/Transfer.gs)
├── Bills.gs          (dari apps-script/Bills.gs)
├── Reports.gs         (dari apps-script/Reports.gs)
├── Utility.gs        (dari apps-script/Utility.gs)
├── Validation.gs     (dari apps-script/Validation.gs)
├── Email.gs          (dari apps-script/Email.gs)
├── Notification.gs    (dari apps-script/Notification.gs)
├── Backup.gs         (dari apps-script/Backup.gs)
├── API.gs            (dari apps-script/API.gs)
│
├── login.html        (dari html/login.html - dengan CSS/JS inline)
├── dashboard.html     (dari html/dashboard.html - dengan CSS/JS inline)
├── income.html       (dari html/income.html - dengan CSS/JS inline)
├── expense.html      (dari html/expense.html - dengan CSS/JS inline)
├── wallet.html        (dari html/wallet.html - dengan CSS/JS inline)
├── transfer.html     (dari html/transfer.html - dengan CSS/JS inline)
├── bills.html        (dari html/bills.html - dengan CSS/JS inline)
├── saving.html       (dari html/saving.html - dengan CSS/JS inline)
├── goals.html        (dari html/goals.html - dengan CSS/JS inline)
├── debt.html         (dari html/debt.html - dengan CSS/JS inline)
├── receivable.html   (dari html/receivable.html - dengan CSS/JS inline)
├── investment.html    (dari html/investment.html - dengan CSS/JS inline)
├── assets.html       (dari html/assets.html - dengan CSS/JS inline)
├── report.html       (dari html/report.html - dengan CSS/JS inline)
├── charts.html       (dari html/charts.html - dengan CSS/JS inline)
├── calendar.html     (dari html/calendar.html - dengan CSS/JS inline)
├── users.html        (dari html/users.html - dengan CSS/JS inline)
├── backup.html       (dari html/backup.html - dengan CSS/JS inline)
├── logs.html         (dari html/logs.html - dengan CSS/JS inline)
├── category.html     (dari html/category.html - dengan CSS/JS inline)
└── settings.html     (dari html/settings.html - dengan CSS/JS inline)
```

## ⚙️ Langkah 4: Konfigurasi

### 4.1. Update config.gs

Buka file `config.gs` dan update:

```javascript
const CONFIG = {
  // ...
  
  // PASTIKAN GANTI DENGAN SPREADSHEET ID ANDA
  SPREADSHEET_ID: 'MASUKKAN_SPREADSHEET_ID_ANDA_DISINI',
  
  // Folder ID untuk upload (opsional)
  DRIVE_FOLDER_ID: '',
  
  // URL Web App (diisi setelah deploy)
  WEB_APP_URL: '',
  
  // ...
};
```

### 4.2. Update Konfigurasi Email (Opsional)

Jika ingin menggunakan fitur email:

```javascript
EMAIL: {
  ENABLED: true,
  FROM_NAME: 'SISKEURAMAN',
  // Tambahkan konfigurasi SMTP jika diperlukan
}
```

## 🗄️ Langkah 5: Initialize Database

### 5.1. Jalankan Fungsi Initialize

1. Di editor Apps Script, pilih fungsi `initializeDatabase` dari dropdown
2. Klik **Run**
3. Berikan izin yang diminta:
   - Klik **Review permissions**
   - Pilih akun Google
   - Klik **Advanced** → **Go to SISKEURAMAN (unsafe)**
   - Klik **Allow**

### 5.2. Verifikasi Database

1. Buka Google Spreadsheet yang sudah dibuat
2. Pastikan semua sheet sudah terbuat:
   - ✅ Users
   - ✅ Income
   - ✅ Expense
   - ✅ Wallet
   - ✅ Transfer
   - ✅ Category
   - ✅ SubCategory
   - ✅ Saving
   - ✅ Goals
   - ✅ Debt
   - ✅ Receivable
   - ✅ Investment
   - ✅ Assets
   - ✅ Bills
   - ✅ Reminder
   - ✅ Logs
   - ✅ Settings
   - ✅ Backup

### 5.3. Verifikasi User Default

1. Buka sheet **Users**
2. Pastikan ada user admin default:
   - Username: `admin`
   - Password: `admin123`

## 🌐 Langkah 6: Deploy Web App

### 6.1. Deploy

1. Klik **Deploy** → **New deployment**
2. Klik ⚙️ di sebelah "Select type" → pilih **Web app**
3. Isi konfigurasi:
   - **Description**: `SISKEURAMAN v1.0.0`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Klik **Deploy**
5. Klik **Authorize access** dan berikan izin
6. Copy **Web app URL**

### 6.2. Update config.gs

1. Buka `config.gs`
2. Update `WEB_APP_URL` dengan URL dari langkah sebelumnya
3. Klik **Deploy** → **Manage deployments**
4. Klik ✏️ di sebelah deployment aktif
5. Pilih versi baru dan klik **Deploy**

## ✅ Langkah 7: Verifikasi Instalasi

### 7.1. Test Login

1. Buka Web App URL di browser
2. Login dengan:
   - Username: `admin`
   - Password: `admin123`
3. Pastikan bisa masuk ke dashboard

### 7.2. Test Fitur Dasar

1. ✅ Tambah pemasukan
2. ✅ Tambah pengeluaran
3. ✅ Tambah dompet
4. ✅ Lihat dashboard
5. ✅ Lihat laporan

### 7.3. Test Upload

Jika ada fitur upload lampiran:
1. Pastikan folder **SISKEURAMAN_Uploads** terbuat di Google Drive
2. Test upload file foto

## 🔧 Troubleshooting

### Error: "Authorization required"

**Penyebab**: Fungsi memerlukan otorisasi

**Solusi**:
1. Jalankan fungsi `initializeDatabase` sekali
2. Ikuti instruksi otorisasi
3. Refresh halaman

### Error: "Spreadsheet not found"

**Penyebab**: Spreadsheet ID salah atau belum dishare

**Solusi**:
1. Cek Spreadsheet ID di `config.gs`
2. Pastikan spreadsheet di-share dengan "Anyone with link"
3. Pastikan akun Google yang sama digunakan

### Error: "Exception: You do not have permission"

**Penyebab**: Script belum diotorisasi atau user tidak punya akses

**Solusi**:
1. Hapus deployment lama
2. Buat deployment baru
3. Pastikan "Who has access" = "Anyone"

### Blank Page Setelah Login

**Penyebab**: Error JavaScript atau file HTML tidak ditemukan

**Solusi**:
1. Buka Console browser (F12)
2. Cek error message
3. Pastikan semua file HTML sudah diupload

### CSS/JS Tidak Loading

**Penyebab**: File CSS/JS tidak disisipkan dengan benar

**Solusi**:
1. Sisipkan semua CSS dalam tag `<style>` di HTML
2. Sisipkan semua JS dalam tag `<script>` di HTML

## 📱 Setup Mobile

Aplikasi sudah responsive, tapi untuk pengalaman terbaik:

1. Buka Web App URL di mobile browser
2. Simpan ke Home Screen (Add to Home Screen)
3. Buka dari Home Screen shortcut

## 🔐 Keamanan

### Langkah Keamanan yang Direkomendasikan

1. **Ganti password default**
   - Login sebagai admin
   - Buka Settings → Ubah Password

2. **Batasi akses spreadsheet**
   - Hanya berikan akses ke akun yang diperlukan
   - Hapus akses "Anyone" jika tidak perlu

3. **Regular backup**
   - Aktifkan auto backup
   - Simpan backup secara berkala

## 📞 Need Help?

Jika masih mengalami masalah:

1. Cek [Troubleshooting Guide](./TROUBLESHOOTING.md)
2. Cek [API Documentation](./API.md)
3. Buat issue di repository

---

**Next**: [Deployment Guide](./DEPLOYMENT.md)
