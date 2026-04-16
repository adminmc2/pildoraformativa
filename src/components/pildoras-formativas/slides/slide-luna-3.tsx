"use client";

import { useState } from "react";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type MatchItem = {
  id: number;
  before: string;
  after: string;
  answer: string;
};

const ITEMS: MatchItem[] = [
  { id: 0, before: "Yo vivo con ", after: " familia.", answer: "mi" },
  { id: 1, before: "", after: " abuelos son mexicanos.", answer: "Mis" },
  { id: 2, before: "David tiene ", after: " libro en la cartera.", answer: "su" },
  { id: 3, before: "", after: " profesor es muy simpático.", answer: "Nuestro" },
  { id: 4, before: "Graciela vive con ", after: " tíos.", answer: "sus" },
  { id: 5, before: "", after: " madre trabaja en el hotel.", answer: "Su" },
];

const POOL = ["sus", "mi", "Nuestro", "Su", "Mis", "su"];

export function SlideLuna3() {
  const [matched, setMatched] = useState<(string | null)[]>(ITEMS.map(() => null));
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const matchedCount = matched.filter((m) => m !== null).length;
  const allMatched = matchedCount === ITEMS.length;

  const usedAnswers = new Set(matched.filter(Boolean));

  const selectItem = (i: number) => {
    if (matched[i] !== null || allMatched) return;
    setActiveItem(i);
  };

  const selectPool = (word: string) => {
    if (activeItem === null) return;
    if (word === ITEMS[activeItem].answer) {
      setMatched((prev) => {
        const next = [...prev];
        next[activeItem] = word;
        return next;
      });
      setActiveItem(null);
    }
  };

  const reset = () => {
    setMatched(ITEMS.map(() => null));
    setActiveItem(null);
  };

  const bubble = allMatched
    ? "¡Todo conectado!"
    : activeItem !== null
    ? "¿Cuál va aquí?"
    : matchedCount === 0
    ? "Toca una frase..."
    : `¡${matchedCount} de ${ITEMS.length}!`;

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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(48px,min(7.5vw,10vh),120px)] text-[var(--color-pf-ink)]">
            Conecta
          </h1>

          <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
            Toca una frase. Luego toca su posesivo.
          </p>

          <div className="bg-white rounded-[24px] px-5 py-4 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col gap-2 mb-4">
              {ITEMS.map((item, i) => {
                const isMatched = matched[i] !== null;
                const isActive = activeItem === i;
                return (
                  <button
                    key={item.id}
                    onClick={() => selectItem(i)}
                    disabled={isMatched}
                    className={`text-left rounded-xl px-4 py-2 font-[family-name:var(--font-pf-ui)] text-[clamp(14px,1.6vh,20px)] transition-all ${
                      isActive
                        ? "bg-[var(--color-pf-moon)] text-white ring-2 ring-[var(--color-pf-ink)]"
                        : isMatched
                        ? "bg-[var(--color-pf-pill-soft)] text-[var(--color-pf-ink)]"
                        : "bg-[var(--color-pf-moon-soft)]/50 text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-moon-soft)] cursor-pointer"
                    }`}
                  >
                    {item.before}
                    {isMatched ? (
                      <span className="inline-block px-2 py-0 rounded-md bg-[var(--color-pf-spark)] text-white font-[family-name:var(--font-pf-display)] mx-0.5">
                        {matched[i]}
                      </span>
                    ) : (
                      <span className={`inline-block px-2 mx-0.5 rounded-md ${isActive ? "bg-white/30" : "bg-black/10"}`}>
                        ___
                      </span>
                    )}
                    {item.after}
                  </button>
                );
              })}
            </div>

            {!allMatched && (
              <div className="flex flex-wrap gap-2 pt-3 border-t-2 border-dashed border-[var(--color-pf-ink)]/10">
                {POOL.map((word, pi) => {
                  const isUsed = usedAnswers.has(word) && POOL.filter((w) => w === word).length <= [...usedAnswers].filter((w) => w === word).length;
                  return (
                    <button
                      key={pi}
                      onClick={() => selectPool(word)}
                      disabled={isUsed || activeItem === null}
                      className={`px-4 py-2 rounded-[14px] font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.8vh,22px)] transition ${
                        isUsed
                          ? "bg-gray-100 text-gray-300 cursor-default"
                          : activeItem !== null
                          ? "bg-[var(--color-pf-star-soft)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-star)]/50 active:scale-[0.96] cursor-pointer"
                          : "bg-[var(--color-pf-star-soft)] text-[var(--color-pf-ink)] opacity-50 cursor-default"
                      }`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>
            )}

            {allMatched && (
              <div className="pt-3">
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

        <CharacterStage bubble={bubble} step={matchedCount * 2 + (activeItem !== null ? 1 : 0)}>
          <LunaMoon className="w-full h-auto" />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes doneIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
