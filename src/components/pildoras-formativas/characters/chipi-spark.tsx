"use client";

export function ChipiSpark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 540"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 230 70 L 130 240 L 200 240 L 150 410 L 290 220 L 220 220 L 270 70 Z"
        fill="var(--color-pf-spark)"
        stroke="var(--color-pf-spark)"
        strokeWidth="54"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      <circle cx="180" cy="232" r="10" fill="var(--color-pf-ink)" />
      <circle cx="224" cy="232" r="10" fill="var(--color-pf-ink)" />
      <circle cx="183" cy="229" r="3" fill="#ffffff" />
      <circle cx="227" cy="229" r="3" fill="#ffffff" />

      <path
        d="M182 258 Q202 272 222 258"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M108 232 C 76 228 44 244 44 280 Q44 302 64 304 Q82 302 86 284"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M86 284 Q96 276 106 280"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M298 228 C 336 214 370 232 368 270 Q364 294 344 292 Q326 288 324 272"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M324 272 Q314 264 304 270"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      <line
        x1="180"
        y1="390"
        x2="170"
        y2="470"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="220"
        y1="390"
        x2="230"
        y2="470"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <line
        x1="90"
        y1="488"
        x2="310"
        y2="488"
        stroke="var(--color-pf-ink)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="68" cy="140" r="6" fill="var(--color-pf-spark)" />
      <circle cx="340" cy="160" r="5" fill="var(--color-pf-spark)" />
      <circle cx="60" cy="360" r="4" fill="var(--color-pf-spark)" />
      <circle cx="348" cy="380" r="6" fill="var(--color-pf-spark)" />
    </svg>
  );
}
