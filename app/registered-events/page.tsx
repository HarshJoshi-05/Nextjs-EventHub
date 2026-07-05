import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Link from "next/link";

import EventCard from "@/components/EventCard";
import * as registrationService from "@/services/registration.service";

type TokenPayload = {
  userId: string;
};

export default async function RegisteredEventsPage() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Please login first
          </h1>

          <Link
            href="/auth/login"
            className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-white"
          >
            Login
          </Link>
        </div>
      </section>
    );
  }

  const payload = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as TokenPayload;

  const registrations =
    await registrationService.getRegisteredEvents(
      payload.userId
    );

  return (
    <section className="py-12">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Your Events
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Registered Events
        </h1>

        <p className="mt-3 text-muted-foreground">
          All events you've registered for.
        </p>
      </div>

      {registrations.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 py-20 text-center">
          <h2 className="text-2xl font-bold">
            No registrations yet
          </h2>

          <p className="mt-3 text-muted-foreground">
            Browse events and register to see them here.
          </p>

          <Link
            href="/events"
            className="mt-8 inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Browse Events
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {registrations.map((registration) => (
            <EventCard
              key={registration.id}
              event={registration.event}
            />
          ))}
        </div>
      )}
    </section>
  );
}