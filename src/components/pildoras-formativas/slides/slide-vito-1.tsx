"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, TypingAnimation } from "@/components/ui/terminal";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

const TEXT_LINES = [
  "Javier tiene una hermana pequeña, Alejandra.",
  "La madre de Javier, Catalina, es enfermera.",
  "En su casa también vive el abuelo Manolo.",
];

type Example = {
  id: string;
  sentence: string;
  steps: { label: string; value: string; color: string }[];
  answer: string;
};

const EXAMPLES: Example[] = [
  {
    id: "madre",
    sentence: "___ madre es Catalina.",
    steps: [
      { label: "¿Quién?", value: "Javier = él", color: "var(--color-pf-flower-soft)" },
      { label: "¿Una o varias?", value: "madre = una", color: "var(--color-pf-star-soft)" },
      { label: "Resultado", value: "él + una → su", color: "var(--color-pf-pill-soft)" },
    ],
    answer: "Su",
  },
  {
    id: "abuelo",
    sentence: "___ abuelo se llama Manolo.",
    steps: [
      { label: "¿Quién?", value: "Javier = él", color: "var(--color-pf-flower-soft)" },
      { label: "¿Uno o varios?", value: "abuelo = uno", color: "var(--color-pf-star-soft)" },
      { label: "Resultado", value: "él + uno → su", color: "var(--color-pf-pill-soft)" },
    ],
    answer: "Su",
  },
];

const BUBBLES = [
  "Leemos el texto de Javier. Ahora, paso a paso.",
  "Primero: ¿de quién hablamos?",
  "Después: ¿una madre o varias?",
  "Él + una → su. ¡Su madre!",
  "Otra vez. Mismo proceso.",
  "¿Quién? Ya lo sabemos.",
  "Uno → su. ¡El proceso funciona!",
  "Siempre igual: ¿quién? + ¿cuántos? = posesivo.",
];

// Fases: 0=texto, 1-3=ejemplo 1 (pasos), 4-6=ejemplo 2 (pasos), 7=conclusión
export function SlideVito1() {
  const [step, setStep] = useState(0);
  const totalSteps = 7;

  const canNext = step < totalSteps;
  const canPrev = step > 0;

  const ex1Visible = step >= 1;
  const ex1StepsVisible = step >= 1 ? Math.min(step, 3) : 0;
  const ex1Filled = step >= 3;
  const ex2Visible = step >= 4;
  const ex2StepsVisible = step >= 6 ? 3 : step >= 5 ? 1 : 0;
  const ex2Filled = step >= 6;
  const conclusionVisible = step === totalSteps;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vh,22px)] text-[var(--color-pf-ink)]">
              VITO
            </span>
            <span
              className="px-3 py-1 rounded-full text-base font-semibold"
              style={{ background: "var(--color-pf-pill-soft)", color: "#3F6B14" }}
            >
              Método
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(42px,min(7vw,10vh),104px)] text-[var(--color-pf-ink)]">
            ¿Quién tiene qué?
          </h1>

          <p className="text-[clamp(18px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full self-start">
            ¿Cómo se elige el posesivo?
          </p>

          {/* Terminal — contexto del texto de Javier */}
          <Terminal className="border-[var(--color-pf-pill)] [box-shadow:8px_8px_0px_var(--color-pf-pill)]">
            {TEXT_LINES.map((line, i) => (
              <TypingAnimation key={i} speed={25} delay={i * 800} className="text-green-400 text-[clamp(16px,1.6vw,20px)]">
                {`> ${line}`}
              </TypingAnimation>
            ))}
          </Terminal>

          {/* Ejemplo 1 */}
          {ex1Visible && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[20px] px-6 py-3 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]"
            >
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.4vw,3vh),32px)] text-[var(--color-pf-ink)] mb-2">
                {EXAMPLES[0].sentence.replace("___", ex1Filled ? `【${EXAMPLES[0].answer}】` : "___")}
              </p>
              <div className="flex gap-2 flex-wrap">
                {EXAMPLES[0].steps.map((s, i) =>
                  i < ex1StepsVisible ? (
                    <motion.div
                      key={`e1-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="px-3 py-1.5 rounded-xl text-[clamp(16px,1.8vw,22px)] font-semibold text-[var(--color-pf-ink)]"
                      style={{ background: s.color }}
                    >
                      <span className="opacity-60">{s.label}</span> {s.value}
                    </motion.div>
                  ) : null
                )}
              </div>
            </motion.div>
          )}

          {/* Ejemplo 2 */}
          {ex2Visible && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[20px] px-6 py-3 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]"
            >
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.4vw,3vh),32px)] text-[var(--color-pf-ink)] mb-2">
                {EXAMPLES[1].sentence.replace("___", ex2Filled ? `【${EXAMPLES[1].answer}】` : "___")}
              </p>
              <div className="flex gap-2 flex-wrap">
                {EXAMPLES[1].steps.map((s, i) =>
                  i < ex2StepsVisible ? (
                    <motion.div
                      key={`e2-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="px-3 py-1.5 rounded-xl text-[clamp(16px,1.8vw,22px)] font-semibold text-[var(--color-pf-ink)]"
                      style={{ background: s.color }}
                    >
                      <span className="opacity-60">{s.label}</span> {s.value}
                    </motion.div>
                  ) : null
                )}
              </div>
            </motion.div>
          )}

          {/* Conclusión */}
          {conclusionVisible && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 px-5 py-3 rounded-[16px] bg-[var(--color-pf-pill-soft)]"
            >
              <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,min(2vw,2.6vh),26px)] text-[var(--color-pf-ink)]">
                ¿Quién? + ¿Cuántos? = posesivo
              </span>
            </motion.div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={() => canPrev && setStep(step - 1)}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-bold text-lg disabled:opacity-30 hover:bg-white transition flex-shrink-0"
              aria-label="Atrás"
            >
              ←
            </button>
            <button
              onClick={() => canNext && setStep(step + 1)}
              disabled={!canNext}
              className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg disabled:opacity-40 hover:opacity-90 transition"
            >
              {step === 0
                ? "EMPEZAR"
                : step === totalSteps
                ? "COMPLETADO"
                : "SIGUIENTE PASO"}
            </button>
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-base">
              {step} / {totalSteps}
            </span>
          </div>
        </div>

        <CharacterStage bubble={BUBBLES[step] || ""} step={step}>
          <VitoPill className="w-full h-auto" />
        </CharacterStage>
      </div>
    </div>
  );
}
