import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.patriotdroneshows.com";
  const lastModified = new Date();

  const routes = [
    "/",
    "/patriotic-drone-light-shows",
    "/america-250-celebrations",
    "/locations",
    "/california-drone-light-shows",
    "/nevada-drone-light-shows",
    "/arizona-drone-light-shows",
    "/colorado-drone-light-shows",
    "/utah-drone-light-shows",
    "/contact",
    // add if they exist + you want indexed:
    // "/portfolio",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/" ? 1.0 :
      path === "/patriotic-drone-light-shows" ? 0.9 :
      path === "/america-250-celebrations" ? 0.9 :
      path === "/locations" ? 0.8 :
      path === "/contact" ? 0.6 : 0.7,
  }));
}
