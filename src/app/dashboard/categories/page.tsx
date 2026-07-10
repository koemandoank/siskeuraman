import { prisma } from "@/lib/prisma";
import { getCurrentFamilyMember } from "@/lib/helpers/family";
import { createCategory, deleteCategory } from "@/features/category/actions";

export default async function CategoriesPage() {
  const member = await getCurrentFamilyMember();
  if (!member) return null;

  const categories = await prisma.category.findMany({
    where: { familyId: member.familyId },
    orderBy: { type: "asc" },
  });

  const incomeCategories = categories.filter((c) => c.type === "INCOME");
  const expenseCategories = categories.filter((c) => c.type === "EXPENSE");

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 pt-6">
      <h1 className="text-2xl font-bold">Kategori</h1>

      <div className="border-border mb-8 rounded-lg border p-4">
        <h2 className="mb-3 font-semibold">Tambah Kategori</h2>
        <form action={createCategory} className="flex flex-wrap gap-2">
          <input
            name="name"
            placeholder="Nama kategori"
            required
            className="border-input bg-background h-9 flex-1 rounded-md border px-3 text-sm"
          />
          <select
            name="type"
            required
            className="border-input bg-background h-9 rounded-md border px-3 text-sm"
          >
            <option value="INCOME">Pemasukan</option>
            <option value="EXPENSE">Pengeluaran</option>
          </select>
          <input
            name="color"
            type="color"
            defaultValue="#6366F1"
            className="h-9 w-9 rounded-md border"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center rounded-md px-4 text-sm font-medium"
          >
            Tambah
          </button>
        </form>
      </div>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-green-600">
          Pemasukan
        </h2>
        <CategoryList
          categories={incomeCategories}
          onDelete={deleteCategory}
        />
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-red-600">
          Pengeluaran
        </h2>
        <CategoryList
          categories={expenseCategories}
          onDelete={deleteCategory}
        />
      </section>
    </div>
  );
}

function CategoryList({
  categories,
  onDelete,
}: {
  categories: { id: string; name: string; color: string }[];
  onDelete: (formData: FormData) => Promise<void>;
}) {
  if (categories.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">Belum ada kategori.</p>
    );
  }

  return (
    <div className="space-y-2">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="border-border flex items-center justify-between rounded-lg border p-3"
        >
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-4 w-4 rounded-full"
              style={{ backgroundColor: cat.color }}
            />
            <span>{cat.name}</span>
          </div>
          <div className="flex gap-2">
            <form action={onDelete}>
              <input type="hidden" name="id" value={cat.id} />
              <button
                type="submit"
                className="text-destructive hover:text-destructive/80 text-sm"
              >
                Hapus
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
