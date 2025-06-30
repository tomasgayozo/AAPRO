import { useState } from "react";

export const hookState = () => {
  //contador
  /*
  const estado = useState(0); //devuelve array de 2 posiciones
  const contador = estado[0]; //valor actual del estado getter
  const setContador = estado[1]; //funcion para actualizar el estado setter
*/
  // las lineas anteriores se pueden simplificar con lo siguiente:
  //destructuring
  const [contador, setContador] = useState(0);

  function handleSuma() {
    setContador(contador + 1);
  }
  function handleResta() {
    setContador(contador - 1);
  }

  function handlReset() {
    setContador(0);
  }

  return (
    <>
      <div>
        <h2>Contador de click: {contador}</h2>
        <button onClick={handleSuma}>sumar</button>
        <button onClick={handleResta}>restar</button>
      </div>
      <div>
        <h2>Contador de click: {contador}</h2>
        <button onClick={handlReset}>reset</button>
      </div>
    </>
  );
};

{
  /*
// que es estado en React?
// es una forma de almacenar y gestionar datos que pueden cambiar
// a lo largo del tiempo en un componente.

// el estado puede cambiar haciendo click
//el usuario escriba en un input

//hooks se usan para manipular estados
//usesState
//crear una variable memoria dentro de un componente funcional
//cuando se actualiza el estado, Reat vuelve a renderizar el componente

// un evento en JS como era??
// const boton = document.querySelector('buttnon')
//boton.addEventListener('click', () => {
// console.log('clicl')
//}}
*/
}
