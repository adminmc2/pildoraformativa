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
  email: { label: "Correo electrónico", Icon: EnvelopeSimple, color: "#2563EB", soft: "#DBEAFE" },
  chat: { label: "Chat", Icon: ChatCircle, color: "#15803D", soft: "#DCFCE7" },
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

/* ── Secciones del correo de Marta (fase 2) ──
   barColor = color decorativo de la barra lateral (vivo)
   textColor = variante oscura accesible para el label sobre blanco (≥4.5:1) */
const EMAIL_PARTS = [
  { label: "DE / PARA", barColor: "var(--color-pf-ink)", textColor: "var(--color-pf-ink)", lines: ["De: marta@correo.es", "Para: pierre@correo.fr"] },
  { label: "ASUNTO", barColor: "var(--color-pf-star)", textColor: "#8A6B00", lines: ["¡Hola desde Cádiz!"] },
  { label: "SALUDO", barColor: "var(--color-pf-pill)", textColor: "#3F6B14", lines: ["¡Hola, Pierre! ¿Qué tal estás?"] },
  {
    label: "CUERPO",
    barColor: "var(--color-pf-flower)",
    textColor: "#8A1470",
    lines: [
      "Hoy te hablo de mi familia: mi padre trabaja en un hotel y mi madre en un hospital. Mi hermano Mario tiene once años y mi hermana Ana tiene seis. ¿Y tú, cuántos hermanos tienes?",
      "Y en el instituto, ¿qué tal el nuevo curso? Yo este año tengo muchos amigos en mi clase: Emilio, Elena, Santiago... y también tengo una compañera nueva: se llama Bárbara.",
      "Este curso es un poco más difícil. Tres días a la semana salimos a las 15:30 y tenemos muchos deberes de Tecnología y Matemáticas. A mí me gusta mucho la Historia.",
      "¿Tú también tienes muchos deberes este año?",
    ],
  },
  { label: "DESPEDIDA", barColor: "var(--color-pf-spark)", textColor: "#8A2F10", lines: ["¡Un saludo desde Cádiz!"] },
  { label: "FIRMA", barColor: "var(--color-pf-moon)", textColor: "#3B2A8A", lines: ["Marta"] },
];

/* ── Highlight helper (énfasis, no cita gramatical → solo naranja, sin cursiva) ── */
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

/* ── Helpers ── */
const emptySel = (): Record<Cat, boolean> => ({ email: false, chat: false, post: false });

/** Evita que conjunciones monosílabas (y, o, u, e) queden al final de línea
    al hacer wrap. Reemplaza el espacio después por non-breaking space. */
function noOrphanY(text: string): string {
  return text.replace(/(^|[\s¿¡])([yYoOuUeE]) /g, "$1$2 ");
}

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

type Status = "empty" | "wrong" | "partial" | "correct";

function getStatus(itemId: string, selections: Record<string, Record<Cat, boolean>>): { status: Status; wrongCat?: Cat } {
  const item = ITEMS.find((i) => i.id === itemId);
  if (!item) return { status: "empty" };
  const sel = selections[itemId];
  if (!sel) return { status: "empty" };
  const selected = CAT_KEYS.filter((c) => sel[c]);
  if (selected.length === 0) return { status: "empty" };
  const wrong = selected.find((c) => !item.cats.includes(c));
  if (wrong) return { status: "wrong", wrongCat: wrong };
  if (selected.length === item.cats.length) return { status: "correct" };
  return { status: "partial" };
}

