"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useCurrentUser from "../hooks/useCurrentUser";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/login?from=${encodeURIComponent(window.location.pathname)}`);
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">Loading...</div>
    );
  }

  if (!user) return null;

  return <>{children}</>;
}
