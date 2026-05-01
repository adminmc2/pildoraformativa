# Changelog

## v0.66 — 2026-05-01

### slide-vito-1 (3.2 #05) — Tabla: tamaño + cabecera fija + scrollbar
- Filas (texto principal de la actividad): `clamp(20-24)` → `clamp(26-36)` (nivel diana)
- Hint: eliminada cursiva, opacidad subida 0.5 → 0.6 (legibilidad)
- Cabecera "MARTA DICE… → TÚ ESCRIBES…" ahora **fija arriba** (`flex-shrink-0`)
- Filas en bloque scrollable independiente (`flex-1 min-h-0 overflow-y-auto`)
- Scrollbar custom visible siempre (clase `table-scroll`, mismo patrón que email de slide-pili-1)
- 3.1 v0.39 → v0.40, 3.2 v0.39 → v0.40

## v0.65 — 2026-05-01

### slide-vito-1 (3.2 #05) — Auditoría a11y + responsive según convención
- `<C>` → `<V>` (componente + 7 BUBBLES) — coherente con convención global
- Todos los `text-[clamp(...)]` Tailwind → inline `style={{ fontSize }}` (Turbopack-safe)
- Badge "Método": 16px → `clamp(18px, 1.3vw, 20px)`
- h1: `clamp(30,...,56)` → `clamp(36px, 4.5vw, 56px)` (mín título 36)
- Instrucción: subida a `clamp(24px, 1.8vw, 32px)` (mín enunciado 24)
- Botones nav: `text-base` → `clamp(20px, 1.6vw, 24px)` + `min-h-[44px]` en SIGUIENTE + `focus-visible:ring`
- Tabla: `overflow-hidden` → `overflow-y-auto` + `maxHeight: 52vh` (patrón flora-1/2, evita desbordamiento en proyector 1280×720)
- `prefers-reduced-motion` añadido a `<style jsx>`
- 3.1 v0.38 → v0.39, 3.2 v0.38 → v0.39

## v0.64 — 2026-04-30

### Píldora 3.2 — Slide #04 BLOQUEADA
- slide-flora-2 marcada como bloqueada en memoria del proyecto
- No se modifica sin permiso explícito del usuario

## v0.63 — 2026-04-30

### slide-flora-2 (3.2 #04) — 3 fixes según revisión
1. **Layout (crítico)**: email card con `maxHeight: 52vh` + `overflow-y-auto` (mismo patrón que slide-flora-1) → en proyector 1280×720 con fase 2 ya no desborda; el banco de piezas y CONTINUAR siempre visibles
2. **Accesibilidad**: añadido `onKeyDown` (Enter/Space) en segmentos clicables (fase 1) y huecos (fase 2) — alumnos con teclado ahora pueden interactuar
3. **Pedagógico**: CORRECT_FB recortados a ~10 palabras máx para A1.1
   - `y`: 14→7 palabras
   - `hermanos`: 15→8
   - `ytambien`: 11→8
   - `curso`: 12→8
   - `deberes`: 15→8
- 3.1 v0.37 → v0.38, 3.2 v0.37 → v0.38

## v0.62 — 2026-04-30

### slide-flora-2 (3.2 #04) — Correcciones de feedback
- "Hoy te hablo de mi familia:" CORRECT_FB: eliminada referencia incorrecta a "tema principal" (hay 3 temas, no es el principal). Ahora dice solo: *"¡Sí! Esta frase abre el tema de la familia."*
- `lastCorrectP1` ya no se resetea al cambiar de frase → CORRECT_FB rico (cita + explicación) persiste hasta el siguiente intento
- Eliminado fallback genérico `"Faltan X. Seguid."` (era confuso). Ahora cuando el usuario selecciona otra frase tras acertar:
  - Si tiene activa una parte: *"¿Qué función tiene?"*
  - Si no: *"Pulsad otra parte subrayada."*
- Generalización "frase" → "parte" en textos genéricos (porque "y", "y también" son palabras/conectores, NO frases). Las referencias específicas a segmentos que sí son frases (Hoy te hablo de…, ¿Y tú…?) mantienen "frase".
- Título del slide: "¿Para qué sirve cada frase?" → "¿Para qué sirve cada parte?"
- 3.1 v0.36 → v0.37, 3.2 v0.36 → v0.37

## v0.61 — 2026-04-30

### slide-flora-2 (3.2 #04) — Feedback fase 1 personalizado por segmento
- Errores en fase 1 ahora citan la frase del alumno y formulan pregunta contrastiva o pista estructural
  - **WRONG_HINT_L1** (1er fallo): cita la frase + pregunta entre 2 funciones (sin revelar)
  - **WRONG_HINT_L2** (2º+ fallo): pista estructural/posicional (signo «?», inicio del bloque, antes/después de «y»)
- Aciertos en fase 1 reutilizan **CORRECT_FB** existente (cita + explicación pedagógica)
- 7 hints L1 + 7 hints L2 + 7 CORRECT_FB, uno por cada grupo de segmento (hoy, y, hermanos, instituto, ytambien, curso, deberes)
- Fallback genérico si el segmento no tiene hint específico
- 3.1 v0.35 → v0.36, 3.2 v0.35 → v0.36

## v0.60 — 2026-04-30

