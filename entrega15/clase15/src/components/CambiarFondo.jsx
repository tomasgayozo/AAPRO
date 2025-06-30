import { useState } from "react";

export const CambiarFondo = () => {
  const [color, setColor] = useState("Red");

  const colores = ["blue", "yellow", "brown", "green", "orange", "grey"];

  const cambiarFondoColor = () => {
    setColor(colores[Math.floor(Math.random() * colores.length)]);
  };

  return (
    <>
      <h2>Ejercicio 1: Cambiar color de fondo</h2>
      <h3 style={{ textAlign: "center" }}>{color}</h3>
      <div
        style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}
      >
        <button onClick={cambiarFondoColor}>Cambiar Color</button>
      </div>
    </>
  );
};
