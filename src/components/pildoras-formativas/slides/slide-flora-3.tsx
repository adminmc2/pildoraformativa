"use client";

import { useState } from "react";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Form = {
  id: string;
  pos: string;
  noun: string;
};

const FORMS_4: Form[] = [
  { id: "n1", pos: "Nuestro", noun: "profesor" },
  { id: "n2", pos: "Nuestra", noun: "madre" },
  { id: "n3", pos: "Nuestros", noun: "gatos" },
  { id: "n4", pos: "Nuestras", noun: "mochilas" },
];

const BUBBLES = [
  "¿Será igual?",
  "Nuestro...",
  "Nuestra...",
  "Nuestros...",
  "Nuestras...",
  "¡Cuatro formas!",
  "Familia 1 = solo número. Familia 2 = número + género.",
];

export function SlideFlora3() {
  const [step, setStep] = useState(0);
  const totalSteps = 6;

  const canNext = step < totalSteps;
  const canPrev = step > 0;

  const formsVisible = Math.min(step, FORMS_4.length);
  const countRevealed = step >= 5;
  const insightRevealed = step === 6;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-3 min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vh,22px)] text-[var(--color-pf-ink)]">
              FLORA
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "var(--color-pf-flower-soft)",
                color: "#8A1470",
              }}
            >
              Observadora
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(36px,min(6vw,8vh),96px)] text-[var(--color-pf-ink)]">
            ¿Todos funcionan igual?
          </h1>

          <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
            Compara las dos familias de posesivos.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* FAMILIA 1: mi/tu/su — solo cambian con número (2 formas) */}
            <div className="bg-white rounded-[22px] px-5 py-5 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.12)]">
              <div className="text-[10px] font-semibold tracking-wider text-[var(--color-pf-ink)] opacity-60 uppercase mb-3">
                Familia 1
              </div>
              <div className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,2.2vh,28px)] text-[var(--color-pf-ink)] mb-3">
                mi · tu · su
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(36px,min(4vw,5vh),60px)] text-[var(--color-pf-spark)] leading-none">
                  2
                </span>
                <span className="text-sm font-semibold text-[var(--color-pf-ink)] opacity-70">
                  formas cada uno
                </span>
              </div>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--color-pf-spark)] text-white text-sm font-[family-name:var(--font-pf-display)]">
                  mi
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--color-pf-spark)] text-white text-sm font-[family-name:var(--font-pf-display)]">
                  mis
                </span>
              </div>
              <p className="mt-3 text-xs text-[var(--color-pf-ink)] opacity-60">
                Solo cambian con el número (singular / plural).
              </p>
            </div>

            {/* FAMILIA 2: nuestro/vuestro — cambian con número Y género (4 formas) */}
            <div className="bg-white rounded-[22px] px-5 py-5 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)]">
              <div className="text-[10px] font-semibold tracking-wider text-[var(--color-pf-ink)] opacity-60 uppercase mb-3">
                Familia 2
              </div>
              <div className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,2.2vh,28px)] text-[var(--color-pf-ink)] mb-3">
                nuestro · vuestro
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                {FORMS_4.map((form, i) => {
                  const visible = i < formsVisible;
                  return (
                    <div
                      key={form.id}
                      className={`rounded-xl px-3 py-2 border-2 transition-all duration-500 min-h-[44px] ${
                        visible
                          ? "bg-[var(--color-pf-pill-soft)] border-transparent"
                          : "bg-transparent border-dashed border-[var(--color-pf-ink)]/15"
                      }`}
                      style={{
                        animation: visible
                          ? "formIn 520ms cubic-bezier(0.2,0.8,0.2,1)"
                          : "none",
                      }}
                    >
                      {visible && (
                        <div>
                          <span
                            className="inline-block px-2 py-0 rounded-md text-white font-[family-name:var(--font-pf-display)] text-[clamp(13px,1.4vh,17px)]"
                            style={{ background: "var(--color-pf-pill)" }}
                          >
                            {form.pos}
                          </span>
                          <span className="ml-1.5 font-[family-name:var(--font-pf-display)] text-[clamp(13px,1.4vh,17px)] text-[var(--color-pf-ink)]">
                            {form.noun}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {countRevealed && (
                <div
                  className="flex items-baseline gap-2 mb-2"
                  style={{ animation: "countIn 540ms cubic-bezier(0.2,0.8,0.2,1)" }}
                >
                  <span className="font-[family-name:var(--font-pf-display)] text-[clamp(36px,min(4vw,5vh),60px)] text-[var(--color-pf-pill)] leading-none">
                    4
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-pf-ink)] opacity-70">
                    formas cada uno
                  </span>
                </div>
              )}

              {countRevealed && (
                <p className="text-xs text-[var(--color-pf-ink)] opacity-60">
                  Cambian con número <strong>y género</strong>.
                </p>
              )}
            </div>
          </div>

          {/* Insight lo dice Flora en su burbuja */}

          <div className="flex items-center gap-3 mt-1">
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
                : step === 5
                ? "REVELAR"
                : "SIGUIENTE"}
            </button>
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-sm">
              {step} / {totalSteps}
            </span>
          </div>
        </div>

        <CharacterStage bubble={BUBBLES[step] || ""} step={step}>
          <FloraFlower className="w-full h-auto" />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes formIn {
          0% {
            opacity: 0;
            transform: translateY(-12px) scale(0.96);
          }
          60% {
            transform: translateY(3px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes countIn {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          60% {
            transform: scale(1.12);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes insightIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.94);
          }
          60% {
            transform: translateY(-2px) scale(1.04);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
