"use client";

import { useState } from "react";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Statement = {
  id: number;
  text: string;
  correct: boolean;
  explanation: string;
};

const STATEMENTS: Statement[] = [
  { id: 1, text: "«Mi» cambia con el número: mi / mis.", correct: true, explanation: "mi (singular) → mis (plural)." },
  { id: 2, text: "«Su» cambia con el género del dueño.", correct: false, explanation: "Su no cambia con el género. Es igual para él, ella, usted." },
  { id: 3, text: "«Nuestro» tiene 4 formas.", correct: true, explanation: "nuestro / nuestra / nuestros / nuestras." },
  { id: 4, text: "«Mi hermanos» es correcto.", correct: false, explanation: "Lo correcto es «mis hermanos» (plural)." },
  { id: 5, text: "«Su» es igual para él, ella y usted.", correct: true, explanation: "Los tres usan su / sus." },
  { id: 6, text: "«Nuestra» es femenino singular.", correct: true, explanation: "nuestra = femenino singular." },
];

type Phase = "idle" | "answered";

export function SlideLuna1() {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [lastCorrect, setLastCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const finished = current >= STATEMENTS.length;

  const statement = STATEMENTS[current];

  const answer = (choice: boolean) => {
    if (phase !== "idle" || finished) return;
    const isRight = choice === statement.correct;
    setLastCorrect(isRight);
    if (isRight) setScore((s) => s + 1);
    setPhase("answered");
  };

  const next = () => {
    setCurrent((c) => c + 1);
    setPhase("idle");
  };

  const reset = () => {
    setCurrent(0);
    setPhase("idle");
    setScore(0);
  };

  const bubble = finished
    ? `¡${score} de ${STATEMENTS.length}!`
    : phase === "answered"
    ? lastCorrect
      ? "¡Bien!"
      : "¡Cuidado!"
    : `Afirmación ${current + 1}...`;

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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(44px,min(7vw,9vh),112px)] text-[var(--color-pf-ink)]">
            ¿Verdad o mentira?
          </h1>

          <div className="flex items-center gap-3">
            <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
              ¿Habéis aprendido bien? Comprobadlo.
            </p>
            <span className="px-3 py-0.5 rounded-full bg-white text-[var(--color-pf-ink)] font-[family-name:var(--font-pf-display)] text-sm shadow-[0_4px_16px_-8px_rgba(0,0,0,0.15)]">
              {Math.min(current + 1, STATEMENTS.length)} / {STATEMENTS.length}
            </span>
          </div>

          {!finished ? (
            <div
              key={statement.id}
              className="bg-white rounded-[28px] px-8 py-8 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)]"
              style={{ animation: "cardIn 500ms cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(3vw,3.6vh),40px)] leading-tight text-[var(--color-pf-ink)] mb-6">
                {statement.text}
              </p>

              {phase === "idle" && (
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => answer(true)}
                    className="px-6 py-4 rounded-[20px] bg-[var(--color-pf-pill-soft)] font-[family-name:var(--font-pf-display)] text-[clamp(20px,2.6vh,32px)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-pill)]/40 active:scale-[0.97] transition"
                  >
                    Verdad
                  </button>
                  <button
                    onClick={() => answer(false)}
                    className="px-6 py-4 rounded-[20px] bg-[var(--color-pf-spark-soft)] font-[family-name:var(--font-pf-display)] text-[clamp(20px,2.6vh,32px)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-spark)]/40 active:scale-[0.97] transition"
                  >
                    Mentira
                  </button>
                </div>
              )}

              {phase === "answered" && (
                <div style={{ animation: "feedbackIn 400ms cubic-bezier(0.2,0.8,0.2,1)" }}>
                  <div
                    className={`px-5 py-3 rounded-2xl mb-4 font-[family-name:var(--font-pf-display)] text-[clamp(18px,2.2vh,28px)] ${
                      lastCorrect
                        ? "bg-[var(--color-pf-pill-soft)] text-[#2D5A0E]"
                        : "bg-[var(--color-pf-spark-soft)] text-[#8A2F10]"
                    }`}
                  >
                    {lastCorrect ? "Correcto" : "Incorrecto"} — {statement.explanation}
                  </div>
                  <button
                    onClick={next}
                    className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg hover:opacity-90 transition"
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div
              className="bg-white rounded-[28px] px-8 py-8 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] text-center"
              style={{ animation: "cardIn 500ms cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              <div className="font-[family-name:var(--font-pf-display)] text-[clamp(48px,min(6vw,8vh),96px)] text-[var(--color-pf-moon)] leading-none mb-2">
                {score} / {STATEMENTS.length}
              </div>
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.8vh,36px)] text-[var(--color-pf-ink)] mb-4">
                {score >= 5 ? "¡Genial!" : score >= 3 ? "¡Bien!" : "¡A repasar!"}
              </p>
              <button
                onClick={reset}
                className="px-5 py-2 rounded-full bg-white border-2 border-[var(--color-pf-ink)] text-[var(--color-pf-ink)] text-sm font-semibold hover:bg-[var(--color-pf-moon-soft)] transition"
              >
                Reiniciar
              </button>
            </div>
          )}
        </div>

        <CharacterStage bubble={bubble} step={finished ? 99 : current * 2 + (phase === "answered" ? 1 : 0)}>
          <LunaMoon className="w-full h-auto" />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes cardIn {
          0% { opacity: 0; transform: translateY(14px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes feedbackIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
