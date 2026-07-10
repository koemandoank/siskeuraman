# 🎯 Panduan Deploy SISKEURAMAN - Quick Start

## 📋 Ringkasan

- **Spreadsheet ID**: `1mb3ODbIz6e9AqnP3UCPb-YgUcbB9XHP0UC_12EhkLTw`
- **Status**: Spreadsheet sudah siap digunakan
- **File siap deploy**: Ada di folder `deployment/`

## 🚀 Langkah Deploy (5 Menit)

### Langkah 1: Buka Google Apps Script
Buka [Google Apps Script](https://script.google.com) dan buat project baru bernama **SISKEURAMAN**

### Langkah 2: Upload File GS (Server-side)

1. Hapus `Code.gs` default
2. Buat file baru (Add a file → Script):
   - `config.gs` - Copy isi dari `deployment/apps-script/config.gs`
   - `Code.gs` - Copy isi dari `deployment/apps-script/Code.gs`
   - `Auth.gs` - Copy isi dari `deployment/apps-script/Auth.gs`
   - `Database.gs` - Copy isi dari `deployment/apps-script/Database.gs`
   - `Income.gs` - Copy isi dari `deployment/apps-script/Income.gs`
   - `Expense.gs` - Copy isi dari `deployment/apps-script/Expense.gs`
   - `Wallet.gs` - Copy isi dari `deployment/apps-script/Wallet.gs`
   - `Transfer.gs` - Copy isi dari `deployment/apps-script/Transfer.gs`
   - `Bills.gs` - Copy isi dari `deployment/apps-script/Bills.gs`
   - `Reports.gs` - Copy isi dari `deployment/apps-script/Reports.gs`
   - `Utility.gs` - Copy isi dari `deployment/apps-script/Utility.gs`
   - `Validation.gs` - Copy isi dari `deployment/apps-script/Validation.gs`
   - `Email.gs` - Copy isi dari `deployment/apps-script/Email.gs`
   - `Notification.gs` - Copy isi dari `deployment/apps-script/Notification.gs`
   - `Backup.gs` - Copy isi dari `deployment/apps-script/Backup.gs`
   - `API.gs` - Copy isi dari `deployment/apps-script/API.gs`

### Langkah 3: Upload File HTML

1. Add a file → HTML:
   - `login.html` - Copy isi dari `deployment/html/login.html`
   - `dashboard.html` - Copy isi dari `deployment/html/dashboard.html`

### Langkah 4: Initialize Database

1. Di dropdown fungsi, pilih `initializeDatabase`
2. Klik **Run** (▶️)
3. Berikan izin yang diminta
4. Cek spreadsheet - seharusnya sudah ada 18 sheet baru

### Langkah 5: Deploy Web App

1. Klik **Deploy** → **New deployment**
2. Klik ⚙️ → pilih **Web app**
3. Konfigurasi:
   - **Description**: SISKEURAMAN v1.0.0
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Klik **Deploy**
5. Copy URL Web App

## 🔐 Default Login

```
Username: admin
Password: admin123
```

## ✅ Verifikasi

Setelah login, Anda seharusnya melihat:
- ✅ Dashboard dengan ringkasan saldo
- ✅ Menu navigasi di sidebar
- ✅ Tombol Tambah di header
- ✅ Grafik Cash Flow dan Kategori

## 🛠️ Troubleshooting

### Error: Spreadsheet not found
- Pastikan `SPREADSHEET_ID` di `config.gs` sudah benar:
  ```
  SPREADSHEET_ID: '1mb3ODbIz6e9AqnP3UCPb-YgUcbB9XHP0UC_12EhkLTw'
  ```

### Blank page setelah login
- Buka Console browser (F12) untuk lihat error
- Pastikan semua file HTML sudah diupload dengan benar

### Error authorization
- Jalankan fungsi `initializeDatabase` sekali
- Berikan izin saat diminta

## 📞 Dukungan

Jika ada masalah, cek dokumentasi lengkap di:
- `documentation/README.md`
- `documentation/INSTALLATION.md`
- `documentation/DEPLOYMENT.md`
- `documentation/API.md`

---

**Happy Deploying! 🚀**
