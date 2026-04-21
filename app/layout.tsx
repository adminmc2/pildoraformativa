import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-pf-display",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-pf-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Píldoras Formativas",
  description: "Material pedagógico proyectable para aulas de ELE — A1.1 adolescentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${archivoBlack.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
