"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import heroImg1 from "@/assets/gallery/pastel-aurora-chrome.jpg";
import heroImg2 from "@/assets/gallery/french-butterfly-white.jpg";
import heroImg3 from "@/assets/gallery/red-french-floral-2.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
    >
      {/* Layered Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom right, #FBF8F4, #F9F0EC, #F3EDE4)" }}
        />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gold-light/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blush/40 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-light/10 blur-[120px]" />
      </div>

      {/* Top gold shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] gold-shimmer" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="max-lg:text-center">
            {/* Accent label */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-warm-white/60 backdrop-blur-sm mb-8">
              <Sparkles size={14} className="text-gold" />
              <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-brown-500">
                Premium Nail Care
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up animation-delay-200 font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-tight text-brown-900">
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
            <p className="animate-fade-in-up animation-delay-400 mt-8 max-w-lg max-lg:mx-auto font-body text-lg md:text-xl leading-relaxed text-brown-500 font-light">
              Indulge in a refined nail care experience crafted with precision,
              warmth, and the finest products. Your hands deserve to feel as
              beautiful as they look.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row max-lg:items-center max-lg:justify-center items-start gap-4">
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
          </div>

          {/* Right — Image Composition */}
          <div className="animate-fade-in animation-delay-400 relative hidden lg:block">
            {/* Main image */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_25px_80px_rgba(44,30,16,0.15)] aspect-[3/4] max-w-[380px] ml-auto">
              <Image
                src={heroImg1}
                alt="Beautiful pastel aurora chrome nails"
                fill
                sizes="380px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/15 to-transparent" />
            </div>

            {/* Secondary image — overlapping bottom-left */}
            <div className="absolute -bottom-6 -left-4 z-20 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(44,30,16,0.12)] w-[200px] h-[267px] border-4 border-warm-white">
              <Image
                src={heroImg2}
                alt="French butterfly white nails"
                fill
                sizes="200px"
                className="object-cover"
                priority
              />
            </div>

            {/* Tertiary image — top-left */}
            <div className="absolute -top-6 left-4 z-20 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(44,30,16,0.1)] w-[140px] h-[140px] border-4 border-warm-white">
              <Image
                src={heroImg3}
                alt="Pearl shimmer natural nails"
                fill
                sizes="140px"
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative gold ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-gold/20" />

            {/* Floating accent badge */}
            <div className="absolute top-8 right-0 translate-x-4 z-30 bg-warm-white/95 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgba(44,30,16,0.08)] px-5 py-3 border border-cream-dark">
              <p className="font-display text-2xl font-semibold text-brown-700">500+</p>
              <p className="font-body text-[10px] tracking-wider uppercase text-brown-400">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in animation-delay-600">
        <a
          href="#salon"
          className="flex flex-col items-center gap-2 text-brown-400 transition-colors hover:text-gold-dark"
        >
          <span className="font-body text-[10px] tracking-[0.2em] uppercase">Discover</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
