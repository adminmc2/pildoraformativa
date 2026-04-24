"use client";
// 🔒 BLOQUEADA — No modificar sin consultar al usuario. Slide aprobada hasta #11.

import React, { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { Highlighter } from "@/components/ui/highlighter";

const PHRASES = [
  { id: 0, pos: "Su", after: " abuelo se llama Carlos." },
  { id: 1, pos: "Su", after: " madre trabaja en el hotel." },
  { id: 2, pos: "Su", after: " padre es agricultor." },
];

const C = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--color-pf-spark)" }}>{children}</span>
);

const COMPRENSION = [
  <>¿Cómo se llama <C>el abuelo de Julián</C>?</>,
  <>¿Dónde trabaja <C>la madre de Julián</C>?</>,
  <>¿Qué profesión tiene <C>el padre de Julián</C>?</>,
];

// Fases: 0=frases visibles, 1-3=preguntas comprensión, 4=pregunta showCircles, 5=respuesta
type Phase = 0 | 1 | 2 | 3 | 4 | 5;

export function SlidePilar1() {
  const [phase, setPhase] = useState<Phase>(0);

  const next = () => {
    if (phase < 5) setPhase((phase + 1) as Phase);
  };

  const reset = () => setPhase(0);

  const showCircles = phase >= 5;
  const comprehensionIndex = phase >= 1 && phase <= 3 ? phase - 1 : -1;

  const bubble =
    phase === 0
      ? <>Esta es la familia de <span style={{ color: "var(--color-pf-spark)" }}>Julián</span>.</>

      : phase === 1
      ? COMPRENSION[0]
      : phase === 2
      ? COMPRENSION[1]
      : phase === 3
      ? COMPRENSION[2]
      : phase === 4
      ? "¿Qué palabra está en las tres?"
      : <>¡La misma! → <C>Su</C>. La familia de <C>Julián</C> = <C>Su</C> familia.</>;

  const buttonLabel =
    phase === 0
      ? "SIGUIENTE"
      : phase <= 2
      ? "SIGUIENTE PREGUNTA"
      : phase === 3
      ? "AHORA MIRAD BIEN..."
      : phase === 4
      ? "REVELAR"
      : "COMPLETADO";

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1800px] px-3 md:px-4 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center">
        <div className="flex flex-col gap-4 min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.2vw,2.8vh),28px)] text-[var(--color-pf-ink)]">
              PILI
            </span>
            <span
              className="px-3 py-1 rounded-full text-base font-semibold"
              style={{ background: "var(--color-pf-star-soft)", color: "#8A6B00" }}
            >
              Anfitriona
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(48px,min(8vw,11vh),128px)] text-[var(--color-pf-ink)]">
            Tres frases
          </h1>

          <p className="text-[clamp(22px,min(2.6vw,3.2vh),32px)] font-semibold text-white bg-[var(--color-pf-ink)] w-fit px-6 py-2.5 rounded-full">
            Lee las frases, responde y presta atención.
          </p>

          <div className="flex flex-col gap-3">
            {PHRASES.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-[24px] px-7 py-4 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)] font-[family-name:var(--font-pf-display)] text-[clamp(24px,min(2.8vw,3.4vh),34px)] leading-tight text-[var(--color-pf-ink)]"
              >
                {showCircles ? (
                  <Highlighter
                    action="circle"
                    color="var(--color-pf-spark)"
                    strokeWidth={3}
                    animationDuration={800}
                    iterations={2}
                    padding={6}
                  >
                    {p.pos}
                  </Highlighter>
                ) : (
                  <span style={{ color: "var(--color-pf-spark)" }}>
                    {p.pos}
                  </span>
                )}
                {p.after}
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-4">
            {phase < 5 ? (
              <button
                onClick={next}
                className="px-10 py-4 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.2vw,2.8vh),28px)] hover:scale-[1.02] transition"
                style={{
                  animation: phase === 3 ? "btnPulse 2s ease-in-out infinite" : "none",
                }}
              >
                {buttonLabel}
              </button>
            ) : (
              <button
                onClick={reset}
                className="px-6 py-2 rounded-full bg-white/80 text-[var(--color-pf-ink)] text-base font-semibold hover:bg-white transition min-h-11"
              >
                ↺ Reiniciar
              </button>
            )}
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-60 text-base">
              {phase} / 5
            </span>
          </div>
        </div>

        <CharacterStage bubble={bubble} step={phase}>
          <PilarStar
            pose={phase >= 5 ? "wave" : phase >= 1 ? "point" : "hug"}
            className="w-full h-auto"
          />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes questionIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
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
