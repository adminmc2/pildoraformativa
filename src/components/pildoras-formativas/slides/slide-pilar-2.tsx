"use client";

import { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Placement = "pending" | "uno" | "varios";

type Phrase = {
  id: number;
  before: string;
  pos: string;
  after: string;
  correct: "uno" | "varios";
};

const PHRASES: Phrase[] = [
  { id: 0, before: "Yo vivo con ", pos: "mi", after: " familia.", correct: "uno" },
  { id: 1, before: "", pos: "Mis", after: " abuelos son mexicanos.", correct: "varios" },
  { id: 2, before: "Yo tengo ", pos: "mis", after: " libros en la cartera.", correct: "varios" },
  { id: 3, before: "", pos: "Mi", after: " familia vive en Buenos Aires.", correct: "uno" },
];

function PhraseInline({ p }: { p: Phrase }) {
  return (
    <span>
      {p.before}
      <span className="inline-block px-2 py-0 rounded-lg bg-[var(--color-pf-spark)] text-white mx-0.5">
        {p.pos}
      </span>
      {p.after}
    </span>
  );
}

export function SlidePilar2() {
  const [placements, setPlacements] = useState<Placement[]>(
    PHRASES.map(() => "pending")
  );

  const currentIndex = placements.findIndex((p) => p === "pending");
  const allPlaced = currentIndex === -1;
  const placedCount = placements.filter((p) => p !== "pending").length;

  const place = (box: "uno" | "varios") => {
    if (currentIndex < 0) return;
    setPlacements((prev) => {
      const next = [...prev];
      next[currentIndex] = box;
      return next;
    });
  };

  const reset = () => setPlacements(PHRASES.map(() => "pending"));

  const inUno = PHRASES.filter((_, i) => placements[i] === "uno");
  const inVarios = PHRASES.filter((_, i) => placements[i] === "varios");

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-3 min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vh,22px)] text-[var(--color-pf-ink)]">
              PILI
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "var(--color-pf-star-soft)", color: "#8A6B00" }}
            >
              Anfitriona
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(48px,min(8vw,11vh),128px)] text-[var(--color-pf-ink)]">
            ¿Uno o varios?
          </h1>
          <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
            Ordena las frases en dos grupos.
          </p>

          <div className="h-[clamp(70px,9vh,110px)] flex items-center justify-center">
            {!allPlaced && (
              <div
                key={PHRASES[currentIndex].id}
                className="bg-white rounded-[24px] px-8 py-5 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.18)] font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.8vw,3.6vh),40px)] leading-tight text-[var(--color-pf-ink)] text-center"
                style={{ animation: "centerIn 500ms cubic-bezier(0.2,0.8,0.2,1)" }}
              >
                <PhraseInline p={PHRASES[currentIndex]} />
              </div>
            )}
            {allPlaced && (
              <div
                className="font-[family-name:var(--font-pf-display)] text-[clamp(32px,min(4.2vw,5.4vh),64px)] text-[var(--color-pf-ink)] text-center"
                style={{ animation: "celebrate 700ms cubic-bezier(0.2,0.8,0.2,1)" }}
              >
                ¡LO HAS VISTO!
              </div>
            )}
          </div>

          <div className="text-xs font-semibold text-[var(--color-pf-ink)] opacity-70 text-center">
            Frase {Math.min(currentIndex >= 0 ? currentIndex + 1 : PHRASES.length, PHRASES.length)} / {PHRASES.length}
          </div>

          <div className="grid grid-cols-2 gap-5 h-[clamp(170px,22vh,260px)]">
            <button
              onClick={() => place("uno")}
              disabled={allPlaced}
              className={`rounded-[24px] border-4 border-dashed p-4 flex flex-col items-center justify-start transition-all overflow-hidden ${
                allPlaced
                  ? "border-[var(--color-pf-ink)]/15 bg-[var(--color-pf-star-soft)] cursor-default"
                  : "border-[var(--color-pf-ink)]/25 bg-[var(--color-pf-star-soft)] hover:bg-[var(--color-pf-star)]/50 hover:border-[var(--color-pf-ink)]/40 active:scale-[0.98]"
              }`}
              style={{
                animation: inUno.length === 2 && allPlaced ? "boxGlow 900ms ease-out 200ms" : "none",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-[var(--color-pf-ink)]"></span>
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(24px,min(3vw,4vh),44px)] text-[var(--color-pf-ink)]">
                  UNO
                </span>
              </div>
              <div className="space-y-1.5 w-full">
                {inUno.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-xl px-3 py-1.5 text-[clamp(12px,1.4vh,15px)] font-medium text-left text-[var(--color-pf-ink)]"
                    style={{ animation: "dropIn 550ms cubic-bezier(0.2,0.8,0.2,1)" }}
                  >
                    <PhraseInline p={p} />
                  </div>
                ))}
              </div>
            </button>

            <button
              onClick={() => place("varios")}
              disabled={allPlaced}
              className={`rounded-[24px] border-4 border-dashed p-4 flex flex-col items-center justify-start transition-all overflow-hidden ${
                allPlaced
                  ? "border-[var(--color-pf-ink)]/15 bg-[var(--color-pf-moon-soft)] cursor-default"
                  : "border-[var(--color-pf-ink)]/25 bg-[var(--color-pf-moon-soft)] hover:bg-[var(--color-pf-moon)]/40 hover:border-[var(--color-pf-ink)]/40 active:scale-[0.98]"
              }`}
              style={{
                animation: inVarios.length === 2 && allPlaced ? "boxGlow 900ms ease-out 350ms" : "none",
              }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-pf-ink)]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-pf-ink)]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-pf-ink)]"></span>
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(24px,min(3vw,4vh),44px)] text-[var(--color-pf-ink)] ml-1">
                  VARIOS
                </span>
              </div>
              <div className="space-y-1.5 w-full">
                {inVarios.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-xl px-3 py-1.5 text-[clamp(12px,1.4vh,15px)] font-medium text-left text-[var(--color-pf-ink)]"
                    style={{ animation: "dropIn 550ms cubic-bezier(0.2,0.8,0.2,1)" }}
                  >
                    <PhraseInline p={p} />
                  </div>
                ))}
              </div>
            </button>
          </div>

          {allPlaced && (
            <div>
              <button
                onClick={reset}
                className="px-4 py-1.5 rounded-full bg-white/80 text-[var(--color-pf-ink)] text-xs font-semibold hover:bg-white transition"
              >
                ↺ Reiniciar
              </button>
            </div>
          )}
        </div>

        <CharacterStage
          bubble={
            allPlaced
              ? "¡Dos grupos!"
              : placedCount === 0
              ? "¡A ordenar!"
              : placedCount === 1
              ? "¡Bien!"
              : placedCount === 2
              ? "¡Otra más!"
              : "¡Sigue así!"
          }
          step={placedCount}
        >
          <PilarStar
            pose={allPlaced ? "wave" : placedCount >= 2 ? "point" : "hug"}
            className="w-full h-auto"
          />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes centerIn {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes dropIn {
          0% {
            opacity: 0;
            transform: translateY(-26px) scale(1.08);
          }
          60% {
            transform: translateY(4px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes celebrate {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          60% {
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes boxGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(10, 10, 10, 0);
          }
          50% {
            box-shadow: 0 0 0 16px rgba(10, 10, 10, 0.08);
          }
        }
      `}</style>
    </div>
  );
}
