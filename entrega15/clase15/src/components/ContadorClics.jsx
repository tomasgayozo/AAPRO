import { useState } from "react";

export const ContadorClics = () => {
  const [contador, setContador] = useState(0);

  const cuentoClics = () => {
    setContador(contador + 1);
  };

  const resetClics = () => {
    setContador(0);
  };

  return (
    <>
      <h2>Ejercicio 5: Contador de clics</h2>
      <div style={{ textAlign: "center" }}>
        <button onClick={cuentoClics}>Contar Clics</button>
        <button onClick={resetClics}>Reset</button>
        <p>Canidad de clics: {contador}</p>
      </div>
    </>
  );
};
