import { useState } from "react";

export const InputControlado = () => {
  const [elinput, setInput] = useState("");

  const handleInput = (event) => setInput(event.target.value);

  return (
    <>
      <div>
        <p>Input Controlado: {elinput}</p>
        <input type="text" onChange={handleInput} />
      </div>
    </>
  );
};
