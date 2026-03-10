"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-2.png";
import { services } from "@/data/services";
import { useTranslation } from "@/i18n/LanguageContext";
import { useSmoothHashScroll } from "@/hooks/useSmoothHashScroll";

export default function Navbar() {
  const { locale, setLocale, t } = useTranslation();
  useSmoothHashScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.salon, href: "/#salon" },
    { label: t.nav.services, href: "/#services", hasDropdown: true },
    { label: t.nav.testimonials, href: "/#testimonials" },
    { label: t.nav.gallery, href: "/#gallery" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  const serviceLinks = services.map((s) => ({
    label: t.serviceCategories[s.slug as keyof typeof t.serviceCategories]?.category ?? s.category,
    href: `/services/${s.slug}`,
    icon: s.icon,
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "fr" : "en");
  };

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
            href="/#home"
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
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 font-body text-sm font-medium tracking-wider uppercase text-brown-600 transition-colors duration-300 hover:text-gold-dark relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </a>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-warm-white/98 backdrop-blur-md rounded-xl border border-brown-100/40 shadow-[0_12px_40px_rgba(44,30,16,0.1)] p-2 min-w-[220px]">
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 -translate-y-full w-3 h-3 bg-warm-white/98 border-l border-t border-brown-100/40 rotate-45" />

                      {serviceLinks.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-200 hover:bg-blush/50 group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center transition-colors duration-200 group-hover:bg-gold-light/50">
                              <Icon size={14} className="text-brown-600" />
                            </div>
                            <span className="font-body text-sm text-brown-700 group-hover:text-brown-900">
                              {service.label}
                            </span>
                          </Link>
                        );
                      })}

                      <div className="mt-1 pt-1 border-t border-brown-100/40">
                        <a
                          href="/#services"
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 rounded-lg font-body text-xs font-medium tracking-wider uppercase text-gold-dark transition-colors hover:bg-blush/50 hover:text-brown-700"
                        >
                          {t.nav.allServices}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-medium tracking-wider uppercase text-brown-600 transition-colors duration-300 hover:text-gold-dark relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA + Language + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="cursor-pointer font-body text-xs font-medium tracking-wider uppercase text-brown-500 border border-brown-200/60 rounded-full px-3 py-1.5 transition-all duration-300 hover:border-gold hover:text-gold-dark hover:bg-warm-white/50"
            >
              {locale === "en" ? "FR" : "EN"}
            </button>

            <a
              href="https://bellebooking.com/center/lynn-signature-nails"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-7 py-2.5 bg-brown-700 text-warm-white font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-brown-800 hover:shadow-[0_4px_16px_rgba(92,64,51,0.3)]"
            >
              {t.nav.bookAppointment}
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
        className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-warm-white/98 border-t border-brown-100/50 px-6 py-6 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-3 font-body text-sm font-medium tracking-wider uppercase text-brown-600 transition-colors hover:text-gold-dark border-b border-cream-dark/50"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`text-brown-400 transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="py-2 pl-2 space-y-0.5">
                        {serviceLinks.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-blush/40"
                            >
                              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-cream flex items-center justify-center">
                                <Icon size={13} className="text-brown-600" />
                              </div>
                              <span className="font-body text-sm text-brown-600">
                                {service.label}
                              </span>
                            </Link>
                          );
                        })}
                        <a
                          href="/#services"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block px-3 py-2.5 rounded-lg font-body text-xs font-medium tracking-wider uppercase text-gold-dark transition-colors hover:bg-blush/40"
                        >
                          {t.nav.allServices}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-body text-sm font-medium tracking-wider uppercase text-brown-600 transition-colors hover:text-gold-dark border-b border-cream-dark/50 last:border-0"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="https://bellebooking.com/center/lynn-signature-nails"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center mt-4 px-7 py-2.5 bg-brown-700 text-warm-white font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-brown-800"
            >
              {t.nav.bookAppointment}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
