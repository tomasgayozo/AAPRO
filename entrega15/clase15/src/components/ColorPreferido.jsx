import { useState } from "react";

export const ColorPreferido = () => {
  const [color, setColor] = useState("");
  const colores = ["skyblue", "white", "red", "green"];

  const seleccionarColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <>
      <h2>Ejercicio 4: Seleccionar Color</h2>
      <div style={{ textAlign: "center" }}>
        <p>Seleccione un color:</p>
        <select onChange={seleccionarColor} value={color}>
          {colores.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        {/* mostrar letras de color seleccionado */}
        <div>Color seleccionado: {color}</div>
        <div
          style={{
            backgroundColor: color,
            padding: "20px",
            textAlign: "center",
          }}
        ></div>
      </div>
    </>
  );
};
