"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Sign in to LIS</CardTitle>
            <CardDescription className="text-center">Use your work email and password</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
            {error && (
              <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:border-rose-800/50 dark:bg-rose-950/30 dark:text-rose-300">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
            <Input
                id="email"
                type="email"
                autoComplete="email"
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
              <Button type="button" variant="link" className="h-auto p-0 text-xs" onClick={() => setShowPassword((s) => !s)}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </div>
              <div className="relative">
              <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
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

            <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Signing in…" : "Sign in"}
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
              Don’t have access? <Link href="#" className="underline">Request an account</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
