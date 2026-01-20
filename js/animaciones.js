  document.addEventListener("DOMContentLoaded", () => {
      const toggle = document.getElementById("menu-toggle");
      const navList = document.querySelector(".nav-list");
      const navLinks = document.querySelectorAll(".nav-list a");

      // ***************************************************
      // Lógica del botón Volver Arriba (Back to Top)
      // ***************************************************
      const backToTopButton = document.getElementById("back-to-top");

      const checkScroll = () => {
        if (window.scrollY > 300) { // Mostrar después de 300px de scroll
          backToTopButton.classList.add("show-scroll");
        } else {
          backToTopButton.classList.remove("show-scroll");
        }
      };

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      window.addEventListener('scroll', checkScroll);
      // ***************************************************


      if (toggle && navList) {
        toggle.addEventListener("click", () => {
          navList.classList.toggle("show");
        });

        // Cierra el menú al hacer clic en un enlace de navegación
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            if (navList.classList.contains("show")) {
              navList.classList.remove("show");
            }
          });
        });
      }

      // ***************************************************
      // Intersection Observer para animar las secciones
      // ***************************************************
      const sections = document.querySelectorAll('.reveal-section');

      const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // 10% visible
        rootMargin: '0px'
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      sections.forEach(section => {
        observer.observe(section);
      });
      // ***************************************************
    });