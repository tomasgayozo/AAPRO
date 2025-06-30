import { useState } from "react";

export const CaputrarTexto = () => {
  const [texto, setTexto] = useState("");

  const textoIngresado = (even) => {
    setTexto(even.target.value);
  };

  return (
    <>
      <h2>Ejercicio 3: Caputrar el texto de un input</h2>
      <div style={{ textAlign: "center" }}>
        <input
          type="texto"
          onChange={textoIngresado}
          placeholder="Introduce un texto"
        />
        <p>Texto ingresado:</p>
        <p>{texto}</p>
      </div>
    </>
  );
};
