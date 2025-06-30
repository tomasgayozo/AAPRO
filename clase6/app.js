//pedir al usuario su nombre y edad utilizando prompt
//usar un condicional if-else pra verificar si el usuario es mayor o menor de edad
//mostrar un mensaje en la consola con el resultado


// Pedir al usuario su nombre y edad
/*const prompt = require('prompt-sync')();
let nombre = prompt("Introduce tu nombre:");
let edad = prompt("Introduce tu edad:");
// Convertir la edad a número
//edad = Number.parseInt(edad);
edad = Number(edad);


// Verificar si el usuario es mayor o menor de edad
if (edad >= 18) {
    console.log(`Hola ${nombre} tenes ${edad}, eres mayor de edad.`);
} else {
    console.log(`Hola ${nombre} tenes ${edad}, eres menor de edad.`);
}*/




//declarar una funcion sumarNumeros que tome unarray de numeros
//usar el metodo reduce para sumar todos los numeros en el array
//retornar la suma


/*let arraynumeros = [1,2,3,4,5,6,7,8,9,10];


let suma=0;
for (let i=0;i<arraynumeros.length;i++)
{
    suma+=arraynumeros[i];
}
console.log("La suma es: "+suma);
*/


// Declarar la función usando una arrow function


/*
const sumarNumeros = (numeros) => {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
};
// Array de ejemplo
let numeros = [1, 2, 3, 4, 5];
// Llamar a la función y mostrar el resultado
console.log(sumarNumeros(numeros));
*/


//pedir al usuario tres notas utilizando prompt
//converitr las notas en numeros y calcular el promedio
//usar un switch para determinar la calificacion
//mostrar el resultado en la consola
/*const prompt = require('prompt-sync')();
let nota1 = Number(prompt("Introduce la primera nota: "));
let nota2 = Number(prompt("Introduce la segunda nota: "));
let nota3 = Number(prompt("Introduce la tercer nota: "));


const promedio = (nota1 + nota2 + nota3 )/3;


switch (true) {
    case promedio>7:
        console.log("Aprobado: " + promedio);
        break;


    default:
        console.log("Desaprobado: " + promedio);
        break;
}


*/


/*


// Pedir al usuario su nombre y edad
const prompt = require('prompt-sync')();
let nombre = prompt("Introduce tu nombre:");
let edad = prompt("Introduce tu edad:");
// Convertir la edad a número
//edad = Number.parseInt(edad);
edad = Number(edad);




// Verificar si el usuario es mayor o menor de edad
if (edad >= 18) {
    console.log(`Hola ${nombre} tenes ${edad}, eres mayor de edad.`);
} else {
    console.log(`Hola ${nombre} tenes ${edad}, eres menor de edad.`);
}
*/




//pedir al usuario un numero utilizando prompt
//usar un bucle for para generar la tabla de multiplicar de ese numero
//mostrar la tabla en consola
//const prompt = require('prompt-sync')();


/*
// Pedir al usuario un número
let numero = Number(prompt("Introduce un número:"));
// Generar la tabla de multiplicar
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
*/




//pedir al usuario una frase utilizando prompt
//declarar una funcion contarVocales que tome una frase y cuente las vocales
//usar un bucle o metodo de array para contar las vocales
//retornar el numero de vocales


//const prompt= require('prompt-sync')();
/*
// Pedir al usuario una frase
let frase = prompt("Introduce una frase:");
// Declarar la función usando una arrow function
const contarVocales = (frase) => {
    let contador = 0;
    let vocales = "aeiouAEIOU";
    for (let letra of frase) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
};
// Llamar a la función y mostrar el resultado
console.log(`La frase tiene ${contarVocales(frase)} vocales.`);
*/


// Pedir al usuario una frase usando prompt
/*
let frase = prompt("Ingresa una frase:");


// Declarar una función contarVocales que tome una frase y cuente las vocales
function contarVocales(frase) {
  // Inicializar el contador de vocales
  let contadorVocales = 0;
  // Convertir la frase a minúsculas para hacer la comparación sin importar la mayúscula
  frase = frase.toLowerCase();
  // Usar un bucle for para recorrer la frase
  for (let i = 0; i < frase.length; i++) {
    // Verificar si el carácter actual es una vocal
    if (frase[i] === 'a' || frase[i] === 'e' || frase[i] === 'i' || frase[i] === 'o' || frase[i] === 'u') {
      // Si es una vocal, incrementar el contador
      contadorVocales++;
    }
  }
  // Retornar el número total de vocales
  return contadorVocales;
}


// Llamar a la función y mostrar el resultado
let numeroVocales = contarVocales(frase);
alert("El número de vocales en la frase es: " + numeroVocales);
*/




//arrow function con validaciones y return dinamico
//se define una funcion flecha con parametros predeterminados
//se validan los tipos de datos y valores incorrectos
//se usa el operador ternario ? para diferenciar mayor o menor de edad
//se prueban varios casos para verificar la funcion
/*
let presentarPersona = (nombre = "Desconocido", edad = 0) => {
    if (typeof nombre !== "string" || typeof edad !== "number" || edad < 0) {
        return "Error: Datos inválidos.";
    }
    return "Hola, mi nombre es " + nombre + " y " + (edad >= 18 ? "soy mayor de edad (" : "soy menor de edad (") + edad + ")"


}
console.log(presentarPersona("Juan", 25)); // Hola, mi nombre es Juan y soy mayor de edad (25 años).
console.log(presentarPersona("Ana", 16)); // Hola, mi nombre es Ana y soy menor de edad (16 años).
console.log(presentarPersona(123, "hola")); // Error: Datos inválidos.
console.log(presentarPersona()); // Hola, mi nombre es Desconocido y soy menor de edad (0 años).


*/
//se define una funcion con tres parametros (mensaje,tiempo,callback)
//se validan los parametros para evitar valores incorrectos
//se usa setTimeout para mostrar el mensaje tras el tiempo indicado
//se ejecuta una fuuncion callback si se proporciona
//se prueban diferentes tiempos y se verifica el callback

/*
let mostrarMensaje = (mensaje, tiempo, callback) => {
    if (typeof mensaje !== "string" || typeof tiempo !== "number" || tiempo <= 0) {
        console.error("Error: Parámetros inválidos.");
        return;
    }
    setTimeout(() => {
        console.log(mensaje);
        if (callback) callback();
    }, tiempo);
};
mostrarMensaje("Este mensaje aparece en 2 segundos.", 2000, () => {
    console.log("Callback ejecutado tras el mensaje.");
});
mostrarMensaje("Otro mensaje en 4 segundos.", 4000);

*/


//se define un array con nombres
//se crea un nuevo array vacio
//se usa foreach para recorrer el array original
//cada nombre se transforma a mayusculas y se almacena en el nuevo array
//se imprime el array resultante
/*
const nombres = ["Tomas","Belen","Flora","Ramiro"];
const vacio = [];

nombres.forEach(nombres => {
        vacio.push("Nombre: " + nombres.toUpperCase());
});

console.log(vacio);

*/