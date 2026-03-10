"use client";

import { useEffect } from "react";
import { X, Globe, Phone } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brown-900/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-warm-white rounded-2xl border border-brown-100/40 shadow-[0_20px_60px_rgba(44,30,16,0.2)] w-full max-w-sm p-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-brown-400 transition-colors hover:text-brown-700 hover:bg-brown-100/40"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-semibold text-brown-900">
            {t.booking.title}
          </h3>
          <p className="mt-2 font-body text-sm text-brown-500">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          <a
            href="https://bellebooking.com/center/lynn-signature-nails"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-4 w-full px-5 py-4 rounded-xl border border-brown-100/60 bg-cream/40 transition-all duration-200 hover:border-gold/40 hover:bg-cream/80"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brown-700 flex items-center justify-center transition-colors group-hover:bg-brown-800">
              <Globe size={18} className="text-warm-white" />
            </div>
            <div className="text-left">
              <p className="font-display text-base font-semibold text-brown-800">
                {t.booking.online}
              </p>
              <p className="font-body text-xs text-brown-400">
                {t.booking.onlineDescription}
              </p>
            </div>
          </a>

          <a
            href="tel:+12635529513"
            onClick={onClose}
            className="group flex items-center gap-4 w-full px-5 py-4 rounded-xl border border-brown-100/60 bg-cream/40 transition-all duration-200 hover:border-gold/40 hover:bg-cream/80"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gold flex items-center justify-center transition-colors group-hover:bg-gold-dark">
              <Phone size={18} className="text-warm-white" />
            </div>
            <div className="text-left">
              <p className="font-display text-base font-semibold text-brown-800">
                {t.booking.call}
              </p>
              <p className="font-body text-xs text-brown-400">
                +1 (263) 552-9513
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
