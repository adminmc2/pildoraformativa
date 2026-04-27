# Guía de responsive y accesibilidad — Píldoras Formativas

> Este documento es **solo sobre responsive y accesibilidad** para el contexto real de uso (laptop / TV grande / proyector). NO mezclar con gramática (CLAUDE.md root) ni con escritura A1.1 (`docs/CLAUDE-escritura-emails-a11.md`).

## Contextos de uso reales (en orden de prioridad)

1. **Laptop / portátil** del profesor — 1366×768 a 1920×1080
2. **TV grande** en aula — 1920×1080 a 3840×2160 (4K), 16:9, distancia 3-5 m
3. **Proyector** — 1280×720 a 1920×1080, 16:9 (a veces 16:10), aula oscura

**NO prioritarios:** mobile / tablet. Deben no romper, pero no se diseña para ellos.

---

## A. Reglas de responsive

| # | Regla |
|---|---|
| R1 | Viewport mínimo objetivo: **1280×720** — todos los slides legibles y funcionales aquí |
| R2 | Viewport estándar: **1920×1080** (FullHD) — diseño óptimo en este tamaño |
| R3 | Viewport máximo: **3840×2160** (4K) — sin pixelado ni espacio vacío excesivo |
| R4 | **Aspecto 16:9** primario; 16:10 y 4:3 sin romper |
| R5 | Escala fluida con `clamp()` y unidades `vw/vh` (no media queries rígidas) |
| R6 | **NO scroll horizontal** en ningún viewport |
| R7 | **NO scroll vertical** en proyector ≥1280×720 — todo el contenido debe caber |
| R8 | Sin solapamientos: burbujas de personaje, textos y botones nunca chocan |
| R9 | Personaje y burbuja al menos **20% de altura útil** del slide en proyector |

---

## B. Criterios de accesibilidad

### Tamaños de texto (mínimos absolutos, proyectables)

| Tipo | Mínimo | Recomendado |
|---|---|---|
| Texto secundario (etiquetas, micro-info) | **18px** | 20px |
| Texto general (frases, párrafos) | **20px** | 22-24px |
| Enunciados / preguntas | **24px** | 28-32px |
| Elemento diana (gramática estudiada) | **28px** | 32-40px (con color + bold) |
| Títulos de slide | **36px** | 48-64px |
| Botones de acción | **20px** | 24px |

### Contraste

| AC1 | WCAG AA mínimo: 4.5:1 texto normal, 3:1 texto grande (≥18pt o 14pt+bold) |
| AC2 | Verificar pares fondo/texto del proyecto (ink sobre soft, blanco sobre acento) |
| AC3 | Estados deshabilitados ≥ 3:1 |

### Interacción

| AC4 | Botones / áreas clicables: mínimo **44×44px** |
| AC5 | Gap entre interactivos: **≥8px** |
| AC6 | Indicador de **foco visible** (no solo color — borde/outline 2-3px) |
| AC7 | Estados hover y active distinguibles |

### Movimiento y atención

| AC8 | Sin parpadeos intensos (>3 Hz) |
| AC9 | Animaciones de entrada cortas (<800 ms), no bloqueantes |
| AC10 | Respetar `prefers-reduced-motion` (apagar animaciones decorativas) |

### Lenguaje y semántica

| AC11 | Vocabulario A1.1 (ver `docs/CLAUDE-escritura-emails-a11.md`) |
| AC12 | Roles ARIA en interactivos (`aria-label`, `aria-pressed`, `role="button"` si no es `<button>`) |
| AC13 | Orden de tabulación lógico |

### Color y significado

| AC14 | Color **NO** como único indicador (también forma, texto o icono) |
| AC15 | Esquema de género: `--color-pf-moon` (masculino), `--color-pf-flower` (femenino) — ver CLAUDE.md root |

---

## C. Checklist por slide (aplicar en cada auditoría)

1. ✅ Renderizar en 1280×720, 1920×1080, 4K
2. ✅ Sin overflow horizontal · sin scroll vertical en proyector
3. ✅ Tamaños de texto cumplen mínimos según tipo
4. ✅ Contraste validado (par fondo/texto)
5. ✅ Botones ≥44px, gaps ≥8px
6. ✅ Foco visible al tabular
7. ✅ Sin solapamientos personaje/burbuja/texto
8. ✅ Animaciones controladas, reduced-motion respetado
9. ✅ Vocabulario y estructuras gramaticales del nivel
10. ✅ Color de género coherente cuando aplica

---

## D. Cómo testear

- **Navegador**: DevTools → Device Toolbar → resoluciones 1280×720, 1920×1080, 3840×2160
- **Contraste**: extensión axe DevTools, WAVE, o Contrast Checker (Color Oracle para daltonismo)
- **Foco**: `Tab` repetidamente desde la barra de URL — todos los interactivos deben tener foco visible
- **Reduced motion**: macOS *Reducir movimiento* / Chrome `prefers-reduced-motion: reduce`
- **Proyección real**: pruebas finales en aula con proyector y TV antes de release
