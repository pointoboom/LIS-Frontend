"use client";

import { useRouter } from "next/navigation";

export default function UserActions() {
  const router = useRouter();

  const handleLogout = () => {
    try {
      localStorage.removeItem("lis_auth");
    } catch {}
    router.replace("/login");
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleLogout}
        className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        Logout
      </button>
    </div>
  );
}

