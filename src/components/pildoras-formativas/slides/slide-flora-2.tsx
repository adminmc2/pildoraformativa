"use client";

import { useState } from "react";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Row = {
  id: string;
  owner: string;
  singular: string;
  plural: string;
};

const ROWS: Row[] = [
  { id: "yo", owner: "Yo", singular: "mi", plural: "mis" },
  { id: "tu", owner: "Tú", singular: "tu", plural: "tus" },
  { id: "david", owner: "David", singular: "su", plural: "sus" },
  { id: "nosotros", owner: "Nosotros", singular: "nuestro", plural: "nuestros" },
];

export function SlideFlora2() {
  const [step, setStep] = useState(0);
  const totalSteps = 5;

  const canNext = step < totalSteps;
  const canPrev = step > 0;

  const rowsVisible = Math.min(step, ROWS.length);
  const insightRevealed = step === totalSteps;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-4 min-w-0">
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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(44px,min(7vw,10vh),112px)] text-[var(--color-pf-ink)]">
            ¿Y con otros dueños?
          </h1>

          <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
            A cada dueño, su palabra.
          </p>

          <div className="bg-white rounded-[28px] px-8 py-6 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)]">
            <div className="grid grid-cols-[auto_1fr_1fr] gap-x-6 gap-y-2.5 items-center">
              <div></div>
              <div className="text-[10px] font-semibold tracking-wider text-[var(--color-pf-ink)] opacity-70 text-center">
                1 LIBRO
              </div>
              <div className="text-[10px] font-semibold tracking-wider text-[var(--color-pf-ink)] opacity-70 text-center">
                2 LIBROS
              </div>

              {ROWS.map((row, i) => {
                const visible = i < rowsVisible;
                return (
                  <RowFragment key={row.id} row={row} visible={visible} />
                );
              })}
            </div>

            {/* Insight lo dice Flora en su burbuja */}
          </div>

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
                : step < ROWS.length
                ? "SIGUIENTE DUEÑO"
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
              ? "Cada dueño tiene su posesivo. ¡Singular y plural!"
              : step === 0
              ? "Ahora varios dueños..."
              : step === 1
              ? "Yo..."
              : step === 2
              ? "Tú..."
              : step === 3
              ? "David..."
              : "¡Nosotros!"
          }
          step={step}
        >
          <FloraFlower className="w-full h-auto" />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes rowIn {
          0% {
            opacity: 0;
            transform: translateX(-14px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
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

function RowFragment({ row, visible }: { row: Row; visible: boolean }) {
  if (!visible) {
    return (
      <>
        <div className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,2vh,28px)] text-[var(--color-pf-ink)]/25">
          {row.owner}
        </div>
        <div className="py-2 rounded-xl border-2 border-dashed border-[var(--color-pf-ink)]/10"></div>
        <div className="py-2 rounded-xl border-2 border-dashed border-[var(--color-pf-ink)]/10"></div>
      </>
    );
  }
  return (
    <>
      <div
        className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,2vh,28px)] text-[var(--color-pf-ink)]"
        style={{ animation: "rowIn 520ms cubic-bezier(0.2,0.8,0.2,1)" }}
      >
        {row.owner}
      </div>
      <div
        className="bg-[var(--color-pf-star-soft)] rounded-xl px-3 py-1.5 text-center font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.9vh,26px)] text-[var(--color-pf-ink)]"
        style={{ animation: "rowIn 520ms cubic-bezier(0.2,0.8,0.2,1) 80ms both" }}
      >
        <span className="inline-block px-2 py-0 rounded-lg bg-[var(--color-pf-spark)] text-white mr-1">
          {row.singular}
        </span>
        libro
      </div>
      <div
        className="bg-[var(--color-pf-moon-soft)] rounded-xl px-3 py-1.5 text-center font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.9vh,26px)] text-[var(--color-pf-ink)]"
        style={{ animation: "rowIn 520ms cubic-bezier(0.2,0.8,0.2,1) 160ms both" }}
      >
        <span className="inline-block px-2 py-0 rounded-lg bg-[var(--color-pf-spark)] text-white mr-1">
          {row.plural}
        </span>
        libros
      </div>
    </>
  );
}
