"use client";

import React, { useState } from "react";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { ArrowRight, PencilSimple } from "@phosphor-icons/react";

/* ── Temas del email ── */
const THEMES = {
  familia: { label: "FAMILIA", color: "#C0392B", soft: "#FADBD8" },
  amigos: { label: "AMIGOS", color: "#D68910", soft: "#FEF5E7" },
  escuela: { label: "ESCUELA", color: "#2E86C1", soft: "#D6EAF8" },
} as const;
type ThemeId = keyof typeof THEMES;

type Row = { marta: string; hint: string; theme: ThemeId };

const ROWS: Row[] = [
  { marta: "…mi padre trabaja en un hotel…", hint: "mi padre trabaja en…", theme: "familia" },
  { marta: "…mi madre, en un hospital…", hint: "mi madre trabaja en…", theme: "familia" },
  { marta: "…mi hermano Mario tiene once años…", hint: "mi hermano/a… tiene… años", theme: "familia" },
  { marta: "…mi hermana Ana tiene seis…", hint: "mi hermana/o… tiene… años", theme: "familia" },
  { marta: "Si no tienes hermanos:", hint: "soy hijo/a único/a", theme: "familia" },
  { marta: "…tengo muchos amigos: Emilio, Elena, Santiago…", hint: "tengo muchos amigos: …", theme: "amigos" },
  { marta: "…tengo deberes de Tecnología y Matemáticas…", hint: "tengo deberes de…", theme: "escuela" },
  { marta: "…me gusta mucho la Historia…", hint: "me gusta mucho (asignatura favorita)…", theme: "escuela" },
];

/* ── Highlight helper (énfasis genérico → naranja bold sin cursiva) ── */
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

const BUBBLES: React.ReactNode[] = [
  <>Vamos a <V>planificar</V> el correo. Marta escribió el suyo. ¡Ahora toca escribir uno propio!</>,
  <>Empieza por aquí: ¿dónde <V>trabajan</V> en tu casa? Completa las dos filas.</>,
  <>¿Tienes <V>hermanos</V>? Escribe nombre y edad. Si no, escribe: «<V>soy hijo/a único/a</V>».</>,
  <>Ahora tus <V>amigos</V>: escribe 2-3 nombres de clase.</>,
  <>¿De qué <V>asignaturas</V> tienes más deberes?</>,
  <>Última fila: ¿cuál es tu asignatura <V>favorita</V>?</>,
  <>¡Ya está el <V>plan</V>! Con estos datos toca <V>escribir</V> el correo.</>,
];

