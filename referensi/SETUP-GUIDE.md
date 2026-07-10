# 🎯 PANDUAN UPLOAD KE GOOGLE DRIVE & DEPLOY

## 📦 File yang Sudah Disiapkan

Folder `SISKEURAMAN` berisi semua file yang diperlukan untuk deploy.

## 🚀 Cara Upload ke Google Drive

### Opsi 1: Upload Manual (Paling Mudah)

1. **Buka Google Drive Anda**
   ```
   https://drive.google.com/drive/folders/1ekDRwo6XojXyZad-yGRwtAQRq8WVAjdF
   ```

2. **Klik "New"** → **Folder upload** → Pilih folder `SISKEURAMAN`
   - Upload semua file dari folder `SISKEURAMAN`
   - Atau drag & drop folder `SISKEURAMAN` ke Google Drive

3. **Buka folder yang diupload**
   - Folder `apps-script` → Copy semua file `.gs`
   - Folder `html` → Copy semua file `.html`

4. ** Buat Project di Google Apps Script**
   ```
   https://script.google.com
   ```
   - Klik **+ New project**
   - Beri nama: **SISKEURAMAN**
   
5. **Copy file ke project**
   - Hapus `Code.gs` default
   - Klik **+** → **File** → Paste semua file

6. **Setup Spreadsheet**
   - Buka spreadsheet Anda
   - Copy SPREADSHEET_ID dari URL
   - Update di `config.gs`

7. **Initialize Database**
   - Pilih fungsi `initializeDatabase`
   - Klik **Run** ▶️

8. **Deploy**
   - **Deploy** → **New deployment**
   - Pilih **Web app**
   - Set "Who has access" = **Anyone**
   - Klik **Deploy**

---

### Opsi 2: Menggunakan clasp (Command Line)

1. **Install clasp**
   ```bash
   npm install -g @google/clasp
   ```

2. **Login**
   ```bash
   clasp login
   ```

3. **Clone atau buat project**
   ```bash
   clasp create SISKEURAMAN
   ```

4. **Copy file**
   ```bash
   cp -r SISKEURAMAN/apps-script/* ./
   cp -r SISKEURAMAN/html/* ./
   ```

5. **Push ke Apps Script**
   ```bash
   clasp push
   ```

6. **Open di editor**
   ```bash
   clasp open
   ```

---

## 📋 Checklist Sebelum Deploy

- [ ] Spreadsheet ID sudah diupdate di `config.gs`
- [ ] User admin sudah dibuat (akan otomatis saat initialize)
- [ ] Izin spreadsheet sudah diberikan

## 🔐 Default Login

```
Username: admin
Password: admin123
```

## 📊 Struktur File

```
SISKEURAMAN/
├── apps-script/           # File server-side (Google Apps Script)
│   ├── config.gs         # ⚠️ Update SPREADSHEET_ID di sini!
│   ├── Code.gs           # Entry point
│   ├── Auth.gs          # Autentikasi
│   ├── Database.gs      # Database operations
│   ├── Income.gs        # Modul Income
│   ├── Expense.gs       # Modul Expense
│   ├── Wallet.gs        # Modul Wallet
│   ├── Transfer.gs      # Modul Transfer
│   ├── Bills.gs         # Modul Bills
│   ├── Reports.gs       # Laporan
│   ├── Utility.gs       # Helper functions
│   ├── Validation.gs   # Validasi
│   ├── Email.gs         # Email
│   ├── Notification.gs   # Notifikasi
│   ├── Backup.gs        # Backup
│   ├── API.gs           # API handlers
│   └── clasp.json       # Clasp config
│
├── html/                  # File client-side
│   ├── login.html       # Halaman login
│   └── dashboard.html   # Dashboard
│
├── documentation/         # Dokumentasi
│   ├── README.md
│   ├── INSTALLATION.md
│   ├── DEPLOYMENT.md
│   └── API.md
│
├── DEPLOYMENT-GUIDE.md  # Panduan deploy cepat
├── SETUP-GUIDE.md       # Panduan ini
└── README.md
```

## ⚠️ Penting

### 1. Update Spreadsheet ID

Buka `config.gs` dan update:
```javascript
SPREADSHEET_ID: '1mb3ODbIz6e9AqnP3UCPb-YgUcbB9XHP0UC_12EhkLTw',
```

### 2. Share Spreadsheet

Pastikan spreadsheet di-share dengan "Anyone with link" agar Apps Script bisa akses.

### 3. Initialize Database

Jalankan fungsi `initializeDatabase()` SEBELUM menggunakan aplikasi.

## 🆘 Troubleshooting

### Error: "Spreadsheet not found"
- Cek SPREADSHEET_ID di config.gs
- Pastikan spreadsheet sudah dishare

### Error: "Authorization required"
- Jalankan initializeDatabase() sekali
- Berikan izin saat diminta

### Blank Page
- Cek apakah semua file HTML sudah diupload
- Buka Console browser (F12) untuk lihat error

## ✅ Setelah Deploy Berhasil

1. Buka URL Web App
2. Login dengan `admin` / `admin123`
3. Dashboard akan tampil
4. Tambah transaksi pertama!

---

**Happy Deploying! 🚀**

Dibuat dengan ❤️ untuk Keluarga Indonesia
