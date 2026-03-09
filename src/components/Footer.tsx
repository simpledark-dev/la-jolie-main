"use client";

import { Instagram, Heart } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Salon", href: "#salon" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brown-800 text-warm-white/80 overflow-hidden">
      {/* Top gold line */}
      <div className="h-[1px] gold-shimmer" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-warm-white tracking-wide">
              La Jolie Main
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-warm-white/50 font-light max-w-xs">
              A premium nail salon experience where beauty, elegance, and
              self-care come together. Your hands, our passion.
            </p>
            <a
              href="https://www.instagram.com/lajoliemain.mtl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 font-body text-sm tracking-wider text-gold-light/80 transition-colors duration-300 hover:text-gold"
            >
              <Instagram size={18} />
              @lajoliemain.mtl
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-warm-white mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-warm-white/50 transition-colors duration-300 hover:text-gold-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-warm-white mb-6">
              Contact
            </h4>
            <div className="space-y-3 font-body text-sm text-warm-white/50 font-light">
              <p>
                <a
                  href="tel:+12635529513"
                  className="transition-colors hover:text-gold-light"
                >
                  +1 (263) 552-9513
                </a>
              </p>
              <p>
                487 Bd Décarie, unit B
                <br />
                Saint-Laurent, QC H4L 3L1
              </p>
              <p>
                Tue, Thu, Sun: 9 AM – 8 PM
                <br />
                Mon, Wed, Fri, Sat: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-warm-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-warm-white/30 tracking-wide">
            © {new Date().getFullYear()} La Jolie Main. All rights reserved.
          </p>
          <p className="font-body text-xs text-warm-white/30 tracking-wide flex items-center gap-1">
            Made with <Heart size={12} className="text-pink-warm/60" /> for beautiful hands
          </p>
        </div>
      </div>
    </footer>
  );
}
