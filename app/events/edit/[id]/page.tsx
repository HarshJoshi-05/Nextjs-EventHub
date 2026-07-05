import { updateEvent } from "@/actions/event.action";
import * as eventService from "@/services/event.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditEventPage({ params }: Props) {
  const { id } = await params;

  const event = await eventService.getEventById(id);

  if (!event) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-4xl font-bold">
          Event Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="flex justify-center py-12">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-card p-8 shadow-2xl shadow-primary/10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Organizer Panel
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Edit Event
        </h1>

        <p className="mt-2 text-muted-foreground">
          Update your event information.
        </p>

        <form action={updateEvent} className="mt-8 space-y-6">
          <input
            type="hidden"
            name="id"
            value={event.id}
          />

          <div>
            <label className="mb-2 block text-sm">
              Event Title
            </label>

            <input
              name="title"
              defaultValue={event.title}
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Description
            </label>

            <textarea
              name="description"
              rows={5}
              defaultValue={event.description}
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm">
                Location
              </label>

              <input
                name="location"
                defaultValue={event.location}
                className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Date
              </label>

              <input
                type="datetime-local"
                name="date"
                defaultValue={new Date(event.date)
                  .toISOString()
                  .slice(0, 16)}
                className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Replace Image (optional)
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40"
          >
            Update Event
          </button>
        </form>
      </div>
    </section>
  );
}