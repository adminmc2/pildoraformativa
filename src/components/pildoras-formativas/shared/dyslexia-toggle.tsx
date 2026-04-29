"use client";

import { useEffect, useState } from "react";
import { TextAa } from "@phosphor-icons/react";

const STORAGE_KEY = "pf-dyslexia-mode";

/**
 * Botón de accesibilidad que activa/desactiva el modo dislexia.
 * Añade/quita la clase `.dyslexia-mode` al contenedor padre con clase `.pf-presentation-shell`.
 * Persiste el estado en localStorage.
 */
export function DyslexiaToggle({ isDark = false }: { isDark?: boolean }) {
  const [active, setActive] = useState(false);

  // Carga inicial desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "1") {
      setActive(true);
      document.querySelector(".pf-presentation-shell")?.classList.add("dyslexia-mode");
    }
  }, []);

  const toggle = () => {
    const next = !active;
    setActive(next);
    const shell = document.querySelector(".pf-presentation-shell");
    if (next) {
      shell?.classList.add("dyslexia-mode");
      localStorage.setItem(STORAGE_KEY, "1");
    } else {
      shell?.classList.remove("dyslexia-mode");
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
        active
          ? "bg-[var(--color-pf-spark)] text-white"
          : isDark
            ? "hover:bg-white/15"
            : "hover:bg-white/60"
      }`}
    >
      <TextAa size={22} weight={active ? "fill" : "bold"} />
    </button>
  );
}
