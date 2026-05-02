"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const TEJA = "#B85C38";

const PILDORAS = [
  {
    id: "3-1",
    num: "3.1",
    title: "Los Posesivos",
    desc: "mi/tu/su, nuestro/vuestro/su — formas, concordancia y uso en contexto familiar.",
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
    desc: "Estructura del email A1.1: saludo, cuerpo, cierre. Conectores y/también, vocabulario familia y rutinas escolares.",
    pages: "Libro pp. 42-45",
    slides: 10,
    href: "/pildoras-formativas/3-2",
    guiaHref: "/pildoras-formativas/3-2/guia",
    preview: "/images/preview-3-2.png",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Unidad3Page() {
  const [openPildora, setOpenPildora] = useState<string | null>(null);
  const pildora = PILDORAS.find((p) => p.id === openPildora);

  return (
    <div
      className="min-h-screen font-[family-name:var(--font-pf-ui)]"
      style={{ background: "var(--color-landing-bg)" }}
    >
      {/* ── Nav ── */}
      <nav className="max-w-[1100px] mx-auto px-8 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
          style={{ color: "var(--color-landing-muted)" }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Inicio
        </Link>
      </nav>

      {/* ── Hero ── */}
      <header className="max-w-[1100px] mx-auto px-8 pt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-[family-name:var(--font-landing)] text-white"
            style={{ background: TEJA }}
          >
            3
          </div>
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-landing-muted)" }}
          >
            Nuevo Compañeros 1
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="font-[family-name:var(--font-landing)] font-bold mb-4"
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            color: "var(--color-landing-navy)",
          }}
        >
          Unidad 3 — Mi familia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease }}
          className="max-w-xl text-base leading-relaxed"
          style={{ color: "var(--color-landing-muted)" }}
        >
          La familia, los posesivos y las descripciones. Cada píldora incluye
          una presentación interactiva proyectable y una guía didáctica descargable en PDF.
        </motion.p>
      </header>

      {/* ── Píldoras grid ── */}
      <div className="max-w-[1100px] mx-auto px-8 pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "var(--color-landing-muted)" }}
        >
          Píldoras disponibles
        </motion.p>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>
          {PILDORAS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.08, duration: 0.5, ease }}
            >
              <button
                onClick={() => setOpenPildora(p.id)}
                className="w-full text-left rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                style={{
                  background: "var(--color-landing-surface)",
                  border: `1px solid ${TEJA}`,
                }}
              >
                {/* Preview image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={p.preview}
                    alt={`Preview de ${p.title}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                      style={{ background: "rgba(255,255,255,0.9)" }}
                    >
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-landing-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span
                        className="text-xs font-semibold tracking-wider uppercase"
                        style={{ color: TEJA }}
                      >
                        Píldora {p.num}
                      </span>
                      <h3
                        className="text-lg font-bold font-[family-name:var(--font-landing)] mt-0.5"
                        style={{ color: "var(--color-landing-navy)" }}
                      >
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-landing-muted)" }}>
                    {p.desc}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "var(--color-landing-muted)", opacity: 0.6 }}>
                    {p.pages} · {p.slides} diapositivas
                  </p>
                </div>
              </button>
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
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() => setOpenPildora(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[640px] rounded-2xl overflow-hidden"
              style={{
                background: "var(--color-landing-surface)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
              }}
            >
              {/* Close button */}
              <div className="relative">
                <button
                  onClick={() => setOpenPildora(null)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.85)" }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Preview image */}
                <img
                  src={pildora.preview}
                  alt={`Preview de ${pildora.title}`}
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: TEJA }}
                >
                  Píldora {pildora.num}
                </span>
                <h2
                  className="text-2xl font-bold font-[family-name:var(--font-landing)] mt-1 mb-2"
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
                <div className="flex gap-3">
                  <Link
                    href={pildora.href}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-landing)]"
                    style={{ background: "var(--color-landing-navy)" }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Presentar en aula
                  </Link>
                  <Link
                    href={pildora.guiaHref}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-landing)]"
                    style={{
                      background: TEJA,
                      color: "#fff",
                    }}
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
