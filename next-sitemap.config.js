/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.patriotdroneshows.com",

  // Generate these into /public on build
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // Sitemap behavior
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  autoLastmod: true,

  // Exclusions (keep bots out of app-only / dynamic endpoints)
  exclude: [
    "/chatbot",
    "/api/*",
    "/_not-found",
    "/404",
    "/500",
  ],

  // robots.txt fine-tuning
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/chatbot"],
      },
    ],
    additionalSitemaps: [
      "https://www.patriotdroneshows.com/sitemap.xml",
    ],
  },

  // Optional: add extra URLs that aren't in your Next routes
  additionalPaths: async (config) => {
    const result = [];
    return result;
  },

  // Optional: customize each URL entry
  transform: async (config, path) => {
    // Patriot "money pages" / top SEO pages
    const isMoneyPage =
      path === "/" ||
      path === "/patriotic-drone-shows" ||
      path === "/july-4th-drone-shows" ||
      path === "/veterans-day-drone-shows" ||
      path === "/memorial-day-drone-shows" ||
      path === "/locations" ||
      path === "/request-a-quote" ||
      path === "/portfolio" ||
      path === "/contact";

    return {
      loc: path,
      changefreq: isMoneyPage ? "weekly" : "monthly",
      priority: isMoneyPage ? 0.9 : 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [],
    };
  },
};
