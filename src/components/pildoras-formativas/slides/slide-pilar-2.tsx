"use client";
// 🔒 BLOQUEADA — No modificar sin consultar al usuario. Slide aprobada hasta #11.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Square } from "@phosphor-icons/react/dist/csr/Square";
import { GridFour } from "@phosphor-icons/react/dist/csr/GridFour";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Placement = "pending" | "uno" | "varios";

type Phrase = {
  id: number;
  before: string;
  pos: string;
  after: string;
  correct: "uno" | "varios";
  rotation: number;
};

const PHRASES: Phrase[] = [
  { id: 0, before: "", pos: "Mis", after: " abuelos son mexicanos.", correct: "varios", rotation: 4 },
  { id: 1, before: "", pos: "Su", after: " madre trabaja en el hotel.", correct: "uno", rotation: -3 },
  { id: 2, before: "¿Estudias música en ", pos: "tu", after: " instituto?", correct: "uno", rotation: -2 },
  { id: 3, before: "Graciela vive con ", pos: "sus", after: " tíos.", correct: "varios", rotation: 5 },
  { id: 4, before: "Yo tengo ", pos: "tus", after: " libros en la cartera.", correct: "varios", rotation: 3 },
  { id: 5, before: "", pos: "Mi", after: " padre se llama Antonio.", correct: "uno", rotation: -4 },
];

function PhraseInline({ p }: { p: Phrase }) {
  return (
    <span>
      {p.before}
      <span className="inline-block px-2 py-0 rounded-lg bg-[var(--color-pf-spark)] text-white mx-0.5">
        {p.pos}
      </span>
      {p.after}
    </span>
  );
}

