import { prisma } from "@/lib/prisma";
import { getCurrentFamilyMember } from "@/lib/helpers/family";
import { updateSetting } from "@/features/setting/actions";

export default async function SettingsPage() {
  const member = await getCurrentFamilyMember();
  if (!member) return null;

  const setting = await prisma.setting.findUnique({
    where: { familyId: member.familyId },
  });

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 pt-6">
      <h1 className="text-2xl font-bold">Pengaturan</h1>

      <div className="border-border rounded-lg border p-4">
        <h2 className="mb-3 font-semibold">Pengaturan Keluarga</h2>
        <form action={updateSetting} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Mata Uang</label>
            <select
              name="currency"
              defaultValue={setting?.currency || "IDR"}
              className="border-input bg-background flex h-9 w-full rounded-md border px-3 text-sm"
            >
              <option value="IDR">IDR - Indonesia Rupiah</option>
              <option value="USD">USD - US Dollar</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Zona Waktu</label>
            <select
              name="timezone"
              defaultValue={setting?.timezone || "Asia/Jakarta"}
              className="border-input bg-background flex h-9 w-full rounded-md border px-3 text-sm"
            >
              <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
              <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
              <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Bahasa</label>
            <select
              name="language"
              defaultValue={setting?.language || "id"}
              className="border-input bg-background flex h-9 w-full rounded-md border px-3 text-sm"
            >
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center rounded-md px-4 text-sm font-medium"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
