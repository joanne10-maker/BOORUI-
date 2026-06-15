import fs from "node:fs/promises";
import path from "node:path";

const contactEmail = "joannexiaoxiao@gmail.com";
const contactPhone = "+86-13632456845";
const whatsappUrl = "https://wa.me/8613632456845";
const whatsappFloatUrl = "https://wa.me/8613632456845?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.";
const alibabaUrl = "https://boorui.en.alibaba.com/";
const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/boorui",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/boorui",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/boorui",
    icon: "linkedin",
  },
];
const companyName = "Shenzhen Boxing Trading Development Co., Ltd.";
const brandName = "BOORUI";
const addressEn = "No. 21, Chengdexinyuan, Dawang High-tech Zone, Dawang Subdistrict, Sihui, Zhaoqing, Guangdong, China";
const addressZh = "广东省肇庆市四会市大旺街道大旺高新区诚德鑫园21号 博惢科技";
const osmUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${addressZh} ${addressEn}`)}`;
const osmEmbedUrl = "https://www.openstreetmap.org/export/embed.html?bbox=112.72%2C23.20%2C113.02%2C23.46&layer=mapnik";

const pages = [
  {
    slug: "products",
    title: "Smartwatch Band Products",
    h1: "Smartwatch Band Product Collections",
    description:
      "Explore BOORUI Apple Watch bands, Samsung Watch bands, Garmin bands and Xiaomi Mi Band straps for B2B wholesale, OEM and private label sourcing.",
    keywords: "smartwatch band supplier, watch band wholesale, apple watch bands, garmin watch bands",
    intro:
      "BOORUI organizes its product range around compatibility, material and buyer use case so overseas buyers can build sellable watch band collections quickly.",
    bullets: ["Apple Watch bands", "Samsung Galaxy Watch bands", "Garmin sports bands", "Xiaomi Mi Band straps", "Leather, silicone, nylon, metal and magnetic options"],
  },
  {
    slug: "apple-watch-bands",
    title: "Apple Watch Bands Supplier",
    h1: "Apple Watch Bands for Wholesale and Private Label Programs",
    description:
      "BOORUI supplies Apple Watch compatible bands in leather, silicone, nylon, metal, magnetic and fashion styles for global B2B buyers.",
    keywords: "apple watch bands, apple watch band supplier, apple watch band wholesale",
    intro:
      "BOORUI is a B2B Apple Watch band supplier for brands, Amazon sellers, Shopify stores, importers and distributors that need fast product selection and private label support.",
    bullets: ["38/40/41/42mm and 42/44/45/46/49mm size coverage", "Leather, silicone, nylon, metal and jewelry-style collections", "Ready stock and seasonal new items", "Private label and light customization"],
  },
  {
    slug: "samsung-watch-bands",
    title: "Samsung Galaxy Watch Bands Supplier",
    h1: "Samsung Watch Bands for Global B2B Buyers",
    description:
      "Source Samsung Galaxy Watch compatible bands from BOORUI with OEM, ODM, wholesale and private label support.",
    keywords: "samsung watch bands, galaxy watch band supplier, samsung watch strap wholesale",
    intro:
      "BOORUI supports Samsung Galaxy Watch band sourcing for brands, distributors and online sellers that need compatible smartwatch accessory ranges.",
    bullets: ["Sport, fashion and daily-wear strap options", "Material and color selection support", "Wholesale inquiry path", "OEM/ODM and private label coordination"],
  },
  {
    slug: "garmin-watch-bands",
    title: "Garmin Watch Bands Supplier",
    h1: "Garmin Watch Bands in 20mm, 22mm and 26mm Sizes",
    description:
      "BOORUI supplies Garmin-compatible nylon and silicone sports bands for outdoor, fitness and daily-wear B2B collections.",
    keywords: "garmin watch bands, garmin fenix band supplier, 22mm garmin band wholesale",
    intro:
      "Garmin-compatible bands are positioned for outdoor and sport watch users, with quick-release sizes that suit retail and wholesale programs.",
    bullets: ["20mm, 22mm and 26mm quick-release options", "Nylon and silicone sport directions", "Outdoor and daily sports scenes", "MOQ-friendly product selection"],
  },
  {
    slug: "mi-band-straps",
    title: "Mi Band Straps Supplier",
    h1: "Xiaomi Mi Band and Redmi Watch Strap Supplier",
    description:
      "Source Xiaomi Mi Band, Mi Band Pro and Redmi Watch compatible straps in silicone, woven, leather, metal and fashion styles.",
    keywords: "mi band straps, xiaomi mi band strap supplier, redmi watch strap wholesale",
    intro:
      "BOORUI supplies Mi Band accessories for buyers who want high-volume replacement straps, upgraded leather and metal options, and fashion parts.",
    bullets: ["Mi Band 8/9/10 and Pro model directions", "Redmi Watch and Huawei Fit compatibility options", "Silicone, woven, leather and metal materials", "Fashion parts for customized retail collections"],
  },
  {
    slug: "silicone-watch-bands",
    title: "Silicone Watch Bands Supplier",
    h1: "Silicone Watch Bands for Sport, Retail and Bulk Orders",
    description:
      "BOORUI supplies silicone smartwatch bands for Apple Watch, Samsung, Garmin and Mi Band compatible product ranges.",
    keywords: "silicone watch bands, silicone apple watch band supplier, silicone smartwatch strap wholesale",
    intro:
      "Silicone watch bands are suitable for high-volume retail, sport collections, waterproof positioning and promotional programs.",
    bullets: ["Soft daily-wear and sport styles", "Water-resistant material direction", "Broad compatibility across smartwatch models", "Color and packaging customization support"],
  },
  {
    slug: "leather-watch-bands",
    title: "Leather Watch Bands Supplier",
    h1: "Leather Smartwatch Bands for Premium Collections",
    description:
      "BOORUI supplies leather smartwatch bands including genuine leather, cowhide, microfiber leather and magnetic buckle collections.",
    keywords: "leather watch bands, leather apple watch band supplier, genuine leather smartwatch band",
    intro:
      "Leather bands help buyers build premium, office, classic and gift-ready smartwatch accessory collections.",
    bullets: ["Vintage oil-wax leather", "Double-sided silk leather and calfskin", "Magnetic cowhide bands", "Jewelry-style leather combinations"],
  },
  {
    slug: "nylon-watch-bands",
    title: "Nylon Watch Bands Supplier",
    h1: "Nylon Watch Bands for Sport and Everyday Collections",
    description:
      "BOORUI supplies nylon and woven smartwatch bands for Apple Watch, Garmin, Mi Band and compatible wearable accessories.",
    keywords: "nylon watch bands, nylon apple watch band supplier, woven smartwatch straps",
    intro:
      "Nylon and woven bands work well for sport, outdoor, casual and comfort-led retail assortments.",
    bullets: ["Lightweight woven materials", "Bright casual colors", "Outdoor and gym scenes", "Compatible sourcing for multiple smart watch models"],
  },
  {
    slug: "metal-watch-bands",
    title: "Metal Watch Bands Supplier",
    h1: "Metal, Steel and Premium Smartwatch Bands",
    description:
      "BOORUI supplies metal and steel smartwatch bands for premium, fashion, jewelry and gift-oriented accessory collections.",
    keywords: "metal watch bands, steel smartwatch band supplier, titanium apple watch band",
    intro:
      "Metal watch bands help buyers create higher perceived value and fashion-forward smartwatch accessory lines.",
    bullets: ["Steel and metal fashion bands", "Jewelry-style watch bands", "Premium colorways", "Apple Watch and Mi Band compatible directions"],
  },
  {
    slug: "oem-odm-watch-bands",
    title: "OEM & ODM Watch Bands",
    h1: "OEM & ODM Watch Band Manufacturing Support",
    description:
      "BOORUI provides OEM and ODM smartwatch band support for material selection, colors, packaging, logo application and model matching.",
    keywords: "OEM watch band, ODM watch band, custom watch band manufacturer",
    intro:
      "BOORUI helps global buyers move from product idea to sellable smartwatch band collection with OEM/ODM and private label coordination.",
    bullets: ["Material and color selection", "Logo and packaging direction", "Model matching support", "Ready stock plus custom development paths"],
  },
  {
    slug: "private-label-watch-bands",
    title: "Private Label Watch Bands",
    h1: "Private Label Watch Bands for Brands and Online Sellers",
    description:
      "BOORUI supports private label smartwatch band programs for brands, Amazon sellers, Shopify stores and distributors.",
    keywords: "private label watch bands, branded watch strap supplier, private label smartwatch bands",
    intro:
      "Private label programs are ideal when buyers need their own branded product range without building a full factory process from scratch.",
    bullets: ["Brand-oriented product selection", "Packaging and logo support", "Seasonal collection planning", "Suitable for Amazon and Shopify sellers"],
  },
  {
    slug: "about",
    title: "About BOORUI",
    h1: "About BOORUI and Shenzhen Boxing Trading Development Co., Ltd.",
    description:
      "Learn about BOORUI, a Shenzhen-based smartwatch band and wearable accessory supplier founded in 2016.",
    keywords: "BOORUI, Shenzhen Boxing Trading Development, smartwatch band supplier China",
    intro:
      "BOORUI is operated by Shenzhen Boxing Trading Development Co., Ltd., founded in 2016 and focused on smartwatch bands, wearable accessories, OEM/ODM support and global B2B supply.",
    bullets: ["Founded in 2016", "10,000+ m2 facility", "20+ elite team members", "OEM/ODM customization and global delivery support"],
  },
  {
    slug: "download",
    title: "Download BOORUI Catalog",
    h1: "Download the BOORUI 2026 English Product Brochure",
    description:
      "Download BOORUI's 2026 English brochure for smartwatch bands, Mi Band accessories, Garmin bands and custom service information.",
    keywords: "BOORUI catalog, smartwatch band catalog, watch band brochure",
    intro:
      "The BOORUI 2026 English product brochure is designed for quick sourcing, customer presentation and quotation preparation.",
    bullets: ["Premium leather smart bands", "Apple Watch new items", "Mi Band accessories", "Garmin watch bands", "Custom and contact information"],
    download: true,
  },
  {
    slug: "contact",
    title: "Contact BOORUI",
    h1: "Contact BOORUI for Smartwatch Band Sourcing",
    description:
      "Contact Joanne Wu at BOORUI for OEM, ODM, wholesale and private label smartwatch band inquiries.",
    keywords: "contact BOORUI, smartwatch band supplier contact, watch band quote",
    intro:
      "Send your target models, material direction, quantity and customization needs so BOORUI can recommend suitable products.",
    bullets: ["Contact: Joanne Wu", "Email: joannexiaoxiao@gmail.com", "WhatsApp / Tel: +86-13632456845", "Catalog available for download", "Inquiry fields prepared for B2B buyers"],
  },
  {
    slug: "apple-watch-band-manufacturer",
    title: "Apple Watch Band Manufacturer",
    h1: "Apple Watch Band Manufacturer for OEM, ODM and Wholesale Buyers",
    description:
      "BOORUI is an Apple Watch band manufacturer and supplier for brands, importers, distributors, Amazon sellers and private label businesses.",
    keywords: "apple watch band manufacturer, custom apple watch band manufacturer, apple watch band wholesale",
    intro:
      "BOORUI supports Apple Watch band manufacturing and sourcing programs with material variety, seasonal new items, ready stock and private label support.",
    bullets: ["Leather, silicone, nylon, metal and magnetic styles", "Apple Watch mainstream size coverage", "Private label and light customization", "Suitable for brands, distributors and e-commerce sellers"],
  },
  {
    slug: "custom-watch-band-manufacturer",
    title: "Custom Watch Band Manufacturer",
    h1: "Custom Watch Band Manufacturer for Smartwatch Accessory Brands",
    description:
      "BOORUI supports custom smartwatch band manufacturing with OEM/ODM, material, color, logo, packaging and model matching services.",
    keywords: "custom watch band manufacturer, custom smartwatch band supplier, OEM smartwatch strap",
    intro:
      "Use this page for buyers who already know they need a custom or semi-custom smartwatch band collection.",
    bullets: ["Material direction", "Color and buckle coordination", "Logo and packaging support", "Product selection plus customization path"],
  },
  {
    slug: "private-label-watch-band-supplier",
    title: "Private Label Watch Band Supplier",
    h1: "Private Label Watch Band Supplier for Brand Owners",
    description:
      "BOORUI helps brand owners, Amazon sellers and Shopify stores source private label watch bands and wearable accessories.",
    keywords: "private label watch band supplier, private label smartwatch bands, watch band supplier for brands",
    intro:
      "BOORUI private label support helps buyers create branded watch band collections from existing or customized product directions.",
    bullets: ["Product range planning", "Brand and packaging support", "Ready stock and custom options", "B2B quotation workflow"],
  },
  {
    slug: "wholesale-smartwatch-bands",
    title: "Wholesale Smartwatch Bands",
    h1: "Wholesale Smartwatch Bands for Importers and Distributors",
    description:
      "Source wholesale smartwatch bands from BOORUI for Apple Watch, Samsung, Garmin and Xiaomi Mi Band compatible collections.",
    keywords: "wholesale smartwatch bands, bulk watch bands, smartwatch strap supplier China",
    intro:
      "This landing page is built for buyers looking for bulk smartwatch bands, fast product selection and stable supplier communication.",
    bullets: ["Apple Watch, Samsung, Garmin and Mi Band categories", "Ready stock selection", "Bulk inquiry path", "Global B2B supply support"],
  },
];

