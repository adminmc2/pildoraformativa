"use client";

import React, { useState } from "react";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { CheckCircle } from "@phosphor-icons/react";

/* ── Funciones discursivas ── */
const FUNCS = {
  abreTema: { label: "ABRE TEMA", color: "#2E86C1", soft: "#D6EAF8" },
  conecta: { label: "CONECTA", color: "#D35400", soft: "#FDEBD0" },
  pregunta: { label: "PREGUNTA", color: "#8E44AD", soft: "#F0E0F7" },
} as const;

type FuncId = keyof typeof FUNCS;

/* ── Segmentos del email ── */
type TextSeg = { type: "text"; content: string };
type FuncSeg = {
  type: "func";
  func: FuncId;
  content: string;
  id: string;
  group?: string;
};
type Seg = TextSeg | FuncSeg;

const EMAIL: Seg[][] = [
  [{ type: "text", content: "¡Hola, Pierre! ¿Qué tal estás?" }],
  [
    { type: "func", func: "abreTema", id: "hoy", content: "Hoy te hablo de mi familia:" },
    { type: "text", content: " mi padre trabaja en un hotel " },
    { type: "func", func: "conecta", id: "y1", content: "y", group: "y" },
    { type: "text", content: " mi madre en un hospital. Mi hermano Mario tiene once años " },
    { type: "func", func: "conecta", id: "y2", content: "y", group: "y" },
    { type: "text", content: " mi hermana Ana tiene seis. " },
    { type: "func", func: "pregunta", id: "hermanos", content: "¿Y tú, cuántos hermanos tienes?" },
  ],
  [
    { type: "func", func: "abreTema", id: "instituto", content: "Y en el instituto, ¿qué tal el nuevo curso?" },
    { type: "text", content: " Yo este año tengo muchos amigos en mi clase: Emilio, Elena, Santiago... " },
    { type: "func", func: "conecta", id: "ytambien", content: "y también" },
    { type: "text", content: " tengo una compañera nueva: se llama Bárbara." },
  ],
  [
    { type: "func", func: "abreTema", id: "curso", content: "Este curso es un poco más difícil." },
    { type: "text", content: " Tres días a la semana salimos a las 15:30 " },
    { type: "func", func: "conecta", id: "y3", content: "y", group: "y" },
    { type: "text", content: " tenemos muchos deberes de Tecnología y Matemáticas. A mí me gusta mucho la Historia." },
  ],
  [{ type: "func", func: "pregunta", id: "deberes", content: "¿Tú también tienes muchos deberes este año?" }],
  [{ type: "text", content: "¡Un saludo desde Cádiz!" }],
  [{ type: "text", content: "Marta" }],
];

/* ── Helpers precomputados ── */
const ALL_FUNC = EMAIL.flat().filter((s): s is FuncSeg => s.type === "func");
const gk = (s: FuncSeg) => s.group ?? s.id;
const UNIQUE_GK = [...new Set(ALL_FUNC.map(gk))]; // 7

const FUNC_GK: Record<FuncId, string[]> = {
  abreTema: UNIQUE_GK.filter((g) => ALL_FUNC.find((s) => gk(s) === g)?.func === "abreTema"),
  conecta: UNIQUE_GK.filter((g) => ALL_FUNC.find((s) => gk(s) === g)?.func === "conecta"),
  pregunta: UNIQUE_GK.filter((g) => ALL_FUNC.find((s) => gk(s) === g)?.func === "pregunta"),
};

/* Piezas para Fase 2 en orden desordenado */
const PIECE_KEYS = ["ytambien", "hoy", "deberes", "curso", "hermanos", "y", "instituto"];

/* V: énfasis genérico → solo naranja bold, sin cursiva */
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold" style={{ color: "var(--color-pf-spark)" }}>{children}</span>
);

/* ── Feedback rico de Flora (Fase 2) ── */
const FUNC_ROLE: Record<FuncId, string> = {
  abreTema: "presenta un tema nuevo",
  conecta: "une dos ideas",
  pregunta: "hace una pregunta al lector",
};

