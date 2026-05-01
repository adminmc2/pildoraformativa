"use client";

import React, { useState } from "react";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import {
  CheckCircle,
  XCircle,
  ClipboardText,
  ArrowsLeftRight,
  BookOpenText,
  Star,
  Question,
  PencilSimple,
} from "@phosphor-icons/react";

/* ── Highlight helper (naranja, sin cursiva) ── */
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

/* ── Phase 1: Self-review checklist ── */
type CheckItem = {
  label: React.ReactNode;
  hint: string;
};

const ITEMS: CheckItem[] = [
  {
    label: <>¿Tiene <V>principio</V>? (saludo)</>,
    hint: "Busca: ¡Hola, ___!",
  },
  {
    label: <>¿Tiene <V>final</V>? (despedida)</>,
    hint: "Busca: ¡Un saludo desde...!",
  },
  {
    label: <>¿Cada frase tiene un <V>verbo</V>?</>,
    hint: "trabaja, tiene, estudia, vivo...",
  },
  {
    label: <>¿Los <V>verbos</V> están bien?</>,
    hint: "una persona → trabaja / yo → trabajo",
  },
  {
    label: <>¿Las <V>mayúsculas</V> están bien?</>,
    hint: "Nombres propios y después de punto",
  },
];

/* ── Phase 2: Peer review steps ── */
type PeerStep = {
  icon: React.ReactNode;
  text: React.ReactNode;
};

const PEER_STEPS: PeerStep[] = [
  {
    icon: <ArrowsLeftRight size={28} weight="bold" />,
    text: <><V>Intercambia</V> tu cuaderno con tu compañero/a.</>,
  },
  {
    icon: <BookOpenText size={28} weight="bold" />,
    text: <>Lee su correo y <V>comprueba</V> la misma lista.</>,
  },
  {
    icon: <Star size={28} weight="bold" />,
    text: <>Marca lo que <V>te gusta</V>: frases que suenan bien.</>,
  },
  {
    icon: <Question size={28} weight="bold" />,
    text: <>Marca lo que <V>no entiendes</V>: frases confusas.</>,
  },
  {
    icon: <PencilSimple size={28} weight="bold" />,
    text: <>Corrige tu correo con los <V>comentarios</V> de tu compañero/a.</>,
  },
];

/* ── Bubbles ── */
const BUBBLES_SELF: React.ReactNode[] = [
  <>Vamos a <V>comprobar</V> vuestro correo. ¿Está todo?</>,
  <>Primero: ¿empieza con un <V>saludo</V>?</>,
  <>¿Termina con una <V>despedida</V> y tu nombre?</>,
  <>Ahora los <V>verbos</V>. ¿Cada frase tiene uno?</>,
  <>¿Los verbos están <V>bien conjugados</V>?</>,
  <>Por último: ¿las <V>mayúsculas</V> están donde deben?</>,
];

const BUBBLES_DONE: React.ReactNode[] = [
  <>¡Tu correo electrónico está <V>listo</V>! Ahora toca intercambiar.</>,
  <>Corrige lo que falta y <V>vuelve a comprobar</V>.</>,
];

const BUBBLES_PEER: React.ReactNode[] = [
  <>Ahora vais a <V>revisar</V> el correo de vuestro compañero.</>,
  <>No es un examen. Es una <V>ayuda</V>.</>,
  <>¿Qué frases <V>suenan bien</V>? Marcadlas.</>,
  <>¿Hay algo que <V>no se entiende</V>? Marcadlo también.</>,
  <>Con sus comentarios, escribid la <V>versión final</V>.</>,
];

