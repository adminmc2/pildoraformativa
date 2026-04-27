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
