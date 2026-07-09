"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";

export default function NavBar() {
  const router = useRouter();
  const supabase = createClient();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (mounted) setUserEmail(data.user?.email ?? null);
      } catch (e) {
        // ignore
      }
    })();

    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) setUserEmail(session?.user?.email ?? null);
    }) as any;

    return () => {
      mounted = false;
      try {
        subscription?.unsubscribe?.();
      } catch {}
    };
  }, [supabase]);

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
          {userEmail ? (
            <>
              <span className="text-sm opacity-80">{userEmail}</span>
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
