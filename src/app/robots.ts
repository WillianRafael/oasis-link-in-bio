import type { MetadataRoute } from "next";
import { oasisConfig } from "@/config/oasis-links";

const siteOrigin = new URL(oasisConfig.publicUrl).origin;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/go/"],
      },
    ],
    sitemap: `${siteOrigin}/sitemap.xml`,
    host: siteOrigin,
  };
}

