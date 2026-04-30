"use client";

import { useState } from "react";
import Link from "next/link";
import { House } from "@phosphor-icons/react";
import { DyslexiaToggle } from "@/components/pildoras-formativas/shared/dyslexia-toggle";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";
import { SlideOpening } from "@/components/pildoras-formativas/slides/slide-opening";
import { SlidePilar1 } from "@/components/pildoras-formativas/slides/slide-pilar-1";
import { SlidePilar2 } from "@/components/pildoras-formativas/slides/slide-pilar-2";
import { SlidePilar3 } from "@/components/pildoras-formativas/slides/slide-pilar-3";
import { SlideFlora1 } from "@/components/pildoras-formativas/slides/slide-flora-1";
import { SlideFlora2 } from "@/components/pildoras-formativas/slides/slide-flora-2";
import { SlideFlora3 } from "@/components/pildoras-formativas/slides/slide-flora-3";
import { SlideVito1 } from "@/components/pildoras-formativas/slides/slide-vito-1";
import { SlideVito2 } from "@/components/pildoras-formativas/slides/slide-vito-2";
// VITO 3 eliminado — su contenido se mueve a LUNA
import { SlideLuna1 } from "@/components/pildoras-formativas/slides/slide-luna-1";
import { SlideLuna2 } from "@/components/pildoras-formativas/slides/slide-luna-2";
import { SlideLuna3 } from "@/components/pildoras-formativas/slides/slide-luna-3";
import { SlideDesafioB } from "@/components/pildoras-formativas/slides/slide-desafio-b";
import { SlideCierre } from "@/components/pildoras-formativas/slides/slide-cierre";

type IntroSlide = {
  kind: "intro";
  step: string;
  name: string;
  badge: string;
  badgeBg: string;
  badgeFg: string;
  headline: string[];
  subtitle: string;
  bg: string;
  Character: React.ComponentType<{ className?: string }>;
};

type ContentSlide = {
  kind:
    | "opening"
    | "pilar1"
    | "pilar2"
    | "pilar3"
    | "flora1"
    | "flora2"
    | "flora3"
    | "vito1"
    | "vito2"
    | "luna1"
    | "luna2"
    | "luna3"
    | "desafioB"
    | "cierre";
  step: string;
  bg: string;
};

type Slide = IntroSlide | ContentSlide;

const SLIDES: Slide[] = [
  {
    kind: "opening",
    step: "PORTADA",
    bg: "#FAF6EC",
  },
  {
    kind: "intro",
    step: "#01",
    name: "PILI",
    badge: "Anfitriona",
    badgeBg: "var(--color-pf-star-soft)",
    badgeFg: "#8A6B00",
    headline: ["ABRIMOS", "JUNTOS"],
    subtitle: "Pili es tu anfitriona. Te acompaña desde el principio y te ayuda a observar los ejemplos con atención. Siempre abre y cierra la píldora.",
    bg: "#FAF6EC",
    Character: (props) => <PilarStar pose="hug" {...props} />,
  },
  {
    kind: "intro",
    step: "#02",
    name: "FLORA",
    badge: "Observadora",
    badgeBg: "var(--color-pf-flower-soft)",
    badgeFg: "#8A1470",
    headline: ["MIRA", "ESTO"],
    subtitle: "Flora es tu observadora. Te guía con preguntas para que descubras los patrones sin que nadie te dé la respuesta.",
    bg: "#E8F5E0",
    Character: FloraFlower,
  },
  {
    kind: "intro",
    step: "#03",
    name: "VITO",
    badge: "Método",
    badgeBg: "var(--color-pf-pill-soft)",
    badgeFg: "#3F6B14",
    headline: ["PASO", "A PASO"],
    subtitle: "Vito es tu guía metódico. Descompone cada razonamiento pieza a pieza para que veas cómo funciona todo por dentro.",
    bg: "var(--color-pf-star-soft)",
    Character: VitoPill,
  },
  {
    kind: "intro",
    step: "#04",
    name: "LUNA",
    badge: "Verificadora",
    badgeBg: "var(--color-pf-moon-soft)",
    badgeFg: "#3B2A8A",
    headline: ["¿LO", "SABES?"],
    subtitle: "Luna es tu verificadora. Te pone a prueba con juegos de comprobación para que sepas si realmente lo has entendido.",
    bg: "var(--color-pf-flower-soft)",
    Character: LunaMoon,
  },
  {
    kind: "intro",
    step: "#05",
    name: "CHIPI",
    badge: "Desafío",
    badgeBg: "var(--color-pf-spark-soft)",
    badgeFg: "#8A2F10",
    headline: ["¡A", "JUGAR!"],
    subtitle: "Chipi es tu desafío final. Te reta por equipos a toda velocidad para que practiques lo aprendido hasta dominarlo.",
    bg: "var(--color-pf-moon-soft)",
    Character: ChipiSpark,
  },
  {
    kind: "pilar1",
    step: "#06",
    bg: "#FAF6EC",
  },
  {
    kind: "pilar2",
    step: "#07",
    bg: "#FAF6EC",
  },
  {
    kind: "pilar3",
    step: "#08",
    bg: "#FAF6EC",
  },
  {
    kind: "flora1",
    step: "#09",
    bg: "#E8F5E0",
  },
  {
    kind: "flora2",
    step: "#10",
    bg: "#E8F5E0",
  },
  {
    kind: "flora3",
    step: "#11",
    bg: "#E8F5E0",
  },
  {
    kind: "vito1",
    step: "#12",
    bg: "var(--color-pf-pill-soft)",
  },
  {
    kind: "vito2",
    step: "#13",
    bg: "var(--color-pf-pill-soft)",
  },
  {
    kind: "luna1",
    step: "#14",
    bg: "var(--color-pf-moon-soft)",
  },
  {
    kind: "luna2",
    step: "#15",
    bg: "var(--color-pf-moon-soft)",
  },
  {
    kind: "luna3",
    step: "#16",
    bg: "var(--color-pf-moon-soft)",
  },
  {
    kind: "desafioB",
    step: "#17",
    bg: "#2d1508",
  },
  {
    kind: "cierre",
    step: "#18",
    bg: "#FAF6EC",
  },
];

