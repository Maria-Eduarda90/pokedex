import type { Metadata } from "next";
import "../global/style/globals.css";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Um sistema para listar e filtrar os pokemons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}