"use client";

import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export default function NeonGradientCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Tarjeta 1 - Amarillo y Verde SGEL */}
      <NeonGradientCard
        borderSize={6}
        borderRadius={24}
        neonColors={{
          firstColor: "#FFEB3B",
          secondColor: "#8BC34A",
        }}
        className="w-full h-[350px]"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-5xl font-black text-black mb-4">
            ¡GRAMÁTICA!
          </h3>
          <p className="text-xl font-bold text-gray-800 text-center mb-4">
            Aprende las reglas del español
          </p>
          <div className="bg-sgel-yellow border-4 border-black rounded-xl px-6 py-3 [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
            <span className="font-black text-lg text-black">Nivel Básico</span>
          </div>
        </div>
      </NeonGradientCard>

      {/* Tarjeta 2 - Rojo y Amarillo SGEL */}
      <NeonGradientCard
        borderSize={6}
        borderRadius={24}
        neonColors={{
          firstColor: "#E53935",
          secondColor: "#FFEB3B",
        }}
        className="w-full h-[350px]"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-5xl font-black text-black mb-4">
            ¡VOCABULARIO!
          </h3>
          <p className="text-xl font-bold text-gray-800 text-center mb-4">
            Palabras nuevas cada día
          </p>
          <div className="bg-sgel-red border-4 border-black rounded-xl px-6 py-3 [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
            <span className="font-black text-lg text-white">500+ Palabras</span>
          </div>
        </div>
      </NeonGradientCard>

      {/* Tarjeta 3 - Azul y Verde SGEL */}
      <NeonGradientCard
        borderSize={6}
        borderRadius={24}
        neonColors={{
          firstColor: "#2196F3",
          secondColor: "#8BC34A",
        }}
        className="w-full h-[350px]"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-5xl font-black text-black mb-4">
            ¡LECTURA!
          </h3>
          <p className="text-xl font-bold text-gray-800 text-center mb-4">
            Historias y cuentos fascinantes
          </p>
          <div className="bg-sgel-blue border-4 border-black rounded-xl px-6 py-3 [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
            <span className="font-black text-lg text-white">30 Historias</span>
          </div>
        </div>
      </NeonGradientCard>

      {/* Tarjeta 4 - Verde y Rojo SGEL */}
      <NeonGradientCard
        borderSize={6}
        borderRadius={24}
        neonColors={{
          firstColor: "#8BC34A",
          secondColor: "#E53935",
        }}
        className="w-full h-[350px]"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-5xl font-black text-black mb-4">
            ¡EJERCICIOS!
          </h3>
          <p className="text-xl font-bold text-gray-800 text-center mb-4">
            Practica lo que has aprendido
          </p>
          <div className="bg-sgel-green border-4 border-black rounded-xl px-6 py-3 [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
            <span className="font-black text-lg text-black">100+ Actividades</span>
          </div>
        </div>
      </NeonGradientCard>
    </div>
  );
}
