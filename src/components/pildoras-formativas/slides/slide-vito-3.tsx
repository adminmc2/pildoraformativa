"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Phrase = {
  id: number;
  text: string;
  possessive: string;
  correct: boolean;
  correction: string;
};

const PHRASES: Phrase[] = [
  { id: 0, text: "Mi padre es agricultor.", possessive: "Mi", correct: true, correction: "" },
  { id: 1, text: "Mi hermanos son tres.", possessive: "Mi", correct: false, correction: "Mis hermanos son tres." },
  { id: 2, text: "Nuestra gato se llama Tom.", possessive: "Nuestra", correct: false, correction: "Nuestro gato se llama Tom." },
  { id: 3, text: "Sus tíos viven en Madrid.", possessive: "Sus", correct: true, correction: "" },
  { id: 4, text: "Tu madre es enfermera.", possessive: "Tu", correct: true, correction: "" },
  { id: 5, text: "Vuestras profesor es simpático.", possessive: "Vuestras", correct: false, correction: "Vuestro profesor es simpático." },
];

export function SlideVito3() {
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const finished = current >= PHRASES.length;

  const p = PHRASES[current];

  const choose = (isCorrect: boolean) => {
    if (revealed || finished) return;
    if (isCorrect === p.correct) setScore((s) => s + 1);
    setRevealed(true);
  };

  const next = () => {
    setCurrent((c) => c + 1);
    setRevealed(false);
  };

  const reset = () => {
    setCurrent(0);
    setRevealed(false);
    setScore(0);
  };

  const bubble = finished
    ? `¡${score} de ${PHRASES.length}! Buen ojo.`
    : revealed
    ? p.correct
      ? "¡Correcto! Bien dicho."
      : `¡Error! Debería ser: ${p.correction}`
    : "¿Está bien dicho?";

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
            ¿Bien dicho?
          </h1>

          <div className="flex items-center gap-3">
            <p className="text-[clamp(16px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full">
              ¿El posesivo es correcto?
            </p>
            <span className="px-3 py-0.5 rounded-full bg-white text-[var(--color-pf-ink)] font-[family-name:var(--font-pf-display)] text-sm shadow-[0_4px_16px_-8px_rgba(0,0,0,0.15)]">
              {Math.min(current + 1, PHRASES.length)} / {PHRASES.length}
            </span>
          </div>

          {!finished ? (
            <div
              key={p.id}
              className="bg-white rounded-[24px] px-8 py-6 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)]"
            >
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(24px,min(3.2vw,4vh),48px)] leading-tight text-[var(--color-pf-ink)] mb-6">
                {revealed && !p.correct ? (
                  <Highlighter
                    action="strike-through"
                    color="var(--color-pf-spark)"
                    strokeWidth={3}
                    animationDuration={600}
                    padding={4}
                  >
                    {p.text}
                  </Highlighter>
                ) : (
                  p.text
                )}
              </p>

              {!revealed && (
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => choose(true)}
                    className="px-6 py-4 rounded-[20px] bg-[var(--color-pf-pill-soft)] font-[family-name:var(--font-pf-display)] text-[clamp(20px,2.6vh,32px)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-pill)]/40 transition"
                  >
                    ✓ Correcto
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => choose(false)}
                    className="px-6 py-4 rounded-[20px] bg-[var(--color-pf-spark-soft)] font-[family-name:var(--font-pf-display)] text-[clamp(20px,2.6vh,32px)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-spark)]/40 transition"
                  >
                    ✗ Incorrecto
                  </motion.button>
                </div>
              )}

              {revealed && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`px-5 py-3 rounded-2xl mb-4 font-[family-name:var(--font-pf-display)] text-[clamp(18px,2.2vh,28px)] ${
                      p.correct
                        ? "bg-[var(--color-pf-pill-soft)] text-[#2D5A0E]"
                        : "bg-[var(--color-pf-spark-soft)] text-[#8A2F10]"
                    }`}
                  >
                    {p.correct ? "✓ ¡Bien dicho!" : `✗ → ${p.correction}`}
                  </div>
                  <button
                    onClick={next}
                    className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg hover:opacity-90 transition"
                  >
                    SIGUIENTE
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-[24px] px-8 py-8 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] text-center">
              <div className="font-[family-name:var(--font-pf-display)] text-[clamp(48px,min(6vw,8vh),96px)] text-[var(--color-pf-pill)] leading-none mb-2">
                {score} / {PHRASES.length}
              </div>
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.8vh,36px)] text-[var(--color-pf-ink)] mb-4">
                {score >= 5 ? "¡Perfecto!" : score >= 3 ? "¡Bien!" : "¡A repasar!"}
              </p>
              <button
                onClick={reset}
                className="px-5 py-2 rounded-full bg-white border-2 border-[var(--color-pf-ink)] text-[var(--color-pf-ink)] text-sm font-semibold hover:bg-[var(--color-pf-pill-soft)] transition"
              >
                ↺ Reiniciar
              </button>
            </div>
          )}
        </div>

        <CharacterStage
          bubble={bubble}
          step={current * 2 + (revealed ? 1 : 0)}
        >
          <VitoPill className="w-full h-auto" />
        </CharacterStage>
      </div>
    </div>
  );
}
