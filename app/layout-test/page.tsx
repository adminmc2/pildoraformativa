"use client";
import { useState } from "react";
import ThreeDCardDemo from "@/components/3d-card-demo-2";
import LensDemo from "@/components/lens-demo";
import FocusCardsDemo from "@/components/focus-cards-demo";
import DraggableCardDemo from "@/components/draggable-card-demo";
import CarouselDemo from "@/components/carousel-demo";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";
import ExpandableCardDemo from "@/components/expandable-card-demo";
import LayoutTextFlipDemo from "@/components/layout-text-flip-demo";
import TerminalDemo from "@/components/terminal-demo";
import HeroVideoDialogDemo from "@/components/hero-video-dialog-demo";
import DockDemo from "@/components/dock-demo";
import MorphingTextDemo from "@/components/morphing-text-demo";
import HighlighterDemo from "@/components/highlighter-demo";
import LightRaysDemo from "@/components/light-rays-demo";
import NeonGradientCardDemo from "@/components/neon-gradient-card-demo";
import ComicTextDemo from "@/components/comic-text-demo";
import CoolModeDemo from "@/components/cool-mode-demo";
import PixelImageDemo from "@/components/pixel-image-demo";
import AnimatedCircularProgressBarDemo from "@/components/animated-circular-progress-bar-demo";

