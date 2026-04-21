"use client";
// 🔒 BLOQUEADA — No modificar sin consultar al usuario. Slide aprobada hasta #11.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MorphingText } from "@/components/ui/morphing-text";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

const FORMS_NUESTRO = ["nuestro", "nuestra", "nuestros", "nuestras"];
const FORMS_VUESTRO = ["vuestro", "vuestra", "vuestros", "vuestras"];

type Form = {
  pos: string;
  noun: string;
  gender: string;
  number: string;
  group: "nuestro" | "vuestro";
};

const FORM_DETAILS: Form[] = [
  { pos: "Nuestro", noun: "profesor", gender: "masculino", number: "singular", group: "nuestro" },
  { pos: "Nuestra", noun: "madre", gender: "femenino", number: "singular", group: "nuestro" },
  { pos: "Nuestros", noun: "gatos", gender: "masculino", number: "plural", group: "nuestro" },
  { pos: "Nuestras", noun: "mochilas", gender: "femenino", number: "plural", group: "nuestro" },
  { pos: "Vuestro", noun: "barrio", gender: "masculino", number: "singular", group: "vuestro" },
  { pos: "Vuestra", noun: "clase", gender: "femenino", number: "singular", group: "vuestro" },
  { pos: "Vuestros", noun: "amigos", gender: "masculino", number: "plural", group: "vuestro" },
  { pos: "Vuestras", noun: "mochilas", gender: "femenino", number: "plural", group: "vuestro" },
];

const BUBBLES = [
  "¿Femenino o masculino? Mi, tu, su no cambian. ¿Y los demás?",
  "Nuestro... Normal. Espera, espera...",
  "¡¿Nuestra?! ¡Aquí sí importa el femenino!",
  "Nuestros... vale. ¿Y en femenino?",
  "¡Nuestras! ¡Cuatro formas! ¡Este no para!",
  "Ahora vuestro. ¿Pasará lo mismo?",
  "Vuestro... ¿será como nuestro?",
  "¡Vuestra! ¡Lo sabía! ¡También cambia!",
  "Vuestros... ¿adivináis la siguiente?",
  "¡Vuestras! ¡Otra vez cuatro!",
  "4 y 4... ¿Por qué estos tienen más formas que los demás?",
];

