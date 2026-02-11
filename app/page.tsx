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
  // ================= FAQ JSON-LD (quoteable + eligible for rich results) =================
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a patriotic drone light show?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A patriotic drone light show is a coordinated aerial display where hundreds of LED-equipped drones fly in formation to create flags, stars, eagles, dates, logos, and animated storytelling — synchronized to music if desired.",
        },
      },
      {
        "@type": "Question",
        name: "Are drone shows a replacement for fireworks?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Drone shows deliver fireworks-style excitement without fire risk, loud explosions, smoke, or debris. Many venues use drone shows where fireworks are restricted or where safety and cleanup are top priorities.",
        },
      },
      {
        "@type": "Question",
        name: "How many drones do we need?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Drone count depends on viewing distance, show complexity, and whether you want large icons (flag, eagle, Statue of Liberty) versus detailed animations. We recommend a drone count based on your venue footprint and audience size.",
        },
      },
      {
        "@type": "Question",
        name: "How long is a typical show?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most patriotic drone shows run 8–15 minutes, with multiple sequences and a strong finale. We can tailor duration to your event program, sound ordinances, and crowd flow.",
        },
      },
      {
        "@type": "Question",
        name: "What do you need from the venue?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We typically need an approved flight area, a safe launch/landing zone, crowd separation, and basic site access. We coordinate planning details and provide guidance on logistics, safety, and permitting.",
        },
      },
      {
        "@type": "Question",
        name: "Are your operations FAA-compliant and insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We operate under FAA Part 107 and follow a consistent safety framework nationwide. We maintain insurance and provide documentation as required by venues and municipalities.",
        },
      },
    ],
  };

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

      {/* FAQ JSON-LD */}
      <Script
        id="ld-faq-patriotic-drone-shows"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="w-full">
        <div className="relative w-full">
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

          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-black/75" />

          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">
            <div className="pt-8 sm:pt-12 text-center">
              <p className="font-orbitron text-xs sm:text-sm text-white/80 tracking-widest">
                PATRIOTIC DRONE LIGHT SHOWS • NATIONWIDE
              </p>

              <h1
                className="
                  mt-3
                  font-orbitron font-bold
                  text-3xl sm:text-5xl lg:text-6xl
                  leading-tight
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]
                  px-3
                "
              >
                Patriotic Drone Light Shows
              </h1>

              <p
                className="
                  mt-3 sm:mt-4
                  max-w-3xl mx-auto
                  text-base sm:text-xl md:text-2xl
                  text-gray-100
                  leading-relaxed
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]
                  px-3
                "
              >
                America 250 • July 4th • Memorial Day • Veterans Day • City celebrations
              </p>

              <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-white/85 leading-relaxed">
                <span className="text-white font-semibold">
                  A patriotic drone show is a fireworks-style aerial spectacle —
                </span>{" "}
                created with synchronized drones instead of explosives.
              </p>
            </div>

            <div className="flex-1" />

            <div className="pb-6 sm:pb-10 text-center">
              <h2 className="font-orbitron text-lg sm:text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_14px_rgba(0,0,0,0.9)] px-2">
                Replace Fireworks — Without the Fallout
              </h2>

              <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                <Tag>Venue-safe</Tag>
                <Tag>Quiet</Tag>
                <Tag>No smoke</Tag>
                <Tag>No debris</Tag>
                <Tag>Insured</Tag>
                <Tag>FAA Part 107</Tag>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PRIMARY CTA BUTTONS ================= */}
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-5 pb-10 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <PrimaryCTA href="/contact">Request a Quote</PrimaryCTA>
              <SecondaryCTA href="/locations">View Nationwide Locations</SecondaryCTA>
            </div>
          </div>
        </div>
      </section>

      {/* ================= “QUOTEABLE” DEFINITION STRIP ================= */}
      <section className="px-4 sm:px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-800 bg-gray-900/35 p-6 sm:p-8">
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-center">
              What You’re Booking
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuoteCard
  title="A modern fireworks alternative"
  body="Aerial formations and animated patriotic storytelling — without fire risk, loud explosions, smoke, or cleanup debris."
  imageSrc="/PatriotDroneShows/fireworks.webp"
  imageAlt="Drone show fireworks alternative"
/>

<QuoteCard
  title="Custom to your city and event"
  body="Flags, stars, eagles, dates, city names, sponsor logos, and themed sequences designed for your audience."
  imageSrc="/PatriotDroneShows/vegas_sign.webp"
  imageAlt="Custom drone show designs"
