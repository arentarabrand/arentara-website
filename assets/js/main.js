const components = ["header", "hero", "footer"]; // bisa tambah product-card dsb

components.forEach(async (name) => {
  const el = document.getElementById(name);
  if (el) {
    const res = await fetch(`components/${name}.html`);
    const html = await res.text();
    el.innerHTML = html;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "id";
  setLanguage(savedLang);
});
