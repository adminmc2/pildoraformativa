"use client";

import { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

const LINE_A = ["Yo", "tengo", "mi", "libro."];
const LINE_B = ["Yo", "tengo", "mis", "libros."];
const DIFFS = [
  { wordIndex: 2, color: "var(--color-pf-spark)" },
  { wordIndex: 3, color: "var(--color-pf-pill)" },
];

export function SlidePilar3() {
  const [revealed, setRevealed] = useState(0);
  const allRevealed = revealed === DIFFS.length;

  const reveal = () => {
    if (revealed < DIFFS.length) setRevealed(revealed + 1);
  };

  const reset = () => setRevealed(0);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-4 min-w-0">
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
            ¿Qué cambia?
          </h1>

          <div className="flex items-center gap-3">
            <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
              Compara las dos frases. Hay 2 cosas distintas.
            </p>
            <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white text-[var(--color-pf-ink)] font-[family-name:var(--font-pf-display)] text-sm whitespace-nowrap shadow-[0_4px_16px_-8px_rgba(0,0,0,0.15)]">
              {revealed} / {DIFFS.length}
            </span>
          </div>

          <div className="bg-white rounded-[28px] px-10 py-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] flex flex-col gap-5 items-center">
            <div className="flex gap-4 items-baseline flex-wrap justify-center">
              {LINE_A.map((word, i) => (
                <WordToken
                  key={`a-${i}`}
                  word={word}
                  diffSpec={DIFFS.find((d) => d.wordIndex === i)}
                  revealed={revealed}
                />
              ))}
            </div>
            <div className="flex gap-4 items-baseline flex-wrap justify-center">
              {LINE_B.map((word, i) => (
                <WordToken
                  key={`b-${i}`}
                  word={word}
                  diffSpec={DIFFS.find((d) => d.wordIndex === i)}
                  revealed={revealed}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {!allRevealed ? (
              <button
                onClick={reveal}
                className="px-8 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(16px,2vh,22px)] hover:scale-[1.02] transition"
                style={{ animation: "btnPulse 2.2s ease-in-out infinite" }}
              >
                REVELAR DIFERENCIA →
              </button>
            ) : (
              <button
                onClick={reset}
                className="px-4 py-1.5 rounded-full bg-white/80 text-[var(--color-pf-ink)] text-xs font-semibold hover:bg-white transition"
              >
                ↺ Reiniciar
              </button>
            )}
          </div>
        </div>

        <CharacterStage
          bubble={
            allRevealed
              ? "Dos cambios. ¿Casualidad?"
              : revealed === 1
              ? "¡Una diferencia!"
              : "Compara bien..."
          }
          step={revealed}
        >
          <PilarStar
            pose={allRevealed ? "point" : revealed === 1 ? "wave" : "hug"}
            className="w-full h-auto"
          />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes btnPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(10, 10, 10, 0.28);
          }
          50% {
            box-shadow: 0 0 0 18px rgba(10, 10, 10, 0);
          }
        }
      `}</style>
    </div>
  );
}

function WordToken({
  word,
  diffSpec,
  revealed,
}: {
  word: string;
  diffSpec?: { wordIndex: number; color: string };
  revealed: number;
}) {
  const diffNum = diffSpec
    ? DIFFS.findIndex((d) => d.wordIndex === diffSpec.wordIndex)
    : -1;
  const isRevealed = diffNum >= 0 && revealed > diffNum;

  return (
    <span
      className="inline-block font-[family-name:var(--font-pf-display)] text-[clamp(28px,min(4vw,5vh),64px)] transition-all duration-400"
      style={{
        padding: isRevealed ? "4px 16px" : "4px 0",
        borderRadius: isRevealed ? 16 : 0,
        background: isRevealed ? diffSpec?.color : "transparent",
        color: isRevealed ? "#fff" : "var(--color-pf-ink)",
        animation: isRevealed
          ? `wordReveal 700ms cubic-bezier(0.2,0.8,0.2,1)`
          : "none",
      }}
    >
      {word}
      <style jsx>{`
        @keyframes wordReveal {
          0% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(255, 107, 74, 0.5);
          }
          50% {
            transform: scale(1.12);
            box-shadow: 0 0 0 22px rgba(255, 107, 74, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 107, 74, 0);
          }
        }
      `}</style>
    </span>
  );
}