const PIECE_HINT: Record<string, React.ReactNode> = {
  hoy: <>«Hoy te hablo de mi familia:» — esta frase <V>presenta</V> algo nuevo... ¿dónde empieza a hablar de la familia?</>,
  y: <>«y» — una palabra pequeña que <V>une</V> dos ideas. ¿Qué partes necesitan conectarse?</>,
  hermanos: <>«¿Y tú, cuántos hermanos tienes?» — Marta quiere <V>saber algo</V> de Pierre... ¿después de qué información?</>,
  instituto: <>«Y en el instituto, ¿qué tal?» — aquí se <V>cambia de tema</V>... ¿dónde empieza a hablar del cole?</>,
  ytambien: <>«y también» — <V>añade</V> algo más a la lista. ¿Dónde suma información?</>,
  curso: <>«Este curso es un poco más difícil.» — <V>abre</V> una idea nueva sobre el instituto...</>,
  deberes: <>«¿Tú también tienes muchos deberes?» — <V>pregunta</V> a Pierre algo personal... ¿tras qué información?</>,
};

const CORRECT_FB: Record<string, React.ReactNode> = {
  hoy: <>¡Sí! <V>Abre el tema</V> principal del correo electrónico: la familia.</>,
  y: <>¡Bien! <V>«y» conecta</V> dos ideas paralelas: une lo de antes con lo de después.</>,
  hermanos: <>¡Eso es! Después de hablar de sus hermanos, Marta <V>pregunta</V> a Pierre por los suyos.</>,
  instituto: <>¡Exacto! <V>Abre un tema nuevo</V>: la vida en el instituto.</>,
  ytambien: <>¡Correcto! <V>«y también» suma</V> información: hay más compañeros en la lista.</>,
  curso: <>¡Bien visto! <V>Abre un nuevo aspecto</V> del instituto: la dificultad del curso.</>,
  deberes: <>¡Eso es! Marta cierra <V>preguntando</V> a Pierre sobre sus deberes. Así mantiene el diálogo.</>,
};

