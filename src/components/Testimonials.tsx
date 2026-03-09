"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = t.testimonials.reviews.map((review) => ({
    name: review.name,
    text: review.text,
    rating: 5,
  }));
  const [current, setCurrent] = useState(0);
  const totalRef = useRef(testimonials.length);
  totalRef.current = testimonials.length;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % totalRef.current);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + totalRef.current) % totalRef.current);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % totalRef.current);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Background accent */}
      <div className="bg-blur-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/30 rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
              {t.testimonials.label}
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
              {t.testimonials.headlinePart1}{" "}
              <span className="italic font-light text-brown-600">{t.testimonials.headlinePart2}</span>{" "}
              {t.testimonials.headlinePart3}
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial Card */}
        <ScrollReveal delay={200}>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative bg-warm-white rounded-3xl border border-brown-100/40 shadow-[0_8px_40px_rgba(44,30,16,0.05)] px-8 sm:px-14 py-12 sm:py-14 text-center">
              {/* Decorative quote mark */}
              <div className="absolute top-6 left-8 sm:left-12 font-display text-7xl leading-none text-gold-light/60 select-none">
                &ldquo;
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-lg sm:text-xl leading-relaxed text-brown-700 italic">
                  {active.text}
                </blockquote>

                {/* Author */}
                <div className="mt-8">
                  <div className="w-10 h-[1px] bg-gold/40 mx-auto mb-4" />
                  <p className="font-display text-lg font-semibold text-brown-800">
                    {active.name}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-brown-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="font-body text-[11px] tracking-wider uppercase">
                      {t.testimonials.googleReview}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 w-12 h-12 bg-warm-white rounded-full border border-brown-100/60 shadow-[0_4px_16px_rgba(44,30,16,0.06)] flex items-center justify-center text-brown-500 transition-all duration-300 hover:border-gold/40 hover:text-gold-dark hover:shadow-[0_4px_20px_rgba(44,30,16,0.1)]"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 w-12 h-12 bg-warm-white rounded-full border border-brown-100/60 shadow-[0_4px_16px_rgba(44,30,16,0.06)] flex items-center justify-center text-brown-500 transition-all duration-300 hover:border-gold/40 hover:text-gold-dark hover:shadow-[0_4px_20px_rgba(44,30,16,0.1)]"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === current
                      ? "w-8 bg-gold"
                      : "w-2 bg-brown-200/60 hover:bg-brown-300/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
