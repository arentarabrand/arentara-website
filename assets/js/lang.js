async function setLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  const data = await res.json();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (data[key]) el.innerText = data[key];
  });

  localStorage.setItem("lang", lang);
}

// Tombol ganti bahasa (optional)
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-set-lang]")) {
    setLanguage(e.target.getAttribute("data-set-lang"));
  }
});
