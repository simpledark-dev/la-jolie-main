"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  CalendarCheck,
  Clock,
  Sparkles,
  CreditCard,
  Car,
  Palette,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqIcons = [CalendarCheck, Clock, Sparkles, CreditCard, Car, Palette];
  const faqs = t.faq.questions.map((q, i) => ({
    question: q.question,
    answer: q.answer,
    icon: faqIcons[i],
  }));

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-warm-white overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blush-light/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-light/15 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left — Header + CTA */}
          <ScrollReveal direction="left">
            <div className="max-lg:text-center lg:sticky lg:top-32">
              <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
                {t.faq.label}
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
                {t.faq.headlinePart1}{" "}
                <span className="italic font-light text-brown-600">
                  {t.faq.headlinePart2}
                </span>
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-brown-500 max-w-md max-lg:mx-auto">
                {t.faq.description}
              </p>
              <a
                href="tel:+12635529513"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium tracking-wider text-gold-dark transition-colors hover:text-brown-700"
              >
                +1 (263) 552-9513
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = faq.icon;
              return (
                <ScrollReveal key={index} direction="right" delay={index * 80}>
                  <div
                    className={`group rounded-2xl border overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-gold/30 bg-cream/80 shadow-[0_8px_30px_rgba(44,30,16,0.05)]"
                        : "border-brown-100/40 bg-cream/40 hover:border-gold/20 hover:bg-cream/60"
                    }`}
                  >
                    {/* Gold top accent — visible when open */}
                    <div
                      className={`h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center gap-4 px-7 py-5 text-left"
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          isOpen
                            ? "bg-gold-light/50"
                            : "bg-blush group-hover:bg-blush-light"
                        }`}
                      >
                        <Icon size={18} className="text-brown-600" />
                      </div>

                      <span className="flex-1 font-display text-lg font-semibold text-brown-800">
                        {faq.question}
                      </span>

                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-gold-light/40 text-brown-700"
                            : "bg-brown-100/30 text-brown-400"
                        }`}
                      >
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-7 pb-6 pl-[4.75rem]">
                          <p className="font-body text-base leading-relaxed text-brown-600">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
