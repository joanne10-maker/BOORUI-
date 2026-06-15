import fs from "node:fs/promises";
import path from "node:path";

const root = ".";
const blogDir = path.join(root, "content", "blogs");
const outDir = path.join(root, "blog");
const contactEmail = "joannexiaoxiao@gmail.com";
const whatsappUrl = "https://wa.me/8613632456845";
const whatsappFloatUrl = "https://wa.me/8613632456845?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.";
const alibabaUrl = "https://boorui.en.alibaba.com/";
const addressEn = "No. 21, Chengdexinyuan, Dawang High-tech Zone, Dawang Subdistrict, Sihui, Zhaoqing, Guangdong, China";
const addressZh = "广东省肇庆市四会市大旺街道大旺高新区诚德鑫园21号 博惢科技";

const addressDisplayZh = "广东省肇庆市四会市大旺街道大旺高新区诚德鑫园21号 博惢科技";

const articleImages = {
  "how-to-choose-oem-smartwatch-band-supplier": "../assets/generated/global-buyer-meeting.png",
  "silicone-vs-leather-vs-nylon-vs-metal-watch-bands": "../assets/products/hero-collection.jpg",
  "private-label-watch-bands-custom-logo-packaging-guide": "../assets/generated/private-label-packaging.png",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugFromMarkdown(markdown, fallback) {
  return markdown.match(/^- URL Slug:\s*(.+)$/m)?.[1].trim() || fallback.replace(/\.md$/, "");
}

function metaFromMarkdown(markdown, fallback) {
  const title = markdown.match(/^- SEO Title:\s*(.+)$/m)?.[1].trim() || markdown.match(/^#\s+(.+)$/m)?.[1].trim() || "BOORUI Blog";
  const description = markdown.match(/^- Meta Description:\s*(.+)$/m)?.[1].trim() || "BOORUI smartwatch band sourcing guide for global B2B buyers.";
  const slug = slugFromMarkdown(markdown, fallback);
  const h1 = markdown.match(/^- H1:\s*(.+)$/m)?.[1].trim() || title;
  const topic = markdown.match(/^- Blog Title:\s*(.+)$/m)?.[1].trim() || h1;
  const keywords = markdown.match(/^- Target Keywords:\s*(.+)$/m)?.[1].trim() || "smartwatch bands, OEM watch bands, private label watch bands";
  return { title, description, slug, h1, topic, keywords };
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function renderTable(lines) {
  const rows = lines
    .filter((line) => line.trim().startsWith("|"))
    .map((line) => line.trim().slice(1, -1).split("|").map((cell) => inlineMarkdown(cell.trim())));

  if (rows.length < 2) return "";
  const headers = rows[0];
  const bodyRows = rows.slice(2);

  return `<div class="blog-table-wrap"><table class="blog-table"><thead><tr>${headers.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead><tbody>${bodyRows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let list = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
    list = [];
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("|")) {
      flushParagraph();
      flushList();
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i += 1;
      }
      i -= 1;
      html.push(renderTable(tableLines));
      continue;
    }

    if (/^#{1,6}\s/.test(trimmed)) {
      flushParagraph();
      flushList();
      const level = Math.min((trimmed.match(/^#+/)?.[0].length || 2) + 1, 6);
      const text = trimmed.replace(/^#{1,6}\s+/, "");
      if (text === "Blog Topic Plan" || text === "SEO Information") continue;
      html.push(`<h${level}>${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.slice(2));
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  return html.join("\n");
}

function languageSwitcher(prefix) {
  return `
        <div class="language-switcher" data-language-switcher>
          <button class="language-trigger" type="button" aria-haspopup="menu" aria-expanded="false" data-language-trigger>
            <span aria-hidden="true">🌐</span><span data-i18n="nav.language">Language</span><strong data-language-current>English</strong>
          </button>
          <div class="language-menu" role="menu" data-language-menu>
            <button type="button" role="menuitem" data-language-option="en"><span>English</span><small>EN</small></button>
            <button type="button" role="menuitem" data-language-option="fr"><span>Français</span><small>FR</small></button>
            <button type="button" role="menuitem" data-language-option="de"><span>Deutsch</span><small>DE</small></button>
            <button type="button" role="menuitem" data-language-option="ar"><span>العربية</span><small>AR</small></button>
            <button type="button" role="menuitem" data-language-option="ru"><span>Русский</span><small>RU</small></button>
            <button type="button" role="menuitem" data-language-option="es"><span>Español</span><small>ES</small></button>
            <button type="button" role="menuitem" data-language-option="pt"><span>Português</span><small>PT</small></button>
          </div>
        </div>`;
}

function whatsappFloatButton() {
  return `<a class="whatsapp-float" href="${whatsappFloatUrl}" target="_blank" rel="noopener" aria-label="Contact BOORUI on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16.04 3.2A12.72 12.72 0 0 0 5.16 22.5L3.6 28.8l6.45-1.5A12.7 12.7 0 1 0 16.04 3.2Zm0 2.3a10.4 10.4 0 0 1 8.86 15.86 10.43 10.43 0 0 1-13.8 3.71l-.42-.22-3.82.9.92-3.7-.25-.43A10.42 10.42 0 0 1 16.04 5.5Zm-4.42 5.5c-.24 0-.62.09-.95.44-.33.36-1.25 1.22-1.25 2.98 0 1.75 1.28 3.45 1.45 3.68.18.24 2.48 3.98 6.13 5.42 3.03 1.19 3.65.95 4.3.9.66-.05 2.12-.86 2.42-1.7.3-.83.3-1.55.21-1.7-.09-.15-.33-.24-.69-.42-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.78-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.66Z" />
      </svg>
    </a>`;
}

function joanneIpCard(prefix, extraClass = "") {
  return `<aside class="joanne-ip-card ${extraClass}" aria-label="Joanne Wu BOORUI founder profile">
          <div class="joanne-ip-photo">
            <img src="${prefix}assets/joanne-ip.png" alt="Joanne Wu, BOORUI Founder and Global Sourcing Advisor" />
            <span>BOORUI</span>
          </div>
          <div class="joanne-ip-body">
            <span class="eyebrow">Talk with Joanne Wu</span>
            <h2>Founder & Global Sourcing Advisor</h2>
            <p>Joanne supports overseas buyers with product selection, OEM/ODM quotation, sample review and custom logo packaging preparation.</p>
            <ul>
              <li>Smart Watch Bands and 3C accessories</li>
              <li>Factory direct wholesale support</li>
              <li>Custom logo, packaging and sample review</li>
            </ul>
            <div class="joanne-ip-actions">
              <a class="button primary" href="mailto:${contactEmail}">Email Joanne</a>
              <a class="button secondary" href="${whatsappUrl}" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </aside>`;
}

function shell({ title, description, body, prefix = "../", canonicalPath = "/blog/" }) {
  return `<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="article" />
    <link rel="icon" href="${prefix}assets/boorui-logo.png" />
    <link rel="stylesheet" href="${prefix}styles.css?v=12" />
    <link rel="canonical" href="${canonicalPath}" />
    <link rel="alternate" hreflang="en" href="/en${canonicalPath}" />
    <link rel="alternate" hreflang="fr" href="/fr${canonicalPath}" />
    <link rel="alternate" hreflang="de" href="/de${canonicalPath}" />
    <link rel="alternate" hreflang="ar" href="/ar${canonicalPath}" />
    <link rel="alternate" hreflang="ru" href="/ru${canonicalPath}" />
    <link rel="alternate" hreflang="es" href="/es${canonicalPath}" />
    <link rel="alternate" hreflang="pt" href="/pt${canonicalPath}" />
    <link rel="alternate" hreflang="x-default" href="${canonicalPath}" />
    <script defer src="${prefix}assets/language-switcher.js"></script>
  </head>
  <body>
    <div class="trust-bar" aria-label="B2B sourcing highlights">
      <span data-i18n="trust.oem">OEM / ODM Support</span>
      <span data-i18n="trust.stock">Ready Stock & New Arrivals</span>
      <span data-i18n="trust.privateLabel">Private Label Packaging</span>
      <a href="${alibabaUrl}" target="_blank" rel="noopener" data-i18n="trust.alibaba">Alibaba Storefront</a>
    </div>
    <header class="site-header">
      <a class="brand" href="${prefix}index.html" aria-label="BOORUI home"><img src="${prefix}assets/boorui-logo.png" alt="BOORUI logo" /></a>
      <nav class="nav mega-nav" aria-label="Main navigation">
        <a class="nav-trigger" href="${prefix}index.html#products" data-i18n="nav.products">Products</a>
        <a class="nav-trigger" href="${prefix}index.html#oem" data-i18n="nav.services">OEM/ODM</a>
        <a class="nav-trigger" href="${prefix}index.html#markets" data-i18n="nav.markets">Markets</a>
        <a class="nav-trigger" href="${prefix}blog/index.html">Blog</a>
        <a class="nav-trigger" href="${prefix}index.html#about" data-i18n="nav.about">About</a>
        <a class="nav-trigger" href="${prefix}index.html#inquiry" data-i18n="nav.contact">Contact Us</a>
      </nav>
      <div class="header-actions">
${languageSwitcher(prefix)}
        <a class="header-cta" href="${prefix}index.html#inquiry" data-i18n="nav.quote">Get a Quote</a>
      </div>
    </header>
${body}
    <footer class="footer">
      <div><img src="${prefix}assets/boorui-logo.png" alt="BOORUI logo" /><p data-i18n="footer.tagline">OEM & ODM Smartwatch Band Supplier for Global B2B Buyers.</p></div>
      <div><strong data-i18n="footer.corePages">Core Pages</strong><a href="${prefix}index.html#products" data-i18n="nav.products">Products</a><a href="${prefix}index.html#oem" data-i18n="nav.services">OEM/ODM</a><a href="${prefix}blog/index.html">Blog</a><a href="${prefix}index.html#inquiry" data-i18n="nav.contact">Contact</a></div>
      <div><strong data-i18n="footer.address">Address</strong><span>${addressEn}</span><span lang="zh-CN">${addressDisplayZh}</span><a href="mailto:${contactEmail}">${contactEmail}</a></div>
    </footer>
    ${whatsappFloatButton()}
  </body>
</html>`;
}

function articlePage(article, allArticles) {
  const image = articleImages[article.slug] || "../assets/generated/brand-showroom.png";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.meta.h1,
    description: article.meta.description,
    author: {
      "@type": "Person",
      name: "Joanne Wu",
      jobTitle: "Founder & Global Sourcing Advisor",
      image: "/assets/joanne-ip.png",
      worksFor: { "@type": "Organization", name: "BOORUI" },
    },
    publisher: { "@type": "Organization", name: "BOORUI", logo: { "@type": "ImageObject", url: "/assets/boorui-logo.png" } },
    mainEntityOfPage: `/blog/${article.slug}/`,
  };
  const related = allArticles
    .filter((item) => item.slug !== article.slug)
    .map((item) => `<a href="../${item.slug}/index.html">${escapeHtml(item.meta.h1)}</a>`)
    .join("");

  return shell({
    title: article.meta.title,
    description: article.meta.description,
    prefix: "../../",
    canonicalPath: `/blog/${article.slug}/`,
    body: `
    <main>
      <article class="blog-article">
        <header class="blog-article-hero">
          <span>BOORUI Sourcing Guide</span>
          <h1>${escapeHtml(article.meta.h1)}</h1>
          <p>${escapeHtml(article.meta.description)}</p>
          <div class="blog-meta"><span>Target keywords: ${escapeHtml(article.meta.keywords)}</span><a href="../../index.html#inquiry" data-i18n="button.quote">Get a Quote</a></div>
        </header>
        <img class="blog-hero-image" src="${image}" alt="${escapeHtml(article.meta.h1)}" />
        <div class="blog-article-layout">
          <div class="blog-content">
${article.html}
          </div>
          ${joanneIpCard("../../", "blog-author-card")}
        </div>
        <section class="blog-cta-panel">
          <h2>Need help sourcing smartwatch bands?</h2>
          <p>Send BOORUI your target models, material direction, quantity and private label needs. Our team can help prepare product options for quotation and sample discussion.</p>
          <div class="hero-actions"><a class="button primary" href="../../index.html#inquiry" data-i18n="button.quote">Get a Quote</a><a class="button secondary" href="../../assets/BOORUI_2026_English_Product_Brochure.pdf" download data-i18n="button.catalog">Download Catalog</a></div>
        </section>
        <aside class="related-posts">
          <strong>Related BOORUI Guides</strong>
          <div>${related}</div>
        </aside>
        <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
      </article>
    </main>`,
  });
}

function blogIndexPage(articles) {
  const cards = articles
    .map((article) => {
      const image = articleImages[article.slug] || "../assets/generated/brand-showroom.png";
      return `<article class="blog-card">
        <img src="${image}" alt="${escapeHtml(article.meta.h1)}" />
        <div>
          <span>SEO Guide</span>
          <h2>${escapeHtml(article.meta.h1)}</h2>
          <p>${escapeHtml(article.meta.description)}</p>
          <a href="${article.slug}/index.html">Read Article</a>
        </div>
      </article>`;
    })
    .join("");

  return shell({
    title: "BOORUI Blog | Smartwatch Band Sourcing Guides",
    description: "BOORUI blog articles for OEM/ODM smartwatch bands, private label packaging, wholesale sourcing and material selection.",
    prefix: "../",
    canonicalPath: "/blog/",
    body: `
    <main>
      <section class="blog-list-hero">
        <div>
          <span>BOORUI Blog</span>
          <h1>Smartwatch Band Sourcing Guides for Global B2B Buyers</h1>
          <p>Practical English guides for OEM/ODM smartwatch bands, private label packaging, material selection, factory testing, shipment inspection and wholesale sourcing decisions.</p>
        </div>
      </section>
      <section class="section blog-list-section">
        <div class="blog-list-layout">
          <div class="blog-grid">${cards}</div>
          ${joanneIpCard("../", "blog-index-advisor")}
        </div>
      </section>
    </main>`,
  });
}

const files = (await fs.readdir(blogDir)).filter((file) => file.endsWith(".md"));
const articles = [];

for (const file of files) {
  const markdown = await fs.readFile(path.join(blogDir, file), "utf8");
  const meta = metaFromMarkdown(markdown, file);
  const html = markdownToHtml(markdown);
  articles.push({ file, meta, slug: meta.slug, html });
}

await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(path.join(outDir, "index.html"), blogIndexPage(articles), "utf8");

for (const article of articles) {
  const dir = path.join(outDir, article.slug);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, "index.html"), articlePage(article, articles), "utf8");
}

console.log(`Generated blog index and ${articles.length} blog articles.`);
