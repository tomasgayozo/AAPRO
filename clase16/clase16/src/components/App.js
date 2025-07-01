//$ src/components/App.js
import { useState } from "react";
import Child from "./Child"; // Importar el componente hijo
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function App() {
  const [message, setMessage] = useState(""); // Estado en el padre
  // Función para actualizar el estado
  const handleMessage = (newMessage) => {
    setMessage(newMessage);
  };

  const [data, setData] = useState(""); //estado en el padre
  return (
    <>
      <div>
        <h1>Mensaje desde el Hijo:</h1>
        <p>{message}</p> {/* Mostrar el mensaje */}
        <Child onMessageChange={handleMessage} />{" "}
        {/* Pasar la función al hijo */}
      </div>
      <div>
        <h1>Compartir Estado entre hijos</h1>
        <ChildA onDataChange={setData} /> {/*hijo actualiza el estado */}
        <ChildB data={data} /> {/*hijo que lee el estado*/}
      </div>
    </>
  );
}
export default App;
