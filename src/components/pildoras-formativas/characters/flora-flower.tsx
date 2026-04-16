"use client";

export function FloraFlower({ className = "" }: { className?: string }) {
  const petals = [
    { cx: 200, cy: 120 },
    { cx: 290, cy: 160 },
    { cx: 320, cy: 240 },
    { cx: 280, cy: 320 },
    { cx: 200, cy: 340 },
    { cx: 120, cy: 320 },
    { cx: 80, cy: 240 },
    { cx: 110, cy: 160 },
  ];

  return (
    <svg
      viewBox="0 0 400 540"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {petals.map((p, i) => (
        <circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r="78"
          fill="var(--color-pf-flower)"
        />
      ))}
      <circle cx="200" cy="230" r="92" fill="var(--color-pf-flower)" />

      <circle cx="178" cy="230" r="10" fill="var(--color-pf-ink)" />
      <circle cx="222" cy="230" r="10" fill="var(--color-pf-ink)" />
      <path
        d="M178 228 Q178 222 186 222"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0"
      />
      <path
        d="M170 226 Q178 218 186 226"
        stroke="var(--color-pf-ink)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M214 226 Q222 218 230 226"
        stroke="var(--color-pf-ink)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M186 254 Q200 266 214 254"
        stroke="var(--color-pf-ink)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      <circle cx="162" cy="250" r="3" fill="var(--color-pf-ink)" />
      <circle cx="238" cy="250" r="3" fill="var(--color-pf-ink)" />
      <circle cx="156" cy="240" r="2" fill="var(--color-pf-ink)" />
      <circle cx="244" cy="240" r="2" fill="var(--color-pf-ink)" />

      <path
        d="M90 340 C 70 360 60 400 80 430 Q96 450 116 440 Q128 432 124 418"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M124 418 Q118 408 106 410"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M310 340 C 330 360 340 400 320 430 Q304 450 284 440 Q272 432 276 418"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M276 418 Q282 408 294 410"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M140 368 C 130 410 150 460 200 460 C 250 460 270 410 260 368"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <line
        x1="80"
        y1="476"
        x2="320"
        y2="476"
        stroke="var(--color-pf-ink)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
