"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Example = {
  id: string;
  sentence: string;
  steps: { label: string; value: string; color: string }[];
  choices: { text: string; color: string }[];
  correct: number;
  answer: string;
  answerColor: string;
  wrongHint: string;
};

const EXAMPLES: Example[] = [
  {
    id: "mochilas",
    sentence: "Nosotros tenemos ___ mochilas en la clase.",
    steps: [
      { label: "¿Quién?", value: "Nosotros", color: "var(--color-pf-flower-soft)" },
      { label: "¿Singular o plural?", value: "mochilas = plural", color: "var(--color-pf-star-soft)" },
      { label: "¿Femenino o masculino?", value: "mochilas = femenino", color: "var(--color-pf-flower-soft)" },
    ],
    choices: [
      { text: "nuestros", color: "var(--color-pf-moon)" },
      { text: "nuestras", color: "var(--color-pf-flower)" },
    ],
    correct: 1,
    answer: "nuestras",
    answerColor: "var(--color-pf-flower)",
    wrongHint: "No. Fíjate: femenino.",
  },
  {
    id: "libro",
    sentence: "¿Vosotros tenéis ___ libro de español?",
    steps: [
      { label: "¿Quién?", value: "Vosotros", color: "var(--color-pf-flower-soft)" },
      { label: "¿Singular o plural?", value: "libro = singular", color: "var(--color-pf-star-soft)" },
      { label: "¿Femenino o masculino?", value: "libro = masculino", color: "var(--color-pf-moon-soft)" },
    ],
    choices: [
      { text: "vuestra", color: "var(--color-pf-flower)" },
      { text: "vuestro", color: "var(--color-pf-moon)" },
    ],
    correct: 1,
    answer: "vuestro",
    answerColor: "var(--color-pf-moon)",
    wrongHint: "No. Fíjate: masculino.",
  },
];

const BUBBLES = [
  "Ahora con nosotros y vosotros. Hay un paso más.",    // 0 — intro
  "¿De quién son las mochilas?",                          // 1 — frase aparece
  "De nosotros.",                                          // 2 — ¿Quién?
  "«Mochilas»: plural.",                                   // 3 — ¿Singular o plural?
  "Y femenino.",                                           // 4 — ¿Femenino o masculino?
  "Nosotros + plural + femenino = ¿cuál?",                 // 5 — elección
  "¡Nuestras mochilas!",                                   // 6 — resultado
  "Otra. ¿De quién es el libro?",                          // 7 — frase 2 aparece
  "De vosotros.",                                          // 8 — ¿Quién?
  "«Libro»: singular.",                                    // 9 — ¿Singular o plural?
  "Y masculino.",                                          // 10 — ¿Femenino o masculino?
  "Vosotros + singular + masculino = ¿cuál?",              // 11 — elección
  "¡Vuestro libro!",                                       // 12 — resultado
  "Tres preguntas. Siempre las mismas.",                    // 13 — conclusión visual
];

