"use client";

import React, { useState } from "react";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { ArrowRight, PencilSimple } from "@phosphor-icons/react";

/* ── Temas del email ── */
const THEMES = {
  familia: { label: "FAMILIA", color: "#C0392B", soft: "#FADBD8" },
  amigos: { label: "AMIGOS", color: "#D68910", soft: "#FEF5E7" },
  instituto: { label: "INSTITUTO", color: "#2E86C1", soft: "#D6EAF8" },
} as const;
type ThemeId = keyof typeof THEMES;

type Row = { marta: string; hint: string; theme: ThemeId };

const ROWS: Row[] = [
  { marta: "mi padre trabaja en un hotel", hint: "mi padre/madre + trabajo", theme: "familia" },
  { marta: "mi madre en un hospital", hint: "mi madre/padre + trabajo", theme: "familia" },
  { marta: "Mi hermano Mario tiene once años", hint: "nombre + edad", theme: "familia" },
  { marta: "mi hermana Ana tiene seis", hint: "(o: no tengo hermanas)", theme: "familia" },
  { marta: "muchos amigos: Emilio, Elena, Santiago", hint: "nombres de tus amigos", theme: "amigos" },
  { marta: "compañera nueva: Bárbara. Es de Barcelona", hint: "nombre + ciudad", theme: "amigos" },
  { marta: "deberes de Tecnología y Matemáticas", hint: "tus asignaturas", theme: "instituto" },
  { marta: "me gusta mucho la Historia", hint: "tu asignatura favorita", theme: "instituto" },
];

/* ── Highlight helper ── */
const C = ({ children }: { children: React.ReactNode }) => (
  <span className="italic" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

const BUBBLES: React.ReactNode[] = [
  <>Vamos a <C>planificar</C> el correo. Marta escribió el suyo. ¡Ahora toca escribir uno propio!</>,
  <>Empieza por aquí: ¿dónde <C>trabajan</C> en tu casa? Completa las dos primeras filas.</>,
  <>Completa la segunda línea. Si no aplica, escribe lo que quieras.</>,
  <>Siguiente fila: escribe <C>nombre y edad</C>. Si no tienes, pasa a la siguiente.</>,
  <>Si no aplica, escribe: «<C>no tengo</C>.» ¡También vale!</>,
  <>Ahora tus <C>amigos</C>: escribe 2-3 nombres de clase.</>,
  <>¿Hay alguien <C>nuevo</C> este año? Escribe nombre y de dónde es.</>,
  <>¿De qué <C>asignaturas</C> tienes más deberes?</>,
  <>Última fila: ¿cuál es tu asignatura <C>favorita</C>?</>,
  <>¡Ya está el <C>plan</C>! Con estos datos toca <C>escribir</C> el correo.</>,
];

export function SlideVito1() {
  const [step, setStep] = useState(0);
  const totalSteps = ROWS.length + 1; // 0=intro, 1-8=rows, 9=conclusión

  const visibleCount = Math.min(step, ROWS.length);
  const canNext = step < totalSteps;
  const canPrev = step > 0;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-y-auto md:overflow-hidden">
      <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
        <div className="flex flex-col gap-1.5 min-w-0">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)] text-[var(--color-pf-ink)]">
              VITO
            </span>
            <span
              className="px-3 py-1 rounded-full text-base font-semibold"
              style={{ background: "var(--color-pf-pill-soft)", color: "#3F6B14" }}
            >
              Método
            </span>
          </div>

          {/* Título */}
          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(30px,min(4.5vw,6vh),56px)] text-[var(--color-pf-ink)]">
            {step <= ROWS.length ? "Planifica: de Marta a ti" : "¡Plan listo!"}
          </h1>

          {/* Instrucción */}
          <p className="text-[clamp(20px,min(2vw,2.5vh),24px)] font-semibold text-white bg-[var(--color-pf-ink)] px-5 py-1.5 rounded-full w-fit flex items-center gap-2">
            <PencilSimple size={22} weight="bold" />
            Apuntad vuestros datos en el cuaderno
          </p>

          {/* Tabla */}
          {visibleCount > 0 && (
            <div
              className="rounded-[16px] bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] overflow-hidden"
              style={{
                animation:
                  visibleCount === 1
                    ? "cardIn 400ms cubic-bezier(0.2,0.8,0.2,1)"
                    : undefined,
              }}
            >
              {/* Cabecera */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-2 bg-[var(--color-pf-ink)] text-white">
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)]">
                  MARTA DICE...
                </span>
                <ArrowRight size={22} weight="bold" className="opacity-60" />
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)]">
                  TÚ ESCRIBES...
                </span>
              </div>

              {/* Filas */}
              <div className="flex flex-col">
                {ROWS.slice(0, visibleCount).map((row, i) => {
                  const t = THEMES[row.theme];
                  const isNew = i === visibleCount - 1;
                  const showTheme =
                    i === 0 || ROWS[i - 1].theme !== row.theme;

                  return (
                    <React.Fragment key={i}>
                      {showTheme && (
                        <div
                          className="px-4 py-1 font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)] tracking-wider"
                          style={{ background: t.soft, color: t.color }}
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
                          className="text-[clamp(20px,min(2vw,2.5vh),24px)] leading-snug font-medium"
                          style={{ color: t.color }}
                        >
                          {row.marta}
                        </span>
                        <ArrowRight
                          size={18}
                          weight="bold"
                          className="opacity-25 flex-shrink-0"
                        />
                        <span className="text-[clamp(20px,min(2vw,2.5vh),24px)] leading-snug text-[var(--color-pf-ink)] opacity-50 italic">
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
              className="w-11 h-11 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-bold text-base disabled:opacity-30 hover:bg-white transition flex-shrink-0"
              aria-label="Atrás"
            >
              ←
            </button>
            <button
              onClick={() => canNext && setStep(step + 1)}
              disabled={!canNext}
              className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-base disabled:opacity-40 hover:opacity-90 transition"
            >
              {step === 0
                ? "EMPEZAR"
                : step === totalSteps
                  ? "COMPLETADO"
                  : "SIGUIENTE"}
            </button>
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-base">
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
      `}</style>
    </div>
  );
}
