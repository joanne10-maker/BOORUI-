(function () {
  function normalize(value) {
    return (value || "").toString().trim().toLowerCase();
  }

  function tokenize(value) {
    return normalize(value)
      .replace(/[^a-z0-9+/#.\-\s]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
  }

  function scoreItem(item, query) {
    const normalizedQuery = normalize(query);
    const tokens = tokenize(query);
    const label = normalize(item.label);
    const type = normalize(item.type);
    const description = normalize(item.description);
    const keys = (item.keys || []).map(normalize);
    const haystack = [label, type, description, ...keys].join(" ");

    if (!normalizedQuery) return 1;

    let score = 0;
    if (label === normalizedQuery) score += 120;
    if (label.includes(normalizedQuery)) score += 70;
    if (keys.some((key) => key === normalizedQuery)) score += 90;
    if (keys.some((key) => key.includes(normalizedQuery) || normalizedQuery.includes(key))) score += 50;
    if (description.includes(normalizedQuery)) score += 25;

    tokens.forEach((token) => {
      if (label.includes(token)) score += 18;
      if (type.includes(token)) score += 10;
      if (description.includes(token)) score += 8;
      if (keys.some((key) => key.includes(token) || token.includes(key))) score += 20;
      if (haystack.includes(token)) score += 4;
    });

    return score;
  }

  function renderSearchResults() {
    const root = window.BOORUI_SITE_ROOT || "../";
    const targets = window.BOORUI_SEARCH_TARGETS || [];
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") || "";
    const input = document.querySelector("[data-search-page-input]");
    const title = document.querySelector("[data-search-query-title]");
    const meta = document.querySelector("[data-search-query-meta]");
    const list = document.querySelector("[data-search-results]");
    const empty = document.querySelector("[data-search-empty]");

    if (!list) return;
    if (input) input.value = query;
    if (title) title.textContent = query ? `Search results for "${query}"` : "Search BOORUI categories and services";

    const ranked = targets
      .map((item) => ({ ...item, score: scoreItem(item, query) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));

    const results = query ? ranked.slice(0, 12) : targets.slice(0, 12);

    if (meta) {
      meta.textContent = query
        ? `${results.length} helpful match${results.length === 1 ? "" : "es"} found. Try device category, material line, size range, packaging or buyer need.`
        : "Type a device category, material line, size range, packaging requirement or service need.";
    }

    const localizeHref = window.BOORUI_LOCALIZE_DIRECTORY_HREF || ((href) => href);

    list.innerHTML = results
      .map(
        (item) => `
          <article class="search-result-card">
            <div>
              <span>${item.type}</span>
              <h2>${item.label}</h2>
              <p>${item.description}</p>
            </div>
            <a href="${localizeHref(`${root}${item.href}`)}">Open page</a>
          </article>
        `,
      )
      .join("");

    window.BOORUI_REFRESH_LOCAL_FILE_LINKS?.();

    if (empty) {
      empty.hidden = !query || ranked.length > 0;
    }
  }

  document.addEventListener("DOMContentLoaded", renderSearchResults);
})();
