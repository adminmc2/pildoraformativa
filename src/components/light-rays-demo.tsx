"use client";

import { LightRays } from "@/components/ui/light-rays";

export default function LightRaysDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Tarjeta 1 - Amarillo SGEL */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-black bg-gradient-to-br from-amber-900 to-yellow-700 [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <LightRays count={12} color="rgba(255, 235, 59, 0.9)" speed={8} blur={50} length="80vh" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h3 className="text-4xl font-black text-white mb-4 drop-shadow-lg">¡Brilla!</h3>
          <p className="text-xl font-bold text-white text-center drop-shadow-lg">
            Rayos de luz amarillos
          </p>
        </div>
      </div>

      {/* Tarjeta 2 - Verde SGEL */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-black bg-gradient-to-br from-green-900 to-green-700 [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <LightRays count={10} color="rgba(139, 195, 74, 0.9)" speed={10} blur={50} length="80vh" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h3 className="text-4xl font-black text-white mb-4 drop-shadow-lg">¡Destaca!</h3>
          <p className="text-xl font-bold text-white text-center drop-shadow-lg">
            Rayos de luz verdes
          </p>
        </div>
      </div>

      {/* Tarjeta 3 - Rojo SGEL */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-black bg-gradient-to-br from-red-900 to-red-700 [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <LightRays count={11} color="rgba(244, 67, 54, 0.9)" speed={12} blur={50} length="80vh" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h3 className="text-4xl font-black text-white mb-4 drop-shadow-lg">¡Energía!</h3>
          <p className="text-xl font-bold text-white text-center drop-shadow-lg">
            Rayos de luz rojos
          </p>
        </div>
      </div>

      {/* Tarjeta 4 - Azul SGEL */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-black bg-gradient-to-br from-blue-900 to-blue-700 [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <LightRays count={9} color="rgba(33, 150, 243, 0.9)" speed={14} blur={50} length="80vh" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h3 className="text-4xl font-black text-white mb-4 drop-shadow-lg">¡Ilumina!</h3>
          <p className="text-xl font-bold text-white text-center drop-shadow-lg">
            Rayos de luz azules
          </p>
        </div>
      </div>
    </div>
  );
}
