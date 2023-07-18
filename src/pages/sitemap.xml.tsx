import { Links } from "@/constants/Links";

const linksInSiteMap = [Links.About, Links.Cookies, Links.PrivacyPolicy];

function generateSiteMap() {
  const date = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${linksInSiteMap
      .map((link) => {
        return `
      <url>
        <loc>${link}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `;
      })
      .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }: any) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