const countryPages = [
  ["usa", "USA", "US brands, Amazon sellers, importers and distributors"],
  ["germany", "Germany", "German e-commerce sellers, distributors and private label buyers"],
  ["uk", "UK", "UK brands, online sellers and wholesale buyers"],
  ["uae", "UAE", "UAE importers, distributors and retail buyers"],
  ["saudi-arabia", "Saudi Arabia", "Saudi importers, retailers and wholesale buyers"],
  ["australia", "Australia", "Australian brands, distributors and e-commerce sellers"],
  ["indonesia", "Indonesia", "Indonesian distributors, online sellers and importers"],
].map(([countrySlug, country, audience]) => ({
  slug: `${countrySlug}/watch-band-supplier`,
  title: `Watch Band Supplier ${country}`,
  h1: `Watch Band Supplier for ${country} Buyers`,
  description: `BOORUI supplies Apple Watch bands, Samsung bands, Garmin bands and Mi Band straps for ${country} B2B buyers.`,
  keywords: `watch band supplier ${country}, smartwatch band supplier ${country}, apple watch band supplier ${country}`,
  intro: `BOORUI supports ${audience} with OEM/ODM smartwatch bands, ready stock selection and private label sourcing support.`,
  bullets: ["Apple Watch, Samsung, Garmin and Mi Band product directions", "Ready stock and light customization", "Private label support", "English catalog and quick inquiry path"],
}));

