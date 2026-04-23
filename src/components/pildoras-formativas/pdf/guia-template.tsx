"use client";

import { Document, Page, Text, View } from "@react-pdf/renderer";
import { C, PERSONAJES, base, Header, Footer, Callout, Bullet, AgentCard, SlideHeading, Step } from "./primitives";

/**
 * Guía didáctica — Píldora 3.1: Los Posesivos
 * Explotación didáctica para el profesor.
 */
export function GuiaDidacticaPDF() {
  return (
    <Document title="Guía didáctica — Píldora 3.1: Los Posesivos" author="SGEL">
      {/* ═══════════════ PORTADA ═══════════════ */}
      <Page size="A4" style={base.cover}>
        <View style={base.coverInner}>
          {/* Badge */}
          <View style={base.coverBadge}>
            <Text style={base.coverBadgeText}>GUÍA DIDÁCTICA DEL PROFESOR</Text>
          </View>

          {/* Título principal */}
          <Text style={base.coverTitle}>Los Posesivos</Text>

          {/* Subtítulo */}
          <Text style={base.coverSubtitle}>Píldora Formativa 3.1</Text>

          {/* Metadatos */}
          <Text style={base.coverMeta}>
            Nuevo Compañeros 1{"\n"}
            Unidad 3 — La Familia{"\n"}
            Nivel A1.1{"\n"}
            Gramática — Páginas 36–37
          </Text>

          {/* Sección inferior */}
          <View style={{ marginTop: 32, alignItems: "center" }}>
            <Text style={{ fontSize: 12, color: C.gray, textAlign: "center", lineHeight: 1.5 }}>
              Secuencia 5 del itinerario — Actividades 5–9{"\n"}
              Posesivos y producción oral — 20–25 minutos
            </Text>
          </View>

        </View>
      </Page>
      {/* ═══════════════ TODO EL CONTENIDO CORRIDO ═══════════════ */}
      <Page size="A4" style={base.page}>
        <Header />
        <Footer />

        {/* ── CONTEXTO GRAMATICAL ── */}
        <Text style={base.h1}>Contexto gramatical</Text>
        <Text style={base.body}>
          Los posesivos en español concuerdan con el objeto poseído, no con el poseedor. Este es el punto clave que el alumno debe descubrir y la fuente principal de errores.
        </Text>

        <Callout title="Idea central" color={C.pill} bg={C.pillSoft}>
          <View>
            <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink, marginBottom: 6 }}>
              El posesivo «copia» el número de lo que viene después, no el número del poseedor:
            </Text>
            <Bullet color={C.pill}>Yo tengo un libro → mi libro (singular)</Bullet>
            <Bullet color={C.pill}>Yo tengo dos libros → mis libros (plural)</Bullet>
            <Bullet color={C.pill}>Ellos tienen un libro → su libro (singular)</Bullet>
            <Bullet color={C.pill}>Ellos tienen dos libros → sus libros (plural)</Bullet>
          </View>
        </Callout>

        <Text style={base.h2}>Dos familias de posesivos</Text>

        <Text style={base.h3}>Familia 1 — Solo cambian con el número</Text>
        <Text style={base.body}>
          Mi, tu y su no distinguen género. Solo tienen forma singular y plural: mi/mis, tu/tus, su/sus.
        </Text>

        {/* Tabla Familia 1 */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "50%" }}>Singular</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "50%" }}>Plural</Text>
          </View>
          {[["mi", "mis"], ["tu", "tus"], ["su", "sus"]].map(([s, p]) => (
            <View key={s} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontSize: 10, width: "50%" }}>{s}</Text>
              <Text style={{ fontSize: 10, width: "50%" }}>{p}</Text>
            </View>
          ))}
        </View>

        <Text style={base.h3}>Familia 2 — Cambian con número y género</Text>
        <Text style={base.body}>
          Nuestro y vuestro tienen 4 formas cada uno. Son los únicos posesivos que varían en género.
        </Text>

        {/* Tabla Familia 2 */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "25%" }}>M. sing.</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "25%" }}>F. sing.</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "25%" }}>M. plur.</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "25%" }}>F. plur.</Text>
          </View>
          {[
            ["nuestro", "nuestra", "nuestros", "nuestras"],
            ["vuestro", "vuestra", "vuestros", "vuestras"],
          ].map((row) => (
            <View key={row[0]} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              {row.map((cell) => (
                <Text key={cell} style={{ fontSize: 10, width: "25%" }}>{cell}</Text>
              ))}
            </View>
          ))}
        </View>

        <Text style={base.h2}>Conocimiento previo del alumno</Text>
        <Text style={base.body}>
          En las páginas 34–35 (Vocabulario), el alumno ya ha encontrado posesivos de forma incidental:
        </Text>
        <Bullet>«Su abuelo se llama Carlos» (árbol de David, p. 34)</Bullet>
        <Bullet>«Su padre es camionero» (texto de Javier, p. 35)</Bullet>
        <Bullet>«Mi padre se llama Antonio» (texto modelo, p. 35)</Bullet>

        <Text style={[base.body, { marginTop: 8 }]}>
          Las formas de 3.ª persona (su/sus) y 1.ª singular (mi/mis) ya están interiorizadas. La novedad de esta píldora es:
        </Text>
        <Bullet color={C.moon}>Formas de 1.ª y 2.ª persona plural (nuestro, vuestro)</Bullet>
        <Bullet color={C.moon}>La concordancia de género que solo presentan nuestro/vuestro</Bullet>
        <Bullet color={C.moon}>La regla general: el posesivo concuerda con el objeto poseído</Bullet>

        {/* ── MARCO TEÓRICO-METODOLÓGICO ── */}
        <Text style={base.h1}>Marco teórico-metodológico</Text>
        <Text style={base.body}>
          Las píldoras formativas se basan en un marco integrado de tres pilares complementarios que articula las principales teorías de adquisición de segundas lenguas. El enfoque es inductivo-inferencial: el alumno descubre la regla a partir de ejemplos, observación y deducción — nunca se presenta la regla primero.
        </Text>

        {/* Pilar 1 */}
        <Callout title="Pilar 1 — Procesamiento de Input" color={C.pill} bg={C.pillSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Basado en VanPatten (1996) y el ciclo MARS EARS de Conti (2023). El alumno recibe input estructurado y comprensible (95–98% vocabulario conocido), procesa chunks antes que reglas, y descubre el patrón mediante exposición masiva y atención forzada. La investigación (Shintani, 2015) muestra que el input estructurado genera comprensión receptiva fuerte (d = 0.82), pero no genera capacidad de producción — por eso es necesario complementar con los pilares 2 y 3.
          </Text>
        </Callout>

        {/* Pilar 2 */}
        <Callout title="Pilar 2 — Output y Gap-Noticing" color={C.moon} bg={C.moonSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Basado en la Output Hypothesis de Swain (1985, 1995) y el feedback correctivo de Doughty y Varela (1998). La producción obliga al alumno a notar las brechas en su conocimiento. Se progresa de producción obligatoria (huecos) a guiada (estructura dada) y finalmente libre (tema dado), con feedback inmediato y específico en cada paso.
          </Text>
        </Callout>

        {/* Pilar 3 */}
        <Callout title="Pilar 3 — Integración y Consolidación" color={C.spark} bg={C.sparkSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Basado en TBLT (Ellis, 2015), procesamiento profundo (Craik y Lockhart, 1972) y consolidación espaciada (Henkel, 2004). El conocimiento se automatiza mediante revisión a intervalos crecientes: 24h → 1 semana → 4 semanas. La reflexión metalingüística convierte el conocimiento implícito en explícito.
          </Text>
        </Callout>

        <View wrap={false}>
        <Text style={base.h2}>MARS EARS — Extensive Processing Instruction (Conti, 2023)</Text>
        <Text style={base.body}>
          La secuencia pedagógica de referencia es el ciclo MARS EARS de Gianfranco Conti, un modelo de Extensive Processing Instruction (EPI) que organiza la adquisición gramatical en 8 fases progresivas. Un tercio de las escuelas secundarias del Reino Unido ya utiliza EPI como enfoque preferente (Language Trends Report, 2025). La píldora sigue esta estructura de forma directa.
        </Text>

        {/* Tabla MARS EARS */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "8%" }}>Fase</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "30%" }}>Nombre</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "62%" }}>Qué busca</Text>
          </View>
          {[
            ["M", "Modelling", "Exposición masiva a modelos auténticos del patrón sin explicación explícita"],
            ["A", "Awareness-raising", "Atención forzada al patrón mediante contraste, pares mínimos y notación"],
            ["R", "Receptive processing", "Comprensión intensiva del patrón (lectura/escucha)"],
            ["S", "Structured production", "Producción guiada con andamiaje fuerte (chunks, plantillas)"],
            ["E", "Expansion", "Aplicación del patrón a contextos nuevos"],
            ["A", "Autonomy", "Uso independiente en tareas abiertas"],
            ["R", "Routinization", "Automatización mediante repetición espaciada"],
            ["S", "Spontaneity", "Uso espontáneo en interacción real"],
          ].map(([fase, nombre, desc]) => (
            <View key={`${fase}-${nombre}`} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "8%" }}>{fase}</Text>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "30%" }}>{nombre}</Text>
              <Text style={{ fontSize: 10, width: "62%" }}>{desc}</Text>
            </View>
          ))}
        </View>

        </View>

        <Callout title="Cómo aplicamos MARS EARS" color={C.flower} bg={C.flowerSoft}>
          <View>
            <Bullet>Como marco orientativo, no como plantilla rígida. Libertad para reordenar, saltar o combinar fases.</Bullet>
            <Bullet>Las primeras 4 fases (M, A, R, S) son las más presentes en la píldora. Expansion, Autonomy, Routinization y Spontaneity se completan en clases posteriores con el libro.</Bullet>
            <Bullet>El mapeo MARS EARS vive como metadato interno, nunca visible al alumno.</Bullet>
            <Bullet>Principio central: patrón antes que regla. El alumno descubre inductivamente la regularidad tras múltiples exposiciones.</Bullet>
          </View>
        </Callout>

        <View wrap={false}>
          <Text style={base.h2}>Ciclo de 5 fases</Text>
          <Text style={base.body}>
            Los tres pilares se integran en un ciclo de 5 fases para la enseñanza de gramática:
          </Text>

          {/* Tabla Ciclo de 5 fases */}
          <View style={{ marginBottom: 12 }}>
            <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "10%" }}>Fase</Text>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "30%" }}>Nombre</Text>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "60%" }}>Qué hace el alumno</Text>
            </View>
            {[
              ["1", "Atención a forma", "Recibe input, nota el patrón (Modelling + Awareness)"],
              ["2", "Procesamiento", "Reconoce sin producir → produce con apoyo decreciente"],
              ["3", "Retroalimentación", "Recibe corrección inmediata y específica"],
              ["4", "Reflexión", "Explica el patrón con sus palabras; se confirma la regla"],
              ["5", "Consolidación", "Revisión espaciada hasta la automatización"],
            ].map(([fase, nombre, desc]) => (
              <View key={fase} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
                <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "10%" }}>{fase}</Text>
                <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "30%" }}>{nombre}</Text>
                <Text style={{ fontSize: 10, width: "60%" }}>{desc}</Text>
              </View>
            ))}
          </View>

          <Callout title="Aplicación en esta píldora" color={C.star} bg={C.starSoft}>
            <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
              En esta píldora, las fases 1–4 se desarrollan en clase con las diapositivas. La fase 5 (consolidación) se completa con el cuaderno de ejercicios y las clases posteriores.
            </Text>
          </Callout>
        </View>

        {/* ── LOS 5 AGENTES DE IA ── */}
        <Text style={base.h1}>Los 5 agentes de IA</Text>
        <Text style={base.body}>
          Cada píldora se estructura en torno a 5 agentes de inteligencia artificial, configurados para intervenir en momentos específicos del proceso de aprendizaje gramatical del estudiante. Los agentes son recurrentes en todas las píldoras y aparecen siempre en el mismo orden, lo que permite al alumno anticipar qué tipo de actividad viene a continuación.
        </Text>

        <AgentCard
          name="PILI"
          badge="Anfitriona"
          color={C.star}
          soft={C.starSoft}
          img="/images/characters/pilar.png"
          desc="Abre y cierra la píldora. Presenta el tema, activa conocimiento previo con frases del libro y crea un marco afectivo seguro. En esta píldora: recuerda frases con posesivos que el alumno ya conoce de las pp. 34–35. Fase MARS EARS: Hook / Activación previa + Cierre."
        />

        <AgentCard
          name="FLORA"
          badge="Observadora"
          color={C.flower}
          soft={C.flowerSoft}
          img="/images/characters/flora.png"
          desc="Muestra ejemplos reales y hace preguntas inductivas para que el alumno descubra el patrón por sí mismo. Nunca da la respuesta. En esta píldora: presenta pares mínimos con posesivos y pregunta «¿De quién es? ¿Singular o plural?». Fase MARS EARS: Awareness + Receptive processing."
        />

        <AgentCard
          name="VITO"
          badge="Método"
          color={C.pill}
          soft={C.pillSoft}
          img="/images/characters/vito.png"
          desc="Razona paso a paso y verbaliza el proceso de deducción. Hace pausas antes de revelar el resultado. En esta píldora: guía al alumno para completar las tablas de posesivos y descubrir las dos familias. Fase MARS EARS: Structured production (walk-through)."
        />

        <AgentCard
          name="LUNA"
          badge="Verificadora"
          color={C.moon}
          soft={C.moonSoft}
          img="/images/characters/luna.png"
          desc="Comprueba si el alumno ha interiorizado la regla. Propone ejercicios de verificación (ruleta, elección múltiple). En esta píldora: presenta frases para que el alumno seleccione el posesivo correcto. Fase MARS EARS: Comprobación con referencia."
        />

        <AgentCard
          name="CHIPI"
          badge="Desafío"
          color={C.spark}
          soft={C.sparkSoft}
          img="/images/characters/chipi.png"
          desc="Reta al alumno con mecánica de juego competitivo. Da feedback rápido (correcto/incorrecto). En esta píldora: desafío «Caja fuerte» donde los equipos compiten rellenando posesivos a contrarreloj. Fase MARS EARS: Gamificación / assessment lúdico."
        />
        {/* ── EXPLOTACIÓN DIDÁCTICA ── */}
        <Text style={base.h1}>Explotación didáctica</Text>
        <Text style={base.body}>
          Las diapositivas #01–#05 presentan a los agentes y no requieren intervención didáctica especial. A continuación se detallan las instrucciones para cada diapositiva de contenido, paso a paso (clic a clic). Principio rector: no enuncie la regla. Presente los datos, pregunte, y deje que el alumno descubra el patrón. La regla se verbaliza al final como confirmación, nunca como punto de partida.
        </Text>

        {/* SLIDE #06 */}
        <SlideHeading num="06" title="Tres frases" agent="PILI · Modelling" agentColor={C.star} agentBg={C.starSoft} technique="Input flooding (Conti, 2023). Tiempo: ~2-3 min. 6 clics." />
        <Text style={base.body}>
          En pantalla aparecen tres frases de la familia de Julián (personaje del libro, p. 35) con el posesivo «su» resaltado en color.
        </Text>
        <Step n={1}>Aparecen las tres frases. Léalas en voz alta señalando la pantalla. No explique nada todavía — solo exposición.</Step>
        <Step n={2}>Dirija la atención hacia la primera pregunta de comprensión: «¿Cómo se llama el abuelo de Julián?» Los alumnos buscan la respuesta en las frases. Dé 5 segundos. Respuesta esperada: «Carlos.»</Step>
        <Step n={3}>Segunda pregunta: «¿Dónde trabaja la madre de Julián?» Los alumnos responden directamente desde lo que leen. Respuesta esperada: «En el hotel.»</Step>
        <Step n={4}>Tercera pregunta: «¿Qué profesión tiene el padre de Julián?» El botón pulsa con la indicación «AHORA MIRAD BIEN...» — esto señala que viene lo importante. Mantenga la expectativa. Respuesta esperada: «Agricultor.»</Step>
        <Step n={5}>Pregunta clave: «¿Qué palabra está en las tres?» No responda usted. Deje que observen las frases en pantalla. Si no lo ven, señale las palabras en color con el dedo.</Step>
        <Step n={6}>Los tres «su» se rodean con un círculo animado. Confirme sin ampliar: «Sí, "su" aparece en las tres. Vamos a ver por qué.»</Step>
        <Callout title="Objetivo pedagógico" color={C.star} bg={C.starSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Las preguntas de comprensión (pasos 2–4) garantizan la lectura atenta. La pregunta del paso 5 fuerza el noticing del patrón sin que nadie haya nombrado la palabra «posesivo». Si un alumno pregunta «¿Qué es "su"?», no lo explique todavía. Diga: «Buena pregunta. Lo vamos a descubrir juntos.»
          </Text>
        </Callout>

        {/* SLIDE #07 */}
        <SlideHeading num="07" title="¿Uno o varios?" agent="PILI · Awareness" agentColor={C.star} agentBg={C.starSoft} technique="Discriminación receptiva (VanPatten, 2004). Tiempo: ~3-4 min. Interacción continua." />
        <Text style={base.body}>
          En pantalla aparecen dos columnas —«UNO» y «VARIOS»— y seis frases con posesivo que los alumnos deben clasificar arrastrando cada una a la columna correcta.
        </Text>
        <Step n={1}>Lea en voz alta el enunciado: «Clasifica: ¿habla de uno o de varios?». Asegúrese de que entienden que se refiere al sustantivo que acompaña al posesivo, no al poseedor.</Step>
        <Step n={2}>Las frases aparecen de una en una. Deje que un alumno voluntario (o el grupo) proponga la respuesta y arrastre la frase. Si se equivocan, la pantalla devuelve feedback inmediato (p. ej.: «¡No! Abuelos son más de uno. Prueba la otra.»). No intervenga — el error autocorregido es parte del proceso.</Step>
        <Step n={3}>Soluciones esperadas: UNO → «Su madre», «Tu instituto», «Mi padre». VARIOS → «Mis abuelos», «Sus tíos», «Tus libros».</Step>
        <Step n={4}>Tras cada colocación correcta, Pili reacciona brevemente. Aproveche esas pausas para preguntar: «¿Por qué esa va en VARIOS?» o «¿Qué os ha hecho elegir UNO?». Basta con que señalen el sustantivo.</Step>
        <Step n={5}>Cuando las seis frases estén colocadas, Pili revela: «¡La S! Varios llevan S al final.» Señale la pantalla y pregunte: «¿Dónde está esa S? ¿En el posesivo o en el sustantivo?». Deje que observen que aparece en ambos (mis abuelos, sus tíos). No formalice la regla — solo confirme la observación.</Step>
        <Callout title="Objetivo pedagógico" color={C.star} bg={C.starSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            La clasificación obliga al alumno a procesar la diferencia singular/plural antes de conocer la regla. El feedback automático ante el error evita que el profesor tenga que corregir, manteniendo un clima positivo. La pregunta final sobre la S dirige la atención hacia la concordancia sin nombrarla explícitamente.
          </Text>
        </Callout>

        {/* SLIDE #08 */}
        <View break />
        <SlideHeading num="08" title="¿Qué cambia?" agent="PILI · Awareness" agentColor={C.star} agentBg={C.starSoft} technique="Par mínimo con noticing forzado (Conti, 2023). Tiempo: ~2-3 min. 4 clics." />
        <Text style={base.body}>
          En pantalla aparecen dos frases casi idénticas — «Tengo mi libro» y «Tengo mis libros» — y un contador de diferencias (0/2). Los alumnos deben encontrar qué cambia entre ambas.
        </Text>
        <Step n={1}>Las dos frases están visibles. Pida a los alumnos que las lean en silencio y busquen las diferencias. «¿Qué cambia entre las dos frases? Hay dos diferencias.» Dé 10 segundos antes de pulsar.</Step>
        <Step n={2}>Se ilumina en naranja la primera diferencia: «mi → mis». Pregunte al grupo: «¿Qué ha pasado con esa palabra?» Deje que verbalicen que ha aparecido una S. No diga por qué — solo confirme la observación.</Step>
        <Step n={3}>Se ilumina en verde la segunda diferencia: «libro → libros». Señale la pantalla: «Y aquí, ¿qué ha cambiado?». Los alumnos ven que el sustantivo también lleva S. Dos cambios, mismo patrón — pero no lo nombre todavía.</Step>
        <Step n={4}>Pili concluye: «Un libro → mi. Varios libros → mis. El nombre manda: el posesivo le sigue.» Repita la frase señalando ambos colores. Esta es la primera vez que se verbaliza la regla de concordancia. Pregunte: «¿Lo veis? ¿Quién decide, el nombre o el posesivo?»</Step>
        <Callout title="Objetivo pedagógico" color={C.star} bg={C.starSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            El par mínimo reduce la comparación a una sola variable (singular → plural), eliminando ruido cognitivo. El código de colores (naranja = posesivo, verde = sustantivo) establece una convención visual que se mantendrá en diapositivas posteriores. Es la primera vez que se enuncia explícitamente la regla de concordancia, pero como confirmación de lo observado — no como punto de partida.
          </Text>
        </Callout>

        {/* SLIDE #09 */}
        <SlideHeading num="09" title="¿El dueño importa?" agent="FLORA · Awareness" agentColor={C.flower} agentBg={C.flowerSoft} technique="Variación del poseedor con forma constante (noticing inductivo). Tiempo: ~3 min. 5 clics." />
        <Text style={base.body}>
          En pantalla aparecen tres tarjetas colapsadas con nombres de personas (David, Javier, Lucía). Se despliegan una a una mostrando una frase con el posesivo «su». Flora acompaña con preguntas inductivas.
        </Text>
        <Step n={1}>Tres tarjetas cerradas visibles. Lea el título en voz alta: «Tres personas, la misma palabra. ¿Por qué?». No adelante la respuesta — deje que la pregunta quede flotando.</Step>
        <Step n={2}>Se despliega la primera tarjeta: «David — Su abuelo se llama Carlos.» Flora comenta: «David y su abuelo. Abuelo = uno.» Simplemente señale la pantalla y pase al siguiente.</Step>
        <Step n={3}>Se despliega la segunda: «Javier — Su abuelo se llama Manolo.» Flora observa: «¡Otro dueño, misma palabra!» Pregunte al grupo: «¿Habéis visto? Dos personas distintas, ¿y la palabra es…?» Espere a que digan «su».</Step>
        <Step n={4}>Se despliega la tercera: «Lucía — Su madre trabaja en el hotel.» Flora insiste: «Siempre su.» Ahora pregunte: «David, Javier, Lucía… tres personas diferentes. ¿Ha cambiado la palabra?» Los alumnos confirman que no.</Step>
        <Step n={5}>Flora revela la conclusión visual: David → su, Javier → su, Lucía → su. «¡Siempre igual!» Retome la pregunta del título: «Entonces, ¿el dueño importa?» Deje que respondan «no». Refuerce: «Exacto — lo que importa no es quién tiene la cosa, sino cuántas cosas son.»</Step>
        <Callout title="Objetivo pedagógico" color={C.flower} bg={C.flowerSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Tras la diapositiva #08 (donde se vio que el número del sustantivo manda), esta diapositiva elimina la hipótesis alternativa: que el posesivo dependa del poseedor. Al mostrar tres dueños distintos con la misma forma «su», el alumno descarta esa posibilidad por sí mismo. Flora nunca da la respuesta — solo pregunta hasta que el patrón emerge.
          </Text>
        </Callout>

        {/* SLIDE #10 */}
        <SlideHeading num="10" title="Cada persona" agent="FLORA · Receptive" agentColor={C.flower} agentBg={C.flowerSoft} technique="Sistematización receptiva con revelación progresiva. Tiempo: ~4-5 min. 8 clics." />
        <Text style={base.body}>
          En pantalla se construye una cuadrícula de 6 tarjetas (una por persona gramatical) con sus formas posesivas singular y plural. Las tarjetas aparecen de una en una. Flora acompaña con preguntas comparativas.
        </Text>
        <Step n={1}>Flora presenta el reto: «Vamos a ver las 6 personas. ¿Qué posesivos usa cada una?» Léalo en voz alta y pida silencio — van a observar.</Step>
        <Step n={2}>Primera tarjeta: Yo → mi / mis (con ejemplos: «mi padre», «mis abuelos»). Flora: «¿Te suenan?» Enlácelo con lo visto en las diapositivas anteriores: «Ya los habéis usado, ¿verdad?»</Step>
        <Step n={3}>Segunda tarjeta: Tú → tu / tus. Flora: «¿Se parecen a los de yo?» Invite a comparar: «mi, tu… mis, tus… ¿Qué patrón veis?» Espere a que noten la S del plural.</Step>
        <Step n={4}>Tercera tarjeta: Él / Ella → su / sus. Flora: «Solo dos formas, como los demás.» Recuerde la diapositiva #09: «¿Os acordáis? El dueño no importaba. Aquí lo veis otra vez.»</Step>
        <Step n={5}>Cuarta tarjeta: Nosotros → nuestro / nuestros. Flora: «¡Algo nuevo… fíjate!» Señale que esta es más larga. Pregunte: «¿Veis alguna diferencia con mi, tu, su?». Si alguien dice que termina en -o, anótelo sin profundizar.</Step>
        <Step n={6}>Quinta tarjeta: Vosotros → vuestro / vuestros. Flora: «Se parece a nosotros, ¿no?» Refuerce la comparación: nuestro/vuestro siguen el mismo patrón.</Step>
        <Step n={7}>Sexta tarjeta: Ellos / Ellas → su / sus. Flora: «Espera, ¿esto ya lo hemos visto?» Pregunte: «¿Es igual que él/ella?» Los alumnos confirman. No explique por qué se repite — solo constate.</Step>
        <Step n={8}>Las 6 tarjetas visibles. Flora cierra: «Seis personas, y cada una con dos formas. ¿Seguro que solo dos?» Deje la pregunta en el aire — se responderá en la diapositiva de Vito.</Step>
        <Callout title="Objetivo pedagógico" color={C.flower} bg={C.flowerSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            La revelación progresiva obliga a procesar cada persona por separado antes de ver el conjunto. Las preguntas comparativas de Flora («¿Se parecen?», «¿Esto ya lo hemos visto?») construyen conexiones sin enunciar la regla. La pregunta final («¿Seguro que solo dos?») planta la semilla de la distinción nuestro/nuestra que Vito explorará después.
          </Text>
        </Callout>

        {/* SLIDE #11 */}
        <SlideHeading num="11" title="¿Solo 2 formas?" agent="FLORA · Receptive" agentColor={C.flower} agentBg={C.flowerSoft} technique="Revelación progresiva con contraste morfológico. Tiempo: ~4-5 min. 11 clics." />
        <Text style={base.body}>
          En pantalla se revelan las 4 formas de «nuestro» y luego las 4 de «vuestro», una a una, con código de colores: morado = masculino, rosa = femenino. Flora guía la observación.
        </Text>
        <Step n={1}>Una animación alterna las formas de «nuestro» (nuestro, nuestra, nuestros, nuestras). Flora plantea: «¿Femenino o masculino? Mi, tu, su no cambian. ¿Y los demás?» Retome la pregunta que quedó en el aire en la diapositiva anterior.</Step>
        <Step n={2}>Primera forma: «nuestro profesor» (masculino, singular). Flora: «Normal. Espera, espera…» No comente nada más — la expectativa está servida.</Step>
        <Step n={3}>Segunda forma: «nuestra madre» (femenino, singular). Flora reacciona: «¡¿Nuestra?!» Pregunte al grupo: «¿Habéis visto? Mi, tu, su no cambiaban. ¿Y este?» Deje que noten la -a del femenino.</Step>
        <Step n={4}>Tercera forma: «nuestros gatos» (masculino, plural). Flora: «¿Y en femenino?» Invite a los alumnos a predecir la cuarta forma antes de pulsar.</Step>
        <Step n={5}>Cuarta forma: «nuestras mochilas» (femenino, plural). Flora: «¡Cuatro formas! ¡Este no para!» Señale las cuatro tarjetas y pregunte: «¿Cuántas formas tenía "mi"?» (dos). «¿Y "nuestro"?» (cuatro).</Step>
        <Step n={6}>Transición a «vuestro» con nueva animación. Flora: «Ahora vuestro. ¿Pasará lo mismo?» Pida predicciones antes de continuar.</Step>
        <Step n={7}>«Vuestro barrio» (masculino, singular). Flora: «¿Será como nuestro?» Los alumnos ya pueden anticipar el patrón.</Step>
        <Step n={8}>«Vuestra clase» (femenino, singular). Flora: «¡También cambia!» Si alguien lo había predicho, celébrelo.</Step>
        <Step n={9}>«Vuestros amigos» (masculino, plural). Flora: «¿Adivináis la siguiente?» Deje que el grupo diga «vuestras» antes de pulsar.</Step>
        <Step n={10}>«Vuestras mochilas» (femenino, plural). Flora: «¡Otra vez cuatro!» Las ocho tarjetas están visibles.</Step>
        <Step n={11}>Aparece el insight visual: «4+4 formas cada uno». Flora cierra: «¿Por qué estos tienen más formas que los demás?» No responda — Vito lo formalizará en la siguiente diapositiva.</Step>
        <Callout title="Objetivo pedagógico" color={C.flower} bg={C.flowerSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Tras ver que mi/tu/su solo tienen 2 formas, el alumno descubre que nuestro/vuestro tienen 4 (varían en género y número). El código de colores morado/rosa establece la distinción masculino/femenino que se usará en el resto de la píldora. La predicción activa («¿Adivináis la siguiente?») transforma la observación pasiva en procesamiento profundo.
          </Text>
        </Callout>

        {/* SLIDE #12 */}
        <SlideHeading num="12" title="¿Quién tiene qué?" agent="VITO · Structured" agentColor={C.pill} agentBg={C.pillSoft} technique="Razonamiento guiado paso a paso (walk-through deductivo). Tiempo: ~4-5 min. 12 clics." />
        <Text style={base.body}>
          En pantalla aparece un terminal con tres frases del texto de Javier (p. 35). Vito guía dos ejemplos completos del mismo razonamiento: ¿de quién es? + ¿singular o plural? = posesivo.
        </Text>
        <Step n={1}>El terminal muestra las tres frases de contexto. Vito dice: «Vamos a razonar con el texto de Javier.» Lea las frases en voz alta para asegurarse de que todos las conocen.</Step>
        <Step n={2}>Aparece la frase incompleta: «___ madre es Catalina.» Vito pregunta: «¿De quién es la madre?» Deje que los alumnos respondan: «De Javier.»</Step>
        <Step n={3}>Se completa el primer paso del razonamiento: «¿Quién? Javier = él.» Vito confirma. Señale cómo el terminal va construyendo la lógica.</Step>
        <Step n={4}>Segundo paso: «¿Singular o plural? Madre = singular.» Pregunte al grupo antes de que aparezca: «¿"Madre" es una o son varias?»</Step>
        <Step n={5}>Vito plantea la pausa clave: «Él + singular = …» No pulse todavía. Dé 5 segundos para que los alumnos deduzcan la respuesta. Pregunte: «¿Qué posesivo va ahí?»</Step>
        <Step n={6}>Se revela: «¡Su madre!» La respuesta se ilumina en verde. Confirme y pase al segundo ejemplo.</Step>
        <Step n={7}>Nueva frase incompleta: «___ abuelo se llama Manolo.» Vito pregunta: «¿De quién es el abuelo?» Esta vez, deje que los alumnos apliquen solos los dos pasos antes de pulsar.</Step>
        <Step n={8}>Primer paso: «¿Quién? Javier = él.» Los alumnos ya lo reconocen — es el mismo dueño.</Step>
        <Step n={9}>Segundo paso: «¿Singular o plural? Abuelo = singular.» Invítelos a completar la fórmula sin esperar al terminal.</Step>
        <Step n={10}>Pausa: «Él + singular = …» Ahora pregunte: «¿Es el mismo resultado que antes? ¿Por qué?»</Step>
        <Step n={11}>Se revela: «¡Su abuelo!» Vito celebra: «¡Siempre funciona!» Señale que el método ha dado el mismo resultado porque las condiciones eran iguales.</Step>
        <Step n={12}>Conclusión general: «¿De quién es? + ¿singular o plural? = posesivo.» Esta fórmula aparece destacada en el terminal. Repítala con el grupo y pregunte: «¿Creéis que funciona siempre? Lo vamos a comprobar.»</Step>
        <Callout title="Objetivo pedagógico" color={C.pill} bg={C.pillSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Vito formaliza el razonamiento que los alumnos ya intuían tras las diapositivas de Flora. La repetición del mismo esquema con dos sustantivos distintos (madre, abuelo) demuestra que el método es generalizable. Las pausas antes de revelar la respuesta (pasos 5 y 10) transforman la observación pasiva en deducción activa. La fórmula final es la primera herramienta explícita que el alumno puede aplicar autónomamente.
          </Text>
        </Callout>

        {/* SLIDE #13 */}
        <SlideHeading num="13" title="Paso a paso" agent="VITO · Structured" agentColor={C.pill} agentBg={C.pillSoft} technique="Algoritmo deductivo de 3 preguntas con elección interactiva. Tiempo: ~5 min. 14 clics." />
        <Text style={base.body}>
          Vito amplía el método de la diapositiva anterior añadiendo la tercera pregunta: ¿femenino o masculino? Se trabajan dos ejemplos con nuestro/vuestro, donde el género sí importa. Los alumnos eligen la forma correcta entre dos opciones.
        </Text>
        <Step n={1}>Vito anuncia: «Ahora con nosotros y vosotros. Hay un paso más.» Señale que hasta ahora solo preguntaban dos cosas — ahora serán tres.</Step>
        <Step n={2}>Aparece la frase: «Nosotros tenemos ___ mochilas en la clase.» Vito pregunta: «¿De quién son las mochilas?» Los alumnos responden: «De nosotros.»</Step>
        <Step n={3}>Primer chip: «¿Quién? Nosotros.» El terminal va construyendo la lógica igual que en la diapositiva anterior.</Step>
        <Step n={4}>Segundo chip: «¿Singular o plural? Mochilas = plural.» Pregunte al grupo antes de que aparezca.</Step>
        <Step n={5}>Tercer chip — la novedad: «¿Femenino o masculino? Mochilas = femenino.» Vito: «Y femenino.» Señale que esta pregunta no hacía falta antes con mi/tu/su. Ahora sí.</Step>
        <Step n={6}>Aparecen dos botones: «nuestros» (morado) y «nuestras» (rosa). Vito: «Nosotros + plural + femenino = ¿cuál?» Deje que el grupo vote. Si eligen mal, la pantalla da pista: «No. Fíjate: femenino.» Respuesta correcta: «nuestras».</Step>
        <Step n={7}>Se rellena el hueco: «¡Nuestras mochilas!» Confirme y pase al segundo ejemplo.</Step>
        <Step n={8}>Nueva frase: «¿Vosotros tenéis ___ libro de español?» Vito: «¿De quién es el libro?» Respuesta: «De vosotros.»</Step>
        <Step n={9}>Chips: «¿Quién? Vosotros» → «¿Singular o plural? Libro = singular» → «¿Femenino o masculino? Libro = masculino.»</Step>
        <Step n={10}>Dos botones: «vuestra» (rosa) y «vuestro» (morado). Vito: «Vosotros + singular + masculino = ¿cuál?» Deje que elijan. Respuesta correcta: «vuestro».</Step>
        <Step n={11}>Se rellena: «¡Vuestro libro!» Celebre el acierto.</Step>
        <Step n={12}>Síntesis visual: aparecen las tres preguntas como fórmula — ¿De quién es? + ¿Singular o plural? + ¿Femenino o masculino? Vito: «Tres preguntas. Siempre las mismas.» Repita la fórmula con el grupo señalando cada chip.</Step>
        <Callout title="Objetivo pedagógico" color={C.pill} bg={C.pillSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Se amplía el algoritmo de 2 a 3 preguntas para cubrir nuestro/vuestro (los únicos que varían en género). El código de colores morado/rosa de la diapositiva #11 se reutiliza en los botones de elección, reforzando la asociación. La elección interactiva con feedback inmediato («No. Fíjate: femenino.») obliga a procesar la información antes de responder.
          </Text>
        </Callout>

        {/* SLIDE #14 */}
        <SlideHeading num="14" title="Elige" agent="LUNA · Verificación" agentColor={C.moon} agentBg={C.moonSoft} technique="Elección múltiple rápida con feedback inmediato. Tiempo: ~3-4 min. 6 ítems." />
        <Text style={base.body}>
          Luna presenta 6 frases con un hueco y 3 opciones de posesivo. El alumno elige, recibe feedback inmediato (acierto → animación; error → botón tachado y segundo intento) y avanza. Marcador de aciertos visible.
        </Text>

        {/* Tabla de respuestas */}
        <View style={{ marginBottom: 8 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "60%" }}>Frase</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "20%" }}>Opciones</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "20%" }}>Respuesta</Text>
          </View>
          {[
            ["«¿Estudias música en ___ instituto?»", "mi / tu / su", "tu"],
            ["«Ellos tienen ___ ordenador en la habitación.»", "sus / su / mi", "su"],
            ["«Graciela vive con ___ tíos.»", "su / sus / mis", "sus"],
            ["«Yo tengo ___ libros en la cartera.»", "mi / mis / sus", "mis"],
            ["«Javier tiene ___ bicicleta en la calle.»", "sus / su / tu", "su"],
            ["«___ profesor de matemáticas es muy simpático.»", "Nuestra / Nuestro / Su", "Nuestro"],
          ].map(([frase, opciones, resp]) => (
            <View key={frase} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontSize: 10, width: "60%" }}>{frase}</Text>
              <Text style={{ fontSize: 10, width: "20%", color: C.gray }}>{opciones}</Text>
              <Text style={{ fontSize: 10, width: "20%", fontFamily: "Helvetica-Bold" }}>{resp}</Text>
            </View>
          ))}
        </View>

        <Callout title="Atención — ítems 2 y 6" color={C.moon} bg={C.moonSoft}>
          <View>
            <Bullet color={C.moon}>Ítem 2: «Ellos tienen su ordenador.» El sujeto es plural (ellos) pero el objeto es singular (ordenador). Si algún alumno elige «sus», pregunte: «¿Cuántos ordenadores hay?» — refuerza que el posesivo sigue al objeto, no al sujeto.</Bullet>
            <Bullet color={C.moon}>Ítem 6: «Nuestro profesor…» Es el único ítem que exige la tercera pregunta (género). Si eligen «nuestra», Luna da pista: «Fíjate en el género.» Es el test real de si han interiorizado el algoritmo de Vito.</Bullet>
          </View>
        </Callout>

        {/* SLIDE #15 */}
        <SlideHeading num="15" title="Gira y responde" agent="LUNA · Verificación" agentColor={C.moon} agentBg={C.moonSoft} technique="Ruleta aleatoria con producción oral obligatoria. Tiempo: ~4 min. 6 rondas." />
        <Text style={base.body}>
          Luna presenta una ruleta con las 6 personas gramaticales. En cada ronda: se gira la ruleta, aparece un sustantivo, y los alumnos deben decir el posesivo correcto en voz alta antes de pulsar «REVELAR». Si el grupo es grande, respuesta coral; si es pequeño, turnos individuales.
        </Text>

        {/* Tabla de combinaciones */}
        <View style={{ marginBottom: 8 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "30%" }}>Persona</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "30%" }}>Sustantivo</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "40%" }}>Respuesta</Text>
          </View>
          {[
            ["Nosotros/as", "profesora", "Nuestra profesora"],
            ["Tú", "libros", "Tus libros"],
            ["Yo", "hermana", "Mi hermana"],
            ["Vosotros/as", "mochilas", "Vuestras mochilas"],
            ["Él / Ella", "abuelo", "Su abuelo"],
            ["Nosotros/as", "hermanos", "Nuestros hermanos"],
          ].map(([persona, sust, resp]) => (
            <View key={resp} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontSize: 10, width: "30%" }}>{persona}</Text>
              <Text style={{ fontSize: 10, width: "30%" }}>{sust}</Text>
              <Text style={{ fontSize: 10, width: "40%", fontFamily: "Helvetica-Bold" }}>{resp}</Text>
            </View>
          ))}
        </View>

        <Callout title="Atención — rondas 1, 4 y 6" color={C.moon} bg={C.moonSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Estas tres rondas exigen la tercera pregunta (género): profesora = femenino → nuestra; mochilas = femenino plural → vuestras; hermanos = masculino plural → nuestros. Si fallan, pregunte «¿femenino o masculino?» antes de revelar. Las demás rondas (mi, tus, su) solo requieren persona + número.
          </Text>
        </Callout>

        {/* SLIDE #16 */}
        <SlideHeading num="16" title="Completa el texto" agent="LUNA · Verificación" agentColor={C.moon} agentBg={C.moonSoft} technique="Cloze test contextualizado con elección múltiple. Tiempo: ~3-4 min. 5 huecos." />
        <Text style={base.body}>
          Luna presenta un texto breve con 5 huecos. Los alumnos tocan cada hueco y eligen entre 3 opciones. Feedback inmediato: acierto → relleno animado; error → opción tachada y segundo intento. La tarjeta se ilumina al completarlo. Los huecos se pueden rellenar en cualquier orden.
        </Text>

        {/* Tabla de huecos */}
        <View style={{ marginBottom: 8 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "55%" }}>Frase</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "25%" }}>Opciones</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "20%" }}>Respuesta</Text>
          </View>
          {[
            ["«___ compañeros de clase son geniales.»", "Mi / Mis / Sus", "Mis"],
            ["«___ profesoras son muy divertidas.»", "Nuestros / Nuestras / Vuestras", "Nuestras"],
            ["«Javier siempre hace ___ deberes en la biblioteca.»", "su / sus / mis", "sus"],
            ["«Y vosotros, ¿hacéis ___ deberes en casa?»", "nuestros / vuestros / sus", "vuestros"],
            ["«___ notas seguro que son muy buenas.»", "Mis / Tus / Sus", "Tus"],
          ].map(([frase, opciones, resp]) => (
            <View key={frase} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontSize: 10, width: "55%" }}>{frase}</Text>
              <Text style={{ fontSize: 10, width: "25%", color: C.gray }}>{opciones}</Text>
              <Text style={{ fontSize: 10, width: "20%", fontFamily: "Helvetica-Bold" }}>{resp}</Text>
            </View>
          ))}
        </View>

        <Callout title="Atención — ítems 2 y 4" color={C.moon} bg={C.moonSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            El ítem 2 («Nuestras profesoras») exige concordancia de género: profesoras = femenino → nuestras, no nuestros. El ítem 4 («vuestros deberes») requiere distinguir persona: «vosotros hacéis» → vuestros, no nuestros. Si un alumno falla, pregunte: «¿De quién son? ¿Y el sustantivo es femenino o masculino?»
          </Text>
        </Callout>

        {/* SLIDE #17 */}
        <SlideHeading num="17" title="Caja fuerte" agent="CHIPI · Desafío" agentColor={C.spark} agentBg={C.sparkSoft} technique="Gamificación arcade por equipos con respuesta kinestésica. Tiempo: ~5-7 min. 7 rondas." />
        <Text style={base.body}>
          El desafío final es un juego competitivo por equipos con estética arcade. En cada ronda, una frase con un hueco aparece en pantalla junto con tres opciones (A, B, C). Los equipos responden simultáneamente levantando dedos antes de que se agote el tiempo.
        </Text>

        <Text style={[base.h3, { marginTop: 8 }]}>Antes de empezar</Text>
        <Bullet>Divida la clase en 2, 3 o 4 equipos. La pantalla de configuración le permite elegir el número.</Bullet>
        <Bullet>Seleccione el tiempo por ronda: 10 segundos si es la primera vez, 8 o 5 para grupos avanzados.</Bullet>
        <Bullet>Explique la mecánica de respuesta: cada equipo levanta dedos al unísono — 1 dedo = opción A, 2 dedos = opción B, 3 dedos = opción C. Todos los miembros del equipo deben levantar la mano a la vez.</Bullet>

        <Text style={[base.h3, { marginTop: 8 }]}>Dinámica de cada ronda</Text>
        <Step n={1}>Pulse «Siguiente ronda». Aparece la frase con el hueco y las tres opciones. La cuenta atrás empieza automáticamente. Lea la frase en voz alta mientras los equipos deliberan.</Step>
        <Step n={2}>Cuando el tiempo se agota (o antes, si todos han respondido), pulse «Mostrar respuesta». La opción correcta se ilumina en pantalla.</Step>
        <Step n={3}>Marque en pantalla qué equipos acertaron (toque el nombre de cada equipo que respondió bien). Si quiere, marque también cuál fue el más rápido — ese equipo recibe un punto extra.</Step>
        <Step n={4}>El marcador se actualiza automáticamente. Pulse «Siguiente ronda» para continuar.</Step>

        <Text style={[base.h3, { marginTop: 8 }]}>Puntuación</Text>
        <Bullet>1 punto por cada respuesta correcta.</Bullet>
        <Bullet>+1 punto extra al equipo que responda primero (opcional — usted decide si lo marca).</Bullet>
        <Bullet>Bonus por racha: si un equipo acierta 2 rondas seguidas, gana 2 puntos en vez de 1. Con 3+ seguidas, gana 3 puntos por ronda.</Bullet>

        <View break />
        <Text style={[base.h3, { marginTop: 8 }]}>Las 7 rondas</Text>

        {/* Tabla de rondas */}
        <View style={{ marginBottom: 8 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "55%" }}>Frase</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "25%" }}>Opciones</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "20%" }}>Respuesta</Text>
          </View>
          {[
            ["«Hoy hablamos de la familia. ¿Cómo se llama ___ padre?»", "tu / su / mi", "tu"],
            ["«Mira la familia de Javier. ___ madre se llama Catalina.»", "mis / su / tus", "su"],
            ["«¿Tienes hermanos? — Sí, ___ hermanos se llaman Ana y Carlos.»", "mi / mis / sus", "mis"],
            ["«¿Os gustan las clases? — ¡Sí! ___ profesoras son muy simpáticas.»", "Nuestros / Nuestras / Vuestras", "Nuestras"],
            ["«Chicos, abrid ___ libros por la página 36.»", "nuestros / sus / vuestros", "vuestros"],
            ["«David y Javier van al colegio. ___ mochilas son nuevas.»", "nuestras / sus / vuestras", "sus"],
            ["«¿En qué clase estáis? — ___ clase es la 2B.»", "nuestra / vuestra / su", "nuestra"],
          ].map(([frase, opciones, resp]) => (
            <View key={frase} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontSize: 9, width: "55%" }}>{frase}</Text>
              <Text style={{ fontSize: 9, width: "25%", color: C.gray }}>{opciones}</Text>
              <Text style={{ fontSize: 9, width: "20%", fontFamily: "Helvetica-Bold" }}>{resp}</Text>
            </View>
          ))}
        </View>

        <Callout title="Atención — rondas 4 y 7" color={C.spark} bg={C.sparkSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            La ronda 4 («Nuestras profesoras») y la 7 («nuestra clase») exigen concordancia de género. Si la mayoría falla, no detenga el juego — el ritmo arcade es parte del aprendizaje. Chipi dirá: «Era nuestras/nuestra. ¡La siguiente la clavamos!». Si necesita reforzar, hágalo al terminar todas las rondas. Al final aparece el ránking con el equipo ganador.
          </Text>
        </Callout>
      </Page>
    </Document>
  );
}
