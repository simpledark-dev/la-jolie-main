"use client";

import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blush/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-light/20 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
            Get in Touch
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
            Visit{" "}
            <span className="italic font-light text-brown-600">Us</span>
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-brown-500">
            We&apos;d love to welcome you. Drop by, call, or send us a message
            — we&apos;re always happy to help you find the perfect treatment.
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
                  Phone
                </h3>
                <a
                  href="tel:+12635529513"
                  className="mt-1 font-body text-base text-brown-600 transition-colors hover:text-gold-dark"
                >
                  +1 (263) 552-9513
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
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/lajoliemain.mtl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 font-body text-base text-brown-600 transition-colors hover:text-gold-dark"
                >
                  @lajoliemain.mtl
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
                  Address
                </h3>
                <p className="mt-1 font-body text-base text-brown-600 leading-relaxed">
                  487 Bd Décarie, unit B
                  <br />
                  Saint-Laurent, QC H4L 3L1, Canada
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
                  Hours
                </h3>
                <div className="mt-1 font-body text-base text-brown-600 space-y-0.5">
                  <p>Tue, Thu, Sun: 9:00 AM – 8:00 PM</p>
                  <p>Mon, Wed, Fri, Sat: Closed</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0!2d-73.6734140!3d45.5087106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918cf303ab2e7%3A0x892ab9fbe3c964e0!2s487%20Bd%20D%C3%A9carie%2C%20Saint-Laurent%2C%20QC%20H4L%203K9%2C%20Canada!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Jolie Main location"
                className="absolute inset-0"
              />
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
