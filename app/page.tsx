import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patriot Drone Shows | Nationwide Patriotic Drone Light Shows",
  description:
    "Patriot Drone Shows delivers breathtaking patriotic drone light shows nationwide for July 4th, Veterans Day, Memorial Day, city celebrations, festivals, and brand activations.",
  keywords: [
    "patriotic drone show",
    "patriot drone shows",
    "July 4th drone show",
    "4th of July drone light show",
    "holiday drone light show",
    "Christmas drone light shows",
    "x-mas drone show",
    "Veterans Day drone show",
    "Memorial Day drone show",
    "nationwide drone light show",
    "drone show company",
    "city drone show",
    "municipal drone light show",
    "drone light show near me",
  ],
  alternates: { canonical: "https://www.patriotdroneshows.com/" },
  openGraph: {
    title: "Patriot Drone Shows | Nationwide Patriotic Drone Light Shows",
    description:
      "Book a custom patriotic drone light show anywhere in the U.S. Perfect for July 4th, Veterans Day, Memorial Day, city events, and festivals.",
    url: "https://www.patriotdroneshows.com/",
    siteName: "Patriot Drone Shows",
    images: [
      {
        url: "/patriot-og.png",
        width: 1200,
        height: 630,
        alt: "Patriot Drone Shows aerial display of a flag and stars",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full">
        <div className="relative w-full">

          {/* MOBILE LCP IMAGE (FAST) */}
          <div className="sm:hidden">
            <Image
              src="/flag_400.webp"
              alt="Waving American flag"
              width={800}
              height={1200}
              priority
              className="w-full h-[72vh] object-cover bg-black"
            />
          </div>

          {/* DESKTOP / TABLET VIDEO */}
          <video
            src="/waiving_flag.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/flag_400.webp"
            className="
              hidden sm:block
              w-full
              h-[72vh] sm:h-[85vh]
              object-cover
              bg-black
              brightness-125 contrast-110 saturate-110
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">
            <div className="pt-4 sm:pt-8 text-center">
              <h1 className="font-orbitron font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight drop-shadow-[0_0_14px_rgba(0,0,0,0.85)] flex flex-wrap justify-center gap-x-3 px-3">
                <span className="text-red-500">PATRIOT</span>
                <span className="bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent">
                  DRONE
                </span>
                <span className="text-blue-500">SHOWS</span>
              </h1>

              <p className="text-gray-100 mt-3 sm:mt-4 max-w-3xl mx-auto text-base sm:text-xl md:text-2xl leading-relaxed drop-shadow-[0_0_14px_rgba(0,0,0,0.85)] px-3">
                Nationwide patriotic drone light shows for July 4th, America 250,
                Memorial Day, Christmas and Holiday, city celebrations, festivals,
                and brand activations.
              </p>
            </div>

            <div className="flex-1" />

            <div className="pb-3 sm:pb-6 text-center">
              <h2 className="font-orbitron text-lg sm:text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_14px_rgba(0,0,0,0.9)] px-2">
                Patriotic Drone Light Shows That Replace Fireworks — Without The
                Fallout
              </h2>
            </div>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-4 sm:pt-6 pb-8 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Link
                href="/request-a-quote"
                className="inline-flex justify-center items-center bg-gradient-to-r from-red-500 via-white to-blue-500 text-black font-bold py-4 px-7 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] transform hover:scale-105 transition font-orbitron"
              >
                Request a Nationwide Quote
              </Link>

              <Link
                href="/patriotic-drone-light-shows"
                className="inline-flex justify-center items-center border border-white/30 text-white font-bold py-4 px-7 rounded-full hover:border-white hover:bg-white/10 transform hover:scale-[1.02] transition font-orbitron"
              >
                Explore Patriotic Shows
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-14">
          Why Patriot Drone Shows?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Feature icon="🇺🇸" title="Patriotic Storytelling">
            Flags, eagles, stars, tributes, and custom narratives built for crowd
            emotion.
          </Feature>

          <Feature icon="🌱" title="Eco-Friendly Alternative">
            Quiet, smokeless displays with zero fallout — a modern alternative to
            fireworks.
          </Feature>

          <Feature icon="🧠" title="Fully Custom Shows">
            City seals, sponsor logos, names, dates, and animated sequences — built
            to your theme.
          </Feature>

          <Feature icon="🛡️" title="Safety & Compliance First">
            FAA Part 107 certified crews, insured operations, and permitting
            support for municipalities.
          </Feature>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
          Ready to Book a Patriotic Drone Show?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Tell us your city, date, and estimated attendance — we’ll recommend
          drone count, show length, and a patriotic sequence plan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition font-orbitron"
          >
            Request a Quote
          </Link>

          <Link
            href="/locations"
            className="inline-block px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition font-orbitron"
          >
            Browse Locations
          </Link>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          Operated by Skylight Ads LLC • Nationwide service • FAA Part 107 •
          Insured operations
        </p>
      </section>
    </div>
  );
}

function Feature({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center p-8 bg-gray-900 rounded-3xl border border-gray-800 shadow-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-orbitron text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
