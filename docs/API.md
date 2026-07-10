# API

**Arsitektur**: Server Actions + Route Handlers
**Autentikasi**: Supabase Auth (JWT)
**Validasi**: Zod

---

## Response Format

```json
{
  "success": true,
  "message": "Success",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": []
}
```

---

## Server Actions (Internal)

Server Actions digunakan untuk operasi CRUD internal aplikasi.

### Auth

| Action | File |
|--------|------|
| `login(email, password)` | `features/auth/actions.ts` |
| `register(email, password, name)` | `features/auth/actions.ts` |
| `logout()` | `features/auth/actions.ts` |

### Family

| Action | File |
|--------|------|
| `createFamily(name)` | `features/family/actions.ts` |
| `joinFamily(inviteCode)` | `features/family/actions.ts` |
| `removeMember(memberId, familyId)` | `features/family/actions.ts` |

### Master Data (coming in Sprint 3)

| Action | File |
|--------|------|
| CRUD Category | `features/category/actions.ts` |
| CRUD Wallet | `features/wallet/actions.ts` |
| CRUD Settings | `features/setting/actions.ts` |

---

## Route Handlers (External)

Digunakan untuk endpoint yang perlu diakses eksternal.

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/auth/callback` | Auth callback OAuth |
| GET | `/api/health` | Health check |

---

## Error Codes

| Code | Keterangan |
|------|------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

## Aturan API

- Server Actions untuk operasi internal
- Route Handlers untuk endpoint eksternal
- Semua request divalidasi dengan Zod
- Semua operasi multi-tabel menggunakan Prisma Transaction
- Perubahan penting dicatat di ActivityLog
- Jangan ekspos Service Role Key ke client
- Verifikasi autentikasi dan RBAC sebelum memproses request
