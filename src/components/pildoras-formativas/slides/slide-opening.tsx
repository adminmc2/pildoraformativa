"use client";

import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";

type OpeningProps = {
  onStart: () => void;
  pildora?: string;
  titulo?: string;
  unidad?: string;
};

export function SlideOpening({
  onStart,
  pildora = "3.1",
  titulo = "Los Posesivos",
  unidad = "Unidad 3 · La Familia",
}: OpeningProps) {
  const cast = [
    { key: "pilar", Comp: () => <PilarStar pose="hug" className="w-full h-auto" />, enter: 700, float: 1500 },
    { key: "flora", Comp: () => <FloraFlower className="w-full h-auto" />, enter: 850, float: 1650 },
    { key: "vito", Comp: () => <VitoPill className="w-full h-auto" />, enter: 1000, float: 1800 },
    { key: "luna", Comp: () => <LunaMoon className="w-full h-auto" />, enter: 1150, float: 1950 },
    { key: "chipi", Comp: () => <ChipiSpark className="w-full h-auto" />, enter: 1300, float: 2100 },
  ];

  return (
    <div className="relative w-full h-full max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center overflow-hidden">
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
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-pf-ink)"
          strokeWidth="2"
          style={{ animation: "spin 14s linear infinite, fadeInSoft 700ms ease-out 400ms both", opacity: 0.35 }}
        >
          <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
        </svg>
        <svg
          className="absolute bottom-[44%] right-[8%]"
          width="44"
          height="44"
          viewBox="0 0 24 24"
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

      <div
        className="relative mt-[1vh] font-[family-name:var(--font-pf-display)] text-[clamp(20px,3vw,42px)] text-[var(--color-pf-ink)] opacity-85 tracking-wider"
        style={{ animation: "titleSlide 600ms cubic-bezier(0.2,0.8,0.2,1) 280ms both" }}
      >
        PÍLDORA FORMATIVA {pildora}
      </div>

      <h1
        className={`relative mt-1 font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] text-[var(--color-pf-ink)] ${
          titulo.length > 20
            ? "text-[clamp(36px,8vw,120px)]"
            : "text-[clamp(56px,11vw,200px)]"
        }`}
        style={{ animation: "bigPop 900ms cubic-bezier(0.2,0.8,0.2,1) 430ms both" }}
      >
        {titulo}
      </h1>

      <div className="relative mt-[3vh] flex items-end justify-center gap-[clamp(12px,2vw,32px)]">
        {cast.map((c) => {
          const Comp = c.Comp;
          return (
            <div
              key={c.key}
              style={{
                width: "clamp(100px, 15vw, 180px)",
                animation: `charEnter 850ms cubic-bezier(0.2,0.8,0.2,1) ${c.enter}ms both, charFloat 3.6s ease-in-out ${c.float}ms infinite`,
              }}
            >
              <Comp />
            </div>
          );
        })}
      </div>

      <button
        onClick={onStart}
        className="relative mt-[3vh] px-14 py-5 rounded-full bg-[var(--color-pf-ink)] text-white font-[family-name:var(--font-pf-display)] text-[clamp(20px,2.4vw,30px)] hover:opacity-90 hover:scale-[1.02] transition"
        style={{ animation: "buttonIn 600ms cubic-bezier(0.2,0.8,0.2,1) 2000ms both, buttonPulse 2.4s ease-in-out 2800ms infinite" }}
      >
        Empezar
      </button>

      <style jsx>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInSoft {
          0% { opacity: 0; }
          100% { opacity: 0.6; }
        }
        @keyframes titleSlide {
          0% { opacity: 0; transform: translateY(-12px); letter-spacing: 0.5em; }
          100% { opacity: 0.85; transform: translateY(0); letter-spacing: 0.1em; }
        }
        @keyframes bigPop {
          0% { opacity: 0; transform: scale(0.35) rotate(-5deg); }
          55% { transform: scale(1.08) rotate(1.5deg); }
          80% { transform: scale(0.98) rotate(-0.5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }
        @keyframes charEnter {
          0% {
            opacity: 0;
            transform: translateY(90px) scale(0.78) rotate(-10deg);
          }
          60% {
            transform: translateY(-14px) scale(1.08) rotate(3deg);
          }
          80% {
            transform: translateY(4px) scale(0.98) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0);
          }
        }
        @keyframes charFloat {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes buttonIn {
          0% { opacity: 0; transform: translateY(16px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes buttonPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10,10,10,0.25); }
          50% { box-shadow: 0 0 0 18px rgba(10,10,10,0); }
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
