"use client";

import { useState, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";

// Import all gallery images here — just add a new line when you add a photo
import leopardBowFrench from "@/assets/gallery/leopard-bow-french.jpg";
import pastelAuroraChrome from "@/assets/gallery/pastel-aurora-chrome.jpg";
import pearlShimmerNatural from "@/assets/gallery/pearl-shimmer-natural.jpg";
import floralBlossomArt from "@/assets/gallery/floral-blossom-art.jpg";
import nudeBlushClassic from "@/assets/gallery/nude-blush-classic.jpg";
import frenchButterflyWhite from "@/assets/gallery/french-butterfly-white.jpg";
import redFrenchFloral from "@/assets/gallery/red-french-floral.jpg";
import whiteBowFrenchSquare from "@/assets/gallery/white-bow-french-square.jpeg";
import leopardBowFrench2 from "@/assets/gallery/leopard-bow-french-2.jpg";
import pastelAuroraChrome2 from "@/assets/gallery/pastel-aurora-chrome-2.jpg";
import pearlShimmerNatural2 from "@/assets/gallery/pearl-shimmer-natural-2.jpg";
import floralBlossomArt2 from "@/assets/gallery/floral-blossom-art-2.jpg";
import nudeBlushClassic2 from "@/assets/gallery/nude-blush-classic-2.jpg";
import frenchButterflyWhite2 from "@/assets/gallery/french-butterfly-white-2.jpg";
import redFrenchFloral2 from "@/assets/gallery/red-french-floral-2.jpg";
import whiteBowFrenchSquare2 from "@/assets/gallery/white-bow-french-square-2.jpeg";

const galleryImages: { src: StaticImageData; alt: string }[] = [
  { src: leopardBowFrench, alt: "Leopard print French tips with bow accents" },
  { src: pastelAuroraChrome, alt: "Pastel aurora chrome nails" },
  { src: pearlShimmerNatural, alt: "Pearl shimmer natural finish" },
  { src: floralBlossomArt, alt: "Floral blossom nail art" },
  { src: nudeBlushClassic, alt: "Classic nude blush nails" },
  { src: frenchButterflyWhite, alt: "White French tips with butterfly art" },
  { src: redFrenchFloral, alt: "Red French tips with floral accents" },
  { src: whiteBowFrenchSquare, alt: "White French square nails with 3D bows" },
  { src: leopardBowFrench2, alt: "Leopard French with bow details" },
  { src: pastelAuroraChrome2, alt: "Aurora chrome pastel set" },
  { src: pearlShimmerNatural2, alt: "Natural pearl shimmer nails" },
  { src: floralBlossomArt2, alt: "Blossom floral nail art" },
  { src: nudeBlushClassic2, alt: "Nude blush classic manicure" },
  { src: frenchButterflyWhite2, alt: "Butterfly French white nails" },
  { src: redFrenchFloral2, alt: "Red French floral design" },
  { src: whiteBowFrenchSquare2, alt: "Square French nails with white bows" },
];

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

export default function Gallery() {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, galleryImages.length));
  };

  const hasMore = visibleCount < galleryImages.length;
  const visibleImages = galleryImages.slice(0, visibleCount);

  // Lightbox navigation
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-warm-white grain-overlay overflow-hidden">
      {/* Background accents */}
      <div className="bg-blur-accent absolute top-0 left-1/4 w-72 h-72 bg-gold-light/15 rounded-full blur-[100px]" />
      <div className="bg-blur-accent absolute bottom-0 right-1/4 w-72 h-72 bg-blush/25 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
              {t.gallery.label}
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
              {t.gallery.headlinePart1}{" "}
              <span className="italic font-light text-brown-600">{t.gallery.headlinePart2}</span>
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-brown-500">
              {t.gallery.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {visibleImages.map((img, i) => (
            <ScrollReveal key={i} delay={i < 6 ? i * 80 : 0}>
              <button
                onClick={() => openLightbox(i)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 via-brown-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Hover Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-body text-xs md:text-sm tracking-wide text-warm-white/90">
                    {img.alt}
                  </p>
                </div>
                {/* Subtle gold border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gold/0 transition-all duration-500 group-hover:border-gold/30" />
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Show More / Show Less */}
        <ScrollReveal direction="none">
          <div className="mt-12 text-center flex items-center justify-center gap-4">
            {hasMore && (
              <button
                onClick={showMore}
                className="inline-flex items-center px-8 py-3 border border-brown-300/60 text-brown-600 font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:border-gold hover:text-brown-800 hover:bg-warm-white/50"
              >
                {t.gallery.viewMore} ({galleryImages.length - visibleCount} {t.gallery.remaining})
              </button>
            )}
            {visibleCount > INITIAL_COUNT && (
              <button
                onClick={() => setVisibleCount(INITIAL_COUNT)}
                className="inline-flex items-center px-8 py-3 text-brown-400 font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:text-brown-600"
              >
                {t.gallery.showLess}
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Instagram CTA */}
        <ScrollReveal delay={100}>
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col items-center gap-4 px-10 py-8 rounded-2xl border border-brown-100/40 bg-cream/70">
              <p className="font-body text-sm text-brown-600">
                {t.gallery.followCta}
              </p>
              <a
                href="https://www.instagram.com/lajoliemain.mtl/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3 bg-brown-700 text-warm-white font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-brown-800 hover:shadow-[0_4px_16px_rgba(92,64,51,0.3)]"
              >
                <Instagram size={18} className="transition-transform duration-300 group-hover:scale-110" />
                {t.gallery.followButton}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-brown-900/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-warm-white/10 flex items-center justify-center text-warm-white/80 transition-colors hover:bg-warm-white/20 hover:text-warm-white"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          <div className="absolute top-6 left-6 font-body text-sm text-warm-white/50 tracking-wider">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-warm-white/10 flex items-center justify-center text-warm-white/80 transition-colors hover:bg-warm-white/20 hover:text-warm-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="relative w-[90vw] h-[80vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-warm-white/10 flex items-center justify-center text-warm-white/80 transition-colors hover:bg-warm-white/20 hover:text-warm-white"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-sm text-warm-white/60 tracking-wide text-center">
            {galleryImages[lightboxIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}
