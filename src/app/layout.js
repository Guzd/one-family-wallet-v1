import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navegador } from "./components/Navegador";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "One Family Wallet",
  description: "App de administracion de gastos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <h1 className="p-4 font-bold text-center text-3xl mr-4 text-green-600">Administrador OneFamilyWallet</h1>
      <header className="p-4 text-center">
        <Navegador />
      </header>
      {children}
      </body>
    </html>
  );
}
