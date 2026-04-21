"use client";

import { useState } from "react";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";

const STEPS = [
  { id: 0, label: "Inicio" },
  { id: 1, label: "Daniel = él" },
  { id: 2, label: "primo = uno (singular)" },
  { id: 3, label: "él + singular → su" },
  { id: 4, label: "Frase completa" },
  { id: 5, label: "Al libro" },
  { id: 6, label: "Pregunta final" },
];

export function SlideCierre() {
  const [step, setStep] = useState(0);
  const inWalkthrough = step < 5;
  const canNext = step < STEPS.length - 1;
  const canPrev = step > 0;

  return (
    <div className="w-full h-full max-w-[1400px] mx-auto grid grid-cols-[1.35fr_1fr] gap-8 items-stretch overflow-hidden">
      <div className="flex flex-col min-h-0 overflow-hidden justify-center">
        {inWalkthrough ? (
          <>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-[family-name:var(--font-pf-display)] text-xl text-[var(--color-pf-ink)]">
                VITO
              </span>
              <span
                className="px-3 py-1 rounded-full text-base font-semibold"
                style={{
                  background: "var(--color-pf-pill-soft)",
                  color: "#3F6B14",
                }}
              >
                Método
              </span>
            </div>

            <h1 className="flex-shrink-0 font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(36px,5vw,80px)] text-[var(--color-pf-ink)] mb-4">
              Paso a paso
            </h1>

            <div className="flex-shrink-0 bg-white rounded-[28px] px-8 py-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.6vw,40px)] leading-[1.1] text-[var(--color-pf-ink)] mb-6">
                Daniel estudia con{" "}
                {step >= 4 ? (
                  <span
                    className="inline-block px-4 py-1 mx-1 rounded-2xl bg-[var(--color-pf-pill)] text-white"
                    style={{ animation: "popIn 420ms cubic-bezier(0.2,0.8,0.2,1)" }}
                  >
                    su
                  </span>
                ) : (
                  <span className="inline-block px-4 py-1 mx-1 rounded-2xl bg-black/10 text-[var(--color-pf-ink)]">
                    ___
                  </span>
                )}{" "}
                primo los fines de semana.
              </p>

              <div className="space-y-3">
                <StepLine
                  visible={step >= 1}
                  label="Daniel"
                  arrow="="
                  value="él"
                  color="var(--color-pf-flower-soft)"
                />
                <StepLine
                  visible={step >= 2}
                  label="primo"
                  arrow="="
                  value="uno (singular)"
                  color="var(--color-pf-star-soft)"
                />
                <StepLine
                  visible={step >= 3}
                  label="él + singular"
                  arrow="→"
                  value="su"
                  color="var(--color-pf-pill-soft)"
                  highlight
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-[family-name:var(--font-pf-display)] text-xl text-[var(--color-pf-ink)]">
                PILI
              </span>
              <span
                className="px-3 py-1 rounded-full text-base font-semibold"
                style={{
                  background: "var(--color-pf-star-soft)",
                  color: "#8A6B00",
                }}
              >
                Anfitriona
              </span>
            </div>

            {step === 5 && (
              <>
                <h1 className="flex-shrink-0 font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(44px,6vw,108px)] text-[var(--color-pf-ink)] mb-4">
                  Tu turno
                </h1>
                <div
                  className="flex-shrink-0 bg-white rounded-[28px] px-8 py-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
                  style={{ animation: "fadeInUp 500ms cubic-bezier(0.2,0.8,0.2,1)" }}
                >
                  <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.6vw,40px)] leading-[1.1] text-[var(--color-pf-ink)] mb-2">
                    Libro, <span className="underline decoration-[var(--color-pf-spark)] decoration-[5px] underline-offset-4">página 37</span>.
                  </p>
                  <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.6vw,40px)] leading-[1.1] text-[var(--color-pf-ink)]">
                    Actividad 5.
                  </p>
                </div>
              </>
            )}

            {step === 6 && (
              <>
                <h1 className="flex-shrink-0 font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(36px,5vw,88px)] text-[var(--color-pf-ink)] mb-4">
                  Una pregunta
                </h1>
                <div
                  className="flex-shrink-0 bg-white rounded-[28px] px-8 py-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
                  style={{ animation: "fadeInUp 500ms cubic-bezier(0.2,0.8,0.2,1)" }}
                >
                  <p className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,2vw,30px)] leading-[1.15] text-[var(--color-pf-ink)] mb-3">
                    En tu idioma, el posesivo…
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="bg-[var(--color-pf-flower-soft)] rounded-2xl p-4 text-center">
                      <p className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.7vw,24px)] leading-tight text-[var(--color-pf-ink)]">
                        ¿cambia con la <strong>persona</strong>?
                      </p>
                    </div>
                    <div className="bg-[var(--color-pf-pill-soft)] rounded-2xl p-4 text-center">
                      <p className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.7vw,24px)] leading-tight text-[var(--color-pf-ink)]">
                        ¿o con la <strong>cosa</strong>?
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}

        <div className="flex-shrink-0 mt-3 flex items-center gap-3">
          <button
            onClick={() => canPrev && setStep(step - 1)}
            disabled={!canPrev}
            className="w-10 h-10 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-bold text-lg disabled:opacity-30 hover:bg-white transition"
            aria-label="Paso anterior"
          >
            ←
          </button>
          <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-base">
            Paso {step + 1} / {STEPS.length}
          </span>
          <button
            onClick={() => canNext && setStep(step + 1)}
            disabled={!canNext}
            className="w-10 h-10 rounded-full bg-[var(--color-pf-ink)] text-white font-bold text-lg disabled:opacity-30 hover:opacity-90 transition"
            aria-label="Siguiente paso"
          >
            →
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center relative min-h-0 overflow-hidden">
        <div
          className="absolute transition-all duration-700"
          style={{
            opacity: inWalkthrough ? 1 : 0,
            transform: inWalkthrough ? "scale(1)" : "scale(0.85)",
            pointerEvents: inWalkthrough ? "auto" : "none",
          }}
        >
          <VitoPill className="w-full max-w-[260px] h-auto" />
        </div>
        <div
          className="absolute transition-all duration-700"
          style={{
            opacity: inWalkthrough ? 0 : 1,
            transform: inWalkthrough ? "scale(0.85)" : "scale(1)",
            pointerEvents: inWalkthrough ? "none" : "auto",
          }}
        >
          <PilarStar pose="hug" className="w-full max-w-[260px] h-auto" />
        </div>
      </div>

      <style jsx>{`
        @keyframes popIn {
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
        @keyframes fadeInUp {
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

function StepLine({
  visible,
  label,
  arrow,
  value,
  color,
  highlight = false,
}: {
  visible: boolean;
  label: string;
  arrow: string;
  value: string;
  color: string;
  highlight?: boolean;
}) {
  if (!visible) return <div className="h-[54px]" />;
  return (
    <div
      className="flex items-center gap-4 px-5 py-3 rounded-2xl"
      style={{
        background: color,
        animation: "lineIn 380ms cubic-bezier(0.2,0.8,0.2,1)",
      }}
    >
      <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vw,28px)]">
        {label}
      </span>
      <span className="text-2xl opacity-60">{arrow}</span>
      <span
        className={`font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vw,28px)] ${
          highlight ? "px-3 py-0.5 rounded-xl bg-[var(--color-pf-spark)] text-white" : ""
        }`}
      >
        {value}
      </span>
      <style jsx>{`
        @keyframes lineIn {
          0% {
            opacity: 0;
            transform: translateX(-8px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
