export const Tarjeta = (props) => {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <div>{props.children}</div>
    </div>
  );
};
