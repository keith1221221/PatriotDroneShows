import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Drone Light Show Operator | Patriot Drone Shows",
  description:
    "Patriot Drone Shows is a national drone light show operator delivering large-scale, patriotic, and civic drone light shows across the United States for July 4th, America 250, Veterans Day, and municipal celebrations.",
  alternates: {
    canonical: "https://www.patriotdroneshows.com/national-drone-light-show-operator",
  },
};

export default function NationalDroneShowOperatorPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="pt-20 sm:pt-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            A National Drone Light Show Operator
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
            Patriot Drone Shows operates as a{" "}
            <span className="text-white font-semibold">
              national drone light show operator
            </span>{" "}
            specializing in patriotic, civic, and large-scale public events across
            the United States.
          </p>
        </div>
      </section>

      {/* ================= WHAT MAKES US NATIONAL ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-orbitron text-2xl sm:text-4xl font-bold mb-8 text-center">
            What Defines a National Drone Light Show Operator
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              A national drone light show operator is more than a local drone team
              that travels occasionally. It requires standardized operations,
              scalable logistics, and the ability to deliver consistent show
              quality regardless of location.
            </p>

            <p>
              Patriot Drone Shows was built from the ground up to operate at a
              national level. Our model supports simultaneous events, multi-city
              planning, and complex civic requirements while maintaining a single
              creative and operational standard.
            </p>

            <p>
              From early-stage planning to final execution, our team works closely
              with municipalities, event producers, and organizing committees to
              ensure compliance, safety, and show quality anywhere in the country.
            </p>
          </div>
        </div>
      </section>

      {/* ================= NATIONAL CAPABILITIES ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-2xl sm:text-4xl font-bold mb-12 text-center">
            Nationwide Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Capability title="Nationwide Coverage">
              Professional drone teams positioned across the U.S. enable efficient
              deployment without sacrificing execution standards.
            </Capability>

            <Capability title="Standardized Operations">
              Every show follows the same planning framework, safety protocols,
              and production methodology nationwide.
            </Capability>

            <Capability title="Civic & Municipal Expertise">
              Experience supporting permitting, FAA compliance, and public event
              coordination for city and government clients.
            </Capability>

            <Capability title="Scalable Productions">
              From regional celebrations to major national events, our shows scale
              in drone count, complexity, and storytelling.
            </Capability>
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-orbitron text-2xl sm:text-4xl font-bold mb-8">
            National Events We Support
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Patriot Drone Shows supports national and multi-city events where
            consistency, safety, and public trust are critical.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <UseCase title="America 250 Celebrations">
              Large-scale patriotic storytelling designed for nationwide
              commemorations and historic milestones.
            </UseCase>

            <UseCase title="July 4th & National Holidays">
              Fireworks-alternative drone shows delivered safely across multiple
              states and regions.
            </UseCase>

            <UseCase title="Municipal & City Events">
              Permitted, insured drone light shows for city-sponsored celebrations
              and civic gatherings.
            </UseCase>

            <UseCase title="Large Public Gatherings">
              Festivals, national brand activations, and multi-day events requiring
              coordinated execution.
            </UseCase>
          </div>
        </div>
      </section>

      {/* ================= INTERNAL LINKS ================= */}
      <section className="py-16 px-4 sm:px-6 bg-gray-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-orbitron text-2xl sm:text-3xl font-bold mb-6">
            Explore Our Nationwide Programs
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/patriotic-drone-light-shows"
              className="inline-flex justify-center items-center border border-white/30 text-white font-bold py-4 px-7 rounded-full hover:bg-white/10 transition font-orbitron"
            >
              Patriotic Drone Light Shows
            </Link>

            <Link
              href="/america-250-celebrations"
              className="inline-flex justify-center items-center border border-white/30 text-white font-bold py-4 px-7 rounded-full hover:bg-white/10 transition font-orbitron"
            >
              America 250 Programs
            </Link>

            <Link
              href="/locations"
              className="inline-flex justify-center items-center border border-white/30 text-white font-bold py-4 px-7 rounded-full hover:bg-white/10 transition font-orbitron"
            >
              Nationwide Locations
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-4 sm:px-6 text-center">
        <h2 className="font-orbitron text-2xl sm:text-4xl font-bold mb-6">
          Plan a National Drone Light Show
        </h2>

        <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
          If you’re planning a national or multi-city event, our team can help
          design and execute a drone light show that meets scale, safety, and
          storytelling requirements.
        </p>

        <Link
          href="/contact"
          className="inline-flex justify-center items-center bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition font-orbitron"
        >
          Contact Our National Team
        </Link>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Capability({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center p-6 bg-black/40 border border-gray-800 rounded-2xl">
      <h3 className="font-orbitron font-bold text-lg mb-3">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}

function UseCase({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 text-center">
      <h3 className="font-orbitron font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
