import Image from "next/image";
import { bookTitle, unitTitle, unitDescription } from "@/data/unidad2";

export default function PortadaSlide() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-sgel-light">

      {/* Cuadrados de colores pequeños - UNA sola fila arriba a la derecha hasta el medio */}
      <div className="absolute top-0 right-0 w-1/2 z-20 p-4 md:p-6">
        <div className="grid grid-cols-8 md:grid-cols-12 gap-2 md:gap-3">
          {/* Generamos UNA fila de cuadrados con los 4 colores SGEL */}
          {Array.from({ length: 12 }).map((_, i) => {
            const colors = ['bg-sgel-red', 'bg-sgel-blue', 'bg-sgel-yellow', 'bg-sgel-green'];
            const colorClass = colors[i % 4];
            return (
              <div
                key={i}
                className={`aspect-square ${colorClass} rounded-sm md:rounded`}
              ></div>
            );
          })}
        </div>
      </div>

      {/* Layout principal: Grid de 2 columnas */}
      <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-[34%_66%]">

        {/* Columna IZQUIERDA - Texto */}
        <div className="relative z-10 flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-2xl flex flex-col gap-6 lg:gap-8 text-left">

            {/* Título del libro */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-sgel-red leading-tight mt-16 lg:mt-0">
              {bookTitle}
            </h1>

            {/* Título de la unidad */}
            <div className="space-y-4">
              <div className="inline-block px-6 py-3 bg-sgel-blue/10 rounded-full">
                <p className="text-sm md:text-base font-sans font-bold text-sgel-blue uppercase tracking-wide">
                  Material Interactivo
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-sgel-dark leading-snug">
                {unitTitle}
              </h2>
            </div>

            {/* Descripción */}
            <p className="text-xl md:text-2xl font-sans text-sgel-dark/70">
              {unitDescription}
            </p>

            {/* Botón o indicador de continuar */}
            <div className="flex items-start gap-4 mt-6">
              <button className="flex items-center gap-3 px-8 py-4 bg-sgel-red text-white font-sans font-bold text-lg rounded-full shadow-xl hover:bg-sgel-red/90 hover:scale-105 transition-all duration-300 cursor-pointer">
                <span>Comenzar</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Columna DERECHA - Imagen */}
        <div className="relative flex items-center justify-center p-0">
          <div className="relative w-full h-[95vh]">
            <Image
              src="/portada2.png"
              alt="Nuevos Compañeros - Portada"
              fill
              priority
              quality={100}
              unoptimized
              className="object-contain"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
