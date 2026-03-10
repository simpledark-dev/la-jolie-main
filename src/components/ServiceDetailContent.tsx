"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Hand, Footprints, Layers, Palette, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import { FloralBranch, FloralPeony, FloralWildflower, FloralScatter } from "@/components/FloralDecorations";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";
import type { StaticImageData } from "next/image";
import { useBooking } from "@/components/BookingProvider";

const iconMap: Record<string, LucideIcon> = {
  manicure: Hand,
  pedicure: Footprints,
  extensions: Layers,
  "nail-design": Palette,
  waxing: Sparkles,
};

interface ServiceItem {
  name: string;
  price: string;
}

interface ComboItem {
  name: string;
  price: string;
}

interface ServiceDetailContentProps {
  slug: string;
  category: string;
  description: string;
  items: ServiceItem[];
  images: StaticImageData[];
  relatedCombos: ComboItem[];
}

export default function ServiceDetailContent({
  slug,
  category,
  description,
  items,
  images,
  relatedCombos,
}: ServiceDetailContentProps) {
  const { t } = useTranslation();
  const openBooking = useBooking();
  const Icon = iconMap[slug] ?? Hand;

  const cat = t.serviceCategories[slug as keyof typeof t.serviceCategories];
  const translatedCategory = cat?.category ?? category;
  const translatedDescription = cat?.description ?? description;

  // Translate item names
  const translatedItems = items.map((item) => ({
    name: cat?.items?.[item.name as keyof typeof cat.items] ?? item.name,
    price: item.price,
  }));

  // Translate combo names
  const translatedCombos = relatedCombos.map((combo) => ({
    name: t.comboPackages[combo.name as keyof typeof t.comboPackages] ?? combo.name,
    price: combo.price,
  }));

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, #FBF8F4, #F9F0EC, #F3EDE4)",
            }}
          />
          <div className="bg-blur-accent absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gold-light/20 to-transparent blur-3xl" />
          <div className="bg-blur-accent absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blush/40 to-transparent blur-3xl" />
        </div>

        <FloralBranch className="absolute top-16 right-6 lg:right-20 w-40 lg:w-56 h-auto text-gold/40 select-none pointer-events-none" />
        <FloralPeony className="absolute bottom-4 left-4 lg:left-16 w-36 lg:w-48 h-auto text-blush-dark/30 select-none pointer-events-none" />

        <div className="absolute top-0 left-0 right-0 h-[1px] gold-shimmer" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/#services"
            className="animate-fade-in-up inline-flex items-center gap-2 font-body text-sm text-brown-500 transition-colors hover:text-gold-dark mb-10"
          >
            <ArrowLeft size={14} />
            {t.serviceDetail.backToServices}
          </Link>

          <div className="max-w-3xl">
            <div className="animate-fade-in-up animation-delay-200 flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-blush flex items-center justify-center">
                <Icon size={24} className="text-brown-600" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-brown-900">
                {translatedCategory}
              </h1>
            </div>

            <p className="animate-fade-in-up animation-delay-400 font-body text-lg md:text-xl leading-relaxed text-brown-500 font-light max-w-2xl">
              {translatedDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      {images.length > 0 && (
        <section className="relative py-16 lg:py-20 bg-warm-white overflow-hidden">
          <ScrollReveal>
            <div className="relative z-10 mx-auto max-w-2xl px-6 lg:px-10">
              <ImageCarousel images={images} alt={translatedCategory} />
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Pricing */}
      <section className="relative py-16 lg:py-24 bg-cream grain-overlay overflow-hidden">
        <div className="bg-blur-accent absolute top-0 right-0 w-80 h-80 bg-blush-light/30 rounded-full blur-[120px]" />

        <FloralWildflower className="absolute top-10 left-4 lg:left-16 w-28 lg:w-40 h-auto text-gold/30 select-none pointer-events-none" />
        <FloralScatter className="absolute bottom-6 right-0 lg:right-8 w-56 lg:w-80 h-auto text-brown-300/25 select-none pointer-events-none" />
        <FloralBranch className="absolute -bottom-10 left-1/2 w-32 lg:w-44 h-auto text-blush-dark/20 select-none pointer-events-none rotate-12" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
                {t.serviceDetail.pricing}
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-brown-900">
                {translatedCategory}{" "}
                <span className="italic font-light text-brown-600">
                  {t.serviceDetail.servicesLabel}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-warm-white rounded-2xl border border-brown-100/40 shadow-[0_8px_30px_rgba(44,30,16,0.05)] p-8 sm:p-10 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              <div className="space-y-0">
                {translatedItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline gap-3 py-3.5 first:pt-0 last:pb-0"
                  >
                    <span className="font-body text-base text-brown-700">
                      {item.name}
                    </span>
                    <span className="flex-1 border-b border-dotted border-brown-200/60 min-w-[20px] translate-y-[-3px]" />
                    <span className="flex-shrink-0 font-display text-lg font-semibold text-brown-800">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {translatedCombos.length > 0 && (
              <div className="mt-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-warm-white via-cream to-blush-light/20 p-8 sm:p-10 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] gold-shimmer" />

                <h3 className="font-display text-xl font-semibold text-brown-800 mb-6">
                  {t.serviceDetail.comboPackages}
                </h3>
                <div className="space-y-0">
                  {translatedCombos.map((combo) => (
                    <div
                      key={combo.name}
                      className="flex items-baseline gap-3 py-3"
                    >
                      <span className="font-body text-base font-medium text-brown-700">
                        {combo.name}
                      </span>
                      <span className="flex-1 border-b border-dotted border-brown-200/60 min-w-[20px] translate-y-[-3px]" />
                      <span className="flex-shrink-0 font-display text-lg font-semibold text-brown-800">
                        {combo.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <button
                onClick={openBooking}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brown-700 text-warm-white font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-brown-800 hover:shadow-[0_8px_30px_rgba(92,64,51,0.3)] hover:-translate-y-0.5 cursor-pointer"
              >
                {t.serviceDetail.bookThisService}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
