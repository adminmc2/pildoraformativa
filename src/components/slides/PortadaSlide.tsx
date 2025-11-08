import Image from "next/image";
import { bookTitle, unitTitle } from "@/data/unidad2";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function PortadaSlide() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-sgel-light">

      {/* Cuadrados de colores estilo sketch - extendidos por la parte superior */}
      <div className="absolute top-0 left-0 w-full z-20">
        {/* Grupo desde el centro hacia la derecha */}

        {/* Cuadrado 1 - Azul (centro-derecha) */}
        <div className="absolute top-6 left-[52%] w-10 h-10 bg-sgel-blue border-[3px] border-sgel-dark rounded transform rotate-12"></div>

        {/* Cuadrado 2 - Verde */}
        <div className="absolute top-3 left-[58%] w-9 h-9 bg-sgel-green border-[3px] border-sgel-dark rounded transform -rotate-8"></div>

        {/* Cuadrado 3 - Rojo */}
        <div className="absolute top-8 left-[64%] w-12 h-12 bg-sgel-red border-[3px] border-sgel-dark rounded transform rotate-6"></div>

        {/* Cuadrado 4 - Amarillo */}
        <div className="absolute top-2 left-[70%] w-11 h-11 bg-sgel-yellow border-[3px] border-sgel-dark rounded transform -rotate-4"></div>

        {/* Cuadrado 5 - Verde */}
        <div className="absolute top-10 left-[76%] w-10 h-10 bg-sgel-green border-[3px] border-sgel-dark rounded transform rotate-15"></div>

        {/* Cuadrado 6 - Azul */}
        <div className="absolute top-4 left-[82%] w-13 h-13 bg-sgel-blue border-[3px] border-sgel-dark rounded transform -rotate-10"></div>

        {/* Cuadrado 7 - Amarillo */}
        <div className="absolute top-7 left-[88%] w-12 h-12 bg-sgel-yellow border-[3px] border-sgel-dark rounded transform rotate-8"></div>

        {/* Cuadrado 8 - Rojo */}
        <div className="absolute top-2 left-[94%] w-14 h-14 bg-sgel-red border-[3px] border-sgel-dark rounded transform -rotate-6"></div>

        {/* Segunda fila - más abajo */}

        {/* Cuadrado 9 - Amarillo */}
        <div className="absolute top-16 left-[55%] w-8 h-8 bg-sgel-yellow border-[3px] border-sgel-dark rounded transform rotate-5"></div>

        {/* Cuadrado 10 - Rojo */}
        <div className="absolute top-18 left-[62%] w-10 h-10 bg-sgel-red border-[3px] border-sgel-dark rounded transform -rotate-12"></div>

        {/* Cuadrado 11 - Azul */}
        <div className="absolute top-20 left-[68%] w-9 h-9 bg-sgel-blue border-[3px] border-sgel-dark rounded transform rotate-7"></div>

        {/* Cuadrado 12 - Verde */}
        <div className="absolute top-17 left-[74%] w-11 h-11 bg-sgel-green border-[3px] border-sgel-dark rounded transform -rotate-9"></div>

        {/* Cuadrado 13 - Rojo */}
        <div className="absolute top-22 left-[80%] w-10 h-10 bg-sgel-red border-[3px] border-sgel-dark rounded transform rotate-11"></div>

        {/* Cuadrado 14 - Amarillo */}
        <div className="absolute top-19 left-[86%] w-12 h-12 bg-sgel-yellow border-[3px] border-sgel-dark rounded transform -rotate-5"></div>

        {/* Cuadrado 15 - Azul */}
        <div className="absolute top-15 left-[92%] w-9 h-9 bg-sgel-blue border-[3px] border-sgel-dark rounded transform rotate-13"></div>
      </div>

      {/* Cuadrados de colores en la parte inferior - menos cantidad */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        {/* Cuadrado inferior 1 - Amarillo */}
        <div className="absolute bottom-8 left-[3%] w-11 h-11 bg-sgel-yellow border-[3px] border-sgel-dark rounded transform -rotate-8"></div>

        {/* Cuadrado inferior 2 - Verde */}
        <div className="absolute bottom-10 left-[10%] w-9 h-9 bg-sgel-green border-[3px] border-sgel-dark rounded transform rotate-12"></div>

        {/* Cuadrado inferior 3 - Rojo */}
        <div className="absolute bottom-7 left-[17%] w-10 h-10 bg-sgel-red border-[3px] border-sgel-dark rounded transform -rotate-5"></div>

        {/* Cuadrado inferior 4 - Círculo amarillo (centro-abajo) */}
        <div className="absolute bottom-4 left-[48%] w-12 h-12 bg-sgel-yellow border-[3px] border-sgel-dark rounded-full transform rotate-3"></div>

        {/* Cuadrado inferior 5 - Azul */}
        <div className="absolute bottom-8 left-[54%] w-10 h-10 bg-sgel-blue border-[3px] border-sgel-dark rounded transform rotate-7"></div>

        {/* Cuadrado inferior 6 - Rojo */}
        <div className="absolute bottom-9 left-[60%] w-11 h-11 bg-sgel-red border-[3px] border-sgel-dark rounded transform -rotate-10"></div>
      </div>

      {/* Layout principal: Grid de 2 columnas */}
      <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-[30%_70%]">

        {/* Columna IZQUIERDA - Texto */}
        <div className="relative z-10 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="w-full flex flex-col gap-6 lg:gap-8 text-left">

            {/* Título del libro con estilo sketch */}
            <div className="relative -mt-16" style={{ width: 'fit-content' }}>
              <div
                className="absolute bg-white/90 border-[4px] border-black rounded-xl"
                style={{
                  transform: 'rotate(-1deg)',
                  boxShadow: '6px 6px 0px rgba(0,0,0,0.8)',
                  filter: 'drop-shadow(3px 3px 1px rgba(0,0,0,0.3))',
                  top: '-15px',
                  left: '-20px',
                  width: 'calc(100% + 40px)',
                  height: 'calc(100% + 30px)',
                  zIndex: 0
                }}
              />
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-sgel-red leading-tight whitespace-nowrap relative"
                style={{
                  textShadow: '4px 4px 0px rgba(0,0,0,0.15)',
                  zIndex: 1
                }}
              >
                {bookTitle}
              </h1>
            </div>

            {/* Título de la unidad con estilo sketch */}
            <div className="relative mt-20 ml-64" style={{ width: 'fit-content' }}>
              <div
                className="absolute bg-white/90 border-[4px] border-black rounded-xl"
                style={{
                  transform: 'rotate(1deg)',
                  boxShadow: '5px 5px 0px rgba(0,0,0,0.8)',
                  filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.3))',
                  top: '-15px',
                  left: '-20px',
                  width: 'calc(100% + 40px)',
                  height: 'calc(100% + 30px)',
                  zIndex: 0
                }}
              />
              <div className="relative" style={{ zIndex: 1 }}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sgel-dark leading-tight">
                  Unidad 2
                </h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal text-sgel-dark leading-tight whitespace-nowrap">
                  El plural de nombres y adjetivos
                </h3>
              </div>
            </div>

            {/* Botón o indicador de continuar */}
            <div className="flex items-center justify-end gap-4 mt-12 mr-[-19rem]">
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

            {/* Borde sketch superpuesto - Cara 1: Chica pelo rizado (fondo amarillo) */}
            <div
              className="absolute border-[4px] border-black rounded-xl bg-transparent pointer-events-none"
              style={{
                left: '52%',
                top: '24%',
                width: '23%',
                height: '34%',
                transform: 'rotate(1.5deg)',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.3))'
              }}
            />

            {/* Borde sketch superpuesto - Cara 2: Chica fondo rosa */}
            <div
              className="absolute border-[4px] border-black rounded-xl bg-transparent pointer-events-none"
              style={{
                left: '35%',
                top: '58%',
                width: '22%',
                height: '29%',
                transform: 'rotate(-1.5deg)',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.3))'
              }}
            />

            {/* Borde sketch superpuesto - Cara 3: Chico sudadera rosa (fondo azul) */}
            <div
              className="absolute border-[4px] border-black rounded-xl bg-transparent pointer-events-none"
              style={{
                left: '66%',
                top: '58%',
                width: '22%',
                height: '29%',
                transform: 'rotate(2deg)',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.3))'
              }}
            />

            {/* Borde sketch superpuesto - Cara 4: Chico con gafas (fondo rojo) */}
            <div
              className="absolute border-[4px] border-black rounded-xl bg-transparent pointer-events-none"
              style={{
                left: '75%',
                top: '13%',
                width: '25%',
                height: '30%',
                transform: 'rotate(-1deg)',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.3))'
              }}
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
