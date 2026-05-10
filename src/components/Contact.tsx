"use client";

import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Background accents */}
      <div className="bg-blur-accent absolute -top-20 -right-20 w-96 h-96 bg-blush/30 rounded-full blur-[120px]" />
      <div className="bg-blur-accent absolute -bottom-20 -left-20 w-80 h-80 bg-gold-light/20 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
            {t.contact.label}
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
            {t.contact.headlinePart1}{" "}
            <span className="italic font-light text-brown-600">{t.contact.headlinePart2}</span>
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-brown-500">
            {t.contact.description}
          </p>
        </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <ScrollReveal direction="left">
          <div className="space-y-8">
            {/* Phone */}
            <div className="group flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blush flex items-center justify-center transition-colors duration-300 group-hover:bg-gold-light">
                <Phone size={20} className="text-brown-500" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-brown-800">
                  {t.contact.phone}
                </h3>
                <a
                  href="tel:+15145433040"
                  className="mt-1 font-body text-base text-brown-600 transition-colors hover:text-gold-dark"
                >
                  +1 (514) 543-3040
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="group flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blush flex items-center justify-center transition-colors duration-300 group-hover:bg-gold-light">
                <Instagram size={20} className="text-brown-500" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-brown-800">
                  {t.contact.instagram}
                </h3>
                <a
                  href="https://www.instagram.com/ongles_diamant_rose/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 font-body text-base text-brown-600 transition-colors hover:text-gold-dark"
                >
                  @ongles_diamant_rose
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="group flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blush flex items-center justify-center transition-colors duration-300 group-hover:bg-gold-light">
                <MapPin size={20} className="text-brown-500" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-brown-800">
                  {t.contact.address}
                </h3>
                <p className="mt-1 font-body text-base text-brown-600 leading-relaxed">
                  6843 Rue St-Hubert
                  <br />
                  Montréal, QC H2S 2M7, Canada
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="group flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blush flex items-center justify-center transition-colors duration-300 group-hover:bg-gold-light">
                <Clock size={20} className="text-brown-500" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-brown-800">
                  {t.contact.hours}
                </h3>
                <div className="mt-1 font-body text-base text-brown-600 space-y-0.5">
                  <p>{t.contact.hoursTuThuSun}</p>
                  <p>{t.contact.hoursClosed}</p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="right" delay={200}>
          <div className="relative pt-3 pl-3">
            <div className="relative rounded-2xl overflow-hidden border border-brown-100/40 shadow-[0_8px_30px_rgba(44,30,16,0.06)] h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Ongles+Diamant+Rose,+6843+Rue+Saint-Hubert,+Montr%C3%A9al,+QC&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ongles Diamant location"
                className="absolute inset-0"
              />
              <a
                href="https://www.google.com/maps/place/Ongles+Diamant+Rose/@45.5387148,-73.6111231,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc919545b79b367:0x995eaeea9b327287!8m2!3d45.5387111!4d-73.6085482"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-white/95 backdrop-blur-sm shadow-[0_4px_16px_rgba(44,30,16,0.12)] border border-brown-100/60 font-body text-xs font-medium tracking-wider uppercase text-brown-700 transition-all duration-300 hover:bg-warm-white hover:shadow-[0_6px_20px_rgba(44,30,16,0.18)] hover:text-gold-dark"
              >
                <MapPin size={14} />
                {t.contact.openInMaps}
              </a>
            </div>
            {/* Decorative border accent */}
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-gold/15 pointer-events-none" />
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
