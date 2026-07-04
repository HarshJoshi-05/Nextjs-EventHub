import { registerForEvent } from "@/actions/registration.action";
import * as eventService from "@/services/event.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({ params }: Props) {
  const { id } = await params;

  const event = await eventService.getEventById(id);

  if (!event) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-4xl font-bold">Event Not Found</h1>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-5xl py-12">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl shadow-primary/10">
        {/* Top Banner */}
        <div className="h-2 bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />

        <div className="p-10">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm text-primary">
            Upcoming Event
          </span>

          <h1 className="mt-6 text-5xl font-black">
            {event.title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            {event.description}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-background/40 p-6">
              <p className="text-sm text-muted-foreground">
                Location
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {event.location}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-background/40 p-6">
              <p className="text-sm text-muted-foreground">
                Date
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {new Date(event.date).toLocaleDateString()}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-background/40 p-6">
              <p className="text-sm text-muted-foreground">
                Organizer
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {event.organizer.name}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-background/40 p-6">
              <p className="text-sm text-muted-foreground">
                Registrations
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {event.registrations.length}
              </h3>
            </div>
          </div>

          <form action={registerForEvent} className="mt-12">
            <input
              type="hidden"
              name="eventId"
              value={event.id}
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-primary py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/40"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}