### slide-flora-2 (3.2 #04) — Retroalimentación correcta/incorrecta en fase 1
- Antes: al elegir función incorrecta solo había shake visual, la burbuja no reaccionaba
- Ahora: feedback inmediato pili-style en la burbuja, según convención global
  - **Acierto**: `¡Correcto! Faltan {N}. Seguid.` / `¡Casi! Falta una.` / `¡Vais bien! Faltan {N}.`
  - **Error L1**: `Mmm, esa frase no es {función elegida}. Inténtalo otra vez.` (sin revelar la correcta)
  - **Error L2+**: `Mmm, leed la frase otra vez. ¿Qué hace en el correo?` (cuestiona)
- Estados nuevos: `wrongPick`, `wrongCountP1`, `lastCorrectP1`
- `handlePhraseClick` resetea estos estados al cambiar de frase
- `stepKey` actualizado para que la burbuja se anime con cada interacción
- 3.1 v0.34 → v0.35, 3.2 v0.34 → v0.35

## v0.59 — 2026-04-30

### slide-flora-2 (3.2 #04) — Auditoría feedback según convención global
- **Fase 1 progreso**: conteo seco `"X de Y... ¡Seguid!"` → acks variados según items que faltan (`¡Casi!`, `¡Bien!`, `¡Vais bien!` + número que falta)
- **Fase 1 cierre**: `"¿Y si las quitamos?"` (confuso) → `"Ahora veréis lo que pasa sin ellas."` (claro)
- **Fase 2 error función distinta**: REVELABA la función correcta del hueco → ahora cuestiona sin revelar (`"...pero este hueco pide otra cosa. Buscad otro hueco."`)
- **Fase 2 error misma función**: ligero refinamiento `"Sí es..."` → `"Es..."`
- 3.1 v0.33 → v0.34, 3.2 v0.33 → v0.34

## v0.58 — 2026-04-30

### Convención global de feedback de personajes
- Nueva sección "Convención de feedback de personajes" en `CLAUDE.md` root: estructura por estado, vocabulario obligatorio (imperativo plural), acks positivos/negativos, resaltado `<V>`, adaptatividad por progreso, reglas duras de contenido pedagógico
- `slide-flora-1.tsx` declarado **referencia canónica** de implementación adaptativa
- slide-flora-1: imperativo singular `Mira` → plural `Mirad` (7 ocurrencias) — coherente con pili-1/pili-2 (closed slides)
- 3.1 v0.32 → v0.33, 3.2 v0.32 → v0.33

## v0.57 — 2026-04-30

### Píldora 3.2 — slide-flora-2 (#04): accesibilidad + V/P + tamaño texto email
- **Tailwind clamp → inline `style={{ fontSize }}`**: todos los `text-[clamp(...)]` convertidos (badge FLORA, leyenda, email, barra respuesta, contadores, dots huecos, botones)
- **Badge "Observadora"**: `text-base` (16px) → `clamp(18px, 1.3vw, 20px)` — cumple mínimo accesibilidad
- **h1**: `clamp(30px,min(...))` → `clamp(36px, 4.5vw, 56px)` — igual que flora-1
- **`<C>` → `<V>`**: componente redefinido (naranja bold sin cursiva); 18 usos en PIECE_HINT, CORRECT_FB y bubble
- **Botones `min-h-[44px]`**: EMPEZAR, CONTINUAR, funciones (×3), banco piezas
- **`@media (prefers-reduced-motion: reduce)`** añadido a `<style jsx>`
- **Texto email**: `clamp(20px, 1.6vw, 24px)` → `clamp(23px, 1.9vw, 28px)` — coherente con slide-flora-1
- slide-flora-1: font size email subido a `clamp(23px, 1.9vw, 28px)` (intermedio entre versiones anteriores)
- 3.1 v0.31 → v0.32, 3.2 v0.31 → v0.32

## v0.56 — 2026-04-30

### Píldora 3.2 — Slides #01, #02, #03 BLOQUEADAS
- slide-pili-1, slide-pili-2 y slide-flora-1 marcadas como bloqueadas en memoria del proyecto
- No se modifican sin permiso explícito del usuario
- Cualquier auditoría/refactor que afecte a estos slides requiere confirmación previa

## v0.55 — 2026-04-30

### Píldora 3.2 — slide-flora-1: feedback adaptativo + "email" → "correo electrónico" en toda la presentación
- **slide-flora-1**:
  - Feedback adaptativo de error (L1 cuestiona elección, L2 pista espacial) según items que faltan por identificar
  - Feedback positivo diferenciado por progreso (cuántos llevan, cuántos faltan)
  - Solo falta firma → "¿Quién escribe el correo electrónico?" (antes "Falta el nombre del autor")
  - Etiqueta de categoría: "Email" → "Correo electrónico"
  - Todas las burbujas: "email/emails" → "correo electrónico/correos electrónicos"
- **slide-pili-2**: burbujas, título, instrucciones — "email" → "correo electrónico"
- **slide-flora-2**: burbujas — "email" → "correo electrónico"
- **slide-luna-1**: burbujas, título — "email" → "correo electrónico"
- **slide-chipi**: instrucciones de juego y badge — "email" → "correo electrónico" / "correos"
- 3.1 v0.30 → v0.31, 3.2 v0.30 → v0.31

## v0.54 — 2026-04-29

### slide-pili-2 (3.2) — Texto CUERPO completo + scroll en EMAIL + fix cursiva burbujas
- Slot EMAIL: muestra todas las `lines[]` del bloque colocado (no solo `lines[0] + "…"`)
- Columna EMAIL: `maxHeight: 48vh` + `overflow-y-auto` — scroll aparece solo cuando el contenido desborda; header fijo, slots scrollean
- Burbujas de Pili: `<C>` renombrado a `<P>` (cursiva + naranja, solo para citas gramaticales); añadido `<V>` (naranja bold sin cursiva) para énfasis genérico; todas las burbujas de pili-2 usan `<V>`
- 3.1 v0.29 → v0.30, 3.2 v0.29 → v0.30

