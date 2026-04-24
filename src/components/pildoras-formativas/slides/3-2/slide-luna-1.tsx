"use client";

import React, { useState } from "react";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { CheckCircle, XCircle, ClipboardText } from "@phosphor-icons/react";

/* ── Highlight helper (naranja, sin cursiva) ── */
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

/* ── Checklist ── */
type CheckItem = {
  label: React.ReactNode;
  hint: string;
};

const ITEMS: CheckItem[] = [
  {
    label: <>¿Tiene <V>principio</V>? (saludo o frase de inicio)</>,
    hint: "Busca: ¡Hola, ___!",
  },
  {
    label: <>¿Tiene <V>final</V>? (despedida o frase de cierre)</>,
    hint: "Busca: ¡Un saludo desde...!",
  },
  {
    label: <>¿Cada frase tiene un <V>verbo</V>?</>,
    hint: "Comprueba: trabaja, tiene, estudia, vivo...",
  },
  {
    label: <>¿Los <V>verbos</V> están bien?</>,
    hint: "una persona → trabaja, tiene / yo → trabajo, tengo",
  },
  {
    label: <>¿Las <V>mayúsculas</V> están bien?</>,
    hint: "Nombres propios y después de punto",
  },
];

const BUBBLES: React.ReactNode[] = [
  <>Vamos a <V>comprobar</V> vuestro correo. ¿Está todo?</>,
  <>Primero: ¿empieza con un <V>saludo</V>?</>,
  <>¿Termina con una <V>despedida</V> y tu nombre?</>,
  <>Ahora los <V>verbos</V>. ¿Cada frase tiene uno?</>,
  <>¿Los verbos están <V>bien conjugados</V>?</>,
  <>Por último: ¿las <V>mayúsculas</V> están donde deben?</>,
  <>¡Tu email está <V>listo</V> para compartir!</>,
  <>Corrige lo que falta y <V>vuelve a comprobar</V>.</>,
];

export function SlideLuna1() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    Array(ITEMS.length).fill(null)
  );
  const [activeIdx, setActiveIdx] = useState(0);

  const answeredCount = answers.filter((a) => a !== null).length;
  const allAnswered = answeredCount === ITEMS.length;
  const allYes = allAnswered && answers.every((a) => a === true);

  const choose = (idx: number, val: boolean) => {
    if (answers[idx] !== null) return;
    const next = [...answers];
    next[idx] = val;
    setAnswers(next);

    // Advance to next unanswered or stay
    if (idx < ITEMS.length - 1) {
      setActiveIdx(idx + 1);
    }
  };

  // Bubble logic
  let bubbleIdx: number;
  if (allAnswered) {
    bubbleIdx = allYes ? 6 : 7;
  } else {
    bubbleIdx = activeIdx + 1;
  }

  return (
    <div className="w-full h-full flex items-center justify-center overflow-y-auto md:overflow-hidden">
      <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
        <div className="flex flex-col gap-1.5 min-w-0">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)] text-[var(--color-pf-ink)]">
              LUNA
            </span>
            <span
              className="px-3 py-1 rounded-full text-base font-semibold"
              style={{ background: "var(--color-pf-moon-soft)", color: "#3B2A8A" }}
            >
              Revisión
            </span>
          </div>

          {/* Titulo */}
          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(30px,min(4.5vw,6vh),56px)] text-[var(--color-pf-ink)]">
            {allAnswered
              ? allYes
                ? "¡Email completo!"
                : "Revisa tu correo"
              : "¿Tu email está completo?"}
          </h1>

          {/* Instruccion */}
          <p className="text-[clamp(20px,min(2vw,2.5vh),24px)] font-semibold text-white bg-[var(--color-pf-ink)] px-5 py-1.5 rounded-full w-fit flex items-center gap-2">
            <ClipboardText size={22} weight="bold" />
            Comprueba cada punto
          </p>

          {/* Checklist */}
          <div className="flex flex-col gap-2 mt-1">
            {ITEMS.map((item, i) => {
              const answer = answers[i];
              const isActive = i === activeIdx && !allAnswered;

              return (
                <div
                  key={i}
                  className="rounded-[14px] border-2 px-4 py-3 transition-all"
                  style={{
                    borderColor:
                      answer === true
                        ? "#22C55E"
                        : answer === false
                          ? "#EF4444"
                          : isActive
                            ? "var(--color-pf-moon)"
                            : "#E5E7EB",
                    background:
                      answer === true
                        ? "#F0FDF4"
                        : answer === false
                          ? "#FEF2F2"
                          : isActive
                            ? "var(--color-pf-moon-soft)"
                            : "#FAFAFA",
                    opacity: answer !== null || isActive ? 1 : 0.5,
                    animation:
                      isActive && answer === null
                        ? "cardIn 400ms cubic-bezier(0.2,0.8,0.2,1)"
                        : undefined,
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-[clamp(20px,min(2vw,2.5vh),24px)] leading-snug text-[var(--color-pf-ink)] font-medium">
                        {item.label}
                      </p>
                      <p className="text-[clamp(16px,min(1.4vw,1.8vh),18px)] opacity-60 mt-0.5">
                        {item.hint}
                      </p>
                    </div>

                    {answer === null ? (
                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => choose(i, true)}
                          disabled={!isActive}
                          className="px-4 py-2 rounded-full text-base font-bold bg-[#22C55E] text-white hover:bg-[#16A34A] disabled:opacity-30 transition flex items-center gap-1.5"
                        >
                          <CheckCircle size={20} weight="bold" />
                          SI
                        </button>
                        <button
                          onClick={() => choose(i, false)}
                          disabled={!isActive}
                          className="px-4 py-2 rounded-full text-base font-bold bg-[#EF4444] text-white hover:bg-[#DC2626] disabled:opacity-30 transition flex items-center gap-1.5"
                        >
                          <XCircle size={20} weight="bold" />
                          NO
                        </button>
                      </div>
                    ) : (
                      <div className="flex-shrink-0">
                        {answer ? (
                          <CheckCircle
                            size={32}
                            weight="fill"
                            className="text-[#22C55E]"
                          />
                        ) : (
                          <XCircle
                            size={32}
                            weight="fill"
                            className="text-[#EF4444]"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contador */}
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-base">
              {answeredCount} / {ITEMS.length} comprobados
            </span>
            {allAnswered && !allYes && (
              <button
                onClick={() => {
                  setAnswers(Array(ITEMS.length).fill(null));
                  setActiveIdx(0);
                }}
                className="px-5 py-2 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-base hover:opacity-90 transition"
              >
                COMPROBAR DE NUEVO
              </button>
            )}
          </div>
        </div>

        {/* Personaje */}
        <CharacterStage
          bubble={BUBBLES[bubbleIdx] ?? <></>}
          step={bubbleIdx}
        >
          <LunaMoon className="w-full h-auto" />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes cardIn {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
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
