import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuevo Compañeros - Unidad 2: El plural de nombres y adjetivos",
  description: "Material interactivo para pizarras digitales - Nuevo Compañeros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}