import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patriotic Drone Light Shows | Nationwide July 4th & City Celebrations",
  description:
    "Premium patriotic drone light shows nationwide. Quiet, smokeless, and unforgettable — perfect for July 4th, Veterans Day, Memorial Day, and city celebrations. 150–400+ drones.",
  alternates: {
    canonical: "https://www.patriotdroneshows.com/patriotic-drone-light-shows",
  },
};

type Feature = {
  title: string;
  description: string;
  img: string;
};

type Tier = {
  drones: string;
  label: string;
  headline: string;
  body: string;
  bestFor: string[];
  poster: string;
  video: string;
};

const FEATURES: Feature[] = [
  {
    title: "Iconic Patriot Moments",
    description:
      "Flags, eagles, 1776, and custom city tributes designed to read clearly to the crowd.",
    img: "/shows/feat-1.webp",
  },
  {
    title: "Text + Logos That Read",
    description:
      "Clean typography in the sky — names, city branding, sponsor messages, and countdown moments.",
    img: "/shows/feat-2.webp",
  },
  {
    title: "Fireworks-Style Finale",
    description:
      "Big energy without the smoke — dynamic bursts, rings, and high-impact transitions.",
    img: "/shows/feat-3.webp",
  },
];

const TIERS: Tier[] = [
  {
    drones: "150",
    label: "Precision Tier",
    headline: "Crisp, clean, and high-value",
    body:
      "Perfect for smaller venues and close viewing distances. Great for readable symbols, clean shapes, and short custom text moments.",
    bestFor: [
      "Smaller cities",
      "Corporate events",
      "Private celebrations",
      "Tighter venue footprints",
    ],
    poster: "/shows/tier-150.webp",
    video: "/shows/tier-150.mp4",
  },
  {
    drones: "200",
    label: "Most Popular",
    headline: "Balanced density + motion",
    body:
      "A noticeable upgrade in fill and movement. Supports layered designs, smoother transitions, and bigger crowd impact.",
    bestFor: [
      "Mid-size city events",
      "Festivals",
      "Veterans/Memorial ceremonies",
      "Community celebrations",
    ],
    poster: "/shows/tier-200.webp",
    video: "/shows/tier-200.mp4",
  },
  {
    drones: "400",
    label: "Headline Tier",
    headline: "Big, iconic, and unforgettable",
    body:
      "When you want the sky to feel full. Massive formations, sweeping motion, and signature moments that can replace or complement fireworks.",
    bestFor: [
      "July 4th headliners",
      "Major city celebrations",
      "Destination events",
      "Large finales",
    ],
    poster: "/shows/tier-400.webp",
    video: "/shows/tier-400.mp4",
  },
];

export default function PatrioticDroneLightShowsPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= TOP INTRO (NO HERO IMAGE) ================= */}
      <section className="pt-12 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs sm:text-sm text-gray-100">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            Best-of Patriot Show Reel • Nationwide • FAA-compliant
          </div>

          <h1 className="mt-6 font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
            Patriotic Drone Light Shows
          </h1>

          <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            Quiet. Smokeless. Unforgettable. We create iconic patriotic moments for
            July 4th, Veterans Day, Memorial Day, city celebrations, and festivals —
            anywhere in the U.S.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-orbitron font-bold
                bg-gradient-to-r from-red-500 via-white to-blue-500 text-black
                shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] transition"
            >
              Get a Quote
            </Link>

            <Link
              href="#drone-counts"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/25
                text-white font-orbitron font-bold hover:bg-white/10 transition"
            >
              See Drone Count Options
            </Link>
          </div>

          <p className="mt-5 text-xs sm:text-sm text-gray-400">
            Fast response • We’ll recommend the right drone count and pricing range for your venue and crowd.
          </p>
        </div>
      </section>

      {/* ================= FEATURED REEL ================= */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-gray-900/30 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3">
              <video
  className="w-full aspect-video object-contain bg-black"
  controls
  playsInline
  preload="metadata"
  poster="/PatriotDroneShows/patriot_poster.webp"
>

                  <source
                    src="/PatriotDroneShows/Pat_sizzle.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="lg:col-span-2 p-6 sm:p-8">
                <h2 className="font-orbitron font-bold text-xl sm:text-2xl">
                  Watch our best patriotic moments
                </h2>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  This reel showcases the type of iconic formations we design:
                  readable text, bold symbols, fireworks-style effects, and
                  crowd-ready pacing.
                </p>

                <div className="mt-6 grid gap-3">
                  <MiniPill text="Quiet & smokeless" />
                  <MiniPill text="Custom designs + city tributes" />
                  <MiniPill text="Ideal for July 4th & municipal events" />
                </div>

                <div className="mt-7">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-8 py-4 rounded-full font-orbitron font-bold
                      bg-white text-black hover:bg-gray-100 transition shadow-lg"
                  >
                    Request Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE TILES */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-white/10 bg-gray-900/20 overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-orbitron font-bold text-sm sm:text-base">
                      {f.title}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DRONE COUNTS ================= */}
      <section id="drone-counts" className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl">
            Choose the right drone count for your event
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <TierCard key={tier.drones} tier={tier} />
          ))}
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function MiniPill({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-200">
      {text}
    </div>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-gray-900/25 overflow-hidden">
      <video
        className="w-full aspect-video object-cover bg-black"
        controls
        playsInline
        preload="metadata"
        poster="/PatriotDroneShows/"
      >
        <source src={tier.video} type="video/mp4" />
      </video>

      <div className="p-6">
        <h3 className="font-orbitron font-bold text-lg">{tier.headline}</h3>
        <p className="mt-3 text-gray-300 text-sm leading-relaxed">{tier.body}</p>

        <ul className="mt-4 space-y-1 text-sm text-gray-200">
          {tier.bestFor.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-6 inline-flex w-full items-center justify-center px-6 py-3 rounded-full font-orbitron font-bold
            bg-gradient-to-r from-red-500 via-white to-blue-500 text-black transition"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
