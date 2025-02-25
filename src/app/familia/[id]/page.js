// app/familia/[id]/page.js
import { getGrupo, getUsuarios } from "@/api.js";
import Selector from "@/app/components/Selector";
import Grafica from "../../components/Grafica";

export default async function Familia({ params }) {
  const { id } =await params;  // Accede correctamente al id de los parámetros
  const grupo = await getGrupo(id);  // Obtén los detalles del grupo
  const integrantes = await getUsuarios();  // Obtén la lista de usuarios

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-2xl/7 font-bold text-green-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Familia {grupo.nombre}
      </h2>
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Selector integrantes={integrantes} grupo={grupo} />  {/* Componente de cliente */}
        <div className="grid grid-cols-4 gap-4">
          {grupo.integrantes.map((user) => (
            <div key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
              {user.nombre}
            </div>
          ))}
        </div>
        <div>
          <Grafica data={grupo.integrantes} /> {/* Pasa los datos a Grafica */}
        </div>
      </main>
    </div>
  );
}
