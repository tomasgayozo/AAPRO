import { useState } from "react";

export const Ejemplo2 = () => {
  const [mostrar, setMostrar] = useState(false);
  const toggle = () => {
    setMostrar(!mostrar);
  };
  return (
    <>
      <button onClick={toggle}>
        {mostrar ? "Ocultar" : "Mostrar"} mensaje
      </button>
      {mostrar && <p>Este es un mensaje secreto</p>}
    </>
  );
};
