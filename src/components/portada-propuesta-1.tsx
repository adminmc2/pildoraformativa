"use client";

import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function PortadaPropuesta3() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50">

      {/* Cuadrados decorativos - Esquinas */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Superior izquierda */}
        <div className="absolute top-6 left-6 w-16 h-16 bg-sgel-yellow border-4 border-black rounded transform rotate-12 [box-shadow:8px_8px_0px_rgba(0,0,0,0.9)]"></div>
        <div className="absolute top-20 left-24 w-12 h-12 bg-sgel-red border-4 border-black rounded transform -rotate-8 [box-shadow:6px_6px_0px_rgba(0,0,0,0.9)]"></div>

        {/* Superior derecha */}
        <div className="absolute top-8 right-8 w-14 h-14 bg-sgel-blue border-4 border-black rounded transform -rotate-10 [box-shadow:7px_7px_0px_rgba(0,0,0,0.9)]"></div>
        <div className="absolute top-24 right-24 w-10 h-10 bg-sgel-green border-4 border-black rounded transform rotate-6 [box-shadow:5px_5px_0px_rgba(0,0,0,0.9)]"></div>

        {/* Inferior izquierda */}
        <div className="absolute bottom-8 left-8 w-12 h-12 bg-sgel-green border-4 border-black rounded transform rotate-8 [box-shadow:6px_6px_0px_rgba(0,0,0,0.9)]"></div>
        <div className="absolute bottom-24 left-24 w-14 h-14 bg-sgel-yellow border-4 border-black rounded transform -rotate-6 [box-shadow:7px_7px_0px_rgba(0,0,0,0.9)]"></div>

        {/* Inferior derecha */}
        <div className="absolute bottom-12 right-12 w-16 h-16 bg-sgel-red border-4 border-black rounded transform rotate-10 [box-shadow:8px_8px_0px_rgba(0,0,0,0.9)]"></div>
        <div className="absolute bottom-32 right-28 w-11 h-11 bg-sgel-blue border-4 border-black rounded transform -rotate-7 [box-shadow:6px_6px_0px_rgba(0,0,0,0.9)]"></div>
      </div>

      {/* FOTO GRANDE - Diagonal ocupando la mayor parte */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative w-[85%] h-[85%] transform rotate-3">
          <div className="absolute inset-0 border-8 border-black rounded-3xl overflow-hidden [box-shadow:16px_16px_0px_rgba(0,0,0,0.9)]">
            <Image
              src="/portada2.png"
              alt="Nuevos Compañeros - Portada"
              fill
              priority
              quality={100}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Contenedor de texto - Esquina superior izquierda */}
      <div className="absolute top-0 left-0 z-20 p-8 lg:p-12">
        <div className="flex flex-col gap-4 max-w-md">

          {/* Título principal con estilo sketch */}
          <div className="relative">
            <div className="absolute -inset-3 bg-white border-4 border-black rounded-xl transform -rotate-2 [box-shadow:10px_10px_0px_rgba(0,0,0,0.9)]"></div>
            <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-black text-sgel-red leading-tight px-4 py-2"
                style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.15)' }}>
              Nuevos<br />Compañeros 1
            </h1>
          </div>

          {/* Subtítulo Unidad */}
          <div className="relative ml-6">
            <div className="absolute -inset-2 bg-sgel-yellow border-4 border-black rounded-lg transform rotate-1 [box-shadow:7px_7px_0px_rgba(0,0,0,0.9)]"></div>
            <h2 className="relative text-3xl md:text-4xl font-black text-black px-4 py-2">
              UNIDAD 2
            </h2>
          </div>

        </div>
      </div>

      {/* Contenedor de descripción y botón - Esquina inferior derecha */}
      <div className="absolute bottom-0 right-0 z-20 p-8 lg:p-12">
        <div className="flex flex-col gap-6 items-end max-w-lg">

          {/* Descripción */}
          <div className="relative">
            <div className="absolute -inset-3 bg-white border-4 border-black rounded-xl transform rotate-1 [box-shadow:8px_8px_0px_rgba(0,0,0,0.9)]"></div>
            <p className="relative text-2xl md:text-3xl font-bold text-gray-900 leading-snug px-6 py-3 text-right">
              El plural de nombres<br />y adjetivos
            </p>
          </div>

          {/* Botón Comenzar */}
          <div className="relative mr-4">
            <AnimatedButton />
          </div>

        </div>
      </div>

    </div>
  );
}
