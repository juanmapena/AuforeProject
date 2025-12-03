// Carga dinámica de productos desde JSON
const gallery = document.getElementById("product-gallery");

fetch("data/products.json")
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="info">
          <h3>${product.name}</h3>
          <p>${product.shortDescription}</p>
        </div>
      `;
      card.addEventListener("click", () => {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "product.html";
      });
      gallery.appendChild(card);
    });
  });
