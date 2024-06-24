// Evento para el formulario de recetas
document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe
    alert('Receta agregada con éxito!'); // Mostrar mensaje de éxito
});

// Evento para el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe
    alert('Formulario enviado con éxito!'); // Mostrar mensaje de éxito
});

