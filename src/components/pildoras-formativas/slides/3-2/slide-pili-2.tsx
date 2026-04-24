"use client";

import React, { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { EnvelopeSimple } from "@phosphor-icons/react";

/* ── Párrafos del correo de Marta ── */
const PARAGRAPHS = [
  {
    id: "familia",
    color: "var(--color-pf-star)",
    label: "Familia",
    text: "Mi familia es pequeña. Mi padre se llama Antonio y trabaja en una oficina. Mi madre se llama Elena y es profesora. Tengo una hermana mayor, Ana, que estudia en la universidad.",
  },
  {
    id: "instituto",
    color: "var(--color-pf-pill)",
    label: "Instituto",
    text: "Estudio en el instituto Los Alcores. Este curso tengo muchas asignaturas, pero mi favorita es Música. Salimos a las tres de la tarde.",
  },
  {
    id: "amigos",
    color: "var(--color-pf-flower)",
    label: "Amigos",
    text: "Tengo un compañero que se llama David. Es muy simpático. Los fines de semana vamos al parque y jugamos al fútbol.",
  },
  {
    id: "ciudad",
    color: "var(--color-pf-moon)",
    label: "Ciudad",
    text: "Vivo en Cádiz. Es una ciudad pequeña y está al lado del mar. Me gusta mucho porque tiene playas muy bonitas.",
  },
] as const;

/* ── Highlight helper ── */
const C = ({ children }: { children: React.ReactNode }) => (
  <span className="italic" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

/* ── Burbujas de Pili según estado ── */
function getBubble(phase: number, visible: number) {
  if (phase === 0)
    return (
      <>
        Marta ya ha escrito su correo a Pierre. <C>¡Vamos a leerlo!</C>
      </>
    );
  if (phase === 2)
    return (
      <>
        ¡<C>4 temas</C>, como las tarjetas de antes! ¿Os acordáis?
      </>
    );
  // fase 1: depende del párrafo visible
  switch (visible) {
    case 1:
      return (
        <>
          Marta empieza hablando de su <C>familia</C>.
        </>
      );
    case 2:
      return (
        <>
          Ahora habla de su <C>instituto</C> y sus asignaturas.
        </>
      );
    case 3:
      return (
        <>
          ¿Veis? También habla de sus <C>amigos</C>.
        </>
      );
    case 4:
      return (
        <>
          Y termina con su <C>ciudad</C>. ¡Cádiz!
        </>
      );
    default:
      return null;
  }
}

/* ── Componente ── */
export function SlidePili2() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [visible, setVisible] = useState(0);

  const next = () => {
    if (phase === 0) {
      setPhase(1);
      setVisible(1);
    } else if (phase === 1 && visible < 4) {
      setVisible((v) => v + 1);
    } else if (phase === 1 && visible === 4) {
      setPhase(2);
    }
  };

  const reset = () => {
    setPhase(0);
    setVisible(0);
  };

  const bubble = getBubble(phase, visible);
  const stepKey = phase * 10 + visible;

  const buttonLabel =
    phase === 0
      ? "SIGUIENTE"
      : phase === 1 && visible < 4
        ? "SIGUIENTE PÁRRAFO"
        : phase === 1 && visible === 4
          ? "VER RESUMEN"
          : "COMPLETADO";

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.8fr_1fr] gap-8 items-center">
        <div className="flex flex-col gap-4 min-w-0">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vh,22px)] text-[var(--color-pf-ink)]">
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

          {/* Título */}
          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(40px,min(6vw,8vh),80px)] text-[var(--color-pf-ink)] whitespace-nowrap">
            El correo de Marta
          </h1>

          {/* Instrucción (píldora oscura) */}
          <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
            {phase === 0
              ? "Vamos a leer el correo que Marta escribe a Pierre."
              : phase === 2
                ? "Marta ha escrito sobre estos 4 temas."
                : `Lee el párrafo ${visible} de 4.`}
          </p>

          {/* ── Email completo ── */}
          <div className="rounded-[24px] bg-white shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)] overflow-hidden">
            {/* Header del email */}
            <div className="px-7 py-3 border-b border-[var(--color-pf-ink)]/10 flex items-center gap-3">
              <EnvelopeSimple
                size={22}
                weight="duotone"
                className="text-[var(--color-pf-ink)] opacity-60"
              />
              <span className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.6vw,20px)] text-[var(--color-pf-ink)] tracking-wide">
                CORREO DE MARTA
              </span>
            </div>

            {/* Campos De / Para */}
            <div className="px-7 py-2 border-b border-[var(--color-pf-ink)]/10 font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.5vw,20px)]">
              <div className="flex gap-2 items-center py-1">
                <span className="text-[var(--color-pf-ink)] opacity-50 w-16">
                  De:
                </span>
                <span className="text-[var(--color-pf-ink)]">
                  Marta García
                </span>
              </div>
              <div className="flex gap-2 items-center py-1">
                <span className="text-[var(--color-pf-ink)] opacity-50 w-16">
                  Para:
                </span>
                <span className="text-[var(--color-pf-ink)]">
                  Pierre Dupont
                </span>
              </div>
            </div>

            {/* Cuerpo del email */}
            <div className="px-7 py-4 flex flex-col gap-3 text-[clamp(16px,min(1.8vw,2.2vh),22px)] leading-relaxed text-[var(--color-pf-ink)]">
              {/* Saludo */}
              <div
                className="italic font-semibold"
                style={{ color: "var(--color-pf-spark)" }}
              >
                ¡Hola, Pierre! ¿Qué tal estás?
              </div>

              {/* Párrafos — se revelan uno a uno */}
              {PARAGRAPHS.map((p, i) => {
                const isVisible = phase >= 1 && visible > i;
                const showLabel = phase === 2;
                return (
                  <div
                    key={p.id}
                    className="flex gap-3 transition-all duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      maxHeight: isVisible ? 200 : 0,
                      overflow: "hidden",
                    }}
                  >
                    {/* Barra lateral de color */}
                    <div
                      className="w-[4px] rounded-full flex-shrink-0 transition-all duration-400"
                      style={{
                        background: isVisible ? p.color : "transparent",
                        animation: isVisible
                          ? "barGrow 400ms cubic-bezier(0.2,0.8,0.2,1)"
                          : "none",
                      }}
                    />

                    <div className="flex flex-col gap-1 py-0.5">
                      {/* Etiqueta (solo en fase recap) */}
                      {showLabel && (
                        <span
                          className="text-[clamp(13px,1.2vw,16px)] font-bold tracking-wide uppercase"
                          style={{
                            color: p.color,
                            animation: `cardIn 400ms cubic-bezier(0.2,0.8,0.2,1) ${i * 100}ms both`,
                          }}
                        >
                          {p.label}
                        </span>
                      )}
                      <span
                        style={{
                          animation:
                            isVisible && !showLabel
                              ? "lineIn 500ms cubic-bezier(0.2,0.8,0.2,1)"
                              : "none",
                        }}
                      >
                        {p.text}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Despedida */}
              <div
                className="italic font-semibold mt-1"
                style={{ color: "var(--color-pf-spark)" }}
              >
                ¡Un saludo desde Cádiz!
                <br />
                Marta
              </div>
            </div>
          </div>

          {/* Botón + contador */}
          <div className="mt-2 flex items-center gap-4">
            {phase < 2 ? (
              <button
                onClick={next}
                className="px-10 py-4 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(16px,2vh,22px)] hover:scale-[1.02] transition"
                style={{ animation: "btnPulse 2s ease-in-out infinite" }}
              >
                {buttonLabel}
              </button>
            ) : (
              <button
                onClick={reset}
                className="px-6 py-2 rounded-full bg-white/80 text-[var(--color-pf-ink)] text-base font-semibold hover:bg-white transition"
              >
                Reiniciar
              </button>
            )}
            {phase === 1 && (
              <span className="text-[var(--color-pf-ink)] font-semibold opacity-60 text-base">
                {visible} / 4
              </span>
            )}
          </div>
        </div>

        {/* Columna derecha: personaje */}
        <CharacterStage bubble={bubble} step={stepKey}>
          <PilarStar
            pose={phase === 2 ? "wave" : phase === 1 ? "point" : "hug"}
            className="w-full h-auto"
          />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes lineIn {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
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
        @keyframes barGrow {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }
        @keyframes btnPulse {
          0%,
          100% {
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
