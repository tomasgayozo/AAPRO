export const SaludarUsuario = (props) => {
  return <h2>Hola {props.nombre}</h2>;
  {
    props.edad >= 18 ? <h3>Podes pasar</h3> : <p>No podes pasar</p>;
  }
};
