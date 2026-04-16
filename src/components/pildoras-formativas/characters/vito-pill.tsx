"use client";

export function VitoPill({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 540"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="200"
        cy="260"
        rx="130"
        ry="170"
        fill="var(--color-pf-pill)"
      />

      <path
        d="M80 148 Q200 100 320 148 L320 188 Q200 140 80 188 Z"
        fill="var(--color-pf-ink)"
      />
      <path
        d="M80 148 Q200 100 320 148"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M80 188 Q200 140 320 188"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      <path
        d="M168 252 Q176 240 188 252"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M212 252 Q220 240 232 252"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M182 280 Q200 296 218 280"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M78 278 C 48 260 28 270 22 286 Q18 298 32 302 Q50 304 68 296"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M322 278 C 352 260 372 270 378 286 Q382 298 368 302 Q350 304 332 296"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <line
        x1="170"
        y1="418"
        x2="170"
        y2="478"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="230"
        y1="418"
        x2="230"
        y2="478"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect
        x="152"
        y="478"
        width="36"
        height="12"
        rx="6"
        fill="#ffffff"
        stroke="var(--color-pf-ink)"
        strokeWidth="3"
      />
      <rect
        x="212"
        y="478"
        width="36"
        height="12"
        rx="6"
        fill="#ffffff"
        stroke="var(--color-pf-ink)"
        strokeWidth="3"
      />

      <line
        x1="80"
        y1="500"
        x2="320"
        y2="500"
        stroke="var(--color-pf-ink)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
