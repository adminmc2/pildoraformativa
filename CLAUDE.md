# Instrucciones del proyecto

## Versionado y changelog

Antes de cada commit:
1. **Incrementar la versión** en `app/pildoras-formativas/3-1/page.tsx` (línea del subtítulo "Posesivos · Unidad 3 · vX.Y").
2. **Actualizar `CHANGELOG.md`** en la raíz del proyecto con los cambios realizados, agrupados por categoría.

## Accesibilidad visual

Todo texto proyectable debe cumplir los criterios de accesibilidad del proyecto (`docs/05-estilos-diseno.md`):
- Texto mínimo en pantalla: **16px** (nunca menos)
- Enunciados: mínimo **18px**
- Frases dentro de contenedores: mínimo **15px**
- Si un elemento no cabe legible, se reorganiza el layout — nunca se reduce el texto

## Coherencia visual en diálogos

Cuando un personaje **cita un posesivo** (o cualquier elemento gramatical diana) dentro de su burbuja de diálogo:
- Se muestra en **cursiva + color** usando el componente `<P>` (ver `slide-flora-1.tsx` como referencia): `<span className="italic" style={{ color: "var(--color-pf-spark)" }}>`
- Nunca como texto plano (ej: ~~"¡su! Correcto."~~ → `<>¡<P>su</P>! Correcto.</>`)
- Las burbujas que citan posesivos deben ser `ReactNode[]`, no `string[]`

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
