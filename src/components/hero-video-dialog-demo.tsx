"use client";

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export default function HeroVideoDialogDemo() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <HeroVideoDialog
        className="block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
        thumbnailSrc="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3522&auto=format&fit=crop&ixlib=rb-4.0.3"
        thumbnailAlt="Aprende Español - Video Educativo"
      />
      <div className="text-center mt-8">
        <h3 className="text-3xl font-black text-black mb-3">
          Lección en Video: El Plural
        </h3>
        <p className="text-xl font-bold text-gray-700">
          Haz clic en el botón de reproducción para ver la lección completa
        </p>
      </div>
    </div>
  );
}
