"use client";

import { ReactNode } from "react";

export function CharacterCard({
  step,
  name,
  badge,
  badgeColor = "var(--color-pf-star-soft)",
  badgeTextColor = "var(--color-pf-ink)",
  headline,
  character,
  selectLabel = "Seleccionar",
  totalDots = 3,
  activeDot = 0,
  onSelect,
}: {
  step: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  headline: ReactNode;
  character: ReactNode;
  selectLabel?: string;
  totalDots?: number;
  activeDot?: number;
  onSelect?: () => void;
}) {
  return (
    <div className="relative w-full max-w-[420px] aspect-[9/19] rounded-[44px] bg-[var(--color-pf-paper)] px-8 pt-8 pb-6 flex flex-col font-[family-name:var(--font-pf-ui)]">
      <header className="flex items-center justify-between text-[13px] font-medium text-[var(--color-pf-ink)]">
        <span className="opacity-80">{step}</span>
        <span className="font-[family-name:var(--font-pf-display)] tracking-wide text-[15px]">
          {name}
        </span>
        <button
          aria-label="Cerrar"
          className="w-6 h-6 flex items-center justify-center text-[var(--color-pf-ink)]"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6L18 18" />
            <path d="M18 6L6 18" />
          </svg>
        </button>
      </header>

      <div className="relative mt-8">
        <h1 className="font-[family-name:var(--font-pf-display)] text-[56px] leading-[0.92] tracking-tight text-[var(--color-pf-ink)] uppercase">
          {headline}
        </h1>
        {badge && (
          <span
            className="absolute right-4 top-[58%] px-3 py-1 rounded-full text-[13px] font-semibold"
            style={{ background: badgeColor, color: badgeTextColor }}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="flex-1 flex items-end justify-center pt-6">
        <div className="w-[78%] max-w-[280px]">{character}</div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-2">
        {Array.from({ length: totalDots }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === activeDot ? 18 : 6,
              background:
                i === activeDot
                  ? "var(--color-pf-ink)"
                  : "rgba(10,10,10,0.2)",
            }}
          />
        ))}
      </div>

      <button
        onClick={onSelect}
        className="mt-5 w-full bg-[var(--color-pf-ink)] text-white rounded-full py-4 text-[17px] font-semibold font-[family-name:var(--font-pf-ui)] active:scale-[0.98] transition-transform"
      >
        {selectLabel}
      </button>
    </div>
  );
}