const allPages = [...pages, ...countryPages];

function escapeJson(value) {
  return JSON.stringify(value);
}

function languageLinks(slug) {
  const pagePath = slug === "index" ? "" : `${slug}/`;
  const links = ["en", "fr", "de", "ar", "ru", "es", "pt"]
    .map((lang) => `<link rel="alternate" hreflang="${lang}" href="/${lang}/${pagePath}" />`)
    .join("\n    ");
  return `${links}\n    <link rel="alternate" hreflang="x-default" href="/${pagePath}" />`;
}

function languageSwitcher() {
  return `
        <div class="language-switcher" data-language-switcher>
          <button class="language-trigger" type="button" aria-haspopup="menu" aria-expanded="false" data-language-trigger>
            <span aria-hidden="true">🌐</span>
            <span data-i18n="nav.language">Language</span>
            <strong data-language-current>English</strong>
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

function socialIcon(icon) {
  const icons = {
    facebook:
      '<path d="M18.4 8.7h2.1V5.2c-.36-.05-1.6-.16-3.05-.16-3.02 0-5.1 1.85-5.1 5.25v2.95H9v3.92h3.36V27h4.08v-9.84h3.18l.5-3.92h-3.68v-2.56c0-1.13.31-1.98 1.96-1.98Z" />',
    instagram:
      '<path d="M16 9.9A6.1 6.1 0 1 0 16 22.1 6.1 6.1 0 0 0 16 9.9Zm0 10.1a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.75-10.35a1.42 1.42 0 1 1-2.85 0 1.42 1.42 0 0 1 2.85 0Z" /><path d="M21.15 5.2h-10.3A5.66 5.66 0 0 0 5.2 10.85v10.3a5.66 5.66 0 0 0 5.65 5.65h10.3a5.66 5.66 0 0 0 5.65-5.65v-10.3a5.66 5.66 0 0 0-5.65-5.65Zm3.52 15.95a3.53 3.53 0 0 1-3.52 3.52h-10.3a3.53 3.53 0 0 1-3.52-3.52v-10.3a3.53 3.53 0 0 1 3.52-3.52h10.3a3.53 3.53 0 0 1 3.52 3.52v10.3Z" />',
    linkedin:
      '<path d="M8 12.1h4.1V27H8V12.1Zm2.05-7.1a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.74ZM15 12.1h3.92v2.04h.06c.55-1.04 1.9-2.14 3.9-2.14 4.18 0 4.95 2.75 4.95 6.32V27h-4.08v-7.68c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V27H15V12.1Z" />',
  };
  return icons[icon] || icons.facebook;
}

function socialLinksHtml() {
  const links = socialLinks
    .map(
      (item) => `<a class="social-link" href="${item.url}" target="_blank" rel="noopener" aria-label="BOORUI on ${item.name}">
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">${socialIcon(item.icon)}</svg>
            <span>${item.name}</span>
          </a>`,
    )
    .join("");

  return `<div class="footer-social" aria-label="BOORUI social media links">
          <strong>Social Media</strong>
          <div class="social-links">${links}</div>
          <script type="application/json" class="social-links-config">
${JSON.stringify({ socialLinks }, null, 2)}
          </script>
        </div>`;
}

function imageFor(page) {
  const slug = page.slug;
  if (slug.includes("/watch-band-supplier")) {
    return {
      file: "country-sourcing-showroom.png",
      alt: "BOORUI branded showroom sourcing scene for overseas watch band buyers",
    };
  }
  if (slug.includes("oem") || slug.includes("private-label") || slug.includes("custom") || slug.includes("wholesale")) {
    return {
      file: "private-label-packaging.png",
      alt: "BOORUI private label packaging samples for custom smartwatch band programs",
    };
  }
  if (slug.includes("silicone") || slug.includes("nylon") || slug.includes("garmin")) {
    return {
      file: "sport-silicone-garmin.png",
      alt: "BOORUI sport silicone and nylon smartwatch bands for Garmin-style outdoor buyers",
    };
  }
  if (slug.includes("apple") || slug.includes("leather") || slug.includes("metal")) {
    return {
      file: "apple-premium-lifestyle.png",
      alt: "BOORUI premium Apple Watch compatible bands with branded packaging",
    };
  }
  if (slug === "contact") {
    return {
      file: "global-buyer-meeting.png",
      alt: "BOORUI showroom buyer meeting with smartwatch band samples and branded wall sign",
    };
  }
  if (slug === "about" || slug === "download" || slug === "products") {
    return {
      file: "brand-showroom.png",
      alt: "BOORUI branded showroom with smartwatch band samples and packaging",
    };
  }
  return {
    file: "lifestyle-collection.png",
    alt: "BOORUI premium smartwatch band lifestyle collection with branded packaging",
  };
}

function proofScenario(page) {
  const slug = page.slug;

  if (slug.includes("/watch-band-supplier")) {
    return {
      title: "Country Buyer Sourcing Support",
      text: "Importers, distributors and online sellers can use BOORUI's catalog, sample review and inquiry path to compare product ranges before placing bulk orders.",
    };
  }
  if (slug.includes("private-label")) {
    return {
      title: "Private Label Range Planning",
      text: "Brand owners and e-commerce sellers can discuss logo placement, packaging direction, material selection and sample checks before confirming a private label program.",
    };
  }
  if (slug.includes("wholesale")) {
    return {
      title: "Wholesale Assortment Selection",
      text: "Bulk buyers can compare Apple Watch, Samsung, Garmin and Mi Band styles across key materials, then request quotation based on target models and quantities.",
    };
  }
  if (slug.includes("apple")) {
    return {
      title: "Apple Watch Collection Setup",
      text: "Amazon sellers, Shopify stores and distributors can shortlist leather, silicone, nylon, metal and fashion Apple Watch styles for market testing.",
    };
  }
  if (slug.includes("oem") || slug.includes("custom")) {
    return {
      title: "OEM / ODM Project Coordination",
      text: "Custom projects can start with material direction, color planning, buckle selection, packaging discussion and sample review before bulk confirmation.",
    };
  }

  return {
    title: "B2B Buyer Evaluation Path",
    text: "Overseas buyers can review product fit, sample details, packaging direction and documentation needs before moving into quotation and order planning.",
  };
}

function advantageDetails(page) {
  const slug = page.slug;

  if (slug === "contact") {
    return [
      "Joanne Wu is the direct contact for overseas buyers, helping confirm model fit, material direction, quotation details and sample needs.",
      "Use email for catalogs, product lists, quotations and project documents that need a clear written record.",
      "Use WhatsApp or telephone for fast sourcing questions, sample follow-up and urgent buyer communication.",
      "The English catalog helps buyers review product categories before sending target models, quantities and branding needs.",
      "Inquiry details are organized around B2B sourcing: device model, material, quantity, packaging, logo and delivery timeline.",
    ];
  }

  if (slug === "about") {
    return [
      "Founded in 2016, BOORUI has long-term experience serving smartwatch band and wearable accessory buyers.",
      "The listed facility scale supports product display, sample review, packaging discussion and export-oriented buyer service.",
      "A focused team helps buyers move from product selection to quotation, sample review and order planning.",
      "OEM/ODM support covers material direction, color planning, model matching, logo discussion and packaging coordination.",
    ];
  }

  if (slug === "download") {
    return [
      "Premium leather options help buyers build office, gift-ready and higher perceived value smartwatch band lines.",
      "Apple Watch new items make it easier to refresh marketplace, retail and private label collections.",
      "Mi Band accessories support fast-moving replacement strap, fashion part and high-volume retail programs.",
      "Garmin watch bands are positioned for outdoor, sport and quick-release size assortments.",
      "Custom and contact information gives buyers a clear path from catalog review to quotation and sample discussion.",
    ];
  }

  if (slug.includes("/watch-band-supplier")) {
    return [
      "Regional buyers can compare Apple Watch, Samsung, Garmin and Mi Band directions before asking for quotation.",
      "Ready stock and light customization help importers and online sellers test a range before larger buying plans.",
      "Private label support can include logo discussion, packaging direction and assortment planning for local retail needs.",
      "The English catalog and direct Joanne inquiry path make cross-border sourcing easier to review and share internally.",
    ];
  }

  if (slug.includes("private-label")) {
    return [
      "BOORUI can help buyers shape a branded range around target material, price level, device model and retail channel.",
      "Logo and packaging discussion supports presentation boxes, labels and buyer-facing collection planning.",
      "Ready stock and custom options let brands balance speed with product differentiation.",
      "A B2B quotation workflow keeps models, colors, quantity, samples and packaging requirements clear before order planning.",
    ];
  }

  if (slug.includes("oem") || slug.includes("custom")) {
    return [
      "Material direction can be discussed around silicone, leather, nylon, metal, magnetic and hybrid product concepts.",
      "Color and buckle coordination helps buyers match brand palettes, seasonal ranges and target retail positioning.",
      "Logo and packaging support gives custom programs a clearer buyer-facing presentation.",
      "Product selection plus customization helps reduce development risk before sample confirmation and bulk quotation.",
    ];
  }

  if (slug.includes("wholesale")) {
    return [
      "Device category planning helps wholesale buyers cover the most common smartwatch accessory demand.",
      "Ready stock selection supports faster testing, reorder planning and assortment building.",
      "Bulk inquiries can be prepared around target quantity, model mix, color range and delivery timeline.",
      "Global B2B support keeps communication clear for importers, distributors and marketplace sellers.",
    ];
  }

  if (slug.includes("apple-watch")) {
    return [
      "Mainstream size coverage helps buyers organize Apple Watch compatible bands for current retail demand.",
      "Leather, silicone, nylon, metal and jewelry styles give one collection both everyday and premium options.",
      "Ready stock and seasonal new items support fast product testing and recurring marketplace refreshes.",
      "Private label and light customization can add logo, packaging and color direction for brand owners.",
    ];
  }

  if (slug.includes("samsung-watch")) {
    return [
      "Sport, fashion and daily-wear straps help buyers build a balanced Galaxy Watch compatible assortment.",
      "Material and color selection support helps match target retail pricing, customer use and brand direction.",
      "A wholesale inquiry path keeps model fit, quantity, packaging and quotation details easy to confirm.",
      "OEM/ODM and private label coordination supports buyers who need a more branded Samsung Watch band range.",
    ];
  }

  if (slug.includes("garmin")) {
    return [
      "20mm, 22mm and 26mm quick-release options help buyers cover common Garmin-style outdoor watch needs.",
      "Nylon and silicone sport directions suit active, outdoor, gym and daily sports positioning.",
      "Outdoor and daily sports scenes make the range easier to merchandise for fitness and adventure users.",
      "MOQ-friendly product selection helps buyers test sizes and colors before scaling a wholesale order.",
    ];
  }

  if (slug.includes("mi-band")) {
    return [
      "Mi Band and Pro model directions help buyers organize replacement strap and wearable accessory demand.",
      "Redmi Watch and Huawei Fit compatibility options support broader fast-moving accessory assortments.",
      "Silicone, woven, leather and metal materials give buyers both volume and upgraded retail options.",
      "Fashion parts help customized retail collections feel more differentiated than basic replacement straps.",
    ];
  }

  if (slug.includes("silicone")) {
    return [
      "Soft daily-wear and sport styles suit high-volume buyers, promotional orders and practical retail programs.",
      "Water-resistant material direction supports gym, travel, outdoor and everyday wearable use cases.",
      "Broad smartwatch compatibility helps buyers build one silicone range across multiple device families.",
      "Color and packaging customization support makes silicone programs easier to adapt for private label buyers.",
    ];
  }

  if (slug.includes("leather")) {
    return [
      "Vintage oil-wax leather creates a classic, gift-ready story for premium smartwatch band collections.",
      "Double-sided silk leather and calfskin options support refined office, lifestyle and boutique retail lines.",
      "Magnetic cowhide bands add a convenient upgrade point for premium daily-wear assortments.",
      "Jewelry-style leather combinations help buyers mix fashion value with smartwatch compatibility.",
    ];
  }

  if (slug.includes("nylon")) {
    return [
      "Lightweight woven materials support comfort-led, sport and casual everyday watch band collections.",
      "Bright casual colors help buyers create seasonal, youth-focused and marketplace-ready assortments.",
      "Outdoor and gym scenes make nylon bands easy to position for active smartwatch users.",
      "Compatible sourcing across multiple smartwatch models helps simplify buyer range planning.",
    ];
  }

  if (slug.includes("metal")) {
    return [
      "Steel and metal fashion bands help buyers create a higher perceived value smartwatch accessory range.",
      "Jewelry-style watch bands support gift, dress, boutique and fashion-led retail positioning.",
      "Premium colorways help buyers plan refined collections for marketplaces and offline retail.",
      "Apple Watch and Mi Band compatible directions keep premium metal options tied to real device demand.",
    ];
  }

  if (slug === "products") {
    return [
      "Apple Watch bands cover daily, sport, premium and fashion directions for mainstream smartwatch buyers.",
      "Samsung Galaxy Watch bands help sellers build round-watch compatible accessory assortments.",
      "Garmin sports bands support outdoor, fitness and quick-release size product planning.",
      "Xiaomi Mi Band straps work well for high-volume replacement, fashion and upgrade accessory programs.",
      "Leather, silicone, nylon, metal and magnetic options let buyers create good-better-best retail ranges.",
    ];
  }

  return page.bullets.map((item) => `${item} can be reviewed with BOORUI through catalog selection, sample discussion, packaging needs and quotation planning.`);
}

function pageTrustExtras(page) {
  const prefix = relative(page.slug);

  return `
      <section class="section subpage-contact-proof">
        <div class="subpage-contact-layout">
          <div>
            <span data-i18n="contact.sales">Direct Contact</span>
            <h2>Talk with Joanne Wu, Founder & Global Sourcing Advisor</h2>
            <p>Share target models, material direction, quantity and private label needs. Joanne Wu can help prepare product options, OEM/ODM quotation details, sample review and custom logo packaging discussion.</p>
            <div class="contact-proof-actions">
              <a class="button primary" href="mailto:${contactEmail}" data-i18n="button.email">Email Joanne</a>
              <a class="button secondary" href="${whatsappUrl}" data-i18n="button.whatsapp">WhatsApp</a>
              <a class="button secondary" href="${alibabaUrl}" target="_blank" rel="noopener" data-i18n="trust.alibaba">Alibaba Storefront</a>
            </div>
          </div>
          <img src="${prefix}assets/joanne-ip.png" alt="Joanne Wu, BOORUI Founder and Global Sourcing Advisor" />
        </div>
      </section>`;
}

function wholesaleSystemSection(page) {
  if (page.slug !== "wholesale-smartwatch-bands") {
    return "";
  }

  const prefix = relative(page.slug);
  const catalogGroups = [
    ["Shop by Device", "Apple Watch Bands", "Samsung Watch Bands", "Garmin Watch Bands", "Mi Band Straps"],
    ["Shop by Material", "Silicone", "Leather", "Nylon", "Metal"],
    ["Wholesale Programs", "Ready Stock", "Mixed Assortment", "Private Label", "Seasonal New Arrivals"],
    ["Buyer Types", "Importers", "Distributors", "Amazon Sellers", "Shopify Brands"],
  ];
  const productRails = [
    ["Apple Watch Bestseller Range", "Silicone, leather, magnetic, metal, rhinestone and fashion styles for mainstream retail demand.", "assets/products/hero-collection.jpg"],
    ["Sport and Outdoor Range", "Nylon and silicone options for Garmin, Samsung and active lifestyle replacement straps.", "assets/generated/sport-silicone-garmin.png"],
    ["Private Label Packaging Range", "Logo, pouch, box and collection planning support for wholesale buyers building branded programs.", "assets/generated/private-label-packaging.png"],
  ];

  return `
      <section class="section wholesale-system" id="wholesale-system">
        <div class="section-head">
          <h2>BOORUI Wholesale Product System</h2>
          <p>Inspired by clear retail category navigation, this wholesale system helps B2B buyers move from product browsing to quotation-ready requirements.</p>
        </div>
        <div class="wholesale-system-layout">
          <div class="wholesale-path">
            <article>
              <span>01</span>
              <h3>Choose device lines</h3>
              <p>Start with Apple Watch, Samsung, Garmin and Mi Band compatible product directions.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Build the material mix</h3>
              <p>Combine silicone, leather, nylon and metal to create good-better-best wholesale assortments.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Confirm packaging path</h3>
              <p>Select ready stock, private label packaging or OEM/ODM customization based on your market.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Send quotation details</h3>
              <p>Share model mix, target quantity, colors, logo needs and delivery timeline with Joanne Wu.</p>
            </article>
          </div>
          <div class="wholesale-catalog">
            ${catalogGroups
              .map(
                ([title, ...items]) => `<article>
                  <h3>${title}</h3>
                  <div>${items.map((item) => `<span>${item}</span>`).join("")}</div>
                </article>`,
              )
              .join("")}
          </div>
        </div>
        <div class="wholesale-rail" aria-label="Wholesale product range highlights">
          ${productRails
            .map(
              ([title, text, image]) => `<article>
                <img src="${prefix}${image}" alt="${title} for BOORUI wholesale smartwatch band buyers" />
                <div>
                  <h3>${title}</h3>
                  <p>${text}</p>
                  <a href="${prefix}index.html#inquiry">Request this range</a>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </section>
      <section class="section wholesale-quote-builder">
        <div class="quote-builder-copy">
          <h2>Wholesale Quote Checklist</h2>
          <p>Send these details to reduce back-and-forth and help BOORUI prepare a practical product list, quotation and sample discussion.</p>
        </div>
        <div class="quote-checklist">
          <article><span>Models</span><strong>Target devices and sizes</strong><p>Example: Apple Watch 38-49mm, Galaxy Watch, Garmin quick release, Mi Band.</p></article>
          <article><span>Quantity</span><strong>MOQ and color split</strong><p>Share total quantity, colors per style and whether mixed cartons are needed.</p></article>
          <article><span>Branding</span><strong>Logo and packaging</strong><p>Confirm neutral packaging, private label packaging, logo position or barcode needs.</p></article>
          <article><span>Delivery</span><strong>Market and timeline</strong><p>Tell us the destination market, launch date, sample deadline and inspection needs.</p></article>
        </div>
      </section>`;
}

function contactLocationSection(page) {
  if (page.slug !== "contact") {
    return pageTrustExtras(page);
  }

  const prefix = relative(page.slug);

  return `
      <section class="section contact-detail-section">
        <div class="contact-detail-grid">
          <article class="contact-profile-card">
            <img src="${prefix}assets/generated/global-buyer-meeting.png" alt="BOORUI showroom buyer meeting with branded wall sign and watch band samples" />
            <div>
              <span data-i18n="contact.sales">Sales Contact</span>
              <h2>Joanne Wu</h2>
              <p>Direct support for overseas smartwatch band buyers, including product selection, quotation, catalog sharing, sample discussion and private label coordination.</p>
              <a href="mailto:${contactEmail}">${contactEmail}</a>
              <a href="${whatsappUrl}">WhatsApp / Tel: ${contactPhone}</a>
            </div>
          </article>
          <article class="location-card">
            <span data-i18n="contact.address">Company Address</span>
            <h2>BOORUI Office & Buyer Contact Point</h2>
            <p>${addressEn}</p>
            <p lang="zh-CN">${addressZh}</p>
            <div class="map-card map-card-embedded" aria-label="OpenStreetMap location preview for BOORUI address">
              <div class="map-card-copy">
                <strong>OpenStreetMap</strong>
                <p data-i18n="contact.mapText">Location preview for Dawang High-tech Zone, Sihui, Zhaoqing. Use the button below to open an OpenStreetMap search for the exact BOORUI address.</p>
              </div>
              <div class="osm-frame-wrap">
                <iframe
                  title="OpenStreetMap location preview for BOORUI address"
                  src="${osmEmbedUrl}"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="map-address-strip">
                <span>${addressEn}</span>
                <span lang="zh-CN">${addressZh}</span>
                <a class="button primary" href="${osmUrl}" target="_blank" rel="noopener" data-i18n="button.map">Open Exact Address in OpenStreetMap</a>
              </div>
            </div>
            <div class="contact-proof-actions">
              <a class="button secondary" href="${prefix}assets/BOORUI_2026_English_Product_Brochure.pdf" download data-i18n="button.catalog">Download Catalog</a>
              <a class="button secondary" href="${alibabaUrl}" target="_blank" rel="noopener" data-i18n="trust.alibaba">Alibaba Storefront</a>
            </div>
          </article>
        </div>
      </section>`;
}

function productFit(page) {
  const slug = page.slug;

  if (slug.includes("silicone") || slug.includes("garmin")) {
    return {
      title: "Sport and Outdoor Product Fit",
      intro: "Best for active buyers, waterproof positioning, gym assortments and outdoor watch users.",
      cards: [
        ["Material Story", "Soft silicone, rubber and woven nylon options for sport and daily wear."],
        ["Buyer Use", "Suitable for distributors, outdoor retailers and fitness accessory sellers."],
        ["Sourcing Edge", "Fast selection by size, compatibility and color direction."],
      ],
    };
  }
  if (slug.includes("apple-watch")) {
    return {
      title: "Apple Watch Range Fit",
      intro: "Best for buyers building mainstream Apple Watch compatible collections across premium, sport and fashion styles.",
      cards: [
        ["Compatibility", "Covers common Apple Watch size directions for retail-ready strap programs."],
        ["Buyer Use", "Suitable for Amazon sellers, Shopify stores, distributors and private label brands."],
        ["Sourcing Edge", "Fast selection across leather, silicone, nylon, metal, magnetic and gift-ready styles."],
      ],
    };
  }
  if (slug.includes("samsung-watch")) {
    return {
      title: "Samsung Watch Range Fit",
      intro: "Best for Galaxy Watch compatible assortments that need daily, sport and premium style coverage.",
      cards: [
        ["Compatibility", "Galaxy Watch strap sourcing with material and color selection support."],
        ["Buyer Use", "Suitable for importers, distributors, online sellers and accessory retailers."],
        ["Sourcing Edge", "Coordinate model fit, packaging needs and quotation details through one inquiry path."],
      ],
    };
  }
  if (slug.includes("mi-band")) {
    return {
      title: "Mi Band Accessory Fit",
      intro: "Best for high-volume replacement strap programs and upgraded Mi Band fashion accessory ranges.",
      cards: [
        ["Compatibility", "Mi Band, Mi Band Pro, Redmi Watch and related wearable accessory directions."],
        ["Buyer Use", "Suitable for volume sellers, distributors and fast-moving accessory stores."],
        ["Sourcing Edge", "Compare silicone, woven, leather, metal and decorative parts quickly."],
      ],
    };
  }
  if (slug.includes("leather") || slug.includes("metal")) {
    return {
      title: "Premium Retail Product Fit",
      intro: "Best for gift sets, office collections, fashion positioning and higher perceived value ranges.",
      cards: [
        ["Material Story", "Leather, steel, rhinestone and jewelry-style options for premium assortments."],
        ["Buyer Use", "Suitable for brand owners, boutique retailers and marketplace sellers."],
        ["Sourcing Edge", "Private label packaging and curated collection planning support."],
      ],
    };
  }
  if (slug.includes("private-label") || slug.includes("oem") || slug.includes("custom") || slug.includes("wholesale")) {
    return {
      title: "B2B Program Fit",
      intro: "Best for buyers building branded collections, wholesale assortments or semi-custom accessory programs.",
      cards: [
        ["Program Type", "Ready stock, private label, OEM/ODM and light customization paths."],
        ["Buyer Use", "Suitable for importers, distributors, Amazon sellers, Shopify stores and brand owners."],
        ["Sourcing Edge", "Clear inquiry path for materials, colors, packaging, samples and quotation."],
      ],
    };
  }
  if (slug.includes("/watch-band-supplier")) {
    return {
      title: "Market Buyer Product Fit",
      intro: "Best for regional importers, distributors and online sellers comparing product direction before quotation.",
      cards: [
        ["Category Coverage", "Apple Watch, Samsung, Garmin and Mi Band compatible product directions."],
        ["Buyer Use", "Suitable for country-specific retail, wholesale and e-commerce sourcing needs."],
        ["Sourcing Edge", "English catalog, product images, sample review and direct Joanne inquiry support."],
      ],
    };
  }

  return {
    title: "Product Fit for Global Buyers",
    intro: "A clean product page rhythm helps buyers understand category, material direction and sourcing next steps.",
    cards: [
      ["Category Focus", "Apple Watch, Samsung, Garmin and Mi Band compatible sourcing directions."],
      ["Buyer Use", "Suitable for e-commerce sellers, importers, distributors and private label businesses."],
      ["Sourcing Edge", "Ready product images, catalog support, sample discussion and direct inquiry."],
    ],
  };
}

function pageHtml(page) {
  const pageImage = imageFor(page);
  const scenario = proofScenario(page);
  const fit = productFit(page);
  const advantageTexts = advantageDetails(page);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandName,
    legalName: companyName,
    logo: `${relative(page.slug)}assets/boorui-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 21, Chengdexinyuan, Dawang High-tech Zone, Dawang Subdistrict",
      addressLocality: "Sihui, Zhaoqing",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      name: "Joanne Wu",
      telephone: contactPhone,
      email: contactEmail,
      availableLanguage: ["English", "Chinese"],
    },
  };
  const download = page.download
    ? `<a class="button primary" href="${relative(page.slug)}assets/BOORUI_2026_English_Product_Brochure.pdf" download data-i18n="button.catalog">Download Catalog</a>`
    : "";

  return `<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.title} | BOORUI</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <link rel="icon" href="${relative(page.slug)}assets/boorui-logo.png" />
    <link rel="stylesheet" href="${relative(page.slug)}styles.css?v=12" />
    ${languageLinks(page.slug)}
    <script defer src="${relative(page.slug)}assets/language-switcher.js"></script>
    <script type="application/ld+json">
      ${escapeJson(pageSchema)}
    </script>
  </head>
  <body>
    <div class="trust-bar" aria-label="B2B sourcing highlights">
      <span data-i18n="trust.oem">OEM / ODM Support</span>
      <span data-i18n="trust.stock">Ready Stock & New Arrivals</span>
      <span data-i18n="trust.privateLabel">Private Label Packaging</span>
      <a href="${alibabaUrl}" target="_blank" rel="noopener" data-i18n="trust.alibaba">Alibaba Storefront</a>
    </div>
    <header class="site-header">
      <a class="brand" href="${relative(page.slug)}index.html" aria-label="BOORUI home">
        <img src="${relative(page.slug)}assets/boorui-logo.png" alt="BOORUI logo" />
      </a>
      <nav class="nav mega-nav" aria-label="Main navigation">
        <div class="nav-item has-mega">
          <a class="nav-trigger" href="${relative(page.slug)}index.html#products" data-i18n="nav.products">Products</a>
          <div class="mega-menu" aria-label="Product mega menu">
            <div class="mega-feature">
              <img src="${relative(page.slug)}assets/products/hero-collection.jpg" alt="BOORUI smartwatch band collection" />
              <div>
                <strong>BOORUI Collections</strong>
                <span>Browse by device, material, sourcing goal and target market.</span>
              </div>
            </div>
            <div class="mega-grid">
              <section>
                <h3>Device Lines</h3>
                <a href="${relative(page.slug)}apple-watch-bands/">Apple Watch Bands</a>
                <a href="${relative(page.slug)}samsung-watch-bands/">Samsung Watch Bands</a>
                <a href="${relative(page.slug)}garmin-watch-bands/">Garmin Watch Bands</a>
                <a href="${relative(page.slug)}mi-band-straps/">Mi Band Straps</a>
              </section>
              <section>
                <h3>Materials</h3>
                <a href="${relative(page.slug)}silicone-watch-bands/">Silicone Watch Bands</a>
                <a href="${relative(page.slug)}leather-watch-bands/">Leather Watch Bands</a>
                <a href="${relative(page.slug)}nylon-watch-bands/">Nylon Watch Bands</a>
                <a href="${relative(page.slug)}metal-watch-bands/">Metal Watch Bands</a>
              </section>
              <section>
                <h3>B2B Sourcing</h3>
                <a href="${relative(page.slug)}oem-odm-watch-bands/">OEM & ODM Watch Bands</a>
                <a href="${relative(page.slug)}private-label-watch-bands/">Private Label Watch Bands</a>
                <a href="${relative(page.slug)}custom-watch-band-manufacturer/">Custom Watch Band Manufacturer</a>
                <a href="${relative(page.slug)}wholesale-smartwatch-bands/">Wholesale Smartwatch Bands</a>
              </section>
              <section>
                <h3>Priority Markets</h3>
                <a href="${relative(page.slug)}usa/watch-band-supplier/">USA Watch Band Supplier</a>
                <a href="${relative(page.slug)}germany/watch-band-supplier/">Germany Watch Band Supplier</a>
                <a href="${relative(page.slug)}uae/watch-band-supplier/">UAE Watch Band Supplier</a>
                <a href="${relative(page.slug)}australia/watch-band-supplier/">Australia Watch Band Supplier</a>
              </section>
            </div>
          </div>
        </div>
        <a class="nav-trigger" href="${relative(page.slug)}index.html#oem" data-i18n="nav.services">OEM/ODM</a>
        <a class="nav-trigger" href="${relative(page.slug)}index.html#markets" data-i18n="nav.markets">Markets</a>
        <a class="nav-trigger" href="${relative(page.slug)}blog/index.html">Blog</a>
        <a class="nav-trigger" href="${relative(page.slug)}index.html#about" data-i18n="nav.about">About</a>
        <a class="nav-trigger" href="${relative(page.slug)}index.html#faq" data-i18n="nav.faq">FAQ</a>
      </nav>
      <div class="header-actions">
${languageSwitcher()}
        <a class="header-cta" href="${relative(page.slug)}index.html#inquiry" data-i18n="nav.quote">Get a Quote</a>
      </div>
    </header>
    <main>
      <section class="hero subpage-hero">
        <div class="hero-copy">
          <h1>${page.h1}</h1>
          <p>${page.intro}</p>
          <div class="subpage-hero-points" aria-label="BOORUI sourcing advantages">
            <span>OEM / ODM</span>
            <span>Private Label</span>
            <span>Ready Stock</span>
            <span>Global B2B Support</span>
          </div>
          <div class="hero-actions">
            <a class="button primary" href="${relative(page.slug)}index.html#inquiry" data-i18n="button.quote">Get a Quote</a>
            ${download}
            <a class="button secondary" href="${relative(page.slug)}index.html#products" data-i18n="button.products">View Product Range</a>
          </div>
        </div>
        <div class="hero-visual subpage-hero-media" aria-label="BOORUI product visual">
          <img src="${relative(page.slug)}assets/generated/${pageImage.file}" alt="${pageImage.alt}" />
        </div>
      </section>
      <section class="intro-strip">
        <p>BOORUI combines retail-ready smartwatch band collections with export-oriented OEM/ODM, private label packaging and fast buyer communication.</p>
      </section>
      ${wholesaleSystemSection(page)}
      <section class="section">
        <div class="section-head">
          <h2>${fit.title}</h2>
          <p>${fit.intro}</p>
        </div>
        <div class="subpage-product-grid">
          ${fit.cards.map(([title, text]) => `<article><span>Product Fit</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>
      <section class="section subpage-advantages">
        <div class="section-head">
          <h2>BOORUI Buyer Advantages</h2>
          <p>Designed for overseas buyers who need product clarity, fast communication and practical sourcing support.</p>
        </div>
        <div class="landing-grid page-bullets">
          ${page.bullets.map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${item}</h3><p>${advantageTexts[index] ?? advantageTexts[advantageTexts.length - 1]}</p></article>`).join("")}
        </div>
      </section>
      <section class="section subpage-trust" id="trust">
        <div class="section-head">
          <h2>Trust Signals for Buyer Review</h2>
          <p>BOORUI uses careful proof language: certification documents, customer references and project details should be confirmed with real materials during inquiry and sampling.</p>
        </div>
        <div class="subpage-trust-grid" aria-label="BOORUI trust signals">
          <article><span>Founded</span><strong>2016</strong><p>${companyName} operates BOORUI for global B2B sourcing.</p></article>
          <article><span>Service</span><strong>OEM / ODM Support</strong><p>Material, color, buckle, model matching and custom project coordination.</p></article>
          <article><span>Branding</span><strong>Private Label Packaging</strong><p>Logo, packaging direction and buyer-facing assortment planning support.</p></article>
          <article><span>Quality</span><strong>QC and Sample Review</strong><p>Sample checks can cover fit, finish, material feel, hardware and packaging presentation.</p></article>
          <article><span>Scenario</span><strong>${scenario.title}</strong><p>${scenario.text}</p><a href="${alibabaUrl}" target="_blank" rel="noopener" data-i18n="trust.alibaba">Alibaba Storefront</a></article>
        </div>
      </section>
      ${contactLocationSection(page)}
      <section class="section comparison">
        <div class="section-head">
          <h2>Common Buyer Questions</h2>
          <p>Concise answers help overseas buyers evaluate BOORUI and help AI search engines cite the page accurately.</p>
        </div>
        <div class="faq-list">
          <details open><summary>Is BOORUI a fit for private label buyers?</summary><p>Yes. BOORUI supports private label watch band programs for brands, Amazon sellers, Shopify stores, distributors and importers.</p></details>
          <details><summary>What products can BOORUI supply?</summary><p>BOORUI supplies Apple Watch bands, Samsung Watch bands, Garmin bands, Mi Band straps and wearable accessory collections.</p></details>
          <details><summary>Can I request OEM or ODM customization?</summary><p>Yes. BOORUI supports OEM/ODM coordination including material direction, color selection, logo, packaging and model matching.</p></details>
        </div>
      </section>
    </main>
    <footer class="footer" id="site-footer">
      <div><img src="${relative(page.slug)}assets/boorui-logo.png" alt="BOORUI logo" /><p data-i18n="footer.tagline">OEM & ODM Smartwatch Band Supplier for Global B2B Buyers.</p></div>
      <div><strong data-i18n="nav.contact">Contact</strong><a href="mailto:${contactEmail}">${contactEmail}</a><a href="${whatsappUrl}">WhatsApp Joanne Wu</a><a href="${relative(page.slug)}index.html#inquiry" data-i18n="form.submit">Submit Inquiry</a></div>
      ${socialLinksHtml()}
      <div class="footer-address">
        <strong data-i18n="footer.address">Address</strong>
        <a class="footer-map" href="${osmUrl}" target="_blank" rel="noopener" aria-label="Open BOORUI address in OpenStreetMap">
          <span class="footer-map-grid"></span>
          <span class="footer-map-route route-one"></span>
          <span class="footer-map-route route-two"></span>
          <span class="footer-map-pin"></span>
          <span class="footer-map-label">BOORUI</span>
          <span class="footer-map-caption">Dawang High-tech Zone</span>
        </a>
        <span>${addressEn}</span>
        <span lang="zh-CN">${addressZh}</span>
        <a class="footer-map-link" href="${osmUrl}" target="_blank" rel="noopener">Open in OpenStreetMap</a>
      </div>
    </footer>
    ${whatsappFloatButton()}
  </body>
</html>
`;
}

function relative(slug) {
  const depth = slug.split("/").length;
  return "../".repeat(depth);
}

await Promise.all(
  allPages.map(async (page) => {
    const dir = path.join(".", page.slug);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, "index.html"), pageHtml(page), "utf8");
  }),
);

const languageCodes = ["en", "fr", "de", "ar", "ru", "es", "pt"];

function languagePageHtml(page) {
  const prefix = relative(page.slug);
  return pageHtml(page)
    .replaceAll(`${prefix}assets`, `../${prefix}assets`)
    .replaceAll(`${prefix}styles.css`, `../${prefix}styles.css`);
}

function languageHomeHtml(html) {
  return html
    .replaceAll('href="assets/', 'href="../assets/')
    .replaceAll('src="assets/', 'src="../assets/')
    .replaceAll('content="assets/', 'content="../assets/')
    .replaceAll('href="styles.css', 'href="../styles.css');
}

const homeHtml = await fs.readFile("index.html", "utf8");

await Promise.all(
  languageCodes.flatMap((lang) => [
    (async () => {
      const dir = path.join(".", lang);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(path.join(dir, "index.html"), languageHomeHtml(homeHtml), "utf8");
    })(),
    ...allPages.map(async (page) => {
      const dir = path.join(".", lang, page.slug);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(path.join(dir, "index.html"), languagePageHtml(page), "utf8");
    }),
  ]),
);

console.log(`Generated ${allPages.length} BOORUI SEO pages and ${languageCodes.length} language route sets.`);
