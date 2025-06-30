import "./App.css";
import { Card } from "./components/Card";
import { List } from "./components/List";
import datosUsuario from "./data/datosUsuario";

function App() {
  export const Card2 = () => {
    return (
      <>
        {/*<Card usuario={datosUsuario} />*/}

        <h1 className="header">Hola</h1>
        <List />
        <Card2 />
      </>
    );
  };
}

export default App;
