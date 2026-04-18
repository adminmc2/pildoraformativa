"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";

type Combo = {
  id: number;
  person: string;
  noun: string;
  answer: string;
  color: string;
};

const COMBOS: Combo[] = [
  { id: 0, person: "Nosotros/as", noun: "profesora", answer: "Nuestra profesora", color: "var(--color-pf-flower)" },
  { id: 1, person: "Tú", noun: "libros", answer: "Tus libros", color: "var(--color-pf-star)" },
  { id: 2, person: "Yo", noun: "hermana", answer: "Mi hermana", color: "var(--color-pf-moon)" },
  { id: 3, person: "Vosotros/as", noun: "mochilas", answer: "Vuestras mochilas", color: "var(--color-pf-spark)" },
  { id: 4, person: "Él/Ella", noun: "abuelo", answer: "Su abuelo", color: "var(--color-pf-pill)" },
  { id: 5, person: "Nosotros/as", noun: "hermanos", answer: "Nuestros hermanos", color: "var(--color-pf-flower)" },
];

const PERSONS = ["Yo", "Tú", "Él/Ella", "Nosotros/as", "Vosotros/as", "Ellos/as"];

export function SlideLuna2() {
  const [current, setCurrent] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [spinAngle, setSpinAngle] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [showNoun, setShowNoun] = useState(false);

  const finished = current >= COMBOS.length;
  const combo = COMBOS[current];

  const spin = useCallback(() => {
    if (spinning || finished || showNoun) return;
    setSpinning(true);
    setRevealed(false);
    setShowNoun(false);

    // Calcular ángulo para parar en la persona correcta
    const personIndex = PERSONS.indexOf(combo.person.replace(" (Javier)", ""));
    const sliceAngle = 360 / PERSONS.length;
    const targetAngle = 360 - (personIndex * sliceAngle) - sliceAngle / 2;
    const totalSpin = 1080 + targetAngle; // 3 vueltas + posición

    setSpinAngle((prev) => prev + totalSpin);

    setTimeout(() => {
      setSpinning(false);
      setShowNoun(true);
    }, 2500);
  }, [spinning, finished, showNoun, combo]);

  const reveal = () => {
    if (!showNoun || revealed) return;
    setRevealed(true);
  };

  const next = () => {
    setCurrent((c) => c + 1);
    setRevealed(false);
    setShowNoun(false);
  };

  const reset = () => {
    setCurrent(0);
    setSpinAngle(0);
    setSpinning(false);
    setRevealed(false);
    setShowNoun(false);
  };

  const bubble = finished
    ? "¡Todas las combinaciones! Persona + cosa = posesivo."
    : revealed
    ? `¡${combo.answer}!`
    : showNoun
    ? `${combo.person} + ${combo.noun}. ¿Cómo se dice?`
    : spinning
    ? "Girando..."
    : `Ronda ${current + 1}. ¡Gira!`;

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-3 min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,1.8vh,22px)] text-[var(--color-pf-ink)]">
              LUNA
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "var(--color-pf-moon-soft)", color: "#3B2A8A" }}
            >
              Verificadora
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(40px,min(6.5vw,9vh),96px)] text-[var(--color-pf-ink)]">
            Gira y responde
          </h1>

          <p className="text-[clamp(16px,1.8vw,24px)] font-semibold text-white bg-[var(--color-pf-ink)] inline-block px-5 py-2 rounded-full self-start">
            La ruleta elige la persona. Tú dices el posesivo.
          </p>

          <div className="flex flex-col items-center gap-4">
            {/* Ruleta + resultado en fila */}
            <div className="flex items-center gap-8 w-full">
              {/* Ruleta con segmentos de color */}
              <div className="relative flex-shrink-0" style={{ width: "clamp(200px, 24vw, 300px)", height: "clamp(200px, 24vw, 300px)" }}>
                {/* Flecha indicadora */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-0 h-0 border-l-[14px] border-r-[14px] border-t-[24px] border-l-transparent border-r-transparent border-t-[var(--color-pf-ink)]" />
                </div>

                {/* Disco */}
                <motion.div
                  animate={{ rotate: spinAngle }}
                  transition={{ duration: 2.5, ease: [0.2, 0.8, 0.3, 1] }}
                  className="w-full h-full rounded-full overflow-hidden relative"
                  style={{
                    background: `conic-gradient(
                      var(--color-pf-moon-soft) 0deg 60deg,
                      var(--color-pf-star-soft) 60deg 120deg,
                      var(--color-pf-pill-soft) 120deg 180deg,
                      var(--color-pf-flower-soft) 180deg 240deg,
                      var(--color-pf-spark-soft) 240deg 300deg,
                      var(--color-pf-cream) 300deg 360deg
                    )`,
                    boxShadow: "0 12px 40px -12px rgba(0,0,0,0.25), inset 0 0 0 4px var(--color-pf-ink)",
                  }}
                >
                  {PERSONS.map((person, i) => {
                    const segAngle = i * 60 + 30; // centro del segmento
                    const rad = (segAngle * Math.PI) / 180;
                    const r = 33;
                    const x = 50 + r * Math.sin(rad);
                    const y = 50 - r * Math.cos(rad);
                    return (
                      <div
                        key={person}
                        className="absolute font-[family-name:var(--font-pf-display)] text-[clamp(9px,1vw,13px)] text-[var(--color-pf-ink)] font-bold text-center leading-[1.1]"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: `translate(-50%, -50%)`,
                          writingMode: "vertical-lr",
                          textOrientation: "mixed",
                        }}
                      >
                        {person}
                      </div>
                    );
                  })}
                  {/* Centro */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-pf-ink)] shadow-lg z-10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Resultado a la derecha */}
              <div className="flex-1 min-w-0 flex items-center">
                {showNoun && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-[24px] px-8 py-6 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] w-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="px-4 py-1.5 rounded-full text-white font-[family-name:var(--font-pf-display)] text-[clamp(18px,2vw,26px)]"
                        style={{ background: combo.color }}
                      >
                        {combo.person}
                      </span>
                      <span className="text-[clamp(14px,1.6vw,20px)] opacity-50">
                        {current + 1}/{COMBOS.length}
                      </span>
                    </div>

                    <p className="font-[family-name:var(--font-pf-display)] text-[clamp(28px,min(3.4vw,4.4vh),48px)] text-[var(--color-pf-ink)] mb-3">
                      + {combo.noun}
                    </p>

                    {revealed && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-[clamp(22px,min(2.6vw,3.4vh),38px)] opacity-40 mr-2">→</span>
                        <span
                          className="inline-block px-5 py-2 rounded-xl text-white font-[family-name:var(--font-pf-display)] text-[clamp(28px,min(3.4vw,4.4vh),48px)]"
                          style={{ background: combo.color }}
                        >
                          {combo.answer}
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {!showNoun && !spinning && !finished && (
                  <p className="text-[clamp(20px,2.2vw,28px)] text-[var(--color-pf-ink)] opacity-50 font-[family-name:var(--font-pf-display)]">
                    Pulsa GIRAR.
                  </p>
                )}

                {spinning && (
                  <p className="text-[clamp(20px,2.2vw,28px)] text-[var(--color-pf-ink)] opacity-50 font-[family-name:var(--font-pf-display)] animate-pulse">
                    Girando...
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex items-center gap-3">
            {!finished && !showNoun && !spinning && (
              <button
                onClick={spin}
                className="px-8 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(16px,2vh,22px)] hover:scale-[1.02] transition"
                style={{ animation: "btnPulse 2.2s ease-in-out infinite" }}
              >
                GIRAR
              </button>
            )}
            {showNoun && !revealed && (
              <button
                onClick={reveal}
                className="px-8 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(16px,2vh,22px)] hover:scale-[1.02] transition"
              >
                REVELAR
              </button>
            )}
            {revealed && !finished && (
              <button
                onClick={next}
                className="px-7 py-2.5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-lg hover:opacity-90 transition"
              >
                SIGUIENTE RONDA
              </button>
            )}
            {finished && (
              <div className="flex items-center gap-4">
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(28px,3.6vw,48px)] text-[var(--color-pf-moon)]">
                  6/6
                </span>
                <button
                  onClick={reset}
                  className="px-5 py-2 rounded-full bg-white border-2 border-[var(--color-pf-ink)] text-[var(--color-pf-ink)] text-sm font-semibold hover:bg-[var(--color-pf-moon-soft)] transition"
                >
                  ↺ Reiniciar
                </button>
              </div>
            )}
          </div>
        </div>

        <CharacterStage
          bubble={bubble}
          step={current * 3 + (revealed ? 2 : showNoun ? 1 : 0)}
        >
          <LunaMoon className="w-full h-auto" />
        </CharacterStage>
      </div>

      <style jsx>{`
        @keyframes btnPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(10, 10, 10, 0.28);
          }
          50% {
            box-shadow: 0 0 0 18px rgba(10, 10, 10, 0);
          }
        }
      `}</style>
    </div>
  );
}
