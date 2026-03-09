import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedCombos } from "@/data/services";
import ServiceDetailContent from "@/components/ServiceDetailContent";
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

  return (
    <ServiceDetailContent
      slug={slug}
      category={service.category}
      description={service.description}
      items={service.items}
      images={service.images}
      relatedCombos={relatedCombos}
    />
  );
}
