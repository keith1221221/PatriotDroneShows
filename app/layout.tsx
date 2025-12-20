import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import HeaderPatriot from "../components/HeaderPatriot";
import Footer from "../components/FooterPatriot";

const inter = Inter({ subsets: ["latin"] });

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
    "July 4th drone show",
    "4th of July drone light show",
    "Veterans Day drone show",
    "Memorial Day drone show",
    "nationwide drone light show",
    "drone show company",
    "city drone show",
    "municipal drone light show",
    "drone fireworks show",
    "fireworks alternative drone show",
  ],
  alternates: { canonical: "https://www.patriotdroneshows.com/" },
  openGraph: {
    type: "website",
    url: "https://www.patriotdroneshows.com/",
    title: "Patriot Drone Shows | Nationwide Patriotic Drone Light Shows",
    description:
      "Book a custom patriotic drone light show anywhere in the U.S. Perfect for July 4th, Veterans Day, Memorial Day, city events, and festivals.",
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
      "Nationwide patriotic drone light shows for July 4th, Veterans Day, Memorial Day, and city celebrations.",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Patriot Drone Shows",
    url: "https://www.patriotdroneshows.com",
    logo: "https://www.patriotdroneshows.com/patriot-og.png",
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nationwide Patriotic Drone Light Shows",
    provider: {
      "@type": "Organization",
      name: "Patriot Drone Shows",
      url: "https://www.patriotdroneshows.com",
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "Drone light show entertainment",
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>

      <body className={`${inter.className} bg-black text-white`}>
        <HeaderPatriot />
        <main className="pt-10 md:pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
