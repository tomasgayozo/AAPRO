function ChildA({ onDataChange }) {
  const sendData = () => {
    onDataChange("Dato compartido desde el Hijo A"); //Enviar dato al padre
  };

  return (
    <div>
      <button onClick={sendData}>Enviar Dato al Padre</button>
    </div>
  );
}

export default ChildA;
