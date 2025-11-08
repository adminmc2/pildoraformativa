"use client";

import { LightRays } from "@/components/ui/light-rays";

export default function LightRaysDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Tarjeta 1 - Amarillo SGEL */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-black bg-sgel-yellow [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <LightRays count={10} color="rgba(255, 235, 59, 0.4)" speed={12} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h3 className="text-4xl font-black text-black mb-4">¡Brilla!</h3>
          <p className="text-xl font-bold text-black text-center">
            Rayos de luz amarillos
          </p>
        </div>
      </div>

      {/* Tarjeta 2 - Verde SGEL */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-black bg-sgel-green [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <LightRays count={8} color="rgba(139, 195, 74, 0.4)" speed={10} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h3 className="text-4xl font-black text-black mb-4">¡Destaca!</h3>
          <p className="text-xl font-bold text-black text-center">
            Rayos de luz verdes
          </p>
        </div>
      </div>

      {/* Tarjeta 3 - Rojo SGEL */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-black bg-sgel-red [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <LightRays count={9} color="rgba(244, 67, 54, 0.3)" speed={15} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h3 className="text-4xl font-black text-white mb-4">¡Energía!</h3>
          <p className="text-xl font-bold text-white text-center">
            Rayos de luz rojos
          </p>
        </div>
      </div>

      {/* Tarjeta 4 - Azul SGEL */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-black bg-sgel-blue [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        <LightRays count={7} color="rgba(33, 150, 243, 0.4)" speed={13} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h3 className="text-4xl font-black text-white mb-4">¡Ilumina!</h3>
          <p className="text-xl font-bold text-white text-center">
            Rayos de luz azules
          </p>
        </div>
      </div>
    </div>
  );
}
