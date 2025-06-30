import "./App.css";
import { CambiarFondo } from "./components/CambiarFondo";
import { CaputrarTexto } from "./components/CapturarTexto.jsx";
import { ColorPreferido } from "./components/ColorPreferido.jsx";
import { ContadorClics } from "./components/ContadorClics.jsx";
import { MensajeDinamico } from "./components/MensajeDinamico.jsx";

function App() {
  return (
    <>
      <CambiarFondo />
      <MensajeDinamico />
      <CaputrarTexto />
      <ColorPreferido />
      <ContadorClics />
    </>
  );
}

export default App;
