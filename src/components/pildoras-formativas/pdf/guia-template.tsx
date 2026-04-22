"use client";

import { Document, Page, Text, View } from "@react-pdf/renderer";
import { C, PERSONAJES, base, Header, Footer, Callout, Bullet } from "./primitives";

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
      {/* ═══════════════ CONTEXTO GRAMATICAL ═══════════════ */}
      <Page size="A4" style={base.page}>
        <Header />
        <Footer />

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
      </Page>
    </Document>
  );
}
