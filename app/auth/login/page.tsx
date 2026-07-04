import Link from "next/link";
import { login } from "@/actions/auth.action";

export default function LoginPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-card p-8 shadow-2xl shadow-primary/10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Welcome Back
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Sign In
        </h1>

        <p className="mt-2 text-muted-foreground">
          Login to manage your events and registrations.
        </p>

        <form action={login} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm">
              Email
            </label>

            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Password
            </label>

            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}