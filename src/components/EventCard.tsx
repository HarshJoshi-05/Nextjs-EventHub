import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: Date;
    imageUrl: string | null;
    organizer: {
      name: string;
    };
  };
  actions?: React.ReactNode;
};

export default function EventCard({
  event,
  actions,
}: EventCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
      {event.imageUrl && (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="h-1 w-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />

      <div className="p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Upcoming Event
        </p>

        <h2 className="mt-3 text-2xl font-black transition group-hover:text-primary">
          {event.title}
        </h2>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground">
          {event.description}
        </p>

        <div className="mt-8 space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              Location
            </span>

            <span className="font-medium">
              {event.location}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              Date
            </span>

            <span className="font-medium">
              {new Date(event.date).toLocaleDateString()}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              Organizer
            </span>

            <span className="font-medium">
              {event.organizer.name}
            </span>
          </div>
        </div>

        <div className="mt-8">
          {actions ? (
            actions
          ) : (
            <Link
              href={`/events/${event.id}`}
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40"
            >
              View Details →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}