"use client";

import { useState } from "react";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Slot = {
  id: string;
  person: string;
  singular: string;
  plural: string;
  gap: "singular" | "plural";
  options: string[];
  correct: number;
};

const SLOTS: Slot[] = [
  { id: "yo", person: "Yo", singular: "mi", plural: "mis", gap: "plural", options: ["mis", "mi", "mes"], correct: 0 },
  { id: "tu", person: "Tú", singular: "tu", plural: "tus", gap: "singular", options: ["tú", "tu", "te"], correct: 1 },
  { id: "el", person: "Él / Ella", singular: "su", plural: "sus", gap: "plural", options: ["su", "sus", "sos"], correct: 1 },
  { id: "nos", person: "Nosotros", singular: "nuestro", plural: "nuestros", gap: "singular", options: ["nuestro", "nuestra", "nos"], correct: 0 },
  { id: "vos", person: "Vosotros", singular: "vuestro", plural: "vuestras", gap: "plural", options: ["vuestro", "vuestras", "vuestos"], correct: 1 },
  { id: "ellos", person: "Ellos", singular: "su", plural: "sus", gap: "singular", options: ["su", "se", "so"], correct: 0 },
];

const BUBBLES = [
  "¿Os acordáis?",
  "Yo...",
  "Tú...",
  "Él / Ella...",
  "Nosotros...",
  "Vosotros...",
  "Ellos...",
  "¡Tabla completa! Comparad con el libro, p. 37.",
];

export function SlideLuna2() {
  const [filled, setFilled] = useState<(number | null)[]>(SLOTS.map(() => null));
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const filledCount = filled.filter((f) => f !== null).length;
  const allFilled = filledCount === SLOTS.length;

  const selectSlot = (i: number) => {
    if (filled[i] !== null || allFilled) return;
    setActiveSlot(i);
  };

  const chooseOption = (optIndex: number) => {
    if (activeSlot === null) return;
    setFilled((prev) => {
      const next = [...prev];
      next[activeSlot] = optIndex;
      return next;
    });
    setActiveSlot(null);
  };

  const reset = () => {
    setFilled(SLOTS.map(() => null));
    setActiveSlot(null);
  };

  const bubble = allFilled
    ? BUBBLES[7]
    : BUBBLES[Math.min(filledCount + 1, 6)];

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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(40px,min(6.5vw,8.5vh),104px)] text-[var(--color-pf-ink)]">
            Completa el cuadro
          </h1>

          <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
            Toca un hueco y elige la forma correcta.
          </p>

          <div className="bg-white rounded-[24px] px-5 py-4 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)]">
            <div className="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1.5 items-center text-[clamp(13px,1.5vh,18px)]">
              <div></div>
              <div className="text-[10px] font-semibold tracking-wider text-[var(--color-pf-ink)] opacity-60 text-center uppercase">
                Singular
              </div>
              <div className="text-[10px] font-semibold tracking-wider text-[var(--color-pf-ink)] opacity-60 text-center uppercase">
                Plural
              </div>

              {SLOTS.map((slot, i) => {
                const isFilled = filled[i] !== null;
                const isActive = activeSlot === i;
                const isCorrect = isFilled && filled[i] === slot.correct;

                const singContent = slot.gap === "singular"
                  ? isFilled
                    ? slot.options[filled[i]!]
                    : "___"
                  : slot.singular;

                const plurContent = slot.gap === "plural"
                  ? isFilled
                    ? slot.options[filled[i]!]
                    : "___"
                  : slot.plural;

                const gapCol = slot.gap;

                return (
                  <TableRow
                    key={slot.id}
                    person={slot.person}
                    singContent={singContent}
                    plurContent={plurContent}
                    gapCol={gapCol}
                    isFilled={isFilled}
                    isActive={isActive}
                    isCorrect={isCorrect}
                    onClick={() => selectSlot(i)}
                  />
                );
              })}
            </div>

            {activeSlot !== null && (
              <div
                className="mt-3 flex items-center justify-center gap-3"
                style={{ animation: "optionsIn 400ms cubic-bezier(0.2,0.8,0.2,1)" }}
              >
                {SLOTS[activeSlot].options.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => chooseOption(oi)}
                    className="px-5 py-2.5 rounded-[16px] bg-[var(--color-pf-moon-soft)] font-[family-name:var(--font-pf-display)] text-[clamp(16px,2vh,24px)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-moon)]/40 active:scale-[0.96] transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {allFilled && (
              <div className="mt-3">
                <button
                  onClick={reset}
                  className="px-4 py-1.5 rounded-full bg-white border-2 border-[var(--color-pf-ink)] text-[var(--color-pf-ink)] text-xs font-semibold hover:bg-[var(--color-pf-moon-soft)] transition"
                >
                  ↺ Reiniciar
                </button>
              </div>
            )}
          </div>
        </div>

        <CharacterStage bubble={bubble} step={filledCount}>
          <LunaMoon className="w-full h-auto" />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes optionsIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function TableRow({
  person,
  singContent,
  plurContent,
  gapCol,
  isFilled,
  isActive,
  isCorrect,
  onClick,
}: {
  person: string;
  singContent: string;
  plurContent: string;
  gapCol: "singular" | "plural";
  isFilled: boolean;
  isActive: boolean;
  isCorrect: boolean;
  onClick: () => void;
}) {
  const gapStyle = (col: "singular" | "plural") => {
    if (col !== gapCol) return "bg-[var(--color-pf-star-soft)] text-[var(--color-pf-ink)]";
    if (isActive) return "bg-[var(--color-pf-moon)] text-white ring-2 ring-[var(--color-pf-ink)]";
    if (isFilled && isCorrect) return "bg-[var(--color-pf-pill-soft)] text-[var(--color-pf-ink)]";
    if (isFilled && !isCorrect) return "bg-[var(--color-pf-spark-soft)] text-[var(--color-pf-ink)]";
    return "bg-white border-2 border-dashed border-[var(--color-pf-ink)]/25 text-[var(--color-pf-ink)]/40 cursor-pointer hover:border-[var(--color-pf-moon)]";
  };

  return (
    <>
      <div className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] pr-2">
        {person}
      </div>
      <div
        className={`rounded-lg px-3 py-1.5 text-center font-[family-name:var(--font-pf-display)] transition-all ${gapStyle("singular")}`}
        onClick={gapCol === "singular" && !isFilled ? onClick : undefined}
      >
        {singContent}
      </div>
      <div
        className={`rounded-lg px-3 py-1.5 text-center font-[family-name:var(--font-pf-display)] transition-all ${gapStyle("plural")}`}
        onClick={gapCol === "plural" && !isFilled ? onClick : undefined}
      >
        {plurContent}
      </div>
    </>
  );
}
