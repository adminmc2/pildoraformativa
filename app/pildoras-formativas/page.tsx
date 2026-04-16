"use client";

import { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";

type Slide = {
  step: string;
  name: string;
  badge: string;
  badgeBg: string;
  badgeFg: string;
  headline: string[];
  bg: string;
  Character: React.ComponentType<{ className?: string }>;
};

const SLIDES: Slide[] = [
  {
    step: "#01",
    name: "PÍLAR",
    badge: "Objetivos",
    badgeBg: "var(--color-pf-star-soft)",
    badgeFg: "#8A6B00",
    headline: ["ELIGE", "TU", "PÍLDORA"],
    bg: "#FAF6EC",
    Character: (props) => <PilarStar pose="hug" {...props} />,
  },
  {
    step: "#02",
    name: "FLORA",
    badge: "Bienestar",
    badgeBg: "var(--color-pf-flower-soft)",
    badgeFg: "#8A1470",
    headline: ["CUIDA", "EL", "CLIMA"],
    bg: "#A6CC6C",
    Character: FloraFlower,
  },
  {
    step: "#03",
    name: "VITO",
    badge: "Método",
    badgeBg: "var(--color-pf-pill-soft)",
    badgeFg: "#3F6B14",
    headline: ["SIGUE", "EL", "MÉTODO"],
    bg: "var(--color-pf-star-soft)",
    Character: VitoPill,
  },
  {
    step: "#04",
    name: "LUNA",
    badge: "Evaluación",
    badgeBg: "var(--color-pf-moon-soft)",
    badgeFg: "#3B2A8A",
    headline: ["MIDE", "TU", "AVANCE"],
    bg: "var(--color-pf-flower-soft)",
    Character: LunaMoon,
  },
  {
    step: "#05",
    name: "CHIPI",
    badge: "Práctica",
    badgeBg: "var(--color-pf-spark-soft)",
    badgeFg: "#8A2F10",
    headline: ["ACTIVA", "LA", "CHISPA"],
    bg: "var(--color-pf-moon-soft)",
    Character: ChipiSpark,
  },
];

export default function PildorasFormativasPage() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];
  const Character = slide.Character;

  const next = () => setActive((active + 1) % SLIDES.length);
  const prev = () => setActive((active - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div
      className="min-h-screen w-full flex flex-col transition-colors duration-500 font-[family-name:var(--font-pf-ui)]"
      style={{ background: slide.bg }}
    >
      <header className="flex items-center justify-between px-10 pt-8 text-[var(--color-pf-ink)]">
        <span className="text-lg font-medium opacity-80">{slide.step}</span>
        <span className="font-[family-name:var(--font-pf-display)] text-2xl tracking-wide">
          PÍLDORAS FORMATIVAS
        </span>
        <button
          aria-label="Cerrar"
          className="w-10 h-10 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6L18 18" />
            <path d="M18 6L6 18" />
          </svg>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-10 pb-4">
        <div className="w-full max-w-[1400px] grid grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="relative">
            <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(80px,12vw,200px)] text-[var(--color-pf-ink)]">
              {slide.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <span
              className="absolute left-[38%] top-[62%] px-5 py-2 rounded-full text-lg font-semibold"
              style={{ background: slide.badgeBg, color: slide.badgeFg }}
            >
              {slide.badge}
            </span>
            <div className="mt-10 font-[family-name:var(--font-pf-display)] text-3xl text-[var(--color-pf-ink)]">
              {slide.name}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Character className="w-full max-w-[560px] h-auto" />
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-between px-10 pb-10">
        <button
          onClick={prev}
          className="px-6 py-3 rounded-full bg-white/70 text-[var(--color-pf-ink)] font-semibold hover:bg-white transition"
        >
          ← Anterior
        </button>

        <div className="flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === active ? 40 : 12,
                background: i === active ? "var(--color-pf-ink)" : "rgba(10,10,10,0.25)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="px-8 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-semibold hover:opacity-90 transition"
        >
          Siguiente →
        </button>
      </footer>
    </div>
  );
}
