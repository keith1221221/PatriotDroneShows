import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patriotic Drone Light Shows Nationwide | Patriot Drone Shows",
  description:
    "Patriot Drone Shows produces large-scale patriotic drone light shows nationwide for America 250, July 4th, Veterans Day, Memorial Day, and city celebrations — a modern alternative to fireworks.",
  alternates: {
    canonical: "https://www.patriotdroneshows.com/patriotic-drone-light-shows",
  },
  openGraph: {
    title: "Patriotic Drone Light Shows Nationwide | Patriot Drone Shows",
    description:
      "Nationwide patriotic drone shows for America 250 and major city celebrations — a modern alternative to fireworks without fallout.",
    url: "https://www.patriotdroneshows.com/patriotic-drone-light-shows",
    siteName: "Patriot Drone Shows",
    images: [
      {
        url: "https://www.patriotdroneshows.com/flag_400.webp",
        width: 1200,
        height: 630,
        alt: "Patriot Drone Shows patriotic drone light show",
      },
    ],
  },
  robots: { index: true, follow: true },
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
          {/* HERO VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/flag_400.webp"
            className="
              w-full
              h-[66vh] sm:h-[86vh]
              object-cover
              object-[center_70%]
              bg-black
              brightness-125 contrast-110 saturate-110
            "
          >
            <source src="/flag_hero_720.mp4" type="video/mp4" />
          </video>

          {/* Overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-black/70" />

          {/* Hero content */}
          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">
            {/* TOP */}
            <div className="pt-4 sm:pt-10 text-center">
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
                Nationwide patriotic drone light shows for America 250, July 4th,
                Memorial Day, Veterans Day, and city celebrations.
              </p>
            </div>

            <div className="flex-1" />

            {/* BOTTOM */}
            <div className="pb-6 sm:pb-10 text-center">
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
                Replace Fireworks — Without the Fallout
              </h2>

              <p className="mt-2 text-sm sm:text-base text-gray-100/90 drop-shadow-[0_0_14px_rgba(0,0,0,0.9)]">
                Venue-safe • Quiet • No smoke • No debris • Fully insured • FAA-compliant operations
              </p>
            </div>
          </div>
        </div>

        {/* ================= PRIMARY CTA BUTTONS ================= */}
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-4 pb-10 sm:pb-12">
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

      {/* ================= QUICK LINKS (REAL ROUTES ONLY) ================= */}
      <section className="px-4 sm:px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-800 bg-gray-900/30 p-6 sm:p-8">
            
            <p className="mt-3 text-gray-300 text-center max-w-3xl mx-auto">
              Jump to the page that matches your event type and planning stage.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <QuickLink
                href="/america-250-celebrations"
                title="America 250 Celebrations"
                desc="Large-scale patriotic storytelling for the 250th anniversary of America."
              />
              <QuickLink
                href="/national-drone-light-show-operator"
                title="National Operator"
                desc="A single nationwide standard for city events and large public gatherings."
              />
              <QuickLink
                href="/locations"
                title="Nationwide Locations"
                desc="Teams positioned across the U.S. for rapid deployment and consistent delivery."
              />
              <QuickLink
                href="/faq"
                title="Planning & Safety FAQ"
                desc="Permitting, safety approach, FAA compliance, and logistics explained."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="pt-4 pb-10 sm:pt-8 sm:pb-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Patriot Drone Shows specializes in{" "}
            <span className="text-white font-semibold">
              large-scale patriotic drone light shows
            </span>{" "}
            for national holidays, municipal celebrations, and civic events.
            Our shows are quiet, eco-friendly, and fully customizable — delivering a
            modern alternative to fireworks.
          </p>

          <p className="mt-5 text-gray-300 text-lg leading-relaxed">
            From America 250 celebrations and July 4th events to Veterans Day and
            Memorial Day tributes, we design drone shows that scale for your audience
            and your venue — with professional planning, permitting support, and a
            consistent execution standard nationwide.
          </p>
        </div>
      </section>

      {/* ================= FIREWORKS ALTERNATIVE (VIDEO BG) ================= */}
      <section className="relative w-full h-[72vh] sm:h-[78vh] overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden bg-black">
          {/* Lightweight paint immediately */}
          <Image
            src="/fireworks_comp.webp"
            alt="Patriotic backdrop"
            width={1600}
            height={900}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
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
              opacity-100
            "
          />
        </div>

        {/* Darken for text readability */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full flex items-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
              A Powerful Alternative to Fireworks
            </h2>

            <p className="mt-5 text-lg sm:text-xl text-gray-100 leading-relaxed drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
              Create fireworks-style excitement with hundreds of synchronized drones —
              without fire risk, loud explosions, or debris.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="
                  inline-flex justify-center items-center
                  bg-white text-black font-bold py-4 px-8 rounded-full
                  hover:bg-gray-200 transition font-orbitron
                "
              >
                Get a Quote
              </Link>
              <Link
                href="/faq"
                className="
                  inline-flex justify-center items-center
                  border border-white/30 text-white font-bold py-4 px-8 rounded-full
                  hover:border-white hover:bg-white/10 transition font-orbitron
                "
              >
                Planning & Safety FAQ
              </Link>
            </div>
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

        <div className="mt-10 flex justify-center">
          <Link
            href="/america-250-celebrations"
            className="
              inline-flex justify-center items-center
              bg-gradient-to-r from-red-500 via-white to-blue-500
              text-black font-bold py-4 px-9 rounded-full
              shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
              transform hover:scale-105 transition
              font-orbitron
            "
          >
            Explore America 250 Shows
          </Link>
        </div>
      </section>

      {/* ================= STATE SEO HUBS (YOU ALREADY HAVE THESE ROUTES) ================= */}
      <section className="py-14 sm:py-16 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-10">
          Statewide Patriotic Drone Shows
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <QuickLink
            href="/california-drone-light-shows"
            title="California Drone Shows"
            desc="City, coastal, and large public drone sources statewide."
          />
          <QuickLink
            href="/nevada-drone-light-shows"
            title="Nevada Drone Shows"
            desc="Municipal and major event drone shows across Nevada."
          />
          <QuickLink
            href="/arizona-drone-light-shows"
            title="Arizona Drone Shows"
            desc="Drone shows built for desert venues and large crowds."
          />
          <QuickLink
            href="/utah-drone-light-shows"
            title="Utah Drone Shows"
            desc="Community celebrations and city events statewide."
          />
          <QuickLink
            href="/colorado-drone-light-shows"
            title="Colorado Drone Shows"
            desc="City and resort events with scalable productions."
          />
          <QuickLink
            href="/locations"
            title="All Locations"
            desc="See our nationwide coverage and where we deploy teams."
          />
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
              Every show follows the same operational standards, creative process, and
              execution framework. Whether your event is in a major metro, a coastal city,
              or a rural community, you receive the same professional-grade production,
              custom animation design, and coordinated execution.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <NetworkPill title="Nationwide Coverage">
                Teams positioned across the U.S. allow rapid deployment to cities, venues,
                and event sites nationwide.
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

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="
                  inline-flex justify-center items-center
                  bg-white text-black font-bold py-4 px-8 rounded-full
                  hover:bg-gray-200 transition font-orbitron
                "
              >
                Plan a Nationwide Drone Show
              </Link>

              <Link
                href="/national-drone-light-show-operator"
                className="
                  inline-flex justify-center items-center
                  border border-white/30 text-white font-bold py-4 px-8 rounded-full
                  hover:border-white hover:bg-white/10 transition font-orbitron
                "
              >
                Why a National Operator
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-500 text-sm">
            Operated by Skylight Ads LLC • Nationwide network • FAA Part 107 • Insured operations
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= QUICK LINK CARD ================= */
function QuickLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-800 bg-black/30 p-5 hover:bg-white/5 transition"
    >
      <div className="font-orbitron text-lg font-bold text-white">{title}</div>
      <p className="mt-2 text-gray-300 text-sm leading-relaxed">{desc}</p>
      <div className="mt-3 font-orbitron text-sm text-white/80 group-hover:text-white">
        View →
      </div>
    </Link>
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
    <div className="text-center p-8 bg-gray-900/60 rounded-3xl border border-gray-800 shadow-lg">
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
