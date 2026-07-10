# UI/UX

Gunakan shadcn/ui + Tailwind CSS v4.

---

## Design Philosophy

Modern, bersih, profesional, minimalis, cepat, mudah digunakan, konsisten, responsif, ramah semua usia.

---

## Komponen yang Wajib Ada di Setiap Halaman

- Page Title + Breadcrumb
- Search + Filter + Sorting + Pagination
- Action Button (Tambah)
- Loading State (Skeleton)
- Error State (dengan Retry)
- Empty State (icon + judul + deskripsi + tombol aksi)
- Success Feedback (Toast)

---

## Layout

| Perangkat | Layout |
|-----------|--------|
| Desktop | Sidebar kiri + Navbar atas + Content + Footer |
| Tablet | Sidebar collapsible |
| Mobile | Bottom Navigation / Drawer |

### Sidebar
Dashboard, Transaksi, Dompet, Tabungan, Tagihan, Laporan, Pengaturan, Logout

### Navbar
Logo, Breadcrumb, Search, Notifikasi, Theme Switch, User Menu

---

## Warna

| Peran | Warna |
|-------|-------|
| Primary | Blue (#2563EB) |
| Success/Income | Green (#16A34A) |
| Warning | Orange (#F59E0B) |
| Danger/Expense | Red (#DC2626) |
| Info | Sky (#0284C7) |

### Financial Colors
- Pemasukan: Hijau
- Pengeluaran: Merah
- Transfer: Biru
- Tabungan: Ungu
- Investasi: Emas
- Tagihan: Oranye

---

## Komponen

- **Charts**: Recharts (Bar, Line, Pie, Area, Donut) — responsif
- **Tables**: TanStack Table (search, filter, sort, pagination, column visibility, export)
- **Forms**: React Hook Form + Zod (label, placeholder, helper text, validation, error message, required indicator)
- **Buttons**: Primary, Secondary, Outline, Ghost, Danger, Success, Loading, Disabled
- **Dialog**: Delete confirmation, Edit, Detail
- **Drawer**: Mobile navigation
- **Toast**: Top-right (desktop), Bottom (mobile)
- **Loading**: Skeleton (hindari spinner fullscreen)

---

## Theme

Support Light, Dark, System. Tema disimpan di preferensi pengguna (Zustand).

---

## Aksesibilitas

WCAG 2.1 AA minimum: kontras cukup, keyboard navigation, focus state, ARIA label, screen reader friendly.

---

## Breakpoints

| Perangkat | Lebar |
|-----------|-------|
| Mobile | < 640px |
| Tablet | 640px - 1023px |
| Desktop | >= 1024px |

---

## Animasi

Ringan (fade, slide, scale), durasi maksimal 300ms. Hindari animasi mengganggu.

---

## Font

Geist (melalui `next/font/google`), fallback Inter / system sans.

---

## Icons

Lucide React — konsisten di seluruh aplikasi.

---

## Design Rules

- Gunakan komponen shadcn/ui sebelum membuat komponen baru
- Jangan mencampur >2 gaya desain dalam satu halaman
- Prioritaskan kemudahan penggunaan dibanding dekorasi
- Pastikan tampilan optimal di desktop, tablet, dan mobile
