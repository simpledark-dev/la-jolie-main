"use client";

import { ArrowRight } from "lucide-react";

const services = [
  {
    category: "Manicure",
    items: [
      { name: "Gel Nail Polish", price: "$30" },
      { name: "Gel Nail Polish Removal", price: "$10" },
      { name: "Manicure", price: "$30" },
      { name: "Shellac Manicure", price: "$40" },
      { name: "Nail Repair", price: "$7" },
    ],
  },
  {
    category: "Pedicure",
    items: [
      { name: "Regular Pedicure", price: "$45" },
      { name: "Shellac Pedicure", price: "$65" },
      { name: "Nail Polish", price: "$35" },
      { name: "Paraffin", price: "$20" },
    ],
  },
  {
    category: "Full Set / Extensions",
    items: [
      { name: "Biogel", price: "$65" },
      { name: "Biogel Refill", price: "$50" },
      { name: "Biogel / Gel X Removal", price: "$25" },
      { name: "Gel X", price: "$60" },
      { name: "Extra Long Nails", price: "+$5" },
    ],
  },
  {
    category: "Nail Design",
    items: [
      { name: "Nail Art / Design", price: "$5 – $25+" },
      { name: "French Tip Add-on", price: "$15" },
      { name: "Chrome / Special", price: "$15" },
      { name: "Diamond Cat Eye", price: "$15+" },
      { name: "Ombre", price: "$15+" },
    ],
  },
  {
    category: "Waxing",
    items: [
      { name: "Eyebrow", price: "$25" },
      { name: "Chin", price: "$10" },
      { name: "Mustache", price: "$10" },
      { name: "Upper Lip", price: "$10" },
      { name: "Full Face", price: "$35" },
      { name: "Full Arm", price: "$40" },
      { name: "Half Arm", price: "$30" },
      { name: "Full Legs", price: "$55" },
      { name: "Half Leg", price: "$35" },
      { name: "Underarms", price: "$20" },
    ],
  },
  {
    category: "Combo Packages",
    items: [
      { name: "Classic Mani + Pedi", price: "$70" },
      { name: "Shellac Mani + Pedi", price: "$100" },
      { name: "New Set Biogel + Shellac Pedi", price: "$120" },
      { name: "Refill Biogel + Shellac Pedi", price: "$105" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-warm-white grain-overlay overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush-light/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-light/20 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight text-brown-900">
            Services{" "}
            <span className="italic font-light text-brown-600">&</span> Pricing
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-brown-500">
            Every service is performed with care, precision, and the finest
            products — because your nails deserve nothing less.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((category) => (
            <div
              key={category.category}
              className="group bg-cream/60 backdrop-blur-sm rounded-2xl border border-brown-100/40 p-7 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(44,30,16,0.06)] hover:border-gold/30"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-5">
                <h3 className="font-display text-xl font-semibold text-brown-800">
                  {category.category}
                </h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-brown-100/60 to-transparent" />
              </div>

              {/* Items */}
              <div className="space-y-0">
                {category.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-between gap-3 py-2.5 ${
                      i < category.items.length - 1 ? "border-b border-brown-100/40" : ""
                    }`}
                  >
                    <span className="font-body text-sm text-brown-700">
                      {item.name}
                    </span>
                    <span className="flex-shrink-0 font-display text-base font-semibold text-brown-800">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://bellebooking.com/center/lynn-signature-nails"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-body text-sm font-medium tracking-wider uppercase text-brown-600 transition-colors duration-300 hover:text-gold-dark"
          >
            Ready to book your experience?
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
