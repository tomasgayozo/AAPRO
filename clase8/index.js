
/* DOM => document objet model
va a ser el documento(archivo) html

capturar elementos del DOM (HTML) los voy a trabajar en el archivo JS
 y los voy a "retornar" al html
- escuchador de eventos => los que se hacen con el mouse y los que se hacen con
el teclado

- crear elementos html e insertarlos en el documento original

*/

/*const h1El = document.querySelector("h1");
console.log(h1El);

const inputEl = document.getElementById("nombre");
const btnEl = document.getElementById("mostrarBtn");
const resultadoEl = document.getElementById("resultado");

/*cuando se le de click al boton el valor que tenian el input
se muestr dentro del div con el formato Hola ${nombre}
*/
/*
btnEl.addEventListener("click", () => {
    const nombre = inputEl.ariaValueMax;
    resultadoEl.textContent = `Hola ${nombre}, bienvenido`
});

*/

const producto = {
    nombre: "Notebook",
    descripcion: "i5 8gbram",
};

const btnEl = document.getElementById("crearCardBtn");
const contenedorEl = document.getElementById("contenedorCards");
btnEl.addEventListener("click", () => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
    `;

    contenedorEl.appendChild(card);
});