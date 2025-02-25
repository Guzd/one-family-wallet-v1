"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navegador = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center p-2">
      <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "text-green-500 mr-4"}>Grupos</Link>
      <Link href="/usuarios/" className={ pathname.startsWith("/usuarios") ? "font-bold mr-4" : "text-green-500 mr-4" }>Usuarios</Link>
    </nav>
  );
};