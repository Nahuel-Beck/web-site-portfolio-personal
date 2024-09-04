const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




// Obtiene el formulario y el botón de envío
var formulario = document.getElementById('form-contacto');
var btnDisabled = document.getElementById('btn-form');

// Selecciona todos los elementos de entrada y textarea del formulario
var inputs = formulario.querySelectorAll('input, textarea');

// Función para verificar si todos los campos están llenos
function checkFields() {
  var allFilled = true;
  inputs.forEach(function(input) {
    if (input.value.trim() === '') {
      allFilled = false;
    }
  });
  // Habilita o deshabilita el botón basado en si todos los campos están llenos
  btnDisabled.disabled = !allFilled;
}

// Añade un evento de entrada a todos los elementos de entrada y textarea del formulario
inputs.forEach(function(input) {
  input.addEventListener('input', checkFields);
});