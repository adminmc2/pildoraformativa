"use client";

import React, { useState } from "react";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { PencilSimple } from "@phosphor-icons/react";

/* ── Tarjetas encadenables con conectores ──
   Cada tarjeta lleva su conector integrado.
   El alumno elige varias tarjetas por grupo,
   las copia en orden y el resultado es un email
   coherente con conectores naturales. */

/* ── Highlight helper (naranja, sin cursiva) ── */
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

/* ── Datos ── */
type Card = { title: string; phrase: React.ReactNode };
type Group = {
  label: string;
  color: string;
  soft: string;
  hint: string;
  cards: Card[];
};

const GROUPS: Group[] = [
  {
    label: "SALUDO",
    color: "#3F6B14",
    soft: "#E8F5E0",
    hint: "Todos empiezan igual",
    cards: [
      { title: "Saludo", phrase: <>¡Hola, ___! ¿Qué tal estás?</> },
    ],
  },
  {
    label: "FAMILIA",
    color: "#C0392B",
    soft: "#FADBD8",
    hint: "Elige las tarjetas que necesites",
    cards: [
      { title: "Padre y madre", phrase: <><V>Hoy te hablo de mi familia:</V> mi padre trabaja en ___ <V>y</V> mi madre en ___.</> },
      { title: "Solo con madre", phrase: <><V>Hoy te hablo de mi familia:</V> vivo con mi madre. Trabaja en ___.</> },
      { title: "Solo con padre", phrase: <><V>Hoy te hablo de mi familia:</V> vivo con mi padre. Trabaja en ___.</> },
      { title: "Con hermano/a", phrase: <>Mi hermano/a ___ tiene ___ años.</> },
      { title: "Más hermanos", phrase: <><V>Y</V> mi hermana/o ___ tiene ___.</> },
      { title: "Sin hermanos", phrase: <>Soy hijo/a único/a.</> },
      { title: "Pregunta", phrase: <><V>¿Y tú?</V></> },
    ],
  },
  {
    label: "AMIGOS",
    color: "#D68910",
    soft: "#FEF5E7",
    hint: "Elige una o las dos",
    cards: [
      { title: "Muchos amigos", phrase: <><V>Yo este año</V> tengo muchos amigos: ___…</> },
      { title: "Mejor amigo/a", phrase: <>Mi mejor amigo/a se llama ___.</> },
    ],
  },
  {
    label: "ESCUELA",
    color: "#2E86C1",
    soft: "#D6EAF8",
    hint: "Copia las que quieras",
    cards: [
      { title: "Deberes", phrase: <><V>Este curso</V> tengo deberes de ___ y ___.</> },
      { title: "Me gusta", phrase: <><V>A mí</V> me gusta mucho ___.</> },
      { title: "Pregunta", phrase: <><V>¿Tú también</V> tienes muchos deberes?</> },
    ],
  },
  {
    label: "DESPEDIDA",
    color: "#7C5CFF",
    soft: "#EDEBFF",
    hint: "Todos terminan igual",
    cards: [
      { title: "Despedida", phrase: <>¡Un saludo desde ___!</> },
      { title: "Firma", phrase: <>Tu nombre</> },
    ],
  },
];

const BUBBLES: React.ReactNode[] = [
  <>Ahora toca <V>escribir</V> el correo. Elige las tarjetas que necesites y cópialas en orden.</>,
  <>Empieza con el <V>saludo</V>. Es igual para todos.</>,
  <>Elige las tarjetas de <V>familia</V> que encajan contigo. El texto naranja son los conectores: cópialos tal cual.</>,
  <>Elige una o dos tarjetas de <V>amigos</V>.</>,
  <>Escribe sobre la <V>escuela</V>. Copia los conectores en naranja.</>,
  <>Termina con la <V>despedida</V> y firma con tu nombre.</>,
  <>¡Correo <V>terminado</V>! Lee en voz alta lo que has escrito.</>,
];

export function SlideVito2() {
  const [step, setStep] = useState(0);
  const totalSteps = GROUPS.length + 1; // 0=intro, 1-5=groups, 6=conclusión

  const visibleIdx = step - 1;
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
            {step < totalSteps ? "Tu correo: elige y conecta" : "¡Correo listo!"}
          </h1>

          {/* Instrucción */}
          <p className="text-[clamp(20px,min(2vw,2.5vh),24px)] font-semibold text-white bg-[var(--color-pf-ink)] px-5 py-1.5 rounded-full w-fit flex items-center gap-2">
            <PencilSimple size={22} weight="bold" />
            Elige tarjetas, copia en orden
          </p>

          {/* Tarjetas del grupo actual */}
          {visibleIdx >= 0 && visibleIdx < GROUPS.length && (
            <div
              key={step}
              style={{ animation: "cardIn 400ms cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              {/* Etiqueta del grupo */}
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2vw,2.5vh),24px)] tracking-wider"
                  style={{ color: GROUPS[visibleIdx].color }}
                >
                  {GROUPS[visibleIdx].label}
                </span>
                <span className="text-[clamp(18px,min(1.6vw,2vh),20px)] opacity-60 italic">
                  — {GROUPS[visibleIdx].hint}
                </span>
              </div>

              {/* Tarjetas */}
              <div className="flex flex-wrap gap-3">
                {GROUPS[visibleIdx].cards.map((card, j) => (
                  <div
                    key={j}
                    className="flex-1 min-w-[200px] max-w-[340px] rounded-[14px] border-2 p-3"
                    style={{
                      borderColor: GROUPS[visibleIdx].color,
                      background: GROUPS[visibleIdx].soft,
                      animation: `rowIn ${300 + j * 80}ms ease-out`,
                    }}
                  >
                    <span
                      className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,min(1.4vw,1.8vh),18px)] tracking-wide block mb-1"
                      style={{ color: GROUPS[visibleIdx].color }}
                    >
                      {card.title}
                    </span>
                    <p className="text-[clamp(20px,min(2vw,2.5vh),24px)] leading-snug text-[var(--color-pf-ink)]">
                      {card.phrase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navegación */}
          <div className="flex items-center gap-3 mt-2">
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
          0% { opacity: 0; transform: translateY(14px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes rowIn {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
