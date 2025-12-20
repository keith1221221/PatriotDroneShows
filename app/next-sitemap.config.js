/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.patriotdroneshows.com",

  generateRobotsTxt: true,
  generateIndexSitemap: true,

  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  autoLastmod: true,

  // Keep junk + private routes out of the sitemap
  exclude: [
    "/api/*",
    "/chatbot",
    "/_not-found",
    "/404",
    "/500",
    "/_next/*",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
    "/sitemap-*.xml",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/chatbot"],
      },
    ],
    // If generateIndexSitemap is true, next-sitemap typically outputs sitemap.xml as the index.
    // You can omit this entirely, but keeping it is fine.
    additionalSitemaps: ["https://www.patriotdroneshows.com/sitemap.xml"],
  },

  transform: async (config, path) => {
    const moneyPages = new Set([
      "/",
      "/patriotic-drone-shows",
      
      
      "/america-250-celebrations",
      "/locations",
      "/contact",

      // State / market pages (add more as you create them)
      "/california-drone-light-shows",
      "/texas-drone-light-shows",
      "/florida-drone-light-shows",
      "/new-york-new-jersey-drone-light-shows",
      "/nevada-drone-light-shows",
      "/arizona-drone-light-shows",
      "/utah-drone-light-shows",
      "/colorado-drone-light-shows",
      "/oregon-drone-light-shows",
      "/washington-drone-light-shows",
    ]);

    const isMoneyPage = moneyPages.has(path);

    return {
      // IMPORTANT: loc should be an absolute URL
      loc: `${config.siteUrl}${path}`,
      changefreq: isMoneyPage ? "weekly" : "monthly",
      priority: isMoneyPage ? 0.9 : 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [],
    };
  },
};
