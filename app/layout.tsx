import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Orbitron, Poppins } from "next/font/google";
import Script from "next/script";
import HeaderPatriot from "../components/HeaderPatriot";
import Footer from "../components/FooterPatriot";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

// ✅ GTM container ID (Patriot)
const GTM_ID = "GTM-MDSHQQCP";

// Optional: set these later (recommended via env vars)
// const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patriotdroneshows.com"),
  title: {
    default: "Patriot Drone Shows | Nationwide Patriotic Drone Light Shows",
    template: "%s | Patriot Drone Shows",
  },
  description:
    "Patriot Drone Shows delivers breathtaking patriotic drone light shows nationwide for July 4th, Veterans Day, Memorial Day, city celebrations, festivals, and brand activations.",
  keywords: [
    "patriotic drone show",
    "patriot drone shows",
    "Veterans Day drone show",
    "Memorial Day drone show",
    "nationwide drone light show",
    "Chrismas drone light show",
    "X-mas drone light shows",
    "New Years Eve Drone Shows",
    "drone show company",
    "city drone show",
    "municipal drone light show",
    "drone fireworks show",
    "fireworks alternative drone show",
    "America 250 drone show",
  ],
  openGraph: {
    type: "website",
    url: "https://www.patriotdroneshows.com/",
    title: "Patriot Drone Shows | Nationwide Patriotic Drone Light Shows",
    description:
      "Book a custom patriotic drone light show anywhere in the U.S. Perfect for America 250 celebrations, Veterans Day, Memorial Day, city events, and festivals.",
    siteName: "Patriot Drone Shows",
    images: [
      {
        url: "/patriot-og.png",
        width: 1200,
        height: 630,
        alt: "Patriot Drone Shows aerial display of a flag and stars",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patriot Drone Shows | Nationwide Patriotic Drone Light Shows",
    description:
      "Nationwide patriotic drone light shows for America 250, Veterans Day, Memorial Day, and city celebrations.",
    images: ["/patriot-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },

  // ✅ Add these when you have them:
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  //   other: { "msvalidate.01": "YOUR_BING_CODE" },
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const baseUrl = "https://www.patriotdroneshows.com";

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Patriot Drone Shows",
    url: baseUrl,
    logo: `${baseUrl}/patriot-og.png`,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Patriot Drone Shows",
    url: baseUrl,
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nationwide Patriotic Drone Light Shows",
    provider: {
      "@type": "Organization",
      name: "Patriot Drone Shows",
      url: baseUrl,
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "Drone light show entertainment",
  };

  return (
    <html lang="en">
      <body
        className={[
          inter.className,
          orbitron.variable,
          poppins.variable,
          "bg-black text-white",
        ].join(" ")}
      >
        {/* ✅ Google Tag Manager (script) */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* JSON-LD (safe + stable) */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="ld-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />

        <HeaderPatriot />

        {/* IMPORTANT: fixed-header offset lives here (pages should NOT add their own top padding) */}
        <main className="pt-[64px] md:pt-[72px]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
