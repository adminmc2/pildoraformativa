"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

const P = ({ children }: { children: React.ReactNode }) => (
  <span className="italic" style={{ color: "var(--color-pf-spark)" }}>{children}</span>
);

type Gap = {
  id: number;
  options: string[];
  correct: number;
  answerColor: string;
};

// Texto coherente — Los deberes. 5 posesivos plurales: mis, nuestras, sus, vuestros, tus
const TEXT_PARTS = [
  "",
  " compañeros de clase son geniales. ",
  " profesoras son muy divertidas. Javier siempre hace ",
  " deberes en la biblioteca. Y vosotros, ¿hacéis ",
  " deberes en casa? ",
  " notas seguro que son muy buenas.",
];

const GAPS: Gap[] = [
  { id: 0, options: ["Mi", "Mis", "Sus"], correct: 1, answerColor: "var(--color-pf-moon)" },
  { id: 1, options: ["Nuestros", "Nuestras", "Vuestras"], correct: 1, answerColor: "var(--color-pf-flower)" },
  { id: 2, options: ["su", "sus", "mis"], correct: 1, answerColor: "var(--color-pf-moon)" },
  { id: 3, options: ["nuestros", "vuestros", "sus"], correct: 1, answerColor: "var(--color-pf-moon)" },
  { id: 4, options: ["Mis", "Tus", "Sus"], correct: 1, answerColor: "var(--color-pf-flower)" },
];

const NEON_COLORS = [
  { firstColor: "#E91FCE", secondColor: "#7C5CFF" },
  { firstColor: "#7C5CFF", secondColor: "#F5C842" },
  { firstColor: "#F5C842", secondColor: "#8FC751" },
  { firstColor: "#8FC751", secondColor: "#FF6B4A" },
  { firstColor: "#FF6B4A", secondColor: "#E91FCE" },
];

export function SlideLuna3() {
  const [answers, setAnswers] = useState<(number | null)[]>(GAPS.map(() => null));
  const [activeGap, setActiveGap] = useState<number | null>(null);
  const [wrongPick, setWrongPick] = useState<number | null>(null);

  const filledCount = answers.filter((a) => a !== null).length;
  const allFilled = filledCount === GAPS.length;

  const selectGap = (i: number) => {
    if (answers[i] !== null || allFilled) return;
    setActiveGap(i);
    setWrongPick(null);
  };

  const chooseOption = (optIndex: number) => {
    if (activeGap === null) return;
    const gap = GAPS[activeGap];
    if (optIndex === gap.correct) {
      setAnswers((prev) => {
        const next = [...prev];
        next[activeGap] = optIndex;
        return next;
      });
      setActiveGap(null);
      setWrongPick(null);
    } else {
      setWrongPick(optIndex);
    }
  };

  const reset = () => {
    setAnswers(GAPS.map(() => null));
    setActiveGap(null);
    setWrongPick(null);
  };

  const bubble: React.ReactNode = allFilled
    ? "¡Texto completo! Todo comprobado."
    : activeGap !== null && wrongPick !== null
    ? "Casi... ¡pero no! Otra oportunidad."
    : activeGap !== null
    ? "¿Cuál falta aquí?"
    : filledCount === 0
    ? "Última prueba. ¿Completas el texto?"
    : `¡${filledCount} de ${GAPS.length}! Quedan ${GAPS.length - filledCount}.`;

  // Build the rendered text with gaps
  const renderText = () => {
    const elements: React.ReactNode[] = [];
    for (let i = 0; i < TEXT_PARTS.length; i++) {
      elements.push(
        <span key={`t-${i}`}>{TEXT_PARTS[i]}</span>
      );
      if (i < GAPS.length) {
        const gap = GAPS[i];
        const answered = answers[i] !== null;
        const isActive = activeGap === i;

        if (answered) {
          elements.push(
            <motion.span
              key={`g-${i}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-block px-3 py-0.5 rounded-lg text-white font-bold font-[family-name:var(--font-pf-display)] mx-1"
              style={{ background: gap.answerColor }}
            >
              {gap.options[answers[i]!]}
            </motion.span>
          );
        } else {
          elements.push(
            <button
              key={`g-${i}`}
              onClick={() => selectGap(i)}
              className={`inline-block px-4 py-0.5 rounded-lg mx-1 font-[family-name:var(--font-pf-display)] transition ${
                isActive
                  ? "bg-[var(--color-pf-moon)] text-white ring-2 ring-[var(--color-pf-ink)]"
                  : "bg-black/10 text-[var(--color-pf-ink)] hover:bg-black/20 cursor-pointer"
              }`}
            >
              ___
            </button>
          );
        }
      }
    }
    return elements;
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
        <div className="flex flex-col gap-3 min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.2vw,2.8vh),28px)] text-[var(--color-pf-ink)]">
              LUNA
            </span>
            <span
              className="px-3 py-1 rounded-full text-base font-semibold"
              style={{ background: "var(--color-pf-moon-soft)", color: "#3B2A8A" }}
            >
              Verificadora
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(44px,min(7vw,10vh),112px)] text-[var(--color-pf-ink)]">
            Completa el texto
          </h1>

          <p className="text-[clamp(22px,min(2.6vw,3.2vh),32px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full self-start">
            Toca un hueco y elige el posesivo.
          </p>

          {/* Card con neón que se activa al completar */}
          <NeonGradientCard
            borderSize={allFilled ? 4 : 1}
            borderRadius={24}
            neonColors={allFilled ? { firstColor: "#8FC751", secondColor: "#F5C842" } : { firstColor: "#E9E5FF", secondColor: "#E9E5FF" }}
            className="w-full"
          >
            <div className="px-6 py-5">
              <p className="font-[family-name:var(--font-pf-ui)] text-[clamp(22px,min(2.6vw,3.2vh),32px)] leading-relaxed text-[var(--color-pf-ink)]">
                {renderText()}
              </p>

              <div className="flex items-center gap-2 mt-3">
                <span className="text-base font-semibold opacity-50">
                  {filledCount}/{GAPS.length}
                </span>
                {allFilled && (
                  <span className="px-3 py-0.5 rounded-full bg-[var(--color-pf-pill)] text-white text-base font-semibold">
                    ¡Completo!
                  </span>
                )}
              </div>
            </div>
          </NeonGradientCard>

          {/* Opciones para el hueco activo */}
          {activeGap !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              {GAPS[activeGap].options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => chooseOption(i)}
                  disabled={wrongPick === i}
                  className={`flex-1 px-4 py-3 rounded-[18px] font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.2vh),32px)] transition ${
                    wrongPick === i
                      ? "bg-[var(--color-pf-spark-soft)] text-[#8A2F10] line-through opacity-60"
                      : "bg-white text-[var(--color-pf-ink)] shadow-[0_8px_24px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.15)] cursor-pointer"
                  }`}
                >
                  {opt}
                </motion.button>
              ))}
            </motion.div>
          )}

          {allFilled && (
            <button
              onClick={reset}
              className="self-start px-4 py-1.5 rounded-full bg-white/80 text-[var(--color-pf-ink)] text-base font-semibold hover:bg-white transition"
            >
              ↺ Reiniciar
            </button>
          )}
        </div>

        <CharacterStage
          bubble={bubble}
          step={filledCount * 2 + (activeGap !== null ? 1 : 0)}
        >
          <LunaMoon className="w-full h-auto" />
        </CharacterStage>
      </div>
    </div>
  );
}
