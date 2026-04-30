# Instrucciones del proyecto

## Versionado y changelog

Antes de cada commit:
1. **Incrementar la versión** en `app/pildoras-formativas/3-1/page.tsx` (línea del subtítulo "Posesivos · Unidad 3 · vX.Y").
2. **Actualizar `CHANGELOG.md`** en la raíz del proyecto con los cambios realizados, agrupados por categoría.

## Accesibilidad visual y responsive

Guía completa de criterios responsive y accesibilidad: **`docs/CLAUDE-responsive-accesibilidad.md`** (contextos: laptop / TV grande / proyector).

Resumen rápido — texto mínimo proyectable:
- Texto secundario: **18px**
- Texto general: **20px**
- Enunciados / preguntas: **24px**
- Elemento diana (gramática estudiada): **28px** (con color + bold)
- Títulos: **36px**
- Botones: **20px**, área clicable ≥**44×44px**
- Si un elemento no cabe legible, se reorganiza el layout — nunca se reduce el texto bajo el mínimo

## Escritura de emails A1.1 (píldora 3.2)

Guía dedicada: **`docs/CLAUDE-escritura-emails-a11.md`** (estructura, conectores `y`/`también`, vocabulario A1.1, contraejemplos).

## Coherencia visual en diálogos — dos casos distintos

### Caso A — CITA de elemento gramatical diana (cursiva + naranja)
Solo cuando el personaje **cita literalmente** un elemento gramatical estudiado (posesivo, conector, etc.) en su burbuja:
- **Cursiva + naranja** usando el componente `<P>` (ver `slide-flora-1.tsx` como referencia):
  ```tsx
  const P = ({ children }) => <span className="italic font-semibold" style={{ color: "var(--color-pf-spark)" }}>{children}</span>
  ```
- Ejemplo: `<>¿Qué significa <P>su</P>?</>` (cita el posesivo *su*)
- Las burbujas que citan deben ser `ReactNode[]`, no `string[]`

### Caso B — DESTACABLE / énfasis (solo naranja, SIN cursiva)
Para destacar palabras importantes que NO son citas gramaticales (palabras clave, instrucciones, énfasis):
- **Solo naranja + bold**, sin cursiva, usando el componente `<V>`:
  ```tsx
  const V = ({ children }) => <span className="font-semibold" style={{ color: "var(--color-pf-spark)" }}>{children}</span>
  ```
- Ejemplo: `<>¿Sabéis qué cosas tiene un <V>email</V>?</>` (destaca *email*, no es cita gramatical)

**Regla mnemónica:** cursiva = cita literal de gramática · sin cursiva = solo énfasis. **Nunca usar cursiva para énfasis genérico.**

## Coherencia de colores de género

Cuando se muestra una respuesta rellenada (pill dentro de una frase):
- **Masculino** → `var(--color-pf-moon)` (morado #7C5CFF)
- **Femenino** → `var(--color-pf-flower)` (rosa #E91FCE)
- Cada item/ejemplo debe tener un campo `answerColor` que refleje el género del sustantivo
- Los botones de elección entre formas de género también usan estos colores

## Diálogos de personajes y metodología

- Los diálogos deben ser coherentes con la **función del personaje** en MARS EARS:
  - Flora = observadora (preguntas inductivas, nunca da la respuesta)
  - Vito = método (razona paso a paso, pausa antes del resultado)
  - Luna = verificadora (comprueba si el alumno lo sabe)
  - Chipi = desafío (reta, da feedback rápido)
- Vocabulario coherente entre diapositivas: usar "¿Singular o plural?" (no "¿uno o varios?"), "¿De quién es?" (no "dueño"), evitar "cosa" (puede ser persona)

## Convención de feedback de personajes (estilo unificado del proyecto)

**Todos los slides interactivos** (cualquier personaje) deben aplicar este patrón de retroalimentación en la burbuja del personaje. Esto unifica la experiencia del alumno en toda la presentación.

### Estructura de burbuja según estado del alumno

| Estado | Cuándo | Patrón |
|---|---|---|
| **Inicial** | Sin acciones aún | Pregunta o instrucción que orienta. Usa `<V>` para destacar concepto clave. |
| **Acierto progreso** | Acción correcta, faltan más | Ack positivo + progreso (cuántos faltan o "sigue") |
| **Acierto cierre** | Categoría/fase completa | Ack positivo + síntesis pedagógica del concepto aprendido |
| **Error nivel 1** | 1er fallo en la elección actual | Pregunta que **cuestiona la elección** sin revelar respuesta. Adapta a lo que falta. |
| **Error nivel 2+** | 2º+ fallo seguido | Pista **espacial o concreta** hacia lo que falta, sin revelar el contenido exacto. |

### Vocabulario y formas obligatorias

**Imperativo plural (vosotros)** — la presentación se proyecta a un grupo:
- ✅ `Mirad`, `Buscad`, `Pulsad`, `Elegid`, `Colocadlas`, `Encontrad`
- ❌ `Mira`, `Busca` (singular tú) — solo aceptable si el slide se diseña 1-a-1

**Acks positivos** (intercambiables, varía para no repetir):
- `¡Bien!`, `¡Eso!`, `¡Casi!`, `¡Correcto!`, `¡Perfecto!`, `¡Vais bien!`, `¡Sigue!`, `¡Eso es!`

**Acks negativos gentiles** (cuando aplica, pili-style):
- `Mmm,` + explicación + `Inténtalo otra vez` (más Pili — anfitriona)
- Pregunta directa sin "Mmm" (más Flora — observadora)

**Cierre de error**:
- `Buscad otra` / `Inténtalo otra vez` / `Sigue buscando` (con vosotros)

### Resaltado de palabras en burbujas
- `<V>` (naranja + bold, sin cursiva) — palabras clave, conceptos, números, categorías
- `<P>` (italic + naranja + bold) — SOLO citas literales de gramática diana (raro en feedback)
- Resalta el **concepto** (`<V>tres</V> partes fijas`, `¿<V>Quién</V> escribe?`) pero NUNCA el contenido de la respuesta correcta sin descubrir.

### Adaptatividad en errores
- El feedback de error **debe depender** de qué items ha encontrado YA el alumno (no repetir orientación a lo ya hecho).
- Niveles L1/L2 distintos según `wrongCount`.
- Ver `slide-flora-1.tsx` (3.2 #03) como **referencia canónica** de implementación adaptativa.

### Reglas duras de contenido pedagógico
- ❌ **Nunca revelar** un fragmento de respuesta correcta aún no encontrado
- ❌ **Nunca repetir** el mismo criterio de búsqueda que ya falló (cambia de ángulo)
- ❌ **No dar conteo** como única ayuda en error (mejor pregunta que cuestiona elección)
- ✅ Cambiar enfoque entre L1 (interrogativo) y L2 (espacial)
- ✅ Vocabulario A1.1 estricto · máximo ~10 palabras por burbuja
