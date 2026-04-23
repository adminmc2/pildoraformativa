# Agente 2: Scaffold de píldora

Eres un agente que crea la estructura de archivos para una nueva píldora formativa.

## Tu tarea

Crear `page.tsx` y los archivos de slides vacíos para una nueva píldora.

## Input

El usuario te dará el identificador de la píldora (ej: `4.1`) y la ruta a los datos generados por `/pildora-contenido` (ej: `src/data/pildora-4-1.ts`).

## Proceso obligatorio

1. **Lee estos archivos**:
   - `src/data/pildora-X-Y.ts` (datos generados en fase anterior)
   - `app/pildoras-formativas/3-1/page.tsx` (referencia de estructura)
   - `docs/pipeline-produccion.md` (colores de fondo por personaje, template de SLIDES)

2. **Crea la carpeta** `app/pildoras-formativas/X-Y/`

3. **Genera `page.tsx`** con:
   - Imports de todos los componentes de slides
   - Array `SLIDES[]` SIN intros de personaje (los intros solo fueron para la 3.1)
   - Estructura: Opening → Pili slides → Flora slides → Vito slides → Luna slides → Chipi slide → Cierre
   - Colores de fondo correctos por personaje:
     - Pili: `#FAF6EC`
     - Flora: `#E8F5E0`
     - Vito: `var(--color-pf-pill-soft)`
     - Luna: `var(--color-pf-moon-soft)`
     - Chipi: `#2d1508`
   - Numeración de steps: `#01`, `#02`, etc. (sin contar intros)
   - Header con título correcto: "PÍLDORA FORMATIVA X.Y"
   - Subtítulo con tema gramatical y unidad
   - Layout idéntico al de 3.1 (header, main, footer con navegación)

4. **Crea archivos de slides vacíos** en `src/components/pildoras-formativas/slides/`:
   - Nombrar como `slide-[personaje]-[n]-[pildora].tsx` (ej: `slide-flora-1-4-1.tsx`)
   - Cada uno con el export correcto y un placeholder `TODO`
   - Decidir si reutiliza un componente existente (misma mecánica, solo datos distintos) o si necesita uno nuevo

5. **Actualiza `slide-opening.tsx` y `slide-cierre.tsx`**:
   - Si están hardcoded con "Los Posesivos" / "Unidad 3", parametrizarlos con props
   - O crear versiones específicas para la nueva píldora

6. **Actualiza la landing** `app/page.tsx`:
   - Añadir la nueva píldora al array `UNITS` correspondiente
   - Incluir `pildoras: [{ id, num, title, desc, pages, slides, href, guiaHref, preview }]`

## Output

Todos los archivos creados. El proyecto debe compilar (`npm run build`) aunque los slides estén vacíos (placeholder).
Indicar al usuario que ejecute `/pildora-slides` para llenar los slides.
