import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "America 250 Drone Light Shows Nationwide | Patriot Drone Shows",
  description:
    "Patriot Drone Shows delivers nationwide America 250 drone light shows for the 250th anniversary celebrations, city events, festivals, and civic programming.",
  alternates: {
    canonical: "https://www.patriotdroneshows.com/america-250-celebrations",
  },
};

export default function America250CelebrationsPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="w-full pt-16 sm:pt-24">
        <div className="relative w-full">
          {/* Video */}
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
            {/* TOP TEXT */}
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
                America 250
                <br className="sm:hidden" />
                Celebrations
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
                Nationwide drone light shows created for the 250th anniversary of
                America — a modern way to unite communities with story-driven,
                unforgettable visuals.
              </p>
            </div>

            {/* PUSH CONTENT DOWN */}
            <div className="flex-1" />

            {/* BOTTOM H2 */}
            <div className="pb-3 sm:pb-6 text-center">
              <h2
                className="
                  font-orbitron
                  text-lg sm:text-2xl md:text-3xl
                  font-bold
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.9)]
                  px-2
                "
              >
                Patriotic Drone Light Shows That Replace Fireworks — Without the
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
                href="/contact"
                className="
                  inline-flex justify-center items-center
                  bg-gradient-to-r from-red-500 via-white to-blue-500
                  text-black font-bold py-4 px-7 rounded-full
                  shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
                  transition font-orbitron
                "
              >
                Request a Quote
              </Link>

              <Link
                href="/locations"
                className="
                  inline-flex justify-center items-center
                  border border-white/30 text-white font-bold
                  py-4 px-7 rounded-full
                  hover:bg-white/10 transition font-orbitron
                "
              >
                View Nationwide Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Patriot Drone Shows produces{" "}
            <span className="text-white font-semibold">
              large-scale America 250 drone light shows
            </span>{" "}
            for cities, municipalities, civic organizations, and festivals.
            Quiet, eco-friendly, and fully customizable — designed to celebrate
            America’s 250th anniversary with impact and pride.
          </p>
        </div>
      </section>
    </main>
  );
}
