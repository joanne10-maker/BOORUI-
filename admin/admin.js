const STORAGE_KEY = "boorui_product_admin_drafts";

const form = document.querySelector("#productForm");
const preview = document.querySelector("#productPreview");
const outputText = document.querySelector("#outputText");
const toast = document.querySelector("#toast");
const draftList = document.querySelector("#productDrafts");
const productCount = document.querySelector("#productCount");
const seoScore = document.querySelector("#seoScore");

let imagePreviewUrl = "";

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function listFromText(value, separator = "\n") {
  return String(value || "")
    .split(separator)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getDrafts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveDrafts(drafts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
}

function checkedValues(name) {
  return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map((item) => item.value);
}

function formData() {
  const data = Object.fromEntries(new FormData(form).entries());
  data.slug = slugify(data.slug || data.name);
  data.colors = listFromText(data.colors, ",");
  data.features = listFromText(data.features);
  data.buyerScenarios = listFromText(data.buyerScenarios);
  data.faq = listFromText(data.faq);
  data.customization = checkedValues("customization");
  data.image = imagePreviewUrl || data.image || "../assets/products/hero-collection.jpg";
  data.updatedAt = new Date().toISOString();
  return data;
}

function productJson(data = formData()) {
  return {
    name: data.name,
    slug: data.slug,
    category: data.category,
    pageType: data.pageType,
    b2bPositioning: {
      buyerType: data.buyerType,
      buyerScenarios: data.buyerScenarios,
      supplierPosition: "Smart Watch Bands & 3C Accessories OEM/ODM Manufacturer",
    },
    product: {
      material: data.material,
      compatibleModels: data.models,
      sizeRange: data.sizeRange,
      colors: data.colors,
      image: data.image,
      summary: data.summary,
      features: data.features,
    },
    supply: {
      moq: data.moq,
      sampleTime: data.sampleTime,
      productionTime: data.productionTime,
      customization: data.customization,
      packagingOptions: data.packagingOptions,
      complianceDocuments: data.complianceDocs,
    },
    seo: {
      title: `${data.name} | BOORUI OEM/ODM Smart Watch Bands Supplier`,
      description: data.seoDescription,
      h1: `${data.name} for ${data.buyerType}`,
    },
    faq: data.faq,
    inquiry: {
      contact: "Joanne Wu",
      email: "joannexiaoxiao@gmail.com",
      whatsapp: "+86-13632456845",
      alibabaStorefront: "https://boorui.en.alibaba.com/index.html",
    },
  };
}

function productHtml(data = formData()) {
  const features = data.features.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n");
  const colors = data.colors.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  const customization = data.customization.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n");
  const scenarios = data.buyerScenarios.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n");
  const faq = data.faq
    .map(
      (item) => `<details>
          <summary>${escapeHtml(item.split(" A: ")[0] || item)}</summary>
          <p>${escapeHtml(item.includes(" A: ") ? item.split(" A: ").slice(1).join(" A: ") : item)}</p>
        </details>`,
    )
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(data.name)} | BOORUI OEM/ODM Smart Watch Bands Supplier</title>
    <meta name="description" content="${escapeHtml(data.seoDescription)}" />
  </head>
  <body>
    <main>
      <section>
        <p>${escapeHtml(data.pageType)} / ${escapeHtml(data.buyerType)}</p>
        <h1>${escapeHtml(data.name)} for ${escapeHtml(data.buyerType)}</h1>
        <img src="${escapeHtml(data.image)}" alt="${escapeHtml(data.name)} product image" />
        <p>${escapeHtml(data.summary)}</p>
      </section>

      <section>
        <h2>B2B Sourcing Information</h2>
        <table>
          <tr><th>Category</th><td>${escapeHtml(data.category)}</td></tr>
          <tr><th>Material</th><td>${escapeHtml(data.material)}</td></tr>
          <tr><th>Compatible Models</th><td>${escapeHtml(data.models)}</td></tr>
          <tr><th>Size Range</th><td>${escapeHtml(data.sizeRange)}</td></tr>
          <tr><th>MOQ</th><td>${escapeHtml(data.moq)}</td></tr>
          <tr><th>Sample Time</th><td>${escapeHtml(data.sampleTime)}</td></tr>
          <tr><th>Production Time</th><td>${escapeHtml(data.productionTime)}</td></tr>
        </table>
      </section>

      <section>
        <h2>Color Options</h2>
        <div>${colors}</div>
      </section>

      <section>
        <h2>Customization Support</h2>
        <ul>
${customization}
        </ul>
        <p>${escapeHtml(data.packagingOptions)}</p>
        <p>${escapeHtml(data.complianceDocs)}</p>
      </section>

      <section>
        <h2>Buyer Use Cases</h2>
        <ul>
${scenarios}
        </ul>
      </section>

      <section>
        <h2>Buyer Advantages</h2>
        <ul>
${features}
        </ul>
      </section>

      <section>
        <h2>FAQ</h2>
${faq}
      </section>

      <section>
        <h2>Request a Quote</h2>
        <p>Email Joanne Wu: joannexiaoxiao@gmail.com</p>
        <p>WhatsApp: +86 136 3245 6845</p>
        <p>Please share product model, quantity, target market, packaging needs and sample requirements.</p>
      </section>
    </main>
  </body>
</html>`;
}

function inquiryText(data = formData()) {
  return `Hello Joanne,

I am interested in ${data.name} for ${data.buyerType}.

Product direction: ${data.category}
Material: ${data.material}
Compatible models: ${data.models}
Estimated quantity / MOQ discussion: ${data.moq}
Customization needed: ${data.customization.join(", ") || "To be confirmed"}
Packaging needs: ${data.packagingOptions || "To be confirmed"}

Please help confirm available samples, quotation, lead time and private label options.

Thank you.`;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function updateSeoScore(data = formData()) {
  const fields = [
    "name",
    "slug",
    "pageType",
    "buyerType",
    "category",
    "material",
    "models",
    "sizeRange",
    "moq",
    "sampleTime",
    "productionTime",
    "image",
    "summary",
    "packagingOptions",
    "complianceDocs",
    "seoDescription",
  ];
  let filled = fields.filter((field) => String(data[field] || "").trim().length > 0).length;
  if (data.features.length >= 3) filled += 1;
  if (data.colors.length >= 2) filled += 1;
  if (data.customization.length >= 3) filled += 1;
  if (data.buyerScenarios.length >= 2) filled += 1;
  if (data.faq.length >= 2) filled += 1;
  const score = Math.round((filled / (fields.length + 5)) * 100);
  seoScore.textContent = `${score}%`;
}

function renderPreview() {
  const data = formData();
  const fallback = "../assets/products/hero-collection.jpg";
  const customization = data.customization
    .slice(0, 5)
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("");
  const scenarios = data.buyerScenarios
    .slice(0, 3)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  preview.innerHTML = `
    <img src="${escapeHtml(data.image || fallback)}" alt="${escapeHtml(data.name || "Product image")}" onerror="this.src='${fallback}'" />
    <div class="product-preview-body">
      <div class="b2b-preview-meta">
        <span>${escapeHtml(data.pageType || "Product Page")}</span>
        <span>${escapeHtml(data.buyerType || "Buyer Type")}</span>
      </div>
      <h3>${escapeHtml(data.name || "New Product Name")}</h3>
      <p>${escapeHtml(data.summary || "Add a clear B2B product summary for overseas buyers.")}</p>
      <div class="preview-specs">
        <div><strong>Category</strong><span>${escapeHtml(data.category || "Category")}</span></div>
        <div><strong>Material</strong><span>${escapeHtml(data.material || "Material")}</span></div>
        <div><strong>MOQ</strong><span>${escapeHtml(data.moq || "MOQ")}</span></div>
        <div><strong>Sample</strong><span>${escapeHtml(data.sampleTime || "Sample time")}</span></div>
      </div>
      <div class="preview-tags">${customization}</div>
      <div class="buyer-list">
        <strong>Buyer use cases</strong>
        <ul>${scenarios || "<li>Add buyer scenarios for better B2B clarity.</li>"}</ul>
      </div>
    </div>
  `;
  outputText.value = JSON.stringify(productJson(data), null, 2);
  updateSeoScore(data);
}

function renderDrafts() {
  const drafts = getDrafts();
  productCount.textContent = String(drafts.length);
  if (!drafts.length) {
    draftList.innerHTML = `<p class="empty-state">暂无草稿。填写产品资料后点击“保存 B2B 草稿”。</p>`;
    return;
  }
  draftList.innerHTML = drafts
    .map(
      (draft, index) => `
        <div class="draft-item">
          <div>
            <strong>${escapeHtml(draft.name)}</strong>
            <span>${escapeHtml(draft.category)} / ${escapeHtml(draft.buyerType || "B2B buyer")} / ${escapeHtml(draft.slug)}</span>
          </div>
          <button class="ghost-button small" type="button" data-load-draft="${index}">载入</button>
        </div>
      `,
    )
    .join("");
}

function setCheckboxes(name, values) {
  const selected = Array.isArray(values) ? values : [];
  form.querySelectorAll(`input[name="${name}"]`).forEach((field) => {
    field.checked = selected.includes(field.value);
  });
}

function loadDraft(index) {
  const draft = getDrafts()[index];
  if (!draft) return;
  Object.entries(draft).forEach(([key, value]) => {
    const field = form.elements[key];
    if (!field || key === "imageFile" || key === "customization") return;
    field.value = Array.isArray(value) ? value.join(key === "colors" ? ", " : "\n") : value;
  });
  setCheckboxes("customization", draft.customization);
  imagePreviewUrl = "";
  renderPreview();
  showToast("草稿已载入");
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    outputText.value = text;
    outputText.select();
    showToast("已放入输出框，请手动复制");
  }
}

function download(filename, text, type = "application/json;charset=utf-8") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

document.querySelectorAll("[data-panel-target]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-panel-target]").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`[data-panel="${button.dataset.panelTarget}"]`)?.classList.add("active");
  });
});

form.addEventListener("input", renderPreview);

form.imageFile.addEventListener("change", () => {
  const file = form.imageFile.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    imagePreviewUrl = reader.result;
    renderPreview();
  };
  reader.readAsDataURL(file);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = formData();
  const drafts = getDrafts();
  const nextDrafts = [data, ...drafts.filter((item) => item.slug !== data.slug)].slice(0, 50);
  saveDrafts(nextDrafts);
  renderDrafts();
  showToast("B2B 产品草稿已保存");
});

form.addEventListener("reset", () => {
  window.setTimeout(() => {
    imagePreviewUrl = "";
    renderPreview();
  }, 0);
});

document.querySelector("#copyJson").addEventListener("click", () => {
  copyText(JSON.stringify(productJson(), null, 2), "B2B JSON 已复制");
});

document.querySelector("#copyHtml").addEventListener("click", () => {
  copyText(productHtml(), "产品页 HTML 已复制");
});

document.querySelector("#copyInquiry").addEventListener("click", () => {
  copyText(inquiryText(), "询盘跟进文案已复制");
});

document.querySelector("#downloadJson").addEventListener("click", () => {
  const data = formData();
  download(`${data.slug || "boorui-product"}.json`, JSON.stringify(productJson(data), null, 2));
});

document.querySelector("#downloadHtml").addEventListener("click", () => {
  const data = formData();
  download(`${data.slug || "boorui-product"}.html`, productHtml(data), "text/html;charset=utf-8");
});

document.querySelector("#clearDrafts").addEventListener("click", () => {
  if (!window.confirm("确定清空所有产品草稿吗？")) return;
  saveDrafts([]);
  renderDrafts();
  showToast("草稿已清空");
});

draftList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-load-draft]");
  if (!button) return;
  loadDraft(Number(button.dataset.loadDraft));
});

renderPreview();
renderDrafts();
