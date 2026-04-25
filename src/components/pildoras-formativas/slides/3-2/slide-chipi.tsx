"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";
import { EnvelopeSimple } from "@phosphor-icons/react";

/* ══════════════════════════════════════════════════════════════
   DATA — 16 emails variados (A1.1)
   Cada uno: fragments en orden correcto, shuffle para mostrar,
   pregunta de comprensión con 3 opciones.
   ══════════════════════════════════════════════════════════════ */

type Email = {
  author: string;
  city: string;
  fragments: string[];
  shuffle: number[];
  question: string;
  options: [string, string, string];
  correct: number;
};

const EMAILS: Email[] = [
  {
    author: "Laura", city: "Sevilla",
    fragments: [
      "¡Hola, Marco! ¿Qué tal estás?",
      "Hoy te hablo de mi escuela: este curso es muy divertido.",
      "Y además tengo deberes de Ciencias y Música.",
      "Yo este año tengo muchos amigos: Ana, Luis, Sara...",
      "Mi mejor amiga se llama Sofía.",
      "¿Tú también tienes muchos amigos en tu clase?",
      "¡Un abrazo desde Sevilla! Laura",
    ],
    shuffle: [4, 2, 6, 0, 5, 1, 3],
    question: "¿De qué asignaturas tiene deberes Laura?",
    options: ["Inglés y Música", "Ciencias y Música", "Ciencias y Matemáticas"], correct: 1,
  },
  {
    author: "Carlos", city: "Madrid",
    fragments: [
      "¡Hola, Pierre! ¿Qué tal?",
      "Hoy te hablo de mi familia: mi padre trabaja en un banco.",
      "Y mi madre trabaja en un colegio. Mi hermano Marcos tiene ocho años.",
      "Este curso tengo deberes de Inglés y Matemáticas.",
      "A mí me gusta mucho la Música. ¿Y a ti?",
      "¡Un saludo desde Madrid!",
      "Carlos",
    ],
    shuffle: [3, 6, 0, 5, 2, 4, 1],
    question: "¿Dónde trabaja el padre de Carlos?",
    options: ["En un hospital", "En un banco", "En un colegio"], correct: 1,
  },
  {
    author: "Ana", city: "Barcelona",
    fragments: [
      "¡Hola, Lisa! ¿Qué tal estás?",
      "Yo este año tengo una amiga nueva: se llama Claudia.",
      "También tengo muchos amigos en mi clase: Pedro, Marta, Lucas...",
      "Hoy te hablo de mi familia: mi madre trabaja en una tienda.",
      "Y mi padre, en un restaurante. Soy hija única.",
      "¿Y tú, tienes hermanos?",
      "¡Un abrazo desde Barcelona! Ana",
    ],
    shuffle: [5, 3, 6, 1, 0, 4, 2],
    question: "¿Tiene hermanos Ana?",
    options: ["Sí, tiene un hermano", "No, es hija única", "Sí, tiene una hermana"], correct: 1,
  },
  {
    author: "Pablo", city: "Valencia",
    fragments: [
      "¡Hola, Thomas! ¿Qué tal?",
      "Este curso es un poco difícil.",
      "Tengo muchos deberes de Tecnología y Ciencias.",
      "Hoy te hablo de mi familia: mi madre trabaja en un hospital.",
      "Mi hermana Lucía tiene cinco años.",
      "¿Tú también tienes muchos deberes?",
      "¡Un saludo desde Valencia! Pablo",
    ],
    shuffle: [4, 6, 2, 0, 5, 3, 1],
    question: "¿Cuántos años tiene la hermana de Pablo?",
    options: ["Ocho años", "Once años", "Cinco años"], correct: 2,
  },
  {
    author: "Sofía", city: "Bilbao",
    fragments: [
      "¡Hola, Emma! ¿Qué tal estás?",
      "Hoy te hablo de mi familia: mi padre es profesor.",
      "Y mi madre es médica. Mi hermano Iker tiene doce años.",
      "Yo este año tengo muchos amigos: Leire, Jon, Ane...",
      "Mi mejor amigo se llama Jon. Es muy simpático.",
      "¿Y tú, cómo es tu clase?",
      "¡Un abrazo desde Bilbao! Sofía",
    ],
    shuffle: [3, 5, 0, 6, 2, 1, 4],
    question: "¿Cómo se llama el hermano de Sofía?",
    options: ["Jon", "Iker", "Leire"], correct: 1,
  },
  {
    author: "Diego", city: "Granada",
    fragments: [
      "¡Hola, Lucas! ¿Qué tal?",
      "Yo este año tengo un amigo nuevo: se llama Rafa.",
      "También tengo muchos amigos en mi clase: Sara, Inés, Martín...",
      "Este curso tengo muchos deberes de Matemáticas y Lengua.",
      "A mí me gusta mucho la Educación Física.",
      "¿Tú también tienes deberes este año?",
      "¡Un saludo desde Granada! Diego",
    ],
    shuffle: [6, 2, 4, 0, 1, 5, 3],
    question: "¿Qué asignatura le gusta a Diego?",
    options: ["Matemáticas", "Lengua", "Educación Física"], correct: 2,
  },
  {
    author: "Elena", city: "Málaga",
    fragments: [
      "¡Hola, Julie! ¿Qué tal estás?",
      "Este curso es muy divertido. Tengo deberes de Arte y Música.",
      "A mí me gusta mucho el Arte.",
      "Yo este año tengo muchos amigos nuevos: Lucía, Pablo, Alba...",
      "Mi mejor amiga se llama Lucía. Es de Sevilla.",
      "¿Y tú, qué asignaturas te gustan?",
      "¡Un abrazo desde Málaga! Elena",
    ],
    shuffle: [2, 5, 6, 3, 0, 1, 4],
    question: "¿De dónde es Lucía, la amiga de Elena?",
    options: ["De Málaga", "De Sevilla", "De Granada"], correct: 1,
  },
  {
    author: "Marcos", city: "Zaragoza",
    fragments: [
      "¡Hola, Hans! ¿Qué tal?",
      "Hoy te hablo de mi familia: mi madre trabaja en una farmacia.",
      "Mi padre trabaja en una oficina. Mi hermana Sara tiene siete años.",
      "Este curso tengo muchos deberes, especialmente de Ciencias.",
      "A mí me gusta mucho la Historia.",
      "¿Tú también tienes muchos deberes este año?",
      "¡Un saludo desde Zaragoza! Marcos",
    ],
    shuffle: [4, 0, 6, 3, 1, 5, 2],
    question: "¿Dónde trabaja la madre de Marcos?",
    options: ["En una oficina", "En un hospital", "En una farmacia"], correct: 2,
  },
  {
    author: "Lucía", city: "Salamanca",
    fragments: [
      "¡Hola, Anna! ¿Qué tal estás?",
      "Yo este año tengo muchos amigos: Mario, Elena, Carlos...",
      "Mi mejor amigo se llama Mario. Es muy divertido.",
      "Hoy te hablo de mi familia: mi padre trabaja en una universidad.",
      "Y mi madre es enfermera. Mi hermano Miguel tiene nueve años.",
      "¿Y tú, cuántos hermanos tienes?",
      "¡Un abrazo desde Salamanca! Lucía",
    ],
    shuffle: [3, 6, 0, 5, 4, 1, 2],
    question: "¿Cuántos años tiene el hermano de Lucía?",
    options: ["Siete años", "Nueve años", "Doce años"], correct: 1,
  },
  {
    author: "Javier", city: "Toledo",
    fragments: [
      "¡Hola, Paul! ¿Qué tal?",
      "Este curso es un poco más difícil. Tengo deberes de Inglés y Ciencias.",
      "Además, me gusta mucho la Tecnología.",
      "Hoy te hablo de mi familia: mi padre es cocinero.",
      "Mi madre trabaja en un supermercado. Soy hijo único.",
      "¿Y tú, tienes hermanos?",
      "¡Un saludo desde Toledo! Javier",
    ],
    shuffle: [5, 2, 6, 0, 4, 3, 1],
    question: "¿Cuál es la profesión del padre de Javier?",
    options: ["Profesor", "Cocinero", "Médico"], correct: 1,
  },
  {
    author: "María", city: "Córdoba",
    fragments: [
      "¡Hola, Sophie! ¿Qué tal estás?",
      "Hoy te hablo de mi familia: mi padre trabaja en un hotel.",
      "Y mi madre es profesora. Mi hermana Eva tiene diez años.",
      "Yo este año tengo una amiga nueva: se llama Claudia.",
      "También tengo muchos amigos: Raúl, Nerea, Tomás...",
      "¿Tú también tienes muchos amigos en tu clase?",
      "¡Un abrazo desde Córdoba! María",
    ],
    shuffle: [4, 6, 2, 0, 5, 3, 1],
    question: "¿Cuántos años tiene la hermana de María?",
    options: ["Cinco años", "Diez años", "Ocho años"], correct: 1,
  },
  {
    author: "Daniel", city: "Alicante",
    fragments: [
      "¡Hola, Leo! ¿Qué tal?",
      "Yo este año tengo muchos amigos en mi clase: Víctor, Carla, Nuria...",
      "Mi mejor amiga se llama Carla. Es de Murcia.",
      "Este curso tengo deberes de Matemáticas y Lengua.",
      "A mí me gusta mucho la Música. Y además toco la guitarra.",
      "¿Y a ti, qué asignaturas te gustan?",
      "¡Un saludo desde Alicante! Daniel",
    ],
    shuffle: [6, 3, 0, 5, 1, 4, 2],
    question: "¿Qué instrumento toca Daniel?",
    options: ["El piano", "La guitarra", "La flauta"], correct: 1,
  },
  {
    author: "Clara", city: "Burgos",
    fragments: [
      "¡Hola, Marie! ¿Qué tal estás?",
      "Este curso me gusta mucho. Tengo deberes de Arte y Ciencias.",
      "Yo este año tengo muchos amigos: Luis, Marta, Andrés...",
      "Hoy te hablo de mi familia: mi madre es veterinaria.",
      "Y mi padre trabaja en un banco. Mi hermano Adrián tiene seis años.",
      "¿Tú también tienes hermanos?",
      "¡Un abrazo desde Burgos! Clara",
    ],
    shuffle: [3, 5, 0, 4, 6, 1, 2],
    question: "¿Cuál es la profesión de la madre de Clara?",
    options: ["Profesora", "Enfermera", "Veterinaria"], correct: 2,
  },
  {
    author: "Hugo", city: "Santander",
    fragments: [
      "¡Hola, Jan! ¿Qué tal?",
      "Hoy te hablo de mi familia: mi madre trabaja en un hospital.",
      "Y mi padre es ingeniero. Mi hermana Paula tiene once años.",
      "Este curso es muy difícil. Tengo deberes de Tecnología y Matemáticas.",
      "Además, me gusta mucho la Educación Física.",
      "¿Qué asignaturas te gustan a ti?",
      "¡Un saludo desde Santander! Hugo",
    ],
    shuffle: [4, 6, 2, 5, 0, 3, 1],
    question: "¿Cuántos años tiene la hermana de Hugo?",
    options: ["Seis años", "Nueve años", "Once años"], correct: 2,
  },
  {
    author: "Irene", city: "León",
    fragments: [
      "¡Hola, Lena! ¿Qué tal estás?",
      "Yo este año tengo una compañera nueva: se llama Berta.",
      "También tengo muchos amigos: Sergio, Alba, Óscar...",
      "Hoy te hablo de mi familia: mi padre es mecánico.",
      "Mi madre trabaja en una escuela. Mi hermano David tiene trece años.",
      "¿Y tú, cómo es tu familia?",
      "¡Un abrazo desde León! Irene",
    ],
    shuffle: [5, 3, 0, 6, 4, 1, 2],
    question: "¿Cuál es la profesión del padre de Irene?",
    options: ["Ingeniero", "Mecánico", "Cocinero"], correct: 1,
  },
  {
    author: "Tomás", city: "Cádiz",
    fragments: [
      "¡Hola, Max! ¿Qué tal?",
      "Este curso tengo muchos deberes de Lengua y Ciencias.",
      "Hoy te hablo de mi familia: mi padre trabaja en un puerto.",
      "Y mi madre es dentista. Soy hijo único.",
      "Yo este año tengo muchos amigos: Iván, Rosa, Álex...",
      "¿Tú también tienes muchos amigos?",
      "¡Un saludo desde Cádiz! Tomás",
    ],
    shuffle: [6, 4, 0, 3, 5, 2, 1],
    question: "¿Tiene hermanos Tomás?",
    options: ["Sí, tiene un hermano", "Sí, tiene una hermana", "No, es hijo único"], correct: 2,
  },
];

