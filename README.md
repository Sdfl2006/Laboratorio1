# Mi Revista Digital

Este proyecto es una revista digital deportiva desarrollada como parte del Laboratorio 1. Incluye noticias, galería, formularios y configuración de usuario, todo con una interfaz moderna y responsive.

---

## Tecnologías utilizadas

- **HTML5** y **CSS3** (con variables y estilos personalizados)
- **Bootstrap 5** (navbar, grid, cards, modals, alerts, etc.)
- **JavaScript** (fetch API, localStorage)
- **Google Fonts** (Roboto, Playfair Display)

---

## Funcionalidades principales

- **Navbar Bootstrap:**  
  El menú de navegación utiliza el componente navbar de Bootstrap, adaptado a la identidad visual del proyecto.

- **Sistema de grillas Bootstrap:**  
  Las secciones principales (galerías, formularios, etc.) usan el sistema de grillas de Bootstrap para asegurar un diseño responsive y ordenado.

- **Componentes Bootstrap adicionales:**  
  Se emplean cards para artículos, modals para información adicional y alerts para mensajes al usuario.

- **Formularios con fetch API:**  
  Todos los formularios envían sus datos mediante una petición POST a `https://jsonplaceholder.typicode.com/posts` usando fetch API.  
  La respuesta JSON de cada envío exitoso se almacena automáticamente en el localStorage del navegador.

- **Estilos personalizados:**  
  Los colores, fuentes y sombras están definidos en [`shared/css/vars.css`](shared/css/vars.css) para mantener la coherencia visual y la marca.

---

## Estructura del proyecto

```
/assets
    /audio y videos
    /icons
    /img
/shared
    /css
        styles.css
        vars.css
    shared.js
/views
    /contact
        contacto.html
        contact.css
    /config
        configuración.html
        configuracion.css
index.html
```

---

## Cómo probar el proyecto

1. **Clona o descarga** este repositorio.
2. Abre `index.html` en tu navegador.
3. Navega entre las secciones usando el navbar.
4. Prueba los formularios en las vistas de contacto y configuración:
    - Al enviar, los datos se envían por POST y la respuesta se guarda en localStorage.
5. Explora los componentes Bootstrap (cards, modals, alerts) y verifica el diseño responsive en diferentes dispositivos.

>[!TIP]
>Si quieres ver el proyecto desplegado, ingresa en el navegador este link: https://mirevista.netlify.app/

---

## Personalización de estilos

- Todos los colores y fuentes principales están definidos en [`shared/css/vars.css`](shared/css/vars.css).
- Puedes modificar estos valores para adaptar la identidad visual a tus preferencias.

---

## Créditos

Desarrollado por Santiago De Freitas  

---

## Notas

- El backend de pruebas para los formularios es [JSONPlaceholder](https://jsonplaceholder.typicode.com/), por lo que los datos no se almacenan realmente en un servidor, solo en tu navegador.
- Si tienes problemas con el envío de formularios, asegúrate de que JavaScript esté habilitado en tu navegador.
