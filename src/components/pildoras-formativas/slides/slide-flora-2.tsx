"use client";
// 🔒 BLOQUEADA — No modificar sin consultar al usuario. Slide aprobada hasta #11.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Owner = {
  id: string;
  owner: string;
  singular: string;
  plural: string;
  exSingular: string;
  exPlural: string;
  color: string;
  softColor: string;
};

const OWNERS: Owner[] = [
  {
    id: "yo", owner: "Yo",
    singular: "mi", plural: "mis",
    exSingular: "mi padre", exPlural: "mis abuelos",
    color: "var(--color-pf-star)", softColor: "var(--color-pf-star-soft)",
  },
  {
    id: "tu", owner: "Tú",
    singular: "tu", plural: "tus",
    exSingular: "tu instituto", exPlural: "tus libros",
    color: "var(--color-pf-pill)", softColor: "var(--color-pf-pill-soft)",
  },
  {
    id: "el", owner: "Él / Ella",
    singular: "su", plural: "sus",
    exSingular: "su madre", exPlural: "sus tíos",
    color: "var(--color-pf-moon)", softColor: "var(--color-pf-moon-soft)",
  },
  {
    id: "nos", owner: "Nosotros",
    singular: "nuestro", plural: "nuestros",
    exSingular: "nuestro profesor", exPlural: "nuestros gatos",
    color: "var(--color-pf-flower)", softColor: "var(--color-pf-flower-soft)",
  },
  {
    id: "vos", owner: "Vosotros",
    singular: "vuestro", plural: "vuestros",
    exSingular: "vuestro barrio", exPlural: "vuestros amigos",
    color: "var(--color-pf-spark)", softColor: "var(--color-pf-spark-soft)",
  },
  {
    id: "ellos", owner: "Ellos / Ellas",
    singular: "su", plural: "sus",
    exSingular: "su abuelo", exPlural: "sus hermanos",
    color: "var(--color-pf-moon)", softColor: "var(--color-pf-moon-soft)",
  },
];

const BUBBLES = [
  "Cada persona tiene su posesivo.",
  "Yo → mi, mis. Ya lo conoces.",
  "Tú → tu, tus. ¿Ves el patrón?",
  "Él, ella → su, sus. Siempre igual.",
  "¡Nosotros! → nuestro, nuestros. ¡Nuevo!",
  "¡Vosotros! → vuestro, vuestros. ¡Otro nuevo!",
  "Ellos, ellas → su, sus. Como él y ella.",
  "6 personas, cada una con singular y plural. ¿Todos tienen solo 2 formas?",
];

export function SlideFlora2() {
  const [step, setStep] = useState(0);
  const totalSteps = 7;

  const canNext = step < totalSteps;
  const canPrev = step > 0;
  const cardsVisible = Math.min(step, OWNERS.length);
  const insightRevealed = step === totalSteps;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1500px] grid grid-cols-[1.5fr_1fr] gap-8 items-center">
        <div className="flex flex-col gap-3 min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vh,22px)] text-[var(--color-pf-ink)]">
              FLORA
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "var(--color-pf-flower-soft)",
                color: "#8A1470",
              }}
            >
              Observadora
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(36px,min(6vw,8vh),88px)] text-[var(--color-pf-ink)]">
            Cada persona
          </h1>

          <p className="text-[clamp(16px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full self-start">
            ¿Qué posesivos tiene cada persona?
          </p>

          {/* Cards acumulativas 2x2 */}
          <div className="grid grid-cols-3 gap-3">
            <AnimatePresence>
              {OWNERS.map((owner, i) => {
                const visible = i < cardsVisible;

                return visible ? (
                  <motion.div
                    key={owner.id}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="rounded-[18px] px-4 py-3 shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]"
                    style={{ background: owner.softColor }}
                  >
                    <div
                      className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.8vw,22px)] mb-2"
                      style={{ color: "var(--color-pf-ink)" }}
                    >
                      {owner.owner}
                    </div>

                    {/* Singular */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <motion.span
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 400 }}
                        className="px-3 py-1 rounded-lg text-white font-[family-name:var(--font-pf-display)] text-[clamp(18px,2.2vw,28px)]"
                        style={{ background: "var(--color-pf-spark)" }}
                      >
                        {owner.singular}
                      </motion.span>
                      <span className="font-[family-name:var(--font-pf-ui)] text-[clamp(16px,1.8vw,22px)] text-[var(--color-pf-ink)] opacity-70">
                        {owner.exSingular}
                      </span>
                    </div>

                    {/* Plural */}
                    <div className="flex items-center gap-2">
                      <motion.span
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.25, type: "spring", stiffness: 400 }}
                        className="px-3 py-1 rounded-lg text-white font-[family-name:var(--font-pf-display)] text-[clamp(18px,2.2vw,28px)]"
                        style={{ background: "var(--color-pf-spark)" }}
                      >
                        {owner.plural}
                      </motion.span>
                      <span className="font-[family-name:var(--font-pf-ui)] text-[clamp(16px,1.8vw,22px)] text-[var(--color-pf-ink)] opacity-70">
                        {owner.exPlural}
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <div
                    key={owner.id}
                    className="rounded-[18px] px-4 py-3 border-2 border-dashed border-[var(--color-pf-ink)]/15 flex items-center justify-center min-h-[100px]"
                  >
                    <span className="text-[clamp(14px,1.6vw,18px)] font-semibold text-[var(--color-pf-ink)] opacity-30">
                      {owner.owner}
                    </span>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Insight */}
          {insightRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 flex-wrap"
            >
              {OWNERS.map((o) => (
                <span
                  key={o.id}
                  className="px-3 py-1 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(14px,1.6vw,20px)] text-[var(--color-pf-ink)]"
                  style={{ background: o.softColor }}
                >
                  {o.singular}/{o.plural}
                </span>
              ))}
              <span className="font-[family-name:var(--font-pf-display)] text-[clamp(14px,1.6vw,20px)] text-[var(--color-pf-ink)]">
                = 2 formas
              </span>
            </motion.div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={() => canPrev && setStep(step - 1)}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-bold text-lg disabled:opacity-30 hover:bg-white transition flex-shrink-0"
              aria-label="Atrás"
            >
              ←
            </button>
            <button
              onClick={() => canNext && setStep(step + 1)}
              disabled={!canNext}
              className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg disabled:opacity-40 hover:opacity-90 transition"
            >
              {step === 0
                ? "EMPEZAR"
                : step === totalSteps
                ? "COMPLETADO"
                : step < OWNERS.length
                ? "SIGUIENTE PERSONA"
                : "REVELAR"}
            </button>
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-sm">
              {step} / {totalSteps}
            </span>
          </div>
        </div>

        <CharacterStage bubble={BUBBLES[step] || ""} step={step}>
          <FloraFlower className="w-full h-auto" />
        </CharacterStage>
      </div>
    </div>
  );
}
