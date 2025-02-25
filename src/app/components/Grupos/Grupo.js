"use client"
import { BiSolidEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import Modal from '../Modal';
import {  useState } from "react";
import { editarGrupo, eliminarGrupo } from "@/api.js"
import { useRouter } from "next/navigation";
import Link from "next/link";

const Grupo = ({grupo}) => {
    const router = useRouter();
    const [abrirModalEditar, setAbrirModalEditar] = useState(false);
    const [abrirModalBorrar, setAbrirModalBorrar] = useState(false);
    const [grupoToEditar, setGrupoToEditar] = useState(grupo)
   
    const handleNuevoGrupoDataChange = (e) => {
        const {name, value} = e.target;
        setGrupoToEditar({
            ...grupoToEditar,
            [name]: value
        })
    }

    const handleEditarGrupo = async (e) => {
        e.preventDefault();
        await editarGrupo({
            id: grupo.id,
            nombre: grupoToEditar.nombre,
            presupuesto: grupoToEditar.presupuesto
        })

        console.log("Form data submitted:", grupoToEditar);
        setAbrirModalEditar(false);
        router.refresh();
    };
    
    const handleEliminarGrupo = async (id) => {
        await eliminarGrupo(id);
        setAbrirModalBorrar(false)
        router.refresh();
    }

    return (
        <tr key={grupo.id}>
             <td className="w-full">
                <Link href={`/familia/${grupo.id}`} key={grupo.id}>
                    {grupo.nombre}
                </Link>
            </td>
            <td className="w-full">{grupo.presupuesto}</td>
            <td className="flex gap-5">
                <BiSolidEdit onClick={() => setAbrirModalEditar(true)} cursor="pointer" className="text-blue-500" size={25}/>
                <Modal abrirModal={abrirModalEditar} setAbrirModal={setAbrirModalEditar}>
                    <form onSubmit={handleEditarGrupo}>
                        <h3 className="font-bold text-lg text-center">Editar Grupo</h3>
                        <div className="flex flex-col items-center gap-4">
                            <label className="input input-bordered gap-2 flex items-center w-full">
                                <FaUserGroup  className="h-4 w-4 opacity-70"/>
                                <input type="text" name="nombre" value={grupoToEditar.nombre} onChange={handleNuevoGrupoDataChange} placeholder="Nombre" />
                            </label>
                            <label className="input input-bordered gap-2 flex items-center w-full">
                                <MdAttachMoney className="h-4 w-4 opacity-70"/>
                                <input type="text" name="presupuesto" value={grupoToEditar.presupuesto} onChange={handleNuevoGrupoDataChange} placeholder="presupuesto" />
                            </label>
                        </div>
                        <button type="submit" className="btn my-2">
                            Guardar
                        </button>
                    </form> 
                </Modal>
                <FaRegTrashAlt onClick={() => setAbrirModalBorrar(true)} cursor="pointer" className="text-red-500" size={25}/>
                <Modal abrirModal={abrirModalBorrar} setAbrirModal={setAbrirModalBorrar}>
                    <h3 className="text-lg">Vas a eliminar este grupo ¿estás seguro?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleEliminarGrupo(grupo.id)}>Sí</button>
                    </div>
                </Modal>
            </td>
        </tr>
    )
}

export default Grupo;