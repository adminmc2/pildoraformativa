"use client";

import { useState } from "react";
import { House } from "@phosphor-icons/react";
import { DyslexiaToggle } from "@/components/pildoras-formativas/shared/dyslexia-toggle";
import { SlideOpening } from "@/components/pildoras-formativas/slides/slide-opening";
import { SlideCierre } from "@/components/pildoras-formativas/slides/slide-cierre";
import { SlidePili1 } from "@/components/pildoras-formativas/slides/3-2/slide-pili-1";
import { SlidePili2 } from "@/components/pildoras-formativas/slides/3-2/slide-pili-2";
import { SlideFlora1 } from "@/components/pildoras-formativas/slides/3-2/slide-flora-1";
import { SlideFlora2 } from "@/components/pildoras-formativas/slides/3-2/slide-flora-2";
import { SlideVito1 } from "@/components/pildoras-formativas/slides/3-2/slide-vito-1";
import { SlideVito2 } from "@/components/pildoras-formativas/slides/3-2/slide-vito-2";
import { SlideLuna1 } from "@/components/pildoras-formativas/slides/3-2/slide-luna-1";
import { SlideChipi } from "@/components/pildoras-formativas/slides/3-2/slide-chipi";

/* ── Tipos ── */
type ContentSlide = {
  kind:
    | "opening"
    | "pili1"
    | "pili2"
    | "flora1"
    | "flora2"
    | "vito1"
    | "vito2"
    | "luna1"
    | "desafio"
    | "cierre";
  step: string;
  bg: string;
};

type Slide = ContentSlide;

/* ── Secuencia ── */
const SLIDES: Slide[] = [
  { kind: "opening", step: "PORTADA", bg: "#FAF6EC" },
  // ── PILI — Hook + Input ──
  { kind: "pili1", step: "#01", bg: "#FAF6EC" },
  { kind: "pili2", step: "#02", bg: "#FAF6EC" },
  // ── FLORA — Descubrimiento ──
  { kind: "flora1", step: "#03", bg: "#E8F5E0" },
  { kind: "flora2", step: "#04", bg: "#E8F5E0" },
  // ── VITO — Worked example ──
  { kind: "vito1", step: "#05", bg: "var(--color-pf-pill-soft)" },
  { kind: "vito2", step: "#06", bg: "var(--color-pf-pill-soft)" },
  // ── LUNA — Verificación ──
  { kind: "luna1", step: "#07", bg: "var(--color-pf-moon-soft)" },
  // ── CHIPI — Desafío ──
  { kind: "desafio", step: "#08", bg: "#FAF6EC" },
  // ── CIERRE ──
  { kind: "cierre", step: "#09", bg: "#FAF6EC" },
];

export default function Pildora32Page() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  const next = () => setActive((active + 1) % SLIDES.length);
  const prev = () => setActive((active - 1 + SLIDES.length) % SLIDES.length);
  const isDark = false;

  return (
    <div
      className="pf-presentation-shell fixed inset-0 flex flex-col overflow-y-auto overflow-x-hidden transition-colors duration-500 font-[family-name:var(--font-pf-ui)]"
      style={{ background: slide.bg }}
    >
      {/* Toggle de dislexia siempre visible (también en portada) */}
      {slide.kind === "opening" && <DyslexiaToggle fixed />}

      {slide.kind !== "opening" && (
        <header className={`flex-shrink-0 flex items-center justify-between px-4 md:px-8 pt-3 md:pt-4 pb-1 ${isDark ? "text-white" : "text-[var(--color-pf-ink)]"}`}>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActive(0)}
              aria-label="Volver al inicio"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
            >
              <House size={22} weight="bold" />
            </button>
            <DyslexiaToggle isDark={isDark} />
          </div>
          <div className="text-center leading-tight">
            <div className="font-[family-name:var(--font-pf-display)] text-base sm:text-lg md:text-xl tracking-wide">
              PÍLDORA FORMATIVA 3.2
            </div>
            <div className="text-base md:text-lg opacity-70 font-medium tracking-wider uppercase">
              Un Correo Electrónico Personal · Unidad 3 · v0.38
            </div>
          </div>
          {slide.kind !== "cierre" ? (
            <span className="text-base font-[family-name:var(--font-pf-display)] opacity-80">{slide.step}</span>
          ) : (
            <span className="w-9" />
          )}
        </header>
      )}

      <main className="flex-1 min-h-0 flex items-center justify-center px-3 md:px-6 py-2 overflow-x-hidden overflow-y-auto">
        {slide.kind === "opening" && (
          <SlideOpening
            onStart={next}
            pildora="3.2"
            titulo="Un Correo Electrónico Personal"
            unidad="Unidad 3 · La Familia"
          />
        )}

        {slide.kind === "pili1" && <SlidePili1 />}
        {slide.kind === "pili2" && <SlidePili2 />}
        {slide.kind === "flora1" && <SlideFlora1 />}
        {slide.kind === "flora2" && <SlideFlora2 />}
        {slide.kind === "vito1" && <SlideVito1 />}
        {slide.kind === "vito2" && <SlideVito2 />}
        {slide.kind === "luna1" && <SlideLuna1 />}
        {slide.kind === "desafio" && <SlideChipi />}

        {slide.kind === "cierre" && <SlideCierre />}
      </main>

      {slide.kind !== "opening" && (
        <footer className="flex-shrink-0 flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-4 px-3 md:px-8 pb-3 md:pb-4 pt-2">
          <button
            onClick={prev}
            className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-base font-bold transition ${isDark ? "bg-white/90 text-[#1a1a2e] hover:bg-white" : "bg-[var(--color-pf-ink)] text-white hover:opacity-90"}`}
          >
            ← Anterior diapositiva
          </button>

          <div className="order-3 md:order-none w-full md:w-auto flex items-center justify-center gap-2 md:gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className="h-1.5 md:h-2 rounded-full transition-all"
                style={{
                  width: i === active ? 40 : 12,
                  background: i === active ? (isDark ? "#fff" : "var(--color-pf-ink)") : (isDark ? "rgba(255,255,255,0.3)" : "rgba(10,10,10,0.25)"),
                }}
              />
            ))}
          </div>

          {active < SLIDES.length - 1 ? (
            <button
              onClick={next}
              className={`px-5 md:px-8 py-2.5 md:py-3 rounded-full text-base font-bold transition ${isDark ? "bg-white/90 text-[#1a1a2e] hover:bg-white" : "bg-[var(--color-pf-ink)] text-white hover:opacity-90"}`}
            >
              Siguiente diapositiva →
            </button>
          ) : (
            <div className="px-8 py-3" />
          )}
        </footer>
      )}
    </div>
  );
}