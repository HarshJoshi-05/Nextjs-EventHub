import Link from "next/link";
import { register } from "@/actions/auth.action";

export default function RegisterPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-card p-8 shadow-2xl shadow-primary/10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Join EventHub
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Create Account
        </h1>

        <p className="mt-2 text-muted-foreground">
          Start creating and registering for amazing events.
        </p>

        <form action={register} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm">
              Name
            </label>

            <input
              name="name"
              type="text"
              placeholder="Bruce Wayne"
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Email
            </label>

            <input
              name="email"
              type="email"
              placeholder="bruce@example.com"
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
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}