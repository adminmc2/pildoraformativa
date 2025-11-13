"use client";
import { useState } from "react";

export default function PropuestaMetodologicaPage() {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="relative min-h-screen w-full bg-white">

      {/* Navegación entre slides - Esquina inferior derecha */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        {/* Flecha izquierda */}
        <button
          onClick={() => setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : 4)}
          className="w-8 h-8 rounded-full bg-white border-2 border-black font-black text-sm hover:bg-sgel-yellow transition-all"
          style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.8)" }}
        >
          ←
        </button>

        {/* Número actual */}
        <div className="bg-white border-2 border-black rounded-full w-10 h-8 flex items-center justify-center"
          style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.8)" }}>
          <span className="font-black text-sm">{currentSlide}</span>
        </div>

        {/* Flecha derecha */}
        <button
          onClick={() => setCurrentSlide(currentSlide < 4 ? currentSlide + 1 : 1)}
          className="w-8 h-8 rounded-full bg-white border-2 border-black font-black text-sm hover:bg-sgel-yellow transition-all"
          style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.8)" }}
        >
          →
        </button>
      </div>

      {/* SLIDE 1: Portada */}
      {currentSlide === 1 && (
        <div className="min-h-screen bg-gradient-to-br from-sgel-yellow via-white to-sgel-blue p-8 flex items-center justify-center relative overflow-hidden">

          {/* Cuadrados decorativos */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-sgel-red border-4 border-black rounded-xl transform rotate-12"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-sgel-green border-4 border-black rounded-full transform -rotate-12"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/3 right-20 w-20 h-20 bg-sgel-blue border-4 border-black rounded-lg transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-1/3 left-20 w-16 h-16 bg-sgel-yellow border-4 border-black rounded-full transform -rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          <div className="max-w-6xl text-center">
            <div className="bg-white border-4 border-black rounded-[3rem] p-16"
              style={{ boxShadow: "20px 20px 0px rgba(0,0,0,0.8)" }}>


              {/* Título principal */}
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                Microlearning Gramatical<br />Inferencial para Adolescentes
              </h1>

              {/* Subtítulo */}
              <div className="bg-sgel-yellow border-4 border-black rounded-2xl px-10 py-5 inline-block mb-8"
                style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                <p className="text-3xl font-black">
                  Transformación Digital de Materiales<br />Complementarios de Español
                </p>
              </div>

              {/* Badge SGEL */}
              <div className="flex justify-center gap-6 mt-10">
                <div className="bg-sgel-red border-4 border-black rounded-2xl px-8 py-4"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="font-black text-2xl text-white">SGEL</span>
                </div>
                <div className="bg-sgel-green border-4 border-black rounded-2xl px-8 py-4"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="font-black text-2xl text-white">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 2: Lo que NO funciona en las aulas */}
      {currentSlide === 2 && (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 lg:p-12 flex flex-col justify-start pt-16 relative overflow-hidden">

          {/* Elementos decorativos de "problema" - z-0 para que estén detrás */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 border-4 border-black rounded transform rotate-12 opacity-40 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-red-600 border-4 border-black rounded-xl transform -rotate-12 opacity-40 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal con z-10 */}
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Badge superior */}
            <div className="bg-red-500 border-4 border-black rounded-full px-8 py-3 inline-block mb-6 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl text-white">EL PROBLEMA</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Lo que NO funciona<br />en las aulas
            </h2>

            {/* Lista de problemas */}
            <div className="grid grid-cols-2 gap-5 mb-8">
              <div className="bg-white border-4 border-black rounded-2xl p-5"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <p className="text-lg font-bold">PowerPoints expositivos que explican reglas gramaticales de forma frontal</p>
              </div>

              <div className="bg-white border-4 border-black rounded-2xl p-5"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <p className="text-lg font-bold">Estudiantes que memorizan tablas, pero no pueden usar la gramática en contexto real</p>
              </div>

              <div className="bg-white border-4 border-black rounded-2xl p-5"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <p className="text-lg font-bold">Materiales que ignoran cómo el cerebro adolescente procesa el lenguaje</p>
              </div>

              <div className="bg-white border-4 border-black rounded-2xl p-5"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <p className="text-lg font-bold">Sobrecarga cognitiva: demasiada información, poca retención</p>
              </div>
            </div>

            {/* Cita experta */}
            <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-6 max-w-4xl"
              style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
              <p className="text-2xl md:text-3xl font-black mb-3 italic">
                "Los aprendices no piensan en reglas. Piensan en chunks"
              </p>
              <p className="text-lg font-bold text-gray-700">
                — Gianfranco Conti (Applied Linguistics, PhD)
              </p>
            </div>
          </div>

        </div>
      )}

      {/* SLIDE 3: Nuestra Solución Metodológica */}
      {currentSlide === 3 && (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-green-50 p-8 lg:p-12 flex flex-col justify-start pt-12 relative overflow-hidden">

          {/* Elementos decorativos - z-0 para que estén detrás */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-sgel-green border-4 border-black rounded-full transform rotate-12 opacity-40 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 left-20 w-24 h-24 bg-sgel-yellow border-4 border-black rounded transform -rotate-12 opacity-40 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal con z-10 */}
          <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col">
            {/* Badge superior */}
            <div className="bg-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block mb-5 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl text-white">NUESTRA SOLUCIÓN</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight">
              Microlearning Gramatical Inferencial
            </h2>

            {/* Dos columnas principales - más altas */}
            <div className="grid grid-cols-2 gap-8 flex-1">

              {/* ¿Qué es? */}
              <div className="bg-white border-4 border-black rounded-2xl p-10 flex flex-col justify-center"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <h3 className="text-4xl font-black mb-8 text-sgel-blue">¿Qué es?</h3>
                <ul className="space-y-6">
                  <li className="text-2xl font-bold leading-relaxed">Cápsulas de 5-7 minutos de análisis gramatical</li>
                  <li className="text-2xl font-bold leading-relaxed">Enfoque inductivo-inferencial: el estudiante descubre la regla</li>
                  <li className="text-2xl font-bold leading-relaxed">Basado en chunks procesables, no en reglas abstractas</li>
                  <li className="text-2xl font-bold leading-relaxed">Material complementario para análisis gramatical dentro de unidades comunicativas</li>
                </ul>
              </div>

              {/* ¿Por qué ahora? */}
              <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-10 flex flex-col justify-center"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <h3 className="text-4xl font-black mb-8">¿Por qué ahora?</h3>
                <ul className="space-y-6">
                  <li className="text-2xl font-bold leading-relaxed">One-third of secondary schools in the UK explicitly use EPI as their preferred approach (Language Trends Report 2025)</li>
                  <li className="text-2xl font-bold leading-relaxed">Estudios recientes demuestran mayor retención con microlearning vs. instrucción tradicional</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* SLIDE 4: Fundamentos Teórico-Metodológicos */}
      {currentSlide === 4 && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 lg:p-12 flex flex-col justify-start pt-16 relative overflow-hidden">

          {/* Elementos decorativos - z-0 para que estén detrás */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-sgel-blue border-4 border-black rounded transform rotate-12 opacity-40 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-sgel-green border-4 border-black rounded-xl transform -rotate-12 opacity-40 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal con z-10 */}
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Badge superior */}
            <div className="bg-sgel-blue border-4 border-black rounded-full px-8 py-3 inline-block mb-6 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl text-white">FUNDAMENTOS</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Fundamentos Teórico-Metodológicos
            </h2>

            {/* Grid de teorías */}
            <div className="grid grid-cols-2 gap-6 mb-8">

              {/* Input Processing */}
              <div className="bg-white border-4 border-black rounded-2xl p-6"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-yellow border-4 border-black rounded-xl px-4 py-2 inline-block mb-4"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-xl font-black">1. Input Processing</h3>
                </div>
                <p className="text-lg font-bold text-gray-700 mb-3">Bill VanPatten</p>
                <ul className="space-y-2">
                  <li className="text-base font-bold">El cerebro procesa chunks antes que reglas</li>
                  <li className="text-base font-bold">La gramática se adquiere mediante patrones repetidos, no explicaciones</li>
                </ul>
              </div>

              {/* Extensive Processing Instruction */}
              <div className="bg-white border-4 border-black rounded-2xl p-6"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-green border-4 border-black rounded-xl px-4 py-2 inline-block mb-4"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-xl font-black text-white">2. Extensive Processing Instruction</h3>
                </div>
                <p className="text-lg font-bold text-gray-700 mb-3">Gianfranco Conti</p>
                <ul className="space-y-2">
                  <li className="text-base font-bold">Metodología MARS EARS: de la exposición a la autonomía</li>
                  <li className="text-base font-bold">"Pattern-first approach": primero el patrón, después la regla</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
