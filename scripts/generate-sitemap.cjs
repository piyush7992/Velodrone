const fs = require('fs');
const path = require('path');

const urls = [
  { loc: 'https://velodrone.in/', changefreq: 'daily', priority: '1.0' },
  { loc: 'https://velodrone.in/#services', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://velodrone.in/#industries', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://velodrone.in/#about', changefreq: 'weekly', priority: '0.7' },
  { loc: 'https://velodrone.in/#contact', changefreq: 'weekly', priority: '0.9' },
  { loc: 'https://velodrone.in/#faq', changefreq: 'monthly', priority: '0.6' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map((u) => {
      return `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`;
    })
    .join('\n') +
  `\n</urlset>`;

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, sitemap, 'utf8');
console.log('Sitemap written to', outPath);
