import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Patriot Drone Shows | Request a Drone Show Quote",
  description:
    "Contact Patriot Drone Shows to request pricing, availability, and drone count recommendations for patriotic drone light shows nationwide.",
  alternates: {
    canonical: "https://www.patriotdroneshows.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO (flag video, same spacing as other pages) ================= */}
      <section className="w-full pt-16 sm:pt-24">
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

          {/* Overlay */}
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
                Contact Patriot Drone Shows
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
                Tell us your city, event date, and vision — we’ll reply with a recommended
                drone count, pricing range, and next steps.
              </p>
            </div>

            <div className="flex-1" />

            {/* Bottom line */}
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
                Nationwide patriotic drone light shows • Fast response • Custom quotes
              </h2>
            </div>
          </div>
        </div>

        {/* Buttons UNDER video */}
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-4 sm:pt-6 pb-8 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-orbitron font-bold
                  bg-gradient-to-r from-red-500 via-white to-blue-500 text-black
                  shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition"
              >
                Get in Touch
              </a>

              <a
                href="/locations"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-bold rounded-full
                  hover:bg-white/10 transition font-orbitron"
              >
                View Locations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="contact-form" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            Request Information
          </h2>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
