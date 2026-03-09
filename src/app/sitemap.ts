import type { MetadataRoute } from "next";

const baseUrl = "https://lajoliemain.ca";

const serviceSlugs = [
  "manicure",
  "pedicure",
  "extensions",
  "nail-design",
  "waxing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
