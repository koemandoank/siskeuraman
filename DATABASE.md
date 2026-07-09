# DATABASE.md

# Database Design Document

## Project

SISKEURAMAN

Sistem Keuangan Keluarga Pak Maman

Database Engine:

PostgreSQL (Supabase)

ORM:

Prisma

---

# Database Rules

* Menggunakan UUID sebagai Primary Key.
* Menggunakan Foreign Key pada setiap relasi.
* Seluruh tabel memiliki created_at dan updated_at.
* Gunakan soft delete (deleted_at) untuk data penting.
* Gunakan index pada kolom yang sering digunakan untuk pencarian.
* Seluruh nominal menggunakan Decimal(18,2).
* Semua tanggal menggunakan TIMESTAMP WITH TIME ZONE.
* Semua status menggunakan ENUM PostgreSQL.

---

# Entity Relationship

Users
│
├── Wallets
├── Income
├── Expense
├── Savings
├── Goals
├── Assets
├── Investments
├── Debts
├── Receivables
└── ActivityLogs

Wallets
│
├── Income
├── Expense
└── Transfers

Categories
│
├── Income
└── Expense

Bills
│
└── Categories

---

# Master Tables

## users

Menyimpan data pengguna.

Field:

* id
* full_name
* username
* email
* password_hash
* role
* phone
* avatar
* is_active
* last_login
* created_at
* updated_at

---

## roles

Field:

* id
* role_name
* description

Default:

Administrator

Ayah

Ibu

Anak

---

## categories

Field:

* id
* type (income / expense)
* name
* icon
* color
* description
* is_active

---

## wallets

Field:

* id
* owner_id
* wallet_name
* wallet_type
* account_number
* bank_name
* opening_balance
* current_balance
* color
* icon
* is_active

Wallet Type:

Cash

Bank

E-Wallet

Investment

---

# Transaction Tables

## income

Field:

* id
* transaction_number
* transaction_date
* category_id
* wallet_id
* amount
* description
* attachment
* created_by
* updated_by
* created_at
* updated_at

---

## expense

Field:

* id
* transaction_number
* transaction_date
* category_id
* wallet_id
* amount
* merchant
* location
* attachment
* description
* created_by
* updated_by
* created_at
* updated_at

---

## transfers

Field:

* id
* transfer_number
* from_wallet
* to_wallet
* amount
* transfer_date
* description
* created_by
* created_at

Business Rules:

* Saldo asal dikurangi.
* Saldo tujuan ditambah.
* Tidak boleh transfer ke dompet yang sama.
* Tidak boleh melebihi saldo.

---

# Savings

## savings

Field:

* id
* owner_id
* saving_name
* target_amount
* current_amount
* deadline
* description
* status
* created_at
* updated_at

---

## saving_transactions

Field:

* id
* saving_id
* wallet_id
* amount
* transaction_date
* note

---

# Financial Goals

## goals

Field:

* id
* owner_id
* title
* target_amount
* current_amount
* deadline
* priority
* status

---

# Bills

## bills

Field:

* id
* category
* bill_name
* amount
* due_date
* reminder_days
* is_paid
* paid_date
* wallet_id
* note

Recurring:

Daily

Weekly

Monthly

Yearly

---

# Assets

## assets

Field:

* id
* asset_name
* category
* purchase_price
* current_value
* purchase_date
* owner
* description

Categories:

House

Car

Motorcycle

Land

Electronics

Gold

Jewelry

Other

---

# Investments

## investments

Field:

* id
* investment_type
* investment_name
* purchase_date
* purchase_price
* current_value
* quantity
* roi
* note

Investment Type:

Gold

Stock

Crypto

Mutual Fund

Deposit

Property

---

# Debts

## debts

Field:

* id
* creditor_name
* amount
* remaining
* due_date
* interest
* status
* note

---

# Receivables

## receivables

Field:

* id
* debtor_name
* amount
* remaining
* due_date
* status
* note

---

# Notifications

## notifications

Field:

* id
* title
* message
* type
* user_id
* is_read
* created_at

---

# Activity Logs

## activity_logs

Field:

* id
* user_id
* module
* action
* record_id
* ip_address
* user_agent
* created_at

Actions:

Login

Logout

Create

Update

Delete

Restore

Export

Backup

Import

---

# Settings

## settings

Field:

* id
* company_name
* family_name
* logo
* currency
* timezone
* language
* theme
* backup_frequency

---

# File Storage

Semua file disimpan di Supabase Storage.

Bucket:

receipts

avatars

documents

backup

exports

---

# Enum

Role

Administrator

Ayah

Ibu

Anak

Wallet Type

Cash

Bank

EWallet

Investment

Transaction Type

Income

Expense

Transfer

Bill Status

Pending

Paid

Overdue

Goal Status

Planning

Progress

Completed

Cancelled

Saving Status

Active

Completed

Cancelled

Theme

Light

Dark

System

---

# Index

Buat index pada:

transaction_date

wallet_id

category_id

created_by

owner_id

status

due_date

created_at

username

email

---

# Audit Rules

Semua perubahan data wajib mencatat:

User

Tanggal

Jam

Data Lama

Data Baru

Module

Action

IP Address

Browser

---

# Backup Rules

Backup Database

Backup Storage

Backup Setting

Backup File

Backup Log

Mendukung restore sebagian atau seluruh data.

---

# Seed Data

Sediakan data awal:

* 4 Role
* 1 Administrator
* 1 Ayah
* 1 Ibu
* 1 Anak
* 10 Kategori Pemasukan
* 20 Kategori Pengeluaran
* 6 Dompet
* 100 Transaksi Dummy
* 10 Tagihan
* 5 Target Keuangan
* 5 Tabungan
* 10 Investasi
* 10 Aset

---

# Database Standards

* Seluruh relasi menggunakan Foreign Key.
* Tidak boleh ada data yatim (orphan records).
* Gunakan transaksi database (transaction) untuk proses yang memengaruhi lebih dari satu tabel.
* Terapkan Row Level Security (RLS) di Supabase sesuai role pengguna.
* Validasi dilakukan di sisi server sebelum data disimpan.
* Seluruh perubahan penting dicatat pada tabel activity_logs.
* Struktur database harus kompatibel dengan Prisma Migration dan Supabase SQL.
