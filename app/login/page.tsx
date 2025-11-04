"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("lis_auth") : null;
      if (token) {
        router.replace("/dashboard");
        return;
      }
      setReady(true);
    } catch {
      setReady(true);
    }
  }, [router]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    setLoading(true);
    try {
      // Placeholder auth flow. Replace with real API call.
      await new Promise((r) => setTimeout(r, 700));
      if (typeof window !== "undefined") {
        localStorage.setItem("lis_auth", JSON.stringify({ email }));
      }
      router.replace("/dashboard");
    } catch (err) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 text-sm text-zinc-600 dark:bg-black dark:text-zinc-400">
        Redirecting…
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 h-10 w-10 rounded bg-zinc-900 dark:bg-zinc-100" />
          <h1 className="text-lg font-semibold tracking-tight">Sign in to LIS</h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Use your work email and password
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900"
        >
          {error && (
            <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:border-rose-800/50 dark:bg-rose-950/30 dark:text-rose-300">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400 dark:border-white/10 dark:bg-zinc-950"
              placeholder="name@hospital.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <button
                type="button"
                className="text-xs text-zinc-600 underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 pr-10 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-white/10 dark:bg-zinc-950"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-600 dark:border-zinc-600" />
              Remember me
            </label>
            <Link href="#" className="text-sm text-zinc-700 underline hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Don’t have access? <Link href="#" className="underline">Request an account</Link>
        </p>
      </div>
    </div>
  );
}
