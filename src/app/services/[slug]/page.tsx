import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services, getServiceBySlug, getRelatedCombos } from "@/data/services";
import ImageCarousel from "@/components/ImageCarousel";
import { FloralBranch, FloralPeony, FloralWildflower, FloralScatter } from "@/components/FloralDecorations";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.category} — La Jolie Main | Montreal Nail Salon`;
  const description = service.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedCombos = getRelatedCombos(slug);
  const Icon = service.icon;

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, #FBF8F4, #F9F0EC, #F3EDE4)",
            }}
          />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gold-light/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blush/40 to-transparent blur-3xl" />
        </div>

        {/* Floral decorations — hero */}
        <FloralBranch className="absolute top-16 right-6 lg:right-20 w-40 lg:w-56 h-auto text-gold/40 select-none pointer-events-none" />
        <FloralPeony className="absolute bottom-4 left-4 lg:left-16 w-36 lg:w-48 h-auto text-blush-dark/30 select-none pointer-events-none" />

        {/* Top gold shimmer */}
        <div className="absolute top-0 left-0 right-0 h-[1px] gold-shimmer" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          {/* Back link */}
          <Link
            href="/#services"
            className="animate-fade-in-up inline-flex items-center gap-2 font-body text-sm text-brown-500 transition-colors hover:text-gold-dark mb-10"
          >
            <ArrowLeft size={14} />
            Back to Services
          </Link>

          <div className="max-w-3xl">
            {/* Icon + Category */}
            <div className="animate-fade-in-up animation-delay-200 flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-blush flex items-center justify-center">
                <Icon size={24} className="text-brown-600" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-brown-900">
                {service.category}
              </h1>
            </div>

            {/* Description */}
            <p className="animate-fade-in-up animation-delay-400 font-body text-lg md:text-xl leading-relaxed text-brown-500 font-light max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      {service.images.length > 0 && (
        <section className="relative py-16 lg:py-20 bg-warm-white overflow-hidden">
          <ScrollReveal>
          <div className="relative z-10 mx-auto max-w-2xl px-6 lg:px-10">
            <ImageCarousel
              images={service.images}
              alt={service.category}
            />
          </div>
          </ScrollReveal>
        </section>
      )}

      {/* Pricing */}
      <section className="relative py-16 lg:py-24 bg-cream grain-overlay overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blush-light/30 rounded-full blur-[120px]" />

        {/* Floral decorations — pricing */}
        <FloralWildflower className="absolute top-10 left-4 lg:left-16 w-28 lg:w-40 h-auto text-gold/30 select-none pointer-events-none" />
        <FloralScatter className="absolute bottom-6 right-0 lg:right-8 w-56 lg:w-80 h-auto text-brown-300/25 select-none pointer-events-none" />
        <FloralBranch className="absolute -bottom-10 left-1/2 w-32 lg:w-44 h-auto text-blush-dark/20 select-none pointer-events-none rotate-12" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-10">
          {/* Section header */}
          <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
              Pricing
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-brown-900">
              {service.category}{" "}
              <span className="italic font-light text-brown-600">Services</span>
            </h2>
          </div>
          </ScrollReveal>

          {/* Pricing card */}
          <ScrollReveal delay={100}>
          <div className="bg-warm-white rounded-2xl border border-brown-100/40 shadow-[0_8px_30px_rgba(44,30,16,0.05)] p-8 sm:p-10 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="space-y-0">
              {service.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline gap-3 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="font-body text-base text-brown-700">
                    {item.name}
                  </span>
                  <span className="flex-1 border-b border-dotted border-brown-200/60 min-w-[20px] translate-y-[-3px]" />
                  <span className="flex-shrink-0 font-display text-lg font-semibold text-brown-800">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Combo Packages */}
          {relatedCombos.length > 0 && (
            <div className="mt-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-warm-white via-cream to-blush-light/20 p-8 sm:p-10 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] gold-shimmer" />

              <h3 className="font-display text-xl font-semibold text-brown-800 mb-6">
                Combo Packages
              </h3>
              <div className="space-y-0">
                {relatedCombos.map((combo) => (
                  <div
                    key={combo.name}
                    className="flex items-baseline gap-3 py-3"
                  >
                    <span className="font-body text-base font-medium text-brown-700">
                      {combo.name}
                    </span>
                    <span className="flex-1 border-b border-dotted border-brown-200/60 min-w-[20px] translate-y-[-3px]" />
                    <span className="flex-shrink-0 font-display text-lg font-semibold text-brown-800">
                      {combo.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <a
              href="https://bellebooking.com/center/lynn-signature-nails"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-brown-700 text-warm-white font-body text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-brown-800 hover:shadow-[0_8px_30px_rgba(92,64,51,0.3)] hover:-translate-y-0.5"
            >
              Book This Service
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
