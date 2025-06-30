import "./App.css";
import { Hijo } from "./components/hijo";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");
  return (
    <>
      <div style={{ backgroundColor: color }}>
        <h2>Color actual: {color}</h2>
        <Hijo setColor={setColor} />
      </div>
    </>
  );
}

export default App;
