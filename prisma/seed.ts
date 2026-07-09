// Seed lengkap (kategori, dompet, transaksi dummy) akan dilengkapi
// pada Sprint 3 — Master Data, sesuai ROADMAP.md.
import { PrismaClient, Role } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding SISKEURAMAN...");

  // NOTE: id user idealnya = auth.users.id dari Supabase Auth.
  // Untuk seed lokal, dibuat UUID acak sebagai placeholder.
  // Allow overriding the Administrator id to match a Supabase auth user id for local testing.
  const adminId = process.env.SUPABASE_ADMIN_ID ?? randomUUID();

  const users = await Promise.all(
    [
      { id: adminId, fullName: "Administrator", username: "admin", email: "admin@siskeuraman.local", role: Role.ADMINISTRATOR },
      { fullName: "Pak Maman", username: "ayah", email: "ayah@siskeuraman.local", role: Role.AYAH },
      { fullName: "Bu Maman", username: "ibu", email: "ibu@siskeuraman.local", role: Role.IBU },
      { fullName: "Anak Maman", username: "anak", email: "anak@siskeuraman.local", role: Role.ANAK },
    ].map((u) =>
      prisma.user.upsert({
        where: { email: u.email },
        update: {},
        create: { id: (u as any).id ?? randomUUID(), ...u },
      })
    )
  );

  console.log(`✔ ${users.length} users`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("✅ Seed selesai.");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
