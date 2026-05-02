"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Pill } from "@phosphor-icons/react";
import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";

/* ── Carousel slides ── */
const SLIDES = [
  {
    kind: "intro" as const,
    title: "¿Qué es una píldora formativa?",
    body: "Una actividad interactiva de 5-7 minutos, proyectable en el aula. El alumno no recibe la regla: la descubre. Cada píldora sigue la secuencia MARS EARS — del input masivo a la práctica gamificada — guiada por cinco agentes con funciones didácticas distintas.",
    color: "#1E3A5F",
    soft: "#E8EEF4",
  },
  {
    kind: "agent" as const,
    name: "Pili",
    role: "Anfitriona",
    color: "#F5C842",
    soft: "#FEF3C7",
    fg: "#8A6B00",
    body: "Pili abre y cierra cada píldora. En la apertura presenta frases conocidas del libro para activar lo que el alumno ya sabe. En el cierre recapitula y conecta con la siguiente actividad del manual.",
    when: "Apertura (hook) y cierre (puente al libro)",
    register: "Cálida, cercana — \"¿Os acordáis?\", \"Abrimos juntos\"",
    Character: (p: { className?: string }) => <PilarStar pose="wave" {...p} />,
  },
  {
    kind: "agent" as const,
    name: "Flora",
    role: "Observadora",
    color: "#E91FCE",
    soft: "#FCE7F3",
    fg: "#8A1470",
    body: "Flora nunca da la respuesta. Hace preguntas para que el alumno observe contrastes, note diferencias y descubra el patrón por sí mismo. Trabaja con pares mínimos y comparaciones.",
    when: "Awareness — cuando hay que notar el patrón",
    register: "Curiosa, provocadora — \"Mira esto\", \"¿Qué cambia?\"",
    Character: FloraFlower,
  },
  {
    kind: "agent" as const,
    name: "Vito",
    role: "Método",
    color: "#8FC751",
    soft: "#DCEDC8",
    fg: "#3F6B14",
    body: "Vito descompone el razonamiento pieza a pieza. Guía un worked example paso a paso con clics progresivos para que el alumno vea cómo se llega a la respuesta correcta.",
    when: "Structured production — construir la regla paso a paso",
    register: "Metódico, claro — \"Primero… después… por eso…\"",
    Character: VitoPill,
  },
  {
    kind: "agent" as const,
    name: "Luna",
    role: "Verificadora",
    color: "#7C5CFF",
    soft: "#E9E5FF",
    fg: "#3B2A8A",
    body: "Luna comprueba si el alumno realmente ha entendido. Formula preguntas de verificación rápida y confirma la hipótesis comparándola con el cuadro gramatical del libro.",
    when: "Comprobación — verificar contra la referencia",
    register: "Reflexiva — \"Comprobamos\", \"¿Y si…?\"",
    Character: LunaMoon,
  },
  {
    kind: "agent" as const,
    name: "Chipi",
    role: "Desafío",
    color: "#FF6B4A",
    soft: "#FFE4DC",
    fg: "#8A2F10",
    body: "Chipi reta al grupo con juegos de velocidad por equipos. Gestiona puntos, celebra aciertos y da pistas en los fallos. Es la práctica bajo presión lúdica para consolidar lo aprendido.",
    when: "Gamificación — desafíos relámpago por equipos",
    register: "Enérgica, competitiva — \"¡A jugar!\", \"¡Tu turno!\"",
    Character: ChipiSpark,
  },
];

/* ── Units ── */
const TEJA = "#B85C38";

