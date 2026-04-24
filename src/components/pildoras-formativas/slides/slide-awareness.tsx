"use client";

import { useState } from "react";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";

type Phrase = {
  before: string;
  pos: string;
  after: string;
};

type Beat = {
  id: string;
  label: string;
  phraseA: Phrase;
  phraseB: Phrase;
  question: string;
  insight: string;
  // Palabras a destacar cuando se revela la respuesta
  highlight: "pos" | "noun" | "gender";
};

const BEATS: Beat[] = [
  {
    id: "b1",
    label: "Mismo dueño",
    phraseA: { before: "David: ", pos: "Su", after: " abuelo se llama Carlos." },
    phraseB: { before: "David: ", pos: "Sus", after: " abuelos son Carlos y Juana." },
    question: "David es el mismo. ¿Qué ha cambiado?",
    insight: "Uno → Su · Varios → Sus",
    highlight: "pos",
  },
  {
    id: "b2",
    label: "Dueños distintos",
    phraseA: { before: "David: ", pos: "Su", after: " abuelo se llama Carlos." },
    phraseB: { before: "Javier: ", pos: "Su", after: " abuelo se llama Manolo." },
    question: "David y Javier son distintos. ¿Por qué la palabra es igual?",
    insight: "El dueño no importa. Importa lo de al lado.",
    highlight: "pos",
  },
  {
    id: "b3",
    label: "Y con nuestro…",
    phraseA: { before: "", pos: "Nuestro", after: " profesor es muy simpático." },
    phraseB: { before: "", pos: "Nuestra", after: " madre tiene 45 años." },
    question: "Los dos hablamos de «nosotros». ¿Qué ha cambiado ahora?",
    insight: "Nuestro/nuestra también cambia con el género.",
    highlight: "gender",
  },
];

// Estados: 0 = nada. Cada beat consume 2 pasos (mostrar par + revelar insight)
// beat i: mostrar par en step (i*2)+1, revelar insight en step (i*2)+2
// Total steps: BEATS.length * 2 = 6

