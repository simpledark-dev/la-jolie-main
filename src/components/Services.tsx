"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { services, comboPackages, comboPackageIcon as Package } from "@/data/services";
import { useTranslation } from "@/i18n/LanguageContext";
import { useBooking } from "@/components/BookingProvider";

export default function Services() {
  const { t } = useTranslation();
  const openBooking = useBooking();
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-warm-white grain-overlay overflow-hidden">
      {/* Subtle background accents */}
      <div className="bg-blur-accent absolute top-0 right-0 w-96 h-96 bg-blush-light/40 rounded-full blur-[120px]" />
      <div className="bg-blur-accent absolute bottom-0 left-0 w-80 h-80 bg-gold-light/20 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
              {t.services.label}
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
              {t.services.headlinePart1}{" "}
              <span className="italic font-light text-brown-600">{t.services.headlinePart2}</span> {t.services.headlinePart3}
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-brown-500">
              {t.services.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((category, i) => (
            <ScrollReveal key={category.category} delay={i * 100}>
              <div className="group relative bg-cream/60 rounded-2xl border border-brown-100/40 p-7 pt-8 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(44,30,16,0.06)] hover:border-gold/30 overflow-hidden h-full">
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blush flex items-center justify-center transition-colors duration-300 group-hover:bg-gold-light">
                    <category.icon size={18} className="text-brown-600" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brown-800">
                    {t.serviceCategories[category.slug as keyof typeof t.serviceCategories]?.category ?? category.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-0">
                  {category.items.map((item) => (
                    <div key={item.name} className="py-2.5">
                      <div className="flex items-baseline gap-2">
                        <span className="font-body text-sm text-brown-700">
                          {(t.serviceCategories[category.slug as keyof typeof t.serviceCategories]?.items as Record<string, string>)?.[item.name] ?? item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-brown-200/60 min-w-[20px] translate-y-[-3px]" />
                        <span className="flex-shrink-0 font-display text-base font-semibold text-brown-800 whitespace-nowrap">
                          {item.priceFrom && <span className="font-body text-[10px] font-normal tracking-wider uppercase text-brown-400 mr-1">{t.services.from}</span>}
                          {item.price}
                        </span>
                      </div>
                      {item.duration && (
                        <p className="font-body text-[10px] tracking-[0.15em] uppercase text-brown-400 mt-0.5">
                          {item.duration}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* View Details Link */}
                <Link
                  href={`/services/${category.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 font-body text-xs font-medium tracking-wider uppercase text-gold-dark underline underline-offset-4 decoration-gold/40 transition-colors hover:text-brown-700 hover:decoration-brown-700/40"
                >
                  {t.services.viewDetails}
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}

          {/* Combo Packages — Featured (sits in the grid alongside services) */}
          <ScrollReveal delay={services.length * 100}>
            <div className="group relative rounded-2xl border border-gold/40 bg-gradient-to-br from-cream via-warm-white to-blush-light/30 p-7 pt-8 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(44,30,16,0.08)] hover:border-gold/60 overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-[2px] gold-shimmer" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-light/50 flex items-center justify-center transition-colors duration-300 group-hover:bg-gold-light">
                  <Package size={18} className="text-brown-700" />
                </div>
                <h3 className="font-display text-xl font-semibold text-brown-800">
                  {t.services.comboPackages}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-xs text-brown-500 leading-relaxed mb-5">
                {t.services.comboDescription}
              </p>

              {/* Items */}
              <div className="space-y-0">
                {comboPackages.map((item) => (
                  <div key={item.name} className="py-2.5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-body text-sm font-medium text-brown-700">
                        {(t.comboPackages as Record<string, string>)[item.name] ?? item.name}
                      </span>
                      <span className="flex-1 border-b border-dotted border-brown-200/60 min-w-[20px] translate-y-[-3px]" />
                      <span className="flex-shrink-0 font-display text-base font-semibold text-brown-800 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.duration && (
                      <p className="font-body text-[10px] tracking-[0.15em] uppercase text-brown-400 mt-0.5">
                        {item.duration}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-14 text-center">
            <button
              onClick={openBooking}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-brown-700 text-warm-white font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-brown-800 hover:shadow-[0_8px_30px_rgba(92,64,51,0.3)] hover:-translate-y-0.5 cursor-pointer"
            >
              {t.services.bookAppointment}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
