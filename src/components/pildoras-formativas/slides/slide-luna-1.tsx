"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComicText } from "@/components/ui/comic-text";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Item = {
  id: number;
  before: string;
  after: string;
  options: string[];
  correct: number;
};

// Frases de Act 5 p.37 del JSON — no vistas antes en la píldora
const ITEMS: Item[] = [
  { id: 0, before: "¿Estudias música en ", after: " instituto?", options: ["mi", "tu", "su"], correct: 1 },
  { id: 1, before: "Ellos tienen ", after: " ordenador en la habitación.", options: ["sus", "su", "mi"], correct: 1 },
  { id: 2, before: "Graciela vive con ", after: " tíos.", options: ["su", "sus", "mis"], correct: 1 },
  { id: 3, before: "Yo tengo ", after: " libros en la cartera.", options: ["mi", "mis", "sus"], correct: 1 },
  { id: 4, before: "Javier tiene ", after: " bicicleta en la calle.", options: ["sus", "su", "tu"], correct: 1 },
  { id: 5, before: "", after: " profesor de matemáticas es muy simpático.", options: ["Nuestra", "Nuestro", "Su"], correct: 1 },
];

export function SlideLuna1() {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [wrongPick, setWrongPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showComic, setShowComic] = useState(false);

  const finished = current >= ITEMS.length;
  const item = ITEMS[current];

  const choose = (i: number) => {
    if (answered || finished) return;
    if (i === item.correct) {
      setScore((s) => s + 1);
      setAnswered(true);
      setShowComic(true);
      setWrongPick(null);
      setTimeout(() => setShowComic(false), 1500);
    } else {
      setWrongPick(i);
    }
  };

  const next = () => {
    setCurrent((c) => c + 1);
    setAnswered(false);
    setWrongPick(null);
    setShowComic(false);
  };

  const reset = () => {
    setCurrent(0);
    setAnswered(false);
    setWrongPick(null);
    setScore(0);
    setShowComic(false);
  };

  const bubble = finished
    ? `¡${score} de ${ITEMS.length}! ¿Lo has entendido?`
    : answered
    ? `¡${item.options[item.correct]}! Correcto.`
    : wrongPick !== null
    ? `No es ${item.options[wrongPick]}. Piensa: ¿uno o varios?`
    : `Frase ${current + 1}. Elige el posesivo.`;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-3 min-w-0 relative">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vh,22px)] text-[var(--color-pf-ink)]">
              LUNA
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "var(--color-pf-moon-soft)", color: "#3B2A8A" }}
            >
              Verificadora
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(44px,min(7vw,10vh),112px)] text-[var(--color-pf-ink)]">
            Elige
          </h1>

          <p className="text-[clamp(16px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full self-start">
            ¿Qué posesivo va en cada frase?
          </p>

          {!finished ? (
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-[24px] px-8 py-6 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] mb-4 relative overflow-hidden"
                >
                  <span className="text-sm font-semibold opacity-50 float-right">
                    {current + 1}/{ITEMS.length}
                  </span>
                  <p className="font-[family-name:var(--font-pf-display)] text-[clamp(24px,min(3vw,4vh),44px)] leading-tight text-[var(--color-pf-ink)]">
                    {item.before}
                    {answered ? (
                      <span className="inline-block px-3 py-0.5 rounded-lg bg-[var(--color-pf-moon)] text-white mx-1">
                        {item.options[item.correct]}
                      </span>
                    ) : (
                      <span className="inline-block px-4 py-0.5 rounded-lg bg-black/10 mx-1">
                        ___
                      </span>
                    )}
                    {item.after}
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
                      className={`flex-1 px-4 py-3 rounded-[18px] font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.6vw,36px)] transition ${
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

              {answered && (
                <button
                  onClick={next}
                  className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg hover:opacity-90 transition"
                >
                  SIGUIENTE
                </button>
              )}

              {/* Comic Text explosion */}
              <AnimatePresence>
                {showComic && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute top-20 right-4 pointer-events-none z-20"
                  >
                    <ComicText fontSize={3}>¡BIEN!</ComicText>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="bg-white rounded-[24px] px-8 py-8 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] text-center">
              <div className="font-[family-name:var(--font-pf-display)] text-[clamp(48px,min(6vw,8vh),96px)] text-[var(--color-pf-moon)] leading-none mb-2">
                {score}/{ITEMS.length}
              </div>
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.8vh,36px)] text-[var(--color-pf-ink)]">
                {score >= 5 ? "¡Perfecto!" : score >= 3 ? "¡Bien!" : "¡A repasar!"}
              </p>
              <button
                onClick={reset}
                className="mt-4 px-5 py-2 rounded-full bg-white border-2 border-[var(--color-pf-ink)] text-[var(--color-pf-ink)] text-sm font-semibold hover:bg-[var(--color-pf-moon-soft)] transition"
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
          <LunaMoon className="w-full h-auto" />
        </CharacterStage>
      </div>
    </div>
  );
}
