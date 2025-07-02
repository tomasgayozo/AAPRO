
function ChildB ({data}) => {
    return (
        <div>
            <h2>Hijo B:</h2>
            <p>{data ? data : "No hay datos compartidos"}</p> {/*Mostrar el dato*/}
        </div>
    )
}