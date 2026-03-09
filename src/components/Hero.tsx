"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Layered Background */}
      <div className="absolute inset-0">
        {/* Base warm gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom right, #FBF8F4, #F9F0EC, #F3EDE4)" }}
        />

        {/* Decorative gold circle - top right */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gold-light/20 to-transparent blur-3xl" />

        {/* Decorative blush circle - bottom left */}
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blush/40 to-transparent blur-3xl" />

        {/* Subtle gold accent - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-light/10 blur-[120px]" />
      </div>

      {/* Decorative thin gold lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] gold-shimmer" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Small accent label */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-warm-white/60 backdrop-blur-sm mb-8">
            <Sparkles size={14} className="text-gold" />
            <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-brown-500">
              Premium Nail Care
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-200 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-brown-900">
            Where Beauty{" "}
            <span className="italic font-light text-brown-600">Meets</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #6B4F3A, #C9A96E, #8B6F47)" }}
            >
              Elegance
            </span>
          </h1>

          {/* Supporting text */}
          <p className="animate-fade-in-up animation-delay-400 mt-8 max-w-xl mx-auto font-body text-lg md:text-xl leading-relaxed text-brown-500 font-light">
            Indulge in a refined nail care experience crafted with precision,
            warmth, and the finest products. Your hands deserve to feel as
            beautiful as they look.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://bellebooking.com/center/lynn-signature-nails"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-brown-700 text-warm-white font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-brown-800 hover:shadow-[0_8px_30px_rgba(92,64,51,0.3)] hover:-translate-y-0.5"
            >
              Book Your Visit
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-brown-300/60 text-brown-600 font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:border-gold hover:text-brown-800 hover:bg-warm-white/50"
            >
              Explore Services
            </a>
          </div>

          {/* Decorative divider */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
