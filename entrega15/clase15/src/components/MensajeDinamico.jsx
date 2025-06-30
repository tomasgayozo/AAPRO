import { useState } from "react";

export const MensajeDinamico = () => {
  const [equipo, setEquipo] = useState("");
  const equipos = ["River Plate", "El Millo", "El Más Grande River Plate"];
  const mostrarMensaje = () => {
    setEquipo(equipos[Math.floor(Math.random() * equipos.length)]);
  };
  return (
    <>
      <h2>Ejercicio 2: Mostrar Mensaje</h2>
      <div style={{ textAlign: "center", padding: 50 }}>
        <p>El mejor equipo de Argentina es:</p>
        <button onClick={mostrarMensaje}>Mostrar</button>
        <h1>{equipo}</h1>
      </div>
    </>
  );
};
