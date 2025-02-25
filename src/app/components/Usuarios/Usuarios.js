import Usuario from './Usuario';
const Usuarios = ({usuarios}) => {
    console.log("usuarios", usuarios)

    return (
        usuarios.length ?
        <table className="table">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Identificador</th>
                <th>Gasto a la fecha</th>
            </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => <Usuario key={usuario.id} usuario={usuario}/>)}                            
            </tbody> 
        </table> : 
        <div className="flex justify-center gap-8">
            <h1 className="text-bold text-green-600">No hay usuarios disponibles</h1> 
        </div>
    )
}

export default Usuarios;