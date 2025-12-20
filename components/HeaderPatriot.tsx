"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderPatriot() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/patriotic-drone-light-shows", label: "Drone Shows" },
    { href: "/america-250-celebrations", label: "America 250" },
    
    { href: "/locations", label: "Locations" },
    { href: "/contact", label: "Get a Quote" },
  ];

  const linkClass = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return [
      "font-orbitron text-sm sm:text-base transition",
      isActive
        ? "text-white border-b-2 border-white pb-1"
        : "text-gray-300 hover:text-white",
    ].join(" ");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

          {/* BRAND */}
          <Link href="/" className="flex items-center">
            <h1 className="font-orbitron font-bold text-lg sm:text-xl tracking-wide flex gap-2">
              <span className="text-red-500">PATRIOT</span>
              <span className="text-white">DRONE</span>
              <span className="text-blue-500">SHOWS</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-white text-3xl"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden flex flex-col">
          <div className="h-16" />
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className={[
                  "font-orbitron text-2xl transition",
                  pathname.startsWith(l.href)
                    ? "text-white"
                    : "text-gray-400 hover:text-white",
                ].join(" ")}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
