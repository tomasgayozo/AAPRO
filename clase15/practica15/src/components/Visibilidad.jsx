import { useState } from "react";

export const Visibilidad = () => {
  const [estado, setEstado] = useState(true);
  const handleEstado = () => setEstado(!estado);

  return (
    <>
      <div>Estado: {estado ? null : "SI"}</div>
      <div>{estado && "SI"}</div>
      <button onClick={handleEstado}>{estado ? "Mostrar" : "Ocultar"}</button>
    </>
  );
};
