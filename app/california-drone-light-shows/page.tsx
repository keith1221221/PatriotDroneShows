import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "California Drone Light Shows | Patriot Drone Shows",
  description:
    "Patriot Drone Shows delivers patriotic drone light shows across California for America 250 celebrations, civic events, festivals, and major public gatherings. A modern alternative to fireworks.",
  alternates: {
    canonical: "https://www.patriotdroneshows.com/california-drone-light-shows",
  },
  openGraph: {
    title: "California Drone Light Shows | Patriot Drone Shows",
    description:
      "Patriotic drone light shows across California for America 250 celebrations, city events, fairs, and festivals.",
    url: "https://www.patriotdroneshows.com/california-drone-light-shows",
    siteName: "Patriot Drone Shows",
    images: [
      {
        url: "/patriot-og.png",
        width: 1200,
        height: 630,
        alt: "Patriot Drone Shows California drone light show",
      },
    ],
    type: "website",
  },
};

export default function CaliforniaDroneLightShowsPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO (MATCH HOMEPAGE SPACING/LOOK) ================= */}
      <section className="w-full pt-16 sm:pt-24">
        <div className="relative w-full">
          {/* Flag video: same sizing behavior as homepage */}
          <video
            src="/waiving_flag.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full
              h-[72vh] sm:h-[85vh]
              object-contain sm:object-cover
              bg-black
              brightness-125 contrast-110 saturate-110
            "
          />

          {/* Optional readability overlay (keep light so it doesn't look boxed) */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />

          {/* Overlay structure identical to homepage:
              - Top block for H1 + P
              - Spacer
              - Bottom H2 pinned to bottom of video */}
          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">
            {/* Top block */}
            <div className="pt-4 sm:pt-8 text-center">
              <h1
                className="
                  font-orbitron font-bold
                  text-3xl sm:text-5xl lg:text-6xl
                  leading-tight
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]
                  px-3
                "
              >
                California Drone Light Shows
              </h1>

              <p
                className="
                  text-gray-100
                  mt-3 sm:mt-4
                  max-w-3xl mx-auto
                  text-base sm:text-xl md:text-2xl
                  leading-relaxed
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]
                  px-3
                "
              >
                Patriotic drone light shows for cities, coastal communities,
                festivals, and large-scale California events.
              </p>
            </div>

            <div className="flex-1" />

            {/* Bottom H2 */}
            <div className="pb-3 sm:pb-6 text-center">
              <h2
                className="
                  font-orbitron
                  text-lg sm:text-2xl md:text-3xl
                  font-bold
                  text-white
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.9)]
                  px-2
                "
              >
                A Modern Fireworks Alternative — Built for California Cities
              </h2>
            </div>
          </div>
        </div>

        {/* ================= CTA BUTTONS (UNDER VIDEO) ================= */}
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-4 sm:pt-6 pb-8 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Link
                href="/request-a-quote"
                className="inline-flex justify-center items-center bg-gradient-to-r from-red-500 via-white to-blue-500
                  text-black font-bold py-4 px-7 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
                  transform hover:scale-105 transition font-orbitron"
              >
                Request a Quote
              </Link>

              <Link
                href="/locations"
                className="inline-flex justify-center items-center border border-white/30
                  text-white font-bold py-4 px-7 rounded-full hover:border-white hover:bg-white/10
                  transform hover:scale-[1.02] transition font-orbitron"
              >
                View All Locations
              </Link>
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
              patriotic drone light shows across California
            </span>{" "}
            for municipalities, civic organizations, and major public events.
            Our shows are quiet, environmentally friendly, and fully
            customizable — making them ideal for multi-season{" "}
            <strong>America 250</strong> programming, festivals, and annual city
            celebrations.
          </p>
        </div>
      </section>

      {/* ================= AMERICA 250 ================= */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            America 250 Celebrations in California
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            From iconic coastal cities to inland community celebrations, drone
            light shows offer a modern way to commemorate{" "}
            <strong>250 years of American independence</strong> — without smoke,
            fallout, or loud explosions. Our shows can feature patriotic
            symbolism, historical storytelling, and California-specific moments
            designed to elevate America 250 events throughout{" "}
            <strong>2025, 2026, and beyond</strong>.
          </p>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-14">
          Ideal for California Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <UseCase title="America 250 Programs">
            Multi-year commemorations, patriotic storytelling, and civic programs
            tied to the 250th anniversary.
          </UseCase>

          <UseCase title="City & Municipal Events">
            Crowd-safe shows for parks, downtown corridors, waterfronts, and
            large public gathering spaces.
          </UseCase>

          <UseCase title="Fairs & Festivals">
            High-visibility finales for fairgrounds, festival stages, and
            community weekends — a modern fireworks alternative.
          </UseCase>

          <UseCase title="Coastal & Tourism Destinations">
            Clean, quiet shows ideal for beachfront and tourism-driven events
            with sensitive noise or fire-risk concerns.
          </UseCase>
        </div>
      </section>

      {/* ================= LOCAL COVERAGE ================= */}
      <section className="py-16 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            Serving Communities Across California
          </h2>

          <p className="text-gray-300 text-lg">
            Including Los Angeles, San Diego, Orange County, the Bay Area, and
            surrounding municipalities statewide.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition font-orbitron"
            >
              Request a Quote
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition font-orbitron"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
          Planning an America 250 Event in California?
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Tell us your city, event timeframe, and audience size — we’ll recommend
          a drone count, show length, and patriotic sequences tailored to your
          celebration.
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
