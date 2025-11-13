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
          onClick={() => setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : 3)}
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
          onClick={() => setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 1)}
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

      {/* SLIDE 3: Siguiente texto */}
      {currentSlide === 3 && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 flex items-center justify-center relative overflow-hidden">

          {/* Elementos decorativos */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-sgel-blue border-4 border-black rounded transform rotate-12"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-sgel-green border-4 border-black rounded-xl transform -rotate-12"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          <div className="max-w-6xl">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>

              {/* Badge superior */}
              <div className="bg-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl text-white">SIGUIENTE</span>
              </div>

              {/* Título */}
              <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight">
                Contenido adicional
              </h2>

              {/* Contenido placeholder */}
              <div className="space-y-6">
                <p className="text-xl font-bold">Aquí irá el siguiente contenido que me proporciones.</p>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
