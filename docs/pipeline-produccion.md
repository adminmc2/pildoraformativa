# Pipeline de producción de Píldoras Formativas

> Documento ejecutable por agentes. Cada fase produce artefactos concretos que alimentan la siguiente. El objetivo es que un agente pueda generar una píldora completa a partir de un brief.

## Arquitectura de referencia (píldora 3.1)

```
app/pildoras-formativas/3-1/page.tsx    ← página principal (SLIDES array + layout)
src/components/pildoras-formativas/
  slides/slide-opening.tsx              ← portada (reutilizable, parametrizar título)
  slides/slide-cierre.tsx               ← cierre (reutilizable, parametrizar título)
  slides/slide-pilar-*.tsx              ← slides Pili (3 en 3.1)
  slides/slide-flora-*.tsx              ← slides Flora (3 en 3.1)
  slides/slide-vito-*.tsx               ← slides Vito (2 en 3.1)
  slides/slide-luna-*.tsx               ← slides Luna (3 en 3.1)
  slides/slide-desafio-b.tsx            ← slide Chipi (1 en 3.1)
  characters/*.tsx                      ← 5 personajes SVG (NO se modifican)
  shared/character-stage.tsx            ← wrapper personaje + burbuja (NO se modifica)
```

## Qué es fijo vs. qué cambia

### FIJO (nunca se toca)