## v0.53 — 2026-04-29

### slide-pili-2 (3.2) — Layout responsive: scroll solo en PIEZAS
- Revertido `height: calc(100vh - 80px)` de columna izquierda: layout vuelve a comportamiento natural centrado (igual que slide-pili-1)
- `BLOCKS.preview` → `BLOCKS.lines[]`: CUERPO con 4 párrafos completos reales del email de Marta
- Columna PIEZAS: `maxHeight: 48vh` + `overflow-y-auto`; scroll aparece solo cuando el contenido (CUERPO) desborda
- EMAIL y personaje Pili no tienen restricciones de altura; se centran verticalmente de forma natural
- 3.1 v0.28 → v0.29, 3.2 v0.28 → v0.29

## v0.52 — 2026-04-29

### slide-pili-1 (3.2) — Bloqueada
- Añadido comentario de bloqueo al inicio del archivo: no modificar sin permiso explícito

### slide-pili-2 (3.2) — Accesibilidad y responsive completo
- Todos los `text-[clamp(X,min(Y,Z),W)]` de Tailwind convertidos a inline `style={{ fontSize }}` (patrón Turbopack-safe)
- Enunciado instrucción: `clamp(24px, 1.8vw, 32px)` (mín 24px según guía)
- Título h1: `clamp(40px, 4.5vw, 72px)`
- Botón SIGUIENTE: `clamp(22px, 1.6vw, 28px)`
- Labels email/piezas: `clamp(20px, 1.5vw, 26px)`
- Preview (secundario): `clamp(18px, 1.3vw, 22px)`
- Número de posición: `w-8 h-8` (32px) en lugar de `w-6 h-6` (24px)
- 3.1 v0.27 → v0.28, 3.2 v0.27 → v0.28

## v0.51 — 2026-04-29

### slide-pili-1 (3.2) — Email: separación etiquetas y altura máxima
- `gap-x-4` → `gap-x-7` (16px → 28px): más separación entre etiquetas DE/PARA/ASUNTO y contenido del correo
- `max-h-[68vh]` → `max-h-[62vh]`: altura máxima reducida ~6vh para que el email no se extienda tanto
- Contenedor con scroll: `flex flex-col`, header `flex-shrink-0`, cuerpo `flex-1 overflow-y-auto` con scrollbar personalizada
- `character-stage.tsx`: font-size a inline style para evitar conflictos con Turbopack (`clamp(24px, 1.8vw, 38px)`)
- 3.1 v0.26 → v0.27, 3.2 v0.26 → v0.27

## v0.50 — 2026-04-29

### Portada (SlideOpening / slide 0) — bloqueada
- Botón "Empezar" finalizado: `fontSize: clamp(26px, 3vw, 40px)`, padding `px-10 py-3.5 md:px-16 md:py-5`
- **Slide 0 (portada) bloqueada**: no se modifica sin permiso explícito del usuario
- Memoria del proyecto actualizada con la nueva regla de bloqueo
- 3.1 v0.25 → v0.26, 3.2 v0.25 → v0.26

## v0.49 — 2026-04-29

### Portada — Fix botón Empezar (Tailwind no procesaba clamp anidado)
- Tailwind `text-[clamp(32px,min(4vw,5vh),56px)]` no se compilaba con Turbopack en algunos casos (clamp con min anidado)
- Cambiado a inline `style={{ fontSize: "clamp(32px, 4vw, 56px)" }}` — funciona siempre
- 3.1 v0.24 → v0.25, 3.2 v0.24 → v0.25

## v0.48 — 2026-04-29

### Portada — Botón "Empezar" mucho más grande y prominente
- Tamaño texto: `clamp(22-32px)` → `clamp(32-56px)`
- Padding: `px-8 py-3 md:px-14 md:py-5` → `px-12 py-4 md:px-20 md:py-6`
- Aplica a las dos píldoras (3.1 y 3.2 usan SlideOpening compartido)
- 3.1 v0.23 → v0.24, 3.2 v0.23 → v0.24

## v0.47 — 2026-04-29

### Accesibilidad — Dislexia: revertido font-size-adjust (encogía Lexend)
- El `font-size-adjust: 0.46` añadido en v0.46 estaba reduciendo Lexend al ~85% de su tamaño natural (Lexend tiene x-height mayor que la referencia, así que el adjust lo encogía)
- Eliminado el ajuste — Lexend ahora renderiza a su tamaño natural, ligeramente mayor que Inter, lo cual mejora la legibilidad en dislexia (deseable)
- 3.1 v0.22 → v0.23, 3.2 v0.22 → v0.23

## v0.46 — 2026-04-29

### Accesibilidad — Dislexia: normalizar tamaños con font-size-adjust
- Lexend tiene mayor x-height que Inter, lo que hacía que los clamp() ya validados se vieran sobredimensionados en modo dislexia (rompía layouts y burbujas de personajes)
- Añadido `font-size-adjust: 0.46` en `.dyslexia-mode *` → normaliza la x-height visual a la de Inter, así los criterios de tamaño se mantienen válidos sin tocar slides individuales
- Aplica a TODO el proyecto (todos los slides, todas las píldoras) sin ediciones por slide
- 3.1 v0.21 → v0.22, 3.2 v0.21 → v0.22

## v0.45 — 2026-04-29

