export const List = () => {
  const marcaDeAutos = [
    { id: 1, marca: "Toyota" },
    { id: 2, marca: "Ford" },
    { id: 3, marca: "Chevrolet" },
    { id: 4, marca: "Honda" },
    { id: 5, marca: "Nissan" },
  ];
  return (
    <>
      <h2>Marca de autos</h2>
      <ul>
        {marcaDeAutos.map((auto) => {
          return <li key={auto.id}>{auto.marca}</li>;
        })}
      </ul>
    </>
  );
};
