let productsCache = [];

const gallery = document.getElementById("product-gallery");

function renderProducts(lang) {
  gallery.innerHTML = "";
  productsCache.forEach(product => {
    const translation = product.translations[lang] || product.translations["es"];
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${translation.name}">
      <div class="info">
        <h3>${translation.name}</h3>
        <p>${translation.shortDescription}</p>
      </div>
    `;
    card.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product.html";
    });
    gallery.appendChild(card);
  });
}

fetch("data/products.json")
  .then(response => response.json())
  .then(products => {
    productsCache = products;
    const lang = localStorage.getItem("selectedLanguage") || "es";
    renderProducts(lang);
  });
