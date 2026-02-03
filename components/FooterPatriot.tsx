import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-12 sm:py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
              Patriot Drone Shows
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Nationwide patriotic drone light shows for July 4th, Veterans Day,
              Memorial Day, city celebrations, and festivals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/patriotic-drone-light-shows"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition"
                >
                  Drone Shows
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
              Follow Us
            </h3>

            <div className="space-y-3">
              <a
                href="https://www.facebook.com/patriotdroneshows"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-facebook-f text-lg" />
                <span className="text-sm sm:text-base">
                  facebook.com/patriotdroneshows
                </span>
              </a>

              <a
                href="https://www.instagram.com/patriotdroneshows"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-instagram text-lg" />
                <span className="text-sm sm:text-base">
                  instagram.com/patriotdroneshows
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Patriot Drone Shows. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
