import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "Gato 🐱",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=3387&auto=format&fit=crop",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Flor 🌸",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=3072&auto=format&fit=crop",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Lápiz ✏️",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3070&auto=format&fit=crop",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Casa 🏠",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=3648&auto=format&fit=crop",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Reloj ⏰",
      image:
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=3542&auto=format&fit=crop",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Libro 📚",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=3070&auto=format&fit=crop",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-2xl -translate-y-3/4 text-center text-3xl font-black text-black md:text-5xl z-0">
        ¡Arrastra las tarjetas para explorar el vocabulario!
      </p>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <div className="border-4 border-black rounded-xl overflow-hidden [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-64 w-full object-cover"
            />
          </div>
          <h3 className="mt-4 text-center text-2xl font-black text-black">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
