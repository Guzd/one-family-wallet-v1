import { FaPlus } from 'react-icons/fa'
import Grupo from './Grupo';
const Grupos = ({grupos}) => {
    console.log("grupos", grupos)

    return (
        grupos.length ?
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Nombre</th>
                <th>presupuesto</th>
            </tr>
            </thead>
            <tbody>
                {grupos.map(grupo => <Grupo key={grupo.id} grupo={grupo}/>)}                            
            </tbody> 
        </table> : 
        <div className="flex justify-center gap-8">
            <h1 className="text-bold text-green-600">No hay grupos disponibles</h1> 
        </div>
    )
}

export default Grupos;