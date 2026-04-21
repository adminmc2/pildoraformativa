"use client";
// 🔒 BLOQUEADA — No modificar sin consultar al usuario. Slide aprobada hasta #11.

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle } from "@phosphor-icons/react/dist/csr/UserCircle";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Item = {
  id: string;
  owner: string;
  pos: string;
  label: string;
  short: string;
  ownerColor: string;
};

const ITEMS: Item[] = [
  { id: "david", owner: "David", pos: "Su", label: "abuelo se llama Carlos.", short: "David → abuelo", ownerColor: "var(--color-pf-star)" },
  { id: "javier", owner: "Javier", pos: "Su", label: "abuelo se llama Manolo.", short: "Javier → abuelo", ownerColor: "var(--color-pf-pill)" },
  { id: "lucia", owner: "Lucía", pos: "Su", label: "madre trabaja en el hotel.", short: "Lucía → madre", ownerColor: "var(--color-pf-flower)" },
];

const P = ({ children }: { children: React.ReactNode }) => (
  <span className="italic" style={{ color: "var(--color-pf-spark)" }}>{children}</span>
);

const BUBBLES: React.ReactNode[] = [
  "Ahora tres personas distintas.",
  <>David y <P>su</P> abuelo. Abuelo = uno.</>,
  <>Javier y <P>su</P> abuelo. ¡Otro dueño, misma palabra!</>,
  <>Lucía y <P>su</P> madre. Madre = una. Siempre <P>su</P>.</>,
  <>
    David → <P>su</P><br />
    Javier → <P>su</P><br />
    Lucía → <P>su</P><br />
    <span className="opacity-70">¡Siempre igual!</span>
  </>,
];

export function SlideFlora1() {
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  const canNext = step < totalSteps;
  const canPrev = step > 0;
  const itemsVisible = Math.min(step, ITEMS.length);
  const insightRevealed = step === totalSteps;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(42px,min(7vw,10vh),104px)] text-[var(--color-pf-ink)]">
            ¿El dueño importa?
          </h1>

          <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-6 py-2.5 rounded-full self-start">
            Tres personas, la misma palabra. ¿Por qué?
          </p>

          {/* Cards expandibles por persona */}
          <div className="flex flex-col gap-3">
            {ITEMS.map((item, i) => {
              const visible = i < itemsVisible;

              return (
                <motion.div
                  key={item.id}
                  layout
                  className={`rounded-[20px] border-2 overflow-hidden transition-colors duration-300 ${
                    visible
                      ? "bg-white border-transparent shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]"
                      : "bg-transparent border-dashed border-[var(--color-pf-ink)]/15"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {visible ? (
                      <motion.div
                        key={`expanded-${item.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="px-5 py-4"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <UserCircle size={32} weight="duotone" color={item.ownerColor} />
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.8vw,22px)] text-[var(--color-pf-ink)]"
                          >
                            {item.owner}
                          </motion.span>
                        </div>
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <motion.span
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                            className="inline-block px-3 py-0.5 rounded-lg text-white font-[family-name:var(--font-pf-display)] text-[clamp(20px,2.4vw,30px)]"
                            style={{ background: "var(--color-pf-spark)" }}
                          >
                            {item.pos}
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                            className="font-[family-name:var(--font-pf-ui)] text-[clamp(20px,2.4vw,30px)] text-[var(--color-pf-ink)]"
                          >
                            {item.label}
                          </motion.span>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="px-5 py-3 flex items-center gap-3 opacity-40">
                        <UserCircle size={24} weight="thin" color="var(--color-pf-ink)" />
                        <span className="text-sm font-semibold text-[var(--color-pf-ink)]">
                          {item.short}
                        </span>
                      </div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 mt-1">
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
                : step < ITEMS.length
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
