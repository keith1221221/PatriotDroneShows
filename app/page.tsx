import Link from "next/link";
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
      {/* ================= HERO SECTION (FLAG VIDEO + OVERLAY) ================= */}
      <section className="w-full">
        <div className="relative w-full">
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

          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">
            <div className="pt-4 sm:pt-8 text-center">
              <h1
                className="
                  font-orbitron font-bold
                  text-3xl sm:text-5xl lg:text-6xl
                  leading-tight
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]
                  flex flex-wrap justify-center gap-x-3
                  px-3
                "
              >
                <span className="text-red-500">PATRIOT</span>
                <span className="bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent">
                  DRONE
                </span>
                <span className="text-blue-500">SHOWS</span>
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
                Nationwide patriotic drone light shows for July 4th, America 250,
                Memorial Day, Christmas and Holiday, city celebrations, festivals, and brand activations.
              </p>
            </div>

            <div className="flex-1" />

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
                Patriotic Drone Light Shows That Replace Fireworks — Without The
                Fallout
              </h2>
            </div>
          </div>
        </div>

        {/* ================= BUTTONS (UNDER VIDEO) ================= */}
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-4 sm:pt-6 pb-8 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Link
                href="/request-a-quote"
                className="inline-flex justify-center items-center bg-gradient-to-r from-red-500 via-white to-blue-500
                  text-black font-bold py-4 px-7 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
                  transform hover:scale-105 transition font-orbitron"
              >
                Request a Nationwide Quote
              </Link>

              <Link
                href="/patriotic-drone-light-shows"
                className="inline-flex justify-center items-center border border-white/30
                  text-white font-bold py-4 px-7 rounded-full hover:border-white hover:bg-white/10
                  transform hover:scale-[1.02] transition font-orbitron"
              >
                Explore Patriotic Shows
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND HERO (VIMEO + OVERLAY) ================= */}
      <section className="w-full bg-black">
        <div className="relative w-full h-[75vh] sm:h-[80vh] overflow-hidden bg-black">
          <div className="absolute inset-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[120%] sm:w-[110%] md:w-[105%] lg:w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1147748380?autoplay=1&muted=1&loop=1&background=1&playsinline=1"
                  title="Patriot Drone Shows Fireworks Drone Sequence"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6">
            <div className="pt-8 flex justify-center text-center">
              <div className="max-w-3xl">
                <p
                  className="
                    text-gray-100
                    text-lg sm:text-xl md:text-2xl
                    leading-relaxed sm:leading-loose
                    drop-shadow-[0_0_14px_rgba(0,0,0,0.9)]
                  "
                >
                  Patriot Drone Shows specializes in{" "}
                  <Link
                    href="/patriotic-drone-light-shows"
                    className="text-white underline decoration-white/40 hover:decoration-white"
                  >
                    nationwide patriotic drone light shows
                  </Link>{" "}
                  designed for America 250 celebrations, national holidays, and
                  large-scale city events. Learn more about our{" "}
                  <Link
                    href="/america-250-celebrations"
                    className="text-white underline decoration-white/40 hover:decoration-white"
                  >
                    America 250 drone shows
                  </Link>{" "}
                  or explore our{" "}
                  <Link
                    href="/locations"
                    className="text-white underline decoration-white/40 hover:decoration-white"
                  >
                    nationwide locations
                  </Link>{" "}
                  to see where we operate.
                </p>
              </div>
            </div>

            <div className="pb-10 flex justify-center">
              <Link
                href="/chatbot"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 via-white to-blue-500
                  text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.45)]
                  transform hover:scale-105 transition font-orbitron"
              >
                <i className="fas fa-robot text-xl" />
                Chat for Pricing &amp; Drone Count
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
          <Feature icon="flag-usa" title="Patriotic Storytelling">
            Flags, eagles, stars, tributes, and custom narratives built for crowd
            emotion.
          </Feature>

          <Feature icon="leaf" title="Eco-Friendly Alternative">
            Quiet, smokeless displays with zero fallout — a modern alternative to
            fireworks.
          </Feature>

          <Feature icon="brain" title="Fully Custom Shows">
            City seals, sponsor logos, names, dates, and animated sequences — built
            to your theme.
          </Feature>

          <Feature icon="shield-alt" title="Safety &amp; Compliance First">
            FAA Part 107 certified crews, insured operations, and permitting
            support for municipalities.
          </Feature>
        </div>
      </section>

      {/* ================= VIDEO GALLERY ================= */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16">
          Patriotic Drone Light Shows
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {["1147884804", "1148138573", "1147884017"].map((id) => (
            <div key={id} className="aspect-video relative">
              <iframe
                src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
                title="Patriot Drone Shows video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-[2rem] shadow-2xl border border-gray-700"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
         
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
      <i className={`fas fa-${icon} text-4xl text-white mb-4`} />
      <h3 className="font-orbitron text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
