"use client";

type PilarPose = "hug" | "wave" | "point";

export function PilarStar({
  pose = "hug",
  className = "",
}: {
  pose?: PilarPose;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cuerpo: estrella hinchada con stroke-linejoin round */}
      <path
        d="M200 80 L238.2 167.4 L333.2 176.7 L261.8 240.1 L282.3 333.2 L200 285 L117.7 333.2 L138.2 240.1 L66.8 176.7 L161.8 167.4 Z"
        fill="var(--color-pf-star)"
        stroke="var(--color-pf-star)"
        strokeWidth="60"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Ojos */}
      <circle cx="176" cy="218" r="11" fill="var(--color-pf-ink)" />
      <circle cx="224" cy="218" r="11" fill="var(--color-pf-ink)" />
      <circle cx="179" cy="215" r="3.2" fill="#ffffff" />
      <circle cx="227" cy="215" r="3.2" fill="#ffffff" />

      {/* Sonrisa */}
      <path
        d="M184 246 Q200 260 216 246"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* ——— POSE: HUG (brazos curvados hacia el centro del cuerpo) ——— */}
      {pose === "hug" && (
        <>
          {/* Brazo izquierdo: baja desde la zona izquierda y se curva hacia el centro */}
          <path
            d="M 108 178 C 78 208, 78 252, 135 258 Q 150 258, 158 250"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 135 258 Q 120 250, 118 240"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Brazo derecho: espejo del izquierdo */}
          <path
            d="M 292 178 C 322 208, 322 252, 265 258 Q 250 258, 242 250"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 265 258 Q 280 250, 282 240"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}

      {/* ——— POSE: WAVE (brazo izquierdo arriba tocando cabeza, derecho extendido) ——— */}
      {pose === "wave" && (
        <>
          {/* Brazo izquierdo: sube hacia arriba de la estrella (cabeza) */}
          <path
            d="M 112 170 C 120 130, 152 85, 190 72"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 190 72 Q 196 66, 198 74"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Brazo derecho: extendido al lado con mano abierta */}
          <path
            d="M 300 178 C 336 186, 368 188, 386 178"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 386 178 Q 392 172, 388 164"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 386 178 Q 396 176, 398 170"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}

      {/* ——— POSE: POINT (brazo izquierdo relajado, derecho señalando) ——— */}
      {pose === "point" && (
        <>
          {/* Brazo izquierdo: cuelga relajado */}
          <path
            d="M 110 185 C 88 218, 82 258, 100 280"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 100 280 Q 108 286, 115 280"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Brazo derecho: apunta a la derecha y ligeramente arriba */}
          <path
            d="M 300 178 C 342 172, 380 158, 400 142"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 400 142 L 414 132"
            stroke="var(--color-pf-ink)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}

      {/* Piernas: dos líneas verticales simples */}
      <line
        x1="176"
        y1="338"
        x2="176"
        y2="448"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="224"
        y1="338"
        x2="224"
        y2="448"
        stroke="var(--color-pf-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Línea del suelo */}
      <line
        x1="100"
        y1="456"
        x2="300"
        y2="456"
        stroke="var(--color-pf-ink)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
