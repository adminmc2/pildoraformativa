"use client";
import { useState } from "react";

export default function PropuestaMetodologicaPage() {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="relative min-h-screen w-full bg-white">

      {/* Navegación entre slides */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 flex-wrap max-w-md">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentSlide(num)}
            className={`w-10 h-10 rounded-full font-bold border-4 border-black transition-all ${
              currentSlide === num
                ? "bg-sgel-yellow text-black scale-110"
                : "bg-white text-black hover:bg-sgel-yellow"
            }`}
            style={{
              boxShadow: currentSlide === num ? "4px 4px 0px rgba(0,0,0,0.8)" : "2px 2px 0px rgba(0,0,0,0.8)"
            }}
          >
            {num}
          </button>
        ))}
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

              {/* Emoji decorativo */}
              <div className="text-9xl mb-8">📚</div>

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
                  <span className="font-black text-2xl text-white">2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 2: ¿Qué es el Microlearning? */}
      {currentSlide === 2 && (
        <div className="min-h-screen bg-sgel-blue p-8 flex items-center justify-center relative overflow-hidden">

          {/* Decoraciones */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-sgel-yellow border-4 border-black rounded-full"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-sgel-red border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>

          <div className="max-w-5xl">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>

              {/* Badge superior */}
              <div className="bg-sgel-yellow border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl">CONCEPTO</span>
              </div>

              {/* Título */}
              <h2 className="text-6xl font-black mb-10">
                ¿Qué es el Microlearning?
              </h2>

              {/* Contenido en grid 2x2 */}
              <div className="grid grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-5xl mb-4">⏱️</div>
                  <h3 className="text-2xl font-black mb-3">Cápsulas cortas</h3>
                  <p className="text-lg font-bold">Contenidos de 5-10 minutos máximo</p>
                </div>

                {/* Card 2 */}
                <div className="bg-sgel-green border-4 border-black rounded-2xl p-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-black mb-3">Enfoque específico</h3>
                  <p className="text-lg font-bold">Un concepto gramatical por sesión</p>
                </div>

                {/* Card 3 */}
                <div className="bg-sgel-red border-4 border-black rounded-2xl p-6 text-white"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-5xl mb-4">📱</div>
                  <h3 className="text-2xl font-black mb-3">Digital-first</h3>
                  <p className="text-lg font-bold">Accesible desde cualquier dispositivo</p>
                </div>

                {/* Card 4 */}
                <div className="bg-sgel-blue border-4 border-black rounded-2xl p-6 text-white"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-5xl mb-4">♻️</div>
                  <h3 className="text-2xl font-black mb-3">Repetible</h3>
                  <p className="text-lg font-bold">El estudiante controla su ritmo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 3: Aprendizaje Inferencial */}
      {currentSlide === 3 && (
        <div className="min-h-screen bg-sgel-yellow p-8 flex items-center justify-center relative overflow-hidden">

          {/* Decoraciones */}
          <div className="absolute top-10 right-10 w-36 h-36 bg-sgel-blue border-4 border-black rounded-full"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-sgel-red border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>

          <div className="max-w-6xl">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>

              {/* Badge superior */}
              <div className="bg-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl text-white">METODOLOGÍA</span>
              </div>

              {/* Título */}
              <h2 className="text-6xl font-black mb-8">
                Aprendizaje Inferencial
              </h2>

              <p className="text-2xl font-bold text-gray-700 mb-10">
                Los estudiantes descubren las reglas gramaticales a través de ejemplos y patrones
              </p>

              {/* Timeline horizontal */}
              <div className="relative">
                {/* Línea horizontal */}
                <div className="absolute top-16 left-0 right-0 h-2 bg-black"></div>

                <div className="grid grid-cols-3 gap-8 relative z-10">
                  {/* Paso 1 */}
                  <div className="text-center">
                    <div className="bg-sgel-red border-4 border-black rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6"
                      style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                      <span className="text-white font-black text-5xl">1</span>
                    </div>
                    <div className="bg-sgel-yellow border-4 border-black rounded-xl p-6"
                      style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                      <h3 className="text-2xl font-black mb-3">Observar</h3>
                      <p className="text-lg font-bold">Ejemplos reales en contexto</p>
                    </div>
                  </div>

                  {/* Paso 2 */}
                  <div className="text-center">
                    <div className="bg-sgel-blue border-4 border-black rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6"
                      style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                      <span className="text-white font-black text-5xl">2</span>
                    </div>
                    <div className="bg-sgel-green border-4 border-black rounded-xl p-6"
                      style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                      <h3 className="text-2xl font-black mb-3 text-white">Analizar</h3>
                      <p className="text-lg font-bold text-white">Identificar patrones</p>
                    </div>
                  </div>

                  {/* Paso 3 */}
                  <div className="text-center">
                    <div className="bg-sgel-green border-4 border-black rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6"
                      style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                      <span className="text-black font-black text-5xl">3</span>
                    </div>
                    <div className="bg-sgel-red border-4 border-black rounded-xl p-6 text-white"
                      style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                      <h3 className="text-2xl font-black mb-3">Inferir</h3>
                      <p className="text-lg font-bold">Deducir la regla</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 4: Para Adolescentes */}
      {currentSlide === 4 && (
        <div className="min-h-screen bg-sgel-green p-8 flex items-center justify-center relative overflow-hidden">

          {/* Decoraciones */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-sgel-yellow border-4 border-black rounded-full"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-sgel-blue border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>

          <div className="max-w-5xl">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>

              {/* Badge superior */}
              <div className="bg-sgel-red border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl text-white">PÚBLICO OBJETIVO</span>
              </div>

              {/* Título */}
              <h2 className="text-6xl font-black mb-10">
                Diseñado para Adolescentes
              </h2>

              {/* Lista de características */}
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-6">
                  <div className="text-8xl font-black text-gray-300">01</div>
                  <div className="flex-1 bg-sgel-yellow border-4 border-black rounded-2xl p-6"
                    style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                    <h3 className="text-3xl font-black mb-2">Contenidos relevantes</h3>
                    <p className="text-xl font-bold">Temas cercanos a su realidad y intereses</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-6">
                  <div className="text-8xl font-black text-gray-300">02</div>
                  <div className="flex-1 bg-sgel-blue border-4 border-black rounded-2xl p-6 text-white"
                    style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                    <h3 className="text-3xl font-black mb-2">Interactividad digital</h3>
                    <p className="text-xl font-bold">Animaciones, efectos visuales y gamificación</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-6">
                  <div className="text-8xl font-black text-gray-300">03</div>
                  <div className="flex-1 bg-sgel-red border-4 border-black rounded-2xl p-6 text-white"
                    style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                    <h3 className="text-3xl font-black mb-2">Autonomía de aprendizaje</h3>
                    <p className="text-xl font-bold">Control sobre ritmo, tiempo y progreso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 5: Transformación Digital */}
      {currentSlide === 5 && (
        <div className="min-h-screen bg-sgel-red p-8 flex items-center justify-center relative overflow-hidden">

          {/* Decoraciones */}
          <div className="absolute top-20 left-20 w-36 h-36 bg-sgel-yellow border-4 border-black rounded-full"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-sgel-green border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>

          <div className="max-w-6xl">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>

              {/* Badge superior */}
              <div className="bg-sgel-blue border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl text-white">TRANSFORMACIÓN</span>
              </div>

              {/* Título */}
              <h2 className="text-5xl font-black mb-8">
                De Materiales Tradicionales<br />a Experiencias Digitales
              </h2>

              {/* Comparación Before/After */}
              <div className="grid grid-cols-2 gap-8">
                {/* Antes */}
                <div>
                  <div className="bg-gray-200 border-4 border-black rounded-2xl p-8 mb-4"
                    style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                    <div className="bg-gray-400 border-4 border-black rounded-full px-6 py-2 inline-block mb-6"
                      style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                      <span className="font-black text-xl">ANTES</span>
                    </div>
                    <div className="text-6xl mb-4">📄</div>
                    <ul className="space-y-3 text-lg font-bold">
                      <li>❌ Fotocopias en blanco y negro</li>
                      <li>❌ Ejercicios repetitivos</li>
                      <li>❌ Sin feedback inmediato</li>
                      <li>❌ Estático y lineal</li>
                      <li>❌ Poco atractivo visual</li>
                    </ul>
                  </div>
                </div>

                {/* Después */}
                <div>
                  <div className="bg-gradient-to-br from-sgel-yellow via-sgel-green to-sgel-blue border-4 border-black rounded-2xl p-8 mb-4"
                    style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                    <div className="bg-white border-4 border-black rounded-full px-6 py-2 inline-block mb-6"
                      style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                      <span className="font-black text-xl">AHORA</span>
                    </div>
                    <div className="text-6xl mb-4">✨</div>
                    <ul className="space-y-3 text-lg font-bold text-white">
                      <li>✅ Contenidos interactivos</li>
                      <li>✅ Animaciones y efectos</li>
                      <li>✅ Feedback en tiempo real</li>
                      <li>✅ Dinámico y adaptativo</li>
                      <li>✅ Diseño visual atractivo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 6: Materiales Complementarios */}
      {currentSlide === 6 && (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-8 flex items-center justify-center relative overflow-hidden">

          {/* Decoraciones */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white border-4 border-black rounded-full opacity-50"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-white border-4 border-black rounded-xl transform rotate-45 opacity-50"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>

          <div className="max-w-6xl">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>

              {/* Badge superior */}
              <div className="bg-sgel-yellow border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl">CONTENIDOS</span>
              </div>

              {/* Título */}
              <h2 className="text-5xl font-black mb-10">
                Materiales Complementarios<br />de Español
              </h2>

              {/* Grid de materiales */}
              <div className="grid grid-cols-3 gap-6">
                {/* Material 1 */}
                <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-6 text-center"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-2xl font-black mb-2">Gramática</h3>
                  <p className="text-lg font-bold">Reglas y estructuras</p>
                </div>

                {/* Material 2 */}
                <div className="bg-sgel-green border-4 border-black rounded-2xl p-6 text-center text-white"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-2xl font-black mb-2">Vocabulario</h3>
                  <p className="text-lg font-bold">Léxico contextualizado</p>
                </div>

                {/* Material 3 */}
                <div className="bg-sgel-blue border-4 border-black rounded-2xl p-6 text-center text-white"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-black mb-2">Ejercicios</h3>
                  <p className="text-lg font-bold">Práctica interactiva</p>
                </div>

                {/* Material 4 */}
                <div className="bg-sgel-red border-4 border-black rounded-2xl p-6 text-center text-white"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-2xl font-black mb-2">Lecturas</h3>
                  <p className="text-lg font-bold">Textos adaptados</p>
                </div>

                {/* Material 5 */}
                <div className="bg-purple-500 border-4 border-black rounded-2xl p-6 text-center text-white"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-2xl font-black mb-2">Visuales</h3>
                  <p className="text-lg font-bold">Imágenes y gráficos</p>
                </div>

                {/* Material 6 */}
                <div className="bg-pink-500 border-4 border-black rounded-2xl p-6 text-center text-white"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-6xl mb-4">🎮</div>
                  <h3 className="text-2xl font-black mb-2">Gamificación</h3>
                  <p className="text-lg font-bold">Mecánicas de juego</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 7: Ejemplo Práctico - El Plural */}
      {currentSlide === 7 && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-8 flex items-center justify-center relative overflow-hidden">

          {/* Decoraciones */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-sgel-red border-4 border-black rounded-full"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 left-10 w-28 h-28 bg-sgel-blue border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>

          <div className="max-w-6xl">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>

              {/* Badge superior */}
              <div className="bg-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl text-white">EJEMPLO PRÁCTICO</span>
              </div>

              {/* Título */}
              <h2 className="text-5xl font-black mb-6">
                Unidad 2: El Plural de Nombres<br />y Adjetivos
              </h2>

              <p className="text-2xl font-bold text-gray-700 mb-10">
                Así transformamos una lección tradicional en una experiencia de microlearning
              </p>

              {/* Grid de slides ejemplo */}
              <div className="grid grid-cols-5 gap-4">
                {/* Mini slide 1 */}
                <div className="bg-sgel-yellow border-4 border-black rounded-xl p-4 text-center"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-3xl mb-2">1️⃣</div>
                  <p className="text-sm font-black">Portada animada</p>
                </div>

                {/* Mini slide 2 */}
                <div className="bg-sgel-blue border-4 border-black rounded-xl p-4 text-center text-white"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-3xl mb-2">2️⃣</div>
                  <p className="text-sm font-black">Ejemplos visuales</p>
                </div>

                {/* Mini slide 3 */}
                <div className="bg-sgel-green border-4 border-black rounded-xl p-4 text-center text-white"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-3xl mb-2">3️⃣</div>
                  <p className="text-sm font-black">Análisis de patrones</p>
                </div>

                {/* Mini slide 4 */}
                <div className="bg-sgel-red border-4 border-black rounded-xl p-4 text-center text-white"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-3xl mb-2">4️⃣</div>
                  <p className="text-sm font-black">Regla inferida</p>
                </div>

                {/* Mini slide 5 */}
                <div className="bg-purple-500 border-4 border-black rounded-xl p-4 text-center text-white"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-3xl mb-2">5️⃣</div>
                  <p className="text-sm font-black">Práctica interactiva</p>
                </div>
              </div>

              {/* Características técnicas */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="bg-gray-100 border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-4xl mb-3">⏱️</div>
                  <h3 className="text-xl font-black mb-2">Duración</h3>
                  <p className="text-lg font-bold">8-10 minutos</p>
                </div>

                <div className="bg-gray-100 border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="text-xl font-black mb-2">Interactividad</h3>
                  <p className="text-lg font-bold">30+ componentes</p>
                </div>

                <div className="bg-gray-100 border-4 border-black rounded-xl p-6"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="text-xl font-black mb-2">Responsive</h3>
                  <p className="text-lg font-bold">Multi-dispositivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 8: Tecnología Next.js */}
      {currentSlide === 8 && (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 p-8 flex items-center justify-center relative overflow-hidden">

          {/* Decoraciones tech */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-sgel-yellow border-4 border-black rounded-full opacity-70"
            style={{ boxShadow: "0 0 30px rgba(255,235,59,0.8), 8px 8px 0px rgba(0,0,0,0.9)" }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-sgel-green border-4 border-black rounded-xl transform rotate-45 opacity-70"
            style={{ boxShadow: "0 0 30px rgba(139,195,74,0.8), 8px 8px 0px rgba(0,0,0,0.9)" }}></div>

          <div className="max-w-6xl">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>

              {/* Badge superior */}
              <div className="bg-black border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl text-white">TECNOLOGÍA</span>
              </div>

              {/* Título */}
              <h2 className="text-5xl font-black mb-8">
                Stack Tecnológico Moderno
              </h2>

              <p className="text-2xl font-bold text-gray-700 mb-10">
                Construido con las mejores herramientas del desarrollo web actual
              </p>

              {/* Grid tecnologías */}
              <div className="grid grid-cols-2 gap-8">
                {/* Next.js */}
                <div className="bg-black border-4 border-black rounded-2xl p-8"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-4xl font-black text-white mb-4">Next.js 14</h3>
                  <ul className="space-y-2 text-lg font-bold text-gray-300">
                    <li>✓ App Router moderno</li>
                    <li>✓ Server & Client Components</li>
                    <li>✓ Optimización automática</li>
                    <li>✓ SEO-friendly</li>
                  </ul>
                </div>

                {/* React + TypeScript */}
                <div className="bg-sgel-blue border-4 border-black rounded-2xl p-8 text-white"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-4xl font-black mb-4">React + TypeScript</h3>
                  <ul className="space-y-2 text-lg font-bold">
                    <li>✓ Componentes reutilizables</li>
                    <li>✓ Type-safe code</li>
                    <li>✓ Developer experience</li>
                    <li>✓ Mantenibilidad</li>
                  </ul>
                </div>

                {/* Framer Motion */}
                <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-8"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-4xl font-black mb-4">Framer Motion</h3>
                  <ul className="space-y-2 text-lg font-bold">
                    <li>✓ Animaciones fluidas</li>
                    <li>✓ Transiciones suaves</li>
                    <li>✓ Gestos interactivos</li>
                    <li>✓ Performance optimizado</li>
                  </ul>
                </div>

                {/* Tailwind CSS */}
                <div className="bg-sgel-green border-4 border-black rounded-2xl p-8 text-white"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-4xl font-black mb-4">Tailwind CSS</h3>
                  <ul className="space-y-2 text-lg font-bold">
                    <li>✓ Diseño consistente</li>
                    <li>✓ Responsive por defecto</li>
                    <li>✓ Customización SGEL</li>
                    <li>✓ Desarrollo rápido</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 9: Beneficios */}
      {currentSlide === 9 && (
        <div className="min-h-screen bg-gradient-to-br from-sgel-green via-sgel-blue to-purple-600 p-8 flex items-center justify-center relative overflow-hidden">

          {/* Decoraciones */}
          <div className="absolute top-10 left-10 w-36 h-36 bg-white border-4 border-black rounded-full opacity-50"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white border-4 border-black rounded-xl transform rotate-45 opacity-50"
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}></div>

          <div className="max-w-6xl">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>

              {/* Badge superior */}
              <div className="bg-sgel-red border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl text-white">IMPACTO</span>
              </div>

              {/* Título */}
              <h2 className="text-6xl font-black mb-10">
                Beneficios para Todos
              </h2>

              {/* Tres columnas de beneficiarios */}
              <div className="grid grid-cols-3 gap-8">
                {/* Estudiantes */}
                <div>
                  <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-8 text-center mb-4"
                    style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                    <div className="text-7xl mb-4">🧑‍🎓</div>
                    <h3 className="text-3xl font-black mb-6">Estudiantes</h3>
                    <ul className="text-left space-y-3 text-lg font-bold">
                      <li>✓ Aprenden a su ritmo</li>
                      <li>✓ Más motivación</li>
                      <li>✓ Feedback instantáneo</li>
                      <li>✓ Acceso 24/7</li>
                    </ul>
                  </div>
                </div>

                {/* Profesores */}
                <div>
                  <div className="bg-sgel-blue border-4 border-black rounded-2xl p-8 text-center mb-4 text-white"
                    style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                    <div className="text-7xl mb-4">👨‍🏫</div>
                    <h3 className="text-3xl font-black mb-6">Profesores</h3>
                    <ul className="text-left space-y-3 text-lg font-bold">
                      <li>✓ Material listo</li>
                      <li>✓ Seguimiento digital</li>
                      <li>✓ Personalización</li>
                      <li>✓ Menos preparación</li>
                    </ul>
                  </div>
                </div>

                {/* Editorial */}
                <div>
                  <div className="bg-sgel-green border-4 border-black rounded-2xl p-8 text-center mb-4 text-white"
                    style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                    <div className="text-7xl mb-4">🏢</div>
                    <h3 className="text-3xl font-black mb-6">SGEL</h3>
                    <ul className="text-left space-y-3 text-lg font-bold">
                      <li>✓ Innovación digital</li>
                      <li>✓ Valor añadido</li>
                      <li>✓ Escalabilidad</li>
                      <li>✓ Competitividad</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 10: Conclusión */}
      {currentSlide === 10 && (
        <div className="min-h-screen bg-gradient-to-br from-sgel-yellow via-sgel-green to-sgel-blue p-8 flex items-center justify-center relative overflow-hidden">

          {/* Elementos decorativos animados */}
          <div className="absolute top-20 left-20 animate-bounce">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute top-1/2 right-40">
            <div className="bg-white w-20 h-20 border-4 border-black rounded-full animate-spin"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)", animationDuration: "3s" }}></div>
          </div>
          <div className="absolute bottom-1/3 left-40">
            <div className="bg-sgel-red w-16 h-16 border-4 border-black rounded-xl transform rotate-45"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          </div>

          <div className="max-w-6xl text-center relative z-10">
            <div className="bg-white border-4 border-black rounded-[4rem] p-16"
              style={{ boxShadow: "20px 20px 0px rgba(0,0,0,0.8)" }}>

              <div className="text-9xl mb-8">🚀</div>

              <h2 className="text-8xl font-black mb-8 leading-tight">
                El Futuro del<br />Aprendizaje
              </h2>

              <p className="text-3xl font-bold text-gray-700 mb-10">
                Microlearning + Inferencia + Transformación Digital<br />
                = Experiencia educativa del siglo XXI
              </p>

              <div className="bg-sgel-red border-4 border-black rounded-3xl px-12 py-6 inline-block mb-10"
                style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                <p className="text-4xl font-black text-white">
                  ¡Llevemos SGEL al siguiente nivel!
                </p>
              </div>

              {/* Badges finales */}
              <div className="flex justify-center gap-6 mt-12">
                <div className="bg-sgel-yellow border-4 border-black rounded-2xl px-6 py-3"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="font-black text-xl">📚 Educación Digital</span>
                </div>
                <div className="bg-sgel-green border-4 border-black rounded-2xl px-6 py-3 text-white"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="font-black text-xl">💡 Innovación Pedagógica</span>
                </div>
                <div className="bg-sgel-blue border-4 border-black rounded-2xl px-6 py-3 text-white"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="font-black text-xl">⚡ Tech Stack Moderno</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
