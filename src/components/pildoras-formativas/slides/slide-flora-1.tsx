"use client";

import { useState } from "react";
import { UserCircle } from "@phosphor-icons/react/dist/csr/UserCircle";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Item = {
  id: string;
  pos: "Su" | "Sus";
  label: string;
};

const ITEMS: Item[] = [
  { id: "padre", pos: "Su", label: "padre es agricultor." },
  { id: "madre", pos: "Su", label: "madre trabaja en el hotel." },
  { id: "hermanos", pos: "Sus", label: "hermanos se llaman Ana, Carlos y Pablo." },
  { id: "pueblo", pos: "Su", label: "pueblo está en Cantabria." },
];

export function SlideFlora1() {
  const [step, setStep] = useState(0);
  const totalSteps = 5;

  const canNext = step < totalSteps;
  const canPrev = step > 0;
  const itemsVisible = Math.min(step, ITEMS.length);
  const insightRevealed = step === totalSteps;

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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(42px,min(7vw,10vh),104px)] text-[var(--color-pf-ink)]">
            La familia<br />de Lucía
          </h1>

          <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
            Todo es de Lucía. ¿Qué cambia?
          </p>

          <div className="bg-white rounded-[28px] px-8 py-6 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3 mb-5">
              <UserCircle
                size={44}
                weight="duotone"
                color="var(--color-pf-flower)"
              />
              <div className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.4vh,32px)] text-[var(--color-pf-ink)]">
                LUCÍA
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {ITEMS.map((item, i) => {
                const visible = i < itemsVisible;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl px-4 py-2.5 border-2 transition-all duration-500 ${
                      visible
                        ? "bg-[var(--color-pf-flower-soft)] border-transparent"
                        : "bg-transparent border-dashed border-[var(--color-pf-ink)]/15"
                    }`}
                    style={{
                      animation: visible
                        ? `itemIn 520ms cubic-bezier(0.2,0.8,0.2,1)`
                        : "none",
                      minHeight: "46px",
                    }}
                  >
                    {visible && (
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-md text-white font-[family-name:var(--font-pf-display)] text-[clamp(15px,1.8vh,22px)]"
                          style={{ background: "var(--color-pf-spark)" }}
                        >
                          {item.pos}
                        </span>
                        <span className="font-[family-name:var(--font-pf-ui)] text-[clamp(15px,1.8vh,22px)] text-[var(--color-pf-ink)]">
                          {item.label}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Insight lo dice Flora en su burbuja */}
          </div>

          <div className="flex items-center gap-3 mt-2">
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
                : step < ITEMS.length
                ? "SIGUIENTE"
                : "REVELAR"}
            </button>
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-sm">
              {step} / {totalSteps}
            </span>
          </div>
        </div>

        <CharacterStage
          bubble={
            insightRevealed
              ? "Uno → Su · Varios → Sus"
              : step === 0
              ? "Observad..."
              : step === 1
              ? "Su padre..."
              : step === 2
              ? "Su madre..."
              : step === 3
              ? "¡Sus hermanos!"
              : "Su pueblo..."
          }
          step={step}
        >
          <FloraFlower className="w-full h-auto" />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes itemIn {
          0% {
            opacity: 0;
            transform: translateX(-14px) scale(0.96);
          }
          60% {
            transform: translateX(3px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
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
