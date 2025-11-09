"use client";

import { ComicText } from "@/components/ui/comic-text";

export default function ComicTextDemo() {
  return (
    <div className="grid grid-cols-1 gap-16 max-w-6xl mx-auto">
      {/* Texto 1 - Amarillo SGEL */}
      <div className="relative p-12 bg-white border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <ComicText
          fontSize={6}
          style={{
            backgroundColor: "#FFEB3B",
            backgroundImage: "radial-gradient(circle at 1px 1px, #000000 1.5px, transparent 0)",
            backgroundSize: "10px 10px",
          }}
        >
          ¡BOOM!
        </ComicText>
        <p className="text-center mt-6 text-2xl font-bold text-gray-800">
          Efectos de sonido divertidos
        </p>
      </div>

      {/* Texto 2 - Rojo SGEL */}
      <div className="relative p-12 bg-white border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <ComicText
          fontSize={5}
          style={{
            backgroundColor: "#E53935",
            backgroundImage: "radial-gradient(circle at 1px 1px, #FFEB3B 1.5px, transparent 0)",
            backgroundSize: "10px 10px",
          }}
        >
          ¡POW!
        </ComicText>
        <p className="text-center mt-6 text-2xl font-bold text-gray-800">
          Acción explosiva
        </p>
      </div>

      {/* Texto 3 - Verde SGEL */}
      <div className="relative p-12 bg-white border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <ComicText
          fontSize={5.5}
          style={{
            backgroundColor: "#8BC34A",
            backgroundImage: "radial-gradient(circle at 1px 1px, #2196F3 1.5px, transparent 0)",
            backgroundSize: "10px 10px",
          }}
        >
          ¡ZAP!
        </ComicText>
        <p className="text-center mt-6 text-2xl font-bold text-gray-800">
          Energía eléctrica
        </p>
      </div>

      {/* Texto 4 - Azul SGEL */}
      <div className="relative p-12 bg-white border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <ComicText
          fontSize={5}
          style={{
            backgroundColor: "#2196F3",
            backgroundImage: "radial-gradient(circle at 1px 1px, #8BC34A 1.5px, transparent 0)",
            backgroundSize: "10px 10px",
          }}
        >
          ¡SPLASH!
        </ComicText>
        <p className="text-center mt-6 text-2xl font-bold text-gray-800">
          Chapuzón refrescante
        </p>
      </div>

      {/* Texto 5 - Combinado */}
      <div className="relative p-12 bg-gradient-to-br from-sgel-yellow to-sgel-red border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <ComicText
          fontSize={7}
          style={{
            backgroundColor: "#FFEB3B",
            backgroundImage: "radial-gradient(circle at 1px 1px, #E53935 2px, transparent 0)",
            backgroundSize: "12px 12px",
            filter: `
              drop-shadow(6px 6px 0px #000000)
              drop-shadow(4px 4px 0px #2196F3)
            `,
          }}
        >
          ¡WOW!
        </ComicText>
        <p className="text-center mt-6 text-3xl font-black text-white drop-shadow-lg">
          ¡Aprender español es genial!
        </p>
      </div>
    </div>
  );
}
