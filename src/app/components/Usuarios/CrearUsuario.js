"use client"
import { FaPlus } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import Modal from '../Modal';
import { useState } from "react";
import { guardarUsuario } from "@/api.js"
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";

const CrearUsuario = () => {
    const router = useRouter();
    const [abrirModal, setAbrirModal] = useState(false);
    const [nuevoUsuarioVal, setNuevoUsuarioVal] = useState({
        id: "",
        nombre: "",
        identificador: "",
        gastoActual: "",
        pwd: "",
    });

    const handleNuevoUsuarioDataChange = (e) => {
        const {name, value} = e.target;
        setNuevoUsuarioVal({
            ...nuevoUsuarioVal,
            [name]: value
        })
    }

    const guardarNuevoUsuario = async (e) => {
        e.preventDefault();
        await guardarUsuario({
            id: uuidv4(),
            nombre: nuevoUsuarioVal.nombre,
            identificador: nuevoUsuarioVal.identificador,
            gastoActual: nuevoUsuarioVal.gastoActual,
            pwd: nuevoUsuarioVal.pwd,
        })

        setNuevoUsuarioVal({id: "", nombre: "", identificador: "", gastoActual: "", pwd: ""});
        setAbrirModal(false);
        router.refresh();
    };

    return (
        <div>
            <button onClick={() => setAbrirModal(true)} className="btn btn-success w-full text-white">
                Crear Usuario
                <FaPlus />
            </button>

            <Modal abrirModal={abrirModal} setAbrirModal={setAbrirModal}>
                <form onSubmit={guardarNuevoUsuario}>
                    <h3 className="font-bold text-lg">Nuevo Usuario</h3>
                    <div className="flex flex-col items-center gap-4">
                        <label className="input input-bordered gap-2 flex items-center w-full">
                            <FaUser  className="h-4 w-4 opacity-70"/>
                            <input type="text" name="nombre" value={nuevoUsuarioVal.nombre} onChange={handleNuevoUsuarioDataChange} placeholder="Nombre" />
                        </label>
                        <label className="input input-bordered gap-2 flex items-center w-full">
                            <FaHouseUser className="h-4 w-4 opacity-70"/>
                            <input type="text" name="identificador" value={nuevoUsuarioVal.identificador} onChange={handleNuevoUsuarioDataChange} placeholder="Identificador" />
                        </label>
                        <label className="input input-bordered gap-2 flex items-center w-full">
                            <MdAttachMoney className="h-4 w-4 opacity-70"/>
                            <input type="text" name="gastoActual" value={nuevoUsuarioVal.gastoActual} onChange={handleNuevoUsuarioDataChange} placeholder="Gasto a la fecha" />
                        </label>
                        <label className="input input-bordered gap-2 flex items-center w-full">
                            <MdOutlinePassword className="h-4 w-4 opacity-70"/>
                            <input type="password" name="pwd" value={nuevoUsuarioVal.pwd} onChange={handleNuevoUsuarioDataChange} placeholder="Contraseña" />
                        </label>
                    </div>
                    <button type="submit" className="btn my-2">
                        Guardar
                    </button>
                </form> 
            </Modal>
        </div>
    )
}

export default CrearUsuario;