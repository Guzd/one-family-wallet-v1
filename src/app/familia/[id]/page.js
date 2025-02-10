import { revalidatePath } from "next/cache";
import Grafica from '../../components/grafica.js';

export default async function Usuarios({params}) {
  const {id} = await params;
  const res = await fetch("https://67a839f8203008941f695c56.mockapi.io/usuarios");
  const users = await res.json();

  async function addUser(formData) {
    "use server";
    const name = formData.get("name");
    console.log(name)
    const res = await fetch(
      "https://67a839f8203008941f695c56.mockapi.io/usuarios",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre: name }),
      }
    );
    const newUser = await res.json();
    console.log(newUser);
    revalidatePath(`/familia/${id}`); // para refrescar la página
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2 className="text-2xl/7 font-bold text-green-900 sm:truncate sm:text-3xl sm:tracking-tight">Familia {id.toUpperCase()}</h2>
        <main className="flex flex-col gap-8 row-start-2 items-center">
        <form action={addUser} className="mb-4">
            <input
            type="text"
            name="name"
            required
            className="p-2 mr-2 border border-gray-300 rounded text-gray-700"
            />
            <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded items-center"
            >
            Add User
            </button>
        </form>
        <div className="grid grid-cols-4 gap-4 ">
            {users.map((user) => (
            <div
                key={user.id}
                className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
                {user.nombre}
            </div>
            ))}
        </div>

        <div>
          <Grafica data={users} />
        </div>
        </main>
    </div>
  );
}