// Fases: 0=intro, 1-6=ejemplo 1, 7-12=ejemplo 2, 13=conclusión
export function SlideVito2() {
  const [step, setStep] = useState(0);
  const [wrongChoice, setWrongChoice] = useState<number | null>(null);
  const totalSteps = 13;

  const canNext = step < totalSteps;
  const canPrev = step > 0;
  const isChoiceStep = step === 5 || step === 11;

  // Ejemplo activo
  const activeIdx = step >= 7 && step <= 12 ? 1 : step >= 1 && step <= 6 ? 0 : -1;
  const ex = activeIdx >= 0 ? EXAMPLES[activeIdx] : null;

  // Chips visibles
  let stepsVisible = 0;
  if (activeIdx === 0) stepsVisible = Math.min(step - 1, 3);
  else if (activeIdx === 1) stepsVisible = Math.min(step - 7, 3);

  const isFilled = step === 6 || step === 12;
  const conclusionVisible = step === totalSteps;

  const handleChoice = (choiceIdx: number) => {
    if (!ex) return;
    if (choiceIdx === ex.correct) {
      setWrongChoice(null);
      setStep(step + 1);
    } else {
      setWrongChoice(choiceIdx);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
      setWrongChoice(null);
    }
  };

  const bubble = (() => {
    if (isChoiceStep && wrongChoice !== null && ex) return ex.wrongHint;
    return BUBBLES[step] || "";
  })();

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-4 md:gap-8 items-center">
        <div className="flex flex-col gap-1.5 min-w-0">
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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(36px,min(5.5vw,7.5vh),80px)] text-[var(--color-pf-ink)]">
            Paso a paso
          </h1>

          <p className="text-[clamp(18px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-1.5 rounded-full self-start">
            ¿Cómo se elige el posesivo correcto?
          </p>

          {/* Ejemplo activo */}
          {ex && (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl px-6 py-4 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]"
            >
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.4vw,3vh),32px)] text-[var(--color-pf-ink)] mb-2">
                {(() => {
                  const [before, after] = ex.sentence.split("___");
                  return (
                    <>
                      {before}
                      {isFilled ? (
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-lg text-white font-bold mx-1"
                          style={{ background: ex.answerColor }}
                        >
                          {ex.answer}
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-0.5 rounded-lg bg-black/10 mx-1">___</span>
                      )}
                      {after}
                    </>
                  );
                })()}
              </p>

              <div className="flex gap-2 flex-wrap">
                {ex.steps.map((s, i) =>
                  i < stepsVisible ? (
                    <motion.div
                      key={`${ex.id}-${i}`}
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

              {/* Botones de elección */}
              {isChoiceStep && (
                <div className="flex gap-3 mt-3">
                  {ex.choices.map((choice, i) => (
                    <button
                      key={`choice-${i}`}
                      type="button"
                      onClick={() => handleChoice(i)}
                      disabled={wrongChoice === i}
                      className={`px-6 py-2.5 rounded-xl font-bold text-[clamp(18px,2vw,26px)] cursor-pointer transition-all ${
                        wrongChoice === i
                          ? "bg-red-500/60 text-white line-through opacity-60 cursor-not-allowed"
                          : "text-white hover:scale-105 hover:opacity-90 active:scale-95"
                      }`}
                      style={wrongChoice !== i ? { background: choice.color } : undefined}
                    >
                      {choice.text}
                    </button>
                  ))}
                </div>
              )}

              {/* Resultado */}
              {isFilled && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 font-bold text-[clamp(18px,1.8vw,24px)] mt-2"
                >
                  ✓ {ex.answer}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Conclusión */}
          {conclusionVisible && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl px-6 py-4 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]"
            >
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,min(2vw,2.6vh),24px)] text-[var(--color-pf-ink)] mb-2">
                Con nosotros y vosotros:
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1.5 rounded-xl text-[clamp(16px,1.8vw,22px)] font-semibold text-[var(--color-pf-ink)]" style={{ background: "var(--color-pf-flower-soft)" }}>
                  ¿De quién es?
                </span>
                <span className="text-[clamp(16px,1.8vw,22px)] font-bold text-[var(--color-pf-ink)] self-center">+</span>
                <span className="px-3 py-1.5 rounded-xl text-[clamp(16px,1.8vw,22px)] font-semibold text-[var(--color-pf-ink)]" style={{ background: "var(--color-pf-star-soft)" }}>
                  ¿Singular o plural?
                </span>
                <span className="text-[clamp(16px,1.8vw,22px)] font-bold text-[var(--color-pf-ink)] self-center">+</span>
                <span className="px-3 py-1.5 rounded-xl text-[clamp(16px,1.8vw,22px)] font-semibold text-[var(--color-pf-ink)]" style={{ background: "var(--color-pf-moon-soft)" }}>
                  ¿Femenino o masculino?
                </span>
              </div>
            </motion.div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-bold text-lg disabled:opacity-30 hover:bg-white transition flex-shrink-0"
              aria-label="Atrás"
            >
              ←
            </button>
            {isChoiceStep ? (
              <span className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)]/20 text-[var(--color-pf-ink)] font-[family-name:var(--font-pf-display)] text-lg">
                ↑ ELIGE
              </span>
            ) : (
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
            )}
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-base">
              {step} / {totalSteps}
            </span>
          </div>
        </div>

        <CharacterStage bubble={bubble} step={step}>
          <VitoPill className="w-full h-auto" />
        </CharacterStage>
      </div>
    </div>
  );
}
