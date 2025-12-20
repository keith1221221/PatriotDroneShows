import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nationwide Locations | Patriot Drone Shows",
  description:
    "Patriot Drone Shows delivers patriotic drone light shows nationwide, with active operations across California, Nevada, Arizona, Colorado, and Utah — and service availability in major metropolitan markets across the U.S.",
  alternates: { canonical: "https://www.patriotdroneshows.com/locations" },
};

/* ================= DATA ================= */

const ACTIVE_LOCATIONS = [
  {
    name: "California",
    slug: "/california-drone-light-shows",
    blurb:
      "High-impact drone light shows for coastal cities, major metros, and large civic events.",
    topCities: ["Los Angeles", "San Diego", "Orange County", "San Francisco"],
  },
  {
    name: "Nevada",
    slug: "/nevada-drone-light-shows",
    blurb:
      "Signature patriotic visuals for statewide civic celebrations and festivals.",
    topCities: ["Reno", "Carson City", "Mesquite", "Lake Tahoe"],
  },
  {
    name: "Arizona",
    slug: "/arizona-drone-light-shows",
    blurb:
      "Desert-optimized drone shows with excellent visibility and flexible staging.",
    topCities: ["Phoenix", "Scottsdale", "Tucson", "Flagstaff"],
  },
  {
    name: "Colorado",
    slug: "/colorado-drone-light-shows",
    blurb:
      "Civic-ready drone light shows for downtowns, fairgrounds, mountain towns, and festivals.",
    topCities: ["Denver", "Colorado Springs", "Boulder", "Fort Collins"],
  },
  {
    name: "Utah",
    slug: "/utah-drone-light-shows",
    blurb:
      "Family-friendly patriotic drone shows ideal for city events and summer celebrations.",
    topCities: ["Salt Lake City", "Provo", "Ogden", "St. George"],
  },
];

const MAJOR_METROS = [
  { name: "Texas", topCities: ["Dallas", "Houston", "Austin", "San Antonio"] },
  { name: "Florida", topCities: ["Miami", "Orlando", "Tampa", "Jacksonville"] },
  {
    name: "New York / New Jersey",
    topCities: ["New York City", "Newark", "Jersey City", "Hoboken"],
  },
  {
    name: "Pacific Northwest (OR / WA)",
    topCities: ["Seattle", "Tacoma", "Spokane", "Portland", "Eugene", "Salem"],
  },
];

/* ================= PAGE ================= */

export default function LocationsPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO (SAME SPACING AS HOME) ================= */}
      <section className="w-full pt-16 sm:pt-24">
        <div className="relative w-full">
          {/* Flag video */}
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

          {/* Overlay (TOP H1+P, BOTTOM H2) */}
          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">
            {/* Top block */}
            <div className="pt-4 sm:pt-8 text-center">
              <h1
                className="
                  font-orbitron font-bold
                  text-3xl sm:text-5xl md:text-6xl
                  leading-tight
                  drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]
                  px-3
                "
              >
                Locations We Serve
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
                Patriot Drone Shows delivers{" "}
                <span className="text-white font-semibold">nationwide</span>{" "}
                patriotic drone light shows, with active operations in key states and
                availability for major metropolitan events across the U.S.
              </p>
            </div>

            {/* Pushes H2 to bottom */}
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
                Active regions + major metro availability nationwide
              </h2>
            </div>
          </div>
        </div>

        {/* ================= BUTTONS (UNDER VIDEO) ================= */}
        <div className="px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex justify-center pt-4 sm:pt-6 pb-8 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition font-orbitron"
              >
                Contact Us
              </Link>
              <Link
                href="/patriotic-drone-shows"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition font-orbitron"
              >
                Explore Patriotic Shows
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACTIVE STATES ================= */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            Primary Service Regions
          </h2>

          <p className="text-gray-300 max-w-3xl mb-12">
            These states represent our most active footprint, with streamlined
            logistics, permitting familiarity, and repeat civic event execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {ACTIVE_LOCATIONS.map((loc) => (
              <ActiveCard key={loc.name} {...loc} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAJOR METROS ================= */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            Also Serving Major Metropolitan Areas
          </h2>

          <p className="text-gray-300 max-w-3xl mb-12">
            We regularly support large-scale patriotic events in major U.S.
            metropolitan markets through advance planning and nationwide
            coordination.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MAJOR_METROS.map((loc) => (
              <MetroCard key={loc.name} {...loc} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
          Don’t See Your City Listed?
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Patriot Drone Shows regularly travels nationwide for select civic,
          municipal, and high-visibility patriotic events.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition font-orbitron"
        >
          Check Nationwide Availability
        </Link>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ActiveCard({
  name,
  slug,
  blurb,
  topCities,
}: {
  name: string;
  slug: string;
  blurb: string;
  topCities: string[];
}) {
  return (
    <div className="p-6 bg-gray-900 rounded-3xl border border-gray-800 shadow-lg hover:border-white/25 transition">
      <h3 className="font-orbitron text-xl font-bold">{name}</h3>
      <p className="text-gray-300 mt-3 text-sm">{blurb}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {topCities.map((c) => (
          <span
            key={c}
            className="text-xs px-3 py-1 rounded-full bg-black/40 border border-white/10 text-gray-200"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={slug}
          className="block text-center px-5 py-2 rounded-full font-orbitron font-bold bg-white text-black hover:bg-gray-200 transition text-sm"
        >
          View {name}
        </Link>
      </div>
    </div>
  );
}

function MetroCard({ name, topCities }: { name: string; topCities: string[] }) {
  return (
    <div className="p-8 bg-gray-900 rounded-3xl border border-gray-800 shadow-lg">
      <h3 className="font-orbitron text-2xl font-bold mb-3">{name}</h3>

      <p className="text-gray-300 mb-4">
        Available for select large-scale civic and municipal events.
      </p>

      <div className="flex flex-wrap gap-2">
        {topCities.map((c) => (
          <span
            key={c}
            className="text-xs px-3 py-1 rounded-full bg-black/40 border border-white/10 text-gray-200"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/contact"
          className="block text-center px-6 py-3 rounded-full font-orbitron font-bold bg-white text-black hover:bg-gray-200 transition"
        >
          Check Availability
        </Link>
      </div>
    </div>
  );
}
