"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white border-4 border-black rounded-full h-10 w-10 [box-shadow:4px_4px_0px_rgba(0,0,0,0.8)]"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white border-4 border-black sm:rounded-3xl overflow-hidden [box-shadow:12px_12px_0px_rgba(0,0,0,0.8)]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-black text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-600 font-bold"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-sgel-green text-white border-4 border-black [box-shadow:4px_4px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:2px_2px_0px_rgba(0,0,0,0.8)] transition-all"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-700 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto font-bold [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center bg-white hover:bg-sgel-yellow border-4 border-black rounded-xl cursor-pointer mb-4 [box-shadow:6px_6px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:4px_4px_0px_rgba(0,0,0,0.8)] transition-all"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top border-4 border-black"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-black text-black text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-gray-600 font-bold text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-sgel-blue hover:bg-sgel-green text-white border-4 border-black mt-4 md:mt-0 [box-shadow:4px_4px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:2px_2px_0px_rgba(0,0,0,0.8)] transition-all"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Vocabulario",
    title: "Los Animales",
    src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    ctaText: "Ver",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Aprende los nombres de los animales en español. Esta lección incluye animales domésticos como el perro, el gato y el pájaro, así como animales salvajes como el león, el elefante y la jirafa. <br /> <br /> Practicarás la pronunciación correcta y aprenderás datos curiosos sobre cada animal. Las imágenes coloridas te ayudarán a recordar mejor cada palabra. ¡Completa los ejercicios interactivos para ganar puntos!
        </p>
      );
    },
  },
  {
    description: "Gramática",
    title: "El Presente de Indicativo",
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3",
    ctaText: "Ver",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Domina el tiempo presente en español. Aprenderás las conjugaciones de los verbos regulares terminados en -ar, -er e -ir. También estudiarás los verbos irregulares más comunes como ser, estar, tener y hacer. <br /> <br /> La lección incluye ejemplos prácticos de conversaciones cotidianas y ejercicios de práctica. Descubrirás cómo usar el presente para hablar de acciones habituales y situaciones actuales.
        </p>
      );
    },
  },
  {
    description: "Cultura",
    title: "Fiestas Españolas",
    src: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    ctaText: "Ver",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Descubre las tradiciones y celebraciones de España. Conocerás La Tomatina de Buñol, las Fallas de Valencia, la Semana Santa de Sevilla y los Sanfermines de Pamplona. <br /> <br /> Aprenderás sobre el origen de cada fiesta, sus costumbres más importantes y el vocabulario relacionado. Las fotografías y videos te transportarán a estas celebraciones únicas que forman parte de la cultura española.
        </p>
      );
    },
  },
  {
    description: "Lectura",
    title: "Cuentos Clásicos",
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3",
    ctaText: "Ver",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Lee y disfruta de cuentos tradicionales en español. Esta colección incluye versiones adaptadas de Caperucita Roja, Los Tres Cerditos, La Bella Durmiente y El Patito Feo. <br /> <br /> Cada cuento está acompañado de ilustraciones llamativas y ejercicios de comprensión lectora. Mejorarás tu vocabulario mientras te diviertes con estas historias que han encantado a generaciones de niños en todo el mundo hispanohablante.
        </p>
      );
    },
  },
  {
    description: "Conversación",
    title: "En el Restaurante",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    ctaText: "Ver",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Aprende a comunicarte en un restaurante en español. Practicarás cómo pedir la carta, hacer preguntas sobre los platos, ordenar comida y bebida, y pedir la cuenta. <br /> <br /> La lección incluye diálogos modelo, vocabulario de alimentos y expresiones útiles para situaciones reales. Con los ejercicios de práctica oral mejorarás tu fluidez y confianza para usar el español en contextos cotidianos.
        </p>
      );
    },
  },
];
