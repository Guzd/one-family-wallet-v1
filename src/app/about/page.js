"use client";
import { useRouter } from "next/navigation"
export default function About() {
    const router = useRouter();

    return (
        <div>
            <h1>Acerca de nosotros</h1>
            <button onClick={()=> router.push("/")}>Página de inicio</button>
        </div>
    )
}