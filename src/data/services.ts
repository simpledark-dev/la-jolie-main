import { Hand, Footprints, Layers, Palette, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

import sheerPink3dFlowers from "@/assets/gallery/sheer-pink-3d-flowers.jpg";
import pearlChromeAlmond from "@/assets/gallery/pearl-chrome-almond.jpg";
import pinkLeopardStilettoBow from "@/assets/gallery/pink-leopard-stiletto-bow.jpg";
import pinkWhiteFrenchFloral from "@/assets/gallery/pink-white-french-floral.jpg";
import purpleGoldCloudArt from "@/assets/gallery/purple-gold-cloud-art.jpg";
import pastelFrenchMulticolor from "@/assets/gallery/pastel-french-multicolor.jpg";
import frenchPedicureWhiteTips from "@/assets/gallery/french-pedicure-white-tips.jpg";
import nudeGelPedicure from "@/assets/gallery/nude-gel-pedicure.jpg";
import glitterGoldPedicure from "@/assets/gallery/glitter-gold-pedicure.webp";
import pearlShimmerPedicure from "@/assets/gallery/pearl-shimmer-pedicure.webp";

export interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  priceFrom?: boolean;
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
  duration?: string;
}

export const services: ServiceCategory[] = [
  {
    slug: "manicure",
    category: "Manicure",
    icon: Hand,
    description:
      "Pamper your hands with our expert manicure services. From classic polish to long-lasting gel, we shape, buff, and perfect every nail with care and precision.",
    images: [sheerPink3dFlowers, pearlChromeAlmond, pinkWhiteFrenchFloral, pastelFrenchMulticolor],
    items: [
      { name: "Regular Manicure", price: "$25", duration: "30 min" },
      { name: "Gel Manicure", price: "$40", duration: "45 min" },
      { name: "Gel Color (Hands)", price: "$30", duration: "30 min" },
      { name: "Regular Polish (Hands)", price: "$20", duration: "15 min" },
    ],
  },
  {
    slug: "pedicure",
    category: "Pedicure",
    icon: Footprints,
    description:
      "Treat your feet to a relaxing pedicure experience. We soak, exfoliate, and polish to leave your toes looking beautiful and feeling refreshed from heel to tip.",
    images: [frenchPedicureWhiteTips, nudeGelPedicure, glitterGoldPedicure, pearlShimmerPedicure],
    items: [
      { name: "Regular Pedicure", price: "$45", duration: "45 min" },
      { name: "Gel Pedicure", price: "$50", duration: "60 min", priceFrom: true },
      { name: "Gel Polish (Feet)", price: "$30", duration: "30 min" },
      { name: "Regular Polish (Feet)", price: "$25", duration: "15 min" },
    ],
  },
  {
    slug: "extensions",
    category: "Full Set & Refills",
    icon: Layers,
    description:
      "Add length and strength with our professional nail extensions. Whether you prefer Biogel for a natural look or Gel X for instant glam, we build sets that last.",
    images: [sheerPink3dFlowers, pinkLeopardStilettoBow, pearlChromeAlmond, pinkWhiteFrenchFloral, pastelFrenchMulticolor],
    items: [
      { name: "Acrylic Full Set + Gel Polish", price: "$55", duration: "60 min", priceFrom: true },
      { name: "Biogel Full Set", price: "$60", duration: "60 min", priceFrom: true },
      { name: "Gel X Full Set", price: "$55", duration: "60 min", priceFrom: true },
      { name: "Toe Nail Full Set", price: "$55", duration: "60 min" },
      { name: "Acrylic Refill + Gel Polish", price: "$45", duration: "60 min", priceFrom: true },
      { name: "Biogel Refill", price: "$50", duration: "60 min", priceFrom: true },
      { name: "Acrylic Removal", price: "$20", duration: "30 min" },
    ],
  },
  {
    slug: "nail-design",
    category: "Nail Design",
    icon: Palette,
    description:
      "Express yourself with custom nail art. From elegant French tips to bold ombré finishes and hand-painted designs — bring your vision, and we'll make it real.",
    images: [sheerPink3dFlowers, pinkLeopardStilettoBow, purpleGoldCloudArt, pinkWhiteFrenchFloral, pastelFrenchMulticolor],
    items: [
      { name: "Nail Design / Art", price: "$5", duration: "15 min", priceFrom: true },
      { name: "Biogel Ombré", price: "$70", duration: "60 min" },
      { name: "French Manicure", price: "$15", duration: "15 min", priceFrom: true },
      { name: "American (Ombré) Manicure", price: "$15", duration: "15 min", priceFrom: true },
    ],
  },
];

export const comboPackages: ComboPackage[] = [
  { name: "Regular Pedicure + Manicure", price: "$70", duration: "90 min" },
  { name: "Gel Pedicure + Manicure", price: "$85", duration: "90 min" },
  { name: "Pedicure + Toe Nail Full Set", price: "$85", duration: "105 min" },
];

export const comboPackageIcon = Package;

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedCombos(slug: string): ComboPackage[] {
  if (slug === "manicure" || slug === "pedicure") return comboPackages;
  if (slug === "extensions")
    return comboPackages.filter((c) => c.name.toLowerCase().includes("toe nail"));
  return [];
}