export function SlideLuna1() {
  /* Phase 1: self-review */
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    Array(ITEMS.length).fill(null)
  );
  const [activeIdx, setActiveIdx] = useState(0);

  /* Phase 2: peer review */
  const [phase, setPhase] = useState<"self" | "peer">("self");
  const [peerStep, setPeerStep] = useState(0);

  const answeredCount = answers.filter((a) => a !== null).length;
  const allAnswered = answeredCount === ITEMS.length;
  const allYes = allAnswered && answers.every((a) => a === true);

  const choose = (idx: number, val: boolean) => {
    if (answers[idx] !== null) return;
    const next = [...answers];
    next[idx] = val;
    setAnswers(next);
    if (idx < ITEMS.length - 1) {
      setActiveIdx(idx + 1);
    }
  };

  /* Bubble logic */
  let bubble: React.ReactNode;
  let bubbleKey: number;

  if (phase === "self") {
    if (allAnswered) {
      bubble = allYes ? BUBBLES_DONE[0] : BUBBLES_DONE[1];
      bubbleKey = allYes ? 100 : 101;
    } else {
      bubble = BUBBLES_SELF[activeIdx + 1] ?? BUBBLES_SELF[0];
      bubbleKey = activeIdx + 1;
    }
  } else {
    bubble = BUBBLES_PEER[peerStep] ?? BUBBLES_PEER[0];
    bubbleKey = 200 + peerStep;
  }

  return (
    <div className="w-full h-full flex items-center justify-center overflow-y-auto md:overflow-hidden">
      <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
        <div className="flex flex-col gap-1.5 min-w-0">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span
              className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]"
              style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
            >
              LUNA
            </span>
            <span
              className="px-3 py-1 rounded-full font-semibold"
              style={{
                fontSize: "clamp(18px, 1.3vw, 20px)",
                background: "var(--color-pf-moon-soft)",
                color: "#3B2A8A",
              }}
            >
              Revisión
            </span>
          </div>

          {/* Titulo */}
          <h1
            className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[var(--color-pf-ink)]"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            {phase === "self"
              ? allAnswered
                ? allYes
                  ? "¡Correo electrónico completo!"
                  : "Revisa tu correo electrónico"
                : "¿Tu correo electrónico está completo?"
              : "Revisa con tu compañero"}
          </h1>

          {/* Instruccion */}
          <p
            className="font-semibold text-white bg-[var(--color-pf-ink)] px-5 py-2 rounded-full w-fit flex items-center gap-2"
            style={{ fontSize: "clamp(26px, 2.2vw, 36px)" }}
          >
            {phase === "self" ? (
              <>
                <ClipboardText size={22} weight="bold" />
                Comprueba cada punto
              </>
            ) : (
              <>
                <ArrowsLeftRight size={22} weight="bold" />
                Intercambiad los cuadernos
              </>
            )}
          </p>

          {/* ══════ Phase 1: Self-review checklist ══════ */}
          {phase === "self" && (
            <>
              <div
                className="flex flex-col gap-2 mt-1 overflow-y-auto"
                style={{ maxHeight: "52vh" }}
              >
                {ITEMS.map((item, i) => {
                  const answer = answers[i];
                  const isActive = i === activeIdx && !allAnswered;

                  return (
                    <div
                      key={i}
                      className="rounded-[14px] border-2 px-4 py-2.5 transition-all"
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
                          <p
                            className="leading-snug text-[var(--color-pf-ink)] font-medium"
                            style={{ fontSize: "clamp(26px, 2.2vw, 36px)" }}
                          >
                            {item.label}
                          </p>
                          <p
                            className="opacity-80 mt-0.5"
                            style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                          >
                            {item.hint}
                          </p>
                        </div>

                        {answer === null ? (
                          <div className="flex gap-2 flex-shrink-0">
                            <button
                              onClick={() => choose(i, true)}
                              disabled={!isActive}
                              className="px-4 rounded-full font-bold bg-[#22C55E] text-white hover:bg-[#16A34A] disabled:opacity-30 transition flex items-center gap-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                              style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                            >
                              <CheckCircle size={20} weight="bold" />
                              SÍ
                            </button>
                            <button
                              onClick={() => choose(i, false)}
                              disabled={!isActive}
                              className="px-4 rounded-full font-bold bg-[#EF4444] text-white hover:bg-[#DC2626] disabled:opacity-30 transition flex items-center gap-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                              style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                            >
                              <XCircle size={20} weight="bold" />
                              NO
                            </button>
                          </div>
                        ) : (
                          <div className="flex-shrink-0">
                            {answer ? (
                              <CheckCircle size={28} weight="fill" className="text-[#22C55E]" />
                            ) : (
                              <XCircle size={28} weight="fill" className="text-[#EF4444]" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer: contador + botones */}
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span
                  className="text-[var(--color-pf-ink)] font-semibold opacity-70"
                  style={{ fontSize: "clamp(18px, 1.3vw, 20px)" }}
                >
                  {answeredCount} / {ITEMS.length}
                </span>
                {allAnswered && !allYes && (
                  <button
                    onClick={() => {
                      setAnswers(Array(ITEMS.length).fill(null));
                      setActiveIdx(0);
                    }}
                    className="px-5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] hover:opacity-90 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                    style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                  >
                    COMPROBAR DE NUEVO
                  </button>
                )}
                {allAnswered && (
                  <button
                    onClick={() => setPhase("peer")}
                    className="px-5 rounded-full bg-[var(--color-pf-moon)] text-white font-[family-name:var(--font-pf-display)] hover:opacity-90 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                    style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                  >
                    AHORA CON TU COMPAÑERO →
                  </button>
                )}
              </div>
            </>
          )}

          {/* ══════ Phase 2: Peer review ══════ */}
          {phase === "peer" && (
            <div className="flex flex-col gap-3 mt-1">
              <div className="flex flex-col gap-3 overflow-y-auto" style={{ maxHeight: "52vh" }}>
                {PEER_STEPS.map((ps, i) => {
                  const visible = i <= peerStep;
                  if (!visible) return null;

                  const isCurrent = i === peerStep;

                  return (
                    <div
                      key={i}
                      className="rounded-[14px] border-2 px-5 py-3 flex items-center gap-4 transition-all"
                      style={{
                        borderColor: isCurrent ? "var(--color-pf-moon)" : "#D1D5DB",
                        background: isCurrent ? "var(--color-pf-moon-soft)" : "white",
                        opacity: isCurrent ? 1 : 0.8,
                        animation: isCurrent
                          ? "cardIn 400ms cubic-bezier(0.2,0.8,0.2,1)"
                          : undefined,
                      }}
                    >
                      <div
                        className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center text-white"
                        style={{ background: "var(--color-pf-moon)" }}
                      >
                        {ps.icon}
                      </div>
                      <p
                        className="leading-snug text-[var(--color-pf-ink)] font-medium"
                        style={{ fontSize: "clamp(26px, 2.2vw, 36px)" }}
                      >
                        {ps.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3 mt-1">
                <button
                  onClick={() => {
                    setPhase("self");
                    setPeerStep(0);
                  }}
                  className="px-5 rounded-full bg-white/70 text-[var(--color-pf-ink)] font-[family-name:var(--font-pf-display)] hover:bg-white transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                  style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                >
                  ← CHECKLIST
                </button>
                {peerStep < PEER_STEPS.length - 1 && (
                  <button
                    onClick={() => setPeerStep((s) => s + 1)}
                    className="px-5 rounded-full bg-[var(--color-pf-moon)] text-white font-[family-name:var(--font-pf-display)] hover:opacity-90 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                    style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                  >
                    SIGUIENTE →
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Personaje */}
        <CharacterStage bubble={bubble} step={bubbleKey}>
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
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
