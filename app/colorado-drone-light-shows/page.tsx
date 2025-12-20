import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colorado Drone Light Shows | America 250 Celebrations",
  description:
    "Patriot Drone Shows delivers patriotic drone light shows across Colorado for America 250 celebrations, civic events, festivals, and major public gatherings. A modern alternative to fireworks.",
  alternates: {
    canonical: "https://www.patriotdroneshows.com/colorado-drone-light-shows",
  },
  openGraph: {
    title: "Colorado Drone Light Shows | Patriot Drone Shows",
    description:
      "Patriotic drone light shows across Colorado for America 250 celebrations, city events, fairs, and festivals.",
    url: "https://www.patriotdroneshows.com/colorado-drone-light-shows",
    siteName: "Patriot Drone Shows",
    images: [
      {
        url: "/patriot-og.png",
        width: 1200,
        height: 630,
        alt: "Patriot Drone Shows Colorado drone light show",
      },
    ],
    type: "website",
  },
};

export default function ColoradoDroneLightShowsPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
        {/* Video */}
        <video
          src="/waiving_flag.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Tint */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/45" />

        {/* Overlay layout */}
        <div className="relative z-20 h-full px-4">
          <div className="max-w-6xl mx-auto h-full">
            <div className="h-full grid grid-rows-[auto_1fr_auto] py-12 sm:py-16">
              {/* Top: Title */}
              <div className="text-center">
                <h1 className="font-orbitron font-bold text-3xl sm:text-5xl md:text-6xl drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
                  Colorado Drone Light Shows
                </h1>
              </div>

              {/* Middle spacer */}
              <div />

              {/* Bottom: Supporting line (still overlaying video) */}
              <div className="text-center pb-6 sm:pb-10">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-[0_0_14px_rgba(0,0,0,0.85)] max-w-4xl mx-auto">
                  Patriotic drone light shows for{" "}
                  <span className="text-white font-semibold">
                    America 250 celebrations
                  </span>
                  , civic events, and city-wide gatherings across Colorado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Patriot Drone Shows provides large-scale{" "}
            <span className="text-white font-semibold">
              patriotic drone light shows across Colorado
            </span>{" "}
            for municipalities, civic organizations, and major public events.
            Our drone shows are quiet, environmentally friendly, and fully
            customizable — making them ideal for multi-season{" "}
            <strong>America 250</strong> programming, festivals, and annual city
            celebrations.
          </p>
        </div>
      </section>

      {/* ================= AMERICA 250 ================= */}
      <section className="py-20 px-4 sm:px-6 bg-gray-900/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            America 250 Celebrations in Colorado
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            As communities across Colorado prepare to commemorate{" "}
            <strong>250 years of American independence</strong>, drone light
            shows offer a powerful, modern way to celebrate — without smoke,
            fallout, or loud explosions. Our shows can feature patriotic
            symbolism, historical storytelling, and Colorado-specific moments
            designed to elevate America 250 events throughout{" "}
            <strong>2025, 2026, and beyond</strong>.
          </p>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-14">
          Ideal for Colorado Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <UseCase title="America 250 Programs">
            Multi-year commemorations, civic programming, and patriotic
            storytelling tied to the 250th anniversary.
          </UseCase>

          <UseCase title="City & Municipal Events">
            Crowd-safe shows for downtowns, parks, stadium areas, and civic
            gathering spaces.
          </UseCase>

          <UseCase title="Fairs & Festivals">
            High-visibility nighttime finales for fairgrounds, festival stages,
            and community weekends.
          </UseCase>

          <UseCase title="Resort & Mountain Towns">
            Quiet, family-friendly shows ideal for mountain destinations and
            tourism-driven events.
          </UseCase>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <section className="py-16 px-4 sm:px-6 bg-gray-900/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            Serving Communities Across Colorado
          </h2>

          <p className="text-gray-300 text-lg">
            Including Denver, Colorado Springs, Boulder, Fort Collins, and
            surrounding municipalities statewide.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-900 to-black">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
          Planning an America 250 Event in Colorado?
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Tell us your city, event timeframe, and audience size — we’ll recommend
          a drone count, show length, and patriotic sequences tailored to your
          America 250 celebration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition font-orbitron"
          >
            Request a Quote
          </Link>

          <Link
            href="/locations"
            className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition font-orbitron"
          >
            View All Locations
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= USE CASE CARD ================= */
function UseCase({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center p-8 bg-gray-900 rounded-3xl border border-gray-800 shadow-lg">
      <h3 className="font-orbitron text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
