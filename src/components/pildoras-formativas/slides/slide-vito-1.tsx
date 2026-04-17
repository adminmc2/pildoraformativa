"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type GapItem = {
  id: number;
  before: string;
  after: string;
  options: string[];
  correct: number;
};

const TEXT_LINES = [
  "Javier tiene una hermana pequeña, Alejandra.",
  "En su casa también vive el abuelo Manolo.",
  "La madre de Javier, Catalina, es enfermera.",
];

const GAPS: GapItem[] = [
  { id: 0, before: "Su ________ es Catalina.", after: "", options: ["hermana", "madre", "abuelo"], correct: 1 },
  { id: 1, before: "Su hermana se llama ________.", after: "", options: ["Catalina", "Alejandra", "Manolo"], correct: 1 },
  { id: 2, before: "________ abuelo vive en la misma casa.", after: "", options: ["Mi", "Su", "Tu"], correct: 1 },
];

// Fases: 0=texto, 1-3=completar huecos, 4=resultado
type Phase = 0 | 1 | 2 | 3 | 4;

export function SlideVito1() {
  const [phase, setPhase] = useState<Phase>(0);
  const [answered, setAnswered] = useState(false);
  const [wrongChoice, setWrongChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const gIndex = phase - 1;
  const gap = GAPS[gIndex];
  const finished = phase === 4;

  const answer = (i: number) => {
    if (answered || !gap) return;
    if (i === gap.correct) {
      setScore((s) => s + 1);
      setAnswered(true);
      setWrongChoice(null);
    } else {
      setWrongChoice(i);
    }
  };

  const next = () => {
    if (phase < 4) {
      setPhase((phase + 1) as Phase);
      setAnswered(false);
      setWrongChoice(null);
    }
  };

  const reset = () => {
    setPhase(0);
    setAnswered(false);
    setWrongChoice(null);
    setScore(0);
  };

  const bubble = (() => {
    if (phase === 0) return "Lee el texto de Javier.";
    if (finished) return `¡${score} de ${GAPS.length}! Comprendes los posesivos.`;
    if (answered) {
      if (phase === 1) return "¡Su madre! Catalina es la madre de Javier.";
      if (phase === 2) return "¡Alejandra! La hermana de Javier.";
      return "¡Su! Porque hablamos de Javier.";
    }
    if (wrongChoice !== null && gap) {
      const wrong = gap.options[wrongChoice];
      if (phase === 1) return `No, ${wrong} no. Busca en el texto quién es Catalina.`;
      if (phase === 2) return `No es ${wrong}. Lee otra vez la primera frase.`;
      return `No es ${wrong}. ¿De quién es la casa?`;
    }
    if (phase === 1) return "¿Qué parentesco tiene?";
    if (phase === 2) return "¿Cómo se llama?";
    return "¿Qué posesivo va aquí?";
  })();

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
            ¿Quién tiene qué?
          </h1>

          <p className="text-[clamp(16px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full self-start">
            Lee el texto y completa.
          </p>

          <Terminal className="border-[var(--color-pf-pill)] [box-shadow:8px_8px_0px_var(--color-pf-pill)]">
            {TEXT_LINES.map((line, i) => (
              <TypingAnimation key={i} speed={25} delay={i * 800} className="text-green-400 text-[clamp(16px,1.8vw,22px)]">
                {`> ${line}`}
              </TypingAnimation>
            ))}

            {phase >= 1 && !finished && (
              <div className="mt-4 border-t border-gray-700 pt-3">
                <AnimatedSpan delay={0.2} className="text-yellow-300 text-[clamp(18px,2vw,26px)] font-bold">
                  {gap.before}
                </AnimatedSpan>

                <div className="flex gap-3 mt-3">
                  {gap.options.map((opt, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.12 }}
                      onClick={() => answer(i)}
                      disabled={answered || wrongChoice === i}
                      className={`px-5 py-2 rounded-xl font-bold text-[clamp(16px,1.8vw,22px)] transition ${
                        answered && i === gap.correct
                          ? "bg-green-500 text-white"
                          : wrongChoice === i
                          ? "bg-red-500/60 text-white line-through opacity-60"
                          : answered
                          ? "bg-gray-700 text-gray-500"
                          : "bg-gray-700 text-white hover:bg-gray-600"
                      }`}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>

                {answered && (
                  <AnimatedSpan delay={0.2} className="text-green-400 mt-2 text-[clamp(14px,1.5vw,18px)]">
                    ✓ Su {gap.options[gap.correct]}
                  </AnimatedSpan>
                )}
              </div>
            )}

            {finished && (
              <AnimatedSpan delay={0.3} className="text-green-400 mt-4 text-[clamp(18px,2vw,24px)]">
                ✓ {score} / {GAPS.length} correctas
              </AnimatedSpan>
            )}
          </Terminal>

          <div className="flex items-center gap-3">
            {phase === 0 && (
              <button
                onClick={next}
                className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg hover:opacity-90 transition"
              >
                COMPLETAR
              </button>
            )}
            {answered && !finished && (
              <button
                onClick={next}
                className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg hover:opacity-90 transition"
              >
                SIGUIENTE
              </button>
            )}
            {finished && (
              <button
                onClick={reset}
                className="px-4 py-1.5 rounded-full bg-white/80 text-[var(--color-pf-ink)] text-xs font-semibold hover:bg-white transition"
              >
                ↺ Reiniciar
              </button>
            )}
          </div>
        </div>

        <CharacterStage bubble={bubble} step={phase * 3 + (answered ? 2 : wrongChoice !== null ? 1 : 0)}>
          <VitoPill className="w-full h-auto" />
        </CharacterStage>
      </div>
    </div>
  );
}
