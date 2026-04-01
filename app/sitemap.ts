import { MetadataRoute } from "next"
import { portfolioFiles } from "@/lib/content"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vianalfalah-portofolio.vercel.app"

  const routes = Object.keys(portfolioFiles).map((file) => ({
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
