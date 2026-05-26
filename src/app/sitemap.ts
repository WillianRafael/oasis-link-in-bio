import type { MetadataRoute } from "next";
import { oasisConfig } from "@/config/oasis-links";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: oasisConfig.publicUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

