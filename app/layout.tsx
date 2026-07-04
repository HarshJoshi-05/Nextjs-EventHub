import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventHub",
  description: "Discover and create amazing events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${schibsted.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* Background Glow */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
          </div>

          <Navbar />

          <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}