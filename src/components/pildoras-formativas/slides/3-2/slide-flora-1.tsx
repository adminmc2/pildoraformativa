"use client";

import React, { useState } from "react";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { CheckCircle, ArrowsClockwise, PencilSimple } from "@phosphor-icons/react";

/* ── Categorías (3 capas) ── */
const CATS = {
  email: { label: "Correo electrónico", color: "#1E6091", soft: "#D6EAF8" },
  tema: { label: "Tema", color: "#B8860B", soft: "#FFF3CD" },
  personal: { label: "Info. personal", color: "#B5179E", soft: "#F8D7F0" },
} as const;

type Cat = keyof typeof CATS;
const CAT_KEYS = Object.keys(CATS) as Cat[];
const PHASE_CAT: Record<number, Cat> = { 1: "email", 2: "tema", 3: "personal" };

/* ── Segmentos del email de Marta ── */
const SEGMENTS: { id: string; text: string; cat: Cat; p: number }[] = [
  // P0: Saludo
  { id: "saludo", text: "¡Hola, Pierre! ¿Qué tal estás?", cat: "email", p: 0 },
  // P1: Familia
  { id: "intro-fam", text: "Hoy te hablo de mi familia:", cat: "tema", p: 1 },
  {
    id: "datos-fam",
    text: "mi padre trabaja en un hotel y mi madre en un hospital. Mi hermano Mario tiene once años y mi hermana Ana tiene seis.",
    cat: "personal",
    p: 1,
  },
  { id: "preg-fam", text: "¿Y tú, cuántos hermanos tienes?", cat: "tema", p: 1 },
  // P2: Amigos
  { id: "intro-inst", text: "Y en el instituto, ¿qué tal el nuevo curso?", cat: "tema", p: 2 },
  {
    id: "datos-amigos",
    text: "Yo este año tengo muchos amigos en mi clase: Emilio, Elena, Santiago... y también tengo una compañera nueva: se llama Bárbara.",
    cat: "personal",
    p: 2,
  },
  // P3: Instituto
  { id: "intro-curso", text: "Este curso es un poco más difícil.", cat: "tema", p: 3 },
  {
    id: "datos-inst",
    text: "Tres días a la semana salimos a las 15:30 y tenemos muchos deberes de Tecnología y Matemáticas. A mí me gusta mucho la Historia.",
    cat: "personal",
    p: 3,
  },
  // P4: Pregunta cierre
  { id: "preg-inst", text: "¿Tú también tienes muchos deberes este año?", cat: "tema", p: 4 },
  // P5: Despedida + firma
  { id: "despedida", text: "¡Un saludo desde Cádiz!", cat: "email", p: 5 },
  { id: "firma", text: "Marta", cat: "email", p: 6 },
];

const PARAGRAPH_INDICES = [...new Set(SEGMENTS.map((s) => s.p))];

/* ── Alternativas para fase 4 ── */
const ALTERNATIVES: Record<string, string[]> = {
  "datos-fam": [
    "mi padre trabaja en un hotel y mi madre en un hospital. Mi hermano Mario tiene once años y mi hermana Ana tiene seis.",
    "mi padre es profesor y mi madre es médica. Mi hermana Laura tiene ocho años.",
    "mi madre trabaja en una tienda. No tengo hermanos.",
  ],
  "datos-amigos": [
    "Yo este año tengo muchos amigos en mi clase: Emilio, Elena, Santiago... y también tengo una compañera nueva: se llama Bárbara.",
    "Yo este año tengo muchos amigos en mi clase: Pedro, Sara, Luis... y también tengo un compañero nuevo: se llama Thomas.",
    "Yo este año tengo muchos amigos en mi clase: María, Carlos, Ana...",
  ],
  "datos-inst": [
    "Tres días a la semana salimos a las 15:30 y tenemos muchos deberes de Tecnología y Matemáticas. A mí me gusta mucho la Historia.",
    "Todos los días salimos a las 14:00 y tenemos deberes de Inglés y Ciencias. A mí me gusta mucho la Música.",
    "Salimos a las 15:00 y tenemos deberes de Francés. A mí me gusta el Arte.",
  ],
};

