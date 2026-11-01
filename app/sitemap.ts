import type { MetadataRoute } from "next";
import { caseProjects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://yurazlab.ru";
  return [{url:siteUrl,changeFrequency:"monthly",priority:1},{url:`${siteUrl}/projects`,changeFrequency:"monthly",priority:.8}, ...caseProjects.map(project => ({url:`${siteUrl}/cases/${project.caseSlug}`,changeFrequency:"monthly" as const,priority:.7}))];
}