// Fases: 0=morphing nuestro, 1-4=formas nuestro, 5=morphing vuestro, 6-9=formas vuestro, 10=insight
export function SlideFlora3() {
  const [step, setStep] = useState(0);
  const totalSteps = 10;

  const canNext = step < totalSteps;
  const canPrev = step > 0;

  const nuestroVisible = step >= 1 ? Math.min(step, 4) : 0;
  const vuestroVisible = step >= 6 ? Math.min(step - 5, 4) : 0;
  const showNuestroCards = step >= 1;
  const showVuestroCards = step >= 6;
  const showMorphNuestro = step === 0;
  const showMorphVuestro = step === 5;
  const insightRevealed = step === totalSteps;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1500px] grid grid-cols-[1.5fr_1fr] gap-6 items-center">
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vh,22px)] text-[var(--color-pf-ink)]">
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

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(32px,min(5vw,7vh),72px)] text-[var(--color-pf-ink)]">
            ¿Solo 2 formas?
          </h1>

          <p className="text-[clamp(18px,1.6vw,22px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-1.5 rounded-full self-start">
            Mira cómo cambia «nuestro» y «vuestro».
          </p>

          {/* Morphing Text — nuestro */}
          {showMorphNuestro && (
            <div className="bg-white rounded-[24px] px-8 py-6 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)]">
              <p className="text-[clamp(16px,1.6vw,18px)] text-[var(--color-pf-ink)] opacity-60 mb-2 font-semibold uppercase tracking-wider">Nosotros</p>
              <MorphingText
                texts={FORMS_NUESTRO}
                className="h-[clamp(50px,7vh,90px)] text-[clamp(36px,min(4.5vw,6vh),72px)] text-[var(--color-pf-ink)] font-[family-name:var(--font-pf-display)]"
              />
            </div>
          )}

          {/* Morphing Text — vuestro */}
          {showMorphVuestro && (
            <div className="bg-white rounded-[24px] px-8 py-6 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)]">
              <p className="text-[clamp(16px,1.6vw,18px)] text-[var(--color-pf-ink)] opacity-60 mb-2 font-semibold uppercase tracking-wider">Vosotros</p>
              <MorphingText
                texts={FORMS_VUESTRO}
                className="h-[clamp(50px,7vh,90px)] text-[clamp(36px,min(4.5vw,6vh),72px)] text-[var(--color-pf-ink)] font-[family-name:var(--font-pf-display)]"
              />
            </div>
          )}

          {/* Cards de nuestro */}
          {showNuestroCards && !showMorphVuestro && (
            <div>
              <p className="text-[clamp(16px,1.3vw,16px)] font-semibold text-[var(--color-pf-ink)] opacity-50 uppercase tracking-wider mb-2">Nosotros</p>
              <div className="grid grid-cols-4 gap-2">
                {FORM_DETAILS.filter(f => f.group === "nuestro").map((form, i) => (
                  <FormCard key={form.pos} form={form} visible={i < nuestroVisible} />
                ))}
              </div>
            </div>
          )}

          {/* Cards de vuestro */}
          {showVuestroCards && (
            <div>
              <p className="text-[clamp(16px,1.3vw,16px)] font-semibold text-[var(--color-pf-ink)] opacity-50 uppercase tracking-wider mb-1 mt-2">Nosotros</p>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {FORM_DETAILS.filter(f => f.group === "nuestro").map((form) => (
                  <FormCard key={form.pos} form={form} visible={true} />
                ))}
              </div>
              <p className="text-[clamp(16px,1.3vw,16px)] font-semibold text-[var(--color-pf-ink)] opacity-50 uppercase tracking-wider mb-1">Vosotros</p>
              <div className="grid grid-cols-4 gap-2">
                {FORM_DETAILS.filter(f => f.group === "vuestro").map((form, i) => (
                  <FormCard key={form.pos} form={form} visible={i < vuestroVisible} />
                ))}
              </div>
            </div>
          )}

          {/* Insight */}
          {insightRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 px-5 py-3 rounded-[16px] bg-[var(--color-pf-pill-soft)]"
            >
              <span className="font-[family-name:var(--font-pf-display)] text-[clamp(28px,min(3.4vw,4.4vh),48px)] text-[var(--color-pf-pill)] leading-none">
                4+4
              </span>
              <span className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.4vw,20px)] text-[var(--color-pf-ink)]">
                formas cada uno
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
                ? "VER LAS FORMAS"
                : step === 5
                ? "AHORA VUESTRO"
                : step === totalSteps
                ? "COMPLETADO"
                : step < 5 || (step > 5 && step < 10)
                ? "SIGUIENTE FORMA"
                : "REVELAR"}
            </button>
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-70 text-base">
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

function FormCard({ form, visible }: { form: Form; visible: boolean }) {
  if (!visible) {
    return (
      <div className="rounded-[12px] px-2 py-2 border-2 border-dashed border-[var(--color-pf-ink)]/15 min-h-[44px] flex items-center justify-center">
        <span className="text-base font-semibold text-[var(--color-pf-ink)] opacity-25">?</span>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="rounded-[14px] px-3 py-2.5 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.1)] bg-[var(--color-pf-pill-soft)]"
    >
      <span
        className="inline-block px-2.5 py-0.5 rounded-md text-white font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.8vw,24px)]"
        style={{
          background: form.gender === "masculino"
            ? "var(--color-pf-moon)"
            : "var(--color-pf-flower)",
        }}
      >
        {form.pos}
      </span>
      <span className="ml-1.5 font-[family-name:var(--font-pf-ui)] text-[clamp(15px,1.6vw,22px)] text-[var(--color-pf-ink)]">
        {form.noun}
      </span>
      <div className="mt-0.5 flex gap-1">
        <span
          className="text-[clamp(15px,1.1vw,15px)] px-1.5 py-0 rounded text-white font-semibold"
          style={{
            background: form.gender === "masculino"
              ? "var(--color-pf-moon)"
              : "var(--color-pf-flower)",
          }}
        >
          {form.gender === "masculino" ? "masc." : "fem."}
        </span>
        <span
          className="text-[clamp(15px,1.1vw,15px)] px-1.5 py-0 rounded text-white font-semibold"
          style={{
            background: form.number === "singular"
              ? "var(--color-pf-star)"
              : "var(--color-pf-spark)",
          }}
        >
          {form.number === "singular" ? "sing." : "plural"}
        </span>
      </div>
    </motion.div>
  );
}