/* ── Componente ── */
export function SlidePili1() {
  const [phase, setPhase] = useState<1 | 2>(1);
  const [selections, setSelections] = useState<Record<string, Record<Cat, boolean>>>({});
  const [lastTouched, setLastTouched] = useState<string | null>(null);
  const [feedbackId, setFeedbackId] = useState(0);

  const correctCount = ITEMS.filter((item) => isCorrect(item.id, selections)).length;
  const allDone = correctCount === ITEMS.length;

  /* ── Handler ── */
  const handleToggle = (itemId: string, cat: Cat) => {
    if (isCorrect(itemId, selections)) return; // locked
    setSelections((prev) => {
      const itemSel = prev[itemId] || emptySel();
      return { ...prev, [itemId]: { ...itemSel, [cat]: !itemSel[cat] } };
    });
    setLastTouched(itemId);
    setFeedbackId((n) => n + 1);
  };

  /* ── Bubble (3 estados de retroalimentación: parcial ≠ error) ── */
  const lastItem = lastTouched ? ITEMS.find((i) => i.id === lastTouched) : null;
  const lastInfo = lastTouched ? getStatus(lastTouched, selections) : { status: "empty" as Status };

  let bubble: React.ReactNode;
  if (phase === 2) {
    bubble = (
      <>
        ¡Así es un <V>correo electrónico</V>! Tiene partes muy claras: saludo, cuerpo, despedida y firma.
      </>
    );
  } else if (allDone) {
    bubble = (
      <>
        ¡Muy bien! Ahora mirad cómo se ven estas partes en el <V>correo de Marta</V>.
      </>
    );
  } else if (lastInfo.status === "correct") {
    bubble = (
      <>
        ¡<V>Correcto</V>! Sigue con los demás.
      </>
    );
  } else if (lastInfo.status === "wrong" && lastInfo.wrongCat) {
    bubble = (
      <>
        Mmm, eso no se usa en <V>{CATS[lastInfo.wrongCat].label.toLowerCase()}</V>. Inténtalo otra vez.
      </>
    );
  } else if (lastInfo.status === "partial") {
    bubble = (
      <>
        ¡Bien! Pero <V>todavía falta</V>. Sigue.
      </>
    );
  } else {
    bubble = (
      <>
        ¿Qué usamos en un <V>correo electrónico</V>? Elige dónde lo usamos: correo electrónico, chat o post.
      </>
    );
  }

  const stepKey = phase * 1000 + correctCount * 10 + (feedbackId % 10);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
        <div className="flex flex-col gap-3 min-w-0">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)] text-[var(--color-pf-ink)]">
              PILI
            </span>
            <span
              className="px-3 py-1 rounded-full text-[clamp(18px,min(1.6vw,2vh),20px)] font-semibold"
              style={{ background: "var(--color-pf-star-soft)", color: "#8A6B00" }}
            >
              Anfitriona
            </span>
          </div>

          {/* Título */}
          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(36px,min(5.5vw,7vh),72px)] text-[var(--color-pf-ink)]">
            {phase < 2 ? "¿Correo electrónico, chat o post?" : "El correo de Marta"}
          </h1>

          {/* Instrucción */}
          <p className="text-[clamp(24px,min(2.4vw,3vh),32px)] font-semibold text-white bg-[var(--color-pf-ink)] w-fit px-5 py-2 rounded-full">
            {phase === 1
              ? `Clasifica cada elemento. ${correctCount} / ${ITEMS.length}`
              : "Estas son las partes de un correo electrónico."}
          </p>

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
                        className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)] font-bold"
                        style={{ color: c.color }}
                      >
                        {c.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Grid de tarjetas */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
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
                      <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)] leading-tight text-center font-semibold text-[var(--color-pf-ink)]">
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
                              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[var(--color-pf-spark)]"
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

              {/* Botón siguiente — siempre visible, se activa al completar */}
              <div className="mt-3">
                <button
                  onClick={() => setPhase(2)}
                  disabled={!allDone}
                  className="px-8 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)] hover:scale-[1.02] transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={allDone ? { animation: "btnPulse 2s ease-in-out infinite" } : undefined}
                >
                  {allDone ? "VER EN EL CORREO DE MARTA" : "SIGUIENTE"}
                </button>
              </div>
            </div>
          )}

          {/* ── FASE 2: Correo de Marta con partes etiquetadas ── */}
          {phase === 2 && (
            <div
              className="rounded-[20px] bg-white shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)] overflow-hidden"
              style={{ animation: "cardIn 500ms cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              {/* Header correo */}
              <div className="px-5 py-2.5 border-b border-[var(--color-pf-ink)]/10 flex items-center gap-2">
                <EnvelopeSimple size={22} weight="duotone" className="text-[var(--color-pf-ink)] opacity-60" aria-hidden />
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)] text-[var(--color-pf-ink)] tracking-wide font-semibold">
                  CORREO DE MARTA
                </span>
              </div>

              {/* Cuerpo del correo con etiquetas al lado (formato correo) */}
              <div className="px-5 py-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 items-start">
                {EMAIL_PARTS.map((section, i) => (
                  <React.Fragment key={section.label}>
                    {/* Etiqueta lateral */}
                    <span
                      className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,min(1.6vw,2vh),22px)] font-bold tracking-wider uppercase whitespace-nowrap pt-1"
                      style={{
                        color: section.textColor,
                        animation: `cardIn 400ms cubic-bezier(0.2,0.8,0.2,1) ${i * 80}ms both`,
                      }}
                    >
                      {section.label}
                    </span>
                    {/* Contenido del correo */}
                    <div
                      className="flex flex-col gap-0.5 min-w-0 border-l-[3px] pl-3"
                      style={{
                        borderColor: section.barColor,
                        animation: `cardIn 400ms cubic-bezier(0.2,0.8,0.2,1) ${i * 80}ms both`,
                      }}
                    >
                      {section.lines.map((line, j) => (
                        <span
                          key={j}
                          className="text-[clamp(22px,min(2.2vw,2.8vh),28px)] leading-snug text-[var(--color-pf-ink)]"
                        >
                          {noOrphanY(line)}
                        </span>
                      ))}
                    </div>
                  </React.Fragment>
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
        @keyframes btnPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10, 10, 10, 0.28); }
          50% { box-shadow: 0 0 0 18px rgba(10, 10, 10, 0); }
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
