"use client";

import { CoolMode } from "@/components/ui/cool-mode";

export default function CoolModeDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      {/* Botón 1 - Estrellas */}
      <div className="flex flex-col items-center gap-6">
        <CoolMode options={{ particle: "⭐" }}>
          <button className="px-12 py-6 text-3xl font-black text-black bg-sgel-yellow border-4 border-black rounded-2xl [box-shadow:8px_8px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:4px_4px_0px_rgba(0,0,0,0.8)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:[box-shadow:2px_2px_0px_rgba(0,0,0,0.8)]">
            ¡EXCELENTE!
          </button>
        </CoolMode>
        <p className="text-xl font-bold text-white text-center">
          Haz clic y arrastra para ver estrellas
        </p>
      </div>

      {/* Botón 2 - Corazones */}
      <div className="flex flex-col items-center gap-6">
        <CoolMode options={{ particle: "❤️" }}>
          <button className="px-12 py-6 text-3xl font-black text-white bg-sgel-red border-4 border-black rounded-2xl [box-shadow:8px_8px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:4px_4px_0px_rgba(0,0,0,0.8)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:[box-shadow:2px_2px_0px_rgba(0,0,0,0.8)]">
            ¡ME GUSTA!
          </button>
        </CoolMode>
        <p className="text-xl font-bold text-white text-center">
          Haz clic y arrastra para ver corazones
        </p>
      </div>

      {/* Botón 3 - Fuego */}
      <div className="flex flex-col items-center gap-6">
        <CoolMode options={{ particle: "🔥" }}>
          <button className="px-12 py-6 text-3xl font-black text-black bg-sgel-green border-4 border-black rounded-2xl [box-shadow:8px_8px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:4px_4px_0px_rgba(0,0,0,0.8)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:[box-shadow:2px_2px_0px_rgba(0,0,0,0.8)]">
            ¡INCREÍBLE!
          </button>
        </CoolMode>
        <p className="text-xl font-bold text-white text-center">
          Haz clic y arrastra para ver fuego
        </p>
      </div>

      {/* Botón 4 - Libros */}
      <div className="flex flex-col items-center gap-6">
        <CoolMode options={{ particle: "📚" }}>
          <button className="px-12 py-6 text-3xl font-black text-white bg-sgel-blue border-4 border-black rounded-2xl [box-shadow:8px_8px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:4px_4px_0px_rgba(0,0,0,0.8)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:[box-shadow:2px_2px_0px_rgba(0,0,0,0.8)]">
            ¡APRENDER!
          </button>
        </CoolMode>
        <p className="text-xl font-bold text-white text-center">
          Haz clic y arrastra para ver libros
        </p>
      </div>

      {/* Botón 5 - Círculos de colores (default) */}
      <div className="flex flex-col items-center gap-6 md:col-span-2">
        <CoolMode>
          <button className="px-16 py-8 text-4xl font-black text-black bg-gradient-to-r from-sgel-yellow via-sgel-green to-sgel-blue border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:6px_6px_0px_rgba(0,0,0,0.8)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:[box-shadow:3px_3px_0px_rgba(0,0,0,0.8)]">
            ¡FANTÁSTICO!
          </button>
        </CoolMode>
        <p className="text-2xl font-black text-white text-center">
          Haz clic y arrastra para ver círculos de colores
        </p>
      </div>

      {/* Botón 6 - Trofeos */}
      <div className="flex flex-col items-center gap-6 md:col-span-2">
        <CoolMode options={{ particle: "🏆", size: 30 }}>
          <button className="px-16 py-8 text-4xl font-black text-white bg-gradient-to-r from-sgel-red to-sgel-yellow border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:6px_6px_0px_rgba(0,0,0,0.8)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:[box-shadow:3px_3px_0px_rgba(0,0,0,0.8)]">
            ¡CAMPEÓN!
          </button>
        </CoolMode>
        <p className="text-2xl font-black text-white text-center">
          Haz clic y arrastra para ver trofeos
        </p>
      </div>
    </div>
  );
}
