"use client";

import { Sparkles, Shield, Heart, Leaf } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";

export default function OurSalon() {
  const { t } = useTranslation();

  const highlights = [
    { icon: Sparkles, title: t.salon.highlights.premiumProducts, text: t.salon.highlights.premiumProductsText },
    { icon: Shield, title: t.salon.highlights.hygienicProcess, text: t.salon.highlights.hygienicProcessText },
    { icon: Heart, title: t.salon.highlights.skilledTechnicians, text: t.salon.highlights.skilledTechniciansText },
    { icon: Leaf, title: t.salon.highlights.relaxingExperience, text: t.salon.highlights.relaxingExperienceText },
  ];

  return (
    <section id="salon" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="relative pt-4 pl-4 pb-8">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(44,30,16,0.1)]">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=1000&fit=crop&q=80"
                  alt="Elegant nail salon interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-gold/20" />
              <div className="absolute bottom-0 left-0 bg-warm-white rounded-xl shadow-[0_8px_30px_rgba(44,30,16,0.08)] px-6 py-4 border border-cream-dark">
                <p className="font-display text-3xl font-semibold text-brown-700">8+</p>
                <p className="font-body text-xs tracking-wider uppercase text-brown-400 mt-0.5">
                  {t.salon.yearsOfExcellence}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Side */}
          <ScrollReveal direction="right" delay={200}>
            <div>
              <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
                {t.salon.label}
              </span>

              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
                {t.salon.headlinePart1}{" "}
                <span className="italic font-light text-brown-600">{t.salon.headlinePart2}</span>{" "}
                {t.salon.headlinePart3}
              </h2>

              <div className="mt-6 space-y-4">
                <p className="font-body text-base leading-relaxed text-brown-600">
                  {t.salon.p1}
                </p>
                <p className="font-body text-base leading-relaxed text-brown-600">
                  {t.salon.p2}
                </p>
              </div>

              <div className="mt-8 h-[1px] w-16 bg-gradient-to-r from-gold to-gold-light" />

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {highlights.map((item) => (
                  <div key={item.title} className="group">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full bg-blush flex items-center justify-center transition-colors duration-300 group-hover:bg-gold-light">
                        <item.icon size={16} className="text-brown-500" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-brown-800">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-body text-sm leading-relaxed text-brown-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