### Accesibilidad — Dislexia: anular all-caps en modo dislexia
- BDA Style Guide 2018 advierte: las mayúsculas dificultan la lectura en dislexia (todas las letras son rectángulos uniformes, sin "forma de palabra")
- CSS `.dyslexia-mode` ahora añade `text-transform: none !important` (anula cualquier `uppercase` decorativo de títulos, badges, etc.)
- Reforzada regla AC-DX8 en `docs/CLAUDE-responsive-accesibilidad.md` con cita textual de BDA
- 3.1 v0.20 → v0.21, 3.2 v0.20 → v0.21

## v0.44 — 2026-04-29

### Accesibilidad — Dislexia: OpenDyslexic → Lexend + principios BDA
- **Reemplazado OpenDyslexic por Lexend** (Google Fonts vía next/font): soporte completo de acentos del español, validación empírica más sólida
- Desinstalado `@fontsource/opendyslexic`
- CSS `.dyslexia-mode`: añadidos ajustes según British Dyslexia Association
  - `letter-spacing: 0.02em` (+5-10%)
  - `line-height: 1.5` en p, span, div, li
  - `font-style: normal !important` (anula cursivas)
- Nueva sección "Dislexia" en `docs/CLAUDE-responsive-accesibilidad.md` con 14 reglas (AC-DX1..14): tipografía, color, layout, alineación, estructura
- 3.1 v0.19 → v0.20, 3.2 v0.19 → v0.20

## v0.43 — 2026-04-29

### Accesibilidad — DyslexiaToggle: visible en portada + cascada efectiva
- Toggle ahora añade clase `.dyslexia-mode` a `<html>` (cascada total, prioridad sobre Tailwind)
- CSS: redefine variables `--font-pf-display` y `--font-pf-ui` cuando el modo está activo
- Variante `fixed` del toggle (posición absoluta arriba-izquierda) para slides sin header (portada)
- Aplicado en píldoras 3.1 y 3.2 — el botón aparece desde slide 0
- 3.1 v0.18 → v0.19, 3.2 v0.18 → v0.19

## v0.42 — 2026-04-29

### Accesibilidad — Toggle de modo dislexia (revertido global, ahora opt-in)
- Revertido cambio global de fuente a Archivo Black + Inter (apariencia anterior preservada)
- Nuevo componente `DyslexiaToggle` (icono `TextAa` al lado del botón Home)
- Al activarlo, añade clase `.dyslexia-mode` al shell y aplica OpenDyslexic
- Estado persistido en `localStorage` (`pf-dyslexia-mode`)
- Botón con `aria-pressed`, `aria-label` y focus-visible accesibles
- Aplicado en píldoras 3.1 y 3.2 (mismo botón, mismo comportamiento)
- 3.1 v0.17 → v0.18, 3.2 v0.17 → v0.18

## v0.41 — 2026-04-29

### Accesibilidad — Fuente OpenDyslexic global
- Instalado `@fontsource/opendyslexic` (peso 400 + 700)
- `--font-pf-display` y `--font-pf-ui` ahora usan OpenDyslexic como primaria, con Archivo Black / Inter como fallback
- Aplica a TODAS las píldoras y al shell de presentación (sin tocar slides individuales — usan las CSS variables)
- Píldora 3.1: v0.16 → v0.17
- Píldora 3.2: v0.16 → v0.17

## v0.40 — 2026-04-27

### Píldora 3.2 — Slide #01 (Pili 1) — Email completo + regla tipográfica
- Email de Marta restaurado al modelo Flora-2 completo (familia, instituto, curso, pregunta)
- Helper `noOrphanY`: aplica non-breaking space tras conjunciones (y, o, u, e) para que nunca queden al final de línea al hacer wrap
- Píldora 3.2: v0.15 → v0.16

## v0.39 — 2026-04-27

### Píldora 3.2 — Slide #01 (Pili 1) — Refinamiento bocadillos + email
- Lógica de feedback con 3 estados (correcto / parcial / wrong) en lugar de binario
- Bocadillo parcial sin indicar número de categorías que faltan
- Bocadillos sin nombre de ítem (más naturales)
- Email de Marta (fase 2) con formato correo: etiquetas al lado de cada sección
- Email body text: 20-24px → 22-28px (más legible en proyector)
- Etiquetas laterales: 16-18px → 18-22px, con textColor accesible (≥4.5:1)
- Píldora 3.2: v0.14 → v0.15

## v0.38 — 2026-04-27

### Footer global (3.1 y 3.2) — Botón "Anterior diapositiva"
- Botón "Anterior diapositiva" ahora con fondo negro (ink) + texto blanco — mismo estilo que el botón "Siguiente diapositiva" para mejor contraste y simetría
- Píldora 3.1: v0.15 → v0.16
- Píldora 3.2: v0.13 → v0.14

## v0.37 — 2026-04-27

### Píldora 3.2 — Slide #01 (Pili 1) — Auditoría a11y + reescritura
- Mini-botones de categoría: 28→36px (+focus-visible, disabled state visible)
- Badge "Anfitriona": 16px → clamp(18-20px)
- Verde Chat: #16A34A → #15803D (mejor contraste)
- Foco visible en todos los botones, prefers-reduced-motion respetado
- Eliminada fase 0 (slide arranca directamente con contenido)
- Botón "Siguiente" siempre visible, deshabilitado hasta completar
- Enunciado: 20-24px → 24-32px (cumple criterio enunciados)
- Retroalimentación añadida en burbujas (acierto/error con nombre de ítem)
- Reescritos diálogos: "email" → "correo electrónico" en toda la diapositiva
- Componente highlight: cursiva eliminada (solo naranja+bold para destacar; cursiva queda solo para citas gramaticales)

