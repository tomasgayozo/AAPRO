import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import APP from "./App.css";
import { SaludarUsuario } from "./Saludar";
import { Tarjeta } from "./Tarjeta";

/*function App() {
  const [count, setCount] = useState(0);

  return <h1>"Hola"</h1>;
}
*/
function App() {
  return (
    <>
      <h1>Hola</h1>
      <SaludarUsuario nombre="Pedro" edad={30} />
      <SaludarUsuario nombre="Juan" edad={10} />

      <Tarjeta titulo="Tarjeta 1">
        <p>Contenido de la tarjeta 1</p>
      </Tarjeta>

      <Tarjeta titulo="Tarjeta 2">
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
      </Tarjeta>
    </>
  );

  return <h1>"Hola"</h1>;
}

export default App;
