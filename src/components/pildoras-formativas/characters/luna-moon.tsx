"use client";

export function LunaMoon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 540"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cuerpo original: luna creciente con bezier + stroke redondeado */}
      <path
        d="M 110 180 C 110 80, 230 60, 300 130 C 240 140, 210 200, 220 260 C 230 320, 280 356, 336 350 C 280 420, 160 410, 120 336 C 80 262, 110 260, 110 180 Z"
        fill="var(--color-pf-moon)"
        stroke="var(--color-pf-moon)"
        strokeWidth="40"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Ojos */}
      <circle cx="168" cy="248" r="11" fill="var(--color-pf-ink)" />
      <circle cx="212" cy="248" r="11" fill="var(--color-pf-ink)" />
      <circle cx="171" cy="245" r="3.2" fill="#ffffff" />
      <circle cx="215" cy="245" r="3.2" fill="#ffffff" />

      {/* Sonrisa */}
      <path
        d="M172 278 Q190 290 208 278"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Brazo izquierdo: sale del borde izquierdo, curva hacia fuera, mano con dedos abiertos */}
      <path
        d="M 90 285 C 58 278 36 292 38 318"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 38 318 L 28 310 M 38 318 L 26 318 M 38 318 L 28 326"
        stroke="var(--color-pf-ink)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Brazo derecho: misma altura, sale del borde derecho, curva hacia fuera, mano con dedos */}
      <path
        d="M 242 285 C 274 278 296 292 294 318"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 294 318 L 304 310 M 294 318 L 306 318 M 294 318 L 304 326"
        stroke="var(--color-pf-ink)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Pierna izquierda */}
      <line
        x1="170"
        y1="396"
        x2="160"
        y2="466"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Pierna derecha */}
      <line
        x1="230"
        y1="396"
        x2="240"
        y2="466"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Suelo */}
      <line
        x1="90"
        y1="486"
        x2="310"
        y2="486"
        stroke="var(--color-pf-ink)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