export function SlidePilar2() {
  const [placements, setPlacements] = useState<Placement[]>(
    PHRASES.map(() => "pending")
  );

  const currentIndex = placements.findIndex((p) => p === "pending");
  const allPlaced = currentIndex === -1;
  const placedCount = placements.filter((p) => p !== "pending").length;

  const [wrongAttempt, setWrongAttempt] = useState(false);

  const place = (box: "uno" | "varios") => {
    if (currentIndex < 0) return;
    if (box !== PHRASES[currentIndex].correct) {
      setWrongAttempt(true);
      return;
    }
    setWrongAttempt(false);
    setPlacements((prev) => {
      const next = [...prev];
      next[currentIndex] = box;
      return next;
    });
  };

  const reset = () => {
    setPlacements(PHRASES.map(() => "pending"));
    setWrongAttempt(false);
  };

  const inUno = PHRASES.filter((_, i) => placements[i] === "uno");
  const inVarios = PHRASES.filter((_, i) => placements[i] === "varios");

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1800px] px-3 md:px-4 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-6 items-center">
        <div className="flex flex-col min-w-0 h-full" style={{ perspective: "1200px" }}>
          {/* === BLOQUE SUPERIOR === */}
          <div className="flex-shrink-0 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.2vw,2.8vh),28px)] text-[var(--color-pf-ink)]">
              PILI
            </span>
            <span
              className="px-3 py-1 rounded-full text-base font-semibold"
              style={{ background: "var(--color-pf-star-soft)", color: "#8A6B00" }}
            >
              Anfitriona
            </span>
          </div>

          {/* Título + Enunciado + Frase activa */}
          <div className="flex items-center gap-4 flex-wrap">
            <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(48px,min(8vw,11vh),128px)] text-[var(--color-pf-ink)]">
              ¿Uno o varios?
            </h1>
            <p className="text-[clamp(20px,min(2.2vw,2.8vh),28px)] font-semibold text-white bg-[var(--color-pf-ink)] px-5 py-2 rounded-full">
              Clasifica: ¿habla de uno o de varios?
            </p>
          </div>

          </div>

          {/* === BLOQUE INFERIOR === */}
          <div className="flex-1 flex flex-col gap-3 justify-center min-h-0">
          {/* Frase activa */}
          <div className="flex-shrink-0 flex items-center">
            <AnimatePresence mode="wait">
              {!allPlaced && (
                <motion.div
                  key={PHRASES[currentIndex].id}
                  initial={{ opacity: 0, y: 30, rotateZ: PHRASES[currentIndex].rotation * 2 }}
                  animate={{ opacity: 1, y: 0, rotateZ: PHRASES[currentIndex].rotation }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  whileHover={{ scale: 1.03, rotateZ: 0 }}
                  className="bg-white rounded-[18px] px-6 py-3 font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.2vw,2.8vh),28px)] leading-tight text-[var(--color-pf-ink)] inline-flex items-center gap-2 cursor-default"
                  style={{
                    boxShadow: "8px 8px 0px rgba(10,10,10,0.15), 0 20px 40px -20px rgba(0,0,0,0.2)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <PhraseInline p={PHRASES[currentIndex]} />
                  <span className="text-base font-semibold opacity-50">
                    {currentIndex + 1}/{PHRASES.length}
                  </span>
                </motion.div>
              )}
              {allPlaced && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-[family-name:var(--font-pf-display)] text-[clamp(24px,min(3vw,3.6vh),38px)] text-[var(--color-pf-ink)]"
                >
                  ¡MUY BIEN!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cuadros UNO / VARIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ minHeight: "clamp(120px, 20vh, 220px)" }}>
            <motion.button
              onClick={() => place("uno")}
              disabled={allPlaced}
              whileHover={!allPlaced ? { scale: 1.02, y: -3 } : {}}
              whileTap={!allPlaced ? { scale: 0.97 } : {}}
              className={`rounded-[20px] border-4 p-4 flex flex-col items-center justify-start transition-colors overflow-hidden ${
                allPlaced
                  ? "border-[var(--color-pf-ink)]/15 bg-[var(--color-pf-star-soft)] cursor-default"
                  : "border-[var(--color-pf-ink)]/25 bg-[var(--color-pf-star-soft)] hover:border-[var(--color-pf-ink)]/40 cursor-pointer"
              }`}
              style={{
                boxShadow: allPlaced && inUno.length === 3
                  ? "0 0 0 4px var(--color-pf-star), 0 8px 24px -8px rgba(0,0,0,0.12)"
                  : "0 6px 20px -8px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-2 whitespace-nowrap">
                <Square size={24} weight="fill" color="var(--color-pf-ink)" className="flex-shrink-0" />
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.4vw,3vh),30px)] text-[var(--color-pf-ink)]">
                  UNO
                </span>
              </div>
              <div className="space-y-1 w-full">
                <AnimatePresence>
                  {inUno.map((p) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: -20, scale: 1.05 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="bg-white rounded-lg px-3 py-1.5 text-[clamp(20px,min(2.2vw,2.8vh),28px)] font-medium text-left text-[var(--color-pf-ink)]"
                      style={{ boxShadow: "2px 2px 0px rgba(10,10,10,0.06)" }}
                    >
                      <PhraseInline p={p} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.button>

            <motion.button
              onClick={() => place("varios")}
              disabled={allPlaced}
              whileHover={!allPlaced ? { scale: 1.02, y: -3 } : {}}
              whileTap={!allPlaced ? { scale: 0.97 } : {}}
              className={`rounded-[20px] border-4 p-4 flex flex-col items-center justify-start transition-colors overflow-hidden ${
                allPlaced
                  ? "border-[var(--color-pf-ink)]/15 bg-[var(--color-pf-moon-soft)] cursor-default"
                  : "border-[var(--color-pf-ink)]/25 bg-[var(--color-pf-moon-soft)] hover:border-[var(--color-pf-ink)]/40 cursor-pointer"
              }`}
              style={{
                boxShadow: allPlaced && inVarios.length === 3
                  ? "0 0 0 4px var(--color-pf-moon), 0 8px 24px -8px rgba(0,0,0,0.12)"
                  : "0 6px 20px -8px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-2 whitespace-nowrap">
                <GridFour size={24} weight="fill" color="var(--color-pf-ink)" className="flex-shrink-0" />
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.4vw,3vh),30px)] text-[var(--color-pf-ink)]">
                  VARIOS
                </span>
              </div>
              <div className="space-y-1 w-full">
                <AnimatePresence>
                  {inVarios.map((p) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: -20, scale: 1.05 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="bg-white rounded-lg px-3 py-1.5 text-[clamp(20px,min(2.2vw,2.8vh),28px)] font-medium text-left text-[var(--color-pf-ink)]"
                      style={{ boxShadow: "2px 2px 0px rgba(10,10,10,0.06)" }}
                    >
                      <PhraseInline p={p} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>

          {allPlaced && (
            <button
              onClick={reset}
              className="self-start px-4 py-1.5 rounded-full bg-white/80 text-[var(--color-pf-ink)] text-base font-semibold hover:bg-white transition min-h-11"
            >
              ↺ Reiniciar
            </button>
          )}
          </div>
        </div>

        <CharacterStage
          bubble={(() => {
            if (allPlaced) return "¡La S! Varios llevan S al final. ¡MUY BIEN!";
            if (wrongAttempt && currentIndex >= 0) {
              const curr = PHRASES[currentIndex];
              return curr.correct === "uno"
                ? `¡No! ${curr.after.trim().split(" ")[0]} es solo uno. Prueba la otra.`
                : `¡No! ${curr.after.trim().split(" ")[0]} son más de uno. Prueba la otra.`;
            }
            if (placedCount === 0) return "¿Uno o varios? Mira lo que sigue.";
            const lastIdx = placedCount - 1;
            const last = PHRASES[lastIdx];
            const reactions: Record<number, string> = {
              0: `Abuelos = más de uno. ¡${last.pos.toUpperCase()}!`,
              1: `Madre = solo una. ¡${last.pos.toUpperCase()}!`,
              2: `Un instituto. ¡${last.pos.toUpperCase()}!`,
              3: `Tíos = más de uno. ¿Ves la S al final?`,
              4: `Libros = varios. ¡Otra vez S al final!`,
              5: `Un padre. Sin S → ¡${last.pos.toUpperCase()}!`,
            };
            return reactions[lastIdx] || "¡Bien!";
          })()}
          step={placedCount}
        >
          <PilarStar
            pose={allPlaced ? "wave" : placedCount >= 2 ? "point" : "hug"}
            className="w-full h-auto"
          />
        </CharacterStage>
      </div>
    </div>
  );
}
