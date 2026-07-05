import Link from "next/link";
import { cookies } from "next/headers";
import { logout } from "@/actions/auth.action";

export default async function Navbar() {
  const token = (await cookies()).get("token")?.value;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-black tracking-widest text-white transition-colors hover:text-primary"
        >
          EVENTHUB
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/events"
            className="text-sm font-medium text-muted-foreground transition hover:text-white"
          >
            Events
          </Link>

          <Link
  href="/events"
  className="text-sm font-medium text-muted-foreground transition hover:text-white"
>
  Events
</Link>

  {token && (
  <>
    <Link
      href="/registered-events"
      className="text-sm font-medium text-muted-foreground transition hover:text-white"
    >
      Registered Events
    </Link>

    <Link
      href="/dashboard"
      className="text-sm font-medium text-muted-foreground transition hover:text-white"
    >
      Dashboard
    </Link>
  </>
    )}

          {token && (
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition hover:text-white"
            >
              Dashboard
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          {!token ? (
            <>
              <Link
                href="/auth/login"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-primary/40"
              >
                Get Started
              </Link>
            </>
          ) : (
            <form action={logout}>
              <button
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Logout
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}