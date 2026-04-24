"use client";

import { useState } from "react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";

type Scene = {
  poseedor: string;
  posesivo: string;
  fraseBefore: string;
  fraseAfter: string;
  origen: string;
};

const SCENES: Scene[] = [
  {
    poseedor: "YO",
    posesivo: "mi",
    fraseBefore: "Yo vivo con ",
    fraseAfter: " familia.",
    origen: "p. 37 · act. 5",
  },
  {
    poseedor: "YO",
    posesivo: "Mis",
    fraseBefore: "",
    fraseAfter: " abuelos son mexicanos.",
    origen: "p. 37 · act. 6",
  },
  {
    poseedor: "TÚ",
    posesivo: "tu",
    fraseBefore: "¿Estudias música en ",
    fraseAfter: " instituto?",
    origen: "p. 37 · act. 5",
  },
  {
    poseedor: "ELLA · Lucía",
    posesivo: "Su",
    fraseBefore: "",
    fraseAfter: " madre trabaja en el hotel del pueblo.",
    origen: "p. 35 · texto de Lucía",
  },
  {
    poseedor: "ELLA · Graciela",
    posesivo: "sus",
    fraseBefore: "Graciela vive con ",
    fraseAfter: " tíos.",
    origen: "p. 37 · act. 5",
  },
  {
    poseedor: "NOSOTROS",
    posesivo: "Nuestro",
    fraseBefore: "",
    fraseAfter: " profesor de matemáticas es muy simpático.",
    origen: "p. 37 · act. 5",
  },
  {
    poseedor: "NOSOTROS",
    posesivo: "Nuestra",
    fraseBefore: "",
    fraseAfter: " madre tiene 45 años.",
    origen: "p. 37 · act. 6",
  },
  {
    poseedor: "NOSOTROS",
    posesivo: "Nuestras",
    fraseBefore: "",
    fraseAfter: " mochilas son rojas.",
    origen: "p. 37 · act. 5",
  },
];

export function SlideModelling() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = SCENES[sceneIndex];
  const total = SCENES.length;
  const isLast = sceneIndex === total - 1;

  const nextScene = () => {
    if (!isLast) setSceneIndex(sceneIndex + 1);
  };
  const prevScene = () => {
    if (sceneIndex > 0) setSceneIndex(sceneIndex - 1);
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto grid grid-cols-[1fr_320px] gap-12 items-center px-3 md:px-4">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="font-[family-name:var(--font-pf-display)] text-base text-[var(--color-pf-ink)]">
            PÍLAR
          </span>
          <span
            className="px-3 py-1 rounded-full text-base font-semibold"
            style={{
              background: "var(--color-pf-star-soft)",
              color: "#8A6B00",
            }}
          >
            Anfitriona
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.9] tracking-tight text-[clamp(48px,6vw,96px)] text-[var(--color-pf-ink)] mb-10">
          Frases de<br />nuestro libro
        </h1>

        <div
          key={sceneIndex}
          className="bg-white rounded-[36px] px-10 py-12 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
          style={{
            animation: "sceneIn 420ms cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <div className="flex items-center gap-5 mb-8 text-base font-semibold tracking-wider">
            <span className="px-4 py-2 rounded-full bg-[var(--color-pf-star-soft)] text-[#8A6B00]">
              {scene.poseedor}
            </span>
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none">
              <path
                d="M4 12 L56 12 M48 4 L56 12 L48 20"
                stroke="var(--color-pf-ink)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[var(--color-pf-ink)] opacity-60">{scene.origen}</span>
          </div>

          <p className="font-[family-name:var(--font-pf-display)] text-[clamp(36px,4.5vw,64px)] leading-[1.05] text-[var(--color-pf-ink)]">
            {scene.fraseBefore}
            <span
              className="inline-block px-4 py-1 mx-1 rounded-2xl"
              style={{
                background: "var(--color-pf-spark)",
                color: "#fff",
                animation: "highlightPulse 1200ms ease-out 200ms both",
              }}
            >
              {scene.posesivo}
            </span>
            {scene.fraseAfter}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={prevScene}
              disabled={sceneIndex === 0}
              className="w-12 h-12 rounded-full bg-white/80 text-[var(--color-pf-ink)] font-bold text-base disabled:opacity-30 hover:bg-white transition"
              aria-label="Escena anterior"
            >
              ←
            </button>
            <span className="text-[var(--color-pf-ink)] font-semibold opacity-70">
              Escena {sceneIndex + 1} / {total}
            </span>
            <button
              onClick={nextScene}
              disabled={isLast}
              className="w-12 h-12 rounded-full bg-[var(--color-pf-ink)] text-white font-bold text-base disabled:opacity-30 hover:opacity-90 transition"
              aria-label="Siguiente escena"
            >
              →
            </button>
          </div>

          <div className="flex items-center gap-2">
            {SCENES.map((_, i) => (
              <span
                key={i}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === sceneIndex ? 28 : 8,
                  background:
                    i <= sceneIndex
                      ? "var(--color-pf-ink)"
                      : "rgba(10,10,10,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center">
        <PilarStar pose="hug" className="w-full max-w-[280px] h-auto" />
      </div>

      <style jsx>{`
        @keyframes sceneIn {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.985);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes highlightPulse {
          0% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(255, 107, 74, 0.6);
          }
          60% {
            transform: scale(1.05);
            box-shadow: 0 0 0 16px rgba(255, 107, 74, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 107, 74, 0);
          }
        }
      `}</style>
    </div>
  );
}
