"use client";

import React, { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { EnvelopeSimple, CheckCircle } from "@phosphor-icons/react";

/* ── Bloques del email en orden correcto ── */
const BLOCKS = [
  {
    id: "de-para",
    label: "DE / PARA",
    color: "var(--color-pf-ink)",
    lines: ["De: marta@correo.es — Para: pierre@correo.fr"],
    order: 1,
  },
  {
    id: "asunto",
    label: "ASUNTO",
    color: "var(--color-pf-star)",
    lines: ["¡Hola desde Cádiz!"],
    order: 2,
  },
  {
    id: "saludo",
    label: "SALUDO",
    color: "var(--color-pf-pill)",
    lines: ["¡Hola, Pierre! ¿Qué tal estás?"],
    order: 3,
  },
  {
    id: "cuerpo",
    label: "CUERPO",
    color: "var(--color-pf-flower)",
    lines: [
      "Hoy te hablo de mi familia: mi padre trabaja en un hotel y mi madre en un hospital. Mi hermano Mario tiene once años y mi hermana Ana tiene seis. ¿Y tú, cuántos hermanos tienes?",
      "Y en el instituto, ¿qué tal el nuevo curso? Yo este año tengo muchos amigos en mi clase: Emilio, Elena, Santiago... y también tengo una compañera nueva: se llama Bárbara.",
      "Este curso es un poco más difícil. Tres días a la semana salimos a las 15:30 y tenemos muchos deberes de Tecnología y Matemáticas. A mí me gusta mucho la Historia.",
      "¿Tú también tienes muchos deberes este año?",
    ],
    order: 4,
  },
  {
    id: "despedida",
    label: "DESPEDIDA",
    color: "var(--color-pf-spark)",
    lines: ["¡Un saludo desde Cádiz!"],
    order: 5,
  },
  {
    id: "firma",
    label: "FIRMA",
    color: "var(--color-pf-moon)",
    lines: ["Marta"],
    order: 6,
  },
];

/* Bloques en orden desordenado para el banco */
const SCRAMBLED_IDS = ["despedida", "cuerpo", "asunto", "firma", "saludo", "de-para"];
const SCRAMBLED = SCRAMBLED_IDS.map((id) => BLOCKS.find((b) => b.id === id)!);

/* Slots del esqueleto (orden correcto 1-6) */
const SLOTS = BLOCKS.map((b) => ({ order: b.order, label: b.label }));

/* ── Highlight helpers ── */
/* P: cita literal de gramática → cursiva + naranja */
const P = ({ children }: { children: React.ReactNode }) => (
  <span className="italic font-semibold" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);
/* V: énfasis genérico → solo naranja bold, sin cursiva */
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

/* ── Componente ── */
export function SlidePili2() {
  const [phase, setPhase] = useState<0 | 1>(0);
  const [selected, setSelected] = useState<string | null>(null); // bloque seleccionado
  const [placed, setPlaced] = useState<Map<number, string>>(new Map()); // slot order → block id
  const [shaking, setShaking] = useState<number | null>(null); // slot que hace shake

  const allDone = placed.size === BLOCKS.length;

  /* ── Handlers ── */
  const handleBlockClick = (blockId: string) => {
    if (phase !== 1 || [...placed.values()].includes(blockId)) return;
    setSelected(selected === blockId ? null : blockId);
  };

  const handleSlotClick = (slotOrder: number) => {
    if (phase !== 1 || !selected || placed.has(slotOrder)) return;

    const block = BLOCKS.find((b) => b.id === selected)!;
    if (block.order === slotOrder) {
      setPlaced((prev) => new Map(prev).set(slotOrder, selected));
      setSelected(null);
    } else {
      setShaking(slotOrder);
      setTimeout(() => setShaking(null), 500);
    }
  };

  /* ── Bubble ── */
  const bubble =
    phase === 0 ? (
      <>
        ¿Recordáis las partes del email? ¡Están <V>desordenadas</V>! Colocadlas en su sitio.
      </>
    ) : allDone ? (
      <>
        ¡<V>Perfecto</V>! Un email siempre sigue este orden. Ahora <V>Flora</V> os va a enseñar algo
        importante.
      </>
    ) : selected ? (
      <>
        Bien, habéis elegido <V>{BLOCKS.find((b) => b.id === selected)!.label}</V>. ¿En qué posición
        va?
      </>
    ) : placed.size === 0 ? (
      <>
        Primero pulsad una <V>pieza</V> y luego el <V>hueco</V> donde va.
      </>
    ) : (
      <>
        ¡Bien! Elegid la siguiente <V>pieza</V> y colocadla.
      </>
    );

  const stepKey = phase * 100 + placed.size + (selected ? 50 : 0);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
        <div className="flex flex-col gap-3 min-w-0">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span
              className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]"
              style={{ fontSize: "clamp(18px, 1.4vw, 22px)" }}
            >
              PILI
            </span>
            <span
              className="px-3 py-1 rounded-full font-semibold"
              style={{ background: "var(--color-pf-star-soft)", color: "#8A6B00", fontSize: "clamp(16px, 1.2vw, 20px)" }}
            >
              Anfitriona
            </span>
          </div>

          {/* Título */}
          <h1
            className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[var(--color-pf-ink)]"
            style={{ fontSize: "clamp(40px, 4.5vw, 72px)" }}
          >
            {allDone ? "¡Ordenado!" : "Ordena el email"}
          </h1>

          {/* Instrucción */}
          <p
            className="font-semibold text-white bg-[var(--color-pf-ink)] w-fit px-5 py-2 rounded-full"
            style={{ fontSize: "clamp(24px, 1.8vw, 32px)" }}
          >
            {phase === 0
              ? "Las partes del email están desordenadas."
              : allDone
                ? "Un email siempre tiene este orden."
                : `Pieza → hueco. ${placed.size} / ${BLOCKS.length}`}
          </p>

          {/* ── FASE 0: Intro ── */}
          {phase === 0 && (
            <div className="mt-4">
              <button
                onClick={() => setPhase(1)}
                className="px-10 py-4 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] hover:scale-[1.02] transition"
                style={{ fontSize: "clamp(22px, 1.6vw, 28px)", animation: "btnPulse 2s ease-in-out infinite" }}
              >
                SIGUIENTE
              </button>
            </div>
          )}

          {/* ── FASE 1: Esqueleto + banco de piezas ── */}
          {phase === 1 && (
            <div
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3 md:gap-5 items-start"
              style={{ animation: "cardIn 400ms cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              {/* Columna izquierda: esqueleto del email */}
              <div className="rounded-[20px] bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col" style={{ maxHeight: "48vh" }}>
                {/* Header */}
                <div className="px-4 py-2 border-b border-[var(--color-pf-ink)]/10 flex items-center gap-2">
                  <EnvelopeSimple
                    size={18}
                    weight="duotone"
                    className="text-[var(--color-pf-ink)] opacity-60"
                  />
                  <span
                    className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] tracking-wide"
                    style={{ fontSize: "clamp(22px, 1.8vw, 28px)" }}
                  >
                    EMAIL
                  </span>
                </div>

                {/* Slots */}
                <div className="px-3 py-2 flex flex-col gap-1.5 overflow-y-auto flex-1">
                  {SLOTS.map((slot, i) => {
                    const filledId = placed.get(slot.order);
                    const filledBlock = filledId
                      ? BLOCKS.find((b) => b.id === filledId)
                      : null;
                    const isShaking = shaking === slot.order;
                    const isEmpty = !filledBlock;

                    return (
                      <button
                        key={slot.order}
                        onClick={() => handleSlotClick(slot.order)}
                        disabled={!!filledBlock}
                        className="flex items-center gap-2.5 rounded-[10px] px-3 py-2 border-2 border-dashed text-left transition-all duration-200 disabled:border-solid"
                        style={{
                          borderColor: filledBlock
                            ? filledBlock.color
                            : selected
                              ? "var(--color-pf-ink)"
                              : "rgba(10,10,10,0.15)",
                          background: filledBlock
                            ? `color-mix(in srgb, ${filledBlock.color} 8%, white)`
                            : selected
                              ? "rgba(10,10,10,0.02)"
                              : "transparent",
                          cursor: isEmpty && selected ? "pointer" : isEmpty ? "default" : "default",
                          animation: isShaking
                            ? "shake 400ms ease-in-out"
                            : filledBlock
                              ? `cardIn 300ms cubic-bezier(0.2,0.8,0.2,1)`
                              : `cardIn 200ms cubic-bezier(0.2,0.8,0.2,1) ${i * 50}ms both`,
                        }}
                      >
                        {/* Número de posición */}
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0"
                          style={{
                            fontSize: "clamp(16px, 1.2vw, 20px)",
                            minWidth: "2rem",
                            background: filledBlock ? filledBlock.color : "rgba(10,10,10,0.08)",
                            color: filledBlock ? "white" : "rgba(10,10,10,0.3)",
                          }}
                        >
                          {slot.order}
                        </span>

                        {filledBlock ? (
                          <>
                            {/* Barra de color */}
                            <div
                              className="w-[3px] rounded-full flex-shrink-0 self-stretch"
                              style={{ background: filledBlock.color }}
                            />
                            <div className="flex flex-col min-w-0 flex-1">
                              <span
                                className="font-[family-name:var(--font-pf-display)] font-bold tracking-wider uppercase"
                                style={{ color: filledBlock.color, fontSize: "clamp(22px, 1.8vw, 28px)" }}
                              >
                                {filledBlock.label}
                              </span>
                              <div className="flex flex-col gap-1.5">
                                {filledBlock.lines.map((line, li) => (
                                  <span
                                    key={li}
                                    className="leading-snug text-[var(--color-pf-ink)] opacity-70"
                                    style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                                  >
                                    {line}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <CheckCircle
                              size={16}
                              weight="fill"
                              className="flex-shrink-0"
                              style={{
                                color: "#22C55E",
                                animation: "checkPop 300ms cubic-bezier(0.2,0.8,0.2,1)",
                              }}
                            />
                          </>
                        ) : (
                          <span
                            className="text-[var(--color-pf-ink)] opacity-20 font-semibold"
                            style={{ fontSize: "clamp(22px, 1.8vw, 28px)" }}
                          >
                            {selected ? "¿Va aquí?" : "· · ·"}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Columna derecha: banco de piezas sueltas — scroll propio */}
              <div className="flex flex-col gap-2 overflow-y-auto" style={{ maxHeight: "48vh" }}>
                <span
                  className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-50 tracking-wide"
                  style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                >
                  PIEZAS
                </span>
                {SCRAMBLED.map((block, i) => {
                  const isPlaced = [...placed.values()].includes(block.id);
                  const isSelected = selected === block.id;

                  if (isPlaced) {
                    return (
                      <div
                        key={block.id}
                        className="flex items-center gap-2 rounded-lg px-2.5 py-1 border-2 opacity-20"
                        style={{ borderColor: "rgba(10,10,10,0.06)", background: "rgba(10,10,10,0.02)" }}
                      >
                        <div
                          className="w-[3px] rounded-full flex-shrink-0 self-stretch"
                          style={{ background: "rgba(10,10,10,0.1)" }}
                        />
                        <span
                          className="text-[var(--color-pf-ink)] line-through"
                          style={{ fontSize: "clamp(22px, 1.8vw, 28px)" }}
                        >
                          {block.label}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={block.id}
                      onClick={() => handleBlockClick(block.id)}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 border-2 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        borderColor: isSelected ? block.color : "rgba(10,10,10,0.08)",
                        background: isSelected
                          ? `color-mix(in srgb, ${block.color} 10%, white)`
                          : "white",
                        boxShadow: isSelected
                          ? `0 4px 16px -4px color-mix(in srgb, ${block.color} 30%, transparent)`
                          : "0 2px 8px -4px rgba(0,0,0,0.06)",
                        animation: isSelected
                          ? "cardPulse 1.5s ease-in-out infinite"
                          : `cardIn 300ms cubic-bezier(0.2,0.8,0.2,1) ${i * 60}ms both`,
                      }}
                    >
                      {/* Barra de color */}
                      <div
                        className="w-[3px] rounded-full flex-shrink-0 self-stretch"
                        style={{ background: block.color }}
                      />
                      <div className="flex flex-col min-w-0 flex-1">
                        <span
                          className="font-[family-name:var(--font-pf-display)] font-bold tracking-wide uppercase"
                          style={{ color: block.color, fontSize: "clamp(22px, 1.8vw, 28px)" }}
                        >
                          {block.label}
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {block.lines.map((line, li) => (
                            <p
                              key={li}
                              className="leading-snug text-[var(--color-pf-ink)] opacity-70 m-0"
                              style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Columna derecha: personaje */}
        <CharacterStage bubble={bubble} step={stepKey}>
          <PilarStar
            pose={allDone ? "wave" : phase === 1 ? "point" : "hug"}
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
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
