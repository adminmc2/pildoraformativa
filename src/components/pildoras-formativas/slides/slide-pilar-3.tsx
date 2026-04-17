"use client";

import React, { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

// Frases sin "Yo"
const LINE_A = ["Tengo", "mi", "libro."];
const LINE_B = ["Tengo", "mis", "libros."];

// Diferencias: índice 1 (posesivo) e índice 2 (sustantivo)
const DIFFS = [
  { wordIndex: 1, color: "var(--color-pf-spark)" },
  { wordIndex: 2, color: "var(--color-pf-pill)" },
];

// Fase: 0=inicio, 1=posesivos iluminados, 2=sustantivos iluminados, 3=conclusión
type Phase = 0 | 1 | 2 | 3;

export function SlidePilar3() {
  const [phase, setPhase] = useState<Phase>(0);

  const next = () => {
    if (phase < 3) setPhase((phase + 1) as Phase);
  };
  const reset = () => setPhase(0);

  const bubble =
    phase === 0
      ? "Compara las dos frases."
      : phase === 1
      ? "mi → mis. El posesivo ha cambiado. ¿Por qué?"
      : phase === 2
      ? "libro → libros. ¡El nombre también cambia!"
      : "Un libro → mi. Varios libros → mis. El nombre manda: el posesivo le sigue.";

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
              Encuentra las 2 diferencias.
            </p>
            <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white text-[var(--color-pf-ink)] font-[family-name:var(--font-pf-display)] text-sm whitespace-nowrap shadow-[0_4px_16px_-8px_rgba(0,0,0,0.15)]">
              {Math.min(phase, 2)} / 2
            </span>
          </div>

          {/* Las dos frases siempre visibles */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-[24px] px-8 py-5 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]">
              <div className="flex gap-4 items-baseline justify-center font-[family-name:var(--font-pf-display)] text-[clamp(28px,min(4vw,5vh),64px)] text-[var(--color-pf-ink)]">
                {LINE_A.map((word, i) => (
                  <Word key={`a-${i}`} word={word} index={i} phase={phase} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[24px] px-8 py-5 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)]">
              <div className="flex gap-4 items-baseline justify-center font-[family-name:var(--font-pf-display)] text-[clamp(28px,min(4vw,5vh),64px)] text-[var(--color-pf-ink)]">
                {LINE_B.map((word, i) => (
                  <Word key={`b-${i}`} word={word} index={i} phase={phase} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {phase < 3 ? (
              <button
                onClick={next}
                className="px-8 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(16px,2vh,22px)] hover:scale-[1.02] transition"
                style={{ animation: "btnPulse 2.2s ease-in-out infinite" }}
              >
                {phase === 0 ? "REVELAR DIFERENCIA →" : phase === 1 ? "SIGUIENTE DIFERENCIA →" : "¿CASUALIDAD?"}
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

        <CharacterStage bubble={bubble} step={phase}>
          <PilarStar
            pose={phase >= 3 ? "point" : phase >= 1 ? "wave" : "hug"}
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

function Word({ word, index, phase }: { word: string; index: number; phase: Phase }) {
  const diff = DIFFS.find((d) => d.wordIndex === index);
  if (!diff) return <span>{word}</span>;

  const diffNum = DIFFS.indexOf(diff);
  const isLit = phase > diffNum;

  return (
    <span
      className="inline-block transition-all duration-500"
      style={{
        padding: isLit ? "4px 16px" : "4px 0",
        borderRadius: isLit ? 16 : 0,
        background: isLit ? diff.color : "transparent",
        color: isLit ? "#fff" : "var(--color-pf-ink)",
        transform: isLit ? "scale(1.08)" : "scale(1)",
      }}
    >
      {word}
    </span>
  );
}
