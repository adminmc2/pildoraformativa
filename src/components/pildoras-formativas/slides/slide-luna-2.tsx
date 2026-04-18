"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type PersonItem = {
  id: number;
  person: string;
  context: string;
  blank: string;
  filled: string;
  options: string[];
  correct: number;
  color: string;
};

// Orden mezclado — no secuencial
const PERSONS: PersonItem[] = [
  { id: 0, person: "Javier", context: "Javier tiene una hermana.", blank: "___ hermana se llama Alejandra.", filled: "Su hermana se llama Alejandra.", options: ["Mi", "Su", "Tu"], correct: 1, color: "var(--color-pf-pill)" },
  { id: 1, person: "Nosotros", context: "Tenemos dos hermanos.", blank: "___ hermanos son mayores.", filled: "Nuestros hermanos son mayores.", options: ["Nuestras", "Sus", "Nuestros"], correct: 2, color: "var(--color-pf-flower)" },
  { id: 2, person: "Tú", context: "Tienes una hermana.", blank: "___ hermana estudia música.", filled: "Tu hermana estudia música.", options: ["Su", "Mi", "Tu"], correct: 2, color: "var(--color-pf-star)" },
  { id: 3, person: "Vosotros", context: "Tenéis dos hermanas.", blank: "___ hermanas estudian ingeniería.", filled: "Vuestras hermanas estudian ingeniería.", options: ["Vuestros", "Vuestras", "Nuestras"], correct: 1, color: "var(--color-pf-spark)" },
  { id: 4, person: "Yo", context: "Tengo una hermana.", blank: "___ hermana se llama Ana.", filled: "Mi hermana se llama Ana.", options: ["Tu", "Su", "Mi"], correct: 2, color: "var(--color-pf-moon)" },
];

export function SlideLuna2() {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [wrongPick, setWrongPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const finished = current >= PERSONS.length;
  const item = PERSONS[current];

  // Carousel positions
  const getCardStyle = (index: number) => {
    const diff = index - current;
    if (diff === 0) return { x: 0, scale: 1, opacity: 1, zIndex: 10, rotateY: 0 };
    if (diff === 1 || (diff < 0 && diff > -PERSONS.length + 1)) return { x: 220, scale: 0.8, opacity: 0.5, zIndex: 5, rotateY: 30 };
    if (diff === -1 || (diff > 0 && diff < PERSONS.length - 1)) return { x: -220, scale: 0.8, opacity: 0.5, zIndex: 5, rotateY: -30 };
    return { x: 0, scale: 0.6, opacity: 0, zIndex: 0, rotateY: 0 };
  };

  const choose = (i: number) => {
    if (answered || finished) return;
    if (i === item.correct) {
      setScore((s) => s + 1);
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
    setScore(0);
  };

  const bubble = finished
    ? `¡${score} de ${PERSONS.length}! Mismo parentesco, diferente posesivo.`
    : answered
    ? `¡${item.filled.split(" ")[0]}! ${item.person} → ${item.filled.split(" ")[0].toLowerCase()}.`
    : wrongPick !== null
    ? `No es ${item.options[wrongPick]}. ¿Quién habla?`
    : `${item.person}. ¿Qué posesivo?`;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-3 min-w-0">
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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(40px,min(6.5vw,9vh),96px)] text-[var(--color-pf-ink)]">
            Cada persona
          </h1>

          <p className="text-[clamp(16px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full self-start">
            Mismo parentesco, diferente posesivo.
          </p>

          {!finished ? (
            <div>
              {/* Carousel visual */}
              <div className="relative h-[clamp(140px,18vh,200px)] mb-4" style={{ perspective: "1000px" }}>
                {PERSONS.map((p, i) => {
                  const style = getCardStyle(i);
                  const isActive = i === current;
                  return (
                    <motion.div
                      key={p.id}
                      animate={{
                        x: style.x,
                        scale: style.scale,
                        opacity: style.opacity,
                        rotateY: style.rotateY,
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ zIndex: style.zIndex, transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="rounded-[24px] px-8 py-5 w-full max-w-[500px]"
                        style={{
                          background: isActive ? "white" : `color-mix(in srgb, white 90%, ${p.color})`,
                          boxShadow: isActive
                            ? `0 18px 50px -18px rgba(0,0,0,0.2), 0 0 0 3px ${p.color}`
                            : "0 8px 24px -10px rgba(0,0,0,0.1)",
                        }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="px-3 py-1 rounded-full text-white font-[family-name:var(--font-pf-display)] text-[clamp(14px,1.6vw,20px)]"
                            style={{ background: p.color }}
                          >
                            {p.person}
                          </span>
                          <span className="text-sm opacity-50">{current + 1}/{PERSONS.length}</span>
                        </div>
                        <p className="font-[family-name:var(--font-pf-ui)] text-[clamp(16px,1.8vw,22px)] text-[var(--color-pf-ink)] opacity-70 mb-1">
                          {p.context}
                        </p>
                        <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.8vw,3.6vh),38px)] text-[var(--color-pf-ink)]">
                          {answered && isActive ? (
                            <>
                              <span className="inline-block px-3 py-0.5 rounded-lg text-white mr-1" style={{ background: p.color }}>
                                {p.filled.split(" ")[0]}
                              </span>
                              {p.filled.split(" ").slice(1).join(" ")}
                            </>
                          ) : isActive ? (
                            <>
                              <span className="inline-block px-4 py-0.5 rounded-lg bg-black/10 mr-1">___</span>
                              {p.blank.replace("___", "").trim()}
                            </>
                          ) : (
                            <span className="opacity-30">{p.blank}</span>
                          )}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

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
              <div className="font-[family-name:var(--font-pf-display)] text-[clamp(48px,min(6vw,8vh),96px)] text-[var(--color-pf-moon)] leading-none mb-2">
                {score}/{PERSONS.length}
              </div>
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.8vh,36px)] text-[var(--color-pf-ink)]">
                {score === PERSONS.length ? "¡Perfecto!" : score >= 3 ? "¡Bien!" : "¡A repasar!"}
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
