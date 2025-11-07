import Image from "next/image";
import { bookTitle, unitTitle, unitDescription } from "@/data/unidad2";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

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
      <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-[30%_70%]">

        {/* Columna IZQUIERDA - Texto */}
        <div className="relative z-10 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="w-full flex flex-col gap-6 lg:gap-8 text-left">

            {/* Título del libro */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-sgel-red leading-tight -mt-8 whitespace-nowrap">
              {bookTitle}
            </h1>

            {/* Título de la unidad */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-sgel-dark leading-snug whitespace-nowrap">
                {unitTitle}
              </h2>
            </div>

            {/* Botón o indicador de continuar */}
            <div className="flex items-center justify-end gap-4 mt-4 mr-[-3rem]">
              <AnimatedButton />
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

      {/* Texto debajo de la imagen */}
      <div className="absolute bottom-20 right-0 w-[30%] z-10">
        <p className="text-2xl md:text-3xl font-sans text-sgel-dark/70 text-center">
          Material interactivo complementario
        </p>
      </div>
    </div>
  );
}
