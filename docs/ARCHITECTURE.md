# Architecture

## Prinsip Arsitektur

- **Clean Architecture** — Pemisahan concern yang jelas
- **Feature Based Structure** — Setiap fitur adalah modul mandiri
- **Server First** — Server Component sebanyak mungkin
- **Mobile First** — Responsive design
- **SOLID, DRY, KISS**

---

## Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Frontend | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| UI | shadcn/ui, Lucide React |
| State | Zustand (theme, sidebar, user preference) |
| Form | React Hook Form + Zod |
| Chart | Recharts |
| Table | TanStack Table |
| Backend | Server Actions + Route Handlers |
| Database | Supabase PostgreSQL + Prisma ORM |
| Auth | Supabase Auth + JWT + RBAC |
| Storage | Supabase Storage |
| Deploy | Vercel |

---

## Folder Structure

```
src/
├── app/                     # Next.js App Router
│   ├── (auth)/              # Guest layout (login/register)
│   ├── auth/callback        # Auth callback
│   ├── dashboard/           # Protected dashboard
│   │   └── families/        # Family management
│   └── layout.tsx           # Root layout
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Sidebar, Navbar, Footer
│   └── shared/              # Shared components
├── features/                # Feature modules
│   ├── auth/                # Authentication
│   ├── family/              # Family management
│   ├── income/              # Pemasukan
│   ├── expense/             # Pengeluaran
│   ├── wallet/              # Dompet
│   ├── category/            # Kategori
│   ├── transfer/            # Transfer
│   ├── bill/                # Tagihan
│   ├── saving/              # Tabungan
│   ├── goal/                # Target keuangan
│   ├── asset/               # Aset
│   ├── investment/          # Investasi
│   ├── debt/                # Hutang
│   ├── receivable/          # Piutang
│   ├── report/              # Laporan
│   └── setting/             # Pengaturan
├── hooks/                   # Shared hooks
├── lib/                     # Library config
│   ├── supabase/
│   │   ├── client.ts        # Browser client
│   │   ├── server.ts        # Server client
│   │   ├── admin.ts         # Admin client (service role)
│   │   └── middleware.ts    # Middleware client
│   ├── prisma.ts            # Prisma singleton
│   └── utils.ts             # cn() utility
├── services/                # Business logic layer
├── store/                   # Zustand stores
├── types/                   # TypeScript types
├── utils/                   # Utility functions
├── constants/               # Constants
├── providers/               # React context providers
├── middleware.ts            # Next.js middleware
└── generated/prisma/        # Prisma generated client
```

---

## Feature Structure

Setiap fitur di `features/` memiliki struktur:

```
features/<feature>/
├── components/       # Feature-specific components
├── actions.ts        # Server Actions
├── schemas.ts        # Zod schemas
├── types.ts          # Feature types
├── services.ts       # Business logic
├── hooks.ts          # Feature hooks
└── constants.ts      # Feature constants
```

---

## Data Flow

```
User → Form → Client Validation (Zod) → Server Action
→ Server Validation (Zod) → Prisma → Supabase
→ Response → Toast → Refresh Data
```

---

## Authentication Flow

```
User → Login → Supabase Auth → Session → Cookie
→ Middleware (validate session) → Route → RBAC → Page
```

---

## CRUD Flow

```
Create/Update/Delete → Zod Validation → Prisma Transaction
→ Audit Log → Revalidate → Toast Notification
```

Semua operasi yang memengaruhi >1 tabel harus menggunakan Prisma Transaction.
