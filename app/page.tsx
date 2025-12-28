import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patriotic Drone Light Shows Nationwide | Patriot Drone Shows",
  description:
    "Patriot Drone Shows provides large-scale patriotic drone light shows nationwide for July 4th, America 250, Veterans Day, Memorial Day, and city celebrations — a modern alternative to fireworks.",
  alternates: {
    canonical: "https://www.patriotdroneshows.com/patriotic-drone-shows",
  },
};

export default function PatrioticDroneShowsPage() {
  return (
    <main className="bg-black text-white">
      {/* Lazy-load Vimeo src only when section is near viewport (including mobile) */}
      <Script id="lazy-vimeo-bg" strategy="afterInteractive">
        {`
          (function () {
            var iframe = document.getElementById("vimeo-bg");
            if (!iframe) return;

            var dataSrc = iframe.getAttribute("data-src");
            if (!dataSrc) return;

            function load() {
              if (iframe.getAttribute("src")) return;
              iframe.setAttribute("src", dataSrc);
            }

            // Fallback if IO not supported
            if (!("IntersectionObserver" in window)) {
              setTimeout(load, 1200);
              return;
            }

            var io = new IntersectionObserver(function(entries) {
              if (!entries || !entries.length) return;
              if (entries[0].isIntersecting) {
                load();
                io.disconnect();
              }
            }, { rootMargin: "300px" });

            io.observe(iframe);
          })();
        `}
      </Script>

      {/* ================= HERO ================= */}
      <section className="w-full pt-2 sm:pt-24">
        <div className="relative w-full">
          {/* HERO VIDEO (mobile + desktop) */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/flag_400.webp"
            className="
              w-full
              h-[64vh] sm:h-[85vh]
              object-cover
              object-[center_70%]
              bg-black
              brightness-125 contrast-110 saturate-110
            "
          >
            <source src="/flag_hero_720.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">
            {/* TOP */}
            <div className="pt-3 sm:pt-8 text-center">
              <h1
                className="
                  font-orbitron font-bold
                  text-3xl sm:text-5xl lg:text-6xl
                  leading-tight
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]
                  px-3
                "
              >
                Patriot Drone Shows
              </h1>

              <p
                className="
                  mt-2 sm:mt-4
                  max-w-3xl mx-auto
                  text-base sm:text-xl md:text-2xl
                  text-gray-100
                  leading-relaxed
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]
                  px-3
                "
              >
                Nationwide drone light shows designed for America 250, Christmas,
                Holidays, Memorial Day, and city celebrations.
              </p>
            </div>

            <div className="flex-1" />

            {/* BOTTOM */}
            <div className="pb-6 sm:pb-6 text-center">
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
                Patriotic Drone Shows That Replace Fireworks — Without the Fallout
              </h2>
            </div>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-3 sm:pt-4 pb-10 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Link
                href="/contact"
                className="
                  inline-flex justify-center items-center
                  bg-gradient-to-r from-red-500 via-white to-blue-500
                  text-black font-bold py-4 px-7 rounded-full
                  shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
                  transform hover:scale-105 transition
                  font-orbitron
                "
              >
                Request a Quote
              </Link>

              <Link
                href="/locations"
                className="
                  inline-flex justify-center items-center
                  border border-white/30 text-white
                  font-bold py-4 px-7 rounded-full
                  hover:border-white hover:bg-white/10
                  transform hover:scale-[1.02] transition
                  font-orbitron
                "
              >
                View Nationwide Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="pt-8 pb-4 sm:pt-12 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Patriot Drone Shows specializes in{" "}
            <span className="text-white font-semibold">
              large-scale patriotic drone light shows
            </span>{" "}
            for national holidays, municipal celebrations, and civic events. Our
            shows are quiet, eco-friendly, and fully customizable — delivering a
            modern alternative to fireworks.
          </p>

          <p className="mt-5 text-gray-300 text-lg leading-relaxed">
            From America 250 celebrations and July 4th events to Veterans Day and
            Memorial Day tributes, we design drone light shows that scale for
            your audience size and your venue — with professional planning,
            permitting support, and a consistent execution standard anywhere in
            the United States.
          </p>
        </div>
      </section>

      {/* ================= FIREWORKS ALTERNATIVE ================= */}
      <section className="relative w-full h-[70vh] sm:h-[75vh] overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden bg-black">
          {/* Lightweight paint immediately (helps perceived speed) */}
          <Image
            src="/flag_400.webp"
            alt="Patriotic backdrop"
            width={1200}
            height={800}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          {/* Vimeo loads ONLY when near viewport */}
          <iframe
            id="vimeo-bg"
            data-src="https://player.vimeo.com/video/1147748380?autoplay=1&muted=1&loop=1&background=1&playsinline=1"
            src=""
            title="Fireworks Alternative Drone Show"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            className="
              absolute left-1/2 top-1/2
              w-[177.78vh] h-[56.25vw]
              min-w-full min-h-full
              -translate-x-1/2 -translate-y-1/2
              pointer-events-none
              opacity-90
            "
          />
        </div>

        <div className="absolute inset-0 bg-black/25" />

        {/* Center content on mobile; keep lower-third feel on desktop */}
        <div className="relative z-10 h-full flex sm:items-end px-4 pb-10 sm:pb-16">
          <div className="max-w-3xl mx-auto text-center mt-24 sm:mt-16">
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
              A Powerful Alternative to Fireworks
            </h2>

            <p className="mt-80 sm:mt-8 text-lg sm:text-xl text-gray-100 leading-relaxed drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
              Create fireworks-style excitement with hundreds of synchronized
              drones — without fire risk, loud explosions, or environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-14">
          Perfect For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <UseCase title="America 250 Celebrations">
            Flags, stars, historic storytelling, and large-scale patriotic finales.
          </UseCase>

          <UseCase title="July 4th Events">
            Crowd-pleasing drone shows designed to replace fireworks safely.
          </UseCase>

          <UseCase title="Veterans & Memorial Day">
            Meaningful aerial tributes honoring service and sacrifice.
          </UseCase>

          <UseCase title="City & Municipal Events">
            Permitted, insured shows for large public gatherings nationwide.
          </UseCase>
        </div>
      </section>

      {/* ================= NATIONWIDE NETWORK ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 sm:p-12">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-6">
              A Nationwide Network — One Standard of Excellence
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Patriot Drone Shows operates through a{" "}
              <span className="text-white font-semibold">
                nationwide network of experienced drone professionals
              </span>{" "}
              strategically positioned across the United States. This allows us to
              deliver large-scale patriotic drone light shows anywhere in the country —
              without compromising safety, quality, or consistency.
            </p>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Every show follows the same operational standards, creative process,
              and execution framework. Whether your event is in a major metro, a
              coastal city, or a rural community, you receive the same
              professional-grade production, custom animation design, and
              coordinated execution.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <NetworkPill title="Nationwide Coverage">
                Teams positioned across the U.S. allow rapid deployment to cities,
                venues, and event sites nationwide.
              </NetworkPill>

              <NetworkPill title="Standardized Operations">
                Consistent planning, safety protocols, and execution — no matter where
                your event takes place.
              </NetworkPill>

              <NetworkPill title="Scalable Productions">
                From regional celebrations to major national events, our network scales
                to meet crowd size and show complexity.
              </NetworkPill>
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="
                  inline-flex justify-center items-center
                  bg-white text-black font-bold py-4 px-8 rounded-full
                  hover:bg-gray-200 transition
                  font-orbitron
                "
              >
                Plan a Nationwide Drone Show
              </Link>
            </div>
          </div>
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

/* ================= NATIONWIDE PILL ================= */
function NetworkPill({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center p-6 bg-black/30 rounded-2xl border border-gray-800">
      <h3 className="font-orbitron font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
