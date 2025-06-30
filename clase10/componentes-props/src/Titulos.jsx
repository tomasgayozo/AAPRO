//2 tipos de exportaciones

//exportaciones por default

export default function TituloPrincipal() {
  return <h1>Hola desde el componente Titulos</h1>;
}

//exportacion nombrada

export const TituloSecundario = () => {
  return <h2>Hola desde componente titulos secundario</h2>;
};
