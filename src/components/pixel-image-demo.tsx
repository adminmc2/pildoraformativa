"use client";

import { PixelImage } from "@/components/ui/pixel-image";

export default function PixelImageDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
      {/* Imagen 1 - 6x4 Grid */}
      <div className="flex flex-col items-center gap-6">
        <div className="border-4 border-black rounded-[3rem] [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)] overflow-hidden bg-white p-8">
          <PixelImage
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=800&fit=crop"
            grid="6x4"
            grayscaleAnimation={true}
            pixelFadeInDuration={800}
            maxAnimationDelay={1000}
            colorRevealDelay={1200}
          />
        </div>
        <div className="bg-sgel-yellow border-4 border-black rounded-2xl px-6 py-3 [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
          <span className="font-black text-xl text-black">Grid 6x4 - Libros</span>
        </div>
      </div>

      {/* Imagen 2 - 8x8 Grid */}
      <div className="flex flex-col items-center gap-6">
        <div className="border-4 border-black rounded-[3rem] [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)] overflow-hidden bg-white p-8">
          <PixelImage
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop"
            grid="8x8"
            grayscaleAnimation={true}
            pixelFadeInDuration={1000}
            maxAnimationDelay={1500}
            colorRevealDelay={1800}
          />
        </div>
        <div className="bg-sgel-red border-4 border-black rounded-2xl px-6 py-3 [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
          <span className="font-black text-xl text-white">Grid 8x8 - Escuela</span>
        </div>
      </div>

      {/* Imagen 3 - 8x3 Grid */}
      <div className="flex flex-col items-center gap-6">
        <div className="border-4 border-black rounded-[3rem] [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)] overflow-hidden bg-white p-8">
          <PixelImage
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=800&fit=crop"
            grid="8x3"
            grayscaleAnimation={true}
            pixelFadeInDuration={900}
            maxAnimationDelay={1200}
            colorRevealDelay={1500}
          />
        </div>
        <div className="bg-sgel-green border-4 border-black rounded-2xl px-6 py-3 [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
          <span className="font-black text-xl text-black">Grid 8x3 - Estudio</span>
        </div>
      </div>

      {/* Imagen 4 - 4x6 Grid */}
      <div className="flex flex-col items-center gap-6">
        <div className="border-4 border-black rounded-[3rem] [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)] overflow-hidden bg-white p-8">
          <PixelImage
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=800&fit=crop"
            grid="4x6"
            grayscaleAnimation={true}
            pixelFadeInDuration={1100}
            maxAnimationDelay={1400}
            colorRevealDelay={1700}
          />
        </div>
        <div className="bg-sgel-blue border-4 border-black rounded-2xl px-6 py-3 [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
          <span className="font-black text-xl text-white">Grid 4x6 - Lectura</span>
        </div>
      </div>
    </div>
  );
}
