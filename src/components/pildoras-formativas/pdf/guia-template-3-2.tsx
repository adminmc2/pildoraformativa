"use client";

import { Document, Page, Text, View } from "@react-pdf/renderer";
import { C, base, Header, Footer, Callout, Bullet, SlideHeading, Step } from "./primitives";

/**
 * Guía didáctica — Píldora 3.2: Un Correo Electrónico Personal
 * Explotación didáctica para el profesor.
 */
export function GuiaDidacticaPDF32() {
  return (
    <Document title="Guía didáctica — Píldora 3.2: Un Correo Electrónico Personal" author="SGEL">
      {/* ═══════════════ PORTADA ═══════════════ */}
      <Page size="A4" style={base.cover}>
        <View style={base.coverInner}>
          {/* Badge */}
          <View style={base.coverBadge}>
            <Text style={base.coverBadgeText}>GUÍA DIDÁCTICA DEL PROFESOR</Text>
          </View>

          {/* Título principal — «Personal» en la línea siguiente */}
          <Text style={[base.coverTitle, { fontSize: 42, lineHeight: 1.15 }]}>
            Un Correo Electrónico{"\n"}Personal
          </Text>

          {/* Subtítulo */}
          <Text style={base.coverSubtitle}>Píldora Formativa 3.2</Text>

          {/* Metadatos */}
          <Text style={base.coverMeta}>
            Nuevo Compañeros 1{"\n"}
            Unidad 3 — La Familia{"\n"}
            Nivel A1.1{"\n"}
            Expresión escrita — Páginas 42–45
          </Text>

          {/* Sección inferior */}
          <View style={{ marginTop: 32, alignItems: "center" }}>
            <Text style={{ fontSize: 12, color: C.gray, textAlign: "center", lineHeight: 1.5 }}>
              Secuencia 6 del itinerario — Actividades 10–14{"\n"}
              Estructura del correo electrónico personal y conectores — 25–30 minutos
            </Text>
          </View>
        </View>
      </Page>

      {/* ═══════════════ CONTENIDO ═══════════════ */}
      <Page size="A4" style={base.page}>
        <Header title="PÍLDORA FORMATIVA 3.2" sub="Guía didáctica · Un Correo Electrónico Personal · Unidad 3" />
        <Footer />

        {/* ── CONTEXTO LINGÜÍSTICO ── */}
        <Text style={base.h1}>Contexto lingüístico</Text>
        <Text style={base.body}>
          La píldora 3.2 trabaja la construcción de un texto coherente (un correo electrónico personal) reciclando todo lo que el alumno ha aprendido en las secciones anteriores de la unidad. El foco se desplaza del sistema al uso: cómo organizar la información, cómo encadenar las frases, qué partes son fijas y cuáles cambian. Es la primera vez en el curso que el alumno produce un texto completo y no frases aisladas.
        </Text>

        <Callout title="Idea central" color={C.spark} bg={C.sparkSoft}>
          <View>
            <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink, marginBottom: 6 }}>
              En A1.1, el alumno no escribe desde cero. El correo electrónico modelo (Marta a Pierre, p. 40) actúa como worked example: lo que se mantiene es la estructura discursiva; lo que cambia son los datos personales. La separación visual de las dos capas (estructura fija vs. contenido personal) es la clave que reduce la carga cognitiva de la producción escrita.
            </Text>
            <Bullet color={C.spark}>Estructura fija = el alumno copia (saludo, abre tema, conectores, despedida).</Bullet>
            <Bullet color={C.spark}>Contenido personal = el alumno cambia con sus propios datos (nombres, edades, profesiones, asignaturas).</Bullet>
          </View>
        </Callout>

        <Text style={base.h2}>Estructura canónica del género correo electrónico</Text>
        <Text style={base.body}>
          Un correo electrónico, en cualquier registro, tiene cinco partes:
        </Text>

        {/* Tabla — partes canónicas */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "20%" }}>Parte</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "35%" }}>Qué contiene</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "45%" }}>Quién la rellena</Text>
          </View>
          {[
            ["Encabezado", "De · Para · Asunto", "Campos del cliente; el alumno escribe Para y Asunto"],
            ["Saludo", "Fórmula de apertura", "El alumno la escribe (varía según registro)"],
            ["Cuerpo", "Contenido del mensaje, en uno o más párrafos", "El alumno la escribe (es la zona pedagógica de la píldora)"],
            ["Despedida", "Fórmula de cierre", "El alumno la escribe"],
            ["Firma", "Nombre del emisor", "El alumno la escribe"],
          ].map(([parte, contenido, rellena]) => (
            <View key={parte} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "20%" }}>{parte}</Text>
              <Text style={{ fontSize: 10, width: "35%" }}>{contenido}</Text>
              <Text style={{ fontSize: 10, width: "45%" }}>{rellena}</Text>
            </View>
          ))}
        </View>

        <Text style={base.body}>
          La diapositiva #01 trabaja explícitamente esta distinción (correo electrónico vs. chat vs. post) y la #02 ordena las partes del modelo de Marta.
        </Text>

        <Callout title="El cuerpo es la zona didáctica de la píldora" color={C.pill} bg={C.pillSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Encabezado, saludo, despedida y firma se aprenden como fórmulas fijas (el alumno las copia). Toda la construcción discursiva se concentra en el cuerpo: cómo se abre un tema, cómo se conectan las ideas, cómo se devuelve la palabra al destinatario. Las nueve diapositivas se organizan en torno a este cuerpo.
          </Text>
        </Callout>

        <Text style={base.h2}>Fórmulas trabajadas en esta unidad para las partes fijas</Text>
        <Text style={base.body}>
          Para el registro informal (entre amigos o compañeros), que es el único que aborda la píldora 3.2, la unidad enseña una fórmula por parte fija:
        </Text>

        {/* Tabla — fórmulas de las partes fijas */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "20%" }}>Parte</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "45%" }}>Fórmula trabajada en la unidad</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "35%" }}>Ejemplo del modelo</Text>
          </View>
          {[
            ["Asunto", "Tema breve (sin verbo)", "¡Hola desde Cádiz!"],
            ["Saludo", "¡Hola, [nombre]! ¿Qué tal?", "¡Hola, Pierre! ¿Qué tal estás?"],
            ["Despedida", "¡Un saludo desde [ciudad]!\n¡Un abrazo desde [ciudad]!", "¡Un saludo desde Cádiz!"],
            ["Firma", "Solo el nombre del emisor", "Marta"],
          ].map(([parte, formula, ejemplo]) => (
            <View key={parte} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "20%" }}>{parte}</Text>
              <Text style={{ fontSize: 10, width: "45%" }}>{formula}</Text>
              <Text style={{ fontSize: 10, width: "35%" }}>{ejemplo}</Text>
            </View>
          ))}
        </View>

        <Text style={base.body}>
          Variaciones formales como «Querido», «Querida», «Estimado», «Estimada», «Atentamente» o «Cordialmente» no se abordan en esta unidad. La lección se centra en el correo electrónico personal informal entre adolescentes; el registro formal queda para unidades posteriores donde se introduzcan los géneros profesionales.
        </Text>

        <Text style={base.h2}>Funciones discursivas dentro del cuerpo</Text>
        <Text style={base.body}>
          El cuerpo del correo electrónico no es texto libre: tiene rasgos discursivos típicos que la píldora identifica para que el alumno pueda producir un cuerpo coherente y no una lista de frases sueltas. Estas funciones no son partes obligatorias del género; son convenciones del correo electrónico personal informal en español que la píldora hace explícitas como andamiaje.
        </Text>

        {/* Tabla — funciones discursivas */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "25%" }}>Función</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "12%" }}>Color</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "28%" }}>Qué hace</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "35%" }}>Ejemplo del modelo</Text>
          </View>
          {[
            ["ABRE TEMA", "Azul", "Marca el inicio de un bloque temático nuevo", "Hoy te hablo de mi familia: · Y en el instituto, ¿qué tal el nuevo curso? · Este curso es un poco más difícil."],
            ["CONECTA", "Naranja", "Une elementos paralelos dentro del mismo párrafo o bloque", "y · también"],
            ["PREGUNTA AL DESTINATARIO", "Morado", "Devuelve la palabra al lector y mantiene viva la conversación", "¿Y tú, cuántos hermanos tienes? · ¿Tú también tienes muchos deberes este año?"],
          ].map(([fn, col, hace, ej]) => (
            <View key={fn} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "25%" }}>{fn}</Text>
              <Text style={{ fontSize: 10, width: "12%" }}>{col}</Text>
              <Text style={{ fontSize: 10, width: "28%" }}>{hace}</Text>
              <Text style={{ fontSize: 10, width: "35%" }}>{ej}</Text>
            </View>
          ))}
        </View>

        <Text style={base.body}>
          La diapositiva #04 clasifica las frases del correo electrónico de Marta según estas tres funciones. El código de colores se mantiene a lo largo de la píldora (#03, #04, #06) para reforzar la asociación visual.
        </Text>

        <Callout title="Por qué estos rasgos y no otros" color={C.flower} bg={C.flowerSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            El correo electrónico personal informal en español tiene muchos más rasgos discursivos (reformulación, marcadores de cortesía, ironía, etc.). En esta unidad solo se trabajan los tres anteriores porque: (a) son los presentes en el modelo de Marta, (b) son los únicos que el alumno puede producir con el vocabulario y la gramática trabajados hasta aquí en el curso, y (c) son suficientes para que un cuerpo de 4 a 6 frases sea legible y coherente.
          </Text>
        </Callout>

        <Text style={base.h2}>Los dos conectores de la unidad</Text>
        <Text style={base.body}>
          La píldora trabaja explícitamente los dos únicos conectores enseñados en la unidad. No son un repaso gramatical: son la función «CONECTA» del cuerpo, hecha visible como pieza separable.
        </Text>

        <Text style={base.h3}>Conector 1 — «y» (conjunción)</Text>
        <Bullet>Posición: dentro de una oración, sin punto previo, en minúscula.</Bullet>
        <Bullet>Conecta: elementos paralelos del mismo nivel sintáctico (sujeto con sujeto, atributo con atributo, predicado con predicado del mismo sujeto).</Bullet>
        <Bullet>Ejemplo del modelo: «mi padre trabaja en un hotel y mi madre en un hospital».</Bullet>
        <Bullet>Restricción: no se usa al inicio de oración escrita (es uso oral); no une ideas no paralelas.</Bullet>

        <Text style={base.h3}>Conector 2 — «también» (adverbio de adición)</Text>
        <Bullet>Posición: inicio de oración nueva, mayúscula, tras punto.</Bullet>
        <Bullet>Conecta: información paralela del mismo verbo o categoría (añade un caso al ya mencionado).</Bullet>
        <Bullet>Ejemplo del modelo: «Mi mejor amigo se llama Lucas. También está en mi clase».</Bullet>
        <Bullet>Restricción: requiere paralelismo claro; no se usa para introducir una idea distinta.</Bullet>

        <Text style={base.h2}>Temas válidos del cuerpo</Text>
        <Text style={base.body}>
          El cuerpo del correo electrónico desarrolla uno o dos temas como máximo, elegidos entre los tres trabajados en la unidad:
        </Text>
        <Bullet>Familia (padre, madre, hermanos: nombre, edad, profesión).</Bullet>
        <Bullet>Amigos o compañeros de clase (nombre, descripción simple, mejor amigo o amiga).</Bullet>
        <Bullet>Instituto o curso (asignaturas, deberes, asignatura favorita).</Bullet>

        <View break />
        <Text style={[base.h2, { marginTop: 0 }]}>Conocimiento previo del alumno</Text>
        <Text style={base.body}>
          A esta altura de la Unidad 3 el alumno ya ha trabajado los siguientes contenidos, que la píldora no introduce sino que recicla y combina en un texto coherente.
        </Text>

        <Text style={base.h3}>De Vocabulario U03 (p. 34–35)</Text>
        <Bullet>Parentesco completo: padre, madre, hermano, hermana, abuelo, abuela, tío, tía, primo, prima, hijo, hija.</Bullet>
        <Bullet>Género y número aplicados a la familia.</Bullet>

        <Text style={base.h3}>De Gramática U03 (p. 36–37)</Text>
        <Bullet>Presente regular de las tres conjugaciones (-ar, -er, -ir): trabajar, vivir, estudiar.</Bullet>
        <Bullet>Verbo «tener» en conjugación completa.</Bullet>
        <Bullet>Posesivos: mi, mis, tu, tus, su, sus, nuestro, nuestra, nuestros, nuestras.</Bullet>

        <Text style={base.h3}>De Comunicación U03 (p. 38–39)</Text>
        <Bullet>Funciones: presentar a alguien, hablar de la familia, decir la hora.</Bullet>
        <Bullet>Verbo «estar» (3.ª persona singular, locativo).</Bullet>

        <Text style={base.h3}>De la propia sección de Destrezas (Caja 1, p. 40, con 9 tarjetas nuevas)</Text>
        <Bullet>Lugares de trabajo y estudio: hotel, hospital, instituto.</Bullet>
        <Bullet>Vida escolar: curso, deberes.</Bullet>
        <Bullet>Adjetivos de edad: mayor, pequeño.</Bullet>
        <Bullet>Programación de televisión (para la actividad de p. 41): telediario, documental.</Bullet>

        <Callout title="Tres novedades discursivas de la píldora 3.2" color={C.flower} bg={C.flowerSoft}>
          <View>
            <Bullet color={C.flower}>Conciencia de género textual (#01): el alumno distingue formalmente un correo electrónico de otros géneros digitales (chat, post) por sus rasgos formales (asunto, firma, despedida frente a emoji, hashtag, like).</Bullet>
            <Bullet color={C.flower}>Estructura del texto como capas separables (#02 a #04): la idea de que un texto tiene partes fijas (que se copian) y partes variables (que se cambian) es nueva; hasta ahora el alumno había trabajado con frases aisladas.</Bullet>
            <Bullet color={C.flower}>Producción guiada con apoyo decreciente (#05 a #07): primer texto completo del curso. El andamiaje (writing frame, tarjetas con conectores integrados, peer checklist) sigue la lógica del Truco del semáforo de la tarjeta de estrategia (Caja 3, tarjeta B): rojo planifica, amarillo escribe, verde revisa.</Bullet>
          </View>
        </Callout>

        <Text style={base.h2}>Errores frecuentes anticipables</Text>
        <Text style={base.body}>
          La píldora está diseñada para neutralizar estos errores, conocidos por el equipo docente y documentados en la fuente (U03-destrezas.md):
        </Text>
        <Bullet color={C.moon}>Estructurales: olvidar saludo o despedida; escribir tipo SMS sin abre tema, por ejemplo «¡Hola, X! Mi padre se llama...».</Bullet>
        <Bullet color={C.moon}>De concordancia verbal: «mi padre trabajan» (3.ª persona plural con sujeto singular). Interferencia frecuente entre sujeto compuesto y simple.</Bullet>
        <Bullet color={C.moon}>De concordancia de posesivos: «mi hermanos» en vez de «mis hermanos». No se ha automatizado todavía la concordancia trabajada en la píldora 3.1.</Bullet>
        <Bullet color={C.moon}>De conector forzado: usar «y» o «también» donde no hay paralelismo real (por ejemplo, una lista de amigos seguida de la especificación de uno solo, donde «también» queda mal aplicado).</Bullet>
        <Bullet color={C.moon}>De pregunta abstracta: «¿Cómo es tu familia?» en vez de la concreta «¿Cuántos hermanos tienes?» paralela a un dato del cuerpo.</Bullet>
        <Bullet color={C.moon}>De vocabulario fuera de la unidad: «un poco difícil» (estructura no asumida en esta unidad), «conmigo» o «contigo» (pronombres preposicionales no abordados), «lo veo», «la veo», «le digo» (átonos), «juntos» (adverbio de modo plural), «cerca de» (locuciones complejas).</Bullet>

        {/* ── MARCO TEÓRICO-METODOLÓGICO ── */}
        <Text style={base.h1}>Marco teórico-metodológico</Text>
        <Text style={base.body}>
          El enfoque de la píldora 3.2 es inductivo-inferencial: el alumno descubre los rasgos del género correo electrónico a partir del modelo de Marta, los analiza, los reproduce con apoyo decreciente y los aplica a sus propios datos personales. Nunca se presenta la regla primero.
        </Text>

        <Text style={base.h2}>El correo electrónico de Marta como worked example</Text>
        <Text style={base.body}>
          La píldora 3.2 se construye en torno a un único texto modelo: el correo electrónico de Marta a Pierre (libro, p. 40). Este texto auténtico cumple tres funciones a la vez:
        </Text>
        <Bullet>Modelo formal: muestra las cinco partes canónicas del género (encabezado, saludo, cuerpo, despedida, firma) que el alumno reconocerá en #01 y ordenará en #02.</Bullet>
        <Bullet>Modelo discursivo: muestra los rasgos del correo electrónico personal informal en español (abre tema, conectores, pregunta al destinatario) que el alumno analizará en #03 y #04.</Bullet>
        <Bullet>Modelo léxico-gramatical: integra todo el vocabulario y la gramática trabajados en las secciones anteriores de la unidad (parentesco, presente regular, verbo «tener», posesivos, verbo «estar» locativo) en un texto coherente y proyectable.</Bullet>

        <Callout title="Por qué un solo modelo" color={C.pill} bg={C.pillSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            La carga cognitiva de la producción escrita es alta: el alumno debe atender estructura, contenido, ortografía, gramática y léxico simultáneamente. Concentrar el andamiaje en un único worked example (Sweller, CLT) evita la dispersión y permite que cada diapositiva añada una capa nueva sobre el mismo texto conocido.
          </Text>
        </Callout>

        <View break />
        <Text style={[base.h2, { marginTop: 0 }]}>Protocolo E (E1 a E5) — específico de la expresión escrita</Text>
        <Text style={base.body}>
          La expresión escrita en el aula sigue un protocolo de cinco fases que articula la guía didáctica del profesor: Modelo, Planificación, Borrador, Revisión entre pares y Versión final. La píldora 3.2 hace explícitas estas cinco fases y las distribuye entre las nueve diapositivas.
        </Text>

        {/* Tabla — Protocolo E */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "30%" }}>Fase del protocolo</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "35%" }}>Diapositivas</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "35%" }}>Técnica principal</Text>
          </View>
          {[
            ["E1 Modelo", "#01 PILI · ¿Email, chat o post? · #02 PILI · Ordena", "Genre awareness (S36); Sentence unscrambling (S8)"],
            ["E1 Modelo (profundización)", "#03 FLORA · Qué se queda y qué cambia · #04 FLORA · Para qué sirve cada frase", "Texto cromático (S73); Consciousness-raising (S74); TLC Deconstruction (S35)"],
            ["E2 Planificación", "#05 VITO · Planifica: de Marta a ti", "Graphic organizers (S13); Guided composition (S4)"],
            ["E3 Borrador", "#06 VITO · Tu correo electrónico: elige y conecta", "Writing frames (S11); Sentence combining (S7)"],
            ["E4 Revisión entre pares", "#07 LUNA · Revisa y comparte (fase 1 y fase 2)", "COPS checklist (S53); Peer response (S55); Peer correction with training (S65)"],
            ["E5 Versión final + consolidación", "#07 LUNA cierre · #08 CHIPI · ¡Ordena el desastre!", "Focused corrective feedback; gamificación lúdica"],
          ].map(([fase, diap, tecnica]) => (
            <View key={fase} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "30%" }}>{fase}</Text>
              <Text style={{ fontSize: 10, width: "35%" }}>{diap}</Text>
              <Text style={{ fontSize: 10, width: "35%" }}>{tecnica}</Text>
            </View>
          ))}
        </View>

        <Callout title="Por qué incluimos #08 (Chipi) como consolidación" color={C.spark} bg={C.sparkSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            El Protocolo E original termina en E5. La píldora añade una fase de consolidación lúdica con el desafío por equipos de Chipi, donde se reordenan correos electrónicos completos de personajes ficticios. No es un test; es una repetición espaciada y motivadora del análisis estructural trabajado en E1.
          </Text>
        </Callout>

        <Text style={base.h2}>Estrategias de expresión escrita aplicadas</Text>
        <Text style={base.body}>
          La píldora aplica las siguientes estrategias del repertorio de expresión escrita de la guía didáctica (referencia: «referencias/analisis-84-estrategias-EE.md»).
        </Text>

        {/* Tabla — Estrategias EE */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "35%" }}>Estrategia</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "65%" }}>Aplicación específica en la píldora</Text>
          </View>
          {[
            ["S4 Guided composition", "Writing frame de #06 con el inicio de cada párrafo dado"],
            ["S7 Sentence combining", "Tarjetas con conectores integrados que se encadenan en #06"],
            ["S8 Sentence unscrambling", "Ordenar bloques del correo electrónico de Marta (#02) y de los correos electrónicos de equipos (#08)"],
            ["S11 Writing frames", "Plantilla guiada con inicio de cada párrafo (#06)"],
            ["S13 Graphic organizers", "Tabla «Marta dice / Tú escribes» (#05)"],
            ["S35 TLC Deconstruction", "Análisis estructural del modelo (#02 y #03)"],
            ["S36 Genre awareness", "Distinción correo electrónico frente a chat y post (#01)"],
            ["S53 COPS checklist", "Capitalization, Order, Punctuation, Spelling (#07)"],
            ["S55 Peer response", "Revisión entre pares con checklist (#07 fase 2)"],
            ["S65 Peer correction with training", "Entrenamiento explícito antes de la revisión (#07)"],
            ["S68 Worked examples (CLT)", "Correo de Marta como ejemplo elaborado (#01 a #03)"],
            ["S73 Input enhancement", "Marcado cromático del modelo (#03)"],
            ["S74 Consciousness-raising", "Preguntas inductivas de Flora sobre funciones discursivas (#04)"],
          ].map(([estrategia, aplicacion]) => (
            <View key={estrategia} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "35%" }}>{estrategia}</Text>
              <Text style={{ fontSize: 10, width: "65%" }}>{aplicacion}</Text>
            </View>
          ))}
        </View>

        <Text style={base.h2}>Anclaje en el Plan Curricular del Instituto Cervantes</Text>
        <Text style={base.body}>
          El género trabajado en esta píldora está incluido explícitamente en el inventario de géneros discursivos del nivel A1 del Plan Curricular del Instituto Cervantes (PCIC), dentro de la sección de géneros de transmisión escrita. La entrada literal es:
        </Text>

        <Callout title="PCIC · Inventario A1-A2 · Géneros de transmisión escrita" color={C.moon} bg={C.moonSoft}>
          <View>
            <Text style={{ fontSize: 11, lineHeight: 1.5, color: C.ink, fontFamily: "Helvetica-Bold", marginBottom: 4 }}>
              «Postales y mensajes electrónicos, breves y sencillos» (Recepción y Producción)
            </Text>
            <Text style={{ fontSize: 9, lineHeight: 1.4, color: C.gray, fontStyle: "italic" }}>
              Plan Curricular del Instituto Cervantes. Niveles de referencia para el español. 7. Géneros discursivos y productos textuales. Inventario A1-A2, sección 1.3 — Géneros de transmisión escrita.
            </Text>
          </View>
        </Callout>

        <Text style={base.body}>
          El PCIC señala que en el nivel A1 el alumno debe ser capaz de comprender y producir este género, siempre que sea breve y sencillo. Esto valida la propuesta pedagógica de la píldora 3.2:
        </Text>
        <Bullet>Brevedad: el alumno produce un correo electrónico de aproximadamente 4 a 6 frases por bloque temático, con un máximo de 2 bloques.</Bullet>
        <Bullet>Sencillez: vocabulario y gramática limitados a los contenidos de la unidad; conectores reducidos a «y» y «también»; registro informal único (entre amigos o compañeros).</Bullet>
        <Bullet>Recepción y producción: la píldora trabaja primero la recepción (lectura del modelo de Marta en #01 a #04) y después la producción (planificación, borrador y versión final en #05 a #07), respetando la progresión que el propio PCIC implica.</Bullet>

        {/* ── EXPLOTACIÓN DIDÁCTICA ── */}
        <Text style={base.h1}>Explotación didáctica</Text>
        <Text style={base.body}>
          En la píldora 3.2 todas las diapositivas son de contenido. A continuación se detallan las instrucciones paso a paso, clic a clic, para cada una. Principio rector: el alumno descubre los rasgos del género correo electrónico por reorganización, observación y producción guiada; no enuncie usted la regla. Las fórmulas se verbalizan al final de cada diapositiva como confirmación de lo observado, nunca como punto de partida.
        </Text>

        {/* SLIDE #01 */}
        <SlideHeading num="01" title="¿Correo electrónico, chat o post?" agent="PILI · E1 Modelo" agentColor={C.star} agentBg={C.starSoft} technique="Genre awareness (S36). Tiempo: ~3-4 min. 2 fases." />
        <Text style={base.body}>
          En pantalla aparece una leyenda con tres categorías y sus iconos: Correo electrónico, Chat y Post. Debajo, una cuadrícula con 15 tarjetas. Cada tarjeta lleva su icono, su nombre y, justo debajo, tres mini-botones de categoría (uno por cada categoría de la leyenda). Las 15 tarjetas son:
        </Text>
        <View style={{ marginBottom: 8, paddingHorizontal: 10, paddingVertical: 6, backgroundColor: "#F5F0E8", borderLeftWidth: 3, borderLeftColor: C.spark, borderRadius: 4 }}>
          <Text style={{ fontSize: 10, lineHeight: 1.6, color: C.ink, fontFamily: "Helvetica-Bold" }}>
            @ arroba  ·  Emoji  ·  #hashtag  ·  De / Para  ·  Nota de voz  ·  Like  ·  Asunto  ·  jajaja  ·  Firma  ·  Foto con filtro  ·  ¡Hola! ¿Qué tal?  ·  Sticker  ·  Un saludo desde…  ·  Visto azul  ·  Adjuntar archivo
          </Text>
        </View>
        <Text style={base.body}>
          El alumno marca uno o más mini-botones de categoría para cada tarjeta según dónde se use ese elemento. Algunas tarjetas pertenecen a una sola categoría (asunto, firma, despedida solo al correo electrónico; nota de voz y visto azul solo al chat; hashtag solo al post); otras son universales y deben marcarse en las tres (saludo, emoji, @ arroba). Cuando una tarjeta tiene todas sus categorías correctamente marcadas, queda con un check verde. Al completar las 15 tarjetas, las que pertenecen al correo electrónico se reorganizan dentro del correo electrónico de Marta para mostrar la estructura del género.
        </Text>
        <Step n={1}>Lea el título en voz alta: «¿Correo electrónico, chat o post?». Pregunte al grupo, a mano alzada: «¿Quién escribe correos electrónicos todavía?». Probablemente pocos o ninguno levantarán la mano: el correo electrónico no es el género digital habitual de su generación, que vive en chats y posts. Aproveche ese silencio o esa minoría para crear expectativa: «Pocos, ¿verdad? Pues hoy aprendemos a escribir uno bien hecho — útil cuando hay que escribir a un profesor, a un amigo de intercambio o pedir información formal a una academia». PILI introduce con la burbuja: «¿Sabéis qué cosas tiene un correo electrónico y qué cosas no?». Deje 5 segundos para que los alumnos observen la leyenda y las 15 tarjetas de la cuadrícula.</Step>
        <Step n={2}>Para las primeras tres tarjetas, señale usted una y pregunte al grupo: «¿Dónde se usa esto: en un correo electrónico, en un chat, en un post o en varios?». Pida que respondan en coro o levantando uno, dos o tres dedos según las categorías que apliquen. Pulse en pantalla los mini-botones de categoría que el grupo haya señalado. Si la combinación es correcta, la tarjeta queda con un check verde; si falta o sobra alguna, la tarjeta sigue pendiente y PILI da una pista, sin que usted intervenga con la respuesta.</Step>
        <Step n={3}>A partir de la cuarta tarjeta, cambie a turnos individuales: pida a un alumno que pulse los mini-botones que considere correctos. Vaya alternando alumnos para que participen distintos. Si un alumno duda, invite al compañero de al lado a ayudarle: «Pregúntale a tu compañero, decidid juntos». Esta variante en parejas dura una o dos tarjetas y luego se vuelve a turnos individuales. Mantenga ritmo rápido.</Step>
        <Step n={4}>Cuando aparezca una tarjeta universal (por ejemplo, «¡Hola! ¿Qué tal?» o «Emoji») marcada correctamente en las tres categorías, detenga el ritmo y pregunte al grupo: «¿Por qué creéis que esta cabe en los tres?». Deje que dos o tres voluntarios respondan. La conclusión esperada es que es un elemento que se usa en cualquier comunicación digital. No formalice; solo confirme la observación.</Step>
        <Step n={5}>Al completarse las 15 tarjetas, PILI conecta con la fase 2: «Ahora vamos a ver un correo electrónico de verdad». Las tarjetas que pertenecen al correo electrónico se reorganizan y aparecen dentro del correo electrónico de Marta (libro, p. 40), cada parte etiquetada con su barra de color: DE/PARA, ASUNTO, SALUDO, CUERPO (cuatro párrafos), DESPEDIDA y FIRMA.</Step>
        <Step n={6}>Lea la estructura señalando cada parte en pantalla. Pida al grupo que repita en coro el nombre de cada parte mientras usted las señala (de izquierda a derecha y de arriba abajo). PILI cierra: «¡Así es un correo electrónico! Tiene partes muy claras: De, Para, Asunto, Saludo, Cuerpo, Despedida y Firma». Esta es la primera vez que se nombran las cinco partes canónicas del género, como confirmación de lo que el grupo acaba de clasificar, no como punto de partida.</Step>
        <Callout title="Objetivo pedagógico" color={C.star} bg={C.starSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            La clasificación por categorías obliga al grupo a procesar las características formales de cada género digital antes de cualquier explicación. Las dinámicas variadas (mano alzada, coro, dedos, turno individual, pareja, voluntarios) mantienen la atención y aseguran que distintos alumnos participen. El error con feedback inmediato evita correcciones del profesor y mantiene clima positivo. La fase 2 transforma las tarjetas abstractas en partes de un correo electrónico real (el de Marta): el grupo descubre la estructura por reorganización, no por explicación. Esta diapositiva corresponde a la fase E1 (Modelo / Worked example) del Protocolo E y al paso 1 de la tarjeta de estrategia («Lee el modelo»). Aplica el principio del worked example effect (CLT, Sweller): se concentra el andamiaje en un único modelo conocido, lo que reduce la carga cognitiva en la fase de producción posterior.
          </Text>
        </Callout>

        {/* SLIDE #02 */}
        <SlideHeading num="02" title="Ordena el correo electrónico" agent="PILI · E1 Modelo" agentColor={C.star} agentBg={C.starSoft} technique="Sentence unscrambling (S8). Tiempo: ~3 min. 2 fases." />
        <Text style={base.body}>
          En pantalla aparece, a la izquierda, el esqueleto de un correo electrónico con seis huecos vacíos numerados del 1 al 6. A la derecha, las seis piezas del correo electrónico de Marta aparecen desordenadas en un banco, cada una con su etiqueta de color: DE / PARA, ASUNTO, SALUDO, CUERPO, DESPEDIDA y FIRMA. Para colocar una pieza, primero se pulsa la pieza (queda seleccionada) y luego el hueco donde va. Si la pieza coincide con la posición correcta, queda anclada con su color; si no, el hueco vibra.
        </Text>
        <Step n={1}>Lea el título en voz alta: «Ordena el correo electrónico». PILI introduce con la burbuja: «¿Recordáis las partes del correo electrónico? ¡Están desordenadas! Colocadlas en su sitio». Conecte con la diapositiva anterior: «En la pantalla anterior vimos cuáles eran las partes; ahora las vamos a colocar en orden». Pulse usted el botón SIGUIENTE para entrar en la fase 1.</Step>
        <Step n={2}>Sin tocar todavía la pantalla, pregunte al grupo: «¿Cuál de estas seis piezas creéis que va primero?». Deje que el grupo responda a viva voz, libremente. Si llegan a un consenso rápido (por ejemplo, «¡DE / PARA!»), siga; si no, escuche dos o tres propuestas y elija la más repetida con un comentario neutro: «Vamos a comprobar si es esa».</Step>
        <Step n={3}>Pulse usted la pieza que el grupo ha dicho y, después, pulse el hueco 1. Si acierta, la pieza queda anclada con su color y el hueco se ilumina; si la mayoría se equivocó, el hueco vibra y usted comenta: «Pues no, no era esa. ¿Cuál ahora?». Repita la pregunta abierta hasta que el grupo acierte. Mantenga el ritmo ágil.</Step>
        <Step n={4}>Para la pieza 2 (ASUNTO), repita la misma dinámica: pregunta abierta, respuesta a viva voz, usted pulsa pieza y hueco según lo que diga la mayoría. A partir de la pieza 3, simplifique la pregunta: «¿Cuál ahora?». Pida una respuesta en coro o, alternando, a un alumno concreto a quien señale.</Step>
        <Step n={5}>Cuando le toque colocar CUERPO, detenga el ritmo y pregunte al grupo: «El cuerpo es la parte más larga del correo. ¿Sobre qué creéis que le escribe Marta a su amigo Pierre? A) Sobre el tiempo en Cádiz y la playa. B) Sobre su familia, sus amigos y su instituto. C) Sobre fútbol y videojuegos». Espere la respuesta del grupo a viva voz o a mano alzada. La correcta es la B. Confirme: «Sí, eso es el CUERPO: lo que tú cuentas a la otra persona. Vamos a verlo enseguida». Coloque la pieza CUERPO y siga.</Step>
        <Step n={6}>Al colocarse las seis piezas correctamente, el correo electrónico aparece completo con las seis partes en orden y con su barra de color lateral. PILI cierra: «¡Perfecto! Un correo electrónico siempre sigue este orden. Ahora Flora os va a enseñar algo importante». Pida al grupo que repita en coro las seis partes en orden mientras usted las señala de arriba abajo: «De / Para — Asunto — Saludo — Cuerpo — Despedida — Firma».</Step>
        <Callout title="Objetivo pedagógico" color={C.star} bg={C.starSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            El reordenamiento (sentence unscrambling) obliga al grupo a procesar la estructura secuencial del género antes de producirla. La respuesta colectiva a viva voz antes de cada colocación activa la hipótesis y hace que todo el grupo participe. La detención reflexiva en la pieza CUERPO consolida la idea de que el contenido va siempre encuadrado por las fórmulas fijas. La repetición coral final automatiza la secuencia para que el grupo la reconozca rápidamente cuando llegue a la fase de producción. Esta diapositiva extiende la fase E1 (Modelo / Worked example) del Protocolo E iniciada en #01: ahora se reconstruye el modelo, no solo se reconoce. Aplica el principio del worked example effect (CLT, Sweller) y la estrategia Sentence unscrambling (S8).
          </Text>
        </Callout>

        {/* SLIDE #03 */}
        <SlideHeading num="03" title="¿Qué se queda y qué cambia?" agent="FLORA · E1 Modelo (profundización)" agentColor={C.flower} agentBg={C.flowerSoft} technique="Texto cromático (S73). Tiempo: ~5-6 min. 4 fases acumulativas." />
        <Text style={base.body}>
          En pantalla aparece el correo electrónico de Marta completo. A la izquierda hay una leyenda con tres categorías que se activan en orden, cada una con su color:
        </Text>
        <Bullet color="#1E6091">Correo electrónico (azul) — las frases fijas del género.</Bullet>
        <Bullet color="#B8860B">Tema (dorado) — las frases que abren o cambian de tema.</Bullet>
        <Bullet color="#B5179E">Info. personal (magenta) — los datos personales del emisor.</Bullet>
        <Text style={base.body}>
          Cuando active una categoría, vaya pulsando los segmentos del correo que pertenecen a ella. Los aciertos se iluminan con el color correspondiente; los errores hacen vibrar el segmento. Tras identificar las tres categorías, en una cuarta fase aparece un botón de ciclo (↻) en cada dato personal que permite rotar entre tres alternativas, mostrando que el esqueleto se mantiene y solo cambia el contenido.
        </Text>
        <Step n={1}>Lea el título en voz alta: «¿Qué se queda y qué cambia?». FLORA introduce con la burbuja: «Vamos a mirar otra vez el correo de Marta, con cuidado». Lea usted el correo entero de principio a fin, sin interrumpir. Pulse después el botón SIGUIENTE.</Step>
        <Step n={2}>Fase EMAIL (azul). Active usted la categoría Correo electrónico pulsando la leyenda. Pregunte al grupo: «Marta escribe muchos correos a sus amigos. ¿Qué frases son iguales en todos?». Acepte respuestas a viva voz. Las correctas son: el saludo («¡Hola, Pierre! ¿Qué tal estás?»), la despedida («¡Un saludo desde Cádiz!») y la firma («Marta»). Vaya pulsándolas en pantalla a medida que el grupo las dice. Si proponen una incorrecta, el segmento vibra y FLORA da pista. Cierre: «Eso es lo que se queda: las fórmulas fijas».</Step>
        <Step n={3}>Fase TEMA (dorado). Active usted la categoría Tema. Mire al grupo y pregunte con tres opciones: «Mirad estas frases del correo de Marta: "Hoy te hablo de mi familia", "Y en el instituto, ¿qué tal?", "Este curso es un poco más difícil". ¿Qué tienen en común? A) Son todas preguntas. B) Todas presentan un tema nuevo. C) Son fórmulas fijas como el saludo». Espere respuesta a viva voz. Correcta: B. Confirme: «Eso es: cada vez que Marta cambia de tema, lo anuncia con una frase así. Son frases que abren un tema». Vaya pulsando las frases TEMA en pantalla. Cierre: «Estas frases son medio fijas: la forma es parecida, lo que cuentan cambia».</Step>
        <Step n={4}>Fase PERSONAL (magenta). Active usted la categoría Info. personal. Mire al grupo y pregunte: «Ya tenemos el azul y el dorado. Lo que queda en el correo, ¿qué es?». Acepte respuestas a viva voz. La esperada: los datos personales de Marta (su familia, sus amigos, sus asignaturas). Vaya pulsando los segmentos correspondientes. Cierre: «Y esto es lo que cambia: la vida de cada persona».</Step>
        <Step n={5}>Fase 4 PRÁCTICA con alternativas. Junto a cada dato personal aparece un botón de ciclo (↻). Pulse usted el primer botón (los datos sobre la familia): el texto cambia a una alternativa («mi padre es profesor y mi madre es médica…»). Lea la alternativa en voz alta. Pulse otra vez: cambia («mi madre trabaja en una tienda. No tengo hermanos.»). Comente al grupo: «¿Veis? El esqueleto es el mismo. Los datos cambian. Cada persona cuenta su vida». Repita con uno o dos segmentos más (amigos o instituto). Cierre con la idea clave: «Vais a escribir vuestro correo. El saludo y la despedida los copiáis. El cuerpo lo hacéis vuestro».</Step>
        <Step n={6}>FLORA conecta con la siguiente diapositiva: «Ya sabéis lo que cambia y lo que se queda. Y ahora, ¿para qué sirve cada frase del cuerpo? Lo vamos a ver ahora». Avance a la diapositiva #04.</Step>
        <Callout title="Objetivo pedagógico" color={C.flower} bg={C.flowerSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Esta diapositiva es el corazón de la fase E1 (profundización del worked example): el alumno descompone el modelo en tres capas (estructura fija, apertura de tema, contenido personal). El descubrimiento es inductivo y acumulativo: primero lo más obvio (saludo, despedida, firma), después lo intermedio (las frases que presentan tema) y por último lo personal (lo que cambia siempre). La pregunta de tres opciones del paso 3 fija la idea de las frases-puente, que es la categoría más sutil. La fase 4 con alternativas demuestra empíricamente que el esqueleto se reutiliza y los datos cambian, lo que prepara directamente la planificación del propio correo en #05. Aplica las estrategias de texto cromático (S73, Input enhancement) y consciousness-raising (S74), centradas en hacer visible lo que de otra forma quedaría implícito.
          </Text>
        </Callout>

        {/* SLIDE #04 */}
        <SlideHeading num="04" title="¿Para qué sirve cada parte?" agent="FLORA · E1 Modelo (profundización)" agentColor={C.flower} agentBg={C.flowerSoft} technique="Consciousness-raising (S74). Tiempo: ~6-7 min. 2 fases." />
        <Text style={base.body}>
          En pantalla aparece el correo electrónico de Marta completo. A la izquierda hay una leyenda con tres funciones discursivas, cada una con su color:
        </Text>
        <Bullet color="#2E86C1">ABRE TEMA (azul) — frases que presentan algo nuevo o cambian de tema.</Bullet>
        <Bullet color="#D35400">CONECTA (naranja) — palabras que unen dos ideas («y», «y también»).</Bullet>
        <Bullet color="#8E44AD">PREGUNTA (morado) — preguntas dirigidas al lector.</Bullet>
        <Text style={base.body}>
          En la fase 1, al pulsar una frase del correo aparece una barra con las tres categorías. Hay que elegir la función correcta. Si acierta, todas las frases del mismo grupo se anclan con su color; si falla, FLORA da una pista. En la fase 2, los huecos del correo aparecen vacíos y las 7 piezas únicas quedan en un banco desordenado: hay que recolocar cada pieza en su hueco contextual.
        </Text>
        <Step n={1}>Lea el título: «¿Para qué sirve cada parte?». FLORA introduce con la burbuja: «Vamos a mirar las frases del correo de Marta con cuidado». Conecte con la diapositiva anterior: «Ya sabéis lo que se queda y lo que cambia. Ahora vamos a ver para qué sirve cada parte». Pulse el botón SIGUIENTE para entrar en la fase 1.</Step>
        <Step n={2}>Fase 1, presentación de las funciones. En pantalla aparece la leyenda con las tres funciones. Léala en voz alta señalándola: «Las frases del correo de Marta hacen tres cosas distintas: ABREN un tema, CONECTAN dos ideas, o PREGUNTAN a Pierre. Vamos a verlas».</Step>
        <Step n={3}>Primera identificación con tres opciones. Pulse usted la frase «Hoy te hablo de mi familia:». Aparece una barra con las tres funciones. Mire al grupo y pregunte: «¿Para qué sirve esta frase? "Hoy te hablo de mi familia:". A) ABRE TEMA: presenta algo nuevo. B) CONECTA: une dos ideas. C) PREGUNTA: pregunta a Pierre». Espere respuesta a viva voz. Correcta: A. Pulse usted ABRE TEMA. La frase se ancla en azul y las otras dos frases ABRE TEMA del correo («Y en el instituto, ¿qué tal el nuevo curso?» y «Este curso es un poco más difícil.») también se anclan automáticamente. Confirme: «Eso es: estas tres frases abren un tema nuevo».</Step>
        <Step n={4}>Segunda identificación con respuesta libre. Pulse usted una de las palabras «y» que aparecen en el correo. Pregunte al grupo: «¿Y esta palabra tan pequeña, para qué sirve?». Acepte respuesta a viva voz. La esperada: une, conecta. Pulse usted CONECTA. Todas las palabras «y» y la pieza «y también» se anclan en naranja. Confirme: «Eso es: las palabras pequeñas que unen ideas».</Step>
        <Step n={5}>Tercera identificación (las preguntas). Quedan las dos preguntas: «¿Y tú, cuántos hermanos tienes?» y «¿Tú también tienes muchos deberes este año?». Pulse usted la primera y pregunte al grupo: «¿Y esta frase, qué hace?». Acepte respuesta a viva voz. La esperada: pregunta. Pulse usted PREGUNTA. Las dos preguntas se anclan en morado. Comente al grupo: «Marta no solo cuenta cosas. También pregunta a Pierre. Así mantiene la conversación».</Step>
        <Step n={6}>Cierre de fase 1. Con las tres categorías identificadas, FLORA dice: «¡Bien visto! Tres funciones distintas». Señale el correo entero, ahora con todos los segmentos coloreados, y diga: «Mirad: el correo electrónico tiene tres colores. Tres funciones. Así es un correo de verdad, con sentido». Pulse el botón SIGUIENTE para entrar en la fase 2.</Step>
        <Step n={7}>Fase 2, recolocación contextual. Los huecos del correo aparecen vacíos y las 7 piezas únicas quedan en un banco desordenado. Diga al grupo: «Ahora hay huecos. Vamos a colocar las piezas en su sitio. Decidme dónde va cada una». Pulse usted una pieza del banco y pregunte: «¿En qué hueco va esta?». Acepte respuestas a viva voz; pulse el hueco más votado. Si encaja, se ancla con su color; si no, FLORA da una pista contextual («Es ABRE TEMA, pero leed el contexto: ¿encaja aquí?»). Repita con las 7 piezas a ritmo ágil.</Step>
        <Step n={8}>Conexión con la siguiente diapositiva. Con todas las piezas colocadas, FLORA cierra: «¡Correo electrónico completo! Ya sabéis qué partes son fijas, qué parte cambia y para qué sirve cada frase. Ahora Vito os va a ayudar a planificar el vuestro». Avance a la diapositiva #05.</Step>
        <Callout title="Objetivo pedagógico" color={C.flower} bg={C.flowerSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Esta diapositiva completa la fase E1 del Protocolo E sobre el modelo (correo de Marta): tras la estructura del género (#02) y las capas de contenido (#03), aquí se identifican las funciones discursivas del cuerpo. La fase 1 hace explícitas las tres funciones (abrir tema, conectar, preguntar) mediante categorización; la fase 2 las consolida mediante reconstrucción contextual: el alumno tiene que decidir dónde encaja cada pieza, lo que obliga a procesar la coherencia interna del correo. La pregunta de tres opciones en el paso 3 ancla la primera categoría con un descubrimiento explícito; las siguientes se identifican por respuesta libre, ya con el patrón visual establecido. Aplica las estrategias de consciousness-raising (S74) y TLC Deconstruction (S35), que son las técnicas centrales de la fase E1 para hacer visible la organización discursiva de un texto modelo.
          </Text>
        </Callout>

        {/* SLIDE #05 */}
        <SlideHeading num="05" title="Planifica: de Marta a ti" agent="VITO · E2 Planificación" agentColor={C.pill} agentBg={C.pillSoft} technique="Graphic organizers (S13) + Guided composition (S4). Tiempo: ~7-8 min. 7 pasos progresivos." />
        <Text style={base.body}>
          En pantalla aparece una tabla de dos columnas: a la izquierda, «Marta dice…», con fragmentos del correo electrónico de Marta marcados con su color de tema; a la derecha, «Tú escribes…», con el inicio de la frase paralela que cada alumno tiene que completar con sus propios datos. La tabla aparece vacía al principio y se va revelando por bloques temáticos: padre y madre (2 filas), hermanos (3 filas, con la opción «soy hijo/a único/a»), amigos (1 fila), deberes (1 fila) y asignatura favorita (1 fila). En la parte superior, una pill negra recuerda durante toda la actividad: «Apuntad vuestros datos en el cuaderno». Tres colores marcan los temas: FAMILIA (rojo), AMIGOS (dorado), ESCUELA (azul).
        </Text>
        <Text style={base.body}>
          A diferencia de las diapositivas anteriores, aquí los alumnos escriben en el cuaderno, no responden a viva voz. Avance la tabla paso a paso y deje tiempo entre cada paso para que terminen de apuntar.
        </Text>
        <Step n={1}>Introducción. Lea el título: «Planifica: de Marta a ti». VITO introduce con la burbuja: «Vamos a planificar el correo. Marta escribió el suyo. ¡Ahora toca escribir uno propio!». Pida al grupo: «Sacad el cuaderno y un boli. Vamos a hacer una tabla como esta». Espere a que todos estén listos. Pulse el botón SIGUIENTE para revelar las dos primeras filas.</Step>
        <Step n={2}>Familia: padre y madre. Aparecen las dos primeras filas en rojo (FAMILIA): «mi padre trabaja en…» y «mi madre trabaja en…». VITO dice: «Empieza por aquí: ¿dónde trabajan en tu casa? Completa las dos filas». Lea las dos frases en voz alta. Diga al grupo: «Pensad en vuestros padres y escribid las dos frases en el cuaderno con vuestros datos. Si alguien no tiene padre o madre, escribe solo la fila que usa». Mientras escriben, circule por las mesas para resolver dudas. Cuando vea que la mayoría ha terminado, pulse SIGUIENTE.</Step>
        <Step n={3}>Familia: hermanos. Aparecen tres filas en rojo: «mi hermano/a … tiene … años», «mi hermana/o … tiene … años» y la opción «soy hijo/a único/a». VITO dice: «¿Tienes hermanos? Escribe nombre y edad. Si no, escribe: "soy hijo/a único/a"». Lea las opciones en voz alta. Comente: «Cada uno tiene su familia. No hay una respuesta correcta, hay vuestra respuesta». Deje tiempo para apuntar. Antes de avanzar, pregunte rápido a viva voz: «¿Cuántos sois hijos únicos?». Cuente las manos sin más comentario. Pulse SIGUIENTE.</Step>
        <Step n={4}>Amigos. Aparece una fila en dorado (AMIGOS): «tengo muchos amigos: …». VITO dice: «Ahora tus amigos: escribe 2-3 nombres de clase». Comente al grupo: «Pueden ser amigos del instituto o de fuera. Marta escribe los nombres de sus compañeros». Espere a que apunten. Pulse SIGUIENTE.</Step>
        <Step n={5}>Escuela: deberes. Aparece una fila en azul (ESCUELA): «tengo deberes de…». VITO pregunta: «¿De qué asignaturas tienes más deberes?». Lea la fila en voz alta. Diga al grupo: «Pensad en esta semana. ¿De qué asignaturas tenéis más deberes? Una o dos asignaturas, no más». Espere a que apunten. Pulse SIGUIENTE.</Step>
        <Step n={6}>Escuela: asignatura favorita. Aparece la última fila en azul: «me gusta mucho (asignatura favorita)…». VITO pregunta: «Última fila: ¿cuál es tu asignatura favorita?». Diga al grupo: «Una sola, la favorita. La que más os gusta». Espere a que apunten. Pulse SIGUIENTE.</Step>
        <Step n={7}>Cierre: plan listo. El título cambia a «¡Plan listo!» y se ven todas las filas completas en la columna izquierda. VITO cierra: «¡Ya está el plan! En la siguiente diapositiva escribimos el correo paso a paso». Antes de avanzar, pida a 2-3 alumnos voluntarios que lean en voz alta una sola fila de su cuaderno (por ejemplo, la asignatura favorita o el nombre de su mejor amigo). Esto valida que han escrito y crea expectativa. Avance a la diapositiva #06.</Step>
        <Callout title="Objetivo pedagógico" color={C.pill} bg={C.pillSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Esta diapositiva es la fase E2 (Planificación) del Protocolo E. El alumno no produce todavía un texto: organiza la información personal que va a usar como contenido en la fase E3 (#06). La tabla actúa como organizador gráfico (S13) que reduce la carga cognitiva de la planificación: el alumno ve el modelo de Marta a la izquierda como referencia y solo tiene que decidir la información paralela a la derecha. La revelación progresiva por bloques temáticos (familia, amigos, escuela) evita la sobrecarga: cada bloque concentra la atención en un solo dominio. La opción «soy hijo/a único/a» es inclusiva: respeta las distintas configuraciones familiares sin pedir excusas. El ritmo es flexible: avance solo cuando vea que la mayoría ha terminado de apuntar, porque si se va más rápido la fase E3 falla. Aplica las estrategias de Graphic organizers (S13) y Guided composition (S4).
          </Text>
        </Callout>

        {/* SLIDE #06 */}
        <SlideHeading num="06" title="Tu correo electrónico: elige y conecta" agent="VITO · E3 Borrador" agentColor={C.pill} agentBg={C.pillSoft} technique="Writing frames (S11) + Sentence combining (S7). Tiempo: ~10-12 min. 8 pasos progresivos." />
        <Text style={base.body}>
          En pantalla aparecen tarjetas con frases listas para copiar, agrupadas en seis bloques que se revelan uno a uno, cada uno con su color de tema:
        </Text>
        <Bullet color="#3F6B14">SALUDO (verde) — 1 tarjeta fija para todos.</Bullet>
        <Bullet color="#C0392B">TUS PADRES (rojo) — 3 tarjetas alternativas (padre y madre, solo madre, solo padre). Cada alumno elige la que encaja con su situación.</Bullet>
        <Bullet color="#C0392B">TUS HERMANOS (rojo) — 3 tarjetas alternativas (cada hermano/a, más de uno/a, hijo/a único/a) más una tarjeta de cierre obligatoria: «¿Y tú?».</Bullet>
        <Bullet color="#D68910">AMIGOS (dorado) — 2 tarjetas (amigos de clase, mejor amigo/a). Elige una o las dos.</Bullet>
        <Bullet color="#2E86C1">ESCUELA (azul) — 3 tarjetas (deberes, asignatura favorita, pregunta a Pierre).</Bullet>
        <Bullet color="#7C5CFF">DESPEDIDA (morado) — 2 tarjetas fijas (despedida + firma).</Bullet>
        <Text style={base.body}>
          Cada tarjeta lleva los conectores integrados resaltados en naranja («Hoy te hablo de mi familia:», «y», «Y», «Yo este año», «Este curso», «A mí», «¿Tú también», «¿Y tú?»). Los alumnos copian las tarjetas que eligen en el cuaderno, en orden, y al final tienen un correo electrónico coherente. Los huecos se rellenan con los datos apuntados en la diapositiva #05.
        </Text>
        <Step n={1}>Introducción. Lea el título: «Tu correo electrónico: elige y conecta». VITO introduce con la burbuja: «Ahora toca escribir el correo. Elige las tarjetas que necesites y cópialas en orden». Diga al grupo: «Tenéis los datos del cuaderno de la pantalla anterior. Ahora vais a copiar las frases que aparecen en pantalla y a rellenar los huecos con vuestros datos. No copiéis todas: solo las que encajan con vosotros». Pulse EMPEZAR para revelar el primer grupo.</Step>
        <Step n={2}>SALUDO (verde). Aparece una tarjeta verde con la frase: «¡Hola, ___! ¿Qué tal estás?». VITO dice: «Empieza con el saludo. Es igual para todos». Léala en voz alta. Diga al grupo: «Copiad esta frase en el cuaderno. En el hueco, poned el nombre del amigo o amiga al que escribís». Espere a que apunten. Pulse SIGUIENTE.</Step>
        <Step n={3}>TUS PADRES (rojo). Aparecen tres tarjetas rojas con tres opciones alternativas. VITO dice: «Habla de tus padres. Elige la opción que encaja contigo». Lea las tres opciones en voz alta. Mire al grupo y pregunte con tres opciones: «Si tenéis padre y madre, ¿qué tarjeta copiáis? A) Las tres, una detrás de otra. B) Solo la primera: padre y madre. C) Una cualquiera, da igual». Espere respuesta a viva voz. Correcta: B. Confirme: «Eso es: una sola, la que encaja con vosotros. Si solo vivís con uno de los dos, copiáis la opción correspondiente». Diga: «Copiad la opción y rellenad los huecos con los datos del cuaderno». Espere a que apunten. Pulse SIGUIENTE.</Step>
        <Step n={4}>TUS HERMANOS (rojo). Aparecen tres tarjetas rojas (cada hermano, más de uno, hijo único) y una tarjeta de cierre obligatoria en la parte inferior: «¿Y tú?». VITO dice: «Habla de tus hermanos. Después acaba siempre con ¿Y tú? para preguntar a tu amigo». Léalo en voz alta. Diga al grupo: «Tres opciones: una si tenéis un hermano o hermana, otra si tenéis varios, otra si sois hijo o hija único. Elegid la vuestra y copiadla. La tarjeta «¿Y tú?» la copia todo el mundo al final: es una pregunta a vuestro amigo, no se puede saltar». Espere a que apunten. Pulse SIGUIENTE.</Step>
        <Step n={5}>AMIGOS (dorado). Aparecen dos tarjetas doradas: amigos de clase y mejor amigo/a. VITO dice: «Elige una o dos tarjetas de amigos». Lea las dos. Diga al grupo: «Aquí podéis copiar una o las dos. Si tenéis un mejor amigo o amiga, copiad las dos. Si no, copiad solo la primera con los nombres de los amigos de clase». Espere a que apunten. Pulse SIGUIENTE.</Step>
        <Step n={6}>ESCUELA (azul). Aparecen tres tarjetas azules: deberes, asignatura favorita, pregunta a Pierre. VITO dice: «Escribe sobre la escuela. Copia los conectores en naranja». Lea las tres. Diga al grupo: «Copiad las tarjetas que necesitáis. Lo mínimo: la de los deberes y la de la asignatura favorita. La de la pregunta es opcional, pero si la copiáis, vuestro correo queda más natural». Espere a que apunten. Pulse SIGUIENTE.</Step>
        <Step n={7}>DESPEDIDA (morado). Aparecen dos tarjetas moradas: «¡Un saludo desde ___!» y la firma. VITO dice: «Termina con la despedida y firma con tu nombre». Léalas. Diga al grupo: «Copiad las dos. En la primera, poned el nombre de vuestra ciudad. En la segunda, vuestro nombre». Espere a que apunten. Pulse SIGUIENTE.</Step>
        <Step n={8}>Cierre: correo terminado. Aparece un mensaje de celebración. VITO cierra: «¡Correo terminado! Ahora leed vuestro correo en parejas. Después, vais a revisar con Luna». Diga al grupo: «Cerrad el cuaderno y leed vuestro correo en pareja, en silencio. Solo lo leéis, no os corregís todavía. Eso lo vamos a hacer con Luna». Espere a que terminen la lectura en parejas. Avance a la diapositiva #07.</Step>
        <Callout title="Objetivo pedagógico" color={C.pill} bg={C.pillSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Esta diapositiva es la fase E3 (Borrador) del Protocolo E. El alumno produce ahora el primer borrador de su correo electrónico, con un andamiaje fuerte: las tarjetas son writing frames (S11) que dan el inicio y los conectores ya integrados; el alumno solo decide qué tarjetas copia y rellena los huecos con sus datos del paso #05. La organización por bloques temáticos con colores distintos (saludo verde, familia roja, amigos dorado, escuela azul, despedida morado) reduce la carga cognitiva: el alumno solo procesa un dominio cada vez. Las opciones inclusivas (vivir con uno o ambos progenitores, ser hijo o hija único) aseguran que cada alumno encuentra una tarjeta que encaja con su situación. La instrucción de copiar literalmente la tarjeta «¿Y tú?» después de hablar de los hermanos consolida la función discursiva PREGUNTA trabajada en #04. Aplica las estrategias de Writing frames (S11) y Sentence combining (S7).
          </Text>
        </Callout>

        {/* SLIDE #07 */}
        <SlideHeading num="07" title="Revisa y comparte" agent="LUNA · E4 Revisión + E5 Versión final" agentColor={C.moon} agentBg={C.moonSoft} technique="COPS checklist (S53) + Peer response (S55). Tiempo: ~8-10 min. 2 fases." />
        <Text style={base.body}>
          En pantalla aparecen dos fases secuenciales:
        </Text>
        <Bullet>Fase 1 (autoevaluación): una checklist con 5 ítems que se revelan uno a uno. El alumno comprueba en su propio cuaderno y, dirigido por el profesor, se marca SÍ o NO para cada ítem. Los 5 ítems son: ¿tiene saludo?, ¿tiene despedida?, ¿cada frase tiene un verbo?, ¿los verbos están bien conjugados?, ¿las mayúsculas están bien?</Bullet>
        <Bullet>Fase 2 (revisión entre pares): 5 pasos visuales con iconos que se revelan uno a uno: intercambia cuaderno, lee y comprueba, marca lo que te gusta, marca lo que no entiendes, corrige con los comentarios. Esta fase es soporte visual para una actividad física (intercambio de cuadernos en parejas).</Bullet>
        <Step n={1}>Introducción. Lea el título: «¿Tu correo electrónico está completo?». LUNA introduce con la burbuja: «Vamos a comprobar vuestro correo. ¿Está todo?». Diga al grupo: «Abrid el cuaderno con vuestro correo. Vamos a comprobar cinco cosas, una por una». Pulse el botón SIGUIENTE para activar el primer ítem.</Step>
        <Step n={2}>Ítems 1 y 2: principio y final. Active el ítem 1: «¿Tiene principio? (saludo)». Pista: «Busca: ¡Hola, ___!». Diga al grupo: «Mirad la primera línea del cuaderno. ¿Tenéis "¡Hola, ___! ¿Qué tal estás?"?». Acepte respuesta a viva voz. Si la mayoría dice sí, pulse SÍ; si alguno dice no, comente: «Si os falta, lo escribís ahora». Pulse SIGUIENTE. Repita lo mismo con el ítem 2: «¿Tiene final? (despedida)». Pista: «Busca: ¡Un saludo desde...!». Diga: «Mirad la última línea. ¿Está "¡Un saludo desde...!" y vuestro nombre?».</Step>
        <Step n={3}>Ítem 3: cada frase tiene un verbo. Active el ítem 3: «¿Cada frase tiene un verbo?». Pista: «trabaja, tiene, estudia, vivo...». Antes de responder, recuerde al grupo qué es un verbo con un ejemplo del propio correo: «Mirad: en "Mi padre trabaja en un hotel", el verbo es "trabaja". Una frase sin verbo no funciona». Diga: «Mirad cada frase de vuestro correo. ¿Todas tienen verbo?». Acepte respuesta a viva voz. Si dudan, déjeles unos segundos para revisar. Pulse SÍ o NO según el grupo.</Step>
        <Step n={4}>Ítem 4: los verbos están bien conjugados. Active el ítem 4: «¿Los verbos están bien?». Pista: «una persona → trabaja / yo → trabajo». Comente: «Es el punto más importante. Marta dice "mi padre trabaja", no "trabajan". Si vuestro padre trabaja en un sitio, el verbo es "trabaja". Si sois vosotros, "trabajo"». Diga al grupo: «Mirad los verbos de cada frase. ¿La persona y el verbo coinciden?». Acepte respuesta a viva voz. Si alguien dice que ha encontrado un error, dígale: «¡Bien visto! Lo corriges ahora en el cuaderno».</Step>
        <Step n={5}>Ítem 5: mayúsculas y cierre fase 1. Active el ítem 5: «¿Las mayúsculas están bien?». Pista: «Nombres propios y después de punto». Diga al grupo: «Mirad: los nombres de personas, ciudades y asignaturas llevan mayúscula. Y después de punto, también». Acepte respuesta a viva voz. Cuando se hayan respondido los cinco ítems: si todos son SÍ, LUNA dice: «¡Tu correo electrónico está listo! Ahora toca intercambiar». Si hay algún NO, LUNA dice: «Corrige lo que falta y vuelve a comprobar». Si es el caso, dé un momento al grupo para corregir.</Step>
        <Step n={6}>Transición a la revisión entre pares. Pulse el botón AHORA CON TU COMPAÑERO para entrar en la fase 2. Antes de empezar, mire al grupo y pregunte con tres opciones para anclar la actitud correcta: «¿Para qué es la revisión con el compañero? A) Para corregir todos sus errores. B) Para leer y ayudar. C) Para puntuar su correo». Espere respuesta a viva voz. Correcta: B. Confirme con la frase de LUNA: «No es un examen. Es una ayuda». Diga al grupo: «Vais a leer el correo de vuestro compañero. No corregís: solo leéis, marcáis lo que os gusta y marcáis lo que no entendéis».</Step>
        <Step n={7}>Pasos del peer review. En pantalla aparecen los 5 pasos secuenciales con iconos. Pulse cada paso uno a uno y léalo en voz alta: 1) Intercambiad vuestro cuaderno con el compañero o compañera. 2) Leed su correo y comprobad la misma lista de la fase anterior. 3) Marcad con una estrella o un círculo lo que os gusta: frases que suenan bien. 4) Marcad con un signo de interrogación lo que no entendéis: frases confusas. 5) Corregid vuestro correo con los comentarios de vuestro compañero. Diga al grupo: «Tenéis tiempo para leer en silencio el correo del compañero y marcarlo. Cuando los dos acabéis, devolvedlo y corregid el vuestro». Mientras trabajan, circule por las mesas y resuelva dudas individuales sin corregir el correo en bloque.</Step>
        <Step n={8}>Cierre y conexión con #08. Cuando los grupos hayan terminado, LUNA cierra: «Con sus comentarios, escribid la versión final». Diga al grupo: «Esta es la versión final del correo electrónico. Cerrad el cuaderno. Ahora viene Chipi y os trae un desafío para terminar la unidad». Avance a la diapositiva #08.</Step>
        <Callout title="Objetivo pedagógico" color={C.moon} bg={C.moonSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Esta diapositiva cubre las fases E4 (Revisión entre pares) y E5 (Versión final) del Protocolo E. Aplica una estrategia de focused corrective feedback: la checklist concentra la atención en cinco categorías concretas (saludo, despedida, presencia de verbo, conjugación, mayúsculas) y evita la corrección global, que sobrecarga al revisor adolescente. La autoevaluación previa al intercambio garantiza que el alumno revisa primero su propio trabajo, lo que aumenta la metacognición. La revisión entre pares se enmarca como ayuda, no como examen (la pregunta multi-opción del paso 6 ancla esa actitud antes de la actividad), y se centra en marcar lo positivo además de lo confuso, lo que protege el clima emocional del aula. Aplica las estrategias de COPS checklist (S53), Peer response (S55) y Peer correction with training (S65), las tres específicas de la fase E4 del Protocolo E.
          </Text>
        </Callout>

        {/* SLIDE #08 */}
        <SlideHeading num="08" title="¡Ordena el desastre!" agent="CHIPI · Consolidación lúdica" agentColor={C.spark} agentBg={C.sparkSoft} technique="Sentence unscrambling (S8) gamificado por equipos. Tiempo: ~10-15 min según rondas." />
        <Text style={base.body}>
          Esta diapositiva es un juego competitivo por equipos que consolida todo lo aprendido sobre la estructura del correo electrónico personal. No es una evaluación: es práctica lúdica con presión de tiempo y ranking final. Funciona como cierre de la unidad.
        </Text>

        <Text style={base.h3}>Cómo funciona el juego (resumen antes de empezar)</Text>
        <Text style={base.body}>
          Configure el número de equipos y rondas al principio. Después, en cada ronda hay dos fases.
        </Text>

        <Text style={[base.body, { fontFamily: "Helvetica-Bold" }]}>Fase ORDEN — los equipos compiten para descifrar el orden correcto:</Text>
        <Bullet>Aparece en pantalla un correo electrónico desordenado con 8 a 11 fragmentos numerados aleatoriamente. El cronómetro empieza.</Bullet>
        <Bullet>Los equipos escriben el orden en sus cuadernos (no en pantalla).</Bullet>
        <Bullet>Cuando un equipo dice «¡Listo!», pare el cronómetro pulsando ¡LISTO! PARAR. Pida a ese equipo que diga su orden, número a número, y vaya colocando los fragmentos en los huecos.</Bullet>
        <Bullet>Pulse COMPROBAR. Si el orden es correcto, pulse el botón del equipo que acaba de ordenar: gana 15 puntos de orden + bonus de rapidez (15 pts &lt; 30 s, 12 pts &lt; 45 s, 10 pts &lt; 60 s, 7 pts &lt; 90 s, 5 pts &lt; 120 s).</Bullet>
        <Bullet>Si el orden es incorrecto, tiene dos opciones: (a) pulse OTRO EQUIPO y otro equipo lo intenta (solo gana 15 pts de orden, sin bonus de rapidez); (b) si nadie quiere intentarlo, pulse IR A PREGUNTA.</Bullet>

        <Text style={[base.body, { fontFamily: "Helvetica-Bold" }]}>Fase PREGUNTA — comprensión sobre el contenido:</Text>
        <Bullet>Aparece una pregunta sobre el correo con 3 opciones (A, B, C) y un cronómetro de 30 segundos hacia atrás.</Bullet>
        <Bullet>La pregunta va primero al equipo que acertó el orden. Si responde correctamente, gana 10 puntos extra.</Bullet>
        <Bullet>Si el equipo de orden falla o pasa, dé la palabra al siguiente equipo (el que levanta la mano antes o el que quiere responder).</Bullet>
        <Bullet>Cuando alguien dé la respuesta a viva voz, pulse la opción que digan en pantalla. Si es la correcta, pulse el botón de ese equipo. Si han fallado, no pulse ningún equipo todavía: dé la palabra al siguiente.</Bullet>
        <Bullet>Si pasan los 30 segundos sin respuesta correcta, pulse NADIE y avance a la siguiente ronda.</Bullet>

        <Text style={base.body}>
          Pulse SIGUIENTE RONDA para empezar con un correo electrónico nuevo del pool. El sistema baraja los 12 correos electrónicos aleatoriamente.
        </Text>

        <Text style={base.h3}>Sistema de puntos por ronda</Text>
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: C.ink, paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "60%" }}>Categoría</Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10, width: "40%" }}>Puntos</Text>
          </View>
          {[
            ["Orden correcto", "15"],
            ["Bonus de rapidez (solo primer intento)", "3 a 15 según tiempo"],
            ["Comprensión correcta", "10"],
            ["Máximo por ronda", "40"],
          ].map(([cat, pts]) => (
            <View key={cat} style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", paddingVertical: 4 }}>
              <Text style={{ fontSize: 10, width: "60%" }}>{cat}</Text>
              <Text style={{ fontSize: 10, width: "40%", fontFamily: "Helvetica-Bold" }}>{pts}</Text>
            </View>
          ))}
        </View>

        <Text style={base.h3}>Configuración del juego</Text>
        <Bullet>Equipos: 2, 3 o 4.</Bullet>
        <Bullet>Rondas: 3, 5, 8, 10 o 12.</Bullet>
        <Bullet>Pool: 12 correos electrónicos con personajes de ciudades españolas variadas.</Bullet>

        <Step n={1}>Configuración y explicación inicial. Lea el título: «¡Ordena el desastre!». CHIPI introduce con la burbuja: «¿Quién ordena más rápido?». En pantalla aparece la pantalla de SETUP con el nombre del juego, las 12 cabeceras de correos del pool, cómo se juega, puntuación y configuración. Antes de pulsar ¡JUGAR!, explique el juego al grupo con sus propias palabras: «Vais a jugar por equipos. En cada ronda, aparece un correo electrónico desordenado. Tenéis que adivinar el orden correcto y escribirlo en el cuaderno, por ejemplo "3-1-5-7-2-4-6-8". El primer equipo en decir "¡Listo!" tiene la prioridad si acierta. Después, hay una pregunta de comprensión por 10 puntos extra. Gana el equipo con más puntos al final». Decida con el grupo el número de equipos y rondas. Pulse los botones de configuración. Cuando estén formados los equipos y todos tengan abierto el cuaderno con el boli, pulse ¡JUGAR!.</Step>
        <Step n={2}>Fase ORDEN: el correo desordenado. Aparece un correo electrónico con sus fragmentos numerados en desorden. El cronómetro empieza a contar hacia arriba. CHIPI anuncia: «¡Escribid las respuestas!». Diga al grupo: «Mirad bien todos los fragmentos. Escribid en vuestro cuaderno el orden correcto. Cuando vuestro equipo lo tiene, decid en voz alta "¡Listo!"». No intervenga mientras los equipos trabajan.</Step>
        <Step n={3}>Un equipo dice «¡Listo!». Cuando un equipo grita «¡Listo!», pulse ¡LISTO! PARAR. El cronómetro se detiene. Diga a ese equipo: «Decidme el orden, número a número». A medida que el equipo dice cada número, pulse el fragmento correspondiente en pantalla y después pulse el hueco. Cuando todos los fragmentos estén colocados, pulse COMPROBAR.</Step>
        <Step n={4}>Comprobación del orden. Si los huecos se iluminan verdes, el orden está correcto: aparecen los botones de los equipos en pantalla. Pulse el botón del equipo que acaba de ordenar: gana 15 puntos de orden y los puntos de rapidez según el tiempo. CHIPI dice los puntos en su burbuja. Si los huecos vibran y aparece el orden correcto en pequeño, el orden no es correcto: tiene dos opciones. (a) Pulse OTRO EQUIPO: los huecos se vacían y otro equipo puede intentarlo (solo gana puntos de orden, sin rapidez). (b) Pulse IR A PREGUNTA: si ya nadie quiere intentarlo, salta directo a la pregunta de comprensión sin que nadie gane los puntos de orden.</Step>
        <Step n={5}>Fase PREGUNTA: comprensión. Aparece una pregunta sobre el contenido del correo con 3 opciones (A, B, C) y un cronómetro de 30 segundos hacia atrás. CHIPI anuncia: «¡Pregunta de comprensión! 30 segundos». Diga al grupo: «Mirad bien la pregunta. Primero responde el equipo que acertó el orden. Si fallan, responden los otros equipos: el primero que levanta la mano o el que quiere responder».</Step>
        <Step n={6}>Verificar la respuesta. Cuando un equipo dé la respuesta a viva voz, pulse usted la opción que digan en pantalla. La opción correcta se ilumina verde y las otras quedan grises. Si han acertado, pulse el botón de ese equipo: gana 10 puntos. Si han fallado, no pulse ningún botón de equipo todavía: dé la palabra al siguiente. Si pasan los 30 segundos sin respuesta correcta, pulse NADIE.</Step>
        <Step n={7}>Siguiente ronda. Pulse SIGUIENTE RONDA. Aparece un correo electrónico nuevo del pool. Repita los pasos 2 a 6 hasta completar todas las rondas configuradas.</Step>
        <Step n={8}>Resultados finales. Al terminar la última ronda, aparece la pantalla de RESULT con el marcador final y el equipo ganador. CHIPI celebra: «¡Sois unos campeones!». Dé un aplauso al equipo ganador. Diga al grupo: «Esto ya lo sabéis hacer: ordenar y entender un correo electrónico personal. Esto es lo que aprendéis en la unidad». Avance a la diapositiva de cierre.</Step>
        <Callout title="Objetivo pedagógico" color={C.spark} bg={C.sparkSoft}>
          <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>
            Esta diapositiva es la fase de consolidación lúdica de la píldora 3.2 (extensión más allá del Protocolo E). El juego repite el reordenamiento (S8 Sentence unscrambling) trabajado en #02, pero ahora con presión de tiempo y competencia entre equipos: el alumno automatiza el reconocimiento de la estructura del correo electrónico mediante repetición espaciada y motivadora. La pregunta de comprensión al final de cada ronda obliga a leer el correo entero con atención, no solo a memorizar el orden de las piezas. La gamificación con puntos y bonus de rapidez activa la motivación competitiva sin transformar la actividad en evaluación: no hay nota, solo ranking. La variedad del pool (12 correos electrónicos con personajes y ciudades distintas) garantiza que cada partida es diferente y se puede repetir en clases posteriores como repaso. Aplica la estrategia de Sentence unscrambling (S8) y dinámicas de gamificación por equipos.
          </Text>
        </Callout>
      </Page>
    </Document>
  );
}
