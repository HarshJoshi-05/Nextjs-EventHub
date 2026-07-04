import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Link from "next/link";

import * as eventService from "@/services/event.service";
import EventCard from "@/components/EventCard";

type TokenPayload = {
    userId: string;
};

export default async function DashboardPage() {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
        return <h1>Unauthorized</h1>;
    }

    const payload = jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as TokenPayload;

    const events = await eventService.getEventsByOrganizerId(
        payload.userId
    );

    return (
        <section className="py-10">
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">
                        Dashboard
                    </p>

                    <h1 className="mt-2 text-5xl font-black">
                        My Events
                    </h1>

                    <p className="mt-3 text-muted-foreground">
                        Manage every event you've created.
                    </p>
                </div>

                <Link
                    href="/events/create"
                    className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
                >
                    + Create Event
                </Link>
            </div>

            {events.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-white/10 p-16 text-center">
                    <h2 className="text-3xl font-bold">
                        No Events Yet
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Create your first event and start inviting people.
                    </p>

                    <Link
                        href="/events/create"
                        className="mt-8 inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-white"
                    >
                        Create Event
                    </Link>
                </div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {events.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            actions={
                                <div className="flex gap-2">
                                    <Link
                                        href={`/events/${event.id}`}
                                        className="flex-1 rounded-xl border border-white/10 py-3 text-center transition hover:border-primary"
                                    >
                                        View
                                    </Link>

                                    <Link
                                        href={`/events/edit/${event.id}`}
                                        className="flex-1 rounded-xl bg-primary py-3 text-center text-white transition hover:opacity-90"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            }
                        />
                    ))}
                </div>
            )}
        </section>
    );
}