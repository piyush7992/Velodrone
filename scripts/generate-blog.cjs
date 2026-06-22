const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const postsDir = path.join(process.cwd(), 'src', 'content', 'blog');
const outDir = path.join(process.cwd(), 'public', 'knowledge');

fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

const posts = files.map((file) => {
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
  const { data, content } = matter(raw);
  const html = marked.parse(content);
  const computedSlug = data.slug || (data.title || '').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const plainText = content.replace(/```[\s\S]*?```/g, '').replace(/[#>*`]/g, '').replace(/\n+/g, ' ').trim();
  const excerpt = data.excerpt || plainText.slice(0, 160) + (plainText.length > 160 ? '…' : '');
  const dateStr = data.date ? (new Date(data.date)).toISOString().split('T')[0] : '';
  return { ...data, content: html, slug: computedSlug, excerpt, date: dateStr };
});

// Generate article pages
posts.forEach((p) => {
  const slug = p.slug || (p.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const filename = path.join(outDir, `${slug}.html`);
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${p.title} | VeloDrone</title>
    <meta name="description" content="${(p.excerpt || '').replace(/"/g, '&quot;')}" />
    <meta property="og:title" content="${p.title}" />
    <meta property="og:description" content="${(p.excerpt || '').replace(/"/g, '&quot;')}" />
    <meta property="og:image" content="${p.image || '/assets/hero.avif'}" />
    <link rel="stylesheet" href="/styles/static.css" />
    <link rel="stylesheet" href="/knowledge/knowledge.css" />
  </head>
  <body>
    <header>
      <nav class="container">
        <h2>Velodrone</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/knowledge/">Knowledge Center</a></li>
        </ul>
      </nav>
    </header>

    <main class="container">
      <article class="post-detail-article">
        <h1>${p.title}</h1>
        <p class="meta">${p.date} — ${p.author}</p>
        ${p.content}
      </article>
      <p><a href="/knowledge/">Back to Knowledge Center</a></p>
    </main>

    <footer>
      <div class="container">
        <p>&copy; VeloDrone</p>
      </div>
    </footer>
  </body>
</html>`;
  fs.writeFileSync(filename, html, 'utf8');
});

// Generate index with featured and filter UI
const tags = Array.from(new Set(posts.flatMap(p => (p.tags || []))));
const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Knowledge Center | VeloDrone</title>
    <meta name="description" content="Articles, guides, and resources from VeloDrone." />
    <link rel="stylesheet" href="/styles/static.css" />
    <link rel="stylesheet" href="/knowledge/knowledge.css" />
  </head>
  <body>
    <header>
      <nav class="container">
        <h2>Velodrone</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="container">
        <h1>Knowledge Center</h1>
        <p>Latest articles, guides, and resources from VeloDrone.</p>

        <section class="kc-intro">
          <p>Welcome to the VeloDrone Knowledge Center — your resource for practical guides, case studies and technical explainers about drone systems, counter-drone security and mapping workflows. Browse the featured article or filter by topic.</p>
        </section>

      ${posts[0] ? `
      <section class="featured">
        <a href="/knowledge/${posts[0].slug}.html">
          <div class="featured-inner">
            <img src="${posts[0].image || '/assets/hero.avif'}" alt="${posts[0].title}" />
            <div class="featured-copy">
              <span class="section-tag">Featured</span>
              <h2>${posts[0].title}</h2>
              <p class="meta">${posts[0].date} — ${posts[0].author}</p>
              <p>${posts[0].excerpt}</p>
              <span class="read-more">Read article</span>
            </div>
          </div>
        </a>
      </section>
      ` : ''}

      <div class="filters">
        <label>Filter by tag:</label>
        <select id="tag-filter">
          <option value="">All</option>
          ${tags.map(t => `<option value="${t}">${t}</option>`).join('')}
        </select>
      </div>

        <div id="posts">
        ${posts.map(p => `
          <article class="post-card" data-tags="${(p.tags||[]).join(' ')}">
            <h2><a href="/knowledge/${p.slug}.html">${p.title}</a></h2>
            <p class="meta">${p.date} — ${p.author}</p>
            <p>${p.excerpt}</p>
            <a class="read-more" href="/knowledge/${p.slug}.html">Read article</a>
          </article>
        `).join('')}
      </div>

        <section class="subscribe-cta">
          <div class="cta-inner">
            <div>
              <h3>Subscribe for new articles</h3>
              <p>Get the latest case studies and guides straight to your inbox.</p>
            </div>
            <form id="subscribe-form" action="/" method="GET">
              <input type="email" name="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>

    </main>

    <footer>
      <div class="container">
        <p>&copy; VeloDrone</p>
      </div>
    </footer>

    <script>
      const select = document.getElementById('tag-filter');
      select.addEventListener('change', () => {
        const val = select.value;
        document.querySelectorAll('.post-card').forEach(card => {
          const tags = card.dataset.tags.split(' ').filter(Boolean);
          if (!val || tags.includes(val)) card.style.display = '';
          else card.style.display = 'none';
        });
      });
    </script>
  </body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), indexHtml, 'utf8');

// Generate RSS
const rssItems = posts.map(p => `
  <item>
    <title>${p.title}</title>
    <link>https://velodrone.in/knowledge/${p.slug}.html</link>
    <description>${(p.excerpt||'').replace(/&/g,'&amp;')}</description>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
  </item>
`).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>VeloDrone Knowledge Center</title>
  <link>https://velodrone.in/knowledge/</link>
  <description>Latest articles from VeloDrone</description>
  ${rssItems}
</channel>
</rss>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'rss.xml'), rss, 'utf8');

// Update sitemap
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
// ensure knowledge entries are present (simple append if missing)
posts.forEach(p => {
  const url = `https://velodrone.in/knowledge/${p.slug}`;
  if (!sitemap.includes(url)) {
    sitemap = sitemap.replace('</urlset>', `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`);
  }
});
fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log('Generated', posts.length, 'posts and index, rss and updated sitemap.');
