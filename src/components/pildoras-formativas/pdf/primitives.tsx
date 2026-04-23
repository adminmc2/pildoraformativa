/**
 * Primitivos compartidos para generación de PDFs.
 * Colores, estilos base y componentes reutilizables.
 */
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import type { ReactNode } from "react";

/* ── Colores del proyecto (mismos que globals.css) ── */
export const C = {
  ink: "#0A0A0A",
  cream: "#FAF6EC",
  white: "#FFFFFF",
  gray: "#666666",
  // Personajes
  star: "#F5C842",
  starSoft: "#FEF3C7",
  flower: "#E91FCE",
  flowerSoft: "#FCE7F3",
  pill: "#8FC751",
  pillSoft: "#DCEDC8",
  moon: "#7C5CFF",
  moonSoft: "#E9E5FF",
  spark: "#FF6B4A",
  sparkSoft: "#FFE4DC",
};

/* ── Personajes ── */
export const PERSONAJES = [
  { name: "PILI", badge: "Anfitriona", color: C.star, soft: C.starSoft },
  { name: "FLORA", badge: "Observadora", color: C.flower, soft: C.flowerSoft },
  { name: "VITO", badge: "Método", color: C.pill, soft: C.pillSoft },
  { name: "LUNA", badge: "Verificadora", color: C.moon, soft: C.moonSoft },
  { name: "CHIPI", badge: "Desafío", color: C.spark, soft: C.sparkSoft },
];

/* ── Estilos base ── */
export const base = StyleSheet.create({
  /* Página estándar */
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    color: C.ink,
    backgroundColor: C.cream,
    paddingTop: 85,
    paddingBottom: 50,
    paddingHorizontal: 48,
  },
  /* Portada */
  cover: {
    fontFamily: "Helvetica",
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    backgroundColor: C.cream,
  },
  coverInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
  },
  coverBadge: {
    backgroundColor: C.ink,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  coverBadgeText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 12,
    color: C.white,
    letterSpacing: 3,
  },
  coverTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 54,
    color: C.ink,
    textAlign: "center",
    marginBottom: 10,
  },
  coverSubtitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 24,
    color: C.ink,
    textAlign: "center",
    opacity: 0.7,
    marginBottom: 32,
  },
  coverMeta: {
    fontSize: 14,
    color: C.gray,
    textAlign: "center",
    lineHeight: 1.6,
  },
  /* Header */
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 36,
    backgroundColor: C.ink,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 48,
  },
  headerTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: C.white,
    letterSpacing: 2,
  },
  headerSub: {
    fontSize: 8,
    color: C.white,
    opacity: 0.7,
  },
  /* Footer */
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 48,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  footerText: { fontSize: 7, color: C.gray },
  pageNumber: { fontSize: 7, color: C.gray },
  /* Color bar */
  colorBar: { position: "absolute", top: 36, left: 0, right: 0, height: 4, flexDirection: "row" },
  colorBarSegment: { flex: 1 },
  /* Tipografía */
  h1: { fontFamily: "Helvetica-Bold", fontSize: 22, color: C.ink, marginBottom: 12, marginTop: 20 },
  h2: { fontFamily: "Helvetica-Bold", fontSize: 15, color: C.ink, marginBottom: 8, marginTop: 16 },
  h3: { fontFamily: "Helvetica-Bold", fontSize: 12, color: C.ink, marginBottom: 6, marginTop: 12 },
  body: { fontSize: 11, lineHeight: 1.6, color: C.ink, marginBottom: 8 },
});

/* ── Componentes reutilizables ── */

/** Barra de header fija con título + barra de colores */
export function Header({ title = "PÍLDORA FORMATIVA 3.1", sub = "Guía didáctica · Posesivos · Unidad 3" }) {
  return (
    <>
      <View style={base.header} fixed>
        <Text style={base.headerTitle}>{title}</Text>
        <Text style={base.headerSub}>{sub}</Text>
      </View>
      <View style={base.colorBar} fixed>
        {PERSONAJES.map((p) => (
          <View key={p.name} style={[base.colorBarSegment, { backgroundColor: p.color }]} />
        ))}
      </View>
    </>
  );
}

/** Footer fijo con paginación */
export function Footer({ left = "Nuevo Compañeros 1 · SGEL" }) {
  return (
    <View style={base.footer} fixed>
      <Text style={base.footerText}>{left}</Text>
      <Text style={base.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

/** Bullet point con color */
export function Bullet({ children, color = C.ink }: { children: string; color?: string }) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 4, paddingLeft: 4, alignItems: "flex-start" }}>
      <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: color, marginRight: 8, marginTop: 4 }} />
      <Text style={{ fontSize: 10, lineHeight: 1.5, flex: 1 }}>{children}</Text>
    </View>
  );
}

/** Tarjeta de personaje */
export function AgentCard({ name, badge, color, soft, desc, img }: {
  name: string; badge: string; color: string; soft: string; desc: string; img?: string;
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", borderRadius: 8, padding: 12, marginBottom: 8, backgroundColor: soft }}>
      {img && <Image src={img} style={{ width: 40, height: 50, marginRight: 8 }} />}
      <View style={{ alignItems: "center", width: 60, gap: 3 }}>
        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 13, color }}>{name}</Text>
        <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, color: C.white, backgroundColor: color }}>{badge}</Text>
      </View>
      <Text style={{ fontSize: 10, color: C.ink, lineHeight: 1.5, flex: 1 }}>{desc}</Text>
    </View>
  );
}

/** Callout / caja de nota */
export function Callout({ title, children, color = C.star, bg = C.starSoft }: {
  title: string; children: ReactNode; color?: string; bg?: string;
}) {
  return (
    <View wrap={false} style={{ backgroundColor: bg, borderLeftWidth: 4, borderLeftColor: color, borderRadius: 6, padding: 12, marginBottom: 12 }}>
      <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 11, marginBottom: 4 }}>{title}</Text>
      {typeof children === "string" ? (
        <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink }}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}

/** Encabezado de diapositiva con línea divisoria */
export function SlideHeading({ num, title, agent, agentColor, agentBg, technique }: {
  num: string; title: string; agent: string; agentColor: string; agentBg: string; technique?: string;
}) {
  return (
    <View style={{ marginTop: 18, marginBottom: 8 }} minPresenceAhead={120}>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "#D4D0C8", paddingBottom: 8, marginBottom: 6, flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 15, color: C.ink }}>
          Diapositiva {num} — {title}
        </Text>
        <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, backgroundColor: agentBg, color: agentColor }}>{agent}</Text>
      </View>
      {technique && (
        <Text style={{ fontSize: 9, color: C.gray, marginBottom: 4 }}>{technique}</Text>
      )}
    </View>
  );
}

/** Paso individual (clic) */
export function Step({ n, children }: { n: number; children: string }) {
  return (
    <View wrap={false} style={{ flexDirection: "row", marginBottom: 5, backgroundColor: C.white, borderRadius: 6, padding: 8, gap: 8, alignItems: "flex-start" }}>
      <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: C.ink, justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 9, color: C.white }}>{n}</Text>
      </View>
      <Text style={{ fontSize: 10, lineHeight: 1.5, color: C.ink, flex: 1 }}>{children}</Text>
    </View>
  );
}
