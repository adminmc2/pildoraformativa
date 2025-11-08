'use client';

import { useState } from 'react';
import Image from "next/image";
import { bookTitle, unitTitle } from "@/data/unidad2";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

type Point = { x: number; y: number };

export default function GridHelperPage() {
  const [points, setPoints] = useState<Point[]>([]);
  const [boxes, setBoxes] = useState<Array<Point[]>>([]);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newPoint = { x: Math.round(x), y: Math.round(y) };
    const newPoints = [...points, newPoint];

    setPoints(newPoints);

    // Si ya tenemos 4 puntos, crear el box automáticamente
    if (newPoints.length === 4) {
      setBoxes([...boxes, newPoints]);
      setPoints([]);
    }
  };

  const clearAll = () => {
    setPoints([]);
    setBoxes([]);
  };

  const undoLastPoint = () => {
    if (points.length > 0) {
      setPoints(points.slice(0, -1));
    } else if (boxes.length > 0) {
      const lastBox = boxes[boxes.length - 1];
      setBoxes(boxes.slice(0, -1));
      setPoints(lastBox);
    }
  };

  const copyCoordinates = () => {
    const allBoxes = [...boxes];
    if (points.length > 0) {
      allBoxes.push(points);
    }

    const coords = allBoxes.map((box, idx) => {
      return `Box ${idx + 1}:\n${box.map((p, i) => `  Punto ${i + 1}: ${p.x}% horizontal, ${p.y}% vertical`).join('\n')}`;
    }).join('\n\n');

    navigator.clipboard.writeText(coords);
    alert('Coordenadas copiadas al portapapeles');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-sgel-light">

      {/* Cuadrados de colores estilo sketch - extendidos por la parte superior */}
      <div className="absolute top-0 left-0 w-full z-20">
        {/* Cuadrado 1 - Azul */}
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

      {/* Cuadrados de colores en la parte inferior */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        {/* Cuadrado inferior 1 - Amarillo */}
        <div className="absolute bottom-8 left-[3%] w-11 h-11 bg-sgel-yellow border-[3px] border-sgel-dark rounded transform -rotate-8"></div>
        {/* Cuadrado inferior 2 - Verde */}
        <div className="absolute bottom-10 left-[10%] w-9 h-9 bg-sgel-green border-[3px] border-sgel-dark rounded transform rotate-12"></div>
        {/* Cuadrado inferior 3 - Rojo */}
        <div className="absolute bottom-7 left-[17%] w-10 h-10 bg-sgel-red border-[3px] border-sgel-dark rounded transform -rotate-5"></div>
        {/* Cuadrado inferior 4 - Círculo amarillo */}
        <div className="absolute bottom-4 left-[48%] w-12 h-12 bg-sgel-yellow border-[3px] border-sgel-dark rounded-full transform rotate-3"></div>
        {/* Cuadrado inferior 5 - Azul */}
        <div className="absolute bottom-8 left-[54%] w-10 h-10 bg-sgel-blue border-[3px] border-sgel-dark rounded transform rotate-7"></div>
        {/* Cuadrado inferior 6 - Rojo */}
        <div className="absolute bottom-9 left-[60%] w-11 h-11 bg-sgel-red border-[3px] border-sgel-dark rounded transform -rotate-10"></div>
      </div>

      {/* Panel de control */}
      <div className="absolute bottom-4 left-4 z-50 bg-white p-4 rounded-lg shadow-lg border-2 border-black max-w-xs">
        <h2 className="font-bold text-lg mb-3">Sistema de Marcado</h2>
        <p className="text-sm mb-2">Haz clic en 4 puntos para cada cara:</p>
        <p className="text-xs text-gray-600 mb-4">1. Superior izquierdo<br/>2. Superior derecho<br/>3. Inferior izquierdo<br/>4. Inferior derecho</p>

        <div className="space-y-2">
          <div className="text-sm">
            <strong>Puntos actuales:</strong> {points.length}/4
          </div>
          <div className="text-sm">
            <strong>Cajas completadas:</strong> {boxes.length}
          </div>

          <div className="flex gap-2 mt-3">
            <button
              onClick={undoLastPoint}
              className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
              disabled={points.length === 0 && boxes.length === 0}
            >
              Deshacer
            </button>
            <button
              onClick={clearAll}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
            >
              Limpiar todo
            </button>
            <button
              onClick={copyCoordinates}
              className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              disabled={boxes.length === 0 && points.length === 0}
            >
              Copiar coords
            </button>
          </div>
        </div>

        {/* Mostrar coordenadas en tiempo real */}
        <div className="mt-4 max-h-60 overflow-y-auto">
          {boxes.map((box, boxIdx) => (
            <div key={boxIdx} className="mb-3 p-2 bg-green-50 rounded border border-green-300">
              <strong className="text-green-800">Cara {boxIdx + 1}:</strong>
              {box.map((point, idx) => (
                <div key={idx} className="text-xs text-green-700">
                  P{idx + 1}: {point.x}h, {point.y}v
                </div>
              ))}
            </div>
          ))}
          {points.length > 0 && (
            <div className="p-2 bg-blue-50 rounded border border-blue-300">
              <strong className="text-blue-800">Actual:</strong>
              {points.map((point, idx) => (
                <div key={idx} className="text-xs text-blue-700">
                  P{idx + 1}: {point.x}h, {point.y}v
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Layout principal */}
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

        {/* Columna DERECHA - Imagen CLICKEABLE */}
        <div className="relative flex items-center justify-center p-0">
          <div
            className="relative w-full h-[95vh] cursor-crosshair"
            onClick={handleImageClick}
          >
            <Image
              src="/portada2.png"
              alt="Nuevos Compañeros - Portada"
              fill
              priority
              quality={100}
              unoptimized
              className="object-contain pointer-events-none"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />

            {/* Mostrar puntos marcados */}
            {points.map((point, idx) => (
              <div
                key={idx}
                className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 z-30"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                }}
              >
                <span className="absolute top-4 left-4 text-white text-xs font-bold bg-blue-600 px-1 rounded">
                  {idx + 1}
                </span>
              </div>
            ))}

            {/* Mostrar cajas completadas */}
            {boxes.map((box, boxIdx) => {
              if (box.length === 4) {
                const left = Math.min(box[0].x, box[1].x, box[2].x, box[3].x);
                const top = Math.min(box[0].y, box[1].y, box[2].y, box[3].y);
                const width = Math.max(box[0].x, box[1].x, box[2].x, box[3].x) - left;
                const height = Math.max(box[0].y, box[1].y, box[2].y, box[3].y) - top;

                return (
                  <div
                    key={boxIdx}
                    className="absolute border-4 border-green-500 bg-green-500/10 rounded-lg z-20"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      width: `${width}%`,
                      height: `${height}%`,
                    }}
                  >
                    <span className="absolute top-1 left-1 text-green-700 text-sm font-bold bg-white px-2 rounded">
                      Cara {boxIdx + 1}
                    </span>
                  </div>
                );
              }
              return null;
            })}

            {/* Mostrar caja actual en progreso */}
            {points.length >= 2 && (
              <div
                className="absolute border-2 border-dashed border-blue-500 bg-blue-500/10 rounded-lg z-20"
                style={{
                  left: `${Math.min(...points.map(p => p.x))}%`,
                  top: `${Math.min(...points.map(p => p.y))}%`,
                  width: `${Math.max(...points.map(p => p.x)) - Math.min(...points.map(p => p.x))}%`,
                  height: `${Math.max(...points.map(p => p.y)) - Math.min(...points.map(p => p.y))}%`,
                }}
              />
            )}
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
