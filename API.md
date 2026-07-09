# API.md

# API Specification

Project : SISKEURAMAN

Version : 1.0

Architecture :

Next.js 15 App Router

Server Actions + Route Handlers

Supabase

Prisma

---

# API Standard

Semua endpoint harus:

* Menggunakan HTTPS.
* Mengembalikan JSON.
* Menggunakan HTTP Status Code yang benar.
* Menggunakan validasi Zod.
* Menggunakan autentikasi Supabase.
* Menggunakan RBAC.
* Menggunakan Audit Log.

Response Format:

```json
{
  "success": true,
  "message": "Success",
  "data": {}
}
```

Error Format:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": []
}
```

---

# Authentication

## Login

POST

/api/auth/login

Body

* email
* password

Response

* Access Token
* Refresh Token
* User Profile

---

## Logout

POST

/api/auth/logout

---

## Current User

GET

/api/auth/me

---

# Dashboard

GET

/api/dashboard

Return

* Total Balance
* Total Income
* Total Expense
* Monthly Income
* Monthly Expense
* Cash Flow
* Saving Progress
* Goal Progress
* Upcoming Bills
* Recent Transactions

---

# Users

GET

/api/users

GET

/api/users/{id}

POST

/api/users

PUT

/api/users/{id}

DELETE

/api/users/{id}

Role:

Administrator

---

# Categories

GET

/api/categories

POST

/api/categories

PUT

/api/categories/{id}

DELETE

/api/categories/{id}

---

# Wallets

GET

/api/wallets

GET

/api/wallets/{id}

POST

/api/wallets

PUT

/api/wallets/{id}

DELETE

/api/wallets/{id}

Business Rules:

* Saldo tidak boleh negatif.
* Nama dompet harus unik per pengguna.

---

# Income

GET

/api/income

GET

/api/income/{id}

POST

/api/income

PUT

/api/income/{id}

DELETE

/api/income/{id}

Filter:

* Date
* Wallet
* Category
* User
* Amount

Sorting:

* Date
* Amount

Pagination:

* Page
* Limit

Business Rules:

* Nominal > 0
* Wallet wajib dipilih
* Category wajib dipilih
* Otomatis menambah saldo dompet
* Mencatat Audit Log

---

# Expense

GET

/api/expense

GET

/api/expense/{id}

POST

/api/expense

PUT

/api/expense/{id}

DELETE

/api/expense/{id}

Business Rules:

* Nominal > 0
* Saldo mencukupi
* Otomatis mengurangi saldo dompet
* Mencatat Audit Log

---

# Transfers

GET

/api/transfers

POST

/api/transfers

PUT

/api/transfers/{id}

DELETE

/api/transfers/{id}

Business Rules:

* Dompet asal ≠ dompet tujuan
* Saldo cukup
* Mengurangi saldo asal
* Menambah saldo tujuan
* Semua perubahan dalam satu database transaction

---

# Bills

GET

/api/bills

POST

/api/bills

PUT

/api/bills/{id}

DELETE

/api/bills/{id}

PATCH

/api/bills/{id}/pay

Business Rules:

* Status berubah menjadi Paid
* Membuat transaksi pengeluaran otomatis
* Mengurangi saldo dompet

---

# Savings

GET

/api/savings

POST

/api/savings

PUT

/api/savings/{id}

DELETE

/api/savings/{id}

POST

/api/savings/{id}/deposit

POST

/api/savings/{id}/withdraw

Business Rules:

* Saldo dompet diperbarui otomatis
* Progress target dihitung otomatis

---

# Goals

GET

/api/goals

POST

/api/goals

PUT

/api/goals/{id}

DELETE

/api/goals/{id}

---

# Assets

GET

/api/assets

POST

/api/assets

PUT

/api/assets/{id}

DELETE

/api/assets/{id}

---

# Investments

GET

/api/investments

POST

/api/investments

PUT

/api/investments/{id}

DELETE

/api/investments/{id}

---

# Debts

GET

/api/debts

POST

/api/debts

PUT

/api/debts/{id}

DELETE

/api/debts/{id}

POST

/api/debts/{id}/payment

---

# Receivables

GET

/api/receivables

POST

/api/receivables

PUT

/api/receivables/{id}

DELETE

/api/receivables/{id}

POST

/api/receivables/{id}/receive

---

# Reports

GET

/api/reports/daily

GET

/api/reports/monthly

GET

/api/reports/yearly

GET

/api/reports/custom

Export

/api/reports/pdf

/api/reports/excel

---

# Upload

POST

/api/upload

Bucket:

* receipts
* avatars
* documents
* exports

Validation:

* JPG
* PNG
* PDF

Maximum:

5 MB

---

# Notifications

GET

/api/notifications

PATCH

/api/notifications/{id}/read

DELETE

/api/notifications/{id}

---

# Settings

GET

/api/settings

PUT

/api/settings

---

# Backup

POST

/api/backup

POST

/api/restore

Administrator Only

---

# Audit Logs

GET

/api/activity-logs

Administrator Only

---

# Error Code

200 Success

201 Created

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

429 Too Many Requests

500 Internal Server Error

---

# API Development Rules

* Gunakan Server Actions untuk operasi internal aplikasi jika memungkinkan.
* Gunakan Route Handlers untuk endpoint yang perlu diakses eksternal.
* Seluruh endpoint menggunakan validasi Zod.
* Seluruh operasi yang memengaruhi lebih dari satu tabel harus menggunakan Prisma Transaction.
* Seluruh perubahan penting wajib dicatat ke tabel `activity_logs`.
* Jangan pernah mengekspos Service Role Key ke sisi client.
* Semua endpoint harus memverifikasi autentikasi dan hak akses sebelum memproses permintaan.
