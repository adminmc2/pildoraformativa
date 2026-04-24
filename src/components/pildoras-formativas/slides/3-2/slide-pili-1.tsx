"use client";

import React, { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import {
  At,
  Paperclip,
  Smiley,
  Microphone,
  Checks,
  Hash,
  Heart,
  Camera,
  Star,
  ChatCircle,
  EnvelopeSimple,
  Image,
  PaperPlaneTilt,
  PencilSimple,
  CheckCircle,
  Handshake,
  Tag,
} from "@phosphor-icons/react";

/* ── Categorías ── */
const CATS = {
  email: { label: "Email", Icon: EnvelopeSimple, color: "#2563EB", soft: "#DBEAFE" },
  chat: { label: "Chat", Icon: ChatCircle, color: "#16A34A", soft: "#DCFCE7" },
  post: { label: "Post", Icon: Image, color: "#9333EA", soft: "#F3E8FF" },
} as const;

type Cat = keyof typeof CATS;

/* ── Elementos a clasificar (orden mezclado) ── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ITEMS: { id: string; label: string; Icon: React.ComponentType<any>; cats: Cat[] }[] = [
  { id: "arroba", label: "@ arroba", Icon: At, cats: ["email", "chat", "post"] },
  { id: "emoji", label: "Emoji", Icon: Smiley, cats: ["email", "chat", "post"] },
  { id: "hashtag", label: "#hashtag", Icon: Hash, cats: ["post"] },
  { id: "de-para", label: "De: / Para:", Icon: EnvelopeSimple, cats: ["email"] },
  { id: "audio", label: "Nota de voz", Icon: Microphone, cats: ["chat"] },
  { id: "like", label: "Like", Icon: Heart, cats: ["chat", "post"] },
  { id: "asunto", label: "Asunto", Icon: Tag, cats: ["email"] },
  { id: "jajaja", label: "jajaja", Icon: ChatCircle, cats: ["chat", "post"] },
  { id: "firma", label: "Firma (nombre)", Icon: PencilSimple, cats: ["email"] },
  { id: "foto", label: "Foto con filtro", Icon: Camera, cats: ["chat", "post"] },
  { id: "saludo", label: "¡Hola! ¿Qué tal?", Icon: Handshake, cats: ["email", "chat", "post"] },
  { id: "sticker", label: "Sticker", Icon: Star, cats: ["chat", "post"] },
  { id: "despedida", label: "Un saludo desde...", Icon: PaperPlaneTilt, cats: ["email"] },
  { id: "visto", label: "Visto azul", Icon: Checks, cats: ["chat"] },
  { id: "adjuntar", label: "Adjuntar archivo", Icon: Paperclip, cats: ["email", "chat"] },
];

const CAT_KEYS = Object.keys(CATS) as Cat[];

/* ── Secciones del email de Marta (fase 2) ── */
const EMAIL_PARTS = [
  { label: "DE / PARA", color: "var(--color-pf-ink)", lines: ["De: marta@correo.es", "Para: pierre@correo.fr"] },
  { label: "ASUNTO", color: "var(--color-pf-star)", lines: ["¡Hola desde Cádiz!"] },
  { label: "SALUDO", color: "var(--color-pf-pill)", lines: ["¡Hola, Pierre! ¿Qué tal estás?"] },
  {
    label: "CUERPO",
    color: "var(--color-pf-flower)",
    lines: [
      "Hoy te hablo de mi familia: mi padre trabaja en un hotel y mi madre en un hospital...",
      "Yo este año tengo muchos amigos en mi clase: Emilio, Elena, Santiago...",
      "Este curso es un poco más difícil. Tres días a la semana salimos a las 15:30...",
      "¿Tú también tienes muchos deberes este año?",
    ],
  },
  { label: "DESPEDIDA", color: "var(--color-pf-spark)", lines: ["¡Un saludo desde Cádiz!"] },
  { label: "FIRMA", color: "var(--color-pf-moon)", lines: ["Marta"] },
];

/* ── Highlight helper ── */
const C = ({ children }: { children: React.ReactNode }) => (
  <span className="italic" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

/* ── Helpers ── */
const emptySel = (): Record<Cat, boolean> => ({ email: false, chat: false, post: false });

function isCorrect(itemId: string, selections: Record<string, Record<Cat, boolean>>): boolean {
  const item = ITEMS.find((i) => i.id === itemId);
  if (!item) return false;
  const sel = selections[itemId];
  if (!sel) return false;
  const selected = CAT_KEYS.filter((c) => sel[c]);
  return (
    selected.length === item.cats.length && selected.every((c) => item.cats.includes(c))
  );
}

/* ── Componente ── */
export function SlidePili1() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [selections, setSelections] = useState<Record<string, Record<Cat, boolean>>>({});

  const correctCount = ITEMS.filter((item) => isCorrect(item.id, selections)).length;
  const allDone = correctCount === ITEMS.length;

  /* ── Handler ── */
  const handleToggle = (itemId: string, cat: Cat) => {
    if (isCorrect(itemId, selections)) return; // locked
    setSelections((prev) => {
      const itemSel = prev[itemId] || emptySel();
      return { ...prev, [itemId]: { ...itemSel, [cat]: !itemSel[cat] } };
    });
  };

  /* ── Bubble ── */
  const bubble =
    phase === 0 ? (
      <>
        ¿Sabéis qué cosas tiene un <C>email</C> y qué cosas NO?
      </>
    ) : phase === 1 && !allDone ? (
      <>
        Pulsad los colores en cada tarjeta. <C>¡Algunos van en más de una!</C>
      </>
    ) : phase === 1 && allDone ? (
      <>
        ¡Muy bien! Ahora mirad cómo se ven estas partes en el <C>correo de Marta</C>.
      </>
    ) : (
      <>
        ¡Así es un <C>email</C>! Tiene partes muy claras: saludo, cuerpo, despedida y firma.
      </>
    );

  const stepKey = phase * 100 + correctCount;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.8fr_1fr] gap-8 items-center">
        <div className="flex flex-col gap-3 min-w-0">
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
          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(36px,min(5.5vw,7vh),72px)] text-[var(--color-pf-ink)] whitespace-nowrap">
            {phase < 2 ? "¿Email, chat o post?" : "El correo de Marta"}
          </h1>

          {/* Instrucción */}
          <p className="text-[clamp(16px,2vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full">
            {phase === 0
              ? "¿Qué cosas son de un email?"
              : phase === 1
                ? `Clasifica cada elemento. ${correctCount} / ${ITEMS.length}`
                : "Estas son las partes de un email."}
          </p>

          {/* ── FASE 0: Intro ── */}
          {phase === 0 && (
            <div className="mt-4">
              <button
                onClick={() => setPhase(1)}
                className="px-10 py-4 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(16px,2vh,22px)] hover:scale-[1.02] transition"
                style={{ animation: "btnPulse 2s ease-in-out infinite" }}
              >
                SIGUIENTE
              </button>
            </div>
          )}

          {/* ── FASE 1: Clasificación con mini-botones ── */}
          {phase === 1 && (
            <div style={{ animation: "cardIn 400ms cubic-bezier(0.2,0.8,0.2,1)" }}>
              {/* Leyenda */}
              <div className="flex gap-5 mb-3">
                {CAT_KEYS.map((cat) => {
                  const c = CATS[cat];
                  const CatIcon = c.Icon;
                  return (
                    <div key={cat} className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: c.color }}
                      >
                        <CatIcon size={15} weight="bold" color="white" />
                      </div>
                      <span
                        className="font-[family-name:var(--font-pf-display)] text-[clamp(15px,1.5vw,18px)] font-bold"
                        style={{ color: c.color }}
                      >
                        {c.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Grid de tarjetas */}
              <div className="grid grid-cols-5 gap-2">
                {ITEMS.map((item, i) => {
                  const correct = isCorrect(item.id, selections);
                  const sel = selections[item.id] || emptySel();
                  const ItemIcon = item.Icon;

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col items-center gap-1 rounded-[14px] px-2 py-2 border-2 transition-all duration-300"
                      style={{
                        background: correct ? "#F0FDF4" : "white",
                        borderColor: correct ? "#22C55E" : "rgba(10,10,10,0.08)",
                        animation: `cardIn 300ms cubic-bezier(0.2,0.8,0.2,1) ${i * 40}ms both`,
                      }}
                    >
                      <ItemIcon
                        size={22}
                        weight="duotone"
                        style={{ color: "var(--color-pf-ink)" }}
                      />
                      <span className="font-[family-name:var(--font-pf-display)] text-[clamp(15px,1.3vw,17px)] leading-tight text-center font-semibold text-[var(--color-pf-ink)]">
                        {item.label}
                      </span>

                      {/* Mini-botones de categoría */}
                      <div className="flex gap-1.5 mt-0.5">
                        {CAT_KEYS.map((cat) => {
                          const c = CATS[cat];
                          const CatIcon = c.Icon;
                          const toggled = sel[cat];
                          return (
                            <button
                              key={cat}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggle(item.id, cat);
                              }}
                              disabled={correct}
                              className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 disabled:hover:scale-100"
                              style={{
                                background: toggled ? c.color : "rgba(10,10,10,0.05)",
                                border: `2px solid ${toggled ? c.color : "rgba(10,10,10,0.1)"}`,
                              }}
                              aria-label={`${c.label} para ${item.label}`}
                            >
                              <CatIcon
                                size={13}
                                weight={toggled ? "fill" : "regular"}
                                style={{
                                  color: toggled ? "white" : "rgba(10,10,10,0.25)",
                                }}
                              />
                            </button>
                          );
                        })}
                      </div>

                      {/* Check cuando es correcto */}
                      {correct && (
                        <CheckCircle
                          size={16}
                          weight="fill"
                          style={{
                            color: "#22C55E",
                            animation: "checkPop 300ms cubic-bezier(0.2,0.8,0.2,1)",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Botón completar */}
              {allDone && (
                <div className="mt-3">
                  <button
                    onClick={() => setPhase(2)}
                    className="px-8 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(16px,2vh,20px)] hover:scale-[1.02] transition"
                    style={{ animation: "btnPulse 2s ease-in-out infinite" }}
                  >
                    VER EN EL CORREO DE MARTA
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── FASE 2: Email de Marta con partes etiquetadas ── */}
          {phase === 2 && (
            <div
              className="rounded-[20px] bg-white shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)] overflow-hidden"
              style={{ animation: "cardIn 500ms cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              {/* Header email */}
              <div className="px-5 py-2.5 border-b border-[var(--color-pf-ink)]/10 flex items-center gap-2">
                <EnvelopeSimple size={20} weight="duotone" className="text-[var(--color-pf-ink)] opacity-60" />
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(15px,1.4vw,18px)] text-[var(--color-pf-ink)] tracking-wide">
                  CORREO DE MARTA
                </span>
              </div>

              {/* Secciones etiquetadas */}
              <div className="px-5 py-3 flex flex-col gap-2">
                {EMAIL_PARTS.map((section, i) => (
                  <div
                    key={section.label}
                    className="flex gap-3 items-start"
                    style={{
                      animation: `cardIn 400ms cubic-bezier(0.2,0.8,0.2,1) ${i * 80}ms both`,
                    }}
                  >
                    {/* Barra de color */}
                    <div
                      className="w-[4px] rounded-full flex-shrink-0 self-stretch"
                      style={{ background: section.color }}
                    />
                    {/* Etiqueta + texto */}
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span
                        className="font-[family-name:var(--font-pf-display)] text-[clamp(11px,1vw,14px)] font-bold tracking-wider uppercase"
                        style={{ color: section.color }}
                      >
                        {section.label}
                      </span>
                      {section.lines.map((line, j) => (
                        <span
                          key={j}
                          className="text-[clamp(14px,min(1.4vw,1.8vh),18px)] leading-snug text-[var(--color-pf-ink)]"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Columna derecha: personaje */}
        <CharacterStage bubble={bubble} step={stepKey}>
          <PilarStar
            pose={phase === 2 ? "wave" : allDone ? "wave" : phase === 1 ? "point" : "hug"}
            className="w-full h-auto"
          />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes cardIn {
          0% { opacity: 0; transform: translateY(14px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes checkPop {
          0% { transform: scale(0); }
          60% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        @keyframes cardPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 16px -6px rgba(0,0,0,0.08); }
          50% { transform: scale(1.03); box-shadow: 0 6px 24px -6px rgba(0,0,0,0.15); }
        }
        @keyframes btnPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10, 10, 10, 0.28); }
          50% { box-shadow: 0 0 0 18px rgba(10, 10, 10, 0); }
        }
      `}</style>
    </div>
  );
}
