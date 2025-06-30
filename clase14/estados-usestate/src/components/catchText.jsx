import { useState } from "react";

export const CatchText = () => {
  //destructuring
  const [texto, setTexto] = useState();

  function manejarCambios(events) {
    setTexto(events.target.value);
  }

  return (
    <>
      <h2>Escribe algo aqui ↓ </h2>
      <form>
        <input
          onChange={manejarCambios}
          type="text"
          placeholder="Escribe algo"
        />
      </form>
      <p>texto actual: {texto}</p>
    </>
  );
};
