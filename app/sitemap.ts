import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.patriotdroneshows.com";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },

    { url: `${baseUrl}/patriotic-drone-light-shows`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/america-250-celebrations`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    { url: `${baseUrl}/california-drone-light-shows`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/nevada-drone-light-shows`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/arizona-drone-light-shows`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/colorado-drone-light-shows`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/utah-drone-light-shows`, lastModified, changeFrequency: "monthly", priority: 0.7 },

    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
