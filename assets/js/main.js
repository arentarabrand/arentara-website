// Load komponen HTML
function loadComponent(id, path) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

// Load semua komponen
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html");
  loadComponent("hero", "components/hero.html");
  loadComponent("footer", "components/footer.html");

  // Load preview produk
  fetch("data/products.json")
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById("product-card-container");
      products.slice(0, 3).forEach(product => {
        const card = `
          <div class="product-card">
            <img src="assets/img/products/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
        `;
        container.innerHTML += card;
      });
    });

  // Inisialisasi bahasa
  initLang();
});