const UNITS = [
  { num: 1, title: "¡Hola!", desc: "Saludos, presentaciones y el alfabeto.", available: false },
  { num: 2, title: "Mi clase", desc: "El aula, los números y los objetos.", available: false },
  {
    num: 3,
    title: "Mi familia",
    desc: "La familia, los posesivos y las descripciones.",
    available: true,
    pildoras: [
      {
        id: "3-1",
        num: "3.1",
        title: "Los Posesivos",
        desc: "Actividad proyectable de 5-7 min. Los alumnos descubren las formas posesivas (mi/tu/su, nuestro/vuestro/su), practican la concordancia con sustantivos de la familia y consolidan en un desafío por equipos.",
        pages: "Libro pp. 38-41",
        slides: 18,
        href: "/pildoras-formativas/3-1",
        guiaHref: "/pildoras-formativas/3-1/guia",
        preview: "/images/preview-3-1.png",
      },
      {
        id: "3-2",
        num: "3.2",
        title: "Un Correo Electrónico Personal",
        desc: "Actividad proyectable de 5-7 min. Los alumnos descubren la estructura de un email personal (saludo, cuerpo, cierre), practican los conectores y/también con vocabulario de familia y rutinas, y consolidan en un desafío por equipos.",
        pages: "Libro pp. 42-45",
        slides: 10,
        href: "/pildoras-formativas/3-2",
        guiaHref: "/pildoras-formativas/3-2/guia",
        preview: "/images/preview-3-2.png",
      },
    ],
  },
  { num: 4, title: "Mi casa", desc: "La casa, las habitaciones y hay/está.", available: false },
  { num: 5, title: "Mi día", desc: "Rutinas, la hora y verbos reflexivos.", available: false },
  { num: 6, title: "¡A comer!", desc: "La comida, los gustos y pedir en un restaurante.", available: false },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function LandingPage() {
  const [active, setActive] = useState(0);
  const [openPildoraId, setOpenPildoraId] = useState<string | null>(null);
  const slide = SLIDES[active];

  const next = () => setActive((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const pildora = UNITS.flatMap((u) => u.pildoras ?? []).find((p) => p.id === openPildoraId);
  const openedUnit = pildora
    ? UNITS.find((u) => u.pildoras?.some((p) => p.id === pildora.id))
    : undefined;

  return (
    <div
      className="min-h-screen font-[family-name:var(--font-pf-ui)]"
      style={{ background: "var(--color-landing-bg)" }}
    >
      {/* ── Hero ── */}
      <header className="max-w-[1200px] mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease }}
          className="inline-block mb-4 px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: "color-mix(in srgb, var(--color-landing-navy) 8%, transparent)",
            color: "var(--color-landing-navy)",
            border: "1px solid color-mix(in srgb, var(--color-landing-navy) 15%, transparent)",
          }}
        >
          Nuevo Compañeros 1 · SGEL
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease }}
          className="font-[family-name:var(--font-landing)] font-bold leading-tight mb-3"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            color: "var(--color-landing-navy)",
          }}
        >
          Píldoras Formativas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease }}
          className="max-w-xl mx-auto text-sm leading-relaxed"
          style={{ color: "var(--color-landing-muted)" }}
        >
          Material interactivo proyectable para el aula de ELE — A1.1 adolescentes.
        </motion.p>
      </header>

      {/* ── Agent carousel ── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease }}
        className="max-w-[1000px] mx-auto px-4 md:px-8 py-6 md:py-8"
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--color-landing-surface)",
            border: "1px solid var(--color-landing-border)",
          }}
        >
          <AnimatePresence mode="wait">
            {slide.kind === "intro" ? (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease }}
                className="p-10 md:p-14 flex flex-col items-center text-center min-h-[340px] justify-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ background: slide.soft }}
                >
                  <Pill size={24} weight="duotone" color={slide.color} />
                </div>
                <h2
                  className="text-2xl font-bold font-[family-name:var(--font-landing)] mb-4"
                  style={{ color: "var(--color-landing-navy)" }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-base leading-relaxed max-w-2xl"
                  style={{ color: "var(--color-landing-muted)" }}
                >
                  {slide.body}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={slide.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease }}
                className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] min-h-[240px] md:min-h-[340px]"
              >
                {/* Left — Character */}
                <div
                  className="flex items-center justify-center p-8"
                  style={{ background: slide.soft }}
                >
                  <slide.Character className="w-40 h-40 md:w-52 md:h-52" />
                </div>

                {/* Right — Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <h2
                      className="text-2xl font-bold font-[family-name:var(--font-landing)]"
                      style={{ color: "var(--color-landing-navy)" }}
                    >
                      {slide.name}
                    </h2>
                    <span
                      className="px-3 py-0.5 rounded-full text-xs font-semibold"
                      style={{ background: slide.soft, color: slide.fg }}
                    >
                      {slide.role}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mt-3 mb-4"
                    style={{ color: "var(--color-landing-muted)" }}
                  >
                    {slide.body}
                  </p>

                  <div className="space-y-1">
                    <p className="text-xs" style={{ color: "var(--color-landing-muted)" }}>
                      <span className="font-semibold" style={{ color: "var(--color-landing-navy)" }}>Cuándo aparece: </span>
                      {slide.when}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-landing-muted)" }}>
                      <span className="font-semibold" style={{ color: "var(--color-landing-navy)" }}>Registro: </span>
                      {slide.register}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderTop: "1px solid var(--color-landing-border)" }}
          >
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-landing-navy)" }}>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                {SLIDES.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 32 : 16,
                      background: i === active
                        ? SLIDES[active].color
                        : "#C4C0B8",
                    }}
                  />
                ))}
              </div>
              <span className="text-xs tabular-nums" style={{ color: "var(--color-landing-muted)" }}>
                {active + 1} / {SLIDES.length}
              </span>
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-landing-navy)" }}>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── Divider ── */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="h-px" style={{ background: "var(--color-landing-border)" }} />
      </div>

      {/* ── Unidades ── */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-12 md:pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "var(--color-landing-muted)" }}
        >
          Unidades
        </motion.p>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))" }}
        >
          {UNITS.map((u, i) => (
            <motion.div
              key={u.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.06, duration: 0.5, ease }}
            >
              <UnitCard unit={u} onPildoraClick={(id) => setOpenPildoraId(id)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {pildora && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "#000" }}
            onClick={() => setOpenPildoraId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[640px] rounded-2xl overflow-hidden"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Close */}
              <div className="relative">
                <button
                  onClick={() => setOpenPildoraId(null)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.85)" }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Preview */}
                <img
                  src={pildora.preview}
                  alt={`Preview — ${pildora.title}`}
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: TEJA }}
                  >
                    Unidad {openedUnit!.num} · Píldora {pildora.num}
                  </span>
                </div>
                <h2
                  className="text-2xl font-bold font-[family-name:var(--font-landing)] mb-2"
                  style={{ color: "var(--color-landing-navy)" }}
                >
                  {pildora.title}
                </h2>
                <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--color-landing-muted)" }}>
                  {pildora.desc}
                </p>
                <p className="text-xs mb-6" style={{ color: "var(--color-landing-muted)", opacity: 0.6 }}>
                  {pildora.pages} · {pildora.slides} diapositivas
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={pildora.href}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-landing)]"
                    style={{ background: TEJA }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Presentar
                  </Link>
                  <Link
                    href={pildora.guiaHref}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-landing)]"
                    style={{ background: TEJA }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    Guía didáctica PDF
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer
        className="border-t py-8 text-center text-xs"
        style={{
          borderColor: "var(--color-landing-border)",
          color: "var(--color-landing-muted)",
        }}
      >
        SGEL · Nuevo Compañeros 1 · Píldoras Formativas
      </footer>
    </div>
  );
}

