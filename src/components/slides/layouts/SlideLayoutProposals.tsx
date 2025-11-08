"use client";

import React, { useState } from "react";
import Image from "next/image";

// Layout 1: Texto Izquierda + Imagen Derecha
export function Layout1() {
  return (
    <div className="min-h-screen bg-sgel-light p-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-5xl font-serif font-bold text-sgel-red">
            Título de la Diapositiva
          </h2>
          <p className="text-2xl text-sgel-dark/80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="text-xl text-sgel-dark/70 space-y-3 list-disc list-inside">
            <li>Punto importante 1</li>
            <li>Punto importante 2</li>
            <li>Punto importante 3</li>
          </ul>
        </div>
        <div className="bg-sgel-blue/20 rounded-lg flex items-center justify-center">
          <div className="text-sgel-blue text-6xl font-bold">IMAGEN</div>
        </div>
      </div>
    </div>
  );
}

// Layout 2: Imagen Izquierda + Texto Derecha
export function Layout2() {
  return (
    <div className="min-h-screen bg-white p-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-12">
        <div className="bg-sgel-green/20 rounded-lg flex items-center justify-center">
          <div className="text-sgel-green text-6xl font-bold">IMAGEN</div>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-5xl font-serif font-bold text-sgel-green">
            Concepto Principal
          </h2>
          <p className="text-2xl text-sgel-dark/80 leading-relaxed">
            Descripción detallada del concepto que se está explicando en esta
            diapositiva con información relevante.
          </p>
        </div>
      </div>
    </div>
  );
}

