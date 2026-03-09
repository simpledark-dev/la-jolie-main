"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Single shared IntersectionObserver for all ScrollReveal instances
const callbacks = new Map<Element, (entry: IntersectionObserverEntry) => void>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const cb = callbacks.get(entry.target);
        if (cb) cb(entry);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  return sharedObserver;
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver();
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    callbacks.set(el, (entry) => {
      if (entry.isIntersecting) {
        timeoutId = setTimeout(() => {
          el.classList.add("scroll-revealed");
        }, delay);
        observer.unobserve(el);
        callbacks.delete(el);
      }
    });

    observer.observe(el);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [delay]);

  const directionClass =
    direction === "up"
      ? "scroll-reveal-up"
      : direction === "left"
        ? "scroll-reveal-left"
        : direction === "right"
          ? "scroll-reveal-right"
          : "scroll-reveal-fade";

  return (
    <div ref={ref} className={`${directionClass} ${className}`}>
      {children}
    </div>
  );
}
