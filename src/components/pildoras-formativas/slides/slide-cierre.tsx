"use client";

import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";

const AGENTS = [
  {
    key: "pilar",
    name: "PILI",
    badge: "Anfitriona",
    badgeBg: "var(--color-pf-star-soft)",
    badgeColor: "#8A6B00",
    bubble: "¡Buen trabajo, equipo!",
    Comp: () => <PilarStar pose="wave" className="w-full h-auto" />,
    enter: 700,
    float: 1500,
  },
  {
    key: "flora",
    name: "FLORA",
    badge: "Observadora",
    badgeBg: "var(--color-pf-flower-soft)",
    badgeColor: "#9B1B8A",
    bubble: "Habéis observado muy bien.",
    Comp: () => <FloraFlower className="w-full h-auto" />,
    enter: 850,
    float: 1650,
  },
  {
    key: "vito",
    name: "VITO",
    badge: "Método",
    badgeBg: "var(--color-pf-pill-soft)",
    badgeColor: "#3F6B14",
    bubble: "Paso a paso, ¡lo lograsteis!",
    Comp: () => <VitoPill className="w-full h-auto" />,
    enter: 1000,
    float: 1800,
  },
  {
    key: "luna",
    name: "LUNA",
    badge: "Verificadora",
    badgeBg: "var(--color-pf-moon-soft)",
    badgeColor: "#4A3B8F",
    bubble: "¡Todo comprobado!",
    Comp: () => <LunaMoon className="w-full h-auto" />,
    enter: 1150,
    float: 1950,
  },
  {
    key: "chipi",
    name: "CHIPI",
    badge: "Desafío",
    badgeBg: "var(--color-pf-spark-soft)",
    badgeColor: "#A84800",
    bubble: "¡Sois unos campeones!",
    Comp: () => <ChipiSpark className="w-full h-auto" />,
    enter: 1300,
    float: 2100,
  },
];

type CierreProps = {
  unidad?: string;
};

export function SlideCierre({ unidad = "Unidad 3 · La Familia" }: CierreProps) {
  return (
    <div className="relative w-full h-full max-w-[1800px] mx-auto flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-x-hidden overflow-y-auto">
      <p
        className="relative font-semibold tracking-[0.35em] text-[var(--color-pf-ink)] opacity-60 uppercase"
        style={{ fontSize: "clamp(18px, 1.3vw, 20px)", animation: "fadeInDown 600ms ease-out 0ms both" }}
      >
        · Nuevo Compañeros 1 ·
      </p>

      <div
        className="relative mt-2 px-5 py-1.5 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-semibold tracking-wider uppercase shadow-[0_4px_16px_-8px_rgba(0,0,0,0.2)]"
        style={{ fontSize: "clamp(18px, 1.3vw, 20px)", animation: "fadeInDown 600ms ease-out 150ms both" }}
      >
        {unidad}
      </div>

      <h1
        className="relative mt-[1vh] font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] text-[var(--color-pf-ink)]"
        style={{ fontSize: "clamp(40px, 7vw, 120px)", animation: "bigPop 900ms cubic-bezier(0.2,0.8,0.2,1) 430ms both" }}
      >
        ¡Misión cumplida!
      </h1>

      <div className="relative mt-[2vh] flex flex-wrap items-end justify-center" style={{ gap: "clamp(32px, 4.5vw, 80px)" }}>
        {AGENTS.map((agent) => {
          const Comp = agent.Comp;
          return (
            <div
              key={agent.key}
              className="flex flex-col items-center"
              style={{
                width: "clamp(130px, 16vw, 200px)",
                animation: `charEnter 850ms cubic-bezier(0.2,0.8,0.2,1) ${agent.enter}ms both, charFloat 3.6s ease-in-out ${agent.float}ms infinite`,
              }}
            >
              {/* Bubble */}
              <div
                className="rounded-xl px-4 py-2.5 mb-2 text-center inline-block"
                style={{ background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", minWidth: "100%", maxWidth: "260px", width: "max-content" }}
              >
                <p className="font-[family-name:var(--font-pf-display)] leading-[1.2] text-[var(--color-pf-ink)] hyphens-none" style={{ fontSize: "clamp(20px, 2vw, 26px)", wordBreak: "normal", overflowWrap: "normal" }}>
                  {agent.bubble}
                </p>
              </div>

              {/* Character */}
              <Comp />

              {/* Name + badge */}
              <div className="flex flex-col items-center gap-0.5 mt-1">
                <span className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] font-bold" style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}>
                  {agent.name}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full font-semibold"
                  style={{ fontSize: "clamp(20px, 2.2vw, 28px)", background: agent.badgeBg, color: agent.badgeColor }}
                >
                  {agent.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bigPop {
          0% { opacity: 0; transform: scale(0.35) rotate(-5deg); }
          55% { transform: scale(1.08) rotate(1.5deg); }
          80% { transform: scale(0.98) rotate(-0.5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }
        @keyframes charEnter {
          0% { opacity: 0; transform: translateY(90px) scale(0.78) rotate(-10deg); }
          60% { transform: translateY(-14px) scale(1.08) rotate(3deg); }
          80% { transform: translateY(4px) scale(0.98) rotate(-1deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0); }
        }
        @keyframes charFloat {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
