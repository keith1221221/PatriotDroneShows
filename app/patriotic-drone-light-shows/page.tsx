import Link from "next/link";
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

      {/* ================= HERO (SERVICE PAGE, SAME SPACING AS HOME) ================= */}
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

          {/* Overlay */}
          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">

            {/* TOP */}
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
                Nationwide drone light shows designed for July 4th, America 250,
                Veterans Day, Memorial Day, and city celebrations.
              </p>
            </div>

            <div className="flex-1" />

            {/* BOTTOM */}
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
                Patriotic Drone Shows That Replace Fireworks — Without the Fallout
              </h2>
            </div>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-4 sm:pt-6 pb-10 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Link
                href="/request-a-quote"
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
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Patriot Drone Shows specializes in{" "}
            <span className="text-white font-semibold">
              large-scale patriotic drone light shows
            </span>{" "}
            for national holidays, municipal celebrations, and civic events.
            Our shows are quiet, eco-friendly, and fully customizable — delivering
            a modern alternative to fireworks.
          </p>
        </div>
      </section>

      {/* ================= FIREWORKS ALTERNATIVE ================= */}
      <section className="relative w-full h-[70vh] sm:h-[75vh] overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <iframe
            src="https://player.vimeo.com/video/1147748380?autoplay=1&muted=1&loop=1&background=1&playsinline=1"
            title="Fireworks Alternative Drone Show"
            allow="autoplay; fullscreen; picture-in-picture"
            className="
              absolute left-1/2 top-1/2
              w-[177.78vh] h-[56.25vw]
              min-w-full min-h-full
              -translate-x-1/2 -translate-y-1/2
              pointer-events-none
            "
          />
        </div>

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 h-full flex items-end px-4 pb-10 sm:pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
              A Powerful Alternative to Fireworks
            </h2>

            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
              Create fireworks-style excitement with hundreds of synchronized
              drones — without fire risk, loud explosions, or environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-14">
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
