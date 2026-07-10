import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { removeMember } from "@/features/family/actions";

export default async function FamilyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const family = await prisma.family.findUnique({
    where: { id },
    include: {
      members: {
        include: { profile: true },
        orderBy: { joinedAt: "asc" },
      },
    },
  });

  if (!family) notFound();

  const currentMember = family.members.find(
    (m) => m.profileId === user.id,
  );
  const isAdmin = currentMember?.role === "ADMIN";

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col p-4 pt-8">
      <a
        href="/dashboard"
        className="text-muted-foreground hover:text-foreground mb-4 text-sm"
      >
        &larr; Kembali
      </a>

      <div className="mb-6">
        <h1 className="text-2xl font-bold">{family.name}</h1>
        <p className="text-muted-foreground text-sm">
          Kode undangan: <span className="font-mono">{family.inviteCode}</span>
        </p>
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold">
          Anggota ({family.members.length})
        </h2>
        <div className="space-y-2">
          {family.members.map((member) => (
            <div
              key={member.id}
              className="border-border flex items-center justify-between rounded-lg border p-3"
            >
              <div>
                <p className="font-medium">
                  {member.profile.name || member.profile.email}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.role === "ADMIN" ? "Admin" : "Anggota"}
                </p>
              </div>
              {isAdmin && member.profileId !== user.id && (
                <form action={removeMember}>
                  <input type="hidden" name="memberId" value={member.id} />
                  <input type="hidden" name="familyId" value={id} />
                  <button
                    type="submit"
                    className="text-destructive hover:text-destructive/80 text-sm underline-offset-2 hover:underline"
                  >
                    Hapus
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
