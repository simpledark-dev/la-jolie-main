import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { BookingProvider } from "@/components/BookingProvider";

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

const siteUrl = "https://ongles-diamant.com";
const siteName = "Ongles Diamant";
const siteDescription =
  "Premium nail salon on Rue Saint-Hubert in Montreal's Petite-Patrie. Gel nails, manicure, pedicure & custom nail art — by appointment only. Book your visit today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ongles Diamant — Premium Nail Salon in Montreal",
  description: siteDescription,
  keywords: [
    "nail salon Petite-Patrie Montreal",
    "gel nails Montreal",
    "manicure pedicure Petite-Patrie",
    "nail art Montreal",
    "Ongles Diamant",
    "Gel X nails Montreal",
    "biogel nails",
    "shellac manicure Montreal",
    "biogel refill Montreal",
    "nail salon Saint-Hubert",
    "premium nail care Montreal",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Ongles Diamant — Premium Nail Salon",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ongles Diamant — Premium Nail Salon in Montreal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ongles Diamant — Premium Nail Salon",
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
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${jost.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NailSalon",
              name: "Ongles Diamant",
              description: siteDescription,
              url: siteUrl,
              telephone: "+15145433040",
              image: `${siteUrl}/icon.png`,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6843 Rue St-Hubert",
                addressLocality: "Montréal",
                addressRegion: "QC",
                postalCode: "H2S 2M7",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.5410144,
                longitude: -73.6121572,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Thursday", "Sunday"],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              sameAs: ["https://www.instagram.com/ongles_diamant_rose/"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "5",
                bestRating: "5",
              },
            }),
          }}
        />
        <LanguageProvider>
        <BookingProvider>
        <ScrollToTop />
        {children}
        </BookingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
