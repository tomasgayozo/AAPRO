const frutas = ["banana", "manzana", "naranja", "uva", "kiwi"];//array de string
const numeros = [10, 58, 63, 25, 14, 44, 71]; //array de numeros
//const datos = [[],[]];// array de arrays

/*
frutas.push("Pera");//agrega un elemento al final del array
frutas.pop(); //elimina el ultimo elemento del array


//guardo el elemento que elimino en una variable y la muestro
let ultimoElemento = frutas.pop();//pera
console.log(ultimoElemento);//pera

frutas.unshift(ultimoElemento); //agrega un elemento al principio
*/


//metodos que no modifican el array original
//porque devuelven un nuevo array
//.map .filter .find .reduce .split .slice 



//el doble de un numero
/*
const doble = [];
for(let numero of numeros){
    let resultado = numero * 2;
    doble.push(numero *2);
}
console.log(doble);
*/
//lo anterior se puede hacer en una sola linea
/*
const doble = numeros.map(numero => numero * 2);
console.log(doble);
*/


const edades = [25, 40, 50, 28, 33, 37];
/*
const edadesMenoresA18 = [];
for (let edad of edades){
    edadesMenoresA18.push(edad);
}
console.log(edadesMenoresA18);
*/
//lo anterior se puede resumir en una sola linea
/*
const edadesMenoresA18 = edades.filter((edad) => edad < 18);
console.log(edadesMenoresA18);
*/

//un objeto es una abstraccion de la realidad

//defino una clase persona
/*
const persona = {
    nombre: "Tomas",
    edad: 36,
    nacionalidad: "argentino",
};
console.log(persona.nombre); //metodo getter
console.log(persona.nombre = "Tomas"); //metodo setter
*/


//traer los productos que cuesten menos de 1000
//celuar,tablet,monitor


/*
const producto = [
    { nombre: "notebook", precio: 1000, cantidad: 10},
    { nombre: "celular", precio: 500  , cantidad: 20},
    { nombre: "tablet",  precio: 300  , cantidad: 15},
    { nombre: "monitor", precio: 700  , cantidad: 5},
]
 const productoBuscado = productos.find(
(elprodu) => elprodu.nombre === "notebook");
console.log(productoBuscado)
*/


/*
const inventario = [
    { nombre: "notebook", precio: 1000, cantidad: 10},
    { nombre: "celular", precio: 500  , cantidad: 20},
    { nombre: "tablet",  precio: 300  , cantidad: 15},
    { nombre: "monitor", precio: 700  , cantidad: 5},
]
*/
/*

/*
const menores1000 = inventario.filter((producto) => producto.precio < 1000);
console.log(menores1000);

const nombresMenores100 = menores1000.map((elproduc) => elproduc.nombre);
console.log("los productos que cuestan menos de 1000 son:", nombresMenores100);
*/
//otra forma de hacer 
//const menores1000 = inventario.filter((producto) => producto.precio < 1000)
//.map((producto) => producto.nombre);
//console.log("los productos que cuestan menos de 1000 son:", menores1000);



//todo el stock general de la tienda
// 10 + 20 +15 +5 = 50
// metodo    .reduce -> suma todo y retona
/*
const stockTotal = inventario.reduce((acum , prod) => acum.prod.cantidad, 0);

// ordenar para un boton filtro
const menorAmayor = inventario.sort((produA, produB) => produA.precio-produB.precio)
console.log(menorAmayor);
*/

//buscar sobre metodos:
//.every()
//.some()
//.join()
//.split()
//.slice()
//splice()
