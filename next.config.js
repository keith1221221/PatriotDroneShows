/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      // Only add domains here if you actually use next/image with remote URLs
      // { protocol: "https", hostname: "i.ytimg.com" },
      // { protocol: "https", hostname: "i.vimeocdn.com" },
    ],
  },

  async redirects() {
    return [
      // ✅ OLD HTML URLs (from Search Console) → NEW Next.js pages
      {
        source: "/contact-las-vegas-drone-shows.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/faq-las-vegas-drone-show.html",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/drone-advertising-las-vegas.html",
        destination: "/drone-advertising",
        permanent: true,
      },

      // ✅ Current / preferred slugs
      {
        source: "/drone-light-shows",
        destination: "/las-vegas-drone-light-shows",
        permanent: true,
      },
      {
        source: "/drone-light-show",
        destination: "/las-vegas-drone-light-shows",
        permanent: true,
      },
      {
        source: "/wedding",
        destination: "/weddings",
        permanent: true,
      },
      {
        source: "/conventions",
        destination: "/conventions-trade-shows",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // ✅ Cache static assets hard (Core Web Vitals win)
      {
        source:
          "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|mp4|webm|css|js|map|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // ✅ Keep API + chatbot out of the index at the HEADER level (belt & suspenders)
      {
        source: "/api/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/chatbot",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },

      // ✅ Global headers (safe for SEO + embeds)
      {
        source: "/(.*)",
        headers: [
          // SEO safety net (prevents accidental “noindex”)
          { key: "X-Robots-Tag", value: "index, follow" },

          // Security / trust (safe defaults)
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },

          // HSTS (only if you are ALWAYS https — which Vercel custom domains should be)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },

          // Optional: clickjacking protection.
          // SAMEORIGIN does NOT block you from embedding Vimeo/YouTube inside your site.
          // It only blocks OTHER sites from framing YOUR pages.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
