"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Item = {
  id: number;
  person: string;
  context: string;
  blank: string;
  filled: string;
  options: string[];
  correct: number;
  src: string;
};

const ITEMS: Item[] = [
  {
    id: 0, person: "Yo", context: "Tengo una hermana.",
    blank: "___ hermana se llama Ana.",
    filled: "Mi hermana se llama Ana.",
    options: ["Tu", "Mi", "Su"], correct: 1,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 1, person: "Tú", context: "Tienes una hermana.",
    blank: "___ hermana estudia música.",
    filled: "Tu hermana estudia música.",
    options: ["Mi", "Su", "Tu"], correct: 2,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2, person: "Javier", context: "Javier tiene una hermana.",
    blank: "___ hermana se llama Alejandra.",
    filled: "Su hermana se llama Alejandra.",
    options: ["Su", "Mi", "Tu"], correct: 0,
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3, person: "Nosotros", context: "Tenemos dos hermanos.",
    blank: "___ hermanos son mayores.",
    filled: "Nuestros hermanos son mayores.",
    options: ["Nuestras", "Nuestros", "Sus"], correct: 1,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 4, person: "Vosotros", context: "Tenéis dos hermanas.",
    blank: "___ hermanas estudian ingeniería.",
    filled: "Vuestras hermanas estudian ingeniería.",
    options: ["Vuestros", "Nuestras", "Vuestras"], correct: 2,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300&auto=format&fit=crop",
  },
];

const BUBBLES_CORRECT = [
  "¡Mi! Yo → mi hermana.",
  "¡Tu! Tú → tu hermana.",
  "¡Su! Javier → su hermana.",
  "¡Nuestros! Nosotros → nuestros hermanos. Masculino plural.",
  "¡Vuestras! Vosotros → vuestras hermanas. Femenino plural.",
];

export function SlideVito3() {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [wrongPick, setWrongPick] = useState<number | null>(null);

  const item = ITEMS[current];
  const finished = current >= ITEMS.length;

  const choose = (i: number) => {
    if (answered || finished) return;
    if (i === item.correct) {
      setAnswered(true);
      setWrongPick(null);
    } else {
      setWrongPick(i);
    }
  };

  const next = () => {
    setCurrent((c) => c + 1);
    setAnswered(false);
    setWrongPick(null);
  };

  const reset = () => {
    setCurrent(0);
    setAnswered(false);
    setWrongPick(null);
  };

  const bubble = finished
    ? "¡Todas las personas! Mismo parentesco, diferente posesivo."
    : answered
    ? BUBBLES_CORRECT[current]
    : wrongPick !== null
    ? `No es ${item.options[wrongPick]}. ¿De quién hablamos?`
    : `${item.person}. ¿Qué posesivo va aquí?`;

  // Build testimonial for the AnimatedTestimonials component
  const testimonials = [
    {
      quote: answered ? `${item.context} ${item.filled}` : `${item.context} ${item.blank}`,
      name: item.person,
      designation: answered ? `✓ ${item.filled.split(" ")[0]}` : `${current + 1} de ${ITEMS.length}`,
      src: item.src,
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-3 min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vh,22px)] text-[var(--color-pf-ink)]">
              VITO
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "var(--color-pf-pill-soft)", color: "#3F6B14" }}
            >
              Método
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(42px,min(7vw,10vh),104px)] text-[var(--color-pf-ink)]">
            Completa
          </h1>

          <p className="text-[clamp(16px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full self-start">
            Mismo parentesco, diferente posesivo. Elige.
          </p>

          {!finished ? (
            <div>
              {/* Frase grande con contexto + hueco */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-[24px] px-8 py-6 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] mb-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={item.src}
                      alt={item.person}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,2.4vw,32px)] text-[var(--color-pf-ink)]">
                      {item.person}
                    </span>
                    <span className="text-sm font-semibold opacity-50 ml-auto">
                      {current + 1} / {ITEMS.length}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-pf-ui)] text-[clamp(18px,2vw,26px)] text-[var(--color-pf-ink)] opacity-70 mb-2">
                    {item.context}
                  </p>
                  <p className="font-[family-name:var(--font-pf-display)] text-[clamp(24px,min(3vw,3.8vh),40px)] text-[var(--color-pf-ink)]">
                    {answered ? (
                      <>
                        <span className="inline-block px-3 py-0.5 rounded-lg bg-[var(--color-pf-pill)] text-white mr-1">
                          {item.filled.split(" ")[0]}
                        </span>
                        {item.filled.split(" ").slice(1).join(" ")}
                      </>
                    ) : (
                      <>
                        <span className="inline-block px-4 py-0.5 rounded-lg bg-black/10 text-[var(--color-pf-ink)] mr-1">
                          ___
                        </span>
                        {item.blank.replace("___", "").trim()}
                      </>
                    )}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Opciones */}
              {!answered && (
                <div className="flex gap-3">
                  {item.options.map((opt, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => choose(i)}
                      disabled={wrongPick === i}
                      className={`flex-1 px-4 py-3 rounded-[18px] font-[family-name:var(--font-pf-display)] text-[clamp(20px,2.4vw,32px)] transition ${
                        wrongPick === i
                          ? "bg-[var(--color-pf-spark-soft)] text-[#8A2F10] line-through opacity-60"
                          : "bg-white text-[var(--color-pf-ink)] shadow-[0_8px_24px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.15)] cursor-pointer"
                      }`}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Botón siguiente */}
              {answered && (
                <button
                  onClick={next}
                  className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg hover:opacity-90 transition"
                >
                  SIGUIENTE PERSONA
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-[24px] px-8 py-8 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] text-center">
              <div className="font-[family-name:var(--font-pf-display)] text-[clamp(36px,min(5vw,7vh),72px)] text-[var(--color-pf-pill)] leading-none mb-2">
                5 / 5
              </div>
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.8vh,36px)] text-[var(--color-pf-ink)]">
                ¡Todas las personas!
              </p>
              <button
                onClick={reset}
                className="mt-4 px-5 py-2 rounded-full bg-white border-2 border-[var(--color-pf-ink)] text-[var(--color-pf-ink)] text-sm font-semibold hover:bg-[var(--color-pf-pill-soft)] transition"
              >
                ↺ Reiniciar
              </button>
            </div>
          )}
        </div>

        <CharacterStage
          bubble={bubble}
          step={current * 3 + (answered ? 2 : wrongPick !== null ? 1 : 0)}
        >
          <VitoPill className="w-full h-auto" />
        </CharacterStage>
      </div>
    </div>
  );
}
