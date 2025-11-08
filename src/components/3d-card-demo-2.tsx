"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card border-4 border-black w-auto sm:w-[30rem] h-auto rounded-3xl p-8 [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]">
        {/* Badge decorativo */}
        <CardItem
          translateZ={30}
          className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 border-4 border-black rounded-full px-6 py-2 [box-shadow:4px_4px_0px_rgba(0,0,0,0.8)]"
        >
          <span className="font-black text-sm">¡NUEVO!</span>
        </CardItem>

        <CardItem
          translateZ={50}
          className="text-3xl font-black text-black mb-4"
        >
          Tarjeta 3D Interactiva
        </CardItem>

        <CardItem
          as="p"
          translateZ={60}
          className="text-lg font-bold text-gray-700 mb-6"
        >
          Pasa el ratón para ver el efecto de profundidad
        </CardItem>

        <CardItem
          translateZ={100}
          className="w-full mb-6"
        >
          <div className="relative border-4 border-black rounded-2xl overflow-hidden [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)]">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover"
              alt="thumbnail"
            />
          </div>
        </CardItem>

        <div className="flex justify-between items-center gap-4">
          <CardItem
            translateZ={20}
            translateX={-20}
            as="button"
            className="px-6 py-3 rounded-xl border-4 border-black font-black text-sm bg-white hover:bg-yellow-400 transition-colors [box-shadow:4px_4px_0px_rgba(0,0,0,0.8)]"
          >
            Ver más →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={20}
            as="button"
            className="px-6 py-3 rounded-xl bg-black border-4 border-black text-white font-black text-sm hover:bg-red-500 transition-colors [box-shadow:4px_4px_0px_rgba(0,0,0,0.8)]"
          >
            ¡Comenzar!
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
