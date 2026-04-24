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
    bubble: "¡Gran trabajo, equipo!",
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
      {/* Decorative background shapes */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] left-[6%] w-10 h-10 rounded-full bg-[var(--color-pf-flower)] opacity-60"
          style={{ animation: "driftA 8s ease-in-out 600ms infinite, fadeInSoft 700ms ease-out 600ms both" }}
        />
        <div
          className="absolute top-[18%] right-[10%] w-14 h-14 rounded-full bg-[var(--color-pf-star)] opacity-70"
          style={{ animation: "driftB 9s ease-in-out 700ms infinite, fadeInSoft 700ms ease-out 700ms both" }}
        />
        <div
          className="absolute bottom-[40%] left-[12%] w-8 h-8 rounded-2xl bg-[var(--color-pf-pill)] opacity-60 rotate-12"
          style={{ animation: "driftA 7s ease-in-out 800ms infinite, fadeInSoft 700ms ease-out 800ms both" }}
        />
        <div
          className="absolute top-[30%] right-[22%] w-6 h-6 rounded-full bg-[var(--color-pf-spark)] opacity-70"
          style={{ animation: "driftB 6s ease-in-out 1000ms infinite, fadeInSoft 700ms ease-out 1000ms both" }}
        />
        <div
          className="absolute top-[45%] left-[4%] w-5 h-5 rounded-full bg-[var(--color-pf-moon)] opacity-60"
          style={{ animation: "driftA 10s ease-in-out 1200ms infinite, fadeInSoft 700ms ease-out 1200ms both" }}
        />
        <svg
          className="absolute top-[12%] right-[4%]"
          width="60" height="60" viewBox="0 0 24 24"
          fill="none" stroke="var(--color-pf-ink)" strokeWidth="2"
          style={{ animation: "spin 14s linear infinite, fadeInSoft 700ms ease-out 400ms both", opacity: 0.35 }}
        >
          <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
        </svg>
        <svg
          className="absolute bottom-[44%] right-[8%]"
          width="44" height="44" viewBox="0 0 24 24"
          fill="var(--color-pf-ink)"
          style={{ animation: "spin 10s linear infinite reverse, fadeInSoft 700ms ease-out 900ms both", opacity: 0.2 }}
        >
          <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
        </svg>
      </div>

      <p
        className="relative text-base font-semibold tracking-[0.35em] text-[var(--color-pf-ink)] opacity-60 uppercase"
        style={{ animation: "fadeInDown 600ms ease-out 0ms both" }}
      >
        · Nuevo Compañeros 1 ·
      </p>

      <div
        className="relative mt-2 px-5 py-1.5 rounded-full bg-white/80 text-[var(--color-pf-ink)] text-base font-semibold tracking-wider uppercase shadow-[0_4px_16px_-8px_rgba(0,0,0,0.2)]"
        style={{ animation: "fadeInDown 600ms ease-out 150ms both" }}
      >
        {unidad}
      </div>

      <h1
        className="relative mt-[1vh] font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] text-[clamp(48px,9vw,160px)] text-[var(--color-pf-ink)]"
        style={{ animation: "bigPop 900ms cubic-bezier(0.2,0.8,0.2,1) 430ms both" }}
      >
        ¡Misión cumplida!
      </h1>

      <div className="relative mt-[2vh] flex flex-wrap items-end justify-center gap-[clamp(8px,1.8vw,28px)]">
        {AGENTS.map((agent) => {
          const Comp = agent.Comp;
          return (
            <div
              key={agent.key}
              className="flex flex-col items-center"
              style={{
                width: "clamp(90px, 14vw, 170px)",
                animation: `charEnter 850ms cubic-bezier(0.2,0.8,0.2,1) ${agent.enter}ms both, charFloat 3.6s ease-in-out ${agent.float}ms infinite`,
              }}
            >
              {/* Bubble */}
              <div
                className="rounded-xl px-4 py-2 mb-2 max-w-[220px] text-center"
                style={{ background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
              >
                <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.2vh),32px)] leading-[1.15] text-[var(--color-pf-ink)]">
                  {agent.bubble}
                </p>
              </div>

              {/* Character */}
              <Comp />

              {/* Name + badge */}
              <div className="flex flex-col items-center gap-0.5 mt-1">
                <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.2vw,2.8vh),28px)] text-[var(--color-pf-ink)] font-bold">
                  {agent.name}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-[clamp(20px,min(2.2vw,2.8vh),28px)] font-semibold"
                  style={{ background: agent.badgeBg, color: agent.badgeColor }}
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
        @keyframes fadeInSoft {
          0% { opacity: 0; }
          100% { opacity: 0.6; }
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
        @keyframes driftA {
          0%, 100% { transform: translate(0, 0) rotate(0); }
          50% { transform: translate(14px, -20px) rotate(10deg); }
        }
        @keyframes driftB {
          0%, 100% { transform: translate(0, 0) rotate(0); }
          50% { transform: translate(-16px, 18px) rotate(-10deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
