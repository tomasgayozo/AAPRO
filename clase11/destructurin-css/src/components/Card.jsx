export const Card = (usuario) => {
  const { nombre, edad, email, direccion } = usuario;
  return (
    <>
      <h3>{nombre}</h3>
      <ul>
        <li>{edad}</li>
        <li>{email}</li>
        <li>{direccion}</li>
      </ul>
    </>
  );
};
