let currentLang = localStorage.getItem("lang") || "en";

function setLang(langCode) {
  currentLang = langCode;
  localStorage.setItem("lang", langCode);
  applyLang();
}

async function applyLang() {
  try {
    const res = await fetch(`../lang/${currentLang}.json`);
    const langData = await res.json();

    document.querySelectorAll("[data-lang]").forEach(el => {
      const key = el.getAttribute("data-lang");
      if (langData[key]) el.innerText = langData[key];
    });
  } catch (err) {
    console.error("Error loading language file:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang();
});
