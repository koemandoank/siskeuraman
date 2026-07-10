import { createClient } from "@supabase/supabase-js";
import { PrismaClient, Role } from "@prisma/client";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});
const prisma = new PrismaClient();

// Password default — WAJIB diganti setelah login pertama kali.
const DEFAULT_PASSWORD = "Siskeuraman#2026";

const SEED_USERS: { fullName: string; username: string; email: string; role: Role }[] = [
  { fullName: "Administrator", username: "admin", email: "admin@siskeuraman.local", role: Role.ADMINISTRATOR },
  { fullName: "Pak Maman", username: "ayah", email: "ayah@siskeuraman.local", role: Role.AYAH },
  { fullName: "Bu Maman", username: "ibu", email: "ibu@siskeuraman.local", role: Role.IBU },
  { fullName: "Anak Maman", username: "anak", email: "anak@siskeuraman.local", role: Role.ANAK },
];

async function main() {
  console.log("Membersihkan profile lama (UUID tidak valid)...");
  await prisma.user.deleteMany({});

  console.log("Membuat akun Supabase Auth + profile...\n");

  for (const u of SEED_USERS) {
    const { data: existing } = await supabaseAdmin.auth.admin.listUsers();
    let authUser = existing.users.find((x) => x.email === u.email);

    if (!authUser) {
      const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email: u.email,
        password: DEFAULT_PASSWORD,
        email_confirm: true,
      });
      if (error || !data.user) {
        console.error(`Gagal membuat auth user ${u.email}:`, error?.message);
        continue;
      }
      authUser = data.user;
      console.log(`✔ Auth user dibuat: ${u.email}`);
    } else {
      console.log(`- Auth user sudah ada: ${u.email}`);
    }

    await prisma.user.upsert({
      where: { id: authUser.id },
      update: { fullName: u.fullName, username: u.username, role: u.role },
      create: {
        id: authUser.id,
        fullName: u.fullName,
        username: u.username,
        email: u.email,
        role: u.role,
      },
    });
    console.log(`✔ Profile disinkron: ${u.email} (${u.role})\n`);
  }

  console.log("Selesai. Password default untuk semua akun:", DEFAULT_PASSWORD);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
