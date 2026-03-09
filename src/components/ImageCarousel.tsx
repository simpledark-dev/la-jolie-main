"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { StaticImageData } from "next/image";

interface ImageCarouselProps {
  images: StaticImageData[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = images.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(index, total - 1)));
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Touch/drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStart);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 60;
    if (dragOffset < -threshold) {
      next();
    } else if (dragOffset > threshold) {
      prev();
    }
    setDragOffset(0);
  };

  const translateX = isDragging
    ? `calc(-${current * 100}% + ${dragOffset}px)`
    : `-${current * 100}%`;

  if (total === 0) return null;

  return (
    <div className="relative">
      {/* Main carousel viewport */}
      <div className="relative overflow-hidden rounded-2xl border border-brown-100/40 shadow-[0_12px_40px_rgba(44,30,16,0.08)]">
        <div
          ref={trackRef}
          className={`flex ${isDragging ? "" : "transition-transform duration-500 ease-out"}`}
          style={{ transform: `translateX(${translateX})` }}
          onMouseDown={(e) => {
            e.preventDefault();
            handleDragStart(e.clientX);
          }}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full relative aspect-[4/5] sm:aspect-[3/4] select-none"
            >
              <Image
                src={img}
                alt={`${alt} — photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover pointer-events-none"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Navigation arrows — hidden on single image */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous image"
              className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-warm-white/90 backdrop-blur-sm rounded-full border border-brown-100/60 shadow-[0_4px_16px_rgba(44,30,16,0.08)] flex items-center justify-center text-brown-500 transition-all duration-300 hover:border-gold/40 hover:text-gold-dark disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={current === total - 1}
              aria-label="Next image"
              className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-warm-white/90 backdrop-blur-sm rounded-full border border-brown-100/60 shadow-[0_4px_16px_rgba(44,30,16,0.08)] flex items-center justify-center text-brown-500 transition-all duration-300 hover:border-gold/40 hover:text-gold-dark disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Counter badge */}
        {total > 1 && (
          <div className="absolute bottom-4 right-4 bg-brown-800/70 backdrop-blur-sm text-warm-white font-body text-xs tracking-wider px-3 py-1.5 rounded-full">
            {current + 1} / {total}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="mt-4 flex gap-2.5 justify-center">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                i === current
                  ? "border-gold shadow-[0_2px_12px_rgba(201,169,110,0.3)] scale-105"
                  : "border-brown-100/40 opacity-60 hover:opacity-90 hover:border-brown-200"
              }`}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
