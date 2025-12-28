import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nevada Drone Light Shows | Patriot Drone Shows",
  description:
    "Patriot Drone Shows delivers patriotic drone light shows across Nevada for July 4th, Veterans Day, Memorial Day, and city celebrations — a modern alternative to fireworks.",
  keywords: [
    "Nevada drone light shows",
    "patriotic drone show Nevada",
    "July 4th drone show Nevada",
    "Veterans Day drone show Nevada",
    "Memorial Day drone show Nevada",
    "fireworks alternative Nevada",
    "municipal drone light shows Nevada",
    "Patriot Drone Shows",
  ],
  alternates: {
    canonical: "https://www.patriotdroneshows.com/nevada-drone-light-shows",
  },
  openGraph: {
    title: "Nevada Drone Light Shows | Patriot Drone Shows",
    description:
      "Book a custom patriotic drone light show in Nevada for July 4th, Veterans Day, Memorial Day, and major civic events.",
    url: "https://www.patriotdroneshows.com/nevada-drone-light-shows",
    siteName: "Patriot Drone Shows",
    images: [
      {
        url: "/patriot-og.png",
        width: 1200,
        height: 630,
        alt: "Patriot Drone Shows Nevada drone light show",
      },
    ],
    type: "website",
  },
};

const TOP_CITIES = ["Reno", "Carson City", "Mesquite", "Lake Tahoe", "Elko", "Sparks"];

const USE_CASES = [
  {
    title: "July 4th Celebrations",
    body: "Stars, flags, fireworks-style finales — without smoke, fallout, or loud explosions.",
  },
  {
    title: "Veterans Day Tributes",
    body: "Meaningful aerial moments honoring service members, families, and community pride.",
  },
  {
    title: "Memorial Day Events",
    body: "Respectful visuals designed for remembrance ceremonies and civic programming.",
  },
  {
    title: "City & Municipal Events",
    body: "Safe, permitted, crowd-pleasing shows for festivals, fairgrounds, and downtown celebrations.",
  },
];

const FAQS = [
  {
    q: "Do you serve all of Nevada?",
    a: "Yes. We support shows statewide. Share your city, date, venue type, and estimated attendance and we’ll confirm feasibility and recommend a drone count.",
  },
  {
    q: "Do you do Las Vegas shows on this site?",
    a: "For Las Vegas–based venue and commercial productions, our local partner brand handles that market. For Nevada civic and statewide events, we can support planning and execution through Patriot Drone Shows.",
  },
  {
    q: "How many drones do we need?",
    a: "Drone count depends on viewing distance, venue size, and how detailed you want logos or text to appear. We’ll recommend the right size after we learn your setup.",
  },
  {
    q: "Is this a fireworks alternative?",
    a: "Yes. Drone shows eliminate fire risk and reduce noise concerns while still creating a big crowd moment. We coordinate airspace considerations and execute with a safety-first operating plan.",
  },
];

export default function NevadaDroneLightShowsPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24 relative z-10 text-center">
          <h1 className="font-orbitron font-bold text-3xl sm:text-5xl md:text-6xl drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
            Nevada Drone Light Shows
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Patriotic drone light shows for Nevada civic events — a modern
            alternative to fireworks for{" "}
            <span className="text-white font-semibold">July 4th</span>,{" "}
            <span className="text-white font-semibold">Veterans Day</span>,{" "}
            <span className="text-white font-semibold">Memorial Day</span>, and
            city celebrations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Patriot Drone Shows delivers{" "}
            <span className="text-white font-semibold">
              large-scale patriotic drone light shows across Nevada
            </span>{" "}
            designed for civic audiences and public events. Our shows are quiet,
            eco-friendly, and fully customizable — ideal for communities seeking
            a high-impact night-sky experience without smoke, debris, or loud
            explosions.
          </p>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-14">
          Perfect for Nevada Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {USE_CASES.map((u) => (
            <Card key={u.title} title={u.title}>
              {u.body}
            </Card>
          ))}
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Nevada Service Areas
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            We support shows statewide. Common regions include:
          </p>

          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {TOP_CITIES.map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full bg-gray-900 border border-white/10 text-gray-200"
              >
                {city}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-8 max-w-3xl mx-auto">
            Note: For Las Vegas–based venue and commercial productions, our local
            partner brand handles that market. For Nevada civic and statewide events,
            we can support planning and execution here.
          </p>
        </div>
      </section>
{/* ================= LAS VEGAS CTA (CROSS-BRAND) ================= */}
<section className="py-12 px-4 sm:px-6 border-t border-white/10">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="font-orbitron text-2xl sm:text-3xl font-bold">
      Planning a Las Vegas Drone Light Show?
    </h2>

    <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
      For Las Vegas–based venue, corporate, and local productions, visit our
      local partner brand for the Strip and greater Las Vegas market.
    </p>

    <div className="mt-8 flex justify-center">
      <a
        href="https://www.vegasdrones.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition font-orbitron"
      >
        Visit VegasDrones.com
      </a>
    </div>

    <p className="text-sm text-gray-500 mt-4">
      (Opens in a new tab)
    </p>
  </div>
</section>

      {/* ================= FAQ ================= */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
            Nevada Drone Show FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="p-8 bg-gray-900 rounded-3xl border border-gray-800 shadow-lg"
              >
                <h3 className="font-orbitron text-xl font-bold mb-3">{f.q}</h3>
                <p className="text-gray-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
          Ready to Book a Nevada Drone Light Show?
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Tell us your city, event date, venue type, and estimated attendance —
          we’ll recommend drone count, show length, and patriotic sequences tailored
          to your crowd.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition font-orbitron"
          >
            Request a Quote
          </Link>

          <Link
            href="/patriotic-drone-shows"
            className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition font-orbitron"
          >
            Explore Patriotic Shows
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="text-center p-8 bg-gray-900 rounded-3xl border border-gray-800 shadow-lg">
      <h3 className="font-orbitron text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