### Documentación
- Nuevas reglas en CLAUDE.md root sobre uso de `<P>` (cita gramatical, cursiva+naranja) vs `<V>` (énfasis, solo naranja sin cursiva)

### Footer global (3.1 y 3.2)
- Botones "Anterior" / "Siguiente" en **bold** (mejor contraste visual)
- Texto: "← Anterior diapositiva" / "Siguiente diapositiva →" para distinguir de otros botones internos de los slides

### Versiones
- Píldora 3.1: v0.14 → v0.15
- Píldora 3.2: v0.12 → v0.13

## v0.36 — 2026-04-27

### Accesibilidad y responsive — auditoría diapositiva 1 (SlideOpening)
- Nueva guía `docs/CLAUDE-responsive-accesibilidad.md` con criterios para laptop/TV/proyector
- Referenciada desde CLAUDE.md root
- SlideOpening: subido tamaño de preheader y badge a `clamp(18-22px)` (cumple mín 18px proyectable)
- SlideOpening: añadido `focus-visible` ring al botón "Empezar"
- SlideOpening: añadido bloque `prefers-reduced-motion` para apagar animaciones decorativas
- Versión píldora 3.2: v0.11 → v0.12

## v0.35 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Implementación de los 12 emails A1.1
- Reemplazada toda la data `EMAILS` con los 12 emails aprobados (Laura, Carlos, Ana, Pablo, Sofía, Diego, Elena, Marcos, Lucía, Javier, María, Daniel)
- `LINKED_PAIRS` y `EMAIL_PARAGRAPHS` regenerados para los nuevos fragmentos
- Tipo `options` ahora `string[]` (acepta 2 opciones para V/F y 3 para MC)
- Preguntas de comprensión variadas: V/F en mayoría, MC en algunos
- Configuración variada por email: posición de conector, presencia/ausencia de pregunta inicial/final, número de fragmentos (8-11)
- Versión píldora 3.2: v0.10 → v0.11

## v0.34 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Reducción pool 16→12 propagada en todas las refs
- `slide-chipi.tsx`: comentario "DATA — 12 emails" + opciones de rondas `[3,5,8,10,12]`
- `brief-3.2.md`: pool 12, opciones rondas 12
- `CLAUDE-escritura-emails-a11.md`: referencias actualizadas a 12 emails

## v0.33 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Email 12 (último) aprobado · pool reducido a 12

- Email 12 (Daniel→Leo, Alicante) integra 3 temas (familia + escuela + amigo) con dos conectores
- **Decisión: pool reducido de 16 a 12 emails** tras revisión exhaustiva con reglas A1.1 (vocabulario, conectores naturales, sin estereotipos, configuración variada)
- 12 emails aprobados y listos para implementar en `slide-chipi.tsx`

## v0.32 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Email 11 aprobado
- Email 11 (María→Sophie, Córdoba, mejor amiga Carla con dos conectores)

## v0.31 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Email 10 aprobado
- Email 10 (Javier→Paul, Toledo, horario instituto)

## v0.30 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Email 9 aprobado
- Email 9 (Lucía→Anna, Salamanca, hermana mayor universitaria Sara)
- Guía: lista de verbos A1.1 permitidos, prohibido pronombres átonos, prohibidos estereotipos (siesta, etc.)

## v0.29 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Email 8 aprobado
- Email 8 (Marcos→Hans, Zaragoza, profesor nuevo Roberto)
- Configuración: pregunta integrada en el abre tema, sin pregunta final separada

## v0.28 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Email 7 aprobado
- Email 7 (Elena→Julie, Málaga, amigo nuevo Bruno) con configuración distinta: sin pregunta inicial tras el saludo, solo conector `también`
- Guía: añadida regla de variación obligatoria en CONFIGURACIÓN (no en temas)

## v0.27 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Email 6 aprobado
- Email 6 (Diego→Lucas, Granada, escuela)
- Guía: prohibida estructura `un poco + adjetivo` (no A1.1)

## v0.26 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Refactor emails A1.1 (continúa)
- Aprobados emails 3 (Ana→Lisa, Barcelona, asignaturas), 4 (Pablo→Thomas, Valencia, amigos), 5 (Sofía→Emma, Bilbao, hermanos)
- Guía de escritura: añadidos temas válidos (familia/escuela/amigos), prohibidos `conmigo/contigo` (no A1.1), variedad obligatoria de tipos de pregunta de comprensión
- Versión píldora 3.2 → v0.10 (sin cambio, solo docs)

## v0.25 — 2026-04-27

### Píldora 3.2 — Slide #08 (Chipi) — Refactor de emails A1.1
- Aumentado el tamaño de letra del email en vista play/check y vista pregunta (mejor legibilidad)
- Iniciado refactor de los 16 emails con estructura natural A1.1 (saludo + abre tema + cuerpo con conectores y/también + pregunta paralela + despedida)
- Aprobados emails 1 (Laura→Marco, Sevilla) y 2 (Carlos→Pierre, Madrid) con nueva estructura
- Preguntas de comprensión migradas a formato Verdadero/Falso que testean comprensión real (no recuerdo directo)
- Documentación: nueva guía `docs/CLAUDE-escritura-emails-a11.md` con reglas de redacción A1.1, conectores admitidos, contraejemplos
- Documentación: registro de emails aprobados en `docs/chipi-emails-aprobados.md`
- Versión píldora 3.2: v0.9 → v0.10

## v0.24 — 2026-04-25

