const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



// Validacion de campos de fomrulario
var formulario = document.getElementById('form-contacto')
var btnDisabled = document.getElementById('btn-form');

  // Añade un evento de entrada a todos los elementos de entrada del formulario
  var inputs = formulario.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
      // Verifica si todos los campos tienen un valor
      var allFilled = true;
      inputs.forEach(function(input) {
        if (input.value.trim() === '') {
          allFilled = false;
        }
      });
      // Habilita o deshabilita el botón basado en si todos los campos están llenos
      boton.disabled = !allFilled;
    });
  });