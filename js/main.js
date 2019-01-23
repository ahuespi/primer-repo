/* 
- Mini introduccion a JavaScript: 
  Funciones y eventos
*/

function saludar() { // <-- Operación logica
    window.alert("Hola desde JavaScript");
}

document.querySelector("h1").onclick = saludar; // <-- Evento/Comportamiento...
