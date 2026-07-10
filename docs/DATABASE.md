# Database

**Engine**: PostgreSQL (Supabase)
**ORM**: Prisma 7

---

## Aturan Database

- UUID sebagai Primary Key
- Semua tabel memiliki `created_at` dan `updated_at`
- Gunakan soft delete (`deleted_at`) untuk data penting
- Index pada kolom yang sering digunakan untuk pencarian
- Nominal menggunakan Decimal
- Tanggal menggunakan TIMESTAMP WITH TIME ZONE
- Status menggunakan ENUM

---

## Entity Relationship

```
Profile ───┬── FamilyMember ─── Family
            ├── Wallet
            ├── Transaction (Income/Expense)
            ├── Saving
            ├── Goal
            ├── Bill
            ├── Asset
            ├── Investment
            ├── Debt
            ├── Receivable
            └── ActivityLog
```

---

## Model

### Profile
| Field | Type | Keterangan |
|-------|------|------------|
| id | UUID | PK, match Supabase Auth |
| email | String | Unique |
| name | String? | - |
| avatarUrl | String? | - |
| role | Role | ADMIN / MEMBER |
| createdAt | DateTime | - |
| updatedAt | DateTime | - |

### Family
| Field | Type | Keterangan |
|-------|------|------------|
| id | UUID | PK |
| name | String | - |
| inviteCode | String | Unique, untuk undangan |
| createdAt | DateTime | - |

### FamilyMember
| Field | Type | Keterangan |
|-------|------|------------|
| id | UUID | PK |
| profileId | UUID | FK → Profile |
| familyId | UUID | FK → Family |
| role | FamilyRole | ADMIN / MEMBER |

### Category
| Field | Type | Keterangan |
|-------|------|------------|
| id | UUID | PK |
| familyId | UUID | FK → Family |
| type | CategoryType | INCOME / EXPENSE |
| name | String | - |
| icon | String | - |
| color | String | - |
| isActive | Boolean | - |

### Wallet
| Field | Type | Keterangan |
|-------|------|------------|
| id | UUID | PK |
| familyId | UUID | FK → Family |
| name | String | - |
| type | WalletType | CASH / BANK / E_WALLET |
| balance | Decimal | - |
| icon | String | - |
| color | String | - |
| isActive | Boolean | - |

### Transaction
| Field | Type | Keterangan |
|-------|------|------------|
| id | UUID | PK |
| familyId | UUID | FK → Family |
| walletId | UUID | FK → Wallet |
| categoryId | UUID | FK → Category |
| profileId | UUID | FK → Profile (pencatat) |
| type | TransactionType | INCOME / EXPENSE |
| amount | Decimal | - |
| description | String? | - |
| transactionDate | DateTime | - |
| attachment | String? | URL ke Supabase Storage |

### Saving, Goal, Bill, Asset, Investment, Debt, Receivable, ActivityLog, Setting
— Mengikuti struktur serupa (lihat referensi lengkap di `referensi/DATABASE.md`)

---

## Enums

- **Role**: ADMIN, MEMBER
- **FamilyRole**: ADMIN, MEMBER
- **CategoryType**: INCOME, EXPENSE
- **WalletType**: CASH, BANK, E_WALLET
- **TransactionType**: INCOME, EXPENSE, TRANSFER

---

## Audit Rules

Semua perubahan data wajib mencatat: User, Tanggal, Module, Action, Data Lama, Data Baru.

---

## Index

Buat index pada: `transaction_date`, `wallet_id`, `category_id`, `created_by`, `owner_id`, `status`, `due_date`, `email`.
