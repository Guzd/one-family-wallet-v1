'use client';
import { useState, useEffect } from 'react';
import {editarGrupo} from "@/api"


export default function Selector({ integrantes, grupo }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [addedUsers, setAddedUsers] = useState([]);  
 
  const handleChange = (e) => {
    const value = e.target.value;  
    setSelectedValue(value);
    console.log("selected", value); 
  };

  const handleSubmit = async (e) => {
    if (selectedValue) {
      const selectedUser = integrantes.find(user => user.id === selectedValue);
      if (selectedUser) {
        setAddedUsers([...addedUsers, selectedUser]); 

        const integrantes = grupo.integrantes || [];
        integrantes.push(selectedUser);

        await editarGrupo({
            ...grupo,
            integrantes
        })
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <div className="p-4">
        <select
          id="item-select"
          className="select select-bordered w-full max-w-xs"
          value={selectedValue}
          onChange={handleChange}
        >
          <option disabled value="">
            Selecciona un usuario
          </option>
          {integrantes.map((item, index) => (
            <option key={index} value={item.id}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white rounded btn "
      >
        añadir
      </button>
    </form>
  );
}
