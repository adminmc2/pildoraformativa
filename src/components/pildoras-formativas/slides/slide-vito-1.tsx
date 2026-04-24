"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";
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
  steps: { label: string; value: string }[];
  answer: string;
};

const EXAMPLES: Example[] = [
  {
    id: "madre",
    sentence: "___ madre es Catalina.",
    steps: [
      { label: "¿Quién?", value: "Javier = él" },
      { label: "¿Singular o plural?", value: "madre = singular" },
      { label: "Resultado", value: "él + singular → su" },
    ],
    answer: "Su",
  },
  {
    id: "abuelo",
    sentence: "___ abuelo se llama Manolo.",
    steps: [
      { label: "¿Quién?", value: "Javier = él" },
      { label: "¿Singular o plural?", value: "abuelo = singular" },
      { label: "Resultado", value: "él + singular → su" },
    ],
    answer: "Su",
  },
];

const BUBBLES = [
  "Vamos a razonar con el texto de Javier.",         // 0 — solo texto
  "¿De quién es la madre?",                           // 1 — frase aparece (sin chips)
  "De Javier. Él.",                                    // 2 — ¿Quién? aparece
  "«Madre»: singular.",                                // 3 — ¿Singular o plural? aparece
  "Él + singular = ...",                                // 4 — pausa: el alumno piensa
  "¡Su madre!",                                        // 5 — resultado aparece + relleno
  "Otra frase. ¿De quién es el abuelo?",               // 6 — frase 2 aparece (sin chips)
  "De él. Otra vez.",                                   // 7 — ¿Quién? aparece
  "«Abuelo»: singular.",                               // 8 — ¿Singular o plural? aparece
  "Él + singular = ...",                                // 9 — pausa
  "¡Siempre funciona!",                                // 10 — resultado + relleno
  "¿De quién es? + ¿la palabra es singular o plural? = posesivo.",  // 11 — conclusión
];

// Fases: 0=texto, 1-5=ejemplo 1, 6-10=ejemplo 2, 11=conclusión
export function SlideVito1() {
  const [step, setStep] = useState(0);
  const totalSteps = 11;

  const canNext = step < totalSteps;
  const canPrev = step > 0;

  // Ejemplo activo: 0 (steps 1-5), 1 (steps 6-10), ninguno (-1)
  const activeIdx = step >= 6 ? 1 : step >= 1 ? 0 : -1;
  const ex = activeIdx >= 0 ? EXAMPLES[activeIdx] : null;

  // Chips visibles: frase primero (0), luego 1, 2, pausa (2), resultado (3)
  let stepsVisible = 0;
  if (activeIdx === 0) {
    if (step <= 3) stepsVisible = Math.max(0, step - 1);  // 1→0, 2→1, 3→2
    else if (step === 4) stepsVisible = 2;                  // pausa: sin cambio
    else stepsVisible = 3;                                  // 5→3 (resultado)
  } else if (activeIdx === 1) {
    if (step <= 8) stepsVisible = Math.max(0, step - 6);  // 6→0, 7→1, 8→2
    else if (step === 9) stepsVisible = 2;                  // pausa
    else stepsVisible = 3;                                  // 10→3
  }

  const isFilled = (activeIdx === 0 && step >= 5) || (activeIdx === 1 && step >= 10);
  const conclusionVisible = step === totalSteps;

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
            ¿Quién tiene qué?
          </h1>

          <p className="text-[clamp(18px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-1.5 rounded-full self-start">
            ¿Cómo se elige el posesivo?
          </p>

          {/* Terminal — todo ocurre aquí dentro */}
          <Terminal className="border-[var(--color-pf-pill)] [box-shadow:6px_6px_0px_var(--color-pf-pill)]">
            {TEXT_LINES.map((line, i) => (
              <TypingAnimation key={i} speed={25} delay={i * 800} className="text-green-400 text-[clamp(18px,1.8vw,22px)]">
                {`> ${line}`}
              </TypingAnimation>
            ))}

            {/* Ejemplo activo */}
            {ex && (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 border-t border-gray-700 pt-3"
              >
                <div className="text-yellow-300 text-[clamp(20px,2.2vw,28px)] font-bold mb-2">
                  {(() => {
                    const [before, after] = ex.sentence.split("___");
                    return (
                      <>
                        {before}
                        {isFilled ? (
                          <span className="inline-block px-2 py-0.5 rounded-lg bg-green-500 text-white mx-1">
                            {ex.answer}
                          </span>
                        ) : (
                          <span className="inline-block px-3 py-0.5 rounded-lg bg-white/20 mx-1">___</span>
                        )}
                        {after}
                      </>
                    );
                  })()}
                </div>

                <div className="flex flex-col gap-1.5">
                  {ex.steps.map((s, i) =>
                    i < stepsVisible ? (
                      <motion.div
                        key={`${ex.id}-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[clamp(18px,1.8vw,24px)]"
                      >
                        <span className="text-gray-400">{s.label}</span>{" "}
                        <span className="text-cyan-300 font-semibold">{s.value}</span>
                      </motion.div>
                    ) : null
                  )}
                </div>

                {isFilled && (
                  <AnimatedSpan delay={0.2} className="text-green-400 mt-2 text-[clamp(18px,1.8vw,24px)]">
                    ✓ {ex.answer} {activeIdx === 0 ? "madre" : "abuelo"}
                  </AnimatedSpan>
                )}
              </motion.div>
            )}

            {/* Conclusión */}
            {conclusionVisible && (
              <AnimatedSpan delay={0.2} className="text-green-400 mt-3 border-t border-gray-700 pt-3 text-[clamp(20px,2.2vw,28px)] font-bold">
                ✓ ¿De quién es? + ¿singular o plural? = posesivo
              </AnimatedSpan>
            )}
          </Terminal>

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