export default function Pildora31Page() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  const next = () => setActive((active + 1) % SLIDES.length);
  const prev = () => setActive((active - 1 + SLIDES.length) % SLIDES.length);
  const isDark = slide.kind === "desafioB";

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
              PÍLDORA FORMATIVA 3.1
            </div>
            <div className="text-base md:text-lg opacity-70 font-medium tracking-wider uppercase">
              Posesivos · Unidad 3 · v0.31
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
        {slide.kind === "opening" && <SlideOpening onStart={next} />}
        {slide.kind === "intro" && <IntroSlideView slide={slide} />}
        {slide.kind === "pilar1" && <SlidePilar1 />}
        {slide.kind === "pilar2" && <SlidePilar2 />}
        {slide.kind === "pilar3" && <SlidePilar3 />}
        {slide.kind === "flora1" && <SlideFlora1 />}
        {slide.kind === "flora2" && <SlideFlora2 />}
        {slide.kind === "flora3" && <SlideFlora3 />}
        {slide.kind === "vito1" && <SlideVito1 />}
        {slide.kind === "vito2" && <SlideVito2 />}
        {/* VITO 3 eliminado — contenido movido a LUNA */}
        {slide.kind === "luna1" && <SlideLuna1 />}
        {slide.kind === "luna2" && <SlideLuna2 />}
        {slide.kind === "luna3" && <SlideLuna3 />}
        {slide.kind === "desafioB" && <SlideDesafioB />}
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

function IntroSlideView({ slide }: { slide: IntroSlide }) {
  const Character = slide.Character;
  return (
    <div className="w-full h-full max-w-[1600px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 md:gap-6 items-center overflow-x-hidden overflow-y-auto md:overflow-hidden">
      <div className="relative min-h-0 flex flex-col justify-center px-4">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-[family-name:var(--font-pf-display)] text-[clamp(24px,3vw,36px)] text-[var(--color-pf-ink)]">
            {slide.name}
          </span>
          <span
            className="px-5 py-1.5 rounded-full text-[clamp(16px,1.6vw,18px)] font-semibold"
            style={{ background: slide.badgeBg, color: slide.badgeFg }}
          >
            {slide.badge}
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.86] tracking-tight text-[clamp(64px,12vw,180px)] text-[var(--color-pf-ink)]">
          {slide.headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-2xl text-[clamp(18px,2.2vw,28px)] leading-relaxed text-[var(--color-pf-ink)] opacity-75">
          {slide.subtitle}
        </p>
      </div>

      <div className="flex items-center justify-center min-h-0 overflow-hidden order-first md:order-none">
        <Character className="w-full max-w-[72vw] md:max-w-[min(48vw,70vh)] h-auto" />
      </div>
    </div>
  );
}