/* ══════════════════════════════════════════════════════════════
   TEAMS & SCORING
   ══════════════════════════════════════════════════════════════ */

const TEAMS = [
  { name: "E1", full: "Equipo 1", bg: "#F5C842", neon: "#ffe066" },
  { name: "E2", full: "Equipo 2", bg: "#ff4ecd", neon: "#ff79e0" },
  { name: "E3", full: "Equipo 3", bg: "#4ade80", neon: "#6ee7a0" },
  { name: "E4", full: "Equipo 4", bg: "#818cf8", neon: "#a5b4fc" },
];

const TIERS = [
  { max: 30, pts: 30, label: "< 30s" },
  { max: 45, pts: 25, label: "< 45s" },
  { max: 60, pts: 20, label: "< 60s" },
  { max: 90, pts: 15, label: "< 90s" },
  { max: 120, pts: 10, label: "< 120s" },
];

function getTierPts(seconds: number): number {
  for (const t of TIERS) if (seconds < t.max) return t.pts;
  return 5;
}

/* ── Compute correct answer sequence ── */
function getAnswerSequence(shuffle: number[]): string {
  const pos = new Array(shuffle.length);
  shuffle.forEach((fragIdx, displayIdx) => { pos[fragIdx] = displayIdx + 1; });
  return pos.join("-");
}