| Elemento | Archivo | Nota |
|---|---|---|
| 5 personajes SVG | `characters/*.tsx` | Mismas poses, mismos colores |
| CharacterStage + burbujas | `shared/character-stage.tsx` | Animaciones entrada/float |
| Paleta de colores CSS | `globals.css` (variables `--color-pf-*`) | Un color por personaje |
| Tipografías | Archivo Black display + Inter UI | Variables CSS |
| Slide Opening (estructura) | `slides/slide-opening.tsx` | Solo cambiar título/unidad |
| Slide Cierre (estructura) | `slides/slide-cierre.tsx` | Solo cambiar título/unidad |
| Layout de página | Header + main + footer + navegación | Igual en todas |
| Intro de personajes (#1-#5) | Solo en píldora 3.1 | **NO se usan en píldoras posteriores** |

### VARIABLE (cambia por píldora)

| Elemento | Qué cambia | Ejemplo en 3.1 |
|---|---|---|
| Título gramatical | Opening, header, cierre | "Los Posesivos" |
| Unidad/referencia libro | Opening, cierre | "Unidad 3 · La Familia" |
| Páginas del libro | Header, brief | "pp. 38-41" |
| Datos de contenido | Arrays dentro de cada slide | `PHRASES[]`, `ITEMS[]`, `ROUNDS[]` |
| Diálogos de personajes | Arrays `BUBBLES[]` en cada slide | Burbujas de Flora, Vito, etc. |
| Nº de slides por personaje | Cuántas slides tiene cada agente | Pili×3, Flora×3, Vito×2, Luna×3, Chipi×1 |
| Mecánica de cada slide | Qué componente UI se usa | Terminal, drag-drop, quiz, spinner... |

---

## Las 5 fases del pipeline

### FASE 0 — Brief de entrada

**Input:** documento `docs/brief-X.Y.md`
**Quién lo crea:** el usuario (humano)
**Formato obligatorio:**

```markdown
# Brief — Píldora formativa X.Y (Gramática UXX)

## Metadatos
- Unidad: [número y nombre]
- Tema gramatical: [fenómeno central]
- Páginas del libro: [rango]
- Personajes del libro que aparecen: [lista con relaciones]

## Fenómeno gramatical
[Explicación del punto gramatical que el alumno debe descubrir]

## Conocimiento previo del alumno
[Qué ha visto antes en el libro, qué formas ya conoce por exposición]

## Errores frecuentes por L1
[Interferencias previsibles según la lengua materna]

## Idea pedagógica central
[La "regla" que el alumno debe inducir — nunca se da explícitamente]

## Frases del libro (input real)
[Frases literales de las páginas del libro que sirven como material base]

## Restricciones específicas
[Cualquier limitación particular de esta píldora]
```

**Referencia:** ver `docs/brief-3.1.md` como ejemplo completo.

---

### FASE 1 — Agente de Contenido

**Input:** `brief-X.Y.md` + `docs/03-personajes.md` + `docs/04-estructura-pildora.md`
**Output:** archivo `src/data/pildora-X-Y.ts` con todos los arrays de datos

**Instrucciones para el agente:**

1. Leer el brief completo y los docs de referencia.
2. Diseñar la secuencia MARS EARS (orientativa, no rígida):
   - **Pili** (2-3 slides): Hook + Modelling — frases del libro con gramática resaltada
   - **Flora** (2-3 slides): Awareness — contrastes y pares mínimos para inducir el patrón
   - **Vito** (1-2 slides): Worked example — razonamiento paso a paso
   - **Luna** (2-3 slides): Verificación — quiz, comprobación contra el libro
   - **Chipi** (1 slide): Desafío — gamificación por equipos
3. Para cada slide, generar la estructura de datos correspondiente.

**Esquemas de datos por personaje:**

```typescript
// ── PILI: frases con gramática resaltada ──
type PiliPhrase = {
  id: string;
  text: string;           // frase completa
  highlight: string;      // palabra/s a resaltar (gramática diana)
  owner: string;          // poseedor o sujeto
  question?: string;      // pregunta inductiva opcional
};

// ── FLORA: pares contrastivos ──
type FloraContrast = {
  id: string;
  pair: [string, string]; // dos frases que difieren en el punto gramatical
  question: string;       // "¿Qué cambia?"
  insight: string;        // lo que el alumno debe notar
};

// ── VITO: pasos del worked example ──
type VitoStep = {
  id: string;
  prompt: string;         // pregunta del paso ("¿Quién tiene?")
  options?: string[];      // opciones si hay elección
  answer: string;         // respuesta correcta
  explanation: string;    // por qué (se muestra tras acertar)
};

// ── LUNA: preguntas de verificación ──
type LunaQuestion = {
  id: string;
  sentence: string;       // frase incompleta "_____ hermano se llama Carlos"
  blank: string;          // posición del hueco
  options: string[];      // opciones de respuesta
  correct: number;        // índice de la correcta
  feedback?: string;      // feedback si falla
};

// ── CHIPI: rondas del desafío ──
type ChipiRound = {
  id: string;
  sentence: string;       // frase con hueco
  options: string[];      // A, B, C
  correct: number;        // índice correcto
  hint?: string;          // pista si fallan
};
```

**Reglas de contenido:**
- Solo personajes reales del libro (nunca nombres inventados)
- Vocabulario 100% A1.1 conocido por el alumno
- Enunciados: imperativo, máximo 12 palabras, verbos: lee, mira, elige, compara, clasifica, completa
- Mínimo 6 ítems por actividad de práctica (Luna, Chipi)
- La regla gramatical NUNCA se da explícitamente — se induce

---

### FASE 2 — Agente Scaffold

**Input:** datos de Fase 1 + estructura de `app/pildoras-formativas/3-1/page.tsx` como referencia
**Output:** `app/pildoras-formativas/X-Y/page.tsx` + slides nuevos

**Instrucciones para el agente:**

1. Crear la carpeta `app/pildoras-formativas/X-Y/`
2. Generar `page.tsx` con esta estructura (SIN intros de personaje):

```typescript
// Template: píldora X.Y (post-3.1, sin intros de personaje)
const SLIDES: Slide[] = [
  { kind: "opening", step: "PORTADA", bg: "#FAF6EC" },
  // ── PILI (hook + modelling) ──
  { kind: "pili1",   step: "#01", bg: "#FAF6EC" },
  { kind: "pili2",   step: "#02", bg: "#FAF6EC" },
  // ── FLORA (awareness) ──
  { kind: "flora1",  step: "#03", bg: "#E8F5E0" },
  { kind: "flora2",  step: "#04", bg: "#E8F5E0" },
  // ── VITO (worked example) ──
  { kind: "vito1",   step: "#05", bg: "var(--color-pf-pill-soft)" },
  // ── LUNA (verificación) ──
  { kind: "luna1",   step: "#06", bg: "var(--color-pf-moon-soft)" },
  { kind: "luna2",   step: "#07", bg: "var(--color-pf-moon-soft)" },
  // ── CHIPI (desafío) ──
  { kind: "desafio", step: "#08", bg: "#2d1508" },
  // ── CIERRE ──
  { kind: "cierre",  step: "#09", bg: "#FAF6EC" },
];
```

3. Parametrizar `slide-opening.tsx` y `slide-cierre.tsx`:
   - Pasar como props: `title`, `subtitle`, `unit`, `book`
   - O duplicar con las cadenas correctas si los componentes actuales están hardcoded

4. Crear los archivos de slides en `src/components/pildoras-formativas/slides/`:
   - Reutilizar componentes existentes si la mecánica es la misma (ej: `SlideDesafioB` solo cambiando `ROUNDS`)
   - Crear nuevos si la dinámica es diferente
   - Nombrar como `slide-[personaje]-[pieza]-[pildora].tsx` (ej: `slide-flora-1-4-1.tsx`)

5. Actualizar `app/page.tsx` (landing):
   - Añadir la nueva píldora al array `UNITS[].pildoras[]`
   - Generar preview image

**Colores de fondo por personaje:**
| Personaje | bg soft |
|---|---|
| Pili | `#FAF6EC` |
| Flora | `#E8F5E0` |
| Vito | `var(--color-pf-pill-soft)` / `#DCEDC8` |
| Luna | `var(--color-pf-moon-soft)` / `#E9E5FF` |
| Chipi | `#2d1508` (dark) |

---

### FASE 3 — Agente de Slides

**Input:** datos de Fase 1 + scaffold de Fase 2 + componentes existentes como referencia
**Output:** slides completos y funcionales

**Instrucciones para el agente:**

Para cada slide, seguir este patrón:

1. **Importar** CharacterStage + personaje correspondiente + UI necesaria
2. **Definir datos** (PHRASES, ITEMS, etc.) al inicio del archivo
3. **Estado local** con `useState`: `step`, `phase`, `answered[]`, `score`
4. **Click-to-reveal**: cada clic en "Siguiente" avanza `step`, revelando más contenido
5. **Personaje en lateral**: CharacterStage con burbuja que cambia según el step

**Referencia de mecánicas reutilizables:**

| Mecánica | Componente de referencia | Cuándo usar |
|---|---|---|
| Reveal progresivo de frases | `slide-pilar-1.tsx` | Modelling, primeras exposiciones |
| Clasificar en categorías | `slide-pilar-2.tsx` | Clasificaciones binarias (sg/pl, masc/fem) |
| Cards expandibles | `slide-flora-1.tsx` | Comparar propietarios, contextos |
| Contraste A vs B | `slide-flora-2.tsx` | Pares mínimos, notar diferencias |
| Morphing text animado | `slide-flora-3.tsx` | Transformaciones de formas (conjugaciones, concordancia) |
| Terminal paso a paso | `slide-vito-1.tsx` | Razonamiento lógico con pasos |
| Selección con color | `slide-vito-2.tsx` | Elegir entre formas (género, número) |
| Quiz múltiple choice | `slide-luna-1.tsx` | Verificación rápida de comprensión |
| Spinner/ruleta | `slide-luna-2.tsx` | Práctica aleatoria con suspense |
| Caja fuerte (equipos) | `slide-desafio-b.tsx` | Gamificación final por equipos |

**Reglas de código:**
- Texto mínimo: 16px, enunciados: 18px, dentro de contenedores: 15px
- Gramática diana resaltada con `<span className="italic" style={{ color: "var(--color-pf-spark)" }}>`
- Colores de género: masculino → `var(--color-pf-moon)` (#7C5CFF), femenino → `var(--color-pf-flower)` (#E91FCE)
- Si un elemento no cabe legible → reorganizar layout, NUNCA reducir texto
- Usar `clamp()` para responsividad: `clamp(18px, 2.4vh, 30px)`

---

### FASE 4 — Agente de Diálogos

**Input:** slides de Fase 3 + `docs/03-personajes.md`
**Output:** arrays BUBBLES[] en cada slide

**Instrucciones para el agente:**

Generar las burbujas de diálogo coherentes con cada personaje. Las burbujas son `ReactNode[]` (no strings), porque citan gramática diana con `<P>`.

**Registro por personaje:**

| Personaje | Tono | Ejemplos | NUNCA dice |
|---|---|---|---|
| Pili | Cálida, cercana | "¿Os acordáis?", "Abrimos juntos", "¡Vamos!" | Preguntas inductivas, reglas |
| Flora | Curiosa, inductiva | "Mira esto", "¿Qué cambia?", "¿Lo ves?" | La respuesta, explicaciones directas |
| Vito | Metódico, claro | "Primero…", "Después…", "Por eso…" | Preguntas abiertas, ambigüedad |
| Luna | Reflexiva, verificadora | "Comprobamos", "¿Y si…?", "¿Seguro?" | Dar la respuesta sin verificar |
| Chipi | Enérgica, retadora | "¡A jugar!", "¡Tu turno!", "¡Rápido!" | Explicaciones largas, reflexiones |

**Formato de burbuja con gramática diana:**
```tsx
const BUBBLES: ReactNode[] = [
  <>¡Mirad! Todos dicen <P>su</P> hermano.<br/>¿Cambia algo?</>,
  <>¡Bien! <P>Su</P> no cambia con la persona.</>,
];
// donde <P> = <span className="italic" style={{ color: "var(--color-pf-spark)" }}>
```

**Reglas:**
- Máximo 1 línea por burbuja (2 si hay salto `<br/>`)
- Nunca dos personajes hablando a la vez
- La burbuja cambia con el `step` del slide
- Si cita gramática diana → obligatorio usar `<P>`

---

### FASE 5 — Agente QA

**Input:** píldora completa + docs de referencia
**Output:** informe de validación + correcciones

**Checklist obligatorio:**

```
□ BUILD: `npm run build` sin errores
□ LINT: sin warnings de TypeScript
□ ACCESIBILIDAD:
  □ Todo texto ≥ 16px
  □ Enunciados ≥ 18px
  □ Texto en contenedores ≥ 15px
  □ Contraste suficiente (texto sobre fondos claros/oscuros)
□ COHERENCIA VISUAL:
  □ Gramática diana siempre con <P> (cursiva + color)
  □ Colores de género correctos (masc=moon, fem=flower)
  □ Fondo de slide = color soft del personaje activo
  □ Un solo personaje en primer plano por slide
□ COHERENCIA DIDÁCTICA:
  □ Flora NUNCA da la respuesta
  □ Vito siempre razona paso a paso
  □ Luna siempre verifica, no enseña
  □ Chipi solo gestiona el juego
  □ Pili solo abre y cierra
  □ Regla gramatical NO aparece explícita en ningún slide
  □ Solo personajes del libro (no nombres inventados)
  □ Vocabulario 100% A1.1
□ NAVEGACIÓN:
  □ Opening → slides contenido → cierre (sin intros de personaje)
  □ Header muestra "PÍLDORA FORMATIVA X.Y" + subtítulo
  □ Botón volver → landing
  □ Footer con prev/next funcional
□ LANDING:
  □ Nueva píldora aparece en la tarjeta de unidad correspondiente
  □ Modal con preview + Presentar + Guía PDF
□ VERSIONADO:
  □ Versión incrementada en header
  □ CHANGELOG.md actualizado
```

---

## Ejecución rápida (resumen para agentes)

```
1. Leer: brief-X.Y.md + 03-personajes.md + 04-estructura-pildora.md + 05-estilos-diseno.md
2. Estudiar: app/pildoras-formativas/3-1/page.tsx + todos los slides en slides/
3. Generar datos: arrays PHRASES, ITEMS, STEPS, QUIZ, ROUNDS
4. Crear scaffold: page.tsx + imports (sin intros de personaje)
5. Construir slides: uno por uno, reutilizando mecánicas existentes
6. Escribir diálogos: BUBBLES[] coherentes con cada personaje
7. Validar: build + lint + checklist QA completo
8. Actualizar landing: añadir píldora a UNITS + preview image
9. Versionar: incrementar versión + CHANGELOG
```

## Notas importantes

- **Slides de intro de personajes** (los 5 que presentan a Pili, Flora, Vito, Luna, Chipi): **solo existen en la píldora 3.1**. A partir de la 3.2 el alumno ya los conoce. No se incluyen.
- **Opening y cierre**: misma estructura visual, solo cambia el título gramatical y la referencia a la unidad.
- **Máximo 10 slides de contenido** (sin contar opening/cierre). Si sobra contenido, se prioriza y se recorta.
- **El cuadro gramatical del libro** es punto de llegada, no de partida. Se referencia al final como confirmación.