// Layout 3: Título Arriba + 3 Columnas
export function Layout3() {
  return (
    <div className="min-h-screen bg-sgel-light p-12">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <h2 className="text-5xl font-serif font-bold text-sgel-red mb-12 text-center">
          Tres Conceptos Clave
        </h2>
        <div className="grid grid-cols-3 gap-8 flex-1">
          {[
            { color: "sgel-red", title: "Concepto 1" },
            { color: "sgel-blue", title: "Concepto 2" },
            { color: "sgel-yellow", title: "Concepto 3" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-8 shadow-lg flex flex-col">
              <div className={`w-16 h-16 bg-${item.color} rounded-full mb-6`}></div>
              <h3 className={`text-3xl font-bold text-${item.color} mb-4`}>
                {item.title}
              </h3>
              <p className="text-lg text-sgel-dark/70 leading-relaxed flex-1">
                Explicación breve del concepto con detalles importantes para el estudiante.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout 4: Título Central + Grid 2x2
export function Layout4() {
  return (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <h2 className="text-5xl font-serif font-bold text-sgel-blue mb-12 text-center">
          Cuatro Elementos
        </h2>
        <div className="grid grid-cols-2 gap-8 flex-1">
          {[
            { color: "sgel-red", num: "1" },
            { color: "sgel-blue", num: "2" },
            { color: "sgel-green", num: "3" },
            { color: "sgel-yellow", num: "4" }
          ].map((item, i) => (
            <div key={i} className={`bg-${item.color}/10 rounded-lg p-8 border-4 border-${item.color}`}>
              <div className={`text-6xl font-bold text-${item.color} mb-4`}>{item.num}</div>
              <h3 className="text-2xl font-bold text-sgel-dark mb-3">
                Elemento {item.num}
              </h3>
              <p className="text-lg text-sgel-dark/70">
                Descripción del elemento con información relevante.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout 5: Texto Centrado Grande
export function Layout5() {
  return (
    <div className="min-h-screen bg-sgel-red p-12 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-7xl font-serif font-bold text-white leading-tight">
          Frase o Concepto Impactante
        </h2>
        <p className="text-3xl text-white/90 leading-relaxed">
          Subtítulo o explicación complementaria que refuerza el mensaje principal
        </p>
      </div>
    </div>
  );
}

// Layout 6: Imagen Grande con Texto Superpuesto
export function Layout6() {
  return (
    <div className="min-h-screen bg-sgel-dark relative">
      <div className="absolute inset-0 bg-sgel-blue/30 flex items-center justify-center">
        <div className="text-sgel-blue text-8xl font-bold opacity-20">IMAGEN</div>
      </div>
      <div className="relative z-10 min-h-screen flex items-end p-12">
        <div className="bg-white/95 rounded-lg p-12 max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-sgel-red mb-4">
            Título sobre Imagen
          </h2>
          <p className="text-xl text-sgel-dark/80 leading-relaxed">
            Texto descriptivo que acompaña la imagen de fondo y proporciona contexto
            adicional sobre el tema.
          </p>
        </div>
      </div>
    </div>
  );
}

// Layout 7: Lista con Iconos
export function Layout7() {
  return (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        <h2 className="text-5xl font-serif font-bold text-sgel-green mb-12">
          Pasos o Procesos
        </h2>
        <div className="space-y-6 flex-1">
          {[
            { color: "sgel-red", step: "Paso 1" },
            { color: "sgel-blue", step: "Paso 2" },
            { color: "sgel-green", step: "Paso 3" },
            { color: "sgel-yellow", step: "Paso 4" }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6 bg-sgel-light p-6 rounded-lg">
              <div className={`w-20 h-20 bg-${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-3xl font-bold">{i + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-sgel-dark mb-2">
                  {item.step}
                </h3>
                <p className="text-lg text-sgel-dark/70 leading-relaxed">
                  Descripción detallada del paso o proceso con información específica.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout 8: Comparación A vs B
export function Layout8() {
  return (
    <div className="min-h-screen bg-sgel-light p-12">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <h2 className="text-5xl font-serif font-bold text-sgel-dark mb-12 text-center">
          Comparación
        </h2>
        <div className="grid grid-cols-2 gap-12 flex-1">
          <div className="bg-sgel-red/10 rounded-lg p-10 border-l-8 border-sgel-red">
            <h3 className="text-4xl font-bold text-sgel-red mb-6">Opción A</h3>
            <ul className="space-y-4 text-xl text-sgel-dark/80">
              <li>✓ Característica 1</li>
              <li>✓ Característica 2</li>
              <li>✓ Característica 3</li>
              <li>✗ Limitación 1</li>
            </ul>
          </div>
          <div className="bg-sgel-blue/10 rounded-lg p-10 border-l-8 border-sgel-blue">
            <h3 className="text-4xl font-bold text-sgel-blue mb-6">Opción B</h3>
            <ul className="space-y-4 text-xl text-sgel-dark/80">
              <li>✓ Característica 1</li>
              <li>✓ Característica 2</li>
              <li>✗ Limitación 1</li>
              <li>✗ Limitación 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout 9: Cita o Destacado
export function Layout9() {
  return (
    <div className="min-h-screen bg-white p-12 flex items-center">
      <div className="max-w-5xl mx-auto">
        <div className="bg-sgel-yellow/20 rounded-2xl p-16 border-l-8 border-sgel-yellow relative">
          <div className="text-sgel-yellow text-9xl font-serif absolute top-8 left-12 opacity-30">"</div>
          <blockquote className="text-4xl font-serif text-sgel-dark leading-relaxed relative z-10 pl-12">
            Cita importante o concepto destacado que queremos enfatizar de manera especial
          </blockquote>
          <p className="text-2xl text-sgel-dark/60 mt-8 pl-12">— Autor o Fuente</p>
        </div>
      </div>
    </div>
  );
}

// Layout 10: Timeline Horizontal
export function Layout10() {
  return (
    <div className="min-h-screen bg-sgel-light p-12">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        <h2 className="text-5xl font-serif font-bold text-sgel-dark mb-16 text-center">
          Línea de Tiempo
        </h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-sgel-red transform -translate-y-1/2"></div>
          <div className="grid grid-cols-4 gap-8 relative">
            {[
              { year: "2020", title: "Evento 1", color: "sgel-red" },
              { year: "2021", title: "Evento 2", color: "sgel-blue" },
              { year: "2022", title: "Evento 3", color: "sgel-green" },
              { year: "2023", title: "Evento 4", color: "sgel-yellow" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-24 h-24 bg-${item.color} rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg relative z-10`}>
                  <span className="text-white text-2xl font-bold">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-sgel-dark mb-2">{item.title}</h3>
                <p className="text-sm text-sgel-dark/70">
                  Descripción breve del evento
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout 11: Texto + Sidebar de Imagen
export function Layout11() {
  return (
    <div className="min-h-screen bg-white p-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-6">
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
          <div className="bg-sgel-light p-6 rounded-lg mt-8">
            <p className="text-xl text-sgel-dark/70">
              💡 Nota importante o concepto clave para recordar
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-sgel-blue/20 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-sgel-blue text-4xl font-bold">IMG 1</div>
          </div>
          <div className="bg-sgel-green/20 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-sgel-green text-4xl font-bold">IMG 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout 12: Grid de Tarjetas
export function Layout12() {
  return (
    <div className="min-h-screen bg-sgel-light p-12">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <h2 className="text-5xl font-serif font-bold text-sgel-dark mb-12 text-center">
          Vocabulario / Conceptos
        </h2>
        <div className="grid grid-cols-3 gap-6 flex-1">
          {[
            { word: "Palabra 1", color: "sgel-red" },
            { word: "Palabra 2", color: "sgel-blue" },
            { word: "Palabra 3", color: "sgel-green" },
            { word: "Palabra 4", color: "sgel-yellow" },
            { word: "Palabra 5", color: "sgel-red" },
            { word: "Palabra 6", color: "sgel-blue" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <h3 className={`text-3xl font-bold text-${item.color} mb-4`}>
                {item.word}
              </h3>
              <p className="text-lg text-sgel-dark/70 leading-relaxed">
                Definición o explicación del término de vocabulario
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente principal con navegación
export default function SlideLayoutProposals() {
  const [currentLayout, setCurrentLayout] = useState(1);

  const layouts = [
    { id: 1, name: "Texto Izq + Imagen Der", component: <Layout1 /> },
    { id: 2, name: "Imagen Izq + Texto Der", component: <Layout2 /> },
    { id: 3, name: "Título + 3 Columnas", component: <Layout3 /> },
    { id: 4, name: "Grid 2x2", component: <Layout4 /> },
    { id: 5, name: "Texto Centrado Grande", component: <Layout5 /> },
    { id: 6, name: "Imagen + Texto Superpuesto", component: <Layout6 /> },
    { id: 7, name: "Lista con Iconos", component: <Layout7 /> },
    { id: 8, name: "Comparación A vs B", component: <Layout8 /> },
    { id: 9, name: "Cita Destacada", component: <Layout9 /> },
    { id: 10, name: "Timeline Horizontal", component: <Layout10 /> },
    { id: 11, name: "Texto + Sidebar", component: <Layout11 /> },
    { id: 12, name: "Grid de Tarjetas", component: <Layout12 /> }
  ];

  const currentLayoutData = layouts.find(l => l.id === currentLayout);

  return (
    <div className="relative">
      {/* Layout actual */}
      <div className="min-h-screen">
        {currentLayoutData?.component}
      </div>

      {/* Controles de navegación */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/95 backdrop-blur rounded-full shadow-2xl px-8 py-4 flex items-center gap-6">
          <button
            onClick={() => setCurrentLayout(Math.max(1, currentLayout - 1))}
            disabled={currentLayout === 1}
            className="px-6 py-2 bg-sgel-red text-white font-bold rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-sgel-red/80 transition-all"
          >
            ← Anterior
          </button>

          <div className="text-center min-w-[300px]">
            <div className="text-2xl font-bold text-sgel-dark">
              Layout {currentLayout} de {layouts.length}
            </div>
            <div className="text-sm text-sgel-dark/60 font-semibold mt-1">
              {currentLayoutData?.name}
            </div>
          </div>

          <button
            onClick={() => setCurrentLayout(Math.min(layouts.length, currentLayout + 1))}
            disabled={currentLayout === layouts.length}
            className="px-6 py-2 bg-sgel-red text-white font-bold rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-sgel-red/80 transition-all"
          >
            Siguiente →
          </button>
        </div>
      </div>

      {/* Selector rápido */}
      <div className="fixed top-8 right-8 z-50">
        <div className="bg-white/95 backdrop-blur rounded-lg shadow-xl p-4 max-w-xs">
          <div className="text-sm font-bold text-sgel-dark mb-3">Ir a Layout:</div>
          <div className="grid grid-cols-4 gap-2">
            {layouts.map(layout => (
              <button
                key={layout.id}
                onClick={() => setCurrentLayout(layout.id)}
                className={`
                  px-3 py-2 rounded font-bold transition-all
                  ${currentLayout === layout.id
                    ? 'bg-sgel-red text-white'
                    : 'bg-sgel-light text-sgel-dark hover:bg-sgel-red/20'
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
