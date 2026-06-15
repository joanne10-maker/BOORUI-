const state = {
  products: JSON.parse(localStorage.getItem("booruiProducts") || "[]"),
  blogs: JSON.parse(localStorage.getItem("booruiBlogs") || "[]"),
};

const productForm = document.querySelector("#productForm");
const blogForm = document.querySelector("#blogForm");
const productPreview = document.querySelector("#productPreview");
const blogPreview = document.querySelector("#blogPreview");
const productDrafts = document.querySelector("#productDrafts");
const blogDrafts = document.querySelector("#blogDrafts");
const toast = document.querySelector("#toast");

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function lines(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formData(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function save() {
  localStorage.setItem("booruiProducts", JSON.stringify(state.products));
  localStorage.setItem("booruiBlogs", JSON.stringify(state.blogs));
  renderCounts();
  renderDrafts();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    showToast(copied ? successMessage : "复制失败，请手动选中文本复制。");
  }
}

function previewPath(path) {
  if (!path) return "../assets/products/hero-collection.jpg";
  if (/^(https?:)?\/\//.test(path) || path.startsWith("../") || path.startsWith("/")) return path;
  return `../${path}`;
}

function productFromForm() {
  const data = formData(productForm);
  return {
    id: productForm.dataset.editing || crypto.randomUUID(),
    name: data.name || "New BOORUI Smartwatch Band",
    slug: data.slug || slugify(data.name || "new-boorui-product"),
    category: data.category,
    material: data.material,
    moq: data.moq || "Confirm by quotation",
    leadTime: data.leadTime || "Confirm after sample review",
    models: data.models || "Apple Watch, Samsung, Garmin and Mi Band compatible options",
    image: data.image || "assets/products/hero-collection.jpg",
    features: lines(data.features),
    description: data.description || "Factory direct smartwatch band sourcing support for OEM/ODM and private label wholesale buyers.",
    updatedAt: new Date().toISOString(),
  };
}

function blogFromForm() {
  const data = formData(blogForm);
  return {
    id: blogForm.dataset.editing || crypto.randomUUID(),
    title: data.title || "BOORUI Smartwatch Band Sourcing Guide",
    slug: data.slug || slugify(data.title || "boorui-sourcing-guide"),
    keyword: data.keyword || "smartwatch band supplier",
    meta: data.meta || "A practical BOORUI sourcing guide for global B2B smartwatch band buyers.",
    body: data.body || "## Introduction\nWrite your article content here.",
    cta: data.cta || "Get a Quote",
    author: data.author || "Joanne Wu",
    updatedAt: new Date().toISOString(),
  };
}

function productHtml(product) {
  const features = product.features.map((item) => `<li>${item}</li>`).join("");
  return `<article class="product-card">
  <img src="${product.image}" alt="${product.name}" />
  <div>
    <span>${product.category}</span>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <ul>${features}</ul>
    <a href="#inquiry">Get a Quote</a>
  </div>
</article>`;
}

function blogMarkdown(blog) {
  return `- SEO Title: ${blog.title} | BOORUI
- Meta Description: ${blog.meta}
- URL Slug: ${blog.slug}
- H1: ${blog.title}
- Target Keywords: ${blog.keyword}
- Author: ${blog.author}

# ${blog.title}

${blog.body}

## CTA
${blog.cta}: Send BOORUI your target models, quantity, material direction and packaging needs.`;
}

function renderProductPreview() {
  const product = productFromForm();
  const features = product.features.length ? product.features : ["Custom logo available", "Private label packaging", "Sample review support"];
  productPreview.innerHTML = `
    <div class="preview-media"><img src="${previewPath(product.image)}" alt="${product.name}" onerror="this.src='../assets/products/hero-collection.jpg'" /></div>
    <div class="preview-meta">
      <span>${product.category}</span>
      <span>${product.material}</span>
      <span>MOQ: ${product.moq}</span>
    </div>
    <h3 class="preview-title">${product.name}</h3>
    <p class="preview-copy">${product.description}</p>
    <ul class="preview-list">${features.map((item) => `<li>${item}</li>`).join("")}</ul>
    <p class="preview-copy"><strong>Compatible:</strong> ${product.models}</p>
    <p class="preview-copy"><strong>Lead time:</strong> ${product.leadTime}</p>
  `;
  renderSeoScore();
}

function renderBlogPreview() {
  const blog = blogFromForm();
  blogPreview.innerHTML = `
    <header>
      <span>${blog.keyword}</span>
      <h3 class="preview-title">${blog.title}</h3>
      <p>${blog.meta}</p>
    </header>
    <div class="preview-meta">
      <span>Author: ${blog.author}</span>
      <span>Slug: ${blog.slug}</span>
      <span>${blog.cta}</span>
    </div>
    <div class="markdown-preview">${blog.body}</div>
  `;
  renderSeoScore();
}

function renderCounts() {
  document.querySelector("#productCount").textContent = state.products.length;
  document.querySelector("#blogCount").textContent = state.blogs.length;
}

function renderSeoScore() {
  const activePanel = document.querySelector(".admin-panel.active")?.dataset.panel;
  const values = activePanel === "blogs" ? blogFromForm() : productFromForm();
  const checks = Object.values(values).filter((value) => {
    if (Array.isArray(value)) return value.length > 0;
    return String(value || "").trim().length > 0;
  });
  const total = Object.keys(values).length;
  document.querySelector("#seoScore").textContent = `${Math.round((checks.length / total) * 100)}%`;
}

function draftItem(item, type) {
  const subtitle = type === "product" ? `${item.category} / ${item.material}` : item.keyword;
  return `<article class="draft-item">
    <strong>${item.name || item.title}</strong>
    <p>${subtitle}</p>
    <p>Slug: ${item.slug}</p>
    <div class="draft-actions">
      <button type="button" data-action="edit" data-type="${type}" data-id="${item.id}">编辑</button>
      <button type="button" data-action="copy" data-type="${type}" data-id="${item.id}">复制</button>
      <button type="button" data-action="delete" data-type="${type}" data-id="${item.id}">删除</button>
    </div>
  </article>`;
}

function renderDrafts() {
  productDrafts.innerHTML = state.products.length ? state.products.map((item) => draftItem(item, "product")).join("") : "<p class=\"preview-copy\">还没有新品草稿。</p>";
  blogDrafts.innerHTML = state.blogs.length ? state.blogs.map((item) => draftItem(item, "blog")).join("") : "<p class=\"preview-copy\">还没有博客草稿。</p>";
}

function fillForm(form, item) {
  Object.entries(item).forEach(([key, value]) => {
    const field = form.elements[key];
    if (!field) return;
    field.value = Array.isArray(value) ? value.join("\n") : value;
  });
  form.dataset.editing = item.id;
}

function switchPanel(panel) {
  document.querySelectorAll("[data-panel-target]").forEach((button) => {
    button.classList.toggle("active", button.dataset.panelTarget === panel);
  });
  document.querySelectorAll("[data-panel]").forEach((section) => {
    section.classList.toggle("active", section.dataset.panel === panel);
  });
  renderSeoScore();
}

document.querySelectorAll("[data-panel-target]").forEach((button) => {
  button.addEventListener("click", () => switchPanel(button.dataset.panelTarget));
});

productForm.addEventListener("input", renderProductPreview);
blogForm.addEventListener("input", renderBlogPreview);

productForm.addEventListener("reset", () => {
  delete productForm.dataset.editing;
  window.setTimeout(renderProductPreview);
});

blogForm.addEventListener("reset", () => {
  delete blogForm.dataset.editing;
  window.setTimeout(renderBlogPreview);
});

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const product = productFromForm();
  const index = state.products.findIndex((item) => item.id === product.id);
  if (index >= 0) state.products[index] = product;
  else state.products.unshift(product);
  save();
  showToast("新品草稿已保存到本地。");
});

blogForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const blog = blogFromForm();
  const index = state.blogs.findIndex((item) => item.id === blog.id);
  if (index >= 0) state.blogs[index] = blog;
  else state.blogs.unshift(blog);
  save();
  showToast("博客草稿已保存到本地。");
});

document.querySelector("#copyProductHtml").addEventListener("click", () => {
  copyText(productHtml(productFromForm()), "产品 HTML 已复制。");
});

document.querySelector("#copyBlogMarkdown").addEventListener("click", () => {
  copyText(blogMarkdown(blogFromForm()), "博客 Markdown 已复制。");
});

document.querySelector("#exportJson").addEventListener("click", () => {
  copyText(JSON.stringify(state, null, 2), "全部草稿 JSON 已复制。");
});

document.querySelector(".admin-main").addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const list = button.dataset.type === "product" ? state.products : state.blogs;
  const item = list.find((draft) => draft.id === button.dataset.id);
  if (!item) return;

  if (button.dataset.action === "edit") {
    if (button.dataset.type === "product") {
      fillForm(productForm, item);
      switchPanel("products");
      renderProductPreview();
    } else {
      fillForm(blogForm, item);
      switchPanel("blogs");
      renderBlogPreview();
    }
  }

  if (button.dataset.action === "copy") {
    copyText(button.dataset.type === "product" ? productHtml(item) : blogMarkdown(item), "内容已复制。");
  }

  if (button.dataset.action === "delete") {
    const index = list.findIndex((draft) => draft.id === item.id);
    list.splice(index, 1);
    save();
    showToast("草稿已删除。");
  }
});

renderProductPreview();
renderBlogPreview();
renderCounts();
renderDrafts();
