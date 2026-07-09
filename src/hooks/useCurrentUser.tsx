"use client";

import { useEffect, useState } from "react";

export type DBUser = {
  id: string;
  email: string;
  username: string;
  fullName: string;
  role: "ADMINISTRATOR" | "AYAH" | "IBU" | "ANAK";
};

export default function useCurrentUser() {
  const [user, setUser] = useState<DBUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/api/auth/me")
      .then(async (res) => {
        if (!mounted) return;
        if (res.status === 401) {
          setUser(null);
          setLoading(false);
          return;
        }
        const json = await res.json();
        if (json?.ok) {
          setUser(json.user);
        } else {
          setError(json?.error ?? "unknown");
        }
      })
      .catch((e) => {
        if (!mounted) return;
        setError(String(e));
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { user, loading, error } as const;
}
