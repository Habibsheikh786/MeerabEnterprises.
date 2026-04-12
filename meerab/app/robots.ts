import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://www.meerabenterprises.com.pk/sitemap.xml",
    host: "https://www.meerabenterprises.com.pk",
  };
}