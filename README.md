# Ángela Torres — Sitio Oficial (Rediseño Brutalista)

Este proyecto es el sitio web oficial de la cantante y actriz argentina **Ángela Torres**. Cuenta con una estética brutalista, industrial y minimalista de alto contraste (monocromática), inspirada en las últimas tendencias de diseño de vanguardia y en el sitio oficial de Lali Espósito (`lalioficial.com`).

El desarrollo está construido sobre **React + Vite** y optimizado para una navegación fluida, interactiva y totalmente responsiva.

---

## 🖤 Características de Diseño y Funcionalidad

1. **Estética Brutalista y Monocromática:**
   - Paleta de colores restringida estrictamente a negros, blancos y grises de alto contraste.
   - Tipografía sans-serif extendida de gran impacto visual (**Unbounded** para títulos y **Manrope / Syne** para navegación y contenido).
   - Video de fondo cinematográfico desaturado y de alto contraste en el Hero de entrada.

2. **Marca de Agua Interactiva (Watermark) en el Footer:**
   - La frase gigante **"ÁNGELA TORRES"** en el pie de página está rellena de forma individual letra por letra utilizando una máscara de imagen (`background-clip: text`) con **10 fotos reales** provistas por el usuario.
   - Cada letra cuenta con una micro-interacción en hover que la eleva, la agranda y la rota dinámicamente, además de saturar y dar brillo a la foto que lleva dentro.
   - Superposición de un contorno estático nítido para asegurar legibilidad en cualquier dispositivo.

3. **Collage de Biografía Fanzine ("Conocé mi Historia"):**
   - Mosaico interactivo y asimétrico de 4 fotos de Ángela, incluyendo una icónica foto con Shakira.
   - Cada carta de foto tiene inclinaciones analógicas por defecto y, al pasar el cursor (hover), la carta se endereza, se agranda, sube al frente de la pila de fotos y recupera su color saturado original.

4. **Navegación Fluida y Modular:**
   - Navegación suave entre secciones (Escuchar, Shows, Acerca, Contacto) mediante `react-scroll` con menú de barra lateral activo en el Hero y menú móvil hamburguesa fullscreen.
   - Lista de shows interactiva con timeline brutalista y badges de "Show Especial" o "Agotado".
   - Integración de reproductores oficiales de Spotify e interfaces de redes sociales monocromáticas sin romper la paleta de colores del sitio.

---

## 🛠️ Tecnologías Utilizadas

- **Core:** [React 18+](https://react.dev/) + [Vite](https://vite.dev/) (Entorno de desarrollo rápido)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) (Animaciones fluidas y gestos de hover)
- **Iconos:** [React Icons](https://react-icons.github.io/react-icons/)
- **Desplazamiento:** [React Scroll](https://www.npmjs.com/package/react-scroll)
- **Notificaciones:** [React Hot Toast](https://react-hot-toast.com/)
- **Estilos:** CSS Vanilla (Monocromático, responsive y modularizado por componente)

---

## 🚀 Instalación y Desarrollo Local

### Requisitos previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

1. **Clonar o descargar el proyecto:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd clever-kepler
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Levantar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   El servidor se iniciará en `http://localhost:5173/`.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos listos para producción se generarán en la carpeta `/dist`.

---

## 🌐 Despliegue en Vercel

Para subir el sitio a Vercel de forma rápida y gratuita, sigue estos pasos:

1. Instala la herramienta CLI de Vercel (opcional):
   ```bash
   npm install -g vercel
   vercel
   ```
2. O bien, conecta tu cuenta de GitHub a Vercel en [vercel.com](https://vercel.com/) e importa este repositorio privado con un solo click. Vercel detectará automáticamente la configuración de **Vite** y realizará la compilación de forma automatizada en cada `git push`.
