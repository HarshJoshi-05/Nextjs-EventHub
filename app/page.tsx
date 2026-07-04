import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center text-center">
        <span className="mb-4 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm text-primary">
          The Future of Event Management
        </span>

        <h1 className="max-w-5xl text-6xl font-black leading-tight tracking-tight md:text-8xl">
          DISCOVER
          <br />
          THE NEXT
          <br />
          BIG EVENT
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Discover conferences, workshops and meetups.
          Create events in minutes and connect with people
          who share your passion.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/events"
            className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
          >
            Browse Events
          </Link>

          <Link
            href="/auth/register"
            className="rounded-xl border border-white/10 px-8 py-4 transition hover:border-primary hover:text-primary"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features */}

      <section className="grid gap-8 py-20 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-card p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
          <div className="mb-5 text-4xl">🚀</div>

          <h2 className="text-2xl font-bold">
            Discover Events
          </h2>

          <p className="mt-4 text-muted-foreground">
            Explore conferences, hackathons, workshops
            and meetups happening around you.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-card p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
          <div className="mb-5 text-4xl">🎯</div>

          <h2 className="text-2xl font-bold">
            Host Events
          </h2>

          <p className="mt-4 text-muted-foreground">
            Create professional event pages and manage
            registrations effortlessly.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-card p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
          <div className="mb-5 text-4xl">⚡</div>

          <h2 className="text-2xl font-bold">
            Register Instantly
          </h2>

          <p className="mt-4 text-muted-foreground">
            Secure authentication and one-click event
            registration.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="rounded-3xl border border-primary/20 bg-primary/10 px-8 py-20 text-center">
        <h2 className="text-4xl font-black">
          Ready to join your next event?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Browse events or create your own in minutes.
        </p>

        <Link
          href="/events"
          className="mt-10 inline-block rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
        >
          Explore Events
        </Link>
      </section>
    </>
  );
}