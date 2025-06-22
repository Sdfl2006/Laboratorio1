document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los formularios de la página
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Recolecta los datos del formulario
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        // Si hay varios campos con el mismo nombre (ej: checkboxes), los agrupa en array
        if (data[key]) {
          if (!Array.isArray(data[key])) data[key] = [data[key]];
          data[key].push(value);
        } else {
          data[key] = value;
        }
      });

      try {
        // Envía la petición POST
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Error en la petición');

        const json = await response.json();

        // Guarda el JSON en localStorage (clave única por formulario)
        const key = 'form_' + (form.getAttribute('id') || form.getAttribute('name') || Math.random());
        localStorage.setItem(key, JSON.stringify(json));

        // Opcional: muestra mensaje de éxito
        alert('¡Formulario enviado y guardado en localStorage!');
      } catch (err) {
        alert('Error al enviar el formulario');
      }
    });
  });
});