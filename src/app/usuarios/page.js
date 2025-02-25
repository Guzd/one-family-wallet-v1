import { getUsuarios } from "@/api";
import CrearUsuario from "../components/Usuarios/CrearUsuario";
import Usuarios from "../components/Usuarios/Usuarios"

export default async function UsuariosList() {
  const usuarios = await getUsuarios();

  return (
      <main className="max-w-4xl mx-auto mt-4">
        <div className='text-center my-5 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Usuarios</h1>
          <CrearUsuario />
        </div>
        <Usuarios usuarios={usuarios} />
      </main>
  );
}
