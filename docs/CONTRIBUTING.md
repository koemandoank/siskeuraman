# Contributing

## Tech Stack (LOCKED)

| Teknologi | Versi |
|-----------|-------|
| Next.js | 15 (App Router) |
| React | 19 |
| TypeScript | Strict Mode |
| Tailwind CSS | **v4.x ONLY** |
| shadcn/ui | Tailwind v4 compatible |
| Prisma | 7 |
| Supabase | PostgreSQL + Auth + Storage |
| Zod | Validasi |
| React Hook Form | Form |
| Zustand | State management |
| Recharts | Charts |
| TanStack Table | Tables |
| Lucide React | Icons |

---

## Prinsip Pengembangan

- **SOLID, DRY, KISS**
- **Clean Architecture**
- **Feature Based Structure**
- **Server First** — Server Component sebanyak mungkin
- **Mobile First** — Responsive design

---

## Standar Coding

### Naming Convention
| Entitas | Aturan | Contoh |
|---------|--------|--------|
| Folder | kebab-case | `income/`, `expense/` |
| File | kebab-case | `actions.ts` |
| Component | PascalCase | `IncomeForm.tsx` |
| Function | camelCase | `createIncome()` |
| Variable | camelCase | `totalBalance` |
| Constant | UPPER_SNAKE_CASE | `MAX_FILE_SIZE` |
| Database Table | snake_case | `family_members` |
| Database Column | snake_case | `created_at` |

### TypeScript
- Strict Mode wajib aktif
- Hindari `any`
- Semua fungsi harus memiliki tipe parameter dan return

### Business Logic
- Jangan menulis business logic di komponen UI
- Pisahkan ke: `services/`, `actions/`, `lib/`, `utils/`

### Database
- Semua akses via Prisma
- Transaction untuk multi-tabel
- Catat perubahan penting di ActivityLog

---

## Sebelum Membuat Kode

1. Baca PRD.md
2. Baca ARCHITECTURE.md
3. Baca DATABASE.md
4. Baca API.md
5. Baca UIUX.md
6. Baca TASKS.md — kerjakan satu task sampai selesai

---

## Commit Convention

- `feat:` — fitur baru
- `fix:` — perbaikan bug
- `refactor:` — perubahan struktur
- `docs:` — dokumentasi
- `chore:` — pemeliharaan

Contoh: `feat: add income CRUD module`

---

## Checklist PR

- [ ] Build berhasil (`npm run build`)
- [ ] Tidak ada error TypeScript
- [ ] Tidak ada error ESLint
- [ ] Dokumentasi diperbarui (CHANGELOG.md, TASKS.md)
- [ ] Fitur diuji manual
