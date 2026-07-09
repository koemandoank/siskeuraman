import React from "react";

export default async function AdminPage() {
  // Server Component: fetch admin stats
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const res = await fetch(`${base}/api/admin/stats`, {
    cache: "no-store",
    credentials: "include",
  });

  const json = await res.json();

  if (!json?.ok) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Admin</h1>
        <p className="text-sm mt-3">You do not have access to this page.</p>
      </div>
    );
  }

  const stats = json.stats;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <div className="text-sm text-muted">Users</div>
          <div className="text-2xl font-bold">{stats.users}</div>
        </div>
        <div className="p-4 border rounded">
          <div className="text-sm text-muted">Wallets</div>
          <div className="text-2xl font-bold">{stats.wallets}</div>
        </div>
      </div>
    </div>
  );
}