### Píldora 3.2 — Slide #08 (Chipi — "¡Ordena el desastre!")
- Juego completamente diferente a píldora 3.1 (no quiz A/B/C)
- Pool de 16 emails desordenados de personajes ficticios (A1.1, ciudades españolas)
- Configuración: 2-4 equipos, rondas elegibles (3, 5, 8, 10 o 16)
- Fase 1: ordenar 7 fragmentos por función (saludo, abre tema, conecta, cuerpo, pregunta, despedida, firma)
- Timer ascendente con puntuación por tiempo (<30s=30pts, <45s=25, <60s=20, <90s=15, <120s=10)
- Fase 2: pregunta de comprensión con 30s, rebote si falla
- Los temas del cuerpo varían entre rondas (no siempre familia→amigos→escuela)
- Emails seleccionados aleatoriamente del pool
- Brief actualizado con nueva descripción de Chipi
- Versión píldora 3.2: v0.8 → v0.9

## v0.23 — 2026-04-24

### Píldora 3.2 — Slide #07 (Luna — "Revisa y comparte")
- Fusionadas Luna 1 (autoevaluación) y Luna 2 (peer review) en una sola diapositiva
- Fase 1: checklist de 5 ítems con SÍ/NO (principio, final, verbos, conjugación, mayúsculas)
- Fase 2: revisión entre pares con 5 instrucciones paso a paso (intercambiar, leer, marcar lo bueno, marcar lo confuso, corregir)
- Transición con botón "AHORA CON TU COMPAÑERO →"
- Reducida píldora de 9 a 8 slides de contenido
- Chipi renumerado de #09 a #08
- Brief actualizado a 8 slides
- Versión píldora 3.2: v0.7 → v0.8

## v0.22 — 2026-04-24

### Píldora 3.2 — Brief actualizado a 9 slides + Slide #07 (Luna 1)
- Brief: reducido de 11 a 9 slides, eliminada FLORA #05, fusionadas VITO #07+#08
- Slide #07: checklist de autoevaluación con 5 ítems SÍ/NO
- Versión píldora 3.2: v0.6 → v0.7

## v0.21 — 2026-04-24

### Píldora 3.2 — Slide #06 (Vito 2 — "Tu correo: elige y conecta")
- Reescritura completa: tarjetas encadenables con conectores integrados
- Cada tarjeta lleva su conector en naranja (Hoy te hablo de…, Y, ¿Y tú?, Este curso, A mí…)
- Tarjetas combinables: el alumno elige varias por grupo según su situación
- Al copiar en orden: email coherente, no frases sueltas
- FAMILIA: 7 tarjetas, AMIGOS: 2, ESCUELA: 3
- Eliminadas propuestas B y C
- Versión píldora 3.2: v0.5 → v0.6

## v0.20 — 2026-04-24

