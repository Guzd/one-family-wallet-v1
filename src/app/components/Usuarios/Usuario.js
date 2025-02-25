"use client"
import { BiSolidEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import Modal from '../Modal';
import {  useState } from "react";
import { editarUsuario, eliminarUsuario } from "@/api.js"
import { useRouter } from "next/navigation";

const Usuario = ({usuario}) => {
    const router = useRouter();
    const [abrirModalEditar, setAbrirModalEditar] = useState(false);
    const [abrirModalBorrar, setAbrirModalBorrar] = useState(false);
    const [usuarioToEditar, setUsuarioToEditar] = useState(usuario)
   
    const handleNuevoUsuarioDataChange = (e) => {
        const {name, value} = e.target;
        setUsuarioToEditar({
            ...usuarioToEditar,
            [name]: value
        })
    }

    const handleEditarUsuario = async (e) => {
        e.preventDefault();
        await editarUsuario({
            id: usuario.id,
            nombre: usuarioToEditar.nombre,
            identificador: usuarioToEditar.identificador,
            gastoActual: usuarioToEditar.gastoActual,
            pwd: usuarioToEditar.pwd
        })

        console.log("Form data submitted:", usuarioToEditar);
        setAbrirModalEditar(false);
        router.refresh();
    };
    
    const handleEliminarUsuario = async (id) => {
        await eliminarUsuario(id);
        setAbrirModalBorrar(false)
        router.refresh();
    }

    return (
        <tr key={usuario.id}>
            <td className="w-full">{usuario.nombre}</td>
            <td className="w-full">{usuario.identificador}</td>
            <td className="w-full">{usuario.gastoActual}</td>
            <td className="flex gap-5">
                <BiSolidEdit onClick={() => setAbrirModalEditar(true)} cursor="pointer" className="text-blue-500" size={25}/>
                <Modal abrirModal={abrirModalEditar} setAbrirModal={setAbrirModalEditar}>
                    <form onSubmit={handleEditarUsuario}>
                        <h3 className="font-bold text-lg text-center">Editar Usuario</h3>
                        <div className="flex flex-col items-center gap-4">
                            <label className="input input-bordered gap-2 flex items-center w-full">
                                <FaUser  className="h-4 w-4 opacity-70"/>
                                <input type="text" name="nombre" value={usuarioToEditar.nombre} onChange={handleNuevoUsuarioDataChange} placeholder="Nombre" />
                            </label>
                            <label className="input input-bordered gap-2 flex items-center w-full">
                                <FaHouseUser className="h-4 w-4 opacity-70"/>
                                <input type="text" name="identificador" value={usuarioToEditar.identificador} onChange={handleNuevoUsuarioDataChange} placeholder="Identificador" />
                            </label>
                            <label className="input input-bordered gap-2 flex items-center w-full">
                                <MdAttachMoney className="h-4 w-4 opacity-70"/>
                                <input type="text" name="gastoActual" value={usuarioToEditar.gastoActual} onChange={handleNuevoUsuarioDataChange} placeholder="Gasto a la fecha" />
                            </label>
                            <label className="input input-bordered gap-2 flex items-center w-full">
                                <MdOutlinePassword className="h-4 w-4 opacity-70"/>
                            <input type="password" name="pwd" value={usuarioToEditar.pwd} onChange={handleNuevoUsuarioDataChange} placeholder="Contraseña" />
                        </label>
                        </div>
                        <button type="submit" className="btn my-2">
                            Guardar
                        </button>
                    </form> 
                </Modal>
                <FaRegTrashAlt onClick={() => setAbrirModalBorrar(true)} cursor="pointer" className="text-red-500" size={25}/>
                <Modal abrirModal={abrirModalBorrar} setAbrirModal={setAbrirModalBorrar}>
                    <h3 className="text-lg">Vas a eliminar este usuario ¿estás seguro?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleEliminarUsuario(usuario.id)}>Sí</button>
                    </div>
                </Modal>
            </td>
        </tr>
    )
}

export default Usuario;