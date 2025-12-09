import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajiaco y Frijoles - Sabor Colombiano Auténtico",
  description: "Restaurante de comida típica colombiana desde 1985. Descubre nuestra historia, franquicias y el auténtico sabor de Colombia en cada plato.",
  keywords: "ajiaco, frijoles, comida colombiana, restaurante colombiano, franquicias, comida típica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