/* ── Componente ── */
export function SlideFlora2() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  /* Fase 1 */
  const [active, setActive] = useState<string | null>(null);
  const [assigned, setAssigned] = useState<Record<string, FuncId>>({});
  const [shaking, setShaking] = useState<string | null>(null);
  /* Fase 2 */
  const [placed, setPlaced] = useState<Set<string>>(new Set());
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [shakingGap, setShakingGap] = useState<string | null>(null);
  const [wrongAttempt, setWrongAttempt] = useState<{ piece: string; gap: string } | null>(null);
  const [lastCorrect, setLastCorrect] = useState<string | null>(null);

  const isGkDone = (g: string) =>
    ALL_FUNC.filter((s) => gk(s) === g).every((s) => assigned[s.id]);
  const doneCount = UNIQUE_GK.filter(isGkDone).length;
  const allClassified = doneCount === UNIQUE_GK.length;
  const allPlaced = placed.size === UNIQUE_GK.length;

  /* Fase 1: pulsar frase → abrir barra */
  const handlePhraseClick = (id: string) => {
    if (assigned[id] || phase !== 1) return;
    setActive(active === id ? null : id);
  };

  /* Fase 1: elegir función */
  const handlePick = (pickedFunc: FuncId) => {
    if (!active) return;
    const seg = ALL_FUNC.find((s) => s.id === active)!;
    if (seg.func === pickedFunc) {
      const members = ALL_FUNC.filter((s) => gk(s) === gk(seg));
      setAssigned((prev) => {
        const next = { ...prev };
        members.forEach((m) => {
          next[m.id] = pickedFunc;
        });
        return next;
      });
      setActive(null);
    } else {
      setShaking(active);
      setTimeout(() => setShaking(null), 500);
    }
  };

  /* Fase 2: seleccionar pieza del banco */
  const handleSelectPiece = (groupKey: string) => {
    if (placed.has(groupKey)) return;
    setSelectedPiece(selectedPiece === groupKey ? null : groupKey);
    setWrongAttempt(null);
    setLastCorrect(null);
  };

  /* Fase 2: pulsar un hueco del email */
  const handleGapClick = (gapGroupKey: string) => {
    if (!selectedPiece || placed.has(gapGroupKey)) return;
    if (selectedPiece === gapGroupKey) {
      setPlaced((prev) => new Set(prev).add(gapGroupKey));
      setLastCorrect(selectedPiece);
      setSelectedPiece(null);
      setWrongAttempt(null);
    } else {
      setShakingGap(gapGroupKey);
      setWrongAttempt({ piece: selectedPiece, gap: gapGroupKey });
      setLastCorrect(null);
      setTimeout(() => setShakingGap(null), 500);
    }
  };

  /* ── Flora ── */
  let bubble: React.ReactNode;
  if (phase === 0) {
    bubble = (
      <>
        Cada frase del correo electrónico tiene una <V>función</V>. ¿Cuál es?
      </>
    );
  } else if (phase === 1) {
    if (!allClassified) {
      bubble =
        doneCount === 0 ? (
          <>
            Pulsad una frase subrayada y decidid su <V>función</V>.
          </>
        ) : (
          <>
            {doneCount} de {UNIQUE_GK.length}... ¡Seguid!
          </>
        );
    } else {
      bubble = (
        <>
          ¡Todas identificadas! ¿Y si las <V>quitamos</V>?
        </>
      );
    }
  } else {
    /* Fase 2 — feedback rico y contextual */
    if (wrongAttempt) {
      const pieceSeg = ALL_FUNC.find((s) => gk(s) === wrongAttempt.piece)!;
      const gapSeg = ALL_FUNC.find((s) => gk(s) === wrongAttempt.gap)!;
      if (pieceSeg.func === gapSeg.func) {
        /* Misma función, distinto sitio */
        bubble = (
          <>
            Sí es <V>{FUNCS[pieceSeg.func].label}</V>, pero leed el contexto: ¿tiene sentido aquí?
          </>
        );
      } else {
        /* Funciones distintas */
        bubble = (
          <>
            «{pieceSeg.content}» <V>{FUNC_ROLE[pieceSeg.func]}</V>, pero este hueco necesita una frase que <V>{FUNC_ROLE[gapSeg.func]}</V>.
          </>
        );
      }
    } else if (lastCorrect && !allPlaced) {
      /* Acaba de colocar bien → feedback explicativo */
      bubble = CORRECT_FB[lastCorrect] ?? (
        <>¡Bien! Esa frase <V>encaja</V> perfectamente ahí.</>
      );
    } else if (allPlaced) {
      bubble = (
        <>
          ¡Perfecto! Cada <V>función</V> tiene su papel en el correo electrónico: abrir temas, conectar ideas y preguntar al lector.
        </>
      );
    } else if (selectedPiece) {
      /* Pieza seleccionada → pista contextual */
      bubble = PIECE_HINT[selectedPiece] ?? (
        <>¿Dónde va esa frase? Pulsad el <V>hueco</V> correcto.</>
      );
    } else if (placed.size === 0) {
      bubble = (
        <>
          Sin sus <V>funciones</V>, el correo electrónico está roto. Elegid una pieza del banco.
        </>
      );
    } else {
      bubble = (
        <>
          {placed.size} de {UNIQUE_GK.length}... ¡Elegid otra <V>pieza</V>!
        </>
      );
    }
  }

  const stepKey = phase * 100 + doneCount + placed.size * 10 + (wrongAttempt ? 1 : 0) + (selectedPiece ? 2 : 0) + (lastCorrect ? 4 : 0);
  const activeContent = active
    ? ALL_FUNC.find((s) => s.id === active)?.content ?? ""
    : "";

  /* ── Render segmento ── */
  const renderSeg = (seg: Seg, sIdx: number) => {
    if (seg.type === "text") {
      return <React.Fragment key={sIdx}>{seg.content}</React.Fragment>;
    }

    const f = FUNCS[seg.func];
    const groupKey = gk(seg);

    /* Fase 2: hueco o colocado */
    if (phase === 2) {
      const isPlaced = placed.has(groupKey);
      if (!isPlaced) {
        const isShkGap = shakingGap === groupKey;
        const isTargetable = !!selectedPiece && !placed.has(groupKey);
        return (
          <span
            key={`${seg.id}-gap`}
            role={isTargetable ? "button" : undefined}
            tabIndex={isTargetable ? 0 : undefined}
            onClick={() => handleGapClick(groupKey)}
            className="inline-flex items-center rounded px-1.5 py-0.5 transition-all duration-200"
            style={{
              border: `2px dashed ${isTargetable ? f.color : f.color + "50"}`,
              background: isTargetable ? `${f.soft}90` : `${f.soft}60`,
              minWidth: "2.5em",
              cursor: isTargetable ? "pointer" : undefined,
              animation: isShkGap
                ? "shake 400ms ease-in-out"
                : isTargetable
                  ? "gapPulse 1.5s ease-in-out infinite"
                  : undefined,
            }}
          >
            <span
              style={{ color: isTargetable ? `${f.color}80` : `${f.color}40`, fontSize: "clamp(23px, 1.9vw, 28px)" }}
              className="select-none"
            >
              ···
            </span>
          </span>
        );
      }
      return (
        <span
          key={`${seg.id}-placed`}
          className="inline rounded px-1.5 py-0.5"
          style={{
            background: f.soft,
            color: f.color,
            fontWeight: 700,
            animation: "segIn 300ms ease-out",
          }}
        >
          {seg.content}
        </span>
      );
    }

    /* Fase 0-1: interactivo */
    const isDone = !!assigned[seg.id];
    const isActive = active === seg.id;
    const isShk = shaking === seg.id;

    return (
      <span
        key={seg.id}
        role={!isDone && phase === 1 ? "button" : undefined}
        tabIndex={!isDone && phase === 1 ? 0 : undefined}
        onClick={() => handlePhraseClick(seg.id)}
        className="inline rounded transition-all duration-200"
        style={{
          background: isDone ? f.soft : isActive ? "rgba(10,10,10,0.06)" : undefined,
          padding: isDone || isActive ? "1px 5px" : "1px 2px",
          borderBottom:
            phase === 1 && !isDone
              ? `2px dashed ${isActive ? "var(--color-pf-ink)" : "rgba(10,10,10,0.2)"}`
              : undefined,
          color: isDone ? f.color : undefined,
          fontWeight: isDone ? 700 : undefined,
          cursor: !isDone && phase === 1 ? "pointer" : undefined,
          animation: isShk
            ? "shake 400ms ease-in-out"
            : isActive
              ? "segPulse 1.5s ease-in-out infinite"
              : undefined,
        }}
      >
        {seg.content}
      </span>
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-y-auto md:overflow-hidden">
      <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
        <div className="flex flex-col gap-2 min-w-0">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}>
              FLORA
            </span>
            <span
              className="px-3 py-1 rounded-full font-semibold"
              style={{
                fontSize: "clamp(18px, 1.3vw, 20px)",
                background: "var(--color-pf-flower-soft)",
                color: "#8A1470",
              }}
            >
              Observadora
            </span>
          </div>

          {/* Título */}
          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            {phase === 0 && "¿Para qué sirve cada frase?"}
            {phase === 1 && (allClassified ? "¡Bien visto!" : "¿Para qué sirve cada frase?")}
            {phase === 2 && (allPlaced ? "¡Correo electrónico completo!" : "Recoloca las funciones")}
          </h1>

          {/* Leyenda */}
          {phase >= 1 && (
            <div className="flex flex-wrap gap-2 mb-1">
              {(Object.keys(FUNCS) as FuncId[]).map((id) => {
                const f = FUNCS[id];

                if (phase === 1) {
                  const gDone = FUNC_GK[id].filter(isGkDone).length;
                  const gTotal = FUNC_GK[id].length;
                  const catDone = gDone === gTotal;
                  return (
                    <div
                      key={id}
                      className="flex items-center gap-2 px-5 py-2 rounded-full font-[family-name:var(--font-pf-display)] transition-all"
                      style={{
                        fontSize: "clamp(20px, 1.6vw, 24px)",
                        background: catDone ? f.soft : "rgba(10,10,10,0.04)",
                        color: catDone ? f.color : "var(--color-pf-ink)",
                        border: `2.5px solid ${catDone ? f.color : "rgba(10,10,10,0.1)"}`,
                      }}
                    >
                      {catDone && <CheckCircle size={22} weight="fill" />}
                      {f.label}
                      {!catDone && (
                        <span className="opacity-60" style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}>
                          {gDone}/{gTotal}
                        </span>
                      )}
                    </div>
                  );
                }

                /* Fase 2: leyenda informativa */
                return (
                  <div
                    key={id}
                    className="flex items-center gap-2 px-5 py-2 rounded-full font-[family-name:var(--font-pf-display)]"
                    style={{
                      fontSize: "clamp(20px, 1.6vw, 24px)",
                      background: f.soft,
                      color: f.color,
                      border: `2.5px solid ${f.color}`,
                    }}
                  >
                    {f.label}
                  </div>
                );
              })}
            </div>
          )}

          {/* Email */}
          <div
            style={{
              animation:
                (phase === 1 && doneCount === 0) || (phase === 2 && placed.size === 0)
                  ? "cardIn 400ms cubic-bezier(0.2,0.8,0.2,1)"
                  : undefined,
            }}
          >
            <div className="rounded-[16px] bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="px-4 py-3 flex flex-col gap-1.5">
                {EMAIL.map((segs, pIdx) => (
                  <div
                    key={pIdx}
                    className="leading-relaxed text-[var(--color-pf-ink)]"
                    style={{ fontSize: "clamp(23px, 1.9vw, 28px)" }}
                  >
                    {segs.map(renderSeg)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fase 1: barra de respuesta */}
          {phase === 1 && active && (
            <div
              className="mt-2 px-4 py-3 rounded-xl bg-white shadow-md border border-gray-100 flex flex-col gap-2"
              style={{ animation: "cardIn 200ms ease-out" }}
            >
              <span className="text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(23px, 1.9vw, 28px)" }}>
                «{activeContent}» — ¿Qué función tiene?
              </span>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(FUNCS) as FuncId[]).map((fId) => {
                  const f = FUNCS[fId];
                  return (
                    <button
                      key={fId}
                      onClick={() => handlePick(fId)}
                      className="px-6 py-2.5 rounded-full font-[family-name:var(--font-pf-display)] transition-all hover:scale-105 active:scale-95 min-h-[44px]"
                      style={{
                        fontSize: "clamp(20px, 1.6vw, 24px)",
                        background: f.soft,
                        color: f.color,
                        border: `2.5px solid ${f.color}`,
                      }}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Fase 0: EMPEZAR */}
          {phase === 0 && (
            <div className="mt-3">
              <button
                onClick={() => setPhase(1)}
                className="px-10 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] hover:scale-[1.02] transition min-h-[44px]"
                style={{ fontSize: "clamp(20px, 1.6vw, 24px)", animation: "btnPulse 2s ease-in-out infinite" }}
              >
                EMPEZAR
              </button>
            </div>
          )}

          {/* Fase 1: contador + CONTINUAR */}
          {phase === 1 && !active && (
            <div className="mt-2 flex items-center gap-4">
              <span className="font-semibold opacity-60 text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}>
                {doneCount} / {UNIQUE_GK.length}
              </span>
              {allClassified && (
                <button
                  onClick={() => setPhase(2)}
                  className="px-8 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] hover:scale-[1.02] transition min-h-[44px]"
                  style={{ fontSize: "clamp(20px, 1.6vw, 24px)", animation: "btnPulse 2s ease-in-out infinite" }}
                >
                  CONTINUAR
                </button>
              )}
            </div>
          )}

          {/* Fase 2: banco de piezas */}
          {phase === 2 && !allPlaced && (
            <div
              className="mt-2 flex flex-wrap gap-2"
              style={{ animation: "cardIn 300ms ease-out" }}
            >
              {PIECE_KEYS.filter((g) => !placed.has(g)).map((g) => {
                const seg = ALL_FUNC.find((s) => gk(s) === g)!;
                const f = FUNCS[seg.func];
                const isSelected = selectedPiece === g;
                return (
                  <button
                    key={g}
                    onClick={() => handleSelectPiece(g)}
                    className="px-5 py-2.5 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm min-h-[44px]"
                    style={{
                      fontSize: "clamp(20px, 1.6vw, 24px)",
                      background: isSelected ? f.color : f.soft,
                      color: isSelected ? "white" : f.color,
                      border: `2.5px solid ${f.color}`,
                      transform: isSelected ? "scale(1.05)" : undefined,
                      boxShadow: isSelected ? `0 4px 16px ${f.color}40` : undefined,
                    }}
                  >
                    {seg.content}
                  </button>
                );
              })}
            </div>
          )}

          {/* Fase 2: contador */}
          {phase === 2 && (
            <div className="mt-1">
              <span className="font-semibold opacity-60 text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}>
                {placed.size} / {UNIQUE_GK.length}
              </span>
            </div>
          )}
        </div>

        {/* Personaje */}
        <CharacterStage bubble={bubble} step={stepKey}>
          <FloraFlower className="w-full h-auto" />
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
        @keyframes segIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
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
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-6px);
          }
          40% {
            transform: translateX(6px);
          }
          60% {
            transform: translateX(-4px);
          }
          80% {
            transform: translateX(4px);
          }
        }
        @keyframes segPulse {
          0%,
          100% {
            background: rgba(10, 10, 10, 0.04);
          }
          50% {
            background: rgba(10, 10, 10, 0.1);
          }
        }
        @keyframes gapPulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
