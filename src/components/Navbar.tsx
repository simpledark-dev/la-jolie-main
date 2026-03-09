"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-2.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Salon", href: "#salon" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(44,30,16,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 font-display text-2xl lg:text-3xl font-semibold tracking-wide text-brown-800 transition-colors hover:text-gold"
          >
            <Image
              src={logo}
              alt="La Jolie Main logo"
              className="h-14 w-auto lg:h-18"
              height={72}
              width={72}
              priority
            />
            {/* La Jolie Main */}
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium tracking-wider uppercase text-brown-600 transition-colors duration-300 hover:text-gold-dark relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://bellebooking.com/center/lynn-signature-nails"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-7 py-2.5 bg-brown-700 text-warm-white font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-brown-800 hover:shadow-[0_4px_16px_rgba(92,64,51,0.3)]"
            >
              Book Appointment
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-brown-700 transition-colors hover:text-gold"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-warm-white/98 backdrop-blur-md border-t border-brown-100/50 px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-sm font-medium tracking-wider uppercase text-brown-600 transition-colors hover:text-gold-dark border-b border-cream-dark/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://bellebooking.com/center/lynn-signature-nails"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center mt-4 px-7 py-2.5 bg-brown-700 text-warm-white font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-brown-800"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
}
