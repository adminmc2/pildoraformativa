"use client";

import Carousel from "@/components/ui/carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "La Escuela",
      button: "Ver más",
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "Los Deportes",
      button: "Ver más",
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "La Comida",
      button: "Ver más",
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "La Música",
      button: "Ver más",
      src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
