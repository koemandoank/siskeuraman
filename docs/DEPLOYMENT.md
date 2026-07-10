# Deployment

## Wajib

- Node LTS
- Next.js 15
- Tailwind CSS v4 (jangan ada dependency Tailwind v3)
- Vercel
- Supabase

---

## Sebelum Deploy

```bash
npm install
npm run build
```

Pastikan **tidak ada dependency Tailwind v3** di `package.json`.

---

## Environment Variables

```env
NEXT_PUBLIC_APP_NAME=SIKARA
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
DIRECT_URL=
```

---

## Langkah Deploy

1. Push ke GitHub
2. Import repo ke Vercel
3. Tambahkan semua Environment Variables
4. Deploy

### Setup Supabase
- Buat project baru
- Aktifkan Auth, Storage, Database
- Buat bucket: `avatars`, `receipts`, `documents`, `exports`

### Prisma Migration
```bash
npx prisma generate
npx prisma db push
```

Atau jika shadow DB tersedia:
```bash
npx prisma migrate dev
```

---

## Build Checklist

- [ ] `npm run build` berhasil
- [ ] Tidak ada error TypeScript / ESLint
- [ ] Environment variables terisi
- [ ] Prisma migration sudah dijalankan
- [ ] Supabase Auth URL sudah didaftarkan

---

## Monitoring

- Vercel Logs
- Supabase Logs

Pantau: error aplikasi, error database, performa query, penggunaan storage.
