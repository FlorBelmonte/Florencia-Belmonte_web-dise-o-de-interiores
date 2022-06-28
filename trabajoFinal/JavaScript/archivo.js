
"use strict";  
// Declaro las variables de los tres elementos: del botón Enviar del formulario ("Open"), de la ventana emergente ("modal_container") y del botón Cerrar de esa ventana("Close")

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

// agrego en el evento Click la función Add para que agregue la clase "Mostrar ventana emergente"
open.addEventListener("click", () => {
    modal_container.classList.add('mostrarVentana');
});

// al evento Click del botón Close, la función Remove, elimina la clase "Mostrar Ventana emergente"

close.addEventListener("click", () => {
    modal_container.classList.remove('mostrarVentana');
});

