export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 EventHub. Built with Next.js & Prisma.</p>

        <div className="flex gap-6">
          <p>Fast</p>
          <p>Secure</p>
          <p>Modern</p>
        </div>
      </div>
    </footer>
  );
}