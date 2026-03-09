import { Hand, Footprints, Layers, Palette, Sparkles, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

import nudeBlushClassic from "@/assets/gallery/nude-blush-classic.jpg";
import nudeBlushClassic2 from "@/assets/gallery/nude-blush-classic-2.jpg";
import pearlShimmerNatural from "@/assets/gallery/pearl-shimmer-natural.jpg";
import pearlShimmerNatural2 from "@/assets/gallery/pearl-shimmer-natural-2.jpg";
import pastelAuroraChrome from "@/assets/gallery/pastel-aurora-chrome.jpg";
import pastelAuroraChrome2 from "@/assets/gallery/pastel-aurora-chrome-2.jpg";
import frenchButterflyWhite from "@/assets/gallery/french-butterfly-white.jpg";
import frenchButterflyWhite2 from "@/assets/gallery/french-butterfly-white-2.jpg";
import floralBlossomArt from "@/assets/gallery/floral-blossom-art.jpg";
import floralBlossomArt2 from "@/assets/gallery/floral-blossom-art-2.jpg";
import leopardBowFrench from "@/assets/gallery/leopard-bow-french.jpg";
import leopardBowFrench2 from "@/assets/gallery/leopard-bow-french-2.jpg";
import redFrenchFloral from "@/assets/gallery/red-french-floral.jpg";
import redFrenchFloral2 from "@/assets/gallery/red-french-floral-2.jpg";
import whiteBowFrenchSquare from "@/assets/gallery/white-bow-french-square.jpeg";
import whiteBowFrenchSquare2 from "@/assets/gallery/white-bow-french-square-2.jpeg";

export interface ServiceItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  slug: string;
  category: string;
  icon: LucideIcon;
  description: string;
  images: StaticImageData[];
  items: ServiceItem[];
}

export interface ComboPackage {
  name: string;
  price: string;
}

export const services: ServiceCategory[] = [
  {
    slug: "manicure",
    category: "Manicure",
    icon: Hand,
    description:
      "Pamper your hands with our expert manicure services. From classic polish to long-lasting shellac, we shape, buff, and perfect every nail with care and precision.",
    images: [nudeBlushClassic, pearlShimmerNatural, frenchButterflyWhite2, nudeBlushClassic2],
    items: [
      { name: "Gel Nail Polish", price: "$30" },
      { name: "Gel Nail Polish Removal", price: "$10" },
      { name: "Manicure", price: "$30" },
      { name: "Shellac Manicure", price: "$40" },
      { name: "Nail Repair", price: "$7" },
    ],
  },
  {
    slug: "pedicure",
    category: "Pedicure",
    icon: Footprints,
    description:
      "Treat your feet to a relaxing pedicure experience. We soak, exfoliate, and polish to leave your toes looking beautiful and feeling refreshed from heel to tip.",
    images: [nudeBlushClassic2, pearlShimmerNatural2, pearlShimmerNatural, pastelAuroraChrome2],
    items: [
      { name: "Regular Pedicure", price: "$45" },
      { name: "Shellac Pedicure", price: "$65" },
      { name: "Nail Polish", price: "$35" },
      { name: "Paraffin", price: "$20" },
    ],
  },
  {
    slug: "extensions",
    category: "Full Set / Extensions",
    icon: Layers,
    description:
      "Add length and strength with our professional nail extensions. Whether you prefer Biogel for a natural look or Gel X for instant glam, we build sets that last.",
    images: [pastelAuroraChrome, frenchButterflyWhite, pastelAuroraChrome2, whiteBowFrenchSquare2, nudeBlushClassic],
    items: [
      { name: "Biogel", price: "$65" },
      { name: "Biogel Refill", price: "$50" },
      { name: "Biogel / Gel X Removal", price: "$25" },
      { name: "Gel X", price: "$60" },
      { name: "Extra Long Nails", price: "+$5" },
    ],
  },
  {
    slug: "nail-design",
    category: "Nail Design",
    icon: Palette,
    description:
      "Express yourself with custom nail art. From elegant French tips to bold chrome finishes and hand-painted designs — bring your vision, and we'll make it real.",
    images: [floralBlossomArt, leopardBowFrench, redFrenchFloral, whiteBowFrenchSquare, floralBlossomArt2, leopardBowFrench2, redFrenchFloral2],
    items: [
      { name: "Nail Art / Design", price: "$5 – $25+" },
      { name: "French Tip Add-on", price: "$15" },
      { name: "Chrome / Special", price: "$15" },
      { name: "Diamond Cat Eye", price: "$15+" },
      { name: "Ombre", price: "$15+" },
    ],
  },
  {
    slug: "waxing",
    category: "Waxing",
    icon: Sparkles,
    description:
      "Smooth, clean results with our gentle waxing services. We offer facial and body waxing in a comfortable, hygienic setting — quick sessions with lasting smoothness.",
    images: [],
    items: [
      { name: "Eyebrow", price: "$25" },
      { name: "Chin", price: "$10" },
      { name: "Mustache", price: "$10" },
      { name: "Upper Lip", price: "$10" },
      { name: "Full Face", price: "$35" },
      { name: "Full Arm", price: "$40" },
      { name: "Half Arm", price: "$30" },
      { name: "Full Legs", price: "$55" },
      { name: "Half Leg", price: "$35" },
      { name: "Underarms", price: "$20" },
    ],
  },
];

export const comboPackages: ComboPackage[] = [
  { name: "Classic Mani + Pedi", price: "$70" },
  { name: "Shellac Mani + Pedi", price: "$100" },
  { name: "New Set Biogel + Shellac Pedi", price: "$120" },
  { name: "Refill Biogel + Shellac Pedi", price: "$105" },
];

export const comboPackageIcon = Package;

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedCombos(slug: string): ComboPackage[] {
  if (slug === "manicure" || slug === "pedicure") return comboPackages;
  if (slug === "extensions")
    return comboPackages.filter((c) => c.name.toLowerCase().includes("biogel"));
  return [];
}
