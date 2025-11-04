"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("lis_auth") : null;
      if (!token) {
        router.replace("/login");
        return;
      }
      setReady(true);
    } catch {
      router.replace("/login");
    }
  }, [router]);

  if (!ready) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-sm text-zinc-500">
        Checking session…
      </div>
    );
  }

  return <>{children}</>;
}

