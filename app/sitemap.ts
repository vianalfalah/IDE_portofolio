import { MetadataRoute } from "next"
import { portfolioFiles } from "@/lib/content"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com"

  const routes = Object.entries(portfolioFiles).map(([file, data]) => ({
    url: `${baseUrl}/portfolio/${file}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...routes,
  ]
}
