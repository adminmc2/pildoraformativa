"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export default function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; Iniciando lección de español...</TypingAnimation>

      <AnimatedSpan className="text-sgel-green" delay={2}>
        ✔ Cargando vocabulario de la Unidad 2.
      </AnimatedSpan>

      <AnimatedSpan className="text-sgel-green" delay={2.5}>
        ✔ Preparando ejercicios de gramática.
      </AnimatedSpan>

      <AnimatedSpan className="text-sgel-green" delay={3}>
        ✔ Verificando nivel del estudiante.
      </AnimatedSpan>

      <AnimatedSpan className="text-sgel-green" delay={3.5}>
        ✔ Configurando actividades interactivas.
      </AnimatedSpan>

      <AnimatedSpan className="text-sgel-green" delay={4}>
        ✔ Cargando recursos multimedia.
      </AnimatedSpan>

      <AnimatedSpan className="text-sgel-yellow" delay={4.5}>
        ✔ Sincronizando progreso del alumno.
      </AnimatedSpan>

      <AnimatedSpan className="text-sgel-yellow" delay={5}>
        ✔ Preparando evaluaciones.
      </AnimatedSpan>

      <AnimatedSpan className="text-sgel-blue" delay={5.5}>
        <span className="text-white">ℹ Temas disponibles:</span>
        <div className="pl-4 mt-1">
          <div>- El plural de nombres y adjetivos</div>
          <div>- Vocabulario de la familia</div>
          <div>- Presente de indicativo</div>
        </div>
      </AnimatedSpan>

      <TypingAnimation className="text-white font-bold" delay={6000} speed={40}>
        ¡Éxito! La lección está lista para comenzar.
      </TypingAnimation>

      <TypingAnimation className="text-gray-400" delay={8000} speed={40}>
        Selecciona una actividad para empezar a aprender.
      </TypingAnimation>
    </Terminal>
  );
}
