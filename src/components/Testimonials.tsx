"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ariane Jade",
    text: "Incredibly impressed by the professionalism. The nail technician was skilled, attentive, and took the time to understand exactly what I wanted. Flawless polish, elegant finish, and long-lasting quality. Exceeded my expectations!",
    rating: 5,
  },
  {
    name: "Louise-K Truong",
    text: "Lynn is the absolute BEST! So convenient, right next to the metro. She's incredibly nice and genuinely passionate about her work. Loved seeing her collection of amazing accessories. Highly recommend — just remember, appointment only!",
    rating: 5,
  },
  {
    name: "Giulia Arteaga-Lavoie",
    text: "Went for the first time and she was amazing — super sweet and welcoming. Didn't feel any pain during or after. The idea I had in my head was executed perfectly on my hands and beyond. Can't wait to go back!",
    rating: 5,
  },
  {
    name: "Rosalie Nguyen",
    text: "Got Halloween nails here and the service was amazing, so were the nails. The design came out perfectly how I wanted them. Will definitely come back!",
    rating: 5,
  },
  {
    name: "FSIUDEM",
    text: "The tech was super detail-oriented and took time to make sure the shape, length, and design matched exactly what I wanted. Clean space, calm vibe, and the set lasted with zero lifting. If you want flawless nails and someone who actually listens, this is the spot.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/30 rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
            What Our{" "}
            <span className="italic font-light text-brown-600">Clients</span>{" "}
            Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative bg-warm-white rounded-3xl border border-brown-100/40 shadow-[0_8px_40px_rgba(44,30,16,0.05)] px-8 sm:px-14 py-12 sm:py-14 text-center">
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-8 sm:left-12 font-display text-7xl leading-none text-gold-light/60 select-none">
              &ldquo;
            </div>

            <div
              className={`transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-lg sm:text-xl leading-relaxed text-brown-600 font-light italic">
                {t.text}
              </blockquote>

              {/* Author */}
              <div className="mt-8">
                <div className="w-10 h-[1px] bg-gold/40 mx-auto mb-4" />
                <p className="font-display text-lg font-semibold text-brown-800">
                  {t.name}
                </p>
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
      </div>
    </section>
  );
}