/* ── Decorative stars (reused from 3.1) ── */
function PixelStar({ x, y, delay }: { x: string; y: string; delay: string }) {
  return (
    <div className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
      style={{ left: x, top: y, background: "#ffd4a0", boxShadow: "0 0 4px #ffd4a0, 0 0 8px rgba(255,180,100,0.4)", animation: `starTwinkle 2s ease-in-out ${delay} infinite` }} />
  );
}

/* ══════════════════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════════════════ */

type Phase = "setup" | "play" | "check" | "question" | "result";

export function SlideChipi() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [numTeams, setNumTeams] = useState(2);
  const [numRounds, setNumRounds] = useState(3);
  const [scores, setScores] = useState([0, 0, 0, 0]);

  /* Round state */
  const [roundIdx, setRoundIdx] = useState(0);
  const [emailIndices, setEmailIndices] = useState<number[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [orderWinner, setOrderWinner] = useState<number | null>(null);

  /* Comprehension state */
  const [qTimer, setQTimer] = useState(30);
  const [qRunning, setQRunning] = useState(false);
  const [qRevealed, setQRevealed] = useState(false);
  const [qAnswered, setQAnswered] = useState(false);

  const [bubble, setBubble] = useState<ReactNode>("¿Quién ordena más rápido?");

  const email = emailIndices.length > 0 ? EMAILS[emailIndices[roundIdx]] : EMAILS[0];
  const currentRound = roundIdx + 1;
  const totalRounds = numRounds;

  /* ── Timer: counts UP during play ── */
  useEffect(() => {
    if (!running) return;
    if (elapsed >= 120) { setRunning(false); setBubble("¡Tiempo! 2 minutos."); return; }
    const t = setTimeout(() => setElapsed((s) => s + 1), 1000);
    return () => clearTimeout(t);
  }, [elapsed, running]);

  /* ── Comprehension timer: counts DOWN ── */
  useEffect(() => {
    if (!qRunning) return;
    if (qTimer <= 0) { setQRunning(false); setBubble("¡Tiempo! Nadie responde."); return; }
    const t = setTimeout(() => setQTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [qTimer, qRunning]);

  /* ── Start game ── */
  const startGame = () => {
    const shuffled = [...Array(EMAILS.length).keys()].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, numRounds);
    setEmailIndices(selected);
    setScores([0, 0, 0, 0]);
    setRoundIdx(0);
    startRound();
  };

  const startRound = () => {
    setElapsed(0);
    setRunning(true);
    setOrderWinner(null);
    setQTimer(30);
    setQRunning(false);
    setQRevealed(false);
    setQAnswered(false);
    setBubble("¡Escribid el orden en la pizarrita!");
    setPhase("play");
  };

  /* ── Stop timer ── */
  const stopTimer = () => {
    setRunning(false);
    setBubble(`¡${elapsed} segundos! ¿Está bien?`);
    setPhase("check");
  };

  /* ── Award order points ── */
  const awardOrder = (teamIdx: number | null) => {
    if (teamIdx !== null) {
      const pts = getTierPts(elapsed);
      setScores((s) => { const n = [...s]; n[teamIdx] += pts; return n; });
      setOrderWinner(teamIdx);
      setBubble(`¡${TEAMS[teamIdx].full} gana ${getTierPts(elapsed)} puntos!`);
    } else {
      setOrderWinner(null);
      setBubble("Nadie acierta. ¡Vamos a la pregunta!");
    }
    // Move to comprehension
    setTimeout(() => {
      setQRunning(true);
      setBubble("¡Pregunta de comprensión! 30 segundos.");
      setPhase("question");
    }, 1500);
  };

  /* ── Award comprehension ── */
  const awardQuestion = (teamIdx: number | null) => {
    setQRunning(false);
    setQRevealed(true);
    setQAnswered(true);
    if (teamIdx !== null) {
      setScores((s) => { const n = [...s]; n[teamIdx] += 10; return n; });
      setBubble(`¡${TEAMS[teamIdx].full} +10 puntos!`);
    } else {
      setBubble("¡Nadie acierta! La respuesta era...");
    }
  };

  const nextRound = () => {
    if (roundIdx + 1 >= totalRounds) {
      setBubble("¡Fin del juego! ¿Quién gana?");
      setPhase("result");
    } else {
      setRoundIdx((r) => r + 1);
      startRound();
    }
  };

  const answerSeq = getAnswerSequence(email.shuffle);
  const tierPts = getTierPts(elapsed);
  const currentTierIdx = TIERS.findIndex((t) => elapsed < t.max);

  /* ══════ SETUP ══════ */
  if (phase === "setup") {
    return (
      <div className="w-full h-full relative overflow-x-hidden overflow-y-auto rounded-[20px]">
        <PixelStar x="5%" y="8%" delay="0s" /><PixelStar x="92%" y="6%" delay="0.6s" />
        <PixelStar x="10%" y="85%" delay="1.2s" /><PixelStar x="88%" y="78%" delay="0.3s" />
        <PixelStar x="45%" y="3%" delay="0.9s" /><PixelStar x="75%" y="92%" delay="1.5s" />

        <div className="relative z-10 w-full min-h-full flex items-center justify-center py-4">
          <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-12 items-center max-w-[1200px] w-full px-4 md:px-8">
            <div className="flex-1 flex flex-col items-center gap-5">
              <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.2vh),32px)] tracking-[0.3em] uppercase"
                style={{ color: "#ff6b4a", textShadow: "0 0 10px rgba(255,107,74,0.5)", animation: "blink 1.2s step-end infinite" }}>
                ¡A JUGAR!
              </p>
              <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.82] tracking-tight text-center text-[clamp(52px,10vw,120px)]"
                style={{ color: "#fff", textShadow: "0 0 24px rgba(255,107,74,0.6), 0 0 70px rgba(255,107,74,0.3)" }}>
                ORDENA EL<br/>DESASTRE
              </h1>

              <div className="flex items-center gap-2">
                <EnvelopeSimple size={28} weight="bold" style={{ color: "#ff6b4a" }} />
                <span className="font-[family-name:var(--font-pf-display)] text-base text-white/60 tracking-wider uppercase">
                  {EMAILS.length} emails disponibles
                </span>
              </div>

              {/* Config */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-2 rounded-2xl px-4 md:px-8 py-4 md:py-5"
                style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-pf-display)] text-[17px] tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>EQUIPOS</span>
                  {[2, 3, 4].map((n) => (
                    <button key={n} onClick={() => setNumTeams(n)}
                      className="rounded-full font-[family-name:var(--font-pf-display)] text-2xl transition active:scale-90"
                      style={{
                        width: 52, height: 52,
                        background: numTeams === n ? "#ff6b4a" : "transparent",
                        color: numTeams === n ? "#fff" : "rgba(255,255,255,0.5)",
                        border: numTeams === n ? "2px solid #ff8a6a" : "2px solid rgba(255,255,255,0.15)",
                        boxShadow: numTeams === n ? "0 0 14px rgba(255,107,74,0.5), 0 4px 0 #cc4a2a" : "none",
                      }}>{n}</button>
                  ))}
                </div>
                <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.1)" }} />
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-pf-display)] text-[17px] tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>RONDAS</span>
                  {[3, 5, 8, 10, 16].map((n) => (
                    <button key={n} onClick={() => setNumRounds(n)}
                      className="px-3 rounded-full font-[family-name:var(--font-pf-display)] text-base transition active:scale-90"
                      style={{
                        height: 52,
                        background: numRounds === n ? "#ff6b4a" : "transparent",
                        color: numRounds === n ? "#fff" : "rgba(255,255,255,0.5)",
                        border: numRounds === n ? "2px solid #ff8a6a" : "2px solid rgba(255,255,255,0.15)",
                        boxShadow: numRounds === n ? "0 0 14px rgba(255,107,74,0.5), 0 4px 0 #cc4a2a" : "none",
                      }}>{n}</button>
                  ))}
                </div>
              </div>

              <button onClick={startGame}
                className="mt-2 px-10 md:px-20 py-4 md:py-5 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(24px,min(3vw,3.8vh),38px)] text-white uppercase tracking-wider transition active:scale-95"
                style={{
                  background: "linear-gradient(180deg, #ff6b4a 0%, #e05530 100%)",
                  boxShadow: "0 0 30px rgba(255,107,74,0.5), 0 6px 0 #b03a1a, 0 8px 20px rgba(0,0,0,0.4)",
                  textShadow: "0 0 10px rgba(255,255,255,0.5)",
                  animation: "neonPulse 2s ease-in-out infinite",
                }}>
                ¡JUGAR!
              </button>
            </div>

            {/* Chipi */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="rounded-xl px-5 py-3 max-w-[280px]"
                style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)", animation: "fadeUp 500ms ease-out 800ms both" }}>
                <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.2vh),32px)] text-center leading-[1.15] text-white/90">
                  ¿Quién ordena más rápido?
                </p>
              </div>
              <div style={{ filter: "drop-shadow(0 0 3px rgba(255,220,160,0.9)) drop-shadow(0 0 6px rgba(255,200,130,0.6))" }}>
                <ChipiSpark className="w-[min(26vw,34vh)] h-auto" />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
          @keyframes neonPulse { 0%,100%{transform:scale(1);box-shadow:0 0 30px rgba(255,107,74,0.5),0 6px 0 #b03a1a,0 8px 20px rgba(0,0,0,0.4)} 50%{transform:scale(1.04);box-shadow:0 0 40px rgba(255,107,74,0.7),0 6px 0 #b03a1a,0 8px 20px rgba(0,0,0,0.4)} }
          @keyframes fadeUp { 0%{opacity:0;transform:translateY(8px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes starTwinkle { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }
        `}</style>
      </div>
    );
  }

  /* ══════ RESULT ══════ */
  if (phase === "result") {
    const ranking = Array.from({ length: numTeams }, (_, i) => ({ i, s: scores[i] })).sort((a, b) => b.s - a.s);
    const winners = ranking.filter((r) => r.s === ranking[0].s);

    return (
      <div className="w-full h-full relative overflow-x-hidden overflow-y-auto rounded-[20px]">
        <PixelStar x="5%" y="10%" delay="0s" /><PixelStar x="92%" y="15%" delay="0.4s" />
        <PixelStar x="12%" y="80%" delay="0.8s" /><PixelStar x="88%" y="75%" delay="1.2s" />

        <div className="relative z-10 w-full min-h-full flex items-center justify-center py-4">
          <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-12 items-center max-w-[1200px] w-full px-4 md:px-8">
            <div className="flex-1 flex flex-col items-center gap-4">
              <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.85] tracking-tight text-center text-[clamp(60px,10vw,120px)]"
                style={{ color: "#fff", textShadow: "0 0 24px rgba(255,107,74,0.6), 0 0 70px rgba(255,107,74,0.3)" }}>
                ¡FIN DEL<br/>JUEGO!
              </h1>

              <div className="w-full max-w-[500px] space-y-2.5">
                <p className="font-[family-name:var(--font-pf-display)] text-base tracking-[0.3em] uppercase text-center mb-2"
                  style={{ color: "#ff6b4a", textShadow: "0 0 8px rgba(255,107,74,0.5)" }}>PUNTUACIONES</p>
                {ranking.map((r, pos) => (
                  <div key={r.i} className="flex items-center justify-between px-6 py-4 rounded-xl"
                    style={{ background: pos === 0 ? "rgba(255,107,74,0.12)" : "rgba(0,0,0,0.15)", border: pos === 0 ? "1px solid rgba(255,107,74,0.3)" : "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-3">
                      <span className="font-[family-name:var(--font-pf-display)] text-3xl w-10" style={{ color: pos === 0 ? "#ff6b4a" : "rgba(255,255,255,0.4)" }}>{pos + 1}.</span>
                      <span className="font-[family-name:var(--font-pf-display)] text-2xl" style={{ color: TEAMS[r.i].neon, textShadow: `0 0 8px ${TEAMS[r.i].bg}` }}>{TEAMS[r.i].full}</span>
                    </div>
                    <span className="font-[family-name:var(--font-pf-display)] text-5xl text-white" style={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}>{r.s}</span>
                  </div>
                ))}
              </div>

              <p className="font-[family-name:var(--font-pf-display)] text-3xl text-center mt-2"
                style={{ color: "#fff", textShadow: "0 0 12px rgba(255,107,74,0.5)" }}>
                {winners.length === 1 ? `¡Gana ${TEAMS[winners[0].i].full}!` : "¡Empate!"}
              </p>

              <button onClick={() => setPhase("setup")}
                className="px-14 py-4 rounded-full font-[family-name:var(--font-pf-display)] text-2xl text-white uppercase tracking-wider transition active:scale-95"
                style={{
                  background: "linear-gradient(180deg, #ff6b4a 0%, #e05530 100%)",
                  boxShadow: "0 0 20px rgba(255,107,74,0.4), 0 5px 0 #b03a1a",
                  textShadow: "0 0 8px rgba(255,255,255,0.4)",
                }}>
                ¿OTRA PARTIDA?
              </button>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="rounded-xl px-5 py-3 max-w-[280px]"
                style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.2vh),32px)] text-center leading-[1.15] text-white/90">{bubble}</p>
              </div>
              <div style={{ filter: "drop-shadow(0 0 3px rgba(255,220,160,0.9)) drop-shadow(0 0 6px rgba(255,200,130,0.6))" }}>
                <ChipiSpark className="w-[min(24vw,30vh)] h-auto" />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes starTwinkle { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }
        `}</style>
      </div>
    );
  }

  /* ══════ PLAY / CHECK / QUESTION ══════ */
  const timerColor = elapsed < 30 ? "#4ade80" : elapsed < 45 ? "#ffe066" : elapsed < 60 ? "#ff6b4a" : "#ef4444";
  const OPTION_LABELS = ["A", "B", "C"];

  return (
    <div className="w-full h-full relative overflow-x-hidden overflow-y-auto rounded-[20px]">
      <PixelStar x="3%" y="8%" delay="0s" /><PixelStar x="97%" y="12%" delay="0.7s" />

      <div className="relative z-10 w-full min-h-full flex flex-col lg:flex-row gap-3 p-3 md:p-4">
        {/* Main content */}
        <div className="flex-1 min-w-0 flex flex-col gap-2 rounded-2xl p-4"
          style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}>

          {/* Top bar */}
          <div className="flex-shrink-0 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-pf-display)] text-base tracking-[0.2em] uppercase"
                style={{ color: "#ff6b4a", textShadow: "0 0 8px rgba(255,107,74,0.5)" }}>RONDA</span>
              <span className="font-[family-name:var(--font-pf-display)] text-3xl text-white">
                {currentRound}<span className="text-base text-white/30">/{totalRounds}</span>
              </span>
              <span className="font-[family-name:var(--font-pf-display)] text-base text-white/40">
                Email de {email.author} ({email.city})
              </span>
            </div>
            <div className="flex items-center gap-2">
              {Array.from({ length: numTeams }, (_, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-lg"
                  style={{ background: "rgba(0,0,0,0.2)", border: `1px solid ${TEAMS[i].bg}30` }}>
                  <span className="font-[family-name:var(--font-pf-display)] text-base font-bold" style={{ color: TEAMS[i].neon }}>{TEAMS[i].name}</span>
                  <span className="font-[family-name:var(--font-pf-display)] text-base font-bold text-white">{scores[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timer / Status */}
          <div className="flex-shrink-0 flex items-center justify-center gap-4 py-1">
            {phase === "play" && (
              <>
                <span className="font-[family-name:var(--font-pf-display)] text-5xl"
                  style={{ color: timerColor, textShadow: `0 0 16px ${timerColor}` }}>
                  {elapsed}s
                </span>
                <div className="flex flex-col gap-0.5">
                  {TIERS.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 transition-all"
                      style={{ opacity: i === currentTierIdx ? 1 : 0.3 }}>
                      <span className="font-[family-name:var(--font-pf-display)] text-base text-white/70 w-14 text-right">{t.label}</span>
                      <span className="font-[family-name:var(--font-pf-display)] text-base font-bold"
                        style={{ color: i === currentTierIdx ? "#4ade80" : "rgba(255,255,255,0.3)" }}>{t.pts} pts</span>
                    </div>
                  ))}
                </div>
              </>
            )}
            {phase === "check" && (
              <div className="flex items-center gap-4">
                <span className="font-[family-name:var(--font-pf-display)] text-4xl text-white">{elapsed}s</span>
                <span className="font-[family-name:var(--font-pf-display)] text-3xl" style={{ color: "#4ade80", textShadow: "0 0 10px rgba(74,222,128,0.5)" }}>
                  = {tierPts} pts
                </span>
              </div>
            )}
            {phase === "question" && (
              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-pf-display)] text-base tracking-[0.3em] uppercase"
                  style={{ color: "#ffe066", textShadow: "0 0 8px rgba(255,224,102,0.5)" }}>PREGUNTA</span>
                {!qRevealed && (
                  <span className="font-[family-name:var(--font-pf-display)] text-4xl"
                    style={{ color: qTimer <= 10 ? "#ef4444" : "#ffe066", textShadow: `0 0 12px ${qTimer <= 10 ? "#ef4444" : "#ffe066"}`, animation: qTimer <= 10 ? "countdownPulse 0.5s ease-in-out infinite" : "none" }}>
                    {qTimer}s
                  </span>
                )}
                {qRevealed && (
                  <span className="font-[family-name:var(--font-pf-display)] text-base" style={{ color: "#4ade80" }}>+10 pts</span>
                )}
              </div>
            )}
          </div>

          {/* Email fragments / Question */}
          <div className="flex-1 min-h-0 overflow-y-auto">
            {(phase === "play" || phase === "check") && (
              <div className="flex flex-col gap-1.5">
                {/* Show correct answer in check phase */}
                {phase === "check" && (
                  <div className="flex items-center gap-2 mb-1 px-2">
                    <span className="font-[family-name:var(--font-pf-display)] text-base tracking-wider uppercase" style={{ color: "#4ade80" }}>
                      ORDEN CORRECTO:
                    </span>
                    <span className="font-[family-name:var(--font-pf-display)] text-2xl text-white" style={{ textShadow: "0 0 8px rgba(74,222,128,0.4)" }}>
                      {answerSeq}
                    </span>
                  </div>
                )}
                {email.shuffle.map((fragIdx, displayIdx) => {
                  const displayNum = displayIdx + 1;
                  const isCorrectFirst = phase === "check" && fragIdx === 0;
                  const isCorrectLast = phase === "check" && fragIdx === email.fragments.length - 1;
                  return (
                    <div key={displayIdx}
                      className="flex items-start gap-3 px-3 py-2 rounded-xl transition-all"
                      style={{
                        background: phase === "check"
                          ? isCorrectFirst ? "rgba(74,222,128,0.1)" : isCorrectLast ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.04)",
                        border: phase === "check"
                          ? (isCorrectFirst || isCorrectLast) ? "1px solid rgba(74,222,128,0.3)" : "1px solid rgba(255,255,255,0.06)"
                          : "1px solid rgba(255,255,255,0.06)",
                      }}>
                      <span className="font-[family-name:var(--font-pf-display)] text-2xl flex-shrink-0 w-10 text-center"
                        style={{ color: "#ff6b4a", textShadow: "0 0 8px rgba(255,107,74,0.4)" }}>
                        {displayNum}
                      </span>
                      <p className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,min(1.8vw,2.2vh),22px)] leading-snug text-white/90">
                        {email.fragments[fragIdx]}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {phase === "question" && (
              <div className="flex flex-col gap-3 py-2">
                <p className="font-[family-name:var(--font-pf-display)] text-[clamp(24px,min(2.8vw,3.5vh),36px)] leading-snug text-white text-center px-4"
                  style={{ textShadow: "0 0 10px rgba(255,255,255,0.1)" }}>
                  {email.question}
                </p>
                <div className="flex flex-col gap-2 max-w-[600px] mx-auto w-full">
                  {email.options.map((opt, i) => {
                    const isCorrect = qRevealed && i === email.correct;
                    const isWrong = qRevealed && i !== email.correct;
                    return (
                      <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
                        style={{
                          background: isCorrect ? "rgba(74,222,128,0.15)" : isWrong ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)",
                          border: isCorrect ? "2px solid #4ade80" : "2px solid rgba(255,255,255,0.08)",
                          opacity: isWrong ? 0.3 : 1,
                          boxShadow: isCorrect ? "0 0 20px rgba(74,222,128,0.3)" : "none",
                        }}>
                        <span className="font-[family-name:var(--font-pf-display)] text-2xl w-10 text-center"
                          style={{ color: isCorrect ? "#4ade80" : "#ff6b4a" }}>
                          {OPTION_LABELS[i]}
                        </span>
                        <span className="font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.2vw,2.8vh),28px)] text-white/90">
                          {opt}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex-shrink-0">
            {phase === "play" && (
              <button onClick={stopTimer}
                className="w-full py-3 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(22px,min(2.6vw,3.2vh),32px)] text-white uppercase tracking-wider transition active:scale-[0.98]"
                style={{
                  background: "linear-gradient(180deg, #ff6b4a 0%, #e05530 100%)",
                  boxShadow: "0 0 24px rgba(255,107,74,0.4), 0 4px 0 #b03a1a",
                  textShadow: "0 0 8px rgba(255,255,255,0.4)",
                  animation: "neonPulse 2s ease-in-out infinite",
                }}>
                ¡LISTO! PARAR
              </button>
            )}

            {phase === "check" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-[family-name:var(--font-pf-display)] text-base tracking-wider uppercase text-white/50">¿QUIÉN ACIERTA?</span>
                  {Array.from({ length: numTeams }, (_, i) => (
                    <button key={i} onClick={() => awardOrder(i)}
                      className="px-4 py-2 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(18px,min(2vw,2.4vh),24px)] transition active:scale-95"
                      style={{
                        background: TEAMS[i].bg,
                        color: "#fff",
                        border: `2px solid ${TEAMS[i].neon}`,
                        boxShadow: `0 0 14px ${TEAMS[i].bg}80`,
                      }}>
                      {TEAMS[i].full}
                    </button>
                  ))}
                  <button onClick={() => awardOrder(null)}
                    className="px-4 py-2 rounded-full font-[family-name:var(--font-pf-display)] text-base text-white/50 transition active:scale-95"
                    style={{ border: "2px solid rgba(255,255,255,0.15)" }}>
                    NADIE
                  </button>
                </div>
              </div>
            )}

            {phase === "question" && !qRevealed && (
              <button onClick={() => { setQRunning(false); setQRevealed(true); setBubble("¡Veamos la respuesta!"); }}
                className="w-full py-3 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.4vw,3vh),28px)] text-white uppercase tracking-wider transition active:scale-[0.98]"
                style={{
                  background: "linear-gradient(180deg, #ffe066 0%, #F5C842 100%)",
                  color: "#1e0f05",
                  boxShadow: "0 0 20px rgba(255,224,102,0.4), 0 4px 0 #c9a000",
                }}>
                MOSTRAR RESPUESTA
              </button>
            )}

            {phase === "question" && qRevealed && !qAnswered && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-[family-name:var(--font-pf-display)] text-base tracking-wider uppercase text-white/50">¿QUIÉN ACIERTA?</span>
                {Array.from({ length: numTeams }, (_, i) => (
                  <button key={i} onClick={() => awardQuestion(i)}
                    className="px-4 py-2 rounded-full font-[family-name:var(--font-pf-display)] text-base transition active:scale-95"
                    style={{
                      background: TEAMS[i].bg,
                      color: "#fff",
                      border: `2px solid ${TEAMS[i].neon}`,
                      boxShadow: `0 0 10px ${TEAMS[i].bg}60`,
                    }}>
                    {TEAMS[i].name}
                  </button>
                ))}
                <button onClick={() => awardQuestion(null)}
                  className="px-4 py-2 rounded-full font-[family-name:var(--font-pf-display)] text-base text-white/50 transition active:scale-95"
                  style={{ border: "2px solid rgba(255,255,255,0.15)" }}>
                  NADIE
                </button>
              </div>
            )}

            {phase === "question" && qAnswered && (
              <button onClick={nextRound}
                className="w-full py-3 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(20px,min(2.4vw,3vh),28px)] text-white uppercase tracking-wider transition active:scale-[0.98]"
                style={{
                  background: "linear-gradient(180deg, #ff6b4a 0%, #e05530 100%)",
                  boxShadow: "0 0 20px rgba(255,107,74,0.4), 0 4px 0 #b03a1a",
                  textShadow: "0 0 8px rgba(255,255,255,0.4)",
                }}>
                {roundIdx + 1 >= totalRounds ? "VER RESULTADOS" : "SIGUIENTE RONDA →"}
              </button>
            )}
          </div>
        </div>

        {/* Chipi sidebar */}
        <div className="w-full lg:w-[160px] flex-shrink-0 flex flex-row lg:flex-col items-center justify-center lg:justify-end gap-3 pb-2">
          <div className="rounded-xl px-4 py-3 max-w-[280px]" key={`${roundIdx}-${phase}-${bubble}`}
            style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.08)", animation: "fadeUp 400ms ease-out" }}>
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,min(2.2vw,2.8vh),26px)] text-center leading-[1.15] text-white/90">{bubble}</p>
          </div>
          <div style={{ filter: "drop-shadow(0 0 3px rgba(255,220,160,0.9)) drop-shadow(0 0 6px rgba(255,200,130,0.6))" }}>
            <ChipiSpark className="w-[90px] md:w-[110px] h-auto" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp { 0%{opacity:0;transform:translateY(8px)} 100%{opacity:1;transform:translateY(0)} }
        @keyframes neonPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.02)} }
        @keyframes countdownPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
        @keyframes starTwinkle { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }
      `}</style>
    </div>
  );
}
