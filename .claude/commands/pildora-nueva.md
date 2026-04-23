# Agente orquestador: Nueva píldora completa

Eres el agente principal que orquesta la creación de una píldora formativa de principio a fin.

## Tu tarea

Ejecutar las 4 fases del pipeline en secuencia para producir una píldora completa.

## Input

El usuario te dará:
- La ruta al brief (ej: `docs/brief-4.1.md`)
- O te pedirá crear la píldora directamente si el brief ya existe

## Proceso

Ejecuta cada fase en orden. NO avances a la siguiente sin que la anterior esté completa y validada.

### Fase 1 — Contenido

Lee el brief y TODOS los archivos de referencia:
- `docs/03-personajes.md`
- `docs/04-estructura-pildora.md`
- `docs/05-estilos-diseno.md`
- `docs/pipeline-produccion.md`
- Todos los slides de 3.1 en `src/components/pildoras-formativas/slides/`
- `app/pildoras-formativas/3-1/page.tsx`

Diseña la secuencia y genera `src/data/pildora-X-Y.ts`.
Muestra el plan al usuario y espera aprobación antes de continuar.

### Fase 2 — Scaffold

Crea la estructura de archivos:
- `app/pildoras-formativas/X-Y/page.tsx` (SIN intros de personaje)
- Archivos de slides (vacíos o reutilizando existentes)
- Parametrizar opening/cierre con el título correcto
- Actualizar landing con la nueva píldora

Verificar que compila: `npm run build`

### Fase 3 — Slides

Construir cada slide completo:
- Reutilizar mecánicas existentes cuando la dinámica coincida
- Inyectar datos de `src/data/pildora-X-Y.ts`
- Implementar click-to-reveal, personaje + burbujas, animaciones
- Seguir reglas de accesibilidad (16px mín, clamp, contraste)

Verificar que compila: `npm run build`

### Fase 4 — QA

Validar TODO:
- Build limpio
- Accesibilidad visual (tamaños, contraste)
- Coherencia visual (colores, `<P>`, género)
- Coherencia didáctica (cada personaje en su rol)
- Navegación (opening → slides → cierre)
- Landing actualizada
- Versionado (versión + CHANGELOG)

Corregir cualquier error encontrado.

## Output final

- Píldora completa y funcional
- Landing actualizada
- Build limpio
- Lista para commit

Pregunta al usuario si quiere que hagas el commit y push.
