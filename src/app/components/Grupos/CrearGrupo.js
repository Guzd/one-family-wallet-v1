"use client"
import { FaPlus } from 'react-icons/fa';
import { FaUserGroup } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import Modal from '../Modal';
import { useState } from "react";
import { guardarGrupo } from "@/api.js"
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";

const CrearGrupo = () => {
    const router = useRouter();
    const [abrirModal, setAbrirModal] = useState(false);
    const [nuevoGrupoVal, setNuevoGrupoVal] = useState({
        id: "",
        nombre: "",
        presupuesto: ""
    });

    const handleNuevoGrupoDataChange = (e) => {
        const {name, value} = e.target;
        setNuevoGrupoVal({
            ...nuevoGrupoVal,
            [name]: value
        })
    }

    const guardarNuevoGrupo = async (e) => {
        e.preventDefault();
        await guardarGrupo({
            id: uuidv4(),
            nombre: nuevoGrupoVal.nombre,
            presupuesto: nuevoGrupoVal.presupuesto,
            integrantes: []
        })

        console.log("Form data submitted:", nuevoGrupoVal);
        setNuevoGrupoVal({id: "", nombre: "", presupuesto: ""});
        setAbrirModal(false);
        router.refresh();
    };

    return (
        <div>
            <button onClick={() => setAbrirModal(true)} className="btn btn-success w-full text-white">
                Crear grupo
                <FaPlus />
            </button>

            <Modal abrirModal={abrirModal} setAbrirModal={setAbrirModal}>
                <form onSubmit={guardarNuevoGrupo}>
                    <h3 className="font-bold text-lg">Nuevo Grupo</h3>
                    <div className="flex flex-col items-center gap-4">
                        <label className="input input-bordered gap-2 flex items-center w-full">
                            <FaUserGroup  className="h-4 w-4 opacity-70"/>
                            <input type="text" name="nombre" value={nuevoGrupoVal.nombre} onChange={handleNuevoGrupoDataChange} placeholder="Nombre" />
                        </label>
                        <label className="input input-bordered gap-2 flex items-center w-full">
                            <MdAttachMoney className="h-4 w-4 opacity-70"/>
                            <input type="text" name="presupuesto" value={nuevoGrupoVal.presupuesto} onChange={handleNuevoGrupoDataChange} placeholder="presupuesto" />
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

export default CrearGrupo;