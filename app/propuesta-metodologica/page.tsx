"use client";
import { useState } from "react";

export default function PropuestaMetodologicaPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [openPhaseModal, setOpenPhaseModal] = useState<string | null>(null);

  const openCardModal = (cardIndex: number) => {
    setOpenModal(cardIndex);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  const openPhaseDetail = (phase: string) => {
    setOpenPhaseModal(phase);
  };

  const closePhaseModal = () => {
    setOpenPhaseModal(null);
  };

  return (
    <div className="relative min-h-screen w-full bg-white">

      {/* Navegación entre slides - Esquina inferior derecha */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        {/* Flecha izquierda */}
        <button
          onClick={() => setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : 9)}
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
          onClick={() => setCurrentSlide(currentSlide < 9 ? currentSlide + 1 : 1)}
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

      {/* SLIDE 4: Marco Teórico-Metodológico Integrado */}
      {currentSlide === 4 && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 lg:p-12 flex flex-col justify-start pt-12 relative overflow-hidden">

          {/* Elementos decorativos - z-0 para que estén detrás */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-sgel-blue border-4 border-black rounded transform rotate-12 opacity-40 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-sgel-green border-4 border-black rounded-xl transform -rotate-12 opacity-40 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal con z-10 */}
          <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col">
            {/* Badge superior */}
            <div className="bg-sgel-blue border-4 border-black rounded-full px-8 py-3 inline-block mb-5 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl text-white">MARCO TEÓRICO</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Fundamentación Científica<br />del Enfoque Inferencial
            </h2>

            {/* Tres pilares principales */}
            <div className="grid grid-cols-3 gap-6 flex-1">

              {/* PILAR 1: Procesamiento de Input */}
              <div className="bg-white border-4 border-black rounded-2xl p-8 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-yellow border-4 border-black rounded-xl px-4 py-3 text-center mb-6"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-2xl font-black">PILAR 1</h3>
                </div>
                <h4 className="text-2xl font-black mb-4 text-sgel-blue">Procesamiento de Input</h4>
                <ul className="space-y-3 flex-1">
                  <li className="text-lg font-bold">Input Processing (VanPatten)</li>
                  <li className="text-lg font-bold">EPI: MARS EARS (Conti)</li>
                  <li className="text-lg font-bold">Chunks antes que reglas</li>
                </ul>
                <div className="mt-4 pt-4 border-t-4 border-black">
                  <p className="text-base font-bold text-gray-600">Input estructurado mejora comprensión receptiva</p>
                </div>
              </div>

              {/* PILAR 2: Output y Notación de Brecha */}
              <div className="bg-white border-4 border-black rounded-2xl p-8 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-green border-4 border-black rounded-xl px-4 py-3 text-center mb-6"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-2xl font-black text-white">PILAR 2</h3>
                </div>
                <h4 className="text-2xl font-black mb-4 text-sgel-green">Output y Gap-Noticing</h4>
                <ul className="space-y-3 flex-1">
                  <li className="text-lg font-bold">Output Hypothesis (Swain)</li>
                  <li className="text-lg font-bold">Feedback Correctivo (Doughty)</li>
                  <li className="text-lg font-bold">Comprensión ≠ Producción</li>
                </ul>
                <div className="mt-4 pt-4 border-t-4 border-black">
                  <p className="text-base font-bold text-gray-600">Producción genera conciencia metalingüística</p>
                </div>
              </div>

              {/* PILAR 3: Integración y Consolidación */}
              <div className="bg-white border-4 border-black rounded-2xl p-8 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-red border-4 border-black rounded-xl px-4 py-3 text-center mb-6"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-2xl font-black text-white">PILAR 3</h3>
                </div>
                <h4 className="text-2xl font-black mb-4 text-sgel-red">Integración y Consolidación</h4>
                <ul className="space-y-3 flex-1">
                  <li className="text-lg font-bold">TBLT (Ellis)</li>
                  <li className="text-lg font-bold">Procesamiento Profundo (Craik & Lockhart)</li>
                  <li className="text-lg font-bold">Consolidación Espaciada</li>
                </ul>
                <div className="mt-4 pt-4 border-t-4 border-black">
                  <p className="text-base font-bold text-gray-600">Repetición espaciada asegura automatización</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* SLIDE 5: Pilar 1 en detalle - Input Processing */}
      {currentSlide === 5 && (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50 p-8 lg:p-12 flex flex-col justify-start pt-12 relative overflow-hidden">

          {/* Elementos decorativos - z-0 para que estén detrás */}
          <div className="absolute top-1/4 right-10 w-32 h-32 bg-sgel-yellow border-4 border-black rounded-full transform rotate-45 opacity-30 z-0"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-1/3 left-10 w-28 h-28 bg-sgel-blue border-4 border-black rounded transform -rotate-12 opacity-30 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal con z-10 */}
          <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col">
            {/* Badge superior */}
            <div className="bg-sgel-yellow border-4 border-black rounded-full px-8 py-3 inline-block mb-5 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl">PILAR 1 EN DETALLE</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-sgel-blue">
              Input Processing (VanPatten)
            </h2>

            {/* Layout: 3 columnas */}
            <div className="grid grid-cols-3 gap-6 flex-1">

              {/* Columna 1: Lo que aprovechamos */}
              <div className="bg-white border-4 border-black rounded-2xl p-6 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-green border-4 border-black rounded-xl px-4 py-3 text-center mb-5"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-xl font-black text-white">LO QUE SÍ APROVECHAMOS</h3>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="bg-green-100 border-4 border-black rounded-lg p-4">
                    <p className="text-base font-black mb-2">Chunks antes que reglas</p>
                    <p className="text-sm font-bold text-gray-700">Patrón primero, regla después</p>
                  </div>
                  <div className="bg-green-100 border-4 border-black rounded-lg p-4">
                    <p className="text-base font-black mb-2">Input estructurado</p>
                    <p className="text-sm font-bold text-gray-700">Múltiples ejemplos significativos del patrón</p>
                  </div>
                  <div className="bg-green-100 border-4 border-black rounded-lg p-4">
                    <p className="text-base font-black mb-2">Evidencia: Shintani (2015)</p>
                    <p className="text-sm font-bold text-gray-700">Metaanálisis d=0.82 para comprensión receptiva</p>
                  </div>
                  <div className="bg-green-100 border-4 border-black rounded-lg p-4">
                    <p className="text-base font-black mb-2">MARS EARS (Conti)</p>
                    <p className="text-sm font-bold text-gray-700">Modelado, Atención, Repetición, Estructuración</p>
                  </div>
                </div>
              </div>

              {/* Columna 2: Lo que NO aprovechamos - TARJETAS CON MODAL */}
              <div className="bg-white border-4 border-black rounded-2xl p-6 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-red border-4 border-black rounded-xl px-4 py-3 text-center mb-5"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-xl font-black text-white">LO QUE NO APROVECHAMOS</h3>
                  <p className="text-xs font-bold text-white mt-1 opacity-90">Haz clic en cada tarjeta para ver por qué</p>
                </div>
                <div className="space-y-4 flex-1">

                  {/* Tarjeta 1 */}
                  <div
                    onClick={() => openCardModal(1)}
                    className="bg-red-100 border-4 border-black rounded-lg p-4 cursor-pointer hover:bg-red-200 transition-colors"
                    style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                    <p className="text-base font-black mb-2">Asunción incorrecta</p>
                    <p className="text-sm font-bold text-gray-700">Input solo NO genera producción autónoma</p>
                    <p className="text-xs font-bold text-gray-500 mt-2">Clic para ampliar</p>
                  </div>

                  {/* Tarjeta 2 */}
                  <div
                    onClick={() => openCardModal(2)}
                    className="bg-red-100 border-4 border-black rounded-lg p-4 cursor-pointer hover:bg-red-200 transition-colors"
                    style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                    <p className="text-base font-black mb-2">Limitación de Shintani</p>
                    <p className="text-sm font-bold text-gray-700">Efecto NO significativo para conocimiento productivo</p>
                    <p className="text-xs font-bold text-gray-500 mt-2">Clic para ampliar</p>
                  </div>

                  {/* Tarjeta 3 */}
                  <div
                    onClick={() => openCardModal(3)}
                    className="bg-red-100 border-4 border-black rounded-lg p-4 cursor-pointer hover:bg-red-200 transition-colors"
                    style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                    <p className="text-base font-black mb-2">Explicación explícita</p>
                    <p className="text-sm font-bold text-gray-700">Dar la regla después NO mejora (interfiere)</p>
                    <p className="text-xs font-bold text-gray-500 mt-2">Clic para ampliar</p>
                  </div>

                  {/* Tarjeta 4 */}
                  <div
                    onClick={() => openCardModal(4)}
                    className="bg-red-100 border-4 border-black rounded-lg p-4 cursor-pointer hover:bg-red-200 transition-colors"
                    style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                    <p className="text-base font-black mb-2">Una sola exposición</p>
                    <p className="text-sm font-bold text-gray-700">Se olvida en 24h sin consolidación espaciada</p>
                    <p className="text-xs font-bold text-gray-500 mt-2">Clic para ampliar</p>
                  </div>

                </div>
              </div>

              {/* Columna 3: Cómo lo aprovechamos en práctica */}
              <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-6 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-blue border-4 border-black rounded-xl px-4 py-3 text-center mb-5"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-xl font-black text-white">CÓMO LO APROVECHAMOS</h3>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="bg-white border-4 border-black rounded-lg p-4">
                    <p className="text-base font-black mb-2 text-sgel-blue">1. Exposición multimodal</p>
                    <p className="text-sm font-bold text-gray-700">Visual + auditivo + contextual: "un gato" vs "una gata" con imagen</p>
                  </div>
                  <div className="bg-white border-4 border-black rounded-lg p-4">
                    <p className="text-base font-black mb-2 text-sgel-blue">2. Atención forzada</p>
                    <p className="text-sm font-bold text-gray-700">Actividades donde NO pueden evitar notar el patrón</p>
                  </div>
                  <div className="bg-white border-4 border-black rounded-lg p-4">
                    <p className="text-base font-black mb-2 text-sgel-blue">3. Inferencia guiada</p>
                    <p className="text-sm font-bold text-gray-700">Estudiante descubre la regla (no se la damos)</p>
                  </div>
                  <div className="bg-white border-4 border-black rounded-lg p-4">
                    <p className="text-base font-black mb-2 text-sgel-blue">4. Complemento obligatorio</p>
                    <p className="text-sm font-bold text-gray-700">Seguido de OUTPUT + feedback + consolidación espaciada</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* SLIDE 6: MARS EARS - Conti's EPI Methodology */}
      {currentSlide === 6 && (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50 p-8 lg:p-12 flex flex-col justify-start pt-12 relative overflow-hidden">

          {/* Elementos decorativos - z-0 para que estén detrás */}
          <div className="absolute top-1/4 right-10 w-32 h-32 bg-purple-400 border-4 border-black rounded-full transform rotate-45 opacity-30 z-0"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-1/3 left-10 w-28 h-28 bg-sgel-yellow border-4 border-black rounded transform -rotate-12 opacity-30 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal con z-10 */}
          <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col">
            {/* Badge superior */}
            <div className="bg-purple-600 border-4 border-black rounded-full px-8 py-3 inline-block mb-5 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl text-white">PILAR 1 - PROFUNDIZACIÓN</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-purple-800">
              MARS EARS (Conti)
            </h2>
            <p className="text-2xl font-bold mb-8 text-gray-700">Extensive Processing Instruction - Ciclo de 7 fases</p>

            {/* Layout: Ciclo MARS EARS en grid circular visual */}
            <div className="grid grid-cols-4 gap-4 flex-1">

              {/* M - Modelling */}
              <div className="bg-white border-4 border-black rounded-2xl p-5 flex flex-col"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-purple-600 border-4 border-black rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black text-white">M</span>
                </div>
                <h3 className="text-xl font-black mb-2 text-center text-purple-800">Modelling</h3>
                <p className="text-sm font-bold text-gray-700 text-center">Exposición masiva al patrón en contexto significativo</p>
              </div>

              {/* A - Awareness Raising */}
              <div className="bg-white border-4 border-black rounded-2xl p-5 flex flex-col"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-blue border-4 border-black rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black text-white">A</span>
                </div>
                <h3 className="text-xl font-black mb-2 text-center text-sgel-blue">Awareness Raising</h3>
                <p className="text-sm font-bold text-gray-700 text-center">Atención forzada al patrón sin explicación explícita</p>
              </div>

              {/* R - Receptive Processing */}
              <div className="bg-white border-4 border-black rounded-2xl p-5 flex flex-col"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-green border-4 border-black rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black text-white">R</span>
                </div>
                <h3 className="text-xl font-black mb-2 text-center text-sgel-green">Receptive Processing</h3>
                <p className="text-sm font-bold text-gray-700 text-center">Comprensión auditiva/lectora del patrón</p>
              </div>

              {/* S - Structured Production */}
              <div className="bg-white border-4 border-black rounded-2xl p-5 flex flex-col"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-yellow border-4 border-black rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black">S</span>
                </div>
                <h3 className="text-xl font-black mb-2 text-center text-yellow-700">Structured Production</h3>
                <p className="text-sm font-bold text-gray-700 text-center">Producción guiada con andamiaje fuerte</p>
              </div>

              {/* E - Expansion */}
              <div className="bg-white border-4 border-black rounded-2xl p-5 flex flex-col"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-red border-4 border-black rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black text-white">E</span>
                </div>
                <h3 className="text-xl font-black mb-2 text-center text-sgel-red">Expansion</h3>
                <p className="text-sm font-bold text-gray-700 text-center">Aplicación del patrón en nuevos contextos</p>
              </div>

              {/* A - Autonomy */}
              <div className="bg-white border-4 border-black rounded-2xl p-5 flex flex-col"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-orange-500 border-4 border-black rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black text-white">A</span>
                </div>
                <h3 className="text-xl font-black mb-2 text-center text-orange-600">Autonomy</h3>
                <p className="text-sm font-bold text-gray-700 text-center">Producción sin andamiaje explícito</p>
              </div>

              {/* RS - Routinization & Spontaneity */}
              <div className="bg-white border-4 border-black rounded-2xl p-5 flex flex-col col-span-2"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-pink-600 border-4 border-black rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-2xl font-black text-white">RS</span>
                </div>
                <h3 className="text-xl font-black mb-2 text-center text-pink-700">Routinization & Spontaneity</h3>
                <p className="text-sm font-bold text-gray-700 text-center">Automatización mediante uso espontáneo repetido en comunicación real</p>
              </div>

            </div>

            {/* Footer: Pattern-First Approach */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-purple-600 border-4 border-black rounded-2xl p-5"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <h3 className="text-2xl font-black text-white mb-3">Pattern-First Approach</h3>
                <p className="text-lg font-bold text-white leading-snug">
                  Patrón ANTES que regla: el estudiante descubre inductivamente la regularidad gramatical tras múltiples exposiciones
                </p>
              </div>
              <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-5"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <h3 className="text-2xl font-black mb-3">En nuestras cápsulas</h3>
                <p className="text-lg font-bold leading-snug">
                  Seguimos MARS EARS para Input Processing + complementamos con Output forzado y consolidación espaciada
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* SLIDE 7: EPI en la Práctica - Ejemplos Concretos INTERACTIVO */}
      {currentSlide === 7 && (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 p-8 lg:p-12 flex flex-col justify-start pt-12 relative overflow-hidden">

          {/* Elementos decorativos */}
          <div className="absolute top-1/4 right-10 w-32 h-32 bg-orange-400 border-4 border-black rounded-full transform rotate-45 opacity-30 z-0"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-1/3 left-10 w-28 h-28 bg-pink-400 border-4 border-black rounded transform -rotate-12 opacity-30 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal */}
          <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col">
            {/* Badge superior */}
            <div className="bg-orange-600 border-4 border-black rounded-full px-8 py-3 inline-block mb-4 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl text-white">EPI EN LA PRÁCTICA</span>
            </div>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight text-orange-800">
              Actividades Específicas por Fase
            </h2>

            <p className="text-lg font-bold text-gray-700 mb-5">
              Haz clic en cada fase para ver las actividades detalladas con ejemplos concretos
            </p>

            {/* Grid de 6 fases clickeables */}
            <div className="grid grid-cols-3 gap-4 mb-5">

              {/* MODELLING */}
              <div
                onClick={() => openPhaseDetail('modelling')}
                className="bg-purple-600 border-4 border-black rounded-xl p-5 cursor-pointer hover:scale-105 transition-transform"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white border-4 border-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-purple-600">M</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">MODELLING</h3>
                </div>
                <p className="text-sm font-bold text-white">Read Aloud + Sentence Builder</p>
                <p className="text-xs font-bold text-purple-100 mt-2">→ Ver actividades</p>
              </div>

              {/* AWARENESS RAISING */}
              <div
                onClick={() => openPhaseDetail('awareness')}
                className="bg-blue-600 border-4 border-black rounded-xl p-5 cursor-pointer hover:scale-105 transition-transform"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white border-4 border-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-blue-600">A</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">AWARENESS</h3>
                </div>
                <p className="text-sm font-bold text-white">Minimal Pairs + Sorting</p>
                <p className="text-xs font-bold text-blue-100 mt-2">→ Ver actividades</p>
              </div>

              {/* RECEPTIVE PROCESSING */}
              <div
                onClick={() => openPhaseDetail('receptive')}
                className="bg-green-600 border-4 border-black rounded-xl p-5 cursor-pointer hover:scale-105 transition-transform"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white border-4 border-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-green-600">R</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">RECEPTIVE</h3>
                </div>
                <p className="text-sm font-bold text-white">Listening + Gap-filling</p>
                <p className="text-xs font-bold text-green-100 mt-2">→ Ver actividades</p>
              </div>

              {/* STRUCTURED PRODUCTION */}
              <div
                onClick={() => openPhaseDetail('structured')}
                className="bg-yellow-600 border-4 border-black rounded-xl p-5 cursor-pointer hover:scale-105 transition-transform"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white border-4 border-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-yellow-600">S</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">STRUCTURED</h3>
                </div>
                <p className="text-sm font-bold text-white">Drills + Visual Production</p>
                <p className="text-xs font-bold text-yellow-100 mt-2">→ Ver actividades</p>
              </div>

              {/* EXPANSION */}
              <div
                onClick={() => openPhaseDetail('expansion')}
                className="bg-red-600 border-4 border-black rounded-xl p-5 cursor-pointer hover:scale-105 transition-transform"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white border-4 border-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-red-600">E</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">EXPANSION</h3>
                </div>
                <p className="text-sm font-bold text-white">Grammar + Creative Practice</p>
                <p className="text-xs font-bold text-red-100 mt-2">→ Ver actividades</p>
              </div>

              {/* AUTONOMY */}
              <div
                onClick={() => openPhaseDetail('autonomy')}
                className="bg-pink-600 border-4 border-black rounded-xl p-5 cursor-pointer hover:scale-105 transition-transform"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white border-4 border-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-pink-600">A</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">AUTONOMY</h3>
                </div>
                <p className="text-sm font-bold text-white">Quiz + Reflection</p>
                <p className="text-xs font-bold text-pink-100 mt-2">→ Ver actividades</p>
              </div>

            </div>

            {/* Footer informativo */}
            <div className="bg-orange-600 border-4 border-black rounded-2xl p-4"
              style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
              <p className="text-base font-bold text-white leading-snug">
                💡 Cada fase contiene múltiples actividades específicas con procedimientos paso a paso, ejemplos concretos y objetivos de aprendizaje
              </p>
            </div>

          </div>

        </div>
      )}

      {/* MODALES INTERACTIVOS PARA SLIDE 7 - EPI en la Práctica */}
      {openPhaseModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4" onClick={closePhaseModal}>
          <div className="bg-white border-8 border-black rounded-3xl p-8 max-w-5xl w-[95%] max-h-[90vh] overflow-y-auto relative"
            style={{ boxShadow: "20px 20px 0px rgba(0,0,0,0.9)" }}
            onClick={(e) => e.stopPropagation()}>

            {/* Botón cerrar */}
            <button
              onClick={closePhaseModal}
              className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 border-4 border-black rounded-full w-12 h-12 flex items-center justify-center text-white font-black text-2xl transition-all"
              style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.9)" }}>
              ✕
            </button>

            {/* MODAL: MODELLING */}
            {openPhaseModal === 'modelling' && (
              <div className="space-y-6">
                <div className="bg-purple-600 border-4 border-black rounded-xl px-6 py-4 mb-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.9)" }}>
                  <h2 className="text-4xl font-black text-white">FASE 1: MODELLING</h2>
                  <p className="text-xl font-bold text-purple-100 mt-2">Exposición inicial al patrón lingüístico</p>
                </div>

                {/* Sentence Builder */}
                <div className="bg-gradient-to-br from-purple-50 to-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-purple-800 mb-4">📊 Sentence Builder: El plural de nombres y adjetivos</h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-yellow-100 border-3 border-black rounded-lg p-4">
                      <p className="font-black text-lg mb-2">ARTÍCULOS:</p>
                      <p className="font-bold">el / la / los / las</p>
                    </div>
                    <div className="bg-blue-100 border-3 border-black rounded-lg p-4">
                      <p className="font-black text-lg mb-2">SUSTANTIVOS:</p>
                      <p className="font-bold">niño, niña, gato, gata, libro, casa, perro, perra</p>
                    </div>
                    <div className="bg-green-100 border-3 border-black rounded-lg p-4">
                      <p className="font-black text-lg mb-2">VERBOS:</p>
                      <p className="font-bold">es / son</p>
                    </div>
                    <div className="bg-red-100 border-3 border-black rounded-lg p-4">
                      <p className="font-black text-lg mb-2">ADJETIVOS:</p>
                      <p className="font-bold">alto/a, bajo/a, guapo/a, feo/a, rojo/a, azul, nuevo/a, viejo/a</p>
                    </div>
                  </div>

                  <div className="bg-purple-100 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-3">EJEMPLOS DE FRASES:</p>
                    <div className="space-y-2 font-bold">
                      <p>• El niño es alto</p>
                      <p>• La niña es alta</p>
                      <p>• Los gatos son negros</p>
                      <p>• Las casas son nuevas</p>
                      <p>• Los perros son grandes</p>
                      <p>• Las niñas son guapas</p>
                    </div>
                  </div>
                </div>

                {/* Actividad 1: Read Aloud */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-purple-800 mb-4">🗣️ Actividad 1: Read Aloud (Lectura en voz alta)</h3>

                  <div className="bg-purple-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Exposición masiva al patrón sin exigir producción. Los estudiantes escuchan pasivamente mientras internalizan el sonido y la estructura.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>El profesor lee frases del Sentence Builder con apoyo visual claro (imágenes que muestran concordancia)</li>
                      <li>Se repite cada frase 4-5 veces mínimo</li>
                      <li>Los estudiantes NO hablan, solo escuchan y observan</li>
                      <li>Se enfatiza ligeramente la terminación que cambia (-o/-a, -os/-as)</li>
                      <li>Duración: 2-3 minutos de exposición continua</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">EJEMPLO PRÁCTICO:</p>
                    <p className="font-bold text-gray-800 mb-2">Profesor muestra imagen de un niño alto y dice:</p>
                    <p className="italic font-bold text-purple-700">"El niño es alto. El niño es alto. El niño es alto. El niño es alto."</p>
                    <p className="font-bold text-gray-800 mt-3 mb-2">Luego muestra imagen de una niña alta:</p>
                    <p className="italic font-bold text-purple-700">"La niña es alta. La niña es alta. La niña es alta. La niña es alta."</p>
                  </div>
                </div>

                {/* Actividad 2: Sentence Builder Presentation */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-purple-800 mb-4">📋 Actividad 2: Sentence Builder Presentation</h3>

                  <div className="bg-purple-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Presentar el recurso visual que será la columna vertebral de todas las actividades posteriores.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Mostrar el Sentence Builder completo en pantalla/pizarra</li>
                      <li>Explicar brevemente cómo funciona (columnas = categorías)</li>
                      <li>Leer varias combinaciones posibles señalando cada elemento</li>
                      <li>Los estudiantes siguen visualmente, sin hablar aún</li>
                      <li>Se enfatiza la flexibilidad del sistema para crear muchas frases</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-purple-600 border-4 border-black rounded-xl p-4 text-center"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <p className="text-white font-black text-lg">⚡ RESULTADO: Los estudiantes han escuchado el patrón decenas de veces antes de tener que producirlo</p>
                </div>
              </div>
            )}

            {/* MODAL: AWARENESS RAISING */}
            {openPhaseModal === 'awareness' && (
              <div className="space-y-6">
                <div className="bg-blue-600 border-4 border-black rounded-xl px-6 py-4 mb-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.9)" }}>
                  <h2 className="text-4xl font-black text-white">FASE 2: AWARENESS RAISING</h2>
                  <p className="text-xl font-bold text-blue-100 mt-2">Atención forzada a las características clave</p>
                </div>

                {/* Actividad 1: Minimal Pairs */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-blue-800 mb-4">👁️ Actividad 1: Minimal Pairs (Pares mínimos)</h3>

                  <div className="bg-blue-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Forzar la atención al cambio morfológico comparando frases casi idénticas.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Presentar dos frases que solo difieren en género/número</li>
                      <li>Preguntar: "¿Qué observas que cambió?"</li>
                      <li>Los estudiantes deben identificar las diferencias (artículo, terminación del adjetivo)</li>
                      <li>Repetir con 5-6 pares mínimos diferentes</li>
                      <li>NO se explica la regla aún, solo se dirige la atención</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-3">EJEMPLOS DE PARES MÍNIMOS:</p>
                    <div className="space-y-3">
                      <div className="bg-white border-2 border-blue-600 rounded p-3">
                        <p className="font-bold text-blue-700">El niño alto → La niña alta</p>
                        <p className="text-sm font-bold text-gray-600 mt-1">Cambios: el/la, niño/niña, alto/alta</p>
                      </div>
                      <div className="bg-white border-2 border-blue-600 rounded p-3">
                        <p className="font-bold text-blue-700">El gato negro → Los gatos negros</p>
                        <p className="text-sm font-bold text-gray-600 mt-1">Cambios: el/los, gato/gatos, negro/negros</p>
                      </div>
                      <div className="bg-white border-2 border-blue-600 rounded p-3">
                        <p className="font-bold text-blue-700">La casa nueva → Las casas nuevas</p>
                        <p className="text-sm font-bold text-gray-600 mt-1">Cambios: la/las, casa/casas, nueva/nuevas</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actividad 2: Matching with Guidance */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-blue-800 mb-4">🔗 Actividad 2: Matching with Guidance</h3>

                  <div className="bg-blue-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Emparejar elementos que concuerdan, reforzando el reconocimiento del patrón.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Proporcionar dos columnas: sustantivos + adjetivos</li>
                      <li>Los estudiantes unen los que concuerdan en género/número</li>
                      <li>Se hace de forma guiada, con el Sentence Builder visible</li>
                      <li>El profesor pregunta: "¿Por qué estos dos van juntos?"</li>
                      <li>Los estudiantes verbalizan el patrón observado</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">EJEMPLO:</p>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <p className="font-black mb-2">Columna A:</p>
                        <p className="font-bold">• El niño</p>
                        <p className="font-bold">• La niña</p>
                        <p className="font-bold">• Los gatos</p>
                      </div>
                      <div>
                        <p className="font-black mb-2">Columna B:</p>
                        <p className="font-bold">• altos</p>
                        <p className="font-bold">• alta</p>
                        <p className="font-bold">• alto</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actividad 3: Color Sorting */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-blue-800 mb-4">🎨 Actividad 3: Color Sorting</h3>

                  <div className="bg-blue-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Clasificar palabras según su género/número usando códigos visuales.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Asignar colores: masculino singular (azul), femenino singular (rosa), plural (verde)</li>
                      <li>Presentar lista de sustantivos + adjetivos</li>
                      <li>Los estudiantes los clasifican por color según su categoría</li>
                      <li>Discutir las pistas visuales (terminaciones -o, -a, -os, -as)</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-blue-600 border-4 border-black rounded-xl p-4 text-center"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <p className="text-white font-black text-lg">⚡ RESULTADO: Los estudiantes ahora ven conscientemente el patrón que antes solo escuchaban</p>
                </div>
              </div>
            )}

            {/* MODAL: RECEPTIVE PROCESSING */}
            {openPhaseModal === 'receptive' && (
              <div className="space-y-6">
                <div className="bg-green-600 border-4 border-black rounded-xl px-6 py-4 mb-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.9)" }}>
                  <h2 className="text-4xl font-black text-white">FASE 3: RECEPTIVE PROCESSING</h2>
                  <p className="text-xl font-bold text-green-100 mt-2">Comprensión activa del input</p>
                </div>

                {/* Actividad 1: Listening Discrimination */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-green-800 mb-4">👂 Actividad 1: Listening Discrimination</h3>

                  <div className="bg-green-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Procesar el input auditivo y demostrar comprensión mediante selección visual.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>El profesor lee/reproduce una frase (ej: "La niña es guapa")</li>
                      <li>Los estudiantes ven 3 imágenes opciones</li>
                      <li>Deben seleccionar la imagen correcta que coincide con la frase escuchada</li>
                      <li>Se repite con 8-10 frases diferentes</li>
                      <li>Mínimo 5 repeticiones por patrón clave</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">EJEMPLO:</p>
                    <p className="font-bold text-gray-800 mb-3">Audio: "Los gatos son negros"</p>
                    <p className="font-bold text-gray-700 mb-2">Opciones visuales:</p>
                    <p className="font-bold">A) Imagen de un gato negro (singular)</p>
                    <p className="font-bold">B) Imagen de dos gatos negros ✓</p>
                    <p className="font-bold">C) Imagen de dos gatos blancos</p>
                  </div>
                </div>

                {/* Actividad 2: Sentence Stealer */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-green-800 mb-4">🎯 Actividad 2: Sentence Stealer</h3>

                  <div className="bg-green-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Identificar frases específicas dentro de un flujo de input oral, reforzando atención selectiva.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Cada estudiante recibe una frase escrita del Sentence Builder</li>
                      <li>El profesor lee en voz alta 10-12 frases aleatorias</li>
                      <li>Cuando un estudiante escucha SU frase, debe levantarse y decir "¡Yo!"</li>
                      <li>El primero en identificarla gana un punto</li>
                      <li>Repetir varias rondas con frases diferentes</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">EJEMPLO:</p>
                    <p className="font-bold text-gray-800">Estudiante A tiene: "Las casas son nuevas"</p>
                    <p className="font-bold text-gray-800 mt-2">Profesor lee:</p>
                    <p className="font-bold text-green-700">1. El niño es alto</p>
                    <p className="font-bold text-green-700">2. Las casas son nuevas ← ¡Estudiante A dice "Yo"!</p>
                  </div>
                </div>

                {/* Actividad 3: Gap-filling (Listening) */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-green-800 mb-4">📝 Actividad 3: Gap-filling (Listening)</h3>

                  <div className="bg-green-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Completar frases escritas con el elemento faltante que se escucha.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Los estudiantes tienen frases escritas con espacios en blanco</li>
                      <li>El profesor lee la frase completa</li>
                      <li>Los estudiantes escriben la palabra que falta (artículo, adjetivo, etc.)</li>
                      <li>Se corrige en grupo señalando pistas del Sentence Builder</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">EJEMPLO:</p>
                    <p className="font-bold text-gray-800 mb-2">Escrito: "_____ niña es _____"</p>
                    <p className="font-bold text-gray-800">Audio: "La niña es guapa"</p>
                    <p className="font-bold text-green-700 mt-2">Respuesta: "La niña es guapa"</p>
                  </div>
                </div>

                {/* Actividad 4: Listening Slalom */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-green-800 mb-4">⚡ Actividad 4: Listening Slalom</h3>

                  <div className="bg-green-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Procesamiento rápido de múltiples estímulos auditivos en secuencia.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>El profesor lee frases rápidamente (una cada 3-4 segundos)</li>
                      <li>Los estudiantes indican si son correctas o incorrectas (pulgar arriba/abajo)</li>
                      <li>Incluir errores intencionales de concordancia</li>
                      <li>Aumentar velocidad progresivamente</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-green-600 border-4 border-black rounded-xl p-4 text-center"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <p className="text-white font-black text-lg">⚡ RESULTADO: Los estudiantes comprenden perfectamente el patrón antes de tener que producirlo</p>
                </div>
              </div>
            )}

            {/* MODAL: STRUCTURED PRODUCTION */}
            {openPhaseModal === 'structured' && (
              <div className="space-y-6">
                <div className="bg-yellow-600 border-4 border-black rounded-xl px-6 py-4 mb-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.9)" }}>
                  <h2 className="text-4xl font-black text-white">FASE 4: STRUCTURED PRODUCTION</h2>
                  <p className="text-xl font-bold text-yellow-100 mt-2">Primera producción oral guiada</p>
                </div>

                {/* Actividad 1: Substitution Drill */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-yellow-800 mb-4">🔄 Actividad 1: Substitution Drill</h3>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Producir oralmente el patrón haciendo cambios mínimos en una frase modelo.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>El profesor da una frase completa como modelo</li>
                      <li>Luego da un "cue" (palabra nueva a sustituir)</li>
                      <li>Los estudiantes repiten la frase haciendo el cambio necesario</li>
                      <li>Se practica en coro primero, luego individualmente</li>
                      <li>Se hace rápido y con mucha repetición (15-20 sustituciones)</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-3">EJEMPLO COMPLETO:</p>
                    <p className="font-bold text-gray-800">Profesor: "Repite: El niño es alto"</p>
                    <p className="font-bold text-gray-600">Estudiantes: "El niño es alto"</p>
                    <p className="font-bold text-yellow-700 mt-3">Profesor: "Niña" (cue)</p>
                    <p className="font-bold text-gray-600">Estudiantes: "La niña es alta"</p>
                    <p className="font-bold text-yellow-700 mt-3">Profesor: "Guapo" (cue)</p>
                    <p className="font-bold text-gray-600">Estudiantes: "La niña es guapa"</p>
                    <p className="font-bold text-yellow-700 mt-3">Profesor: "Gatos" (cue)</p>
                    <p className="font-bold text-gray-600">Estudiantes: "Los gatos son guapos"</p>
                  </div>
                </div>

                {/* Actividad 2: Visual Prompted Production */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-yellow-800 mb-4">🖼️ Actividad 2: Visual Prompted Production</h3>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Generar frases a partir de estímulos visuales, usando el Sentence Builder como soporte.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Mostrar una imagen (ej: dos perros grandes)</li>
                      <li>Los estudiantes construyen la frase usando el Sentence Builder visible</li>
                      <li>Dicen la frase en voz alta</li>
                      <li>El profesor confirma o corrige inmediatamente</li>
                      <li>Repetir con 10-12 imágenes diferentes</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">EJEMPLO:</p>
                    <p className="font-bold text-gray-800">Imagen: 🐕🐕 (dos perros grandes)</p>
                    <p className="font-bold text-yellow-700 mt-2">Estudiante construye mirando el SB: "Los perros son grandes"</p>
                  </div>
                </div>

                {/* Actividad 3: Weaning Off */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-yellow-800 mb-4">🎓 Actividad 3: Weaning Off (Desconexión progresiva)</h3>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Reducir gradualmente la dependencia del Sentence Builder.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Ronda 1: Sentence Builder completamente visible</li>
                      <li>Ronda 2: Se tapan algunas columnas</li>
                      <li>Ronda 3: Solo quedan visibles las terminaciones clave</li>
                      <li>Ronda 4: Sin apoyo visual (memoria)</li>
                      <li>Los estudiantes producen las mismas frases en cada ronda</li>
                    </ol>
                  </div>
                </div>

                {/* Actividad 4: Oral Translation Game */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-yellow-800 mb-4">🌍 Actividad 4: Oral Translation Game</h3>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Traducir oralmente frases simples aplicando el patrón aprendido.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>El profesor dice una frase en lengua materna</li>
                      <li>Los estudiantes la traducen al español oralmente</li>
                      <li>Se hace en equipos para reducir ansiedad</li>
                      <li>Sentence Builder disponible como soporte</li>
                      <li>10-12 traducciones en 3-4 minutos (ritmo rápido)</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">EJEMPLO:</p>
                    <p className="font-bold text-gray-800">Profesor: "The girls are pretty"</p>
                    <p className="font-bold text-yellow-700">Equipo: "Las niñas son guapas"</p>
                  </div>
                </div>

                <div className="bg-yellow-600 border-4 border-black rounded-xl p-4 text-center"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <p className="text-white font-black text-lg">⚡ RESULTADO: Los estudiantes producen el patrón correctamente con alta precisión</p>
                </div>
              </div>
            )}

            {/* MODAL: EXPANSION */}
            {openPhaseModal === 'expansion' && (
              <div className="space-y-6">
                <div className="bg-red-600 border-4 border-black rounded-xl px-6 py-4 mb-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.9)" }}>
                  <h2 className="text-4xl font-black text-white">FASE 5: EXPANSION</h2>
                  <p className="text-xl font-bold text-red-100 mt-2">Ampliación y generalización del patrón</p>
                </div>

                {/* Actividad 1: Explicit Grammar Explanation */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-red-800 mb-4">📚 Actividad 1: Explicit Grammar Explanation</h3>

                  <div className="bg-red-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Formalizar la regla que los estudiantes ya dominan implícitamente.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>El profesor pregunta: "¿Qué patrón habéis notado?"</li>
                      <li>Los estudiantes verbalizan sus observaciones</li>
                      <li>El profesor sistematiza: "En español, los adjetivos concuerdan en género y número..."</li>
                      <li>Se presenta una tabla/esquema con las terminaciones (-o/-a/-os/-as)</li>
                      <li>Se conecta la regla con todas las actividades previas</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">IMPORTANTE:</p>
                    <p className="font-bold text-red-700">Esta explicación llega DESPUÉS de que los estudiantes ya saben usar el patrón. Es para consolidar, no para introducir.</p>
                  </div>
                </div>

                {/* Actividad 2: Generative Practice */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-red-800 mb-4">✨ Actividad 2: Generative Practice</h3>

                  <div className="bg-red-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Crear frases originales aplicando el patrón de forma creativa.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Los estudiantes crean sus propias frases sobre temas personales</li>
                      <li>Ejemplo: "Describe a tu familia usando el patrón"</li>
                      <li>Escriben 5-6 frases originales</li>
                      <li>Las comparten en parejas o pequeños grupos</li>
                      <li>El profesor circula corrigiendo errores</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">EJEMPLO DE PRODUCCIÓN:</p>
                    <p className="font-bold text-gray-800">"Mi madre es alta. Mis hermanos son simpáticos. Mi casa es grande. Los profesores son estrictos."</p>
                  </div>
                </div>

                {/* Actividad 3: Extension with New Vocabulary */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-red-800 mb-4">📖 Actividad 3: Extension with New Vocabulary</h3>

                  <div className="bg-red-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Aplicar el patrón a vocabulario nuevo, demostrando transferencia.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Introducir 10-15 adjetivos nuevos (ej: inteligente, divertido, aburrido)</li>
                      <li>Los estudiantes los incorporan al patrón sin instrucción adicional</li>
                      <li>Crean frases con las nuevas palabras</li>
                      <li>Demuestran que entienden la regla subyacente</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-red-600 border-4 border-black rounded-xl p-4 text-center"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <p className="text-white font-black text-lg">⚡ RESULTADO: Los estudiantes generalizan el patrón a contextos nuevos de forma autónoma</p>
                </div>
              </div>
            )}

            {/* MODAL: AUTONOMY */}
            {openPhaseModal === 'autonomy' && (
              <div className="space-y-6">
                <div className="bg-pink-600 border-4 border-black rounded-xl px-6 py-4 mb-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.9)" }}>
                  <h2 className="text-4xl font-black text-white">FASE 6: AUTONOMY</h2>
                  <p className="text-xl font-bold text-pink-100 mt-2">Evaluación y reflexión autónoma</p>
                </div>

                {/* Actividad 1: Low-Stakes Quiz */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-pink-800 mb-4">📝 Actividad 1: Low-Stakes Quiz</h3>

                  <div className="bg-pink-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Evaluar la adquisición del patrón sin presión, para feedback formativo.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Quiz corto (5-8 preguntas) sobre el patrón trabajado</li>
                      <li>Formato variado: completar huecos, corregir errores, traducción</li>
                      <li>NO cuenta para nota final o puntúa muy poco</li>
                      <li>Se corrige inmediatamente en clase</li>
                      <li>Duración: 3-5 minutos</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-3">EJEMPLO DE PREGUNTAS:</p>
                    <p className="font-bold text-gray-800">1. Completa: "Las casas son _______" (nuevo / nuevas / nuevos)</p>
                    <p className="font-bold text-gray-800 mt-2">2. Corrige el error: "Los niños es altos"</p>
                    <p className="font-bold text-gray-800 mt-2">3. Traduce: "The cats are black"</p>
                  </div>
                </div>

                {/* Actividad 2: Student Reflection */}
                <div className="bg-white border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <h3 className="text-2xl font-black text-pink-800 mb-4">🤔 Actividad 2: Student Reflection</h3>

                  <div className="bg-pink-50 border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-2">OBJETIVO:</p>
                    <p className="font-bold text-gray-800">Fomentar metacognición sobre el proceso de aprendizaje.</p>
                  </div>

                  <div className="bg-white border-3 border-black rounded-lg p-4 mb-4">
                    <p className="font-black text-lg mb-3">PROCEDIMIENTO:</p>
                    <ol className="space-y-2 font-bold text-gray-800 list-decimal list-inside">
                      <li>Los estudiantes completan una reflexión breve (escrita u oral)</li>
                      <li>Preguntas guía: "¿Qué fue fácil/difícil?", "¿Qué estrategia te ayudó más?"</li>
                      <li>Identifican áreas que necesitan más práctica</li>
                      <li>Establecen un objetivo personal para la próxima sesión</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 border-3 border-black rounded-lg p-4">
                    <p className="font-black text-lg mb-2">PROMPTS DE REFLEXIÓN:</p>
                    <p className="font-bold text-gray-800">• "Hoy he aprendido que..."</p>
                    <p className="font-bold text-gray-800">• "Lo más útil fue..."</p>
                    <p className="font-bold text-gray-800">• "Todavía tengo dudas sobre..."</p>
                    <p className="font-bold text-gray-800">• "La próxima vez voy a..."</p>
                  </div>
                </div>

                <div className="bg-pink-600 border-4 border-black rounded-xl p-4 text-center"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.9)" }}>
                  <p className="text-white font-black text-lg">⚡ RESULTADO: Los estudiantes demuestran dominio autónomo y conciencia metacognitiva</p>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* SLIDE 8: Pilar 2 en detalle - Output y Gap-Noticing */}
      {currentSlide === 8 && (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 p-8 lg:p-12 flex flex-col justify-start pt-12 relative overflow-hidden">

          {/* Elementos decorativos - z-0 para que estén detrás */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-sgel-green border-4 border-black rounded-xl transform -rotate-6 opacity-30 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-sgel-yellow border-4 border-black rounded-full transform rotate-12 opacity-30 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal con z-10 */}
          <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col">
            {/* Badge superior */}
            <div className="bg-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block mb-5 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl text-white">PILAR 2 EN DETALLE</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-sgel-green">
              Output y Gap-Noticing
            </h2>

            {/* Layout: Fila superior + Grid inferior */}
            <div className="flex flex-col gap-6 flex-1">

              {/* Fila superior: Output Hypothesis */}
              <div className="bg-white border-4 border-black rounded-2xl p-8"
                style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                <div className="flex items-start gap-8">
                  <div className="w-1/3">
                    <div className="bg-sgel-green border-4 border-black rounded-xl px-6 py-3 text-center mb-4"
                      style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                      <h3 className="text-2xl font-black text-white">Output Hypothesis</h3>
                    </div>
                    <p className="text-lg font-bold text-gray-700">Merrill Swain (1985)</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold mb-4">
                      Comprensión ≠ Producción
                    </p>
                    <p className="text-xl font-bold text-gray-700 leading-relaxed">
                      Producir lenguaje fuerza procesamiento sintáctico profundo y genera conciencia de las propias lagunas (gap-noticing)
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid inferior: 3 tipos de output */}
              <div className="grid grid-cols-3 gap-6 flex-1">

                {/* Output Obligatorio */}
                <div className="bg-white border-4 border-black rounded-2xl p-6 flex flex-col"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <div className="bg-yellow-400 border-4 border-black rounded-lg px-4 py-2 text-center mb-4">
                    <span className="text-lg font-black">TIPO 1</span>
                  </div>
                  <h4 className="text-2xl font-black mb-3 text-sgel-green">Output Obligatorio</h4>
                  <p className="text-base font-bold flex-1">
                    Tareas que requieren uso específico de estructura target (ej: completar huecos, responder preguntas con forma obligada)
                  </p>
                </div>

                {/* Output Guiado */}
                <div className="bg-white border-4 border-black rounded-2xl p-6 flex flex-col"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <div className="bg-yellow-400 border-4 border-black rounded-lg px-4 py-2 text-center mb-4">
                    <span className="text-lg font-black">TIPO 2</span>
                  </div>
                  <h4 className="text-2xl font-black mb-3 text-sgel-green">Output Guiado</h4>
                  <p className="text-base font-bold flex-1">
                    Andamiaje que facilita producción (ej: sentence starters, modelos visuales, chunks de apoyo)
                  </p>
                </div>

                {/* Output Libre */}
                <div className="bg-white border-4 border-black rounded-2xl p-6 flex flex-col"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <div className="bg-yellow-400 border-4 border-black rounded-lg px-4 py-2 text-center mb-4">
                    <span className="text-lg font-black">TIPO 3</span>
                  </div>
                  <h4 className="text-2xl font-black mb-3 text-sgel-green">Output Libre</h4>
                  <p className="text-base font-bold flex-1">
                    Producción espontánea en contexto comunicativo real (ej: role-plays, presentaciones)
                  </p>
                </div>

              </div>

              {/* Footer: Feedback correctivo */}
              <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-6"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <p className="text-xl font-black">
                  Feedback Correctivo (Doughty & Varela, 1998): La retroalimentación inmediata durante producción maximiza notación de brecha
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* SLIDE 8: Pilar 3 en detalle - Integración y Consolidación */}
      {currentSlide === 8 && (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 p-8 lg:p-12 flex flex-col justify-start pt-12 relative overflow-hidden">

          {/* Elementos decorativos - z-0 para que estén detrás */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-sgel-red border-4 border-black rounded-xl transform rotate-12 opacity-30 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 left-10 w-28 h-28 bg-sgel-blue border-4 border-black rounded-full transform -rotate-6 opacity-30 z-0"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal con z-10 */}
          <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col">
            {/* Badge superior */}
            <div className="bg-sgel-red border-4 border-black rounded-full px-8 py-3 inline-block mb-5 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl text-white">PILAR 3 EN DETALLE</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-sgel-red">
              Integración y Consolidación
            </h2>

            {/* Layout: 2x2 Grid con cajas grandes */}
            <div className="grid grid-cols-2 gap-6 flex-1">

              {/* TBLT */}
              <div className="bg-white border-4 border-black rounded-2xl p-8 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-red border-4 border-black rounded-xl px-6 py-3 inline-block mb-5"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-2xl font-black text-white">TBLT (Ellis)</h3>
                </div>
                <p className="text-xl font-bold mb-5">
                  Task-Based Language Teaching
                </p>
                <div className="space-y-4 flex-1">
                  <div className="bg-blue-100 border-4 border-black rounded-lg p-4">
                    <p className="text-lg font-black">1. Pre-task</p>
                    <p className="text-base font-bold text-gray-700">Activación de conocimiento previo</p>
                  </div>
                  <div className="bg-green-100 border-4 border-black rounded-lg p-4">
                    <p className="text-lg font-black">2. Task cycle</p>
                    <p className="text-base font-bold text-gray-700">Uso comunicativo de la lengua</p>
                  </div>
                  <div className="bg-yellow-100 border-4 border-black rounded-lg p-4">
                    <p className="text-lg font-black">3. Post-task</p>
                    <p className="text-base font-bold text-gray-700">Análisis metalingüístico y foco en forma</p>
                  </div>
                </div>
              </div>

              {/* Procesamiento Profundo */}
              <div className="bg-white border-4 border-black rounded-2xl p-8 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-blue border-4 border-black rounded-xl px-6 py-3 inline-block mb-5"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-2xl font-black text-white">Procesamiento Profundo</h3>
                </div>
                <p className="text-xl font-bold mb-5">
                  Craik & Lockhart (1972)
                </p>
                <p className="text-lg font-bold leading-relaxed flex-1">
                  Cuanto más profundo el nivel de procesamiento semántico y cognitivo, mayor la retención a largo plazo. <span className="text-sgel-red">La mera repetición superficial NO basta.</span>
                </p>
              </div>

              {/* Consolidación Espaciada */}
              <div className="bg-white border-4 border-black rounded-2xl p-8 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-yellow border-4 border-black rounded-xl px-6 py-3 inline-block mb-5"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-2xl font-black">Consolidación Espaciada</h3>
                </div>
                <p className="text-xl font-bold mb-5">
                  Henkel (2016) - Spaced Repetition
                </p>
                <p className="text-lg font-bold leading-relaxed flex-1">
                  Revisitas programadas en intervalos crecientes (1 día, 3 días, 1 semana, 2 semanas) previenen olvido y automatizan estructuras
                </p>
              </div>

              {/* Multimodalidad */}
              <div className="bg-white border-4 border-black rounded-2xl p-8 flex flex-col"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-green border-4 border-black rounded-xl px-6 py-3 inline-block mb-5"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-2xl font-black text-white">Multimodalidad</h3>
                </div>
                <p className="text-xl font-bold mb-5">
                  Mayer (2014) - Teoría Cognitiva
                </p>
                <p className="text-lg font-bold leading-relaxed flex-1">
                  Combinar input visual + auditivo + kinestésico activa múltiples canales de procesamiento. <span className="text-sgel-green">Respuesta a la crítica de Carroll sobre mecanismo subyacente.</span>
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* SLIDE 9: Ciclo Completo Integrado */}
      {currentSlide === 9 && (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-8 lg:p-12 flex flex-col justify-start pt-12 relative overflow-hidden">

          {/* Elementos decorativos - z-0 para que estén detrás */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sgel-yellow border-4 border-black rounded-full transform rotate-12 opacity-20 z-0"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-sgel-blue border-4 border-black rounded-full transform -rotate-12 opacity-20 z-0"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>

          {/* Contenido principal con z-10 */}
          <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col">
            {/* Badge superior */}
            <div className="bg-purple-600 border-4 border-black rounded-full px-8 py-3 inline-block mb-5 w-fit"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-2xl text-white">CICLO INTEGRADO</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-purple-800">
              Cómo se Integran los 3 Pilares
            </h2>

            {/* Layout: Diagrama de flujo vertical con flechas */}
            <div className="flex flex-col gap-6 flex-1 justify-center">

              {/* FASE 1: Atención al Input */}
              <div className="bg-white border-4 border-black rounded-2xl p-6 flex items-center gap-6"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-yellow border-4 border-black rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-2 text-sgel-blue">Atención al Input</h3>
                  <p className="text-xl font-bold text-gray-700">Chunks procesables mediante MARS EARS + Input Processing</p>
                </div>
              </div>

              {/* Flecha hacia abajo */}
              <div className="flex justify-center">
                <div className="text-6xl font-black text-gray-400">↓</div>
              </div>

              {/* FASE 2: Output Obligatorio y Gap-Noticing */}
              <div className="bg-white border-4 border-black rounded-2xl p-6 flex items-center gap-6"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-green border-4 border-black rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-2 text-sgel-green">Output Obligatorio y Gap-Noticing</h3>
                  <p className="text-xl font-bold text-gray-700">Producción guiada + Feedback correctivo inmediato</p>
                </div>
              </div>

              {/* Flecha hacia abajo */}
              <div className="flex justify-center">
                <div className="text-6xl font-black text-gray-400">↓</div>
              </div>

              {/* FASE 3: Reflexión Metalingüística */}
              <div className="bg-white border-4 border-black rounded-2xl p-6 flex items-center gap-6"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-blue border-4 border-black rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-2 text-sgel-blue">Reflexión Metalingüística</h3>
                  <p className="text-xl font-bold text-gray-700">Análisis explícito del patrón: ¿qué notaste? ¿por qué funciona así?</p>
                </div>
              </div>

              {/* Flecha hacia abajo */}
              <div className="flex justify-center">
                <div className="text-6xl font-black text-gray-400">↓</div>
              </div>

              {/* FASE 4: Consolidación Multimodal Espaciada */}
              <div className="bg-white border-4 border-black rounded-2xl p-6 flex items-center gap-6"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="bg-sgel-red border-4 border-black rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-3xl font-black text-white">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-2 text-sgel-red">Consolidación Multimodal Espaciada</h3>
                  <p className="text-xl font-bold text-gray-700">Revisitas programadas (1d, 3d, 1sem, 2sem) en tareas comunicativas reales</p>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="bg-purple-600 border-4 border-black rounded-2xl p-5 mt-6"
              style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
              <p className="text-xl font-black text-white text-center">
                Resultado: Automatización de estructuras con conciencia metalingüística duradera
              </p>
            </div>

          </div>

        </div>
      )}

      {/* MODAL EXPLICATIVO - Se abre al hacer clic en tarjetas rojas */}
      {openModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}>
          <div
            className="bg-white border-8 border-black rounded-3xl p-10 max-w-4xl w-[90%] max-h-[85vh] overflow-y-auto relative"
            style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.9)" }}
            onClick={(e) => e.stopPropagation()}>

            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-sgel-red border-4 border-black rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl font-black hover:bg-red-600 transition-colors"
              style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
              ✕
            </button>

            {/* Contenido del modal según la tarjeta */}
            {openModal === 1 && (
              <div>
                <div className="bg-sgel-red border-4 border-black rounded-2xl px-6 py-4 mb-6 inline-block"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <h2 className="text-4xl font-black text-white">Asunción incorrecta</h2>
                </div>

                <div className="bg-red-100 border-4 border-black rounded-xl p-6 mb-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-2xl font-black mb-3">LA LIMITACIÓN:</p>
                  <p className="text-xl font-bold text-gray-800 leading-relaxed">
                    Input solo NO genera producción autónoma
                  </p>
                </div>

                <div className="bg-white border-4 border-black rounded-xl p-8 space-y-5">
                  <div>
                    <p className="text-3xl font-black mb-4 text-sgel-red">POR QUÉ NO LO APROVECHAMOS:</p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                      <strong>Merrill Swain</strong> (1985, 1995) demostró con su <strong>Output Hypothesis</strong> que
                      el input comprensible (Krashen) es <strong>necesario pero NO suficiente</strong> para desarrollar
                      competencia productiva completa.
                    </p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                      Los estudiantes pueden <strong>entender perfectamente</strong> estructuras gramaticales cuando las leen
                      o escuchan, pero <strong>no logran producirlas</strong> de forma autónoma en su propia habla o escritura.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-4 border-black rounded-lg p-5">
                    <p className="text-xl font-black mb-3">EVIDENCIA CLAVE:</p>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed">
                      Estudios con estudiantes de inmersión francés en Canadá mostraron que tras años de exposición intensiva
                      a input comprensible, los estudiantes alcanzaban excelente comprensión pero mantenían errores fosilizados
                      en producción oral y escrita.
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-black mb-3">LA SOLUCIÓN EN NUESTRA PROPUESTA:</p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed">
                      Por eso complementamos el input processing con <strong>output forzado</strong>, feedback correctivo
                      inmediato, y práctica productiva guiada para desarrollar fluidez y precisión en producción.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {openModal === 2 && (
              <div>
                <div className="bg-sgel-red border-4 border-black rounded-2xl px-6 py-4 mb-6 inline-block"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <h2 className="text-4xl font-black text-white">Limitación de Shintani</h2>
                </div>

                <div className="bg-red-100 border-4 border-black rounded-xl p-6 mb-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-2xl font-black mb-3">LA LIMITACIÓN:</p>
                  <p className="text-xl font-bold text-gray-800 leading-relaxed">
                    El efecto NO fue significativo para conocimiento productivo
                  </p>
                </div>

                <div className="bg-white border-4 border-black rounded-xl p-8 space-y-5">
                  <div>
                    <p className="text-3xl font-black mb-4 text-sgel-red">POR QUÉ NO LO APROVECHAMOS:</p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                      El metaanálisis de <strong>Shintani (2015)</strong> sobre Input Processing muestra un tamaño
                      del efecto impresionante de <strong>d = 0.82</strong> (efecto grande según Cohen).
                    </p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                      <strong>PERO</strong> este efecto solo se observó para <strong>conocimiento receptivo</strong>
                      (comprensión auditiva y lectora). Cuando los estudios evaluaron <strong>producción oral o escrita</strong>,
                      el efecto <strong>no fue estadísticamente significativo</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-4 border-black rounded-lg p-5">
                    <p className="text-xl font-black mb-3">DATOS ESPECÍFICOS:</p>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed mb-3">
                      - Comprensión receptiva: <strong>d = 0.82</strong> (p &lt; .001)
                    </p>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed mb-3">
                      - Producción oral: <strong>d = 0.31</strong> (no significativo)
                    </p>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed">
                      - Producción escrita: <strong>d = 0.28</strong> (no significativo)
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-black mb-3">LA SOLUCIÓN EN NUESTRA PROPUESTA:</p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed">
                      Usamos Input Processing para construir <strong>conocimiento receptivo sólido</strong> (donde SÍ funciona),
                      pero lo complementamos obligatoriamente con <strong>práctica productiva explícita</strong>, output forzado
                      y consolidación espaciada para desarrollar fluidez productiva.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {openModal === 3 && (
              <div>
                <div className="bg-sgel-red border-4 border-black rounded-2xl px-6 py-4 mb-6 inline-block"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <h2 className="text-4xl font-black text-white">Explicación explícita</h2>
                </div>

                <div className="bg-red-100 border-4 border-black rounded-xl p-6 mb-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-2xl font-black mb-3">LA LIMITACIÓN:</p>
                  <p className="text-xl font-bold text-gray-800 leading-relaxed">
                    Dar la regla metalingüística después NO mejora el aprendizaje (puede interferir)
                  </p>
                </div>

                <div className="bg-white border-4 border-black rounded-xl p-8 space-y-5">
                  <div>
                    <p className="text-3xl font-black mb-4 text-sgel-red">POR QUÉ NO LO APROVECHAMOS:</p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                      <strong>VanPatten</strong> advierte que proporcionar <strong>explicaciones metalingüísticas explícitas</strong>
                      (ej: "en español, los adjetivos deben concordar en género y número con el sustantivo") puede
                      <strong>interferir con el procesamiento natural del input</strong>.
                    </p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                      Cuando damos la regla explícita, el cerebro del estudiante se centra en la <strong>forma abstracta</strong>
                      de la regla en lugar de procesar los <strong>ejemplos concretos significativos</strong> del input estructurado.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-4 border-black rounded-lg p-5">
                    <p className="text-xl font-black mb-3">PROBLEMA COGNITIVO:</p>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed">
                      La atención tiene <strong>capacidad limitada</strong>. Si la dirigimos a entender una regla gramatical
                      abstracta, <strong>no queda capacidad</strong> para procesar el significado comunicativo del input,
                      que es lo que realmente construye representaciones mentales duraderas.
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-black mb-3">LA SOLUCIÓN EN NUESTRA PROPUESTA:</p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed">
                      En lugar de dar la regla, usamos <strong>inferencia guiada</strong>: el estudiante procesa múltiples
                      ejemplos del patrón en contextos significativos y <strong>descubre inductivamente</strong> la regularidad.
                      La reflexión metalingüística viene <strong>después</strong>, en la fase post-task, cuando ya hay
                      representación mental del patrón.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {openModal === 4 && (
              <div>
                <div className="bg-sgel-red border-4 border-black rounded-2xl px-6 py-4 mb-6 inline-block"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <h2 className="text-4xl font-black text-white">Una sola exposición</h2>
                </div>

                <div className="bg-red-100 border-4 border-black rounded-xl p-6 mb-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-2xl font-black mb-3">LA LIMITACIÓN:</p>
                  <p className="text-xl font-bold text-gray-800 leading-relaxed">
                    Una sola exposición se olvida en menos de 24 horas sin consolidación espaciada
                  </p>
                </div>

                <div className="bg-white border-4 border-black rounded-xl p-8 space-y-5">
                  <div>
                    <p className="text-3xl font-black mb-4 text-sgel-red">POR QUÉ NO LO APROVECHAMOS:</p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                      La investigación de <strong>Henkel et al. (2021)</strong> sobre consolidación de memoria demostró
                      que <strong>una sola exposición</strong> a un patrón lingüístico, incluso si se procesa profundamente,
                      <strong>se olvida en menos de 24 horas</strong> sin reactivación posterior.
                    </p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
                      El conocimiento recién adquirido permanece en la <strong>memoria de trabajo</strong> y
                      <strong>no se consolida en memoria a largo plazo</strong> sin exposiciones posteriores espaciadas en el tiempo.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-4 border-black rounded-lg p-5">
                    <p className="text-xl font-black mb-3">EFECTO DE ESPACIADO (SPACING EFFECT):</p>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed mb-3">
                      La <strong>repetición espaciada</strong> con intervalos crecientes (1 día → 3 días → 1 semana → 2 semanas)
                      es <strong>hasta 10 veces más efectiva</strong> que la práctica masiva concentrada.
                    </p>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed">
                      Cada reactivación <strong>refuerza las conexiones neuronales</strong> y hace el recuerdo más duradero y automático.
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-black mb-3">LA SOLUCIÓN EN NUESTRA PROPUESTA:</p>
                    <p className="text-lg font-bold text-gray-800 leading-relaxed">
                      Nuestras cápsulas incluyen <strong>reactivación programada</strong> de estructuras previamente vistas.
                      Cada patrón gramatical reaparece en <strong>intervalos espaciados óptimos</strong> en nuevas actividades
                      comunicativas, asegurando consolidación duradera y automatización.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
