import Link from "next/link";
import AuthGuard from "./auth-guard";
import UserMenu from "./user-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="dashboard-grid grid min-h-screen grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="dashboard-sidebar hidden md:block border-r border-zinc-200/70 dark:border-white/10 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm">
          <div className="px-5 py-4">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-zinc-900 dark:bg-zinc-100" />
              <span className="text-sm font-semibold tracking-wide">LIS Dashboard</span>
            </div>
            <nav className="space-y-1 text-sm">
              <Link
                href="/dashboard"
                className="block rounded-md px-3 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              >
                Dashboard
              </Link>
              {/* <Link
                href="#"
                className="block rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Patients
              </Link>
              <Link
                href="#"
                className="block rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="block rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Results
              </Link>
              <Link
                href="#"
                className="block rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Settings
              </Link> */}
            </nav>
          </div>
        </aside>

        {/* Main column */}
        <div className="flex min-w-0 flex-col">
          {/* Topbar */}
          <header className="dashboard-header sticky top-0 z-10 border-b border-zinc-200/70 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
            <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
              <div className="flex items-center gap-3">
                <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 dark:border-white/10">
                  <span className="sr-only">Open menu</span>☰
                </button>
                <h1 className="text-base font-semibold">Dashboard</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-sm text-zinc-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
                  <span>⌘K</span>
                  <input
                    className="w-56 bg-transparent placeholder:text-zinc-400 focus:outline-none"
                    placeholder="Search patients, orders..."
                  />
                </div>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10">🔔</button>
                <UserMenu />
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="min-w-0 flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
      </div>
    </AuthGuard>
  );
}
