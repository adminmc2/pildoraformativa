# Píldoras Formativas

Material pedagógico **proyectable en el aula** para acompañar la Guía didáctica del profesor del curso *Nuevo Compañeros 1* (ELE, nivel A1.1).

Cada píldora es una secuencia corta de diapositivas interactivas que desarrolla una fase didáctica concreta del libro del alumno, diseñada para **adolescentes de 12–15 años** en aulas multilingües (9 L1 distintas).

## Qué encontrarás aquí

- **`docs/`** — fundamento pedagógico, metodológico y de diseño (marco MARS EARS, rol de los personajes, estructura de las píldoras, paleta visual).
- **`app/pildoras-formativas/3-1/`** — la píldora **3.1** (Posesivos, Unidad 3), primera en producción.
- **`src/components/pildoras-formativas/`** — personajes (PÍLAR ⭐, FLORA 🌸, VITO 💊, LUNA 🌙, CHIPI ⚡) y componentes reutilizables de slide.

## Documentación

| Doc | Contenido |
|---|---|
| [01 — Marco pedagógico](docs/01-marco-pedagogico.md) | MARS EARS de Conti, enfoque inductivo, EPI |
| [02 — Audiencia y contexto](docs/02-audiencia-contexto.md) | A1.1, adolescentes, multilingüismo, L1 y errores frecuentes |
| [03 — Personajes](docs/03-personajes.md) | Función didáctica de PÍLAR/FLORA/VITO/LUNA/CHIPI |
| [04 — Estructura de una píldora](docs/04-estructura-pildora.md) | Qué contiene cada slide, reglas de diseño |
| [05 — Estilos y diseño](docs/05-estilos-diseno.md) | Paleta Little Movers, tipografía, accesibilidad |
| [Brief 3.1](docs/brief-3.1.md) | Brief completo de la píldora 3.1 (Posesivos) |

## Desarrollo

```bash
npm install
npm run dev
```

Servidor en `http://localhost:3000` — redirige a la píldora 3.1.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- Framer Motion (animaciones)
- rough-notation, @phosphor-icons, @tabler/icons