export function SlideAwareness() {
  const [step, setStep] = useState(0);
  const totalSteps = BEATS.length * 2;

  const canNext = step < totalSteps;
  const canPrev = step > 0;

  const currentBeatIndex = Math.floor((step - 1) / 2);
  const currentBeat = step >= 1 ? BEATS[currentBeatIndex] : null;
  const insightRevealed = step % 2 === 0 && step >= 2;

  // Qué beats están visibles (ya mostrados)
  const visibleBeats = BEATS.slice(0, Math.floor((step + 1) / 2));

  return (
    <div className="w-full max-w-[1800px] mx-auto grid grid-cols-[1.4fr_1fr] gap-10 items-start">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="font-[family-name:var(--font-pf-display)] text-base text-[var(--color-pf-ink)]">
            FLORA
          </span>
          <span
            className="px-3 py-1 rounded-full text-base font-semibold"
            style={{
              background: "var(--color-pf-flower-soft)",
              color: "#8A1470",
            }}
          >
            Observadora
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.9] tracking-tight text-[clamp(56px,7vw,120px)] text-[var(--color-pf-ink)] mb-3">
          ¿Y ahora?
        </h1>
        <p className="text-base text-[var(--color-pf-ink)] opacity-70 mb-6">
          Mira tres comparaciones distintas. Piensa antes de revelar.
        </p>

        <div className="space-y-4 min-h-[340px]">
          {BEATS.map((beat, i) => {
            const isVisible = visibleBeats.some((b) => b.id === beat.id);
            const isCurrent = currentBeat?.id === beat.id;
            const showInsight = isCurrent && insightRevealed;

            if (!isVisible) {
              return (
                <div
                  key={beat.id}
                  className="rounded-[24px] border-2 border-dashed border-[var(--color-pf-ink)]/15 px-6 py-4 opacity-40"
                >
                  <span className="text-base font-semibold tracking-wider text-[var(--color-pf-ink)]/60">
                    PASO {i + 1} · {beat.label}
                  </span>
                </div>
              );
            }

            return (
              <div
                key={beat.id}
                className="rounded-[24px] bg-white shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)] px-6 py-4"
                style={{ animation: "beatIn 500ms cubic-bezier(0.2,0.8,0.2,1)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-base font-semibold tracking-wider text-[var(--color-pf-ink)]/70">
                    PASO {i + 1} · {beat.label.toUpperCase()}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-1.5 font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.2vw,2.8vh),28px)] leading-snug text-[var(--color-pf-ink)]">
                  <PhraseLine phrase={beat.phraseA} highlightActive={showInsight} highlight={beat.highlight} />
                  <PhraseLine phrase={beat.phraseB} highlightActive={showInsight} highlight={beat.highlight} />
                </div>
                {showInsight && (
                  <div
                    className="mt-3 inline-block px-4 py-2 rounded-full bg-[var(--color-pf-pill-soft)] text-[var(--color-pf-ink)] text-base font-semibold"
                    style={{ animation: "insightIn 500ms cubic-bezier(0.2,0.8,0.2,1) 300ms both" }}
                  >
                    {beat.insight}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => canPrev && setStep(step - 1)}
            disabled={!canPrev}
            className="w-12 h-12 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-bold text-base disabled:opacity-30 hover:bg-white transition"
            aria-label="Atrás"
          >
            ←
          </button>
          <button
            onClick={() => canNext && setStep(step + 1)}
            disabled={!canNext}
            className="px-8 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-base disabled:opacity-40 hover:opacity-90 transition"
          >
            {step === 0
              ? "EMPEZAR"
              : step === totalSteps
              ? "COMPLETADO"
              : step % 2 === 1
              ? "REVELAR"
              : "SIGUIENTE COMPARACIÓN"}
          </button>
          <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-base">
            {step} / {totalSteps}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <FloraFlower className="w-full max-w-[260px] h-auto" />
        <div
          key={currentBeat ? `${currentBeat.id}-${insightRevealed ? "i" : "q"}` : "empty"}
          className="mt-4 bg-white rounded-[28px] px-6 py-6 text-center shadow-[0_14px_40px_-16px_rgba(0,0,0,0.14)] w-full min-h-[130px] flex items-center justify-center"
          style={{
            animation: currentBeat
              ? "bubbleIn 420ms cubic-bezier(0.2,0.8,0.2,1)"
              : "none",
          }}
        >
          {!currentBeat && (
            <p className="text-[var(--color-pf-ink)] opacity-50 text-base">
              Flora te hará 3 preguntas…
            </p>
          )}
          {currentBeat && !insightRevealed && (
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.2vh),32px)] leading-snug text-[var(--color-pf-ink)]">
              {currentBeat.question}
            </p>
          )}
          {currentBeat && insightRevealed && (
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.2vh),32px)] leading-snug text-[var(--color-pf-ink)]">
              {currentBeat.insight}
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes beatIn {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes insightIn {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes bubbleIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

function PhraseLine({
  phrase,
  highlightActive,
  highlight,
}: {
  phrase: Phrase;
  highlightActive: boolean;
  highlight: "pos" | "noun" | "gender";
}) {
  // color según tipo de destacado
  const color =
    highlight === "gender"
      ? "var(--color-pf-pill)"
      : "var(--color-pf-spark)";

  return (
    <div className="flex items-baseline gap-0">
      <span className="opacity-80">{phrase.before}</span>
      <span
        className="inline-block px-2 py-0 mx-1 rounded-lg transition-all duration-500"
        style={{
          background: highlightActive ? color : "var(--color-pf-spark-soft)",
          color: highlightActive ? "#fff" : "var(--color-pf-ink)",
          animation: highlightActive
            ? "possPulse 800ms cubic-bezier(0.2,0.8,0.2,1)"
            : "none",
        }}
      >
        {phrase.pos}
      </span>
      <span>{phrase.after}</span>
      <style jsx>{`
        @keyframes possPulse {
          0% {
            transform: scale(0.92);
            box-shadow: 0 0 0 0 rgba(255, 107, 74, 0.5);
          }
          55% {
            transform: scale(1.1);
            box-shadow: 0 0 0 18px rgba(255, 107, 74, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 107, 74, 0);
          }
        }
      `}</style>
    </div>
  );
}
