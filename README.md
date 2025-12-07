# Au Four Enchanté

**Au Four Enchanté** es un sitio web de presentación para un emprendimiento artesanal de panadería/pastelería, con raíces argentinas y formación en Francia. El sitio presenta al cocinero, su historia, el proyecto, y una galería de productos con información detallada, ingredientes e intolerancias alimentarias.

---

## 🌐 Tecnologías utilizadas

- HTML5 + CSS3
- JavaScript (Vanilla)
- Localización multi-idioma (`es`, `en`, `fr`)
- Responsive design (mobile-first)
- Iconografía SVG
- Estructura modular y reutilizable

---

## 🌍 Localización (Idiomas)

El sitio es **multilingüe** y está disponible en:

- Español 🇪🇸
- Inglés 🇬🇧
- Francés 🇫🇷

Puedes agregar nuevos idiomas fácilmente desde `lang.js`.

---

## 📷 Imágenes e íconos

- Las imágenes del cocinero y productos se encuentran en `assets/images/`.
- Los íconos de redes sociales (Instagram, TikTok, Facebook) están en `assets/icons/`.
- Los íconos de intolerancias alimentarias también se encuentran en la carpeta `/icons`.

---

## 📱 Responsive Design

El diseño es completamente adaptable y optimizado para:

- Escritorio (Desktop)
- Tablets
- Móviles (con menú hamburguesa en < 768px)

---

## 🔄 Traducciones

Los textos del sitio se gestionan mediante `lang.js`.  
Cada entrada en el archivo `lang.js` contiene un objeto con claves para cada idioma.

Ejemplo:
```js
about: {
  title: {
    es: "Sobre mí",
    en: "About Me",
    fr: "À propos de moi"
  },
  ...
}
