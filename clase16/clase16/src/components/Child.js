//$ src/components/Child.js
import React from "react";
function Child({ onMessageChange }) {
  const sendMessage = () => {
    onMessageChange("Hola desde el Hijo!"); // Llamar a la función del padre
  };
  return (
    <div>
      <button onClick={sendMessage}>Enviar Mensaje</button>
    </div>
  );
}
export default Child;
