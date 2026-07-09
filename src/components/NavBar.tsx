"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";
import useCurrentUser from "../hooks/useCurrentUser";

export default function NavBar() {
  const router = useRouter();
  const supabase = createClient();
  const { user, loading } = useCurrentUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <header className="w-full border-b bg-white/50 dark:bg-slate-900/50">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="font-semibold text-lg">
            SISKEURAMAN
          </a>
        </div>

        <div className="flex items-center gap-3">
          {loading ? (
            <span className="text-sm opacity-50">Loading…</span>
          ) : user ? (
            <>
              <span className="text-sm opacity-80">{user.email}</span>
              <button
                onClick={handleSignOut}
                className="px-3 py-1 rounded bg-red-500 text-white text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <a href="/login" className="px-3 py-1 rounded bg-blue-600 text-white text-sm">
              Login
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