/>

<QuoteCard
  title="Nationwide delivery, one standard"
  body="Consistent planning, safety framework, and execution approach across the United States."
  imageSrc="/PatriotDroneShows/us_outline.webp"
  imageAlt="Nationwide drone show operations"
/>

            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <SecondaryCTA href="#how-it-works">How it works</SecondaryCTA>
              <SecondaryCTA href="#faq">Read the FAQ</SecondaryCTA>
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
                desc="Permitting, FAA approach, logistics, and event planning answers."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FIREWORKS ALTERNATIVE (VIDEO BG) ================= */}
      <section className="relative w-full h-[72vh] sm:h-[78vh] overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <Image
            src="/fireworks_comp.webp"
            alt="Patriotic backdrop"
            width={1600}
            height={900}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />

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

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
              A Powerful Alternative to Fireworks
            </h2>

            <p className="mt-5 text-lg sm:text-xl text-gray-100 leading-relaxed drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
              Create fireworks-style excitement with hundreds of synchronized drones —
              without fire risk, loud explosions, smoke, or debris.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <PrimaryCTA href="/contact">Get a Quote</PrimaryCTA>
              <SecondaryCTA href="/faq">Planning & Safety FAQ</SecondaryCTA>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PERFECT FOR ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-10">
          Perfect For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <UseCase title="America 250 Celebrations">
            Historic storytelling, flags, stars, and large-scale patriotic finales built for big audiences.
          </UseCase>
          <UseCase title="July 4th Events">
            Replace fireworks safely — ideal for venues, parks, and city celebrations with restrictions.
          </UseCase>
          <UseCase title="Veterans & Memorial Day">
            Meaningful aerial tributes honoring service and sacrifice with respectful pacing and imagery.
          </UseCase>
          <UseCase title="City & Municipal Events">
            Permitted, insured productions designed for public gatherings and predictable logistics.
          </UseCase>
        </div>

        <div className="mt-10 flex justify-center">
          <PrimaryCTA href="/america-250-celebrations">Explore America 250 Shows</PrimaryCTA>
        </div>
      </section>

      {/* ================= HOW IT WORKS (QUOTEABLE + SCANNABLE) ================= */}
      <section id="how-it-works" className="py-14 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/35 border border-gray-800 rounded-3xl p-7 sm:p-10">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center">
              How a Patriotic Drone Show Comes Together
            </h2>
            <p className="mt-4 text-center text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
              A successful drone show is planned like a live production: creative + safety + site logistics.
              We keep it straightforward, predictable, and venue-friendly.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <StepCard
                n="1"
                title="Venue + audience review"
                body="We confirm the event location, viewing distance, crowd footprint, and launch/landing zone requirements."
              />
              <StepCard
                n="2"
                title="Drone count recommendation"
                body="We recommend a drone count based on your goals: big icons, detailed animation, or a high-impact finale."
              />
              <StepCard
                n="3"
                title="Custom creative design"
                body="We build patriotic sequences (flag, stars, eagle) plus optional custom elements like dates, names, city, or sponsor logos."
              />
              <StepCard
                n="4"
                title="Planning + permitting support"
                body="We coordinate the operational plan and provide the info venues and municipalities typically request."
              />
              <StepCard
                n="5"
                title="On-site execution"
                body="We arrive, set up, run safety checks, and fly the show under a consistent nationwide standard."
              />
              <StepCard
                n="6"
                title="Clean finish"
                body="No fallout. No shells. No debris. Drone shows are designed to leave the venue as clean as we found it."
              />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <PrimaryCTA href="/contact">Request a Quote</PrimaryCTA>
              <SecondaryCTA href="/locations">See Where We Operate</SecondaryCTA>
            </div>
          </div>
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
            desc="City, coastal, and large public drone shows statewide."
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
            desc="See our nationwide coverage and deployment footprint."
          />
        </div>
      </section>

      {/* ================= NATIONWIDE NETWORK ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 sm:p-12">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-6">
              Nationwide Network — One Standard of Execution
            </h2>

            <div className="space-y-4 max-w-4xl mx-auto text-center">
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="text-white font-semibold">
                  Patriot Drone Shows delivers patriotic drone light shows across the United States.
                </span>{" "}
                We operate with consistent planning, safety standards, and show execution — regardless of location.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                If your city needs a professional fireworks alternative that scales, a drone show is designed to deliver:
                spectacle, safety, and a clean finish.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <NetworkPill title="Nationwide Coverage">
                Teams positioned across the U.S. allow rapid deployment to cities, venues, and event sites.
              </NetworkPill>
              <NetworkPill title="Standardized Operations">
                Consistent planning and safety protocols — no matter where your event takes place.
              </NetworkPill>
              <NetworkPill title="Scalable Productions">
                From regional celebrations to major national events, we scale with crowd size and show complexity.
              </NetworkPill>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <PrimaryCTA href="/contact">Plan a Nationwide Drone Show</PrimaryCTA>
              <SecondaryCTA href="/national-drone-light-show-operator">
                Why a National Operator
              </SecondaryCTA>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-500 text-sm">
            Operated by Skylight Ads LLC • Nationwide network • FAA Part 107 • Insured operations
          </div>
        </div>
      </section>

      {/* ================= FAQ (QUOTEABLE) ================= */}
      <section id="faq" className="py-14 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center">
            Patriotic Drone Show FAQ
          </h2>
          <p className="mt-4 text-center text-gray-300 text-lg max-w-3xl mx-auto">
            Short, direct answers that cities, venues, and event planners typically ask.
          </p>

          <div className="mt-10 space-y-4">
            <FaqItem
              q="What is a patriotic drone light show?"
              a="A patriotic drone light show is a coordinated aerial display where LED-equipped drones fly in formation to create flags, stars, eagles, dates, logos, and animated storytelling — synchronized to music if desired."
            />
            <FaqItem
              q="Are drone shows a replacement for fireworks?"
              a="Yes. Drone shows deliver fireworks-style excitement without fire risk, loud explosions, smoke, or debris. They’re commonly used where fireworks are restricted or where cleanup and safety are priorities."
            />
            <FaqItem
              q="How many drones do we need?"
              a="Drone count depends on viewing distance, show complexity, and whether you want large icons or detailed animation. We recommend a drone count based on your venue footprint and audience size."
            />
            <FaqItem
              q="How long is a typical show?"
              a="Most patriotic drone shows run 8–15 minutes with multiple sequences and a strong finale. We tailor duration to your program schedule and local constraints."
            />
            <FaqItem
              q="What do you need from the venue?"
              a="We typically need an approved flight area, a safe launch/landing zone, crowd separation, and site access. We guide the planning process and provide venue-ready details."
            />
            <FaqItem
              q="Are you FAA-compliant and insured?"
              a="Yes. We operate under FAA Part 107 and follow a consistent safety framework nationwide. We maintain insurance and can provide documentation commonly requested by venues and municipalities."
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <PrimaryCTA href="/contact">Request a Quote</PrimaryCTA>
            <SecondaryCTA href="/faq">More Planning & Safety</SecondaryCTA>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= UI COMPONENTS ================= */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-white/85">
      {children}
    </span>
  );
}

function PrimaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        inline-flex justify-center items-center
        bg-gradient-to-r from-red-500 via-white to-blue-500
        text-black font-bold py-4 px-7 rounded-full
        shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
        transform hover:scale-105 transition
        font-orbitron
      "
    >
      {children}
    </Link>
  );
}

function SecondaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        inline-flex justify-center items-center
        border border-white/30 text-white
        font-bold py-4 px-7 rounded-full
        hover:border-white hover:bg-white/10
        transform hover:scale-[1.02] transition
        font-orbitron
      "
    >
      {children}
    </Link>
  );
}

function QuoteCard({
  title,
  body,
  imageSrc,
  imageAlt,
}: {
  title: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-black/30 overflow-hidden">
      {imageSrc ? (
        <div className="relative h-28 sm:h-32">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={false}
          />
          {/* darken so text feels premium */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </div>
      ) : null}

      <div className="p-5">
        <div className="font-orbitron text-base sm:text-lg font-bold text-white">
          {title}
        </div>
        <p className="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}


function StepCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 font-orbitron font-bold">
          {n}
        </span>
        <h3 className="font-orbitron text-lg font-bold">{title}</h3>
      </div>
      <p className="mt-3 text-gray-300 leading-relaxed">{body}</p>
    </div>
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

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/25 p-6">
      <h3 className="font-orbitron text-lg font-bold text-white">{q}</h3>
      <p className="mt-3 text-gray-300 leading-relaxed">{a}</p>
    </div>
  );
}
