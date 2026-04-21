"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Example = {
  id: string;
  sentence: string;
  blank: string;
  steps: { label: string; value: string; color: string }[];
  answer: string;
};

const EXAMPLES: Example[] = [
  {
    id: "daniel",
    sentence: "Daniel estudia con ___ primo los fines de semana.",
    blank: "su",
    steps: [
      { label: "¿Quién?", value: "Daniel = él", color: "var(--color-pf-flower-soft)" },
      { label: "¿Cuántos?", value: "primo = uno", color: "var(--color-pf-star-soft)" },
      { label: "Resultado", value: "él + uno → su", color: "var(--color-pf-pill-soft)" },
    ],
    answer: "su",
  },
  {
    id: "nosotros",
    sentence: "Nosotros tenemos ___ mochilas en la clase.",
    blank: "nuestras",
    steps: [
      { label: "¿Quién?", value: "Nosotros", color: "var(--color-pf-flower-soft)" },
      { label: "¿Cuántos?", value: "mochilas = varias", color: "var(--color-pf-star-soft)" },
      { label: "¿Género?", value: "mochilas = femenino", color: "var(--color-pf-moon-soft)" },
      { label: "Resultado", value: "nosotros + fem. pl. → nuestras", color: "var(--color-pf-pill-soft)" },
    ],
    answer: "nuestras",
  },
];

const BUBBLES = [
  "Vamos pieza a pieza.",
  "Primero: ¿quién?",
  "Después: ¿uno o varios?",
  "Resultado.",
  "Ahora uno más difícil.",
  "¿Quién?",
  "¿Uno o varios?",
  "Con nuestro también importa el género.",
  "Resultado.",
  "Así se razona: persona + cosa = posesivo.",
];

export function SlideVito2() {
  const [step, setStep] = useState(0);
  const totalSteps = 9;

  const canNext = step < totalSteps;
  const canPrev = step > 0;

  // Example 1: steps 0-3 (0=sentence, 1-3=steps)
  // Example 2: steps 4-8 (4=sentence, 5-8=steps)
  // Step 9: conclusion
  const ex1StepsVisible = step >= 1 ? Math.min(step, 3) : 0;
  const ex1Filled = step >= 3;
  const ex2Visible = step >= 4;
  const ex2StepsVisible = step >= 5 ? Math.min(step - 4, 4) : 0;
  const ex2Filled = step >= 8;
  const conclusionVisible = step === 9;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-3 min-w-0">
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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(40px,min(6.5vw,9vh),96px)] text-[var(--color-pf-ink)]">
            Paso a paso
          </h1>

          <p className="text-[clamp(16px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full self-start">
            ¿Cómo se elige el posesivo correcto?
          </p>

          {/* Ejemplo 1 */}
          <div className="bg-white rounded-[20px] px-6 py-4 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]">
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.4vh),36px)] text-[var(--color-pf-ink)] mb-3">
              {EXAMPLES[0].sentence.replace("___", ex1Filled ? `【${EXAMPLES[0].answer}】` : "___")}
            </p>
            <div className="flex gap-2 flex-wrap">
              {EXAMPLES[0].steps.map((s, i) => (
                i < ex1StepsVisible ? (
                  <motion.div
                    key={`e1-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="px-3 py-1.5 rounded-xl text-[clamp(18px,2vw,26px)] font-semibold text-[var(--color-pf-ink)]"
                    style={{ background: s.color }}
                  >
                    <span className="opacity-60">{s.label}</span> {s.value}
                  </motion.div>
                ) : null
              ))}
            </div>
          </div>

          {/* Ejemplo 2 */}
          {ex2Visible && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[20px] px-6 py-4 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]"
            >
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.4vh),36px)] text-[var(--color-pf-ink)] mb-3">
                {EXAMPLES[1].sentence.replace("___", ex2Filled ? `【${EXAMPLES[1].answer}】` : "___")}
              </p>
              <div className="flex gap-2 flex-wrap">
                {EXAMPLES[1].steps.map((s, i) => (
                  i < ex2StepsVisible ? (
                    <motion.div
                      key={`e2-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="px-3 py-1.5 rounded-xl text-[clamp(18px,2vw,26px)] font-semibold text-[var(--color-pf-ink)]"
                      style={{ background: s.color }}
                    >
                      <span className="opacity-60">{s.label}</span> {s.value}
                    </motion.div>
                  ) : null
                ))}
              </div>
            </motion.div>
          )}

          {/* Conclusión eliminada — VITO ya lo dice en su burbuja */}

          <div className="flex items-center gap-3">
            <button
              onClick={() => canPrev && setStep(step - 1)}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-bold text-lg disabled:opacity-30 hover:bg-white transition flex-shrink-0"
            >
              ←
            </button>
            <button
              onClick={() => canNext && setStep(step + 1)}
              disabled={!canNext}
              className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg disabled:opacity-40 hover:opacity-90 transition"
            >
              {step === totalSteps ? "COMPLETADO" : "SIGUIENTE PASO"}
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
