/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://tiny-tulumba-6cc1cf.netlify.app",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  // ...other options
};
