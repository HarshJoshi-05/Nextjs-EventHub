import { createEvent } from "@/actions/event.action";

export default function CreateEventPage() {
  return (
    <section className="flex justify-center py-12">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-card p-8 shadow-2xl shadow-primary/10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Organizer Panel
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Create Event
        </h1>

        <p className="mt-2 text-muted-foreground">
          Fill in the details below to publish your event.
        </p>

        <form
          action={createEvent}
          className="mt-8 space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm">
              Event Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="React Summit 2026"
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Description
            </label>

            <textarea
              name="description"
              rows={5}
              placeholder="Tell everyone about your event..."
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm">
                Location
              </label>

              <input
                type="text"
                name="location"
                placeholder="New Delhi"
                className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none transition focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Date
              </label>

              <input
                type="datetime-local"
                name="date"
                required
                className=" w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-white outline-none transition focus:border-primary
                 focus:ring-2  focus:ring-primary/30 scheme-dark"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Event Image
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
            Create Event
          </button>
        </form>
      </div>
    </section>
  );
}