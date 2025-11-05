export function apiBase(): string {
  // On the server (Next.js rendering inside the container), use internal service URL
  if (typeof window === "undefined") {
    return process.env.INTERNAL_API_URL || "http://backend:8080";
  }
  // In the browser, use the public URL reachable from host
  return process.env.NEXT_PUBLIC_API_URL || "";
}

