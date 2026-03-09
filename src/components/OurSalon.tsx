"use client";

import { Sparkles, Shield, Heart, Leaf } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  {
    icon: Sparkles,
    title: "Premium Products",
    text: "We use only the finest, long-lasting nail products from trusted luxury brands.",
  },
  {
    icon: Shield,
    title: "Hygienic Process",
    text: "Every tool is sterilized, every surface pristine — your safety is our standard.",
  },
  {
    icon: Heart,
    title: "Skilled Technicians",
    text: "Our artists bring years of expertise and a genuine passion for nail artistry.",
  },
  {
    icon: Leaf,
    title: "Relaxing Experience",
    text: "Unwind in a calming, beautifully designed space made just for your comfort.",
  },
];

export default function OurSalon() {
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
                  Years of Excellence
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Side */}
          <ScrollReveal direction="right" delay={200}>
            <div>
              <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
                Our Salon
              </span>

              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
                A Place Where You{" "}
                <span className="italic font-light text-brown-600">Feel</span>{" "}
                Beautiful
              </h2>

              <div className="mt-6 space-y-4">
                <p className="font-body text-base leading-relaxed text-brown-600">
                  At La Jolie Main, we believe that nail care is more than a
                  service — it&apos;s a moment of self-care, a ritual of beauty, and
                  a personal expression of elegance.
                </p>
                <p className="font-body text-base leading-relaxed text-brown-600">
                  Our warm and inviting salon is designed to be your retreat from
                  the everyday. From the moment you walk in, you&apos;ll feel the
                  difference — in the atmosphere, the attention to detail, and the
                  genuine care we put into every visit.
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
