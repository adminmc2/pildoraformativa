"use client";

import { useEffect, useState } from "react";
import { TextAa } from "@phosphor-icons/react";

const STORAGE_KEY = "pf-dyslexia-mode";

/**
 * Botón de accesibilidad que activa/desactiva el modo dislexia.
 * Añade/quita la clase `.dyslexia-mode` al elemento <html> (cascada total).
 * Persiste el estado en localStorage.
 *
 * Variante "inline" (por defecto): para usar dentro del header, sin posicionamiento.
 * Variante "fixed": posición fija arriba-izquierda — útil en slides sin header (portada).
 */
export function DyslexiaToggle({
  isDark = false,
  fixed = false,
}: {
  isDark?: boolean;
  fixed?: boolean;
}) {
  const [active, setActive] = useState(false);

  // Carga inicial desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "1") {
      setActive(true);
      document.documentElement.classList.add("dyslexia-mode");
    }
  }, []);

  const toggle = () => {
    const next = !active;
    setActive(next);
    if (next) {
      document.documentElement.classList.add("dyslexia-mode");
      localStorage.setItem(STORAGE_KEY, "1");
    } else {
      document.documentElement.classList.remove("dyslexia-mode");
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={active ? "Desactivar modo dislexia" : "Activar modo dislexia (OpenDyslexic)"}
      aria-pressed={active}
      title={active ? "Modo dislexia activado" : "Activar fuente OpenDyslexic"}
      className={`w-9 h-9 flex items-center justify-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2 ${
        fixed ? "fixed top-3 left-4 z-50 bg-white/90 shadow-md backdrop-blur" : ""
      } ${
        active
          ? "!bg-[var(--color-pf-spark)] text-white"
          : isDark
            ? "hover:bg-white/15"
            : "hover:bg-white/60"
      }`}
    >
      <TextAa size={22} weight={active ? "fill" : "bold"} />
    </button>
  );
}
