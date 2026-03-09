import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://lajoliemain.ca";
const siteName = "La Jolie Main";
const siteDescription =
  "Premium nail salon in Saint-Laurent, Montreal. Gel nails, manicure, pedicure, nail art & waxing — by appointment only. Book your visit today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "La Jolie Main — Premium Nail Salon in Montreal",
  description: siteDescription,
  keywords: [
    "nail salon Saint-Laurent Montreal",
    "gel nails Montreal",
    "manicure pedicure Saint-Laurent",
    "nail art Montreal",
    "La Jolie Main",
    "Gel X nails Montreal",
    "biogel nails",
    "shellac manicure Montreal",
    "waxing Saint-Laurent",
    "nail salon Décarie",
    "premium nail care Montreal",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "La Jolie Main — Premium Nail Salon",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Jolie Main — Premium Nail Salon in Montreal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Jolie Main — Premium Nail Salon",
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${jost.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NailSalon",
              name: "La Jolie Main",
              description: siteDescription,
              url: siteUrl,
              telephone: "+12635529513",
              image: `${siteUrl}/icon.png`,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "487 Bd Décarie, unit B",
                addressLocality: "Saint-Laurent",
                addressRegion: "QC",
                postalCode: "H4L 3L1",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.5087106,
                longitude: -73.673414,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Thursday", "Sunday"],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              sameAs: ["https://www.instagram.com/lajoliemain.mtl/"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "5",
                bestRating: "5",
              },
            }),
          }}
        />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