export function SlideVito1() {
  const [step, setStep] = useState(0);

  // Step 1 → padre+madre (2 filas), Step 2 → hermanos (3 filas), resto 1 fila
  const STEP_ROWS = [0, 2, 5, 6, 7, 8];
  const totalSteps = STEP_ROWS.length; // 0=intro, 1-6=filas, 7=conclusión

  const visibleCount = step >= STEP_ROWS.length ? ROWS.length : STEP_ROWS[step];
  const newRowStart = step <= 0 ? 0 : (STEP_ROWS[step - 1] ?? 0);
  const canNext = step < totalSteps;
  const canPrev = step > 0;

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
              VITO
            </span>
            <span
              className="px-3 py-1 rounded-full font-semibold"
              style={{
                fontSize: "clamp(18px, 1.3vw, 20px)",
                background: "var(--color-pf-pill-soft)",
                color: "#3F6B14",
              }}
            >
              Método
            </span>
          </div>

          {/* Título */}
          <h1
            className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[var(--color-pf-ink)]"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            {step < totalSteps ? "Planifica: de Marta a ti" : "¡Plan listo!"}
          </h1>

          {/* Instrucción */}
          <p
            className="font-semibold text-white bg-[var(--color-pf-ink)] px-5 py-1.5 rounded-full w-fit flex items-center gap-2"
            style={{ fontSize: "clamp(24px, 1.8vw, 32px)" }}
          >
            <PencilSimple size={22} weight="bold" />
            Apuntad vuestros datos en el cuaderno
          </p>

          {/* Tabla */}
          {visibleCount > 0 && (
            <div
              className="rounded-[16px] bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
              style={{
                maxHeight: "52vh",
                animation:
                  visibleCount === 2 && step === 1
                    ? "cardIn 400ms cubic-bezier(0.2,0.8,0.2,1)"
                    : undefined,
              }}
            >
              {/* Cabecera (fija arriba) */}
              <div className="flex-shrink-0 grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-2 bg-[var(--color-pf-ink)] text-white">
                <span
                  className="font-[family-name:var(--font-pf-display)]"
                  style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                >
                  MARTA DICE...
                </span>
                <ArrowRight size={22} weight="bold" className="opacity-60" />
                <span
                  className="font-[family-name:var(--font-pf-display)]"
                  style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                >
                  TÚ ESCRIBES...
                </span>
              </div>

              {/* Filas (scrollable) */}
              <div className="table-scroll flex-1 min-h-0 overflow-y-auto flex flex-col">
                {ROWS.slice(0, visibleCount).map((row, i) => {
                  const t = THEMES[row.theme];
                  const isNew = i >= newRowStart;
                  const showTheme =
                    i === 0 || ROWS[i - 1].theme !== row.theme;

                  return (
                    <React.Fragment key={i}>
                      {showTheme && (
                        <div
                          className="px-4 py-1 font-[family-name:var(--font-pf-display)] tracking-wider"
                          style={{
                            fontSize: "clamp(20px, 1.6vw, 24px)",
                            background: t.soft,
                            color: t.color,
                          }}
                        >
                          {t.label}
                        </div>
                      )}
                      <div
                        className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-1.5 border-b border-gray-100 last:border-b-0"
                        style={{
                          animation: isNew
                            ? "rowIn 350ms ease-out"
                            : undefined,
                        }}
                      >
                        <span
                          className="leading-snug font-medium"
                          style={{
                            fontSize: "clamp(26px, 2.2vw, 36px)",
                            color: t.color,
                          }}
                        >
                          {row.marta}
                        </span>
                        <ArrowRight
                          size={20}
                          weight="bold"
                          className="opacity-25 flex-shrink-0"
                        />
                        <span
                          className="leading-snug text-[var(--color-pf-ink)] opacity-60"
                          style={{ fontSize: "clamp(26px, 2.2vw, 36px)" }}
                        >
                          {row.hint}
                        </span>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navegación */}
          <div className="flex items-center gap-3 mt-1">
            <button
              onClick={() => canPrev && setStep(step - 1)}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-bold disabled:opacity-30 hover:bg-white transition flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
              aria-label="Atrás"
              style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
            >
              ←
            </button>
            <button
              onClick={() => canNext && setStep(step + 1)}
              disabled={!canNext}
              className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] disabled:opacity-40 hover:opacity-90 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
              style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
            >
              {step === 0
                ? "EMPEZAR"
                : step === totalSteps
                  ? "COMPLETADO"
                  : "SIGUIENTE"}
            </button>
            <span
              className="text-[var(--color-pf-ink)] font-semibold opacity-70"
              style={{ fontSize: "clamp(18px, 1.3vw, 20px)" }}
            >
              {step} / {totalSteps}
            </span>
          </div>
        </div>

        {/* Personaje */}
        <CharacterStage bubble={BUBBLES[step] ?? <></>} step={step}>
          <VitoPill className="w-full h-auto" />
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
        @keyframes rowIn {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        /* Scrollbar visible siempre en la tabla (mismo patrón que slide-pili-1) */
        .table-scroll {
          scrollbar-width: auto;
          scrollbar-color: rgba(10, 10, 10, 0.4) transparent;
          scrollbar-gutter: stable;
        }
        .table-scroll::-webkit-scrollbar {
          width: 12px;
        }
        .table-scroll::-webkit-scrollbar-track {
          background: rgba(10, 10, 10, 0.05);
          border-radius: 6px;
        }
        .table-scroll::-webkit-scrollbar-thumb {
          background: rgba(10, 10, 10, 0.4);
          border-radius: 6px;
        }
        .table-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(10, 10, 10, 0.6);
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
