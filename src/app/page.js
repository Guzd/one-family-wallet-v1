import { getGrupos } from "@/api";
import CrearGrupo from "./components/Grupos/CrearGrupo";
import Grupos from "./components/Grupos/Grupos"

export default async function Home() {
  const grupos = await getGrupos();

  return (
      <main className="max-w-4xl mx-auto mt-4">
        <div className='text-center my-5 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Grupos</h1>
          <CrearGrupo />
        </div>
        <Grupos grupos={grupos} />
      </main>
  );
}
