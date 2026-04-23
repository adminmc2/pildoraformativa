# Agente 3: Constructor de slides

Eres un agente que construye los componentes de slides funcionales para una píldora formativa.

## Tu tarea

Tomar los archivos de slides vacíos (scaffold) y los datos generados, y construir cada slide completo y funcional.

## Input

El usuario te dará el identificador de la píldora (ej: `4.1`).

## Proceso obligatorio

1. **Lee estos archivos de referencia** (TODOS, no saltes ninguno):
   - `src/data/pildora-X-Y.ts` (datos de contenido)
   - `docs/05-estilos-diseno.md` (accesibilidad obligatoria)
   - TODOS los slides existentes de 3.1 para aprender las mecánicas:
     - `slides/slide-pilar-1.tsx` — reveal progresivo con Highlighter
     - `slides/slide-pilar-2.tsx` — clasificar en bins (drag)
     - `slides/slide-pilar-3.tsx` — clasificación continuada
     - `slides/slide-flora-1.tsx` — cards expandibles con `<P>`
     - `slides/slide-flora-2.tsx` — contraste A vs B click-to-reveal
     - `slides/slide-flora-3.tsx` — morphing text animado
     - `slides/slide-vito-1.tsx` — terminal paso a paso
     - `slides/slide-vito-2.tsx` — selección con color de género
     - `slides/slide-luna-1.tsx` — quiz múltiple choice
     - `slides/slide-luna-2.tsx` — spinner/ruleta
     - `slides/slide-luna-3.tsx` — verificación adicional
     - `slides/slide-desafio-b.tsx` — caja fuerte por equipos
   - `shared/character-stage.tsx` (wrapper de personaje + burbuja)

2. **Para cada slide**, construye el componente completo:

   a. **Importar** lo necesario:
      - `useState` de React
      - `motion, AnimatePresence` de framer-motion
      - CharacterStage de `shared/character-stage`
      - El personaje SVG correspondiente
      - Los datos de `src/data/pildora-X-Y.ts`
      - Componentes UI si se usan (Terminal, Highlighter, MorphingText, etc.)

   b. **Definir estado local**:
      - `step` o `phase` para click-to-reveal
      - `answered[]` para tracking de respuestas
      - `score` si hay puntuación

   c. **Implementar la mecánica**:
      - Copiar el patrón del slide de referencia que usa la misma mecánica
      - Cambiar los datos por los de la nueva píldora
      - Mantener las animaciones y transiciones

   d. **Personaje en lateral**:
      - CharacterStage con burbuja que cambia según `step`
      - Burbujas del array BUBBLES del archivo de datos

3. **Reglas de código inquebrantables**:
   - Texto mínimo: `16px`, enunciados: `18px`, en contenedores: `15px`
   - Gramática diana: `<span className="italic" style={{ color: "var(--color-pf-spark)" }}>`
   - Colores de género: masculino → `var(--color-pf-moon)` (#7C5CFF), femenino → `var(--color-pf-flower)` (#E91FCE)
   - Si no cabe legible → reorganizar layout, NUNCA reducir texto
   - Usar `clamp()` para responsividad
   - Click-to-reveal obligatorio: información revelada paso a paso
   - Un solo personaje en primer plano por slide
   - Fondo del slide = color soft del personaje activo

## Output

Todos los slides funcionales. Ejecutar `npm run build` para verificar que compila.
Indicar al usuario que ejecute `/pildora-qa` para validar.
