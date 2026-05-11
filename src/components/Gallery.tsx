"use client";

import { useState, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight, Instagram, Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";

// Import all gallery images here — just add a new line when you add a photo
import sheerPink3dFlowers from "@/assets/gallery/sheer-pink-3d-flowers.jpg";
import pearlChromeAlmond from "@/assets/gallery/pearl-chrome-almond.jpg";
import pinkLeopardStilettoBow from "@/assets/gallery/pink-leopard-stiletto-bow.jpg";
import pinkWhiteFrenchFloral from "@/assets/gallery/pink-white-french-floral.jpg";
import purpleGoldCloudArt from "@/assets/gallery/purple-gold-cloud-art.jpg";
import pastelFrenchMulticolor from "@/assets/gallery/pastel-french-multicolor.jpg";
import leopardBowFrench from "@/assets/gallery/leopard-bow-french.jpg";
import pastelAuroraChrome from "@/assets/gallery/pastel-aurora-chrome.jpg";
import pearlShimmerNatural from "@/assets/gallery/pearl-shimmer-natural.jpg";
import floralBlossomArt from "@/assets/gallery/floral-blossom-art.jpg";
import nudeBlushClassic from "@/assets/gallery/nude-blush-classic.jpg";
import frenchButterflyWhite from "@/assets/gallery/french-butterfly-white.jpg";
import redFrenchFloral from "@/assets/gallery/red-french-floral.jpg";
import whiteBowFrenchSquare from "@/assets/gallery/white-bow-french-square.jpeg";
import pinkCrystalFrenchGlitter from "@/assets/gallery/pink-crystal-french-glitter.jpg";
import silverGlitterFrenchAlmond from "@/assets/gallery/silver-glitter-french-almond.jpg";
import whiteFrench3dFlowers from "@/assets/gallery/white-french-3d-flowers.jpg";
import cherryBlossomMintArt from "@/assets/gallery/cherry-blossom-mint-art.jpg";
import goldWhiteBowArt from "@/assets/gallery/gold-white-bow-art.jpg";
import blackWhitePolkaStripe from "@/assets/gallery/black-white-polka-stripe.jpg";
import whiteSnowflakeSquare from "@/assets/gallery/white-snowflake-square.jpg";
import navyChromeCatEye from "@/assets/gallery/navy-chrome-cat-eye.jpg";
import classicPinkWhiteFrench from "@/assets/gallery/classic-pink-white-french.jpg";
import pastelRainbowOmbre from "@/assets/gallery/pastel-rainbow-ombre.jpg";
import frenchPedicureWhiteTips from "@/assets/gallery/french-pedicure-white-tips.jpg";
import nudeGelPedicure from "@/assets/gallery/nude-gel-pedicure.jpg";
import glitterGoldPedicure from "@/assets/gallery/glitter-gold-pedicure.webp";
import pearlShimmerPedicure from "@/assets/gallery/pearl-shimmer-pedicure.webp";

type GalleryItem =
  | { kind: "image"; src: StaticImageData; alt: string }
  | { kind: "video"; src: string; poster: StaticImageData; alt: string };

const galleryImages: GalleryItem[] = [
  { kind: "video", src: "/videos/nail-showcase-1.mp4", poster: sheerPink3dFlowers, alt: "Nail design in motion — showcase reel" },
  { kind: "image", src: sheerPink3dFlowers, alt: "Sheer pink almond nails with 3D flower accents" },
  { kind: "image", src: pearlChromeAlmond, alt: "Pearl chrome shimmer almond nails" },
  { kind: "image", src: pinkWhiteFrenchFloral, alt: "Elegant pink and white French tips with 3D floral accents" },
  { kind: "video", src: "/videos/nail-showcase-2.mp4", poster: pastelFrenchMulticolor, alt: "Close-up of finished nail work" },
  { kind: "image", src: purpleGoldCloudArt, alt: "Purple and gold hand-painted nail art with sun motifs" },
  { kind: "image", src: pinkLeopardStilettoBow, alt: "Pink stiletto nails with leopard tips and 3D bows" },
  { kind: "image", src: pastelFrenchMulticolor, alt: "Almond nails with pastel multicolor French tips" },
  { kind: "image", src: leopardBowFrench, alt: "Leopard print French tips with bow accents" },
  { kind: "image", src: pastelAuroraChrome, alt: "Pastel aurora chrome nails" },
  { kind: "image", src: pearlShimmerNatural, alt: "Pearl shimmer natural finish" },
  { kind: "image", src: floralBlossomArt, alt: "Floral blossom nail art" },
  { kind: "image", src: nudeBlushClassic, alt: "Classic nude blush nails" },
  { kind: "image", src: frenchButterflyWhite, alt: "White French tips with butterfly art" },
  { kind: "image", src: redFrenchFloral, alt: "Red French tips with floral accents" },
  { kind: "image", src: whiteBowFrenchSquare, alt: "White French square nails with 3D bows" },
  { kind: "image", src: pinkCrystalFrenchGlitter, alt: "Pink French tips with crystal gems and glitter" },
  { kind: "image", src: silverGlitterFrenchAlmond, alt: "Silver glitter French almond nails" },
  { kind: "image", src: whiteFrench3dFlowers, alt: "White French tips with 3D flower accents" },
  { kind: "image", src: cherryBlossomMintArt, alt: "Cherry blossom nail art on mint and white" },
  { kind: "image", src: goldWhiteBowArt, alt: "Gold and white bow nail art" },
  { kind: "image", src: blackWhitePolkaStripe, alt: "Black and white polka dot stripe nails" },
  { kind: "image", src: whiteSnowflakeSquare, alt: "White snowflake nail art square nails" },
  { kind: "image", src: navyChromeCatEye, alt: "Navy blue chrome cat eye with star gems" },
  { kind: "image", src: classicPinkWhiteFrench, alt: "Classic pink and white French tips" },
  { kind: "image", src: pastelRainbowOmbre, alt: "Pastel rainbow ombre with gems" },
  { kind: "image", src: frenchPedicureWhiteTips, alt: "French pedicure with white tips" },
  { kind: "image", src: nudeGelPedicure, alt: "Nude gel pedicure" },
  { kind: "image", src: glitterGoldPedicure, alt: "Glitter gold pedicure" },
  { kind: "image", src: pearlShimmerPedicure, alt: "Pearl shimmer pedicure" },
];

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 12;

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
          {visibleImages.map((item, i) => (
            <ScrollReveal key={i} delay={i < 6 ? i * 80 : 0}>
              <button
                onClick={() => openLightbox(i)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={item.alt}
              >
                {item.kind === "video" ? (
                  <>
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={item.poster.src}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Video badge */}
                    <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brown-900/55 backdrop-blur-sm text-warm-white">
                      <Play size={11} fill="currentColor" />
                      <span className="font-body text-[10px] tracking-wider uppercase">{t.gallery.video}</span>
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 via-brown-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Hover Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-body text-xs md:text-sm tracking-wide text-warm-white/90">
                    {item.alt}
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
                href="https://www.instagram.com/ongles_diamant_rose/"
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
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-warm-white/20 border border-warm-white/20 flex items-center justify-center text-warm-white transition-colors hover:bg-warm-white/30"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="relative w-[75vw] sm:w-[85vw] h-[70vh] sm:h-[80vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const active = galleryImages[lightboxIndex];
              return active.kind === "video" ? (
                <video
                  key={lightboxIndex}
                  src={active.src}
                  poster={active.poster.src}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain bg-brown-900"
                  aria-label={active.alt}
                />
              ) : (
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="85vw"
                  className="object-contain"
                  priority
                />
              );
            })()}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-warm-white/20 border border-warm-white/20 flex items-center justify-center text-warm-white transition-colors hover:bg-warm-white/30"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-sm text-warm-white/60 tracking-wide text-center">
            {galleryImages[lightboxIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}
