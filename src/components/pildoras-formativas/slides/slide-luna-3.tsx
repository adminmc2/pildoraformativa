"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Phrase = {
  id: number;
  text: string;
  correct: boolean;
  correction: string;
  errorWord: string;
};

const PHRASES: Phrase[] = [
  { id: 0, text: "Mi padre es agricultor.", correct: true, correction: "", errorWord: "" },
  { id: 1, text: "Mi hermanos son tres.", correct: false, correction: "Mis hermanos son tres.", errorWord: "Mi hermanos" },
  { id: 2, text: "Tu madre es enfermera.", correct: true, correction: "", errorWord: "" },
  { id: 3, text: "Nuestra gato se llama Tom.", correct: false, correction: "Nuestro gato se llama Tom.", errorWord: "Nuestra gato" },
  { id: 4, text: "Sus tíos viven en Madrid.", correct: true, correction: "", errorWord: "" },
  { id: 5, text: "Vuestras profesor es simpático.", correct: false, correction: "Vuestro profesor es simpático.", errorWord: "Vuestras profesor" },
];

export function SlideLuna3() {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [wrongPick, setWrongPick] = useState(false);
  const [score, setScore] = useState(0);

  const finished = current >= PHRASES.length;
  const phrase = PHRASES[current];

  const choose = (isCorrect: boolean) => {
    if (answered || finished) return;
    if (isCorrect === phrase.correct) {
      setScore((s) => s + 1);
      setAnswered(true);
      setWrongPick(false);
    } else {
      setWrongPick(true);
    }
  };

  const next = () => {
    setCurrent((c) => c + 1);
    setAnswered(false);
    setWrongPick(false);
  };

  const reset = () => {
    setCurrent(0);
    setAnswered(false);
    setWrongPick(false);
    setScore(0);
  };

  const bubble = finished
    ? `¡${score} de ${PHRASES.length}! Buen ojo para los errores.`
    : answered
    ? phrase.correct
      ? "¡Correcto! Bien dicho."
      : `¡Error encontrado! → ${phrase.correction}`
    : wrongPick
    ? phrase.correct
      ? "No, está bien dicho. Mira otra vez."
      : "No, hay un error. ¿Lo ves?"
    : "¿Está bien dicho?";

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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(44px,min(7vw,10vh),112px)] text-[var(--color-pf-ink)]">
            ¿Bien dicho?
          </h1>

          <div className="flex items-center gap-3">
            <p className="text-[clamp(16px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full">
              ¿El posesivo es correcto?
            </p>
            <span className="px-3 py-0.5 rounded-full bg-white text-[var(--color-pf-ink)] font-[family-name:var(--font-pf-display)] text-sm shadow-[0_4px_16px_-8px_rgba(0,0,0,0.15)]">
              {Math.min(current + 1, PHRASES.length)}/{PHRASES.length}
            </span>
          </div>

          {!finished ? (
            <div>
              <div
                key={phrase.id}
                className="bg-white rounded-[24px] px-8 py-6 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] mb-4"
              >
                <p className="font-[family-name:var(--font-pf-display)] text-[clamp(26px,min(3.4vw,4.4vh),48px)] leading-tight text-[var(--color-pf-ink)]">
                  {answered && !phrase.correct ? (
                    <Highlighter
                      action="strike-through"
                      color="var(--color-pf-spark)"
                      strokeWidth={4}
                      animationDuration={700}
                      padding={4}
                    >
                      {phrase.text}
                    </Highlighter>
                  ) : (
                    phrase.text
                  )}
                </p>

                {answered && !phrase.correct && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-3 font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.8vw,3.6vh),38px)] text-[var(--color-pf-pill)]"
                  >
                    → {phrase.correction}
                  </motion.p>
                )}
              </div>

              {!answered && (
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => choose(true)}
                    disabled={wrongPick && !phrase.correct}
                    className={`px-6 py-4 rounded-[20px] font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.8vh,34px)] transition ${
                      wrongPick && phrase.correct
                        ? "bg-[var(--color-pf-spark-soft)] text-[#8A2F10] opacity-60"
                        : "bg-[var(--color-pf-pill-soft)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-pill)]/40 cursor-pointer"
                    }`}
                  >
                    ✓ Correcto
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => choose(false)}
                    disabled={wrongPick && phrase.correct}
                    className={`px-6 py-4 rounded-[20px] font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.8vh,34px)] transition ${
                      wrongPick && !phrase.correct
                        ? "bg-[var(--color-pf-spark-soft)] text-[#8A2F10] opacity-60"
                        : "bg-[var(--color-pf-spark-soft)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-spark)]/40 cursor-pointer"
                    }`}
                  >
                    ✗ Incorrecto
                  </motion.button>
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
            </div>
          ) : (
            <div className="bg-white rounded-[24px] px-8 py-8 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] text-center">
              <div className="font-[family-name:var(--font-pf-display)] text-[clamp(48px,min(6vw,8vh),96px)] text-[var(--color-pf-moon)] leading-none mb-2">
                {score}/{PHRASES.length}
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
          step={current * 3 + (answered ? 2 : wrongPick ? 1 : 0)}
        >
          <LunaMoon className="w-full h-auto" />
        </CharacterStage>
      </div>
    </div>
  );
}
