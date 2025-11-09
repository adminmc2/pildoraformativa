"use client";

import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";

export default function AnimatedCircularProgressBarDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
      {/* Progreso 1 - Gramática */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative p-8 bg-white border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={85}
            gaugePrimaryColor="#FFEB3B"
            gaugeSecondaryColor="#E0E0E0"
            className="text-4xl font-black"
          />
          <div className="absolute top-2 right-2 w-8 h-8 bg-sgel-yellow rounded-full border-2 border-black"></div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-black text-white mb-2">Gramática</h3>
          <p className="text-lg font-bold text-white opacity-90">85% Completado</p>
        </div>
      </div>

      {/* Progreso 2 - Vocabulario */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative p-8 bg-white border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={92}
            gaugePrimaryColor="#8BC34A"
            gaugeSecondaryColor="#E0E0E0"
            className="text-4xl font-black"
          />
          <div className="absolute top-2 right-2 w-8 h-8 bg-sgel-green rounded-full border-2 border-black"></div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-black text-white mb-2">Vocabulario</h3>
          <p className="text-lg font-bold text-white opacity-90">92% Completado</p>
        </div>
      </div>

      {/* Progreso 3 - Lectura */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative p-8 bg-white border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={78}
            gaugePrimaryColor="#2196F3"
            gaugeSecondaryColor="#E0E0E0"
            className="text-4xl font-black"
          />
          <div className="absolute top-2 right-2 w-8 h-8 bg-sgel-blue rounded-full border-2 border-black"></div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-black text-white mb-2">Lectura</h3>
          <p className="text-lg font-bold text-white opacity-90">78% Completado</p>
        </div>
      </div>

      {/* Progreso 4 - Escritura */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative p-8 bg-white border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={65}
            gaugePrimaryColor="#E53935"
            gaugeSecondaryColor="#E0E0E0"
            className="text-4xl font-black"
          />
          <div className="absolute top-2 right-2 w-8 h-8 bg-sgel-red rounded-full border-2 border-black"></div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-black text-white mb-2">Escritura</h3>
          <p className="text-lg font-bold text-white opacity-90">65% Completado</p>
        </div>
      </div>

      {/* Progreso 5 - Comprensión Oral */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative p-8 bg-white border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={88}
            gaugePrimaryColor="#FF9800"
            gaugeSecondaryColor="#E0E0E0"
            className="text-4xl font-black"
          />
          <div className="absolute top-2 right-2 w-8 h-8 bg-orange-500 rounded-full border-2 border-black"></div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-black text-white mb-2">Comprensión Oral</h3>
          <p className="text-lg font-bold text-white opacity-90">88% Completado</p>
        </div>
      </div>

      {/* Progreso 6 - Progreso General */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative p-8 bg-gradient-to-br from-sgel-yellow via-sgel-green to-sgel-blue border-4 border-black rounded-2xl [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={82}
            gaugePrimaryColor="#FFFFFF"
            gaugeSecondaryColor="rgba(255,255,255,0.3)"
            className="text-4xl font-black text-white"
          />
          <div className="absolute top-2 right-2">
            <div className="w-8 h-8 bg-white rounded-full border-2 border-black flex items-center justify-center">
              <span className="text-xl">⭐</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-black text-white mb-2">Progreso General</h3>
          <p className="text-lg font-bold text-white opacity-90">82% Completado</p>
        </div>
      </div>
    </div>
  );
}
