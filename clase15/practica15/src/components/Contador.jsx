import { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);
  const handleSumar = () => setContador(contador + 1);
  const handleRestar = () => setContador(contador - 1);
  const handleReset = () => setContador(0);
  return (
    <>
      <div>
        <h3>Contador</h3>
        <p>Valor del contador: {contador}</p>
        <button onClick={handleSumar}>BotonSumar</button>
        <button onClick={handleRestar}>BotonRestar</button>
        <button onClick={handleReset}>BotonResetear</button>
      </div>
    </>
  );
};
