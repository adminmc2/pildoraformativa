# 05 — Estilos y diseño

## Paleta Little Movers

Cinco familias de color, una por personaje. Cada familia tiene un tono **principal** (saturado, para acentos y el propio personaje) y un tono **suave** (pastel, para fondos de slide).

| Personaje | Variable principal | HEX | Variable suave | HEX |
|---|---|---|---|---|
| PÍLAR ⭐ | `--color-pf-star` | #F5C842 | `--color-pf-star-soft` | #FEF3C7 |
| FLORA 🌸 | `--color-pf-flower` | #E91FCE | `--color-pf-flower-soft` | #FCE7F3 |
| VITO 💊 | `--color-pf-pill` | #8FC751 | `--color-pf-pill-soft` | #DCEDC8 |
| LUNA 🌙 | `--color-pf-moon` | #7C5CFF | `--color-pf-moon-soft` | #E9E5FF |
| CHIPI ⚡ | `--color-pf-spark` | #FF6B4A | `--color-pf-spark-soft` | #FFE4DC |

Y tres neutros:

| Variable | HEX | Uso |
|---|---|---|
| `--color-pf-ink` | #0A0A0A | Texto principal, líneas gruesas |
| `--color-pf-cream` | #F5F5F5 | Fondos neutros |
| `--color-pf-paper` | #FFFFFF | Tarjetas, contenedores blancos |

Declaradas en [`app/globals.css`](../app/globals.css) dentro de `@theme` (Tailwind v4), disponibles como clases utilitarias: `bg-pf-star-soft`, `text-pf-flower`, etc.

## Uso de color por slide

1. **Fondo de slide** → color **suave** del personaje activo (`--color-pf-{personaje}-soft`).
2. **Acentos, badges, botones** → color **principal** del personaje activo.
3. **Texto principal** → `--color-pf-ink` (#0A0A0A) sobre los fondos suaves.
4. **Enunciados** → fondo oscuro con texto blanco (contraste fuerte para legibilidad desde el fondo del aula).

El cambio de color de fondo al pasar de slide refuerza visualmente el cambio de función didáctica sin necesidad de texto explicativo.

## Tipografía

Dos familias tipográficas, cargadas desde Google Fonts en [`app/layout.tsx`](../app/layout.tsx):

| Variable | Fuente | Uso |
|---|---|---|
| `--font-pf-display` | **Archivo Black** (weight 400) | Headlines grandes, badges de personaje, llamados a la acción |
| `--font-pf-ui` | **Inter** (400, 500, 600, 700) | Texto de contenido, enunciados, UI |

Archivo Black aporta el carácter rotundo tipo *cartel* que pide el estilo Little Movers. Inter es el caballo de batalla legible para todo lo demás.

## Tamaños mínimos (accesibilidad)

**Todo texto proyectable debe ser legible desde el fondo del aula.** Reglas:

- **Texto mínimo en pantalla: 16px.** Nunca menos.
- **Enunciados: mínimo 18px.**
- **Frases dentro de contenedores (cajas, tablas, pools): mínimo 15px.** Nunca encoger por falta de espacio.
- Si un elemento no cabe legible, se **reorganiza el layout** (más espacio al contenido, menos al personaje) — no se reduce el texto.
- **Etiquetas de categorías** (UNO, VARIOS, etc.): no pueden partirse en varias líneas.
- **Enunciados** se diferencian visualmente del resto (fondo oscuro + texto blanco, o similar).
- **Burbujas de diálogo** de los personajes: lo suficientemente grandes para leerse sin esfuerzo.

## Componentes interactivos disponibles

En [`src/components/ui/`](../src/components/ui/) viven los componentes reutilizables que se enganchan dentro de las slides:

| Componente | Uso típico |
|---|---|
| `neon-gradient-card` | Tarjetas destacadas con borde neón animado |
| `morphing-text` | Texto que cambia con animación (headlines, titulares) |
| `comic-text` | Estilo cómic para llamadas de atención |
| `highlighter` | Resaltado manual tipo rotulador (usa `rough-notation`) |
| `animated-testimonials` | Carrusel de "fichas" de personajes/ejemplos |
| `terminal` | Animación tipo terminal para revelar texto paso a paso |

Cualquier componente nuevo que se añada al sampler general (en el repo madre) se puede **reutilizar aquí** si ayuda a la función inductiva de una slide.

## Personajes (SVGs)

Los cinco personajes son componentes React con SVG inline en [`src/components/pildoras-formativas/characters/`](../src/components/pildoras-formativas/characters/):

- `pilar-star.tsx` — estrella amarilla con variantes de pose (por ejemplo, `pose="hug"`).
- `flora-flower.tsx` — flor rosa.
- `vito-pill.tsx` — cápsula verde.
- `luna-moon.tsx` — luna morada.
- `chipi-spark.tsx` — chispa naranja.

Cada uno acepta `className` para ajustar tamaño y posición desde la slide que lo contiene.

## Consistencia entre píldoras

Lo que **se mantiene invariable** a lo largo de todas las píldoras:

- La paleta Little Movers (no se añaden colores nuevos).
- La asignación color ↔ personaje.
- Las dos fuentes (Archivo Black + Inter).
- Los cinco personajes con su forma y función.
- El click-to-reveal como mecánica de revelación.
- Las reglas de accesibilidad visual.

Lo que **cambia** de píldora a píldora:

- Contenido gramatical/funcional.
- Ejemplos concretos (siempre con personajes del libro de la unidad correspondiente).
- Mecánicas interactivas específicas (drag & drop, quiz, timer, clasificación, etc.).
- Mapeo concreto personaje ↔ slide.
