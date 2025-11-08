"use client";

import React, { useState } from "react";

// Layout 1: Texto Izquierda + Imagen Derecha (Sketch Style)
export function SketchLayout1() {
  return (
    <div className="min-h-screen bg-[#fefdf8] p-12 flex items-center relative overflow-hidden">
      {/* Decoración flotante */}
      <div className="absolute top-12 right-24 w-16 h-16 bg-sgel-blue border-4 border-sgel-dark rounded-lg transform rotate-12 opacity-60"></div>
      <div className="absolute bottom-24 left-12 w-12 h-12 bg-sgel-yellow border-4 border-sgel-dark rounded-full transform -rotate-6 opacity-50"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-12 relative">
        {/* Bloque de texto */}
        <div className="flex flex-col justify-center space-y-6 transform -rotate-1">
          <div className="bg-white border-[5px] border-sgel-dark rounded-3xl p-10 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
            <div className="absolute -top-4 -left-4 w-10 h-1 bg-sgel-red"></div>
            <h2 className="text-5xl font-serif font-bold text-sgel-red mb-6">
              Título Principal
            </h2>
            <p className="text-2xl text-sgel-dark/80 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenido principal de la diapositiva.
            </p>
            <ul className="text-xl text-sgel-dark/70 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-sgel-red font-bold">→</span>
                <span>Punto importante 1</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sgel-blue font-bold">→</span>
                <span>Punto importante 2</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sgel-green font-bold">→</span>
                <span>Punto importante 3</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bloque de imagen */}
        <div className="flex items-center justify-center transform rotate-2">
          <div className="bg-sgel-blue/20 border-[6px] border-sgel-dark rounded-3xl w-full aspect-square flex items-center justify-center shadow-[10px_10px_0px_0px_rgba(26,26,26,1)] relative">
            <div className="text-sgel-blue text-6xl font-bold">IMAGEN</div>
            <div className="absolute -bottom-4 -right-4 bg-sgel-red border-4 border-sgel-dark rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout 2: Título + 3 Columnas (Sketch Style)
export function SketchLayout2() {
  return (
    <div className="min-h-screen bg-white p-12 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-8 left-8 w-20 h-20 bg-sgel-yellow border-4 border-sgel-dark rounded-lg transform -rotate-6 opacity-40"></div>

      <div className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Título con estilo sketch */}
        <div className="bg-sgel-red/10 border-[5px] border-sgel-dark rounded-3xl p-8 mb-12 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transform -rotate-1 relative inline-block self-center">
          <h2 className="text-5xl font-serif font-bold text-sgel-red text-center">
            Tres Conceptos Clave
          </h2>
          {/* Subrayado decorativo */}
          <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" width="200" height="10" viewBox="0 0 200 10">
            <path d="M5 5 Q 100 2, 195 5" stroke="#d42a24" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1">
          {[
            { color: "sgel-red", title: "Concepto 1", rotation: "-rotate-2" },
            { color: "sgel-blue", title: "Concepto 2", rotation: "rotate-1" },
            { color: "sgel-yellow", title: "Concepto 3", rotation: "-rotate-1" }
          ].map((item, i) => (
            <div key={i} className={`bg-${item.color}/10 border-[5px] border-sgel-dark rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transform ${item.rotation} flex flex-col relative`}>
              <div className={`w-20 h-20 bg-${item.color} border-4 border-sgel-dark rounded-full mb-6 flex items-center justify-center absolute -top-10 left-6 shadow-lg`}>
                <span className="text-white text-3xl font-bold">{i + 1}</span>
              </div>
              <div className="mt-12">
                <h3 className={`text-3xl font-bold text-${item.color} mb-4`}>
                  {item.title}
                </h3>
                <p className="text-lg text-sgel-dark/70 leading-relaxed flex-1">
                  Explicación breve del concepto con detalles importantes para el estudiante.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout 3: Lista con Iconos (Sketch Style)
export function SketchLayout3() {
  return (
    <div className="min-h-screen bg-[#fefdf8] p-12 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-16 right-16 w-16 h-16 bg-sgel-green border-4 border-sgel-dark rounded-lg transform rotate-12 opacity-50"></div>
      <div className="absolute bottom-16 right-32 w-12 h-12 bg-sgel-red border-4 border-sgel-dark rounded-full transform -rotate-12 opacity-40"></div>

      <div className="max-w-5xl mx-auto h-full flex flex-col">
        {/* Título */}
        <div className="bg-sgel-green/20 border-[5px] border-sgel-dark rounded-3xl p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transform rotate-1 inline-block self-start">
          <h2 className="text-5xl font-serif font-bold text-sgel-green">
            Pasos del Proceso
          </h2>
        </div>

        <div className="space-y-6 flex-1">
          {[
            { color: "sgel-red", step: "Primer Paso", rotation: "-rotate-1" },
            { color: "sgel-blue", step: "Segundo Paso", rotation: "rotate-1" },
            { color: "sgel-green", step: "Tercer Paso", rotation: "-rotate-1" },
            { color: "sgel-yellow", step: "Cuarto Paso", rotation: "rotate-1" }
          ].map((item, i) => (
            <div key={i} className={`flex items-start gap-6 bg-white border-[5px] border-sgel-dark p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transform ${item.rotation} relative`}>
              <div className={`w-24 h-24 bg-${item.color} border-4 border-sgel-dark rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <span className="text-white text-4xl font-bold">{i + 1}</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-3xl font-bold text-sgel-dark mb-3">
                  {item.step}
                </h3>
                <p className="text-xl text-sgel-dark/70 leading-relaxed">
                  Descripción detallada del paso o proceso con información específica y relevante.
                </p>
              </div>
              {/* Flecha conectora */}
              {i < 3 && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <path d="M20 5 L20 30 M15 25 L20 30 L25 25" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout 4: Comparación A vs B (Sketch Style)
export function SketchLayout4() {
  return (
    <div className="min-h-screen bg-sgel-light p-12 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-12 left-1/2 w-16 h-16 bg-sgel-yellow border-4 border-sgel-dark rounded-lg transform rotate-45 opacity-60"></div>

      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="bg-white border-[5px] border-sgel-dark rounded-3xl p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] inline-block self-center">
          <h2 className="text-5xl font-serif font-bold text-sgel-dark text-center">
            Comparación
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-12 flex-1">
          {/* Opción A */}
          <div className="bg-sgel-red/10 border-[6px] border-sgel-red rounded-3xl p-10 shadow-[10px_10px_0px_0px_rgba(212,42,36,1)] transform -rotate-2 relative">
            <div className="absolute -top-6 left-8 bg-sgel-red border-4 border-sgel-dark rounded-2xl px-6 py-2">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h3 className="text-4xl font-bold text-sgel-red mb-8 mt-4">Opción A</h3>
            <ul className="space-y-4 text-xl text-sgel-dark/80">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Característica 1</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Característica 2</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Característica 3</span>
              </li>
              <li className="flex items-start gap-3 opacity-50">
                <span className="text-2xl">✗</span>
                <span>Limitación 1</span>
              </li>
            </ul>
          </div>

          {/* Opción B */}
          <div className="bg-sgel-blue/10 border-[6px] border-sgel-blue rounded-3xl p-10 shadow-[10px_10px_0px_0px_rgba(69,155,216,1)] transform rotate-2 relative">
            <div className="absolute -top-6 left-8 bg-sgel-blue border-4 border-sgel-dark rounded-2xl px-6 py-2">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <h3 className="text-4xl font-bold text-sgel-blue mb-8 mt-4">Opción B</h3>
            <ul className="space-y-4 text-xl text-sgel-dark/80">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Característica 1</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Característica 2</span>
              </li>
              <li className="flex items-start gap-3 opacity-50">
                <span className="text-2xl">✗</span>
                <span>Limitación 1</span>
              </li>
              <li className="flex items-start gap-3 opacity-50">
                <span className="text-2xl">✗</span>
                <span>Limitación 2</span>
              </li>
            </ul>
          </div>
        </div>

        {/* VS en el medio */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sgel-yellow border-4 border-sgel-dark rounded-full w-24 h-24 flex items-center justify-center shadow-xl rotate-12 z-20">
          <span className="text-sgel-dark font-bold text-3xl">VS</span>
        </div>
      </div>
    </div>
  );
}

// Layout 5: Cita Destacada (Sketch Style)
export function SketchLayout5() {
  return (
    <div className="min-h-screen bg-white p-12 flex items-center relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-24 left-24 w-20 h-20 bg-sgel-red border-4 border-sgel-dark rounded-lg transform -rotate-12 opacity-30"></div>
      <div className="absolute bottom-24 right-24 w-16 h-16 bg-sgel-blue border-4 border-sgel-dark rounded-full transform rotate-12 opacity-30"></div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-sgel-yellow/20 border-[6px] border-sgel-dark rounded-3xl p-16 shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] transform rotate-1 relative">
          {/* Comillas decorativas */}
          <div className="absolute -top-8 -left-8 bg-sgel-yellow border-4 border-sgel-dark rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg transform -rotate-12">
            <span className="text-sgel-dark text-6xl font-serif leading-none">"</span>
          </div>

          <blockquote className="text-4xl font-serif text-sgel-dark leading-relaxed relative z-10 mb-8">
            Cita importante o concepto destacado que queremos enfatizar de manera especial en esta diapositiva
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="h-1 w-16 bg-sgel-red"></div>
            <p className="text-2xl text-sgel-dark/70 font-bold">— Autor o Fuente</p>
          </div>

          {/* Elemento decorativo */}
          <div className="absolute -bottom-6 -right-6 bg-sgel-red border-4 border-sgel-dark rounded-full w-16 h-16 flex items-center justify-center transform rotate-12 shadow-lg">
            <span className="text-white text-3xl">✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout 6: Grid de Tarjetas (Sketch Style)
export function SketchLayout6() {
  return (
    <div className="min-h-screen bg-[#fefdf8] p-12 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-12 right-12 w-16 h-16 bg-sgel-green border-4 border-sgel-dark rounded-lg transform rotate-6 opacity-40"></div>

      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="bg-sgel-dark border-[5px] border-sgel-dark rounded-3xl p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(212,42,36,1)] inline-block self-center transform -rotate-1">
          <h2 className="text-5xl font-serif font-bold text-white text-center">
            Vocabulario Clave
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 flex-1">
          {[
            { word: "Palabra 1", color: "sgel-red", rotation: "rotate-2" },
            { word: "Palabra 2", color: "sgel-blue", rotation: "-rotate-1" },
            { word: "Palabra 3", color: "sgel-green", rotation: "rotate-1" },
            { word: "Palabra 4", color: "sgel-yellow", rotation: "-rotate-2" },
            { word: "Palabra 5", color: "sgel-red", rotation: "rotate-1" },
            { word: "Palabra 6", color: "sgel-blue", rotation: "-rotate-1" }
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white border-[5px] border-sgel-dark rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transform ${item.rotation} hover:scale-105 transition-transform cursor-pointer relative`}
            >
              <div className={`absolute -top-4 -right-4 w-12 h-12 bg-${item.color} border-4 border-sgel-dark rounded-full flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className={`text-3xl font-bold text-${item.color} mb-4`}>
                {item.word}
              </h3>
              <p className="text-lg text-sgel-dark/70 leading-relaxed">
                Definición o explicación del término de vocabulario con ejemplos.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout 7: Texto Centrado Grande (Sketch Style)
export function SketchLayout7() {
  return (
    <div className="min-h-screen bg-sgel-red p-12 flex items-center justify-center relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-16 left-16 w-24 h-24 border-8 border-white/30 rounded-full transform rotate-12"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 border-8 border-white/20 rounded-lg transform -rotate-12"></div>
      <div className="absolute top-1/2 right-24 w-16 h-16 border-6 border-white/25 rounded-full transform rotate-45"></div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative">
        <div className="bg-white/10 border-[6px] border-white rounded-3xl p-16 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] transform -rotate-1 backdrop-blur-sm">
          <h2 className="text-7xl font-serif font-bold text-white leading-tight mb-8">
            Concepto Impactante
          </h2>

          {/* Subrayado decorativo */}
          <svg className="mx-auto mb-8" width="300" height="20" viewBox="0 0 300 20">
            <path d="M10 10 Q 150 5, 290 10" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M10 15 Q 150 10, 290 15" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
          </svg>

          <p className="text-3xl text-white/90 leading-relaxed">
            Subtítulo o explicación complementaria que refuerza el mensaje principal de esta diapositiva
          </p>
        </div>
      </div>
    </div>
  );
}

// Layout 8: Timeline Horizontal (Sketch Style)
export function SketchLayout8() {
  return (
    <div className="min-h-screen bg-sgel-light p-12 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-12 left-12 w-16 h-16 bg-sgel-blue border-4 border-sgel-dark rounded-lg transform rotate-12 opacity-40"></div>

      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        <div className="bg-white border-[5px] border-sgel-dark rounded-3xl p-8 mb-16 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] inline-block self-center transform rotate-1">
          <h2 className="text-5xl font-serif font-bold text-sgel-dark text-center">
            Línea de Tiempo
          </h2>
        </div>

        <div className="relative">
          {/* Línea principal con estilo dibujado */}
          <svg className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2" height="20" style={{ width: '100%' }}>
            <path d="M0 10 L100% 10" stroke="#1a1a1a" strokeWidth="6" strokeDasharray="10,5" />
          </svg>

          <div className="grid grid-cols-4 gap-8 relative">
            {[
              { year: "2020", title: "Evento 1", color: "sgel-red", rotation: "-rotate-3" },
              { year: "2021", title: "Evento 2", color: "sgel-blue", rotation: "rotate-2" },
              { year: "2022", title: "Evento 3", color: "sgel-green", rotation: "-rotate-2" },
              { year: "2023", title: "Evento 4", color: "sgel-yellow", rotation: "rotate-3" }
            ].map((item, i) => (
              <div key={i} className="text-center relative z-10">
                <div className={`w-32 h-32 bg-${item.color} border-6 border-sgel-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transform ${item.rotation}`}>
                  <span className="text-white text-3xl font-bold">{item.year}</span>
                </div>
                <div className="bg-white border-[4px] border-sgel-dark rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transform -rotate-1">
                  <h3 className="text-2xl font-bold text-sgel-dark mb-2">{item.title}</h3>
                  <p className="text-base text-sgel-dark/70">
                    Descripción breve del evento importante
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout 9: Grid 2x2 (Sketch Style)
export function SketchLayout9() {
  return (
    <div className="min-h-screen bg-white p-12 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-sgel-yellow border-4 border-sgel-dark rounded-lg transform -rotate-12 opacity-40"></div>

      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="bg-sgel-blue/20 border-[5px] border-sgel-dark rounded-3xl p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] inline-block self-center transform -rotate-1">
          <h2 className="text-5xl font-serif font-bold text-sgel-blue text-center">
            Cuatro Elementos
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-10 flex-1">
          {[
            { color: "sgel-red", num: "1", rotation: "rotate-2" },
            { color: "sgel-blue", num: "2", rotation: "-rotate-1" },
            { color: "sgel-green", num: "3", rotation: "-rotate-2" },
            { color: "sgel-yellow", num: "4", rotation: "rotate-1" }
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-${item.color}/10 border-[6px] border-${item.color} rounded-3xl p-10 shadow-[10px_10px_0px_0px_rgba(26,26,26,1)] transform ${item.rotation} relative`}
            >
              <div className={`absolute -top-8 -left-8 w-20 h-20 bg-${item.color} border-4 border-sgel-dark rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg`}>
                <span className="text-white text-4xl font-bold">{item.num}</span>
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-sgel-dark mb-4">
                  Elemento {item.num}
                </h3>
                <p className="text-xl text-sgel-dark/70 leading-relaxed">
                  Descripción del elemento con información relevante y detalles importantes.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout 10: Texto + Sidebar (Sketch Style)
export function SketchLayout10() {
  return (
    <div className="min-h-screen bg-[#fefdf8] p-12 flex items-center relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-12 left-12 w-16 h-16 bg-sgel-red border-4 border-sgel-dark rounded-full transform rotate-12 opacity-40"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-6">
          <div className="bg-white border-[5px] border-sgel-dark rounded-3xl p-10 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transform -rotate-1">
            <h2 className="text-5xl font-serif font-bold text-sgel-blue mb-8">
              Contenido Principal
            </h2>
            <p className="text-2xl text-sgel-dark/80 leading-relaxed mb-6">
              Primer párrafo con información importante sobre el tema que se está
              tratando en esta diapositiva.
            </p>
            <p className="text-2xl text-sgel-dark/80 leading-relaxed">
              Segundo párrafo que complementa la información y proporciona detalles
              adicionales relevantes.
            </p>
          </div>

          <div className="bg-sgel-yellow/30 border-[4px] border-sgel-dark rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transform rotate-1 flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <p className="text-xl text-sgel-dark/80 font-semibold">
              Nota importante o concepto clave para recordar
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-sgel-blue/20 border-[5px] border-sgel-dark rounded-3xl aspect-square flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transform rotate-2 relative">
            <div className="text-sgel-blue text-4xl font-bold">IMG 1</div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-sgel-red border-4 border-sgel-dark rounded-full"></div>
          </div>
          <div className="bg-sgel-green/20 border-[5px] border-sgel-dark rounded-3xl aspect-square flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transform -rotate-2 relative">
            <div className="text-sgel-green text-4xl font-bold">IMG 2</div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-sgel-yellow border-4 border-sgel-dark rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal con navegación
export default function SketchLayoutProposals() {
  const [currentLayout, setCurrentLayout] = useState(1);

  const layouts = [
    { id: 1, name: "Texto + Imagen", component: <SketchLayout1 /> },
    { id: 2, name: "Tres Columnas", component: <SketchLayout2 /> },
    { id: 3, name: "Lista Pasos", component: <SketchLayout3 /> },
    { id: 4, name: "Comparación", component: <SketchLayout4 /> },
    { id: 5, name: "Cita Destacada", component: <SketchLayout5 /> },
    { id: 6, name: "Grid Tarjetas", component: <SketchLayout6 /> },
    { id: 7, name: "Texto Centrado", component: <SketchLayout7 /> },
    { id: 8, name: "Timeline", component: <SketchLayout8 /> },
    { id: 9, name: "Grid 2x2", component: <SketchLayout9 /> },
    { id: 10, name: "Texto + Sidebar", component: <SketchLayout10 /> }
  ];

  const currentLayoutData = layouts.find(l => l.id === currentLayout);

  return (
    <div className="relative">
      {/* Layout actual */}
      <div className="min-h-screen">
        {currentLayoutData?.component}
      </div>

      {/* Controles de navegación - estilo sketch */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white border-[5px] border-sgel-dark rounded-full shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] px-8 py-4 flex items-center gap-6">
          <button
            onClick={() => setCurrentLayout(Math.max(1, currentLayout - 1))}
            disabled={currentLayout === 1}
            className="px-6 py-3 bg-sgel-red border-4 border-sgel-dark text-white font-bold rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:transform hover:scale-105 transition-all shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
          >
            ← Anterior
          </button>

          <div className="text-center min-w-[300px]">
            <div className="text-2xl font-bold text-sgel-dark">
              Layout {currentLayout} / {layouts.length}
            </div>
            <div className="text-sm text-sgel-dark/60 font-semibold mt-1">
              {currentLayoutData?.name}
            </div>
          </div>

          <button
            onClick={() => setCurrentLayout(Math.min(layouts.length, currentLayout + 1))}
            disabled={currentLayout === layouts.length}
            className="px-6 py-3 bg-sgel-red border-4 border-sgel-dark text-white font-bold rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:transform hover:scale-105 transition-all shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
          >
            Siguiente →
          </button>
        </div>
      </div>

      {/* Selector rápido - estilo sketch */}
      <div className="fixed top-8 right-8 z-50">
        <div className="bg-white border-[5px] border-sgel-dark rounded-2xl shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] p-4 max-w-xs transform rotate-1">
          <div className="text-sm font-bold text-sgel-dark mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-sgel-red rounded-full"></span>
            Ir a Layout:
          </div>
          <div className="grid grid-cols-5 gap-2">
            {layouts.map(layout => (
              <button
                key={layout.id}
                onClick={() => setCurrentLayout(layout.id)}
                className={`
                  px-3 py-2 rounded-lg font-bold transition-all border-3
                  ${currentLayout === layout.id
                    ? 'bg-sgel-red text-white border-sgel-dark shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]'
                    : 'bg-sgel-light text-sgel-dark border-sgel-dark/30 hover:border-sgel-dark hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'
                  }
                `}
              >
                {layout.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