### Píldora 3.2 — Slide #06 (Vito 2 — 3 propuestas de "Tu correo: elige tus frases")
- 3 variantes de slide para comparar (#06A, #06B, #06C)
- Tarjetas de situación por tema: SALUDO, FAMILIA, AMIGOS, ESCUELA, DESPEDIDA
- Coherencia con Vito 1: mismos temas, colores, frases con verbo
- Opciones inclusivas: padre y madre / solo madre / solo padre / con hermanos / sin hermanos
- **Propuesta A** (paso a paso): un grupo de tarjetas por paso, ritmo Vito 1
- **Propuesta B** (catálogo): todas las tarjetas visibles a la vez, sin pasos
- **Propuesta C** (selección interactiva): tarjetas clicables con check verde, contador
- Versión píldora 3.2: v0.4 → v0.5

## v0.19 — 2026-04-24

### Píldora 3.2 — Slide #06 (Vito 2 — "Tu correo: 5 bloques")
- Nueva slide interactiva: writing frame con 5 bloques del correo
- Bloques: SALUDO, FAMILIA, AMIGOS, ESCUELA, DESPEDIDA
- Cada bloque con barra de color lateral, etiqueta y frase modelo con huecos (___)
- Huecos en línea punteada naranja (color spark) para rellenar con datos del plan
- Bloques aparecen uno a uno con animación (rowIn)
- Vito guía cada bloque con mensajes en 1ª persona singular
- Highlights naranja (font-semibold, sin cursiva) en burbujas de Vito
- Texto estándar: clamp(20px,min(2vw,2.5vh),24px)
- Versión píldora 3.2: v0.3 → v0.4

## v0.18 — 2026-04-24

### Píldora 3.2 — Slide #05 (Vito 1 — "Planifica: de Marta a ti")
- Highlights en burbujas de Vito: palabras clave en naranja (font-semibold, sin cursiva)
- Mensajes en 1ª persona singular (tú), sin "vuestro/vuestra"
- Vito guía sin mencionar parentescos, sensible a familias diversas
- Paso 1 agrupa padre + madre (2 filas juntas)
- Paso 2 agrupa hermano + hermana + "soy hijo/a único/a" (3 filas juntas)
- Fila nueva "Si no tienes hermanos:" → "soy hijo/a único/a"
- Eliminada fila "compañera nueva" (no oportuna)
- Fragmentos de Marta con … para indicar que son extractos del correo
- Hints con verbo completo: "mi padre trabaja en…", "tengo deberes de…", "me gusta mucho (asignatura favorita)…"
- Padre y madre en filas separadas (sin paréntesis)
- INSTITUTO → ESCUELA
- Versión píldora 3.2: v0.2 → v0.3

## v0.17 — 2026-04-24

### Píldora 3.2 — Slide #03 (Flora — "¿Qué se queda y qué cambia?")
- Nueva slide interactiva: descubrimiento de 3 capas del email de Marta
- Fase 1: identificar estructura Email (saludo, despedida, firma)
- Fase 2: identificar frases de Tema (intro familia, amigos, instituto)
- Fase 3: identificar Info. personal (datos específicos de Marta)
- Fase 4: práctica con alternativas (ciclar datos) + esqueleto final
- Colores con alto contraste: azul (#1E6091), dorado (#B8860B), magenta (#B5179E)
- Leyenda prominente con pills grandes, borde activo y sombra
- Contador discreto debajo de leyenda (sin barra negra duplicada)
- Diálogos de Flora inductivos, nunca da la respuesta
- Firma "Marta" en línea separada de la despedida

### Responsive — Todo el proyecto
- Viewport meta tag añadido en layout.tsx
- Todos los grids de 2 columnas: `grid-cols-1 md:grid-cols-[...]` (se apilan en móvil)
- CharacterStage: personaje más pequeño en móvil, burbuja debajo (no al lado)
- Header/footer compactos en móvil (padding, texto, dots de navegación)
- `overflow-hidden` → `overflow-y-auto md:overflow-hidden` (permite scroll en móvil)
- Landing: grid de unidades con `minmax(min(320px, 100%), 1fr)`, botones apilados en móvil
- Píldoras index: personaje encima del título en móvil
- Slides 3-1 y 3-2: grids de 5 cols → 3 en móvil, grids internos apilan en móvil
- Gaps reducidos en móvil: `gap-4 md:gap-8/10/12`
- 25 archivos modificados

### Accesibilidad visual
- Todos los textos con clamp ahora tienen mínimo 16px (eliminados clamp(11-15px,...))
- Iconos aumentados a 18-20px mínimo
- Corregidos slide-cierre, slide-desafio-b, slide-pili-1, slide-pili-2, slide-flora-1

## v0.16 — 2026-04-23

### Píldora 3.2 — Slide #01 (Pili — "¡Escribe a un amigo!")
- Nueva slide interactiva: email vacío con saludo/despedida de Marta, 4 tarjetas temáticas (familia, amigos, instituto, ciudad)
- Tarjetas llamativas con color y pulso antes de pulsar, apagadas después
- Saludo y despedida copiados del correo de Marta como marco fijo del email
- Icono Phosphor en tarjetas (UsersThree, Handshake, GraduationCap, MapPin)
- Layout adaptado: columna izquierda 1.8fr, título en una línea, texto email ampliado

### Píldora 3.2 — Scaffold
- Página 3-2 con 9 slides placeholder + opening parametrizado + cierre
- Título: "Un Correo Electrónico Personal"
- Título responsivo en opening para nombres largos (clamp adaptativo)

### Landing page y navegación
- Icono Home (Phosphor House) en header de 3.1 y 3.2: vuelve a la portada (slide 0)
- Footer 3.2 alineado con 3.1: botón Siguiente oscuro, oculto en última slide
- Header subtitle 3.2: text-base (igual que 3.1)

### Pipeline de producción
- 5 agentes Claude Code como slash commands (.claude/commands/)
- Documentación del pipeline (docs/pipeline-produccion.md)
- Componentes opening y cierre parametrizados para reutilización entre píldoras

## v0.15 — 2026-04-22

### Landing page
- Carrusel de 6 slides (intro + 5 agentes) con barras de navegación visibles
- Tarjetas de unidad con texto "3.1 Los Posesivos"
- Modal con fondo sólido negro, tarjeta blanca, botones color TEJA
- Icono Phosphor Pill en slide intro del carrusel

## v0.14 — 2026-04-22

### Cierre (#18) — Pantalla final con los 5 personajes
- Reescritura completa: pantalla única sin pasos ni navegación
- Los 5 personajes (Pili, Flora, Vito, Luna, Chipi) con nombre, badge y burbuja de diálogo
- Título grande "¡MISIÓN CUMPLIDA!" con animación pop
- Estilo visual idéntico al opening (decoraciones flotantes, animaciones de entrada)
- Fondo igualado al opening (#FAF6EC)
- Botón "Siguiente" oculto en la última diapositiva

## v0.13 — 2026-04-22

### Chipi (#17) — Desafío "Caja fuerte"
- Nueva diapositiva de desafío con mecánica de juego arcade: 6 rondas de posesivos, equipos responden levantando dedos (A=1, B=2, C=3)
- Puntuación con combos (×2, ×3) y bonus de velocidad (+1 al más rápido)
- Fases: configuración → pregunta → corrección → resultado, con identidad visual coherente
- Fondo cálido naranja (#2d1508) a pantalla completa, sin CRT
- Chipi con drop-shadow dorado para visibilidad de trazos negros sobre fondo oscuro
- Eliminada propuesta A (slide-desafio.tsx), conservada solo la B como #17
- Todo el texto en español, tamaños accesibles para proyección

## v0.12 — 2026-04-22

### Luna 3 (#16) — Texto nuevo y diálogos propios
- Texto reescrito: "Los deberes" — coherente, auténtico, con 5 posesivos plurales (mis, nuestras, sus, vuestros, tus)
- Diálogos diferenciados de Luna 1 y 2 (Propuesta A): "Última prueba", "¿Cuál falta aquí?", "Casi... ¡pero no!"
- Color de respuesta por género del sustantivo (answerColor)

## v0.11 — 2026-04-22

### Luna 2 (#15) — Fix ruleta
- Corregido cálculo de ángulo de parada: la ruleta ahora compensa la rotación acumulada para que la flecha siempre coincida con la persona mostrada en la tarjeta

## v0.10 — 2026-04-22

### Luna 1, 2 y 3 (#14–#16) — Coherencia de diálogos y visual
- Diálogos de Luna ajustados al rol verificador (Propuesta B): "A ver... ¿cuál es?", "¡Eso es, *tu*!", "Esa no, pero casi. ¿Y si pruebas otra?"
- Posesivos citados en burbujas con `<P>` (cursiva + color spark), coherente con Flora
- Luna 1: color de respuesta por género del sustantivo (moon=masc, flower=fem), motion.button → button
- Luna 2: eliminado "cosa", añadido campo `possessive` para citar con `<P>`
- Luna 3: eliminado hint metodológico "¿Quién tiene qué?" (rol de Vito, no de Luna)
- Subtítulos de las tres: mínimo 16px → 18px (accesibilidad)
- CLAUDE.md: añadidas reglas de coherencia visual en diálogos, colores de género, y metodología por personaje

## v0.9 — 2026-04-22

### Accesibilidad visual — respuestas destacadas
- Vito 1: respuesta rellenada se muestra como pill verde (bg-green-500) con texto blanco en lugar de texto plano
- Vito 2: respuesta rellenada se muestra como pill con color de género (rosa/morado) en lugar de corchetes 【】
- Hueco vacío (___) con fondo suave para diferenciarse del texto
- Coherente con Vito 3, que ya usaba pill con color

## v0.8 — 2026-04-22

### Diapositiva #13 (Vito 2 — "Paso a paso")
- Reescritura completa: eliminado ejemplo redundante (Daniel→su), sustituido por nosotros/vosotros
- Nuevo paso de género (¿Femenino o masculino?) en cada ejemplo, ausente en Vito 1
- Mecánica de elección: alumno elige entre dos posesivos antes de ver el resultado
- Colores coherentes con Flora 3: masculino = morado (pf-moon), femenino = rosa (pf-flower)
- Botones de elección con color de género específico (no genérico)
- Chip de género usa color específico: femenino → flower-soft, masculino → moon-soft
- Conclusión visual con tres chips de color (sin repetir el texto de Vito)
- Diálogos sincronizados: pregunta primero, respuesta en siguiente clic
- 14 pasos (0-13): intro, 6 por ejemplo, conclusión

## v0.7 — 2026-04-21

### Diapositiva #12 (Vito 1 — "¿Quién tiene qué?")
- Diálogos de Vito sincronizados: pregunta primero, respuesta aparece en el siguiente clic
- Paso de pausa añadido ("Él + singular = ...") para que el alumno piense antes de ver el resultado
- Ejemplo 2 con mismo ritmo que ejemplo 1 (4 pasos cada uno, ya no se acelera)
- Etiquetas corregidas: "¿Una o varias?" → "¿Singular o plural?"
- Conclusión sin metalenguaje: "¿De quién es? + ¿la palabra es singular o plural? = posesivo"
- Terminal compacto: eliminado min-height, reducido padding

## v0.6 — 2026-04-21

### Diapositiva #12 (Vito 1 — "¿Quién tiene qué?")
- Reescritura completa: de quiz de comprensión lectora a worked example genuino
- Nuevo enfoque: razonamiento paso a paso (¿Quién? → ¿Cuántos? → Resultado)
- Dos ejemplos del texto de Javier con revelación progresiva
- Enunciado cambiado: "Lee el texto y completa" → "¿Cómo se elige el posesivo?"
- Terminal conservado como contexto narrativo del texto de Javier
- Diálogos de Vito reescritos con registro metódico: guía el razonamiento, no evalúa

## v0.5 — 2026-04-21

### Diapositiva #11 (Flora 3 — "¿Solo 2 formas?")
- Diálogos de Flora reescritos: enfoque inductivo centrado en el descubrimiento del género
- Flora crea anticipación en formas masculinas y reacciona con sorpresa en las femeninas
- Bubble 0 reformulado: plantea el contraste género (mi/tu/su no cambian vs. los demás)
- Eliminado metalenguaje del insight box ("número + género" → "formas cada uno")
- Reta al alumno a predecir la siguiente forma ("¿adivináis la siguiente?")

### Diapositiva #10 (Flora 2 — "Cada persona")
- Bubble 0 reformulado: Flora pregunta qué posesivos usa cada persona (inductivo)

## v0.4 — 2026-04-21

### Accesibilidad
- Auditoría completa de accesibilidad visual en todas las diapositivas (14 archivos)
- Todos los textos cumplen mínimo 16px (enunciados 18px, contenedores 15px)
- Corregidos badges (`text-xs` → `text-base`), contadores, botones de reinicio, placeholders y clamps insuficientes

### Diapositiva #10 (Flora 2 — "Cada persona")
- Diálogos de Flora reescritos: pasa de narrar el paradigma (deductivo) a preguntar y observar (inductivo)
- Ejemplos de sustantivos ya no repiten el posesivo (evita redundancia visual)
- Eliminado bloque insight "mi/mis, tu/tus... = 2 formas" por no aportar valor

### Diapositiva #09 (Flora 1 — "¿El dueño importa?")
- Posesivos citados en cursiva y color diferenciado (`--color-pf-spark`)
- Conclusión (David→su, Javier→su, Lucía→su) integrada en la burbuja de Flora

## v0.3 — 2026-04-20

- Versión inicial con las 19 diapositivas completas
- 5 intros de personaje + 13 slides de contenido + cierre
- Secuencia MARS EARS: Modelling (Pilar) → Awareness (Flora) → Structured (Vito) → Verificación (Luna) → Desafío (Chipi) → Cierre
