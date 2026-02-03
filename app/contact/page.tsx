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
      {/* Simple header (no hero video / big overlay) */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            Tell us your city, event date, and what you want in the sky. We’ll reply fast
            with a recommended drone count, pricing range, and next steps.
          </p>
        </div>
      </section>

      {/* Form */}
      <section id="contact-form" className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border border-gray-800 bg-gray-900/30 p-6 sm:p-8">
            <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-center">
              Request a Quote
            </h2>
            <p className="mt-2 text-center text-sm sm:text-base text-gray-300">
              The more details you share, the more accurate your quote will be.
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <p className="mt-6 text-center text-xs sm:text-sm text-gray-500">
            Nationwide service • Custom designs • FAA-compliant operations
          </p>
        </div>
      </section>
    </main>
  );
}