export default function LayoutTestPage() {
  const [currentLayout, setCurrentLayout] = useState(1);

  return (
    <div className="relative min-h-screen w-full bg-white">

      {/* Navegación entre layouts */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 flex-wrap max-w-md">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentLayout(num)}
            className={`w-10 h-10 rounded-full font-bold border-4 border-black transition-all ${
              currentLayout === num
                ? "bg-sgel-yellow text-black scale-110"
                : "bg-white text-black hover:bg-sgel-yellow"
            }`}
            style={{
              boxShadow: currentLayout === num ? "4px 4px 0px rgba(0,0,0,0.8)" : "2px 2px 0px rgba(0,0,0,0.8)"
            }}
          >
            {num}
          </button>
        ))}
      </div>

      {/* LAYOUT 1: Hero Grande con Imagen y Texto */}
      {currentLayout === 1 && (
        <div className="min-h-screen bg-sgel-yellow p-8 flex items-center justify-center relative overflow-hidden">
          {/* Estrellas decorativas */}
          <div className="absolute top-20 left-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="black">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>

          <div className="max-w-6xl w-full">
            <div className="relative mb-8" style={{ width: 'fit-content' }}>
              <div className="bg-sgel-red px-8 py-3 rounded-full border-4 border-black inline-block"
                style={{
                  boxShadow: "6px 6px 0px rgba(0,0,0,0.8)",
                  transform: "rotate(-2deg)"
                }}>
                <span className="text-white font-bold text-xl">UNIDAD 2</span>
              </div>
            </div>

            <h1 className="text-8xl font-black mb-8 leading-tight" style={{
              textShadow: "6px 6px 0px rgba(0,0,0,1)",
              WebkitTextStroke: "3px black",
              paintOrder: "stroke fill"
            }}>
              EL PLURAL DE<br/>NOMBRES Y<br/>ADJETIVOS
            </h1>

            <div className="bg-white border-4 border-black rounded-2xl p-6 inline-block"
              style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
              <p className="text-2xl font-bold text-black">
                ¡Aprende las reglas del plural en español!
              </p>
            </div>

            {/* Badge NEW */}
            <div className="absolute top-40 right-40">
              <div className="bg-sgel-green px-6 py-2 border-4 border-black rounded-lg transform rotate-12"
                style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl">¡NUEVO!</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 2: Grid 2 Columnas (Imagen + Texto) */}
      {currentLayout === 2 && (
        <div className="min-h-screen bg-sgel-green p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center h-screen">
            {/* Columna Izquierda - Imagen placeholder */}
            <div className="bg-sgel-blue border-4 border-black rounded-3xl h-[600px] flex items-center justify-center relative"
              style={{ boxShadow: "12px 12px 0px rgba(0,0,0,0.8)" }}>
              <div className="text-center">
                <div className="text-9xl mb-4">📚</div>
                <div className="bg-white border-4 border-black px-6 py-3 rounded-xl inline-block"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="font-bold text-2xl">IMAGEN</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Texto */}
            <div>
              <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-8 mb-6"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <h2 className="text-5xl font-black mb-6">REGLA #1</h2>
                <p className="text-2xl font-bold leading-relaxed">
                  Los nombres terminados en vocal añaden <span className="bg-sgel-red text-white px-3 py-1 rounded border-2 border-black">-S</span>
                </p>
              </div>

              <div className="bg-white border-4 border-black rounded-2xl p-6"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <p className="text-xl font-bold mb-4">Ejemplos:</p>
                <ul className="space-y-3">
                  <li className="bg-sgel-yellow px-4 py-2 rounded-lg border-2 border-black text-xl font-bold">Casa → Casas</li>
                  <li className="bg-sgel-blue px-4 py-2 rounded-lg border-2 border-black text-xl font-bold">Libro → Libros</li>
                  <li className="bg-sgel-red px-4 py-2 rounded-lg border-2 border-black text-xl font-bold text-white">Mesa → Mesas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 3: Texto Centrado con Decoraciones */}
      {currentLayout === 3 && (
        <div className="min-h-screen bg-sgel-blue p-8 flex items-center justify-center relative">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-yellow w-20 h-20 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-red w-24 h-24 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/4 right-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>

          <div className="max-w-4xl text-center">
            <div className="bg-white border-4 border-black rounded-3xl p-12"
              style={{ boxShadow: "16px 16px 0px rgba(0,0,0,0.8)" }}>
              <div className="bg-sgel-yellow border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-2xl">RECUERDA</span>
              </div>

              <h2 className="text-6xl font-black mb-6 leading-tight">
                La concordancia es<br/>importante
              </h2>

              <p className="text-2xl font-bold text-gray-700">
                Los adjetivos deben concordar en número con los nombres que describen
              </p>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 4: Grid de Tarjetas 2x2 */}
      {currentLayout === 4 && (
        <div className="min-h-screen bg-white p-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl font-black mb-12 text-center">
              <span className="bg-sgel-yellow border-4 border-black px-8 py-4 inline-block rounded-2xl"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                CASOS ESPECIALES
              </span>
            </h2>

            <div className="grid grid-cols-2 gap-8">
              {/* Tarjeta 1 */}
              <div className="bg-sgel-yellow border-4 border-black rounded-3xl p-8 relative"
                style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute -top-4 -right-4 bg-sgel-red border-4 border-black rounded-full w-16 h-16 flex items-center justify-center"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-white font-black text-2xl">1</span>
                </div>
                <h3 className="text-4xl font-black mb-4">Terminación en -Z</h3>
                <p className="text-xl font-bold">La Z cambia a C antes de añadir -ES</p>
                <div className="mt-6 bg-white border-2 border-black rounded-xl p-4">
                  <p className="text-2xl font-black">Lápiz → Lápices</p>
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className="bg-sgel-green border-4 border-black rounded-3xl p-8 relative"
                style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute -top-4 -right-4 bg-sgel-blue border-4 border-black rounded-full w-16 h-16 flex items-center justify-center"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-white font-black text-2xl">2</span>
                </div>
                <h3 className="text-4xl font-black mb-4">Consonante + Y</h3>
                <p className="text-xl font-bold">Se añade -ES</p>
                <div className="mt-6 bg-white border-2 border-black rounded-xl p-4">
                  <p className="text-2xl font-black">Rey → Reyes</p>
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div className="bg-sgel-red border-4 border-black rounded-3xl p-8 relative"
                style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute -top-4 -right-4 bg-sgel-yellow border-4 border-black rounded-full w-16 h-16 flex items-center justify-center"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-black font-black text-2xl">3</span>
                </div>
                <h3 className="text-4xl font-black mb-4 text-white">Palabras agudas</h3>
                <p className="text-xl font-bold text-white">Consonante + -ES</p>
                <div className="mt-6 bg-white border-2 border-black rounded-xl p-4">
                  <p className="text-2xl font-black">Reloj → Relojes</p>
                </div>
              </div>

              {/* Tarjeta 4 */}
              <div className="bg-sgel-blue border-4 border-black rounded-3xl p-8 relative"
                style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute -top-4 -right-4 bg-sgel-green border-4 border-black rounded-full w-16 h-16 flex items-center justify-center"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-black font-black text-2xl">4</span>
                </div>
                <h3 className="text-4xl font-black mb-4 text-white">Invariables</h3>
                <p className="text-xl font-bold text-white">No cambian</p>
                <div className="mt-6 bg-white border-2 border-black rounded-xl p-4">
                  <p className="text-2xl font-black">Crisis → Crisis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 5: Timeline Vertical */}
      {currentLayout === 5 && (
        <div className="min-h-screen bg-sgel-yellow p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-black mb-16 text-center">
              PASOS PARA FORMAR<br/>EL PLURAL
            </h2>

            <div className="space-y-8 relative">
              {/* Línea vertical */}
              <div className="absolute left-[60px] top-0 bottom-0 w-2 bg-black"></div>

              {/* Paso 1 */}
              <div className="flex gap-6 items-start relative">
                <div className="bg-sgel-red border-4 border-black rounded-full w-24 h-24 flex items-center justify-center flex-shrink-0 z-10"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-white font-black text-4xl">1</span>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6 flex-1"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-3xl font-black mb-3">Identifica la terminación</h3>
                  <p className="text-xl font-bold">¿El nombre termina en vocal o consonante?</p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex gap-6 items-start relative">
                <div className="bg-sgel-blue border-4 border-black rounded-full w-24 h-24 flex items-center justify-center flex-shrink-0 z-10"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-white font-black text-4xl">2</span>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6 flex-1"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-3xl font-black mb-3">Aplica la regla</h3>
                  <p className="text-xl font-bold">Vocal = -S | Consonante = -ES</p>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="flex gap-6 items-start relative">
                <div className="bg-sgel-green border-4 border-black rounded-full w-24 h-24 flex items-center justify-center flex-shrink-0 z-10"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-black font-black text-4xl">3</span>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6 flex-1"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-3xl font-black mb-3">Verifica casos especiales</h3>
                  <p className="text-xl font-bold">-Z, palabras agudas, invariables...</p>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="flex gap-6 items-start relative">
                <div className="bg-purple-500 border-4 border-black rounded-full w-24 h-24 flex items-center justify-center flex-shrink-0 z-10"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="text-white font-black text-4xl">4</span>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6 flex-1"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <h3 className="text-3xl font-black mb-3">¡Listo!</h3>
                  <p className="text-xl font-bold">Ya tienes el plural correcto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 6: Split Screen 50/50 */}
      {currentLayout === 6 && (
        <div className="min-h-screen grid grid-cols-2">
          {/* Lado Izquierdo */}
          <div className="bg-sgel-red p-12 flex items-center justify-center relative">
            <div className="absolute top-10 right-10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
              </svg>
            </div>
            <div className="text-center">
              <h2 className="text-7xl font-black text-white mb-8">SINGULAR</h2>
              <div className="space-y-6">
                <div className="bg-white border-4 border-black rounded-2xl p-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-4xl font-black">Gato</p>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-4xl font-black">Flor</p>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-4xl font-black">Lápiz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho */}
          <div className="bg-sgel-green p-12 flex items-center justify-center relative">
            <div className="absolute top-10 left-10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="black">
                <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
              </svg>
            </div>
            <div className="text-center">
              <h2 className="text-7xl font-black text-black mb-8">PLURAL</h2>
              <div className="space-y-6">
                <div className="bg-white border-4 border-black rounded-2xl p-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-4xl font-black">Gatos</p>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-4xl font-black">Flores</p>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6"
                  style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                  <p className="text-4xl font-black">Lápices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 7: Bento Box (Tarjetas diferentes tamaños) */}
      {currentLayout === 7 && (
        <div className="min-h-screen bg-white p-8">
          <div className="max-w-7xl mx-auto h-screen grid grid-cols-4 grid-rows-3 gap-6">
            {/* Tarjeta grande 1 */}
            <div className="col-span-2 row-span-2 bg-sgel-yellow border-4 border-black rounded-3xl p-8 flex flex-col justify-center"
              style={{ boxShadow: "12px 12px 0px rgba(0,0,0,0.8)" }}>
              <div className="bg-sgel-red border-4 border-black rounded-full px-6 py-2 inline-block mb-6 w-fit"
                style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-white text-xl">¡IMPORTANTE!</span>
              </div>
              <h3 className="text-5xl font-black mb-4">Regla General</h3>
              <p className="text-2xl font-bold">Vocal → -S<br/>Consonante → -ES</p>
            </div>

            {/* Tarjeta pequeña 1 */}
            <div className="bg-sgel-blue border-4 border-black rounded-2xl p-6 flex items-center justify-center"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <div className="text-center">
                <p className="text-6xl mb-2">📖</p>
                <p className="font-black text-xl">Libro</p>
              </div>
            </div>

            {/* Tarjeta pequeña 2 */}
            <div className="bg-sgel-green border-4 border-black rounded-2xl p-6 flex items-center justify-center"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <div className="text-center">
                <p className="text-6xl mb-2">📚</p>
                <p className="font-black text-xl">Libros</p>
              </div>
            </div>

            {/* Tarjeta mediana 1 */}
            <div className="col-span-2 bg-sgel-red border-4 border-black rounded-2xl p-6"
              style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
              <h3 className="text-3xl font-black text-white mb-3">Ejemplo</h3>
              <p className="text-2xl font-bold text-white">Árbol → Árboles</p>
            </div>

            {/* Tarjeta grande 2 */}
            <div className="col-span-2 row-span-2 bg-purple-500 border-4 border-black rounded-3xl p-8 flex items-center justify-center"
              style={{ boxShadow: "12px 12px 0px rgba(0,0,0,0.8)" }}>
              <div className="text-center">
                <div className="text-8xl mb-6">✨</div>
                <h3 className="text-4xl font-black text-white">¡Practica!</h3>
              </div>
            </div>

            {/* Tarjeta pequeña 3 */}
            <div className="bg-sgel-yellow border-4 border-black rounded-2xl p-6 flex items-center justify-center"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <p className="font-black text-2xl text-center">-S</p>
            </div>

            {/* Tarjeta pequeña 4 */}
            <div className="bg-sgel-blue border-4 border-black rounded-2xl p-6 flex items-center justify-center"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <p className="font-black text-2xl text-center">-ES</p>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 8: Lista con Números Grandes */}
      {currentLayout === 8 && (
        <div className="min-h-screen bg-sgel-blue p-8">
          <div className="max-w-5xl mx-auto py-12">
            <h2 className="text-6xl font-black mb-16 text-center text-white">
              ERRORES COMUNES
            </h2>

            <div className="space-y-8">
              {/* Error 1 */}
              <div className="flex items-start gap-8">
                <div className="text-9xl font-black text-white opacity-50">01</div>
                <div className="flex-1 bg-white border-4 border-black rounded-2xl p-8"
                  style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">❌</span>
                    <h3 className="text-3xl font-black">Los casas</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">✅</span>
                    <h3 className="text-3xl font-black text-sgel-green">Las casas</h3>
                  </div>
                </div>
              </div>

              {/* Error 2 */}
              <div className="flex items-start gap-8">
                <div className="text-9xl font-black text-white opacity-50">02</div>
                <div className="flex-1 bg-white border-4 border-black rounded-2xl p-8"
                  style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">❌</span>
                    <h3 className="text-3xl font-black">Lápizes</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">✅</span>
                    <h3 className="text-3xl font-black text-sgel-green">Lápices</h3>
                  </div>
                </div>
              </div>

              {/* Error 3 */}
              <div className="flex items-start gap-8">
                <div className="text-9xl font-black text-white opacity-50">03</div>
                <div className="flex-1 bg-white border-4 border-black rounded-2xl p-8"
                  style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">❌</span>
                    <h3 className="text-3xl font-black">Crisis'</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">✅</span>
                    <h3 className="text-3xl font-black text-sgel-green">Crisis</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 9: Galería con Badges */}
      {currentLayout === 9 && (
        <div className="min-h-screen bg-sgel-yellow p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black mb-6">EJEMPLOS VISUALES</h2>
              <div className="bg-sgel-red border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="text-white font-black text-2xl">¡Observa y aprende!</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border-4 border-black rounded-2xl overflow-hidden relative"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-sgel-green border-2 border-black rounded-full px-4 py-1"
                    style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.8)" }}>
                    <span className="font-black text-sm">FÁCIL</span>
                  </div>
                </div>
                <div className="h-48 bg-sgel-blue flex items-center justify-center">
                  <span className="text-8xl">🐱</span>
                </div>
                <div className="p-6">
                  <p className="text-3xl font-black mb-2">Gato</p>
                  <p className="text-2xl font-bold text-gray-600">→ Gatos</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border-4 border-black rounded-2xl overflow-hidden relative"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-sgel-yellow border-2 border-black rounded-full px-4 py-1"
                    style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.8)" }}>
                    <span className="font-black text-sm">MEDIO</span>
                  </div>
                </div>
                <div className="h-48 bg-sgel-green flex items-center justify-center">
                  <span className="text-8xl">🌸</span>
                </div>
                <div className="p-6">
                  <p className="text-3xl font-black mb-2">Flor</p>
                  <p className="text-2xl font-bold text-gray-600">→ Flores</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border-4 border-black rounded-2xl overflow-hidden relative"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-sgel-red border-2 border-black rounded-full px-4 py-1 text-white"
                    style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.8)" }}>
                    <span className="font-black text-sm">DIFÍCIL</span>
                  </div>
                </div>
                <div className="h-48 bg-purple-500 flex items-center justify-center">
                  <span className="text-8xl">✏️</span>
                </div>
                <div className="p-6">
                  <p className="text-3xl font-black mb-2">Lápiz</p>
                  <p className="text-2xl font-bold text-gray-600">→ Lápices</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border-4 border-black rounded-2xl overflow-hidden relative"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-sgel-green border-2 border-black rounded-full px-4 py-1"
                    style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.8)" }}>
                    <span className="font-black text-sm">FÁCIL</span>
                  </div>
                </div>
                <div className="h-48 bg-sgel-red flex items-center justify-center">
                  <span className="text-8xl">🏠</span>
                </div>
                <div className="p-6">
                  <p className="text-3xl font-black mb-2">Casa</p>
                  <p className="text-2xl font-bold text-gray-600">→ Casas</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white border-4 border-black rounded-2xl overflow-hidden relative"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-sgel-yellow border-2 border-black rounded-full px-4 py-1"
                    style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.8)" }}>
                    <span className="font-black text-sm">MEDIO</span>
                  </div>
                </div>
                <div className="h-48 bg-sgel-yellow flex items-center justify-center">
                  <span className="text-8xl">⏰</span>
                </div>
                <div className="p-6">
                  <p className="text-3xl font-black mb-2">Reloj</p>
                  <p className="text-2xl font-bold text-gray-600">→ Relojes</p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white border-4 border-black rounded-2xl overflow-hidden relative"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}>
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-sgel-red border-2 border-black rounded-full px-4 py-1 text-white"
                    style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.8)" }}>
                    <span className="font-black text-sm">DIFÍCIL</span>
                  </div>
                </div>
                <div className="h-48 bg-sgel-blue flex items-center justify-center">
                  <span className="text-8xl">👑</span>
                </div>
                <div className="p-6">
                  <p className="text-3xl font-black mb-2">Rey</p>
                  <p className="text-2xl font-bold text-gray-600">→ Reyes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 10: Conclusión/Final */}
      {currentLayout === 10 && (
        <div className="min-h-screen bg-gradient-to-br from-sgel-yellow via-sgel-green to-sgel-blue p-8 flex items-center justify-center relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-20 left-20 animate-bounce">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-20 animate-bounce delay-100">
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

          <div className="max-w-5xl text-center relative z-10">
            <div className="bg-white border-4 border-black rounded-[4rem] p-16"
              style={{ boxShadow: "20px 20px 0px rgba(0,0,0,0.8)" }}>

              <div className="text-9xl mb-8">🎉</div>

              <h2 className="text-8xl font-black mb-8 leading-tight">
                ¡EXCELENTE<br/>TRABAJO!
              </h2>

              <p className="text-3xl font-bold text-gray-700 mb-10">
                Ya conoces las reglas del plural<br/>en español
              </p>

              <div className="bg-sgel-yellow border-4 border-black rounded-3xl px-12 py-6 inline-block"
                style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.8)" }}>
                <p className="text-4xl font-black">¡Sigue practicando!</p>
              </div>

              {/* Badges finales */}
              <div className="flex justify-center gap-6 mt-12">
                <div className="bg-sgel-green border-4 border-black rounded-2xl px-6 py-3"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="font-black text-xl">✓ COMPLETADO</span>
                </div>
                <div className="bg-sgel-red border-4 border-black rounded-2xl px-6 py-3 text-white"
                  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                  <span className="font-black text-xl">⭐ NIVEL 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 11: Tarjeta 3D Interactiva */}
      {currentLayout === 11 && (
        <div className="min-h-screen bg-sgel-green p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-yellow w-24 h-24 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-red w-20 h-20 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/3 right-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="black">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-6xl font-black text-black mb-4">TARJETA 3D</h2>
            <div className="bg-sgel-yellow border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-xl">¡Efecto de profundidad!</span>
            </div>
            <ThreeDCardDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 12: Efecto Lupa/Lens */}
      {currentLayout === 12 && (
        <div className="min-h-screen bg-sgel-yellow p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-20 right-20 bg-sgel-red w-28 h-28 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-20 left-20 bg-sgel-blue w-24 h-24 border-4 border-black rounded-xl transform rotate-12"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/2 left-10">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="black">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-10">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-6xl font-black text-black mb-4">EFECTO LUPA</h2>
            <div className="bg-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
              <span className="font-black text-xl">¡Amplía los detalles!</span>
            </div>
            <LensDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 13: Focus Cards - Galería con efecto hover */}
      {currentLayout === 13 && (
        <div className="min-h-screen bg-sgel-red p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-yellow w-32 h-32 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-blue w-28 h-28 border-4 border-black rounded-xl transform -rotate-12"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/2 right-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-20">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-white mb-4">GALERÍA INTERACTIVA</h2>
              <div className="bg-sgel-yellow border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl">¡Pasa el ratón sobre las imágenes!</span>
              </div>
            </div>
            <FocusCardsDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 14: Draggable Cards - Tarjetas arrastrables */}
      {currentLayout === 14 && (
        <div className="min-h-screen bg-sgel-blue relative overflow-hidden">
          <DraggableCardDemo />
        </div>
      )}

      {/* LAYOUT 15: Carousel - Carrusel interactivo */}
      {currentLayout === 15 && (
        <div className="min-h-screen bg-sgel-red p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-yellow w-28 h-28 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-green w-24 h-24 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/3 right-20">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-20">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-white mb-4">CARRUSEL INTERACTIVO</h2>
              <div className="bg-sgel-yellow border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl">¡Navega por las tarjetas en 3D!</span>
              </div>
            </div>
            <CarouselDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 16: Animated Testimonials - Testimonios animados */}
      {currentLayout === 16 && (
        <div className="min-h-screen bg-sgel-yellow p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-blue w-32 h-32 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-red w-28 h-28 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/4 right-20">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="black">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-black mb-4">OPINIONES DE ESTUDIANTES</h2>
              <div className="bg-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl">¡Lee lo que dicen nuestros alumnos!</span>
              </div>
            </div>
            <AnimatedTestimonialsDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 17: Expandable Cards - Tarjetas expandibles */}
      {currentLayout === 17 && (
        <div className="min-h-screen bg-sgel-green p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-red w-28 h-28 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-yellow w-32 h-32 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/3 right-20">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="black">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-20">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-black mb-4">LECCIONES INTERACTIVAS</h2>
              <div className="bg-sgel-blue border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl text-white">¡Haz clic en cada tarjeta para explorar!</span>
              </div>
            </div>
            <ExpandableCardDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 18: Layout Text Flip - Texto animado rotativo */}
      {currentLayout === 18 && (
        <div className="min-h-screen bg-sgel-blue p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-yellow w-32 h-32 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-red w-28 h-28 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/4 left-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-20">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute top-1/2 right-10">
            <div className="bg-sgel-green w-20 h-20 border-4 border-black rounded-full"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-16">
              <div className="bg-white border-4 border-black rounded-full px-8 py-3 inline-block mb-8"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl text-black">¡DESCUBRE NUEVAS PALABRAS!</span>
              </div>
            </div>
            <LayoutTextFlipDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 19: Terminal - Terminal animado */}
      {currentLayout === 19 && (
        <div className="min-h-screen bg-sgel-red p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-green w-28 h-28 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-yellow w-32 h-32 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/3 right-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-20">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-10">
            <div className="bg-sgel-blue w-24 h-24 border-4 border-black rounded-full"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-white mb-4">TERMINAL INTERACTIVO</h2>
              <div className="bg-sgel-yellow border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl text-black">¡Observa cómo se carga la lección!</span>
              </div>
            </div>
            <TerminalDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 20: Hero Video Dialog - Diálogo de video hero */}
      {currentLayout === 20 && (
        <div className="min-h-screen bg-sgel-yellow p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-blue w-32 h-32 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-green w-28 h-28 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/4 left-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="black">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-20">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute top-1/2 right-10">
            <div className="bg-sgel-red w-20 h-20 border-4 border-black rounded-full"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          </div>

          <div className="w-full max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-black mb-4">VIDEO EDUCATIVO</h2>
              <div className="bg-sgel-red border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl text-white">¡Aprende con videos interactivos!</span>
              </div>
            </div>
            <HeroVideoDialogDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 21: Dock - Barra de navegación tipo macOS */}
      {currentLayout === 21 && (
        <div className="min-h-screen bg-sgel-green p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-red w-32 h-32 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-blue w-28 h-28 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/4 right-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="black">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-20">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-10">
            <div className="bg-sgel-yellow w-24 h-24 border-4 border-black rounded-full"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-black mb-4">BARRA DE NAVEGACIÓN</h2>
              <div className="bg-sgel-yellow border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl text-black">¡Efecto de magnificación al pasar el ratón!</span>
              </div>
            </div>
            <DockDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 22: Morphing Text - Texto con transformación fluida */}
      {currentLayout === 22 && (
        <div className="min-h-screen bg-sgel-blue p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-yellow w-32 h-32 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-red w-28 h-28 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/4 left-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-20">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute top-1/2 right-10">
            <div className="bg-sgel-green w-24 h-24 border-4 border-black rounded-full"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black text-white mb-4">TEXTO TRANSFORMABLE</h2>
              <div className="bg-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl text-black">¡Observa cómo se transforma el texto!</span>
              </div>
            </div>
            <MorphingTextDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 23: Highlighter - Resaltador de texto tipo marcador */}
      {currentLayout === 23 && (
        <div className="min-h-screen bg-sgel-yellow p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-red w-32 h-32 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-green w-28 h-28 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/4 right-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="black">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-20">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-10">
            <div className="bg-sgel-blue w-24 h-24 border-4 border-black rounded-full"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-black mb-4">RESALTADOR DE TEXTO</h2>
              <div className="bg-sgel-red border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl text-white">¡Efecto de marcador dibujado a mano!</span>
              </div>
            </div>
            <HighlighterDemo />
          </div>
        </div>
      )}

      {/* LAYOUT 24: Light Rays - Rayos de luz animados */}
      {currentLayout === 24 && (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decoraciones */}
          <div className="absolute top-10 left-10 bg-sgel-yellow w-32 h-32 border-4 border-black rounded-full"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute bottom-10 right-10 bg-sgel-green w-28 h-28 border-4 border-black rounded-xl transform rotate-45"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}></div>
          <div className="absolute top-1/4 right-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-20">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
          </div>

          <div className="w-full relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-white mb-4">RAYOS DE LUZ</h2>
              <div className="bg-sgel-blue border-4 border-black rounded-full px-8 py-3 inline-block"
                style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}>
                <span className="font-black text-xl text-white">¡Efectos de iluminación animados!</span>
              </div>
            </div>
            <LightRaysDemo />
          </div>
        </div>
      )}

      {/* Layout 25: Neon Gradient Card */}
      {currentLayout === 25 && (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-sgel-yellow blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-sgel-blue blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full bg-sgel-green blur-3xl"></div>
          </div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-6xl font-black text-white mb-4">TARJETAS NEÓN</h2>
            <div className="bg-gradient-to-r from-sgel-yellow to-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
              <span className="font-black text-xl text-black">¡Bordes animados con efecto neón!</span>
            </div>
          </div>

          <div className="relative z-10 w-full">
            <NeonGradientCardDemo />
          </div>
        </div>
      )}

      {/* Layout 26: Comic Text */}
      {currentLayout === 26 && (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-red-100 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Decoración de fondo - estilo cómic */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-48 h-48 bg-sgel-yellow rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-56 h-56 bg-sgel-red rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-sgel-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/4 w-44 h-44 bg-sgel-green rounded-full blur-3xl"></div>
          </div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-6xl font-black text-black mb-4 drop-shadow-lg">TEXTO CÓMIC</h2>
            <div className="bg-sgel-red border-4 border-black rounded-full px-8 py-3 inline-block [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
              <span className="font-black text-xl text-white">¡Efectos de texto tipo cómic!</span>
            </div>
          </div>

          <div className="relative z-10 w-full">
            <ComicTextDemo />
          </div>
        </div>
      )}

      {/* Layout 27: Cool Mode */}
      {currentLayout === 27 && (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Decoración de fondo - partículas */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-sgel-yellow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-sgel-green rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-6xl font-black text-white mb-4 drop-shadow-lg">MODO COOL</h2>
            <div className="bg-white border-4 border-black rounded-full px-8 py-3 inline-block [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
              <span className="font-black text-xl text-black">¡Haz clic y arrastra para ver partículas!</span>
            </div>
            <p className="text-2xl font-bold text-white mt-6 drop-shadow-lg">
              Mantén presionado y mueve el cursor sobre los botones
            </p>
          </div>

          <div className="relative z-10 w-full">
            <CoolModeDemo />
          </div>
        </div>
      )}

      {/* Layout 28: Pixel Image */}
      {currentLayout === 28 && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Decoración de fondo - píxeles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-16 h-16 bg-sgel-yellow"></div>
            <div className="absolute top-40 right-40 w-20 h-20 bg-sgel-red"></div>
            <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-sgel-blue"></div>
            <div className="absolute bottom-20 right-20 w-16 h-16 bg-sgel-green"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-sgel-yellow"></div>
            <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-sgel-red"></div>
          </div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-6xl font-black text-black mb-4 drop-shadow-lg">IMÁGENES PÍXEL</h2>
            <div className="bg-gradient-to-r from-sgel-blue to-sgel-green border-4 border-black rounded-full px-8 py-3 inline-block [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
              <span className="font-black text-xl text-white">¡Efecto de revelación pixelada!</span>
            </div>
            <p className="text-2xl font-bold text-gray-800 mt-6">
              Las imágenes se revelan píxel por píxel de gris a color
            </p>
          </div>

          <div className="relative z-10 w-full">
            <PixelImageDemo />
          </div>
        </div>
      )}

      {/* Layout 29: Animated Circular Progress Bar */}
      {currentLayout === 29 && (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Decoración de fondo - círculos */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border-8 border-sgel-yellow rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border-8 border-sgel-green rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 border-8 border-sgel-blue rounded-full"></div>
          </div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-6xl font-black text-white mb-4 drop-shadow-lg">PROGRESO CIRCULAR</h2>
            <div className="bg-gradient-to-r from-sgel-yellow via-sgel-green to-sgel-blue border-4 border-black rounded-full px-8 py-3 inline-block [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
              <span className="font-black text-xl text-black">¡Barras de progreso animadas!</span>
            </div>
            <p className="text-2xl font-bold text-white mt-6">
              Visualiza tu progreso en cada área de aprendizaje
            </p>
          </div>

          <div className="relative z-10 w-full">
            <AnimatedCircularProgressBarDemo />
          </div>
        </div>
      )}

    </div>
  );
}