const PERSONAL_IDS = SEGMENTS.filter((s) => s.cat === "personal").map((s) => s.id);

/* ── Highlight helpers ── */
/* P: cita literal de gramática → cursiva + naranja + bold */
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
export function SlideFlora1() {
  // 0=intro, 1=EMAIL, 2=TEMA, 3=PERSONAL, 4=práctica+esqueleto
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [identified, setIdentified] = useState<Set<string>>(new Set());
  const [shaking, setShaking] = useState<string | null>(null);
  const [altIndex, setAltIndex] = useState<Record<string, number>>({});
  const [interacted, setInteracted] = useState<Set<string>>(new Set());
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);

  const currentCat = PHASE_CAT[phase] ?? null;
  const catTotal = currentCat ? SEGMENTS.filter((s) => s.cat === currentCat).length : 0;
  const catDone = currentCat
    ? SEGMENTS.filter((s) => s.cat === currentCat).every((s) => identified.has(s.id))
    : false;
  const catCount = currentCat
    ? SEGMENTS.filter((s) => s.cat === currentCat && identified.has(s.id)).length
    : 0;
  const allInteracted = PERSONAL_IDS.every((id) => interacted.has(id));

  /* ── Handlers ── */
  const handleSegmentClick = (id: string) => {
    if (!currentCat || identified.has(id)) return;
    const seg = SEGMENTS.find((s) => s.id === id)!;
    if (seg.cat === currentCat) {
      setIdentified((prev) => new Set(prev).add(id));
      setWrongCount(0);
    } else {
      setShaking(id);
      setTimeout(() => setShaking(null), 500);
      setWrongCount((prev) => prev + 1);
    }
  };

  const handleCycle = (id: string) => {
    if (phase !== 4 || showSkeleton) return;
    const alts = ALTERNATIVES[id];
    if (!alts) return;
    setAltIndex((prev) => ({ ...prev, [id]: ((prev[id] ?? 0) + 1) % alts.length }));
    setInteracted((prev) => new Set(prev).add(id));
  };

  /* ── Adaptive feedback: detecta qué falta por identificar ── */
  const phase1Items = ["saludo", "despedida", "firma"];
  const phase2Items = SEGMENTS.filter((s) => s.cat === "tema").map((s) => s.id);
  const missingPhase1 = phase1Items.filter((id) => !identified.has(id));
  const missingPhase2 = phase2Items.filter((id) => !identified.has(id));

  /* Adaptativo de ERROR: cuestiona la elección o da pista espacial.
     L1 (1er fallo) → pregunta que invita a evaluar la elección
     L2 (2º+ fallo) → pista espacial concreta hacia lo que falta */
  const adaptivePhase1 = (): React.ReactNode => {
    const m = missingPhase1;
    const missSal = m.includes("saludo");
    const missDes = m.includes("despedida");
    const missFir = m.includes("firma");
    const isL2 = wrongCount >= 2;

    // Solo falta una → orienta a esa específicamente
    if (m.length === 1) {
      if (missSal) return isL2 ? <>Mira el principio.</> : <>Falta empezar el correo electrónico.</>;
      if (missDes) return isL2 ? <>Mira el final.</> : <>Falta cerrar el correo electrónico.</>;
      if (missFir) return isL2 ? <>Tras la despedida.</> : <>¿<V>Quién</V> escribe el correo electrónico?</>;
    }
    // 2-3 faltan → cuestiona elección
    if (isL2) {
      if (missDes && missFir && !missSal) return <>Mira al final del correo electrónico.</>;
      if (missSal && missFir && !missDes) return <>Mira el principio y el final.</>;
      if (missSal && missDes && !missFir) return <>Al principio y al final.</>;
      return <>Mira el principio y el final.</>;
    }
    // L1 con 2-3 missing → pregunta que cuestiona
    return <>¿Eso está en <V>TODOS</V> los correos electrónicos?</>;
  };

  const adaptivePhase2 = (): React.ReactNode => {
    const m = missingPhase2.length;
    const total = phase2Items.length;
    const isL2 = wrongCount >= 2;

    // Última que falta
    if (m === 1) {
      return isL2 ? (
        <>Mira la idea sin marcar.</>
      ) : (
        <>Falta <V>una</V>. ¿Cuál presenta tema?</>
      );
    }
    // Todo aún por encontrar
    if (m === total) {
      return isL2 ? (
        <>Mira al inicio de cada idea.</>
      ) : (
        <>Tema = frase que <V>presenta</V> una idea.</>
      );
    }
    // 2-4 faltan → cuestiona elección
    return isL2 ? (
      <>En las ideas que aún faltan.</>
    ) : (
      <>¿Esa <V>presenta</V> un tema?</>
    );
  };

  /* ── Feedback positivo: mensaje según fase + progreso ── */
  const positivePhase1 = (): React.ReactNode => {
    if (catCount === 1) return <>¡Eso! Faltan <V>dos</V> partes fijas.</>;
    if (catCount === 2) return <>¡Casi! Falta <V>una</V> parte fija.</>;
    return <>¡Bien!</>;
  };
  const positivePhase2 = (): React.ReactNode => {
    const left = catTotal - catCount;
    if (left === 4) return <>¡Bien! Faltan <V>cuatro</V> temas.</>;
    if (left === 3) return <>¡Vais bien! Faltan <V>tres</V>.</>;
    if (left === 2) return <>¡Sigue! Faltan <V>dos</V>.</>;
    if (left === 1) return <>¡Casi! Falta <V>uno</V>.</>;
    return <>¡Bien!</>;
  };
  const positivePhase3 = (): React.ReactNode => {
    if (catCount === 1) return <>¡Eso! <V>Información personal</V>. Hay más.</>;
    if (catCount === 2) return <>¡Casi! Falta <V>una</V> más.</>;
    return <>¡Bien!</>;
  };

  /* ── Bubble ── */
  const bubble =
    phase === 0 ? (
      <>
        Este correo electrónico tiene un secreto: <V>no todas las partes son iguales</V>. ¿Lo descubrimos?
      </>
    ) : phase === 1 && catDone ? (
      <>
        ¡Eso! Saludo, despedida, firma. <V>Todos</V> los correos electrónicos.
      </>
    ) : phase === 1 && wrongCount >= 1 ? (
      adaptivePhase1()
    ) : phase === 1 && catCount > 0 ? (
      positivePhase1()
    ) : phase === 1 ? (
      <>
        ¿Qué partes tienen <V>todos</V> los correos electrónicos? Buscad.
      </>
    ) : phase === 2 && catDone ? (
      <>
        Estas frases presentan el tema. Si el tema cambia, la frase cambia.
      </>
    ) : phase === 2 && wrongCount >= 1 ? (
      adaptivePhase2()
    ) : phase === 2 && catCount > 0 ? (
      positivePhase2()
    ) : phase === 2 ? (
      <>
        Marta habla de varios temas. ¿Qué frases los <V>presentan</V>?
      </>
    ) : phase === 3 && catDone ? (
      <>
        Estos datos son solo de Marta. <V>¡Los vuestros serán diferentes!</V>
      </>
    ) : phase === 3 && catCount > 0 ? (
      positivePhase3()
    ) : phase === 3 ? (
      <>
        ¿Y lo que queda? <V>¿Es igual para todos?</V>
      </>
    ) : phase === 4 && !showSkeleton ? (
      <>
        ¿Y si cambiamos los datos? <V>¡Pulsad los rosas!</V>
      </>
    ) : (
      <>
        ¿Veis? El correo electrónico funciona con <V>otros datos</V>.
      </>
    );

  const stepKey = phase * 100 + identified.size + (showSkeleton ? 50 : 0) + Math.min(wrongCount, 2) * 10000;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
        <div className="flex flex-col gap-2 min-w-0">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span
              className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]"
              style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
            >
              FLORA
            </span>
            <span
              className="px-3 py-1 rounded-full font-semibold"
              style={{ background: "var(--color-pf-flower-soft)", color: "#8A1470", fontSize: "clamp(18px, 1.3vw, 20px)" }}
            >
              Observadora
            </span>
          </div>

          {/* Título */}
          <h1
            className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[var(--color-pf-ink)]"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            {showSkeleton ? "¡El esqueleto del correo electrónico!" : "¿Qué se queda y qué cambia?"}
          </h1>

          {/* ── Email interactivo (fase 0-4) ── */}
          <div style={{ animation: phase <= 1 ? "cardIn 400ms cubic-bezier(0.2,0.8,0.2,1)" : undefined }}>
            {/* Leyenda (desde fase 1) */}
            {phase >= 1 && (
              <div className="flex flex-col gap-1.5 mb-3">
                <div className="flex gap-3">
                  {CAT_KEYS.map((cat) => {
                    const c = CATS[cat];
                    const isActive = currentCat === cat;
                    const isDone = SEGMENTS.filter((s) => s.cat === cat).every((s) =>
                      identified.has(s.id),
                    );
                    return (
                      <div
                        key={cat}
                        className="flex items-center gap-2 px-5 py-2 rounded-full font-[family-name:var(--font-pf-display)] transition-all"
                        style={{
                          fontSize: "clamp(20px, 1.6vw, 24px)",
                          background: isDone || isActive || phase === 4 ? c.soft : "rgba(255,255,255,0.6)",
                          color: isDone || isActive || phase === 4 ? c.color : "rgba(10,10,10,0.2)",
                          border: `3px solid ${isActive ? c.color : isDone ? c.color + "60" : "transparent"}`,
                          boxShadow: isActive ? `0 4px 12px ${c.color}30` : "none",
                        }}
                      >
                        {isDone && <CheckCircle size={20} weight="fill" style={{ color: c.color }} />}
                        {c.label}
                      </div>
                    );
                  })}
                </div>
                {/* Contador */}
                {currentCat && phase >= 1 && phase <= 3 && (
                  <span
                    className="font-semibold opacity-60 text-[var(--color-pf-ink)]"
                    style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
                  >
                    {catCount} / {catTotal}
                  </span>
                )}
              </div>
            )}

            {/* Email card */}
            <div className="rounded-[16px] bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] overflow-y-auto" style={{ maxHeight: "52vh" }}>
              <div className="px-4 py-3 flex flex-col gap-1.5">
                {PARAGRAPH_INDICES.map((pIdx) => {
                  const segs = SEGMENTS.filter((s) => s.p === pIdx);
                  return (
                    <div
                      key={pIdx}
                      className="leading-relaxed text-[var(--color-pf-ink)]"
                      style={{ fontSize: "clamp(23px, 1.9vw, 28px)" }}
                    >
                      {segs.map((seg, i) => {
                        const isId = identified.has(seg.id);
                        const isShakingSeg = shaking === seg.id;
                        const cat = CATS[seg.cat];
                        const isClickable = phase >= 1 && phase <= 3 && !isId;
                        const isPractice = phase === 4 && seg.cat === "personal" && !showSkeleton;
                        const hasAlts = !!ALTERNATIVES[seg.id];

                        // Skeleton: blank personal segments
                        if (showSkeleton && seg.cat === "personal") {
                          return (
                            <React.Fragment key={seg.id}>
                              {i > 0 && " "}
                              <span
                                className="inline-flex items-center gap-1 rounded px-2 py-0.5"
                                style={{
                                  background: cat.soft,
                                  border: `1.5px dashed ${cat.color}`,
                                }}
                              >
                                <PencilSimple
                                  size={18}
                                  weight="bold"
                                  style={{ color: cat.color }}
                                />
                                <span
                                  style={{ color: cat.color, fontSize: "clamp(23px, 1.9vw, 28px)" }}
                                  className="font-semibold"
                                >
                                  tu información
                                </span>
                              </span>
                            </React.Fragment>
                          );
                        }

                        // Text to show
                        const displayText =
                          isPractice && hasAlts
                            ? ALTERNATIVES[seg.id][altIndex[seg.id] ?? 0]
                            : seg.text;

                        return (
                          <React.Fragment key={seg.id}>
                            {i > 0 && " "}
                            <span
                              role={isClickable || isPractice ? "button" : undefined}
                              tabIndex={isClickable || isPractice ? 0 : undefined}
                              aria-label={
                                isClickable
                                  ? `Marcar como ${CATS[seg.cat].label}: ${seg.text}`
                                  : isPractice && hasAlts
                                  ? `Cambiar ejemplo: ${displayText}`
                                  : undefined
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  if (isPractice && hasAlts) handleCycle(seg.id);
                                  else if (isClickable) handleSegmentClick(seg.id);
                                }
                              }}
                              onClick={() => {
                                if (isPractice && hasAlts) handleCycle(seg.id);
                                else if (isClickable) handleSegmentClick(seg.id);
                              }}
                              className="inline rounded transition-all duration-200"
                              style={{
                                background:
                                  isId || phase === 4 ? cat.soft : undefined,
                                padding:
                                  isId || phase === 4 ? "1px 5px" : "1px 2px",
                                borderBottom:
                                  isClickable && !isId
                                    ? "2px dashed rgba(10,10,10,0.2)"
                                    : undefined,
                                cursor:
                                  isClickable || isPractice ? "pointer" : undefined,
                                outline: "none",
                                boxShadow: undefined,
                                animation: isShakingSeg
                                  ? "shake 400ms ease-in-out"
                                  : undefined,
                              }}
                              onFocus={(e) => {
                                if (isClickable || isPractice)
                                  (e.currentTarget as HTMLElement).style.outline = `2px solid ${cat.color}`;
                              }}
                              onBlur={(e) => {
                                (e.currentTarget as HTMLElement).style.outline = "none";
                              }}
                            >
                              {displayText}
                              {isPractice && hasAlts && (
                                <ArrowsClockwise
                                  size={18}
                                  weight="bold"
                                  className="inline ml-1"
                                  style={{
                                    color: cat.color,
                                    verticalAlign: "middle",
                                  }}
                                />
                              )}
                            </span>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Botón fase 0 */}
            {phase === 0 && (
              <div className="mt-3">
                <button
                    onClick={() => { setPhase(1); setWrongCount(0); }}
                    className="px-10 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] hover:scale-[1.02] transition min-h-[44px]"
                    style={{ fontSize: "clamp(20px, 1.6vw, 24px)", animation: "btnPulse 2s ease-in-out infinite" }}
                  >
                  EMPEZAR
                </button>
              </div>
            )}

            {/* Botón avanzar fase (1→2→3→4) */}
            {catDone && phase >= 1 && phase <= 3 && (
              <div className="mt-3">
                <button
                    onClick={() => { setPhase((phase + 1) as 2 | 3 | 4); setWrongCount(0); }}
                    className="px-8 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] hover:scale-[1.02] transition min-h-[44px]"
                    style={{ fontSize: "clamp(20px, 1.6vw, 24px)", animation: "btnPulse 2s ease-in-out infinite" }}
                  >
                  SIGUIENTE
                </button>
              </div>
            )}

            {/* Botón ver esqueleto (fase 4) */}
            {phase === 4 && !showSkeleton && allInteracted && (
              <div className="mt-3">
                <button
                    onClick={() => setShowSkeleton(true)}
                    className="px-8 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] hover:scale-[1.02] transition min-h-[44px]"
                    style={{ fontSize: "clamp(20px, 1.6vw, 24px)", animation: "btnPulse 2s ease-in-out infinite" }}
                  >
                  VER ESQUELETO
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Columna derecha: personaje */}
        <CharacterStage bubble={bubble} step={stepKey}>
          <FloraFlower className="w-full h-auto" />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes cardIn {
          0% { opacity: 0; transform: translateY(14px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
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
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}
