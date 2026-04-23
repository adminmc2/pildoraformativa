"use client";

import React, { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import {
  UsersThree,
  Handshake,
  GraduationCap,
  MapPin,
  EnvelopeSimple,
  CheckCircle,
} from "@phosphor-icons/react";

/* ── Temas del correo ── */
const TOPICS = [
  {
    id: "familia" as const,
    Icon: UsersThree,
    label: "Mi familia",
    example: "Mi padre trabaja en… y mi madre en…",
    color: "var(--color-pf-star)",
    softColor: "var(--color-pf-star-soft)",
  },
  {
    id: "amigos" as const,
    Icon: Handshake,
    label: "Mis amigos",
    example: "Tengo un compañero que se llama…",
    color: "var(--color-pf-flower)",
    softColor: "var(--color-pf-flower-soft)",
  },
  {
    id: "instituto" as const,
    Icon: GraduationCap,
    label: "Mi instituto",
    example: "Este curso estudio… y salimos a las…",
    color: "var(--color-pf-pill)",
    softColor: "var(--color-pf-pill-soft)",
  },
  {
    id: "ciudad" as const,
    Icon: MapPin,
    label: "Mi ciudad",
    example: "Vivo en… y me gusta mucho…",
    color: "var(--color-pf-moon)",
    softColor: "var(--color-pf-moon-soft)",
  },
];

type TopicId = (typeof TOPICS)[number]["id"];

const C = ({ children }: { children: React.ReactNode }) => (
  <span className="italic" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

/* ── Componente ── */
export function SlidePili1() {
  const [phase, setPhase] = useState<0 | 1>(0);
  const [revealed, setRevealed] = useState<Set<TopicId>>(new Set());

  const allRevealed = revealed.size === TOPICS.length;

  const next = () => {
    if (phase === 0) setPhase(1);
  };

  const reset = () => {
    setPhase(0);
    setRevealed(new Set());
  };

  const revealTopic = (id: TopicId) => {
    if (phase !== 1) return;
    setRevealed((prev) => new Set(prev).add(id));
  };

  const bubble =
    phase === 0
      ? <>Hoy tenéis una <C>misión</C>: escribir un correo a un amigo de otro país.</>
      : !allRevealed
      ? <>Pensad: si un amigo no conoce vuestra vida, <C>¿de qué le habláis?</C> Pulsad cada tarjeta.</>
      : <>¡Ya tenéis los <C>4 temas</C>! Ahora vamos a ver cómo <C>Marta</C> organiza su correo.</>;

  const buttonLabel =
    phase === 0
      ? "SIGUIENTE"
      : !allRevealed
      ? "PULSA CADA TARJETA"
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
              style={{ background: "var(--color-pf-star-soft)", color: "#8A6B00" }}
            >
              Anfitriona
            </span>
          </div>

          {/* Título */}
          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(40px,min(6vw,8vh),80px)] text-[var(--color-pf-ink)] whitespace-nowrap">
            ¡Escribe a un amigo!
          </h1>

          {/* Instrucción (píldora oscura) */}
          <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full">
            {phase === 0
              ? "¿De qué puedes hablar en un correo a un amigo?"
              : "Elige los temas y mira cómo se rellena el correo."}
          </p>

          {/* ── Email template ── */}
          <div className="rounded-[24px] bg-white shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)] overflow-hidden">
            {/* Header del email */}
            <div className="px-7 py-3 border-b border-[var(--color-pf-ink)]/10 flex items-center gap-3">
              <EnvelopeSimple size={22} weight="duotone" className="text-[var(--color-pf-ink)] opacity-60" />
              <span className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.6vw,20px)] text-[var(--color-pf-ink)] tracking-wide">
                NUEVO CORREO
              </span>
            </div>

            {/* Campos De / Para */}
            <div className="px-7 py-2 border-b border-[var(--color-pf-ink)]/10 font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.5vw,20px)]">
              <div className="flex gap-2 items-center py-1">
                <span className="text-[var(--color-pf-ink)] opacity-50 w-16">De:</span>
                <span className="text-[var(--color-pf-ink)]">TU NOMBRE</span>
              </div>
              <div className="flex gap-2 items-center py-1">
                <span className="text-[var(--color-pf-ink)] opacity-50 w-16">Para:</span>
                <span className="text-[var(--color-pf-ink)]">Un amigo de otro país</span>
              </div>
            </div>

            {/* Cuerpo del email */}
            <div className="px-7 py-4 min-h-[110px] flex flex-col gap-1.5 font-[family-name:var(--font-pf-display)] text-[clamp(18px,min(2vw,2.5vh),24px)] leading-snug text-[var(--color-pf-ink)]">
              {/* Saludo — copiado de Marta */}
              <div className="italic" style={{ color: "var(--color-pf-spark)", opacity: 0.8 }}>
                ¡Hola, Pierre! ¿Qué tal estás?
              </div>

              {/* 4 líneas temáticas */}
              {TOPICS.map((t) => {
                const isRevealed = phase >= 1 && revealed.has(t.id);
                const IconComp = t.Icon;
                return (
                  <div
                    key={t.id}
                    className="flex items-center gap-3 transition-all duration-400"
                    style={{
                      opacity: isRevealed ? 1 : 0.18,
                      animation: isRevealed ? "lineIn 400ms cubic-bezier(0.2,0.8,0.2,1)" : "none",
                    }}
                  >
                    <IconComp
                      size={18}
                      weight={isRevealed ? "fill" : "regular"}
                      style={{ color: isRevealed ? t.color : "var(--color-pf-ink)", flexShrink: 0 }}
                    />
                    <span>
                      {isRevealed ? t.example : "· · · · · · · · · · · · · ·"}
                    </span>
                  </div>
                );
              })}

              {/* Despedida — copiada de Marta */}
              <div className="italic mt-1" style={{ color: "var(--color-pf-spark)", opacity: 0.8 }}>
                ¡Un saludo desde Cádiz!<br />Marta
              </div>
            </div>
          </div>

          {/* ── Tarjetas de temas (fase 1) ── */}
          {phase === 1 && (
            <div
              className="grid grid-cols-4 gap-3"
              style={{ animation: "cardIn 500ms cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              {TOPICS.map((t, i) => {
                const isRevealed = revealed.has(t.id);
                const IconComp = t.Icon;
                return (
                  <button
                    key={t.id}
                    onClick={() => revealTopic(t.id)}
                    disabled={isRevealed}
                    className="flex flex-col items-center gap-2 rounded-[16px] px-3 py-3 border-2 transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] disabled:hover:scale-100"
                    style={{
                      background: isRevealed ? "rgba(10,10,10,0.04)" : t.softColor,
                      borderColor: isRevealed ? "rgba(10,10,10,0.06)" : t.color,
                      boxShadow: isRevealed
                        ? "none"
                        : `0 6px 24px -6px ${t.color}50`,
                      opacity: isRevealed ? 0.35 : 1,
                      animation: isRevealed
                        ? "none"
                        : `cardIn 400ms cubic-bezier(0.2,0.8,0.2,1) ${i * 80}ms both, cardPulse 2s ease-in-out ${i * 200}ms infinite`,
                    }}
                  >
                    <IconComp
                      size={30}
                      weight={isRevealed ? "regular" : "fill"}
                      style={{ color: isRevealed ? "rgba(10,10,10,0.25)" : t.color }}
                    />
                    <span
                      className="font-[family-name:var(--font-pf-display)] text-[clamp(13px,1.2vw,16px)] leading-tight font-bold"
                      style={{ color: isRevealed ? "rgba(10,10,10,0.25)" : "var(--color-pf-ink)" }}
                    >
                      {t.label}
                    </span>
                    {isRevealed && (
                      <CheckCircle
                        size={18}
                        weight="fill"
                        style={{ color: "rgba(10,10,10,0.2)" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Botón + contador */}
          <div className="mt-2 flex items-center gap-4">
            {phase === 0 ? (
              <button
                onClick={next}
                className="px-10 py-4 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(16px,2vh,22px)] hover:scale-[1.02] transition"
                style={{ animation: "btnPulse 2s ease-in-out infinite" }}
              >
                SIGUIENTE
              </button>
            ) : !allRevealed ? (
              <span
                className="px-6 py-2.5 rounded-full bg-[var(--color-pf-spark)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(14px,1.6vh,18px)]"
                style={{ animation: "btnPulse 2s ease-in-out infinite" }}
              >
                PULSA CADA TARJETA
              </span>
            ) : (
              <button
                onClick={reset}
                className="px-6 py-2 rounded-full bg-white/80 text-[var(--color-pf-ink)] text-base font-semibold hover:bg-white transition"
              >
                Reiniciar
              </button>
            )}
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-60 text-base">
              {revealed.size} / 4
            </span>
          </div>
        </div>

        {/* Columna derecha: personaje */}
        <CharacterStage bubble={bubble} step={phase + revealed.size}>
          <PilarStar
            pose={allRevealed ? "wave" : phase >= 1 ? "point" : "hug"}
            className="w-full h-auto"
          />
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
        @keyframes checkPop {
          0% {
            transform: scale(0);
          }
          60% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes cardPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 6px 20px -10px rgba(0,0,0,0.08);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 8px 28px -8px rgba(0,0,0,0.15);
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
