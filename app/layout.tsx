import type { Metadata } from "next";
import { Archivo_Black, Inter, Space_Grotesk } from "next/font/google";
import "@fontsource/opendyslexic/400.css";
import "@fontsource/opendyslexic/700.css";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-landing",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Píldoras Formativas",
  description: "Material pedagógico proyectable para aulas de ELE — A1.1 adolescentes",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${archivoBlack.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
