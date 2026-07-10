# SIKARA

**Sistem Keuangan Keluarga**

SIKARA adalah aplikasi manajemen keuangan keluarga berbasis web modern, responsif, dan mudah digunakan. Aplikasi ini dirancang untuk membantu keluarga mencatat pemasukan, pengeluaran, tabungan, investasi, aset, tagihan, serta menyajikan laporan keuangan secara real-time.

---

## Tech Stack (LOCKED)

| Layer | Teknologi |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS **v4.x ONLY** |
| **UI** | shadcn/ui (Tailwind v4 compatible) |
| **Icons** | Lucide React |
| **Charts** | Recharts |
| **Table** | TanStack Table |
| **Form** | React Hook Form + Zod |
| **State** | Zustand |
| **Database** | Supabase PostgreSQL |
| **ORM** | Prisma |
| **Auth** | Supabase Auth + JWT + RBAC |
| **Storage** | Supabase Storage |
| **Deployment** | Vercel |

> Jangan downgrade ke Tailwind v3.
> Jangan mencampur dokumentasi atau snippet Tailwind v3 dan v4.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Login, Register
│   ├── auth/               # Auth callback
│   └── dashboard/          # Protected pages
├── components/             # Shared UI components
│   └── ui/                 # shadcn/ui components
├── features/               # Feature-based modules
│   ├── auth/
│   ├── family/
│   ├── income/
│   ├── expense/
│   ├── wallet/
│   ├── category/
│   └── ...
├── hooks/                  # Shared hooks
├── lib/                    # Library configurations
│   ├── supabase/           # Supabase clients
│   ├── prisma.ts           # Prisma singleton
│   └── utils.ts            # cn() utility
├── services/               # Business logic
├── store/                  # Zustand stores
├── types/                  # Shared types
├── utils/                  # Shared utilities
├── constants/              # Constants
├── middleware/             # Middleware
├── providers/              # React providers
├── generated/              # Prisma generated client
└── middleware.ts           # Next.js middleware
```

---

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Build:

```bash
npm run build
```

---

## Dokumentasi Lain

| File | Deskripsi |
|------|-----------|
| PRD.md | Kebutuhan aplikasi lengkap |
| ARCHITECTURE.md | Arsitektur sistem |
| DATABASE.md | Desain database |
| API.md | Spesifikasi API |
| UIUX.md | Standar desain antarmuka |
| DEPLOYMENT.md | Panduan deployment |
| ROADMAP.md | Rencana pengembangan |
| CONTRIBUTING.md | Standar pengembangan |
| TASKS.md | Tracking tugas per sprint |
| CHANGELOG.md | Catatan perubahan |
