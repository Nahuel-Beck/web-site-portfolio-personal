const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



// // Validación de campos de formulario
// var formulario = document.getElementById('form-contacto');
// var btnDisabled = document.getElementById('btn-form');

// // Variable para rastrear el estado de reCAPTCHA
// var recaptchaValidated = false;

// // Selecciona todos los elementos de entrada y textarea del formulario
// var inputs = formulario.querySelectorAll('input, textarea');

// // Añade un evento de entrada a todos los elementos de entrada y textarea del formulario
// inputs.forEach(function(input) {
//   input.addEventListener('input', function() {
//     // Verifica si todos los campos tienen un valor y reCAPTCHA está validado
//     var allFilled = true;
//     inputs.forEach(function(input) {
//       if (input.value.trim() === '') {
//         allFilled = false;
//       }
//     });
//     // Habilita o deshabilita el botón basado en si todos los campos están llenos y reCAPTCHA está validado
//     btnDisabled.disabled = !(allFilled && recaptchaValidated);
//   });
// });

// // Función de callback para reCAPTCHA
// function recaptchaCallback() {
//   recaptchaValidated = true;
//   // Verifica si todos los campos están llenos para habilitar el botón
//   var allFilled = true;
//   inputs.forEach(function(input) {
//     if (input.value.trim() === '') {
//       allFilled = false;
//     }
//   });
//   btnDisabled.disabled = !(allFilled && recaptchaValidated);
// }





// Obtiene el formulario y el botón de envío
var formulario = document.getElementById('form-contacto');
var btnDisabled = document.getElementById('btn-form');

// Variable para rastrear el estado de reCAPTCHA
var recaptchaValidated = false;

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
  // Habilita o deshabilita el botón basado en si todos los campos están llenos y reCAPTCHA está validado
  btnDisabled.disabled = !(allFilled && recaptchaValidated);
}

// Añade un evento de entrada a todos los elementos de entrada y textarea del formulario
inputs.forEach(function(input) {
  input.addEventListener('input', checkFields);
});

// Función de callback para reCAPTCHA
function recaptchaCallback() {
  recaptchaValidated = true;
  checkFields();
}
