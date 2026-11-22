/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aimasterblog.in",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/server-sitemap.xml", "/api/*", "/_next/*", "/static/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/", "/static/"] },
    ],
    additionalSitemaps: ["https://aimasterblog.in/sitemap.xml"],
  },
  transform: async (config, path) => {
    const priority = path === "/" ? 1.0 : path.startsWith("/blog/") ? 0.8 : 0.6;
    const changefreq = path.startsWith("/blog/") ? "weekly" : "monthly";
    return { loc: path, priority, changefreq };
  },
};