# Ángela Torres — Sitio Oficial

Este proyecto es el sitio web oficial de la cantante y actriz argentina **Ángela Torres**. Presenta una experiencia web interactiva, responsiva y de alto impacto visual, diseñada para la difusión de su música, fechas de giras y contacto directo para contrataciones.

El desarrollo está construido sobre **React + Vite** y optimizado para ofrecer una navegación fluida y moderna.

---

## 🖤 Características de Diseño y Funcionalidad

1. **Estética Brutalista y Minimalista:**
   - Paleta de colores en escala de grises y de alto contraste (monocromática), que otorga un look moderno y sofisticado.
   - Tipografía de gran impacto visual (**Unbounded** para títulos principales y **Manrope / Syne** para cuerpo de texto y navegación).
   - Video cinematográfico integrado en la sección principal de presentación.

2. **Marca de Agua Interactiva (Watermark) en el Footer:**
   - La tipografía gigante **"ÁNGELA TORRES"** en el pie de página utiliza enmascaramiento de imágenes (`background-clip: text`) para rellenar las letras con fotografías del artista.
   - Cada letra reacciona al cursor del usuario con animaciones de zoom, rotación y brillo para una experiencia interactiva fluida.
   - Contorno de apoyo de alta definición para asegurar una perfecta legibilidad.

3. **Collage Interactivo en la Biografía ("Conocé mi Historia"):**
   - Mosaico asimétrico de fotografías oficiales del artista que componen un layout de tipo editorial.
   - Animación de cartas que responden al hover del usuario, elevándose, enderezándose y cobrando color de forma interactiva.

4. **Secciones de Contenido Modular:**
   - **Escuchar:** Integración oficial de lanzamientos en Spotify y plataformas digitales.
   - **Shows:** Fechas de la gira con estados interactivos ("Entradas" y "Agotado") y timeline visual.
   - **Contacto y Newsletter:** Formularios integrados para consultas de prensa, contrataciones y suscripción.

---

## 🛠️ Tecnologías Utilizadas

- **Core:** [React 18+](https://react.dev/) + [Vite](https://vite.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconos:** [React Icons](https://react-icons.github.io/react-icons/)
- **Navegación:** [React Scroll](https://www.npmjs.com/package/react-scroll)
- **Notificaciones:** [React Hot Toast](https://react-hot-toast.com/)
- **Estilos:** CSS Vanilla (responsivo y modular)

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
   Los archivos compilados listos para producción se generarán en la carpeta `/dist`.

---

## 🌐 Despliegue en Vercel

Para subir el sitio a Vercel, puedes conectar tu cuenta de GitHub a Vercel en [vercel.com](https://vercel.com/) e importar este repositorio. Vercel detectará la configuración de **Vite** de forma automática y desplegará el proyecto de forma automática en cada actualización.
