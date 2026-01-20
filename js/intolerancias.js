// Mapeo de íconos según intolerancia + idioma
    const intoleranceIcons = {
      es: {
        lacteos: "assets/images/2.png",
        sulfitos: "assets/images/3.png",
        huevos: "assets/images/4.png",
        frutos_secos: "assets/images/5.png",
        gluten: "assets/images/6.png"
      },
      en: {
        lacteos: "assets/images/en-2.png",
        sulfitos: "assets/images/en-3.png",
        huevos: "assets/images/en-4.png",
        frutos_secos: "assets/images/en-5.png",
        gluten: "assets/images/6.png"
      },
      fr: {
        lacteos: "assets/images/fr-2.png",
        sulfitos: "assets/images/fr-3.png",
        huevos: "assets/images/fr-4.png",
        frutos_secos: "assets/images/fr-5.png",
        gluten: "assets/images/6.png"
      }
    };

    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    const currentLang = localStorage.getItem("selectedLanguage") || "es";

    if (product) {
      const t = product.translations[currentLang] || product.translations.es;

      const videoElement = document.getElementById("product-video");
      const mediaVideoDiv = document.getElementById("media-video");
      const mediaImageDiv = document.getElementById("media-image");

      const arrowLeft = document.getElementById("arrow-left");
      const arrowRight = document.getElementById("arrow-right");

      document.getElementById("product-name").textContent = t.name || "";
      document.getElementById("product-image").src = product.image || "";
      document.getElementById("product-image").alt = t.name || "";

      if (product.video) {
        videoElement.src = product.video;
        videoElement.load();
      } else {
        mediaVideoDiv.style.display = 'none';
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';
      }

      const ingredientsList = document.getElementById("product-ingredients");
      ingredientsList.innerHTML = "";
      if (Array.isArray(t.ingredients)) {
        t.ingredients.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          ingredientsList.appendChild(li);
        });
      }

      document.getElementById("product-recipe").textContent = t.recipe || "";

      // INTOLERANCIAS
      const intolerancesDiv = document.getElementById("intolerances");
      if (Array.isArray(product.intolerances) && product.intolerances.length > 0) {
        const text = product.intolerancesText?.[currentLang] || product.intolerancesText?.es || "";
        let html = `<p class="intolerances-text">${text}</p><div class="intolerances-icons">`;
        product.intolerances.forEach(type => {
          const icon = intoleranceIcons[currentLang][type];
          if (icon) html += `<img src="${icon}" alt="${type}">`;
        });
        html += `</div>`;
        intolerancesDiv.innerHTML = html;
      }

      // Función para mostrar imagen
      function showImage() {
        mediaImageDiv.classList.add('active');
        mediaVideoDiv.classList.remove('active');
        videoElement.pause();
        videoElement.currentTime = 0;
      }

      // Función para mostrar video
      function showVideo() {
        mediaImageDiv.classList.remove('active');
        mediaVideoDiv.classList.add('active');
        videoElement.play();
      }

      // Event listeners flechas
      if (arrowLeft && arrowRight && product.video) {
        arrowLeft.addEventListener("click", showImage);
        arrowRight.addEventListener("click", showVideo);
      }

    } else {
      document.body.innerHTML = "<p style='text-align:center;'>No se encontró el producto.</p>";
    }