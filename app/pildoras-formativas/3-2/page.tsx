"use client";

import { useState } from "react";
import Link from "next/link";
import { House } from "@phosphor-icons/react";
import { SlideOpening } from "@/components/pildoras-formativas/slides/slide-opening";
import { SlideCierre } from "@/components/pildoras-formativas/slides/slide-cierre";
import { SlidePili1 } from "@/components/pildoras-formativas/slides/3-2/slide-pili-1";
import { SlidePili2 } from "@/components/pildoras-formativas/slides/3-2/slide-pili-2";
import { SlideFlora1 } from "@/components/pildoras-formativas/slides/3-2/slide-flora-1";
import { SlideFlora2 } from "@/components/pildoras-formativas/slides/3-2/slide-flora-2";

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
    | "luna2"
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
  { kind: "luna2", step: "#08", bg: "var(--color-pf-moon-soft)" },
  // ── CHIPI — Desafío ──
  { kind: "desafio", step: "#09", bg: "#2d1508" },
  // ── CIERRE ──
  { kind: "cierre", step: "#10", bg: "#FAF6EC" },
];

export default function Pildora32Page() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  const next = () => setActive((active + 1) % SLIDES.length);
  const prev = () => setActive((active - 1 + SLIDES.length) % SLIDES.length);
  const isDark = slide.kind === "desafio";

  return (
    <div
      className="pf-presentation-shell fixed inset-0 flex flex-col overflow-y-auto overflow-x-hidden transition-colors duration-500 font-[family-name:var(--font-pf-ui)]"
      style={{ background: slide.bg }}
    >
      {slide.kind !== "opening" && (
        <header className={`flex-shrink-0 flex items-center justify-between px-4 md:px-8 pt-3 md:pt-4 pb-1 ${isDark ? "text-white" : "text-[var(--color-pf-ink)]"}`}>
          <button
            onClick={() => setActive(0)}
            aria-label="Volver al inicio"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/60 transition"
          >
            <House size={22} weight="bold" />
          </button>
          <div className="text-center leading-tight">
            <div className="font-[family-name:var(--font-pf-display)] text-base sm:text-lg md:text-xl tracking-wide">
              PÍLDORA FORMATIVA 3.2
            </div>
            <div className="text-base md:text-lg opacity-70 font-medium tracking-wider uppercase">
              Un Correo Electrónico Personal · Unidad 3 · v0.2
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
        {slide.kind === "vito1" && <PlaceholderSlide title="De Marta a ti" agent="VITO" desc="Transformar el modelo paso a paso" />}
        {slide.kind === "vito2" && <PlaceholderSlide title="Tu correo: 5 bloques" agent="VITO" desc="Writing frame con inicio de cada párrafo" />}
        {slide.kind === "luna1" && <PlaceholderSlide title="¿Has entendido?" agent="LUNA" desc="6 preguntas de comprensión" />}
        {slide.kind === "luna2" && <PlaceholderSlide title="Revisa con tu compañero" agent="LUNA" desc="Checklist de revisión entre pares" />}
        {slide.kind === "desafio" && <PlaceholderSlide title="¿Cuánto sabéis de Marta?" agent="CHIPI" desc="Desafío relámpago por equipos" dark />}

        {slide.kind === "cierre" && <SlideCierre />}
      </main>

      {slide.kind !== "opening" && (
        <footer className="flex-shrink-0 flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-4 px-3 md:px-8 pb-3 md:pb-4 pt-2">
          <button
            onClick={prev}
            className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-base font-semibold transition ${isDark ? "bg-white/15 text-white hover:bg-white/25" : "bg-white/70 text-[var(--color-pf-ink)] hover:bg-white"}`}
          >
            ← Anterior
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
              className={`px-5 md:px-8 py-2.5 md:py-3 rounded-full text-base font-semibold transition ${isDark ? "bg-white/90 text-[#1a1a2e] hover:bg-white" : "bg-[var(--color-pf-ink)] text-white hover:opacity-90"}`}
            >
              Siguiente →
            </button>
          ) : (
            <div className="px-8 py-3" />
          )}
        </footer>
      )}
    </div>
  );
}

/* ── Placeholder para slides pendientes ── */
function PlaceholderSlide({ title, agent, desc, dark }: { title: string; agent: string; desc: string; dark?: boolean }) {
  const colors: Record<string, { bg: string; fg: string }> = {
    PILI: { bg: "var(--color-pf-star-soft)", fg: "#8A6B00" },
    FLORA: { bg: "var(--color-pf-flower-soft)", fg: "#8A1470" },
    VITO: { bg: "var(--color-pf-pill-soft)", fg: "#3F6B14" },
    LUNA: { bg: "var(--color-pf-moon-soft)", fg: "#3B2A8A" },
    CHIPI: { bg: "var(--color-pf-spark-soft)", fg: "#8A2F10" },
  };
  const c = colors[agent] ?? { bg: "#eee", fg: "#333" };

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <span
        className="px-4 py-1.5 rounded-full text-base font-bold tracking-wider"
        style={{ background: c.bg, color: c.fg }}
      >
        {agent}
      </span>
      <h2
        className={`font-[family-name:var(--font-pf-display)] text-[clamp(32px,5vw,64px)] uppercase leading-tight ${dark ? "text-white" : "text-[var(--color-pf-ink)]"}`}
      >
        {title}
      </h2>
      <p className={`text-lg max-w-md ${dark ? "text-white/60" : "text-[var(--color-pf-ink)] opacity-50"}`}>
        {desc}
      </p>
    </div>
  );
}
