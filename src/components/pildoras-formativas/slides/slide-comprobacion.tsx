"use client";

import { useEffect, useState } from "react";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";

type Phase = "prompt" | "timing" | "question";

const TOTAL_SECONDS = 30;

export function SlideComprobacion() {
  const [phase, setPhase] = useState<Phase>("prompt");
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    if (phase !== "timing") return;
    if (seconds <= 0) {
      setPhase("question");
      return;
    }
    const t = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, phase]);

  const start = () => {
    setSeconds(TOTAL_SECONDS);
    setPhase("timing");
  };

  const skipToQuestion = () => setPhase("question");
  const reset = () => {
    setPhase("prompt");
    setSeconds(TOTAL_SECONDS);
  };

  const progress = ((TOTAL_SECONDS - seconds) / TOTAL_SECONDS) * 100;

  return (
    <div className="w-full h-full max-w-[1400px] mx-auto grid grid-cols-[1.2fr_1fr] gap-8 items-stretch overflow-hidden">
      <div className="flex flex-col min-h-0 overflow-hidden justify-center">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-[family-name:var(--font-pf-display)] text-xl text-[var(--color-pf-ink)]">
            LUNA
          </span>
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: "var(--color-pf-moon-soft)",
              color: "#3B2A8A",
            }}
          >
            Verificadora
          </span>
        </div>

        <h1 className="flex-shrink-0 font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(40px,5.5vw,96px)] text-[var(--color-pf-ink)] mb-6">
          Al libro
        </h1>

        {phase === "prompt" && (
          <div className="bg-white rounded-[36px] px-10 py-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(28px,3vw,44px)] leading-tight text-[var(--color-pf-ink)] mb-3">
              Abre el libro en la <span className="underline decoration-[var(--color-pf-moon)] decoration-[6px] underline-offset-4">página 37</span>.
            </p>
            <p className="text-xl text-[var(--color-pf-ink)] opacity-80 mb-8">
              Mira el cuadro de posesivos. Tienes 30 segundos.
            </p>
            <button
              onClick={start}
              className="px-8 py-4 rounded-full bg-[var(--color-pf-ink)] text-white font-semibold text-lg hover:opacity-90 transition"
            >
              Empezar 30 s
            </button>
          </div>
        )}

        {phase === "timing" && (
          <div className="bg-white rounded-[36px] px-10 py-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xl font-semibold text-[var(--color-pf-ink)] opacity-80">
                Página 37 · Cuadro de posesivos
              </p>
              <span className="font-[family-name:var(--font-pf-display)] text-5xl text-[var(--color-pf-moon)]">
                {seconds}s
              </span>
            </div>
            <div className="h-3 rounded-full bg-[var(--color-pf-moon-soft)] overflow-hidden mb-8">
              <div
                className="h-full bg-[var(--color-pf-moon)] transition-[width] duration-1000 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <button
              onClick={skipToQuestion}
              className="px-6 py-3 rounded-full bg-white border-2 border-[var(--color-pf-ink)] text-[var(--color-pf-ink)] font-semibold hover:bg-[var(--color-pf-moon-soft)] transition"
            >
              Saltar →
            </button>
          </div>
        )}

        {phase === "question" && (
          <div
            className="bg-white rounded-[36px] px-10 py-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
            style={{ animation: "revealQ 500ms cubic-bezier(0.2, 0.8, 0.2, 1)" }}
          >
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(28px,3.2vw,48px)] leading-tight text-[var(--color-pf-ink)] mb-4">
              ¿Cuántas formas tiene{" "}
              <span className="inline-block px-3 py-0.5 rounded-xl bg-[var(--color-pf-spark)] text-white">
                mi
              </span>
              ?
            </p>
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(28px,3.2vw,48px)] leading-tight text-[var(--color-pf-ink)] mb-4">
              ¿Y cuántas tiene{" "}
              <span className="inline-block px-3 py-0.5 rounded-xl bg-[var(--color-pf-spark)] text-white">
                nuestro
              </span>
              ?
            </p>
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.4vw,36px)] leading-tight text-[var(--color-pf-ink)] opacity-80">
              ¿Por qué esa diferencia?
            </p>
            <button
              onClick={reset}
              className="mt-8 px-6 py-3 rounded-full bg-white border-2 border-[var(--color-pf-ink)] text-[var(--color-pf-ink)] font-semibold hover:bg-[var(--color-pf-moon-soft)] transition"
            >
              ↺ Reiniciar
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center min-h-0 overflow-hidden">
        <LunaMoon className="w-full max-w-[260px] h-auto" />
      </div>

      <style jsx>{`
        @keyframes revealQ {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
