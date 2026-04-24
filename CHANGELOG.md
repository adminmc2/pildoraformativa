# Changelog

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