function UnitCard({
  unit,
  onPildoraClick,
}: {
  unit: (typeof UNITS)[number];
  onPildoraClick: (id: string) => void;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        unit.available ? "" : "opacity-35"
      }`}
      style={{
        background: "var(--color-landing-surface)",
        border: `1px solid ${unit.available ? TEJA : "var(--color-landing-border)"}`,
      }}
    >
      {/* Color bar */}
      <div className="h-1.5" style={{ background: TEJA }} />

      <div className="p-6">
        <div className="flex items-start gap-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-bold font-[family-name:var(--font-landing)] shrink-0 text-white"
            style={{ background: TEJA }}
          >
            {unit.num}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-base font-bold font-[family-name:var(--font-landing)] mb-1"
              style={{ color: "var(--color-landing-navy)" }}
            >
              Unidad {unit.num} — {unit.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-landing-muted)" }}
            >
              {unit.desc}
            </p>
          </div>
        </div>

        <div className="mt-4">
          {unit.available && unit.pildoras ? (
            <div className="flex flex-col gap-2">
              {unit.pildoras.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onPildoraClick(p.id)}
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    background: "color-mix(in srgb, " + TEJA + " 6%, transparent)",
                    border: `1px solid color-mix(in srgb, ${TEJA} 25%, transparent)`,
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-xs font-bold shrink-0 text-white font-[family-name:var(--font-landing)]"
                      style={{ background: TEJA }}
                    >
                      {p.num}
                    </span>
                    <span
                      className="text-sm font-semibold truncate"
                      style={{ color: "var(--color-landing-navy)" }}
                    >
                      {p.title}
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: TEJA }}
                    className="shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              ))}
            </div>
          ) : (
            <span
              className="text-xs font-medium tracking-wide uppercase"
              style={{ color: "var(--color-landing-muted)" }}
            >
              Próximamente
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
