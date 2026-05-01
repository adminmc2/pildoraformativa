"use client";

import React, { useEffect, useState } from "react";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";
import { CharacterStage } from "@/components/pildoras-formativas/shared/character-stage";
import { EnvelopeSimple, Timer, Trophy, Lightning } from "@phosphor-icons/react";

/* ══════════════════════════════════════════════════════════════
   DATA — 12 emails variados (A1.1)
   ══════════════════════════════════════════════════════════════ */

type Email = {
  author: string;
  recipient: string;
  city: string;
  subject: string;
  fragments: string[];
  shuffle: number[];
  question: string;
  options: string[];
  correct: number;
};

const EMAILS: Email[] = [
  {
    author: "Laura", recipient: "Marco", city: "Sevilla", subject: "Hola desde Sevilla",
    fragments: [
      "¡Hola, Marco! ¿Qué tal?",
      "Hoy te hablo de mi familia: mi padre se llama Antonio y es profesor.",
      "Mi madre se llama Carmen",
      "y",
      "trabaja en un hospital.",
      "Tengo una hermana: se llama Eva y tiene seis años.",
      "¿Y tú? ¿Cuántos hermanos tienes?",
      "¡Un abrazo desde Sevilla! Laura",
    ],
    shuffle: [3, 5, 1, 7, 0, 4, 2, 6],
    question: "El padre de Laura trabaja en un hospital.",
    options: ["Verdadero", "Falso"], correct: 1,
  },
  {
    author: "Carlos", recipient: "Pierre", city: "Madrid", subject: "Saludos desde Madrid",
    fragments: [
      "¡Hola, Pierre! ¿Qué tal?",
      "Hoy te hablo de mi familia: mi padre es médico",
      "y",
      "mi madre trabaja en una tienda.",
      "Tengo un hermano: se llama Marcos y tiene ocho años.",
      "Mi mejor amigo se llama Lucas.",
      "También",
      "está en mi clase.",
      "¿Y tú? ¿En qué trabajan tus padres?",
      "¡Un saludo desde Madrid! Carlos",
    ],
    shuffle: [2, 5, 8, 1, 6, 0, 9, 3, 7, 4],
    question: "Lucas y Carlos están en clases diferentes.",
    options: ["Verdadero", "Falso"], correct: 1,
  },
  {
    author: "Ana", recipient: "Lisa", city: "Barcelona", subject: "Mi nuevo curso",
    fragments: [
      "¡Hola, Lisa! ¿Qué tal?",
      "Este curso me gusta mucho.",
      "Tengo deberes de Lengua y Matemáticas.",
      "Mi asignatura favorita es Arte.",
      "Me gusta mucho dibujar.",
      "También",
      "me gusta la Música.",
      "¿Y tú? ¿Cuál es tu asignatura favorita?",
      "¡Un abrazo desde Barcelona! Ana",
    ],
    shuffle: [4, 7, 2, 0, 5, 8, 1, 6, 3],
    question: "Ana tiene deberes de Música.",
    options: ["Verdadero", "Falso"], correct: 1,
  },
  {
    author: "Pablo", recipient: "Thomas", city: "Valencia", subject: "Mis amigos del cole",
    fragments: [
      "¡Hola, Thomas! ¿Qué tal?",
      "Este curso tengo muchos amigos nuevos en mi clase.",
      "Mi mejor amigo se llama Jorge",
      "y",
      "tiene once años.",
      "Tengo otro amigo: se llama Mateo y es muy simpático.",
      "¿Y tú? ¿Cómo se llama tu mejor amigo?",
      "¡Un saludo desde Valencia! Pablo",
    ],
    shuffle: [3, 6, 0, 5, 2, 7, 1, 4],
    question: "El mejor amigo de Pablo se llama Mateo.",
    options: ["Verdadero", "Falso"], correct: 1,
  },
  {
    author: "Sofía", recipient: "Emma", city: "Bilbao", subject: "Mis hermanos",
    fragments: [
      "¡Hola, Emma! ¿Qué tal?",
      "Hoy te hablo de mis hermanos.",
      "Mi hermano mayor se llama Iker.",
      "También",
      "tengo una hermana: se llama Lara.",
      "Iker tiene quince años y Lara tiene siete.",
      "¿Y tú? ¿Cuántos hermanos tienes?",
      "¡Un abrazo desde Bilbao! Sofía",
    ],
    shuffle: [4, 0, 6, 2, 7, 1, 5, 3],
    question: "Sofía tiene un hermano pequeño.",
    options: ["Verdadero", "Falso"], correct: 1,
  },
  {
    author: "Diego", recipient: "Lucas", city: "Granada", subject: "Mi instituto",
    fragments: [
      "¡Hola, Lucas! ¿Qué tal?",
      "Hoy te hablo de mi instituto: tengo muchas asignaturas.",
      "Tengo deberes de Tecnología",
      "y",
      "de Ciencias Naturales.",
      "Mi asignatura favorita es Educación Física.",
      "¿Y tú? ¿Tienes muchos deberes este curso?",
      "¡Un saludo desde Granada! Diego",
    ],
    shuffle: [2, 5, 0, 7, 3, 6, 1, 4],
    question: "¿Cuál es la asignatura favorita de Diego?",
    options: ["Tecnología", "Ciencias Naturales", "Educación Física"], correct: 2,
  },
  {
    author: "Elena", recipient: "Julie", city: "Málaga", subject: "Un amigo nuevo",
    fragments: [
      "¡Hola, Julie!",
      "Hoy te hablo de un amigo nuevo en mi clase.",
      "Se llama Bruno.",
      "Bruno es muy simpático.",
      "También",
      "es muy gracioso.",
      "¿Tienes amigos nuevos este curso?",
      "¡Un saludo desde Málaga! Elena",
    ],
    shuffle: [4, 1, 6, 0, 3, 7, 2, 5],
    question: "Bruno es un amigo de toda la vida de Elena.",
    options: ["Verdadero", "Falso"], correct: 1,
  },
  {
    author: "Marcos", recipient: "Hans", city: "Zaragoza", subject: "Mi profesor de Matemáticas",
    fragments: [
      "¡Hola, Hans! ¿Qué tal?",
      "Y en el instituto, ¿qué tal el nuevo curso?",
      "Yo este año tengo un profesor nuevo de Matemáticas.",
      "Se llama Roberto",
      "y",
      "es muy joven.",
      "Sus clases son muy divertidas.",
      "¡Un saludo desde Zaragoza! Marcos",
    ],
    shuffle: [4, 0, 5, 2, 7, 1, 6, 3],
    question: "El profesor de Matemáticas es mayor y aburrido.",
    options: ["Verdadero", "Falso"], correct: 1,
  },
  {
    author: "Lucía", recipient: "Anna", city: "Salamanca", subject: "Mi hermana mayor",
    fragments: [
      "¡Hola, Anna! ¿Qué tal?",
      "Hoy te hablo de mi hermana Sara.",
      "Sara tiene veinte años.",
      "Estudia Medicina en la universidad",
      "y",
      "vive en otra ciudad.",
      "¿Tu hermana también estudia?",
      "¡Un abrazo desde Salamanca! Lucía",
    ],
    shuffle: [3, 6, 1, 4, 0, 7, 2, 5],
    question: "¿Qué estudia Sara, la hermana de Lucía?",
    options: ["Inglés", "Matemáticas", "Medicina"], correct: 2,
  },
  {
    author: "Javier", recipient: "Paul", city: "Toledo", subject: "Mi horario",
    fragments: [
      "¡Hola, Paul! ¿Qué tal?",
      "Hoy te hablo de mi instituto.",
      "Voy a clase a las ocho de la mañana",
      "y",
      "estoy en clase hasta las tres de la tarde.",
      "Tengo seis asignaturas todos los días.",
      "¿A qué hora vas al instituto?",
      "¡Un saludo desde Toledo! Javier",
    ],
    shuffle: [3, 0, 5, 2, 7, 1, 6, 4],
    question: "Javier tiene clases por la noche.",
    options: ["Verdadero", "Falso"], correct: 1,
  },
  {
    author: "María", recipient: "Sophie", city: "Córdoba", subject: "Mi mejor amiga",
    fragments: [
      "¡Hola, Sophie! ¿Qué tal?",
      "Hoy te hablo de mi mejor amiga.",
      "Se llama Carla",
      "y",
      "tiene doce años.",
      "Carla juega al baloncesto.",
      "También",
      "estudia inglés los miércoles.",
      "¿Cómo se llama tu mejor amiga?",
      "¡Un abrazo desde Córdoba! María",
    ],
    shuffle: [3, 6, 1, 8, 0, 5, 9, 2, 4, 7],
    question: "Carla estudia inglés todos los días.",
    options: ["Verdadero", "Falso"], correct: 1,
  },
  {
    author: "Daniel", recipient: "Leo", city: "Alicante", subject: "Mi familia y mis amigos",
    fragments: [
      "¡Hola, Leo! ¿Qué tal?",
      "Hoy te hablo de mi familia: mi padre es electricista",
      "y",
      "mi madre es enfermera.",
      "Tengo un hermano: se llama Hugo y tiene catorce años.",
      "En el instituto mi asignatura favorita es Inglés.",
      "Mi mejor amigo se llama Pedro.",
      "También",
      "está en mi clase de Inglés.",
      "¿Cómo se llama tu mejor amigo?",
      "¡Un saludo desde Alicante! Daniel",
    ],
    shuffle: [2, 7, 4, 0, 8, 5, 10, 1, 6, 3, 9],
    question: "¿Quién es Hugo?",
    options: ["El mejor amigo de Daniel", "El hermano de Daniel", "El padre de Daniel"], correct: 1,
  },
];

/* ══════════════════════════════════════════════════════════════
   LINKED PAIRS — fragmentos que deben ir consecutivos
   Si [a,b] → b debe ir inmediatamente después de a.
   El saludo (idx 0) siempre primero, la despedida (último idx) siempre última.
   Todo lo demás puede reordenarse libremente.
   ══════════════════════════════════════════════════════════════ */

const LINKED_PAIRS: [number, number][][] = [
  [[2, 3], [3, 4]],                       // 0  Laura (8):  Mi madre→"y"→trabaja
  [[1, 2], [2, 3], [5, 6], [6, 7]],       // 1  Carlos (10): padre→"y"→madre; amigo→"También"→clase
  [[4, 5], [5, 6]],                       // 2  Ana (9):    dibujar→"También"→Música
  [[2, 3], [3, 4]],                       // 3  Pablo (8):  Jorge→"y"→11 años
  [[2, 3], [3, 4]],                       // 4  Sofía (8):  Iker→"También"→hermana Lara
  [[2, 3], [3, 4]],                       // 5  Diego (8):  Tecnología→"y"→Ciencias Naturales
  [[3, 4], [4, 5]],                       // 6  Elena (8):  simpático→"También"→gracioso
  [[3, 4], [4, 5]],                       // 7  Marcos (8): Roberto→"y"→joven
  [[3, 4], [4, 5]],                       // 8  Lucía (8):  Medicina→"y"→otra ciudad
  [[2, 3], [3, 4]],                       // 9  Javier (8): 8 mañana→"y"→3 tarde
  [[2, 3], [3, 4], [5, 6], [6, 7]],       // 10 María (10): Carla→"y"→12; baloncesto→"También"→inglés
  [[1, 2], [2, 3], [6, 7], [7, 8]],       // 11 Daniel (11): padre→"y"→madre; Pedro→"También"→clase Inglés
];

/* ══════════════════════════════════════════════════════════════
   EMAIL_PARAGRAPHS — agrupación visual de slots en párrafos
   Cada subarray = un párrafo. Los slots dentro fluyen inline
   (conector + frase juntos), entre párrafos hay espacio real.
   ══════════════════════════════════════════════════════════════ */

const EMAIL_PARAGRAPHS: number[][][] = [
  [[0], [1, 2, 3, 4], [5], [6], [7]],          // 0  Laura (8)
  [[0], [1, 2, 3], [4], [5, 6, 7], [8], [9]],  // 1  Carlos (10)
  [[0], [1], [2], [3], [4, 5, 6], [7], [8]],   // 2  Ana (9)
  [[0], [1], [2, 3, 4], [5], [6], [7]],        // 3  Pablo (8)
  [[0], [1], [2, 3, 4], [5], [6], [7]],        // 4  Sofía (8)
  [[0], [1], [2, 3, 4], [5], [6], [7]],        // 5  Diego (8)
  [[0], [1], [2], [3, 4, 5], [6], [7]],        // 6  Elena (8)
  [[0], [1], [2], [3, 4, 5], [6], [7]],        // 7  Marcos (8)
  [[0], [1], [2], [3, 4, 5], [6], [7]],        // 8  Lucía (8)
  [[0], [1], [2, 3, 4], [5], [6], [7]],        // 9  Javier (8)
  [[0], [1], [2, 3, 4], [5, 6, 7], [8], [9]],  // 10 María (10)
  [[0], [1, 2, 3], [4], [5], [6, 7, 8], [9], [10]], // 11 Daniel (11)
];

/** Comprueba si un orden dado es coherente para un email */
function isValidOrder(emailIdx: number, slots: (number | null)[], email: Email): boolean {
  const n = email.fragments.length;
  // Convertir display numbers (1-based) → original fragment indices
  const order = slots.map((d) => (d === null ? -1 : email.shuffle[d - 1]));
  if (order.includes(-1)) return false;
  // Saludo primero, despedida última
  if (order[0] !== 0) return false;
  if (order[n - 1] !== n - 1) return false;
  // Linked pairs: b debe ir justo después de a
  for (const [a, b] of LINKED_PAIRS[emailIdx]) {
    const posA = order.indexOf(a);
    const posB = order.indexOf(b);
    if (posB !== posA + 1) return false;
  }
  return true;
}

/* ══════════════════════════════════════════════════════════════
   TEAMS & SCORING (3 categorías)
   ══════════════════════════════════════════════════════════════ */

const TEAMS = [
  { name: "E1", full: "Equipo 1", color: "#D68910", soft: "#FEF5E7" },
  { name: "E2", full: "Equipo 2", color: "#B5179E", soft: "#F8D7F0" },
  { name: "E3", full: "Equipo 3", color: "#3F6B14", soft: "#E8F5E0" },
  { name: "E4", full: "Equipo 4", color: "#2E86C1", soft: "#D6EAF8" },
];

const SPEED_TIERS = [
  { max: 30, pts: 15, label: "< 30s" },
  { max: 45, pts: 12, label: "< 45s" },
  { max: 60, pts: 10, label: "< 60s" },
  { max: 90, pts: 7, label: "< 90s" },
  { max: 120, pts: 5, label: "< 120s" },
];
const ORDER_PTS = 15;
const QUESTION_PTS = 10;

function getSpeedPts(seconds: number): number {
  for (const t of SPEED_TIERS) if (seconds < t.max) return t.pts;
  return 3;
}

/* ── Highlight helper (naranja, sin cursiva) ── */
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold" style={{ color: "var(--color-pf-spark)" }}>
    {children}
  </span>
);

/* ══════════════════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════════════════ */

type Phase = "setup" | "play" | "check" | "question" | "result";

export function SlideChipi() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [numTeams, setNumTeams] = useState(2);
  const [numRounds, setNumRounds] = useState(3);
  const [scores, setScores] = useState([0, 0, 0, 0]);

  const [roundIdx, setRoundIdx] = useState(0);
  const [emailIndices, setEmailIndices] = useState<number[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  /* Check phase: select-and-place */
  const [slots, setSlots] = useState<(number | null)[]>(Array(7).fill(null));
  const [selectedFrag, setSelectedFrag] = useState<number | null>(null);
  const [verified, setVerified] = useState(false);
  const [verifyCorrect, setVerifyCorrect] = useState(false);
  const [attempt, setAttempt] = useState(1); // 1 = primer intento (rapidez+orden), 2+ = solo orden

  /* Comprehension */
  const [qTimer, setQTimer] = useState(30);
  const [qRunning, setQRunning] = useState(false);
  const [qRevealed, setQRevealed] = useState(false);
  const [qAnswered, setQAnswered] = useState(false);

  const [bubble, setBubble] = useState<React.ReactNode>(<>¿Quién ordena <V>más rápido</V>?</>);
  const [step, setStep] = useState(0);

  const email = emailIndices.length > 0 ? EMAILS[emailIndices[roundIdx]] : EMAILS[0];
  const currentRound = roundIdx + 1;
  const totalRounds = numRounds;

  /* Timer UP */
  useEffect(() => {
    if (!running) return;
    if (elapsed >= 120) { setRunning(false); setBubble("¡Tiempo! 2 minutos."); return; }
    const t = setTimeout(() => setElapsed((s) => s + 1), 1000);
    return () => clearTimeout(t);
  }, [elapsed, running]);

  /* Timer DOWN */
  useEffect(() => {
    if (!qRunning) return;
    if (qTimer <= 0) { setQRunning(false); setBubble("¡Tiempo! Nadie responde."); return; }
    const t = setTimeout(() => setQTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [qTimer, qRunning]);

  const startGame = () => {
    const shuffled = [...Array(EMAILS.length).keys()].sort(() => Math.random() - 0.5);
    const indices = shuffled.slice(0, numRounds);
    setEmailIndices(indices);
    setScores([0, 0, 0, 0]);
    setRoundIdx(0);
    startRound(EMAILS[indices[0]].fragments.length);
  };

  const startRound = (fragCount?: number) => {
    const count = fragCount ?? email.fragments.length;
    setElapsed(0);
    setRunning(true);
    setSlots(Array(count).fill(null));
    setSelectedFrag(null);
    setVerified(false);
    setVerifyCorrect(false);
    setAttempt(1);
    setQTimer(30);
    setQRunning(false);
    setQRevealed(false);
    setQAnswered(false);
    setStep((s) => s + 1);
    setBubble(<>¡<V>Escribid</V> las respuestas!</>);
    setPhase("play");
  };

  const stopTimer = () => {
    setRunning(false);
    setStep((s) => s + 1);
    setBubble(<><V>{elapsed}s</V> Ahora comprueba el orden.</>);
    setPhase("check");
  };

  /* Select a fragment on the left */
  const selectFragment = (displayNum: number) => {
    setSelectedFrag((prev) => prev === displayNum ? null : displayNum);
  };

  /* Place selected fragment into a slot, or clear if occupied */
  const placeInSlot = (slotIdx: number) => {
    if (verified) return;
    setSlots((prev) => {
      const next = [...prev];
      if (next[slotIdx] !== null) {
        // Clear this slot
        next[slotIdx] = null;
        return next;
      }
      if (selectedFrag === null) return prev;
      // Remove selectedFrag from any other slot first
      const existing = next.indexOf(selectedFrag);
      if (existing !== -1) next[existing] = null;
      next[slotIdx] = selectedFrag;
      return next;
    });
    setSelectedFrag(null);
  };

  const verifyOrder = () => {
    const eIdx = emailIndices.length > 0 ? emailIndices[roundIdx] : 0;
    const isCorrect = isValidOrder(eIdx, slots, email);
    setVerified(true);
    setVerifyCorrect(isCorrect);
    setStep((s) => s + 1);
    setBubble(isCorrect
      ? <>¡<V>Correcto</V>! ¿Qué equipo lo ha dicho?</>
      : <>¡<V>No es correcto</V>! Probad otro equipo o pasad a la pregunta.</>
    );
  };

  const awardOrder = (teamIdx: number | null) => {
    if (teamIdx !== null) {
      const orderPts = ORDER_PTS;
      const speedPts = attempt === 1 ? getSpeedPts(elapsed) : 0;
      const total = orderPts + speedPts;
      setScores((s) => { const n = [...s]; n[teamIdx] += total; return n; });
      const detail = speedPts > 0
        ? <>{ORDER_PTS} (orden) + {speedPts} (rapidez) = <V>{total} pts</V></>
        : <>{ORDER_PTS} pts (orden)</>;
      setBubble(<>¡<V>{TEAMS[teamIdx].full}</V>: {detail}!</>);
    } else {
      setBubble("Nadie acierta el orden. ¡Vamos a la pregunta!");
    }
    setTimeout(() => {
      setQRunning(true);
      setStep((s) => s + 1);
      setBubble(<>¡Pregunta de <V>comprensión</V>! 30 segundos.</>);
      setPhase("question");
    }, 1500);
  };

  const retryOrder = () => {
    setSlots(Array(email.fragments.length).fill(null));
    setSelectedFrag(null);
    setVerified(false);
    setVerifyCorrect(false);
    setAttempt((a) => a + 1);
    setStep((s) => s + 1);
    setBubble(<>Intento <V>{attempt + 1}</V>: ¿otro equipo?</>);
  };

  const skipToQuestion = () => {
    setTimeout(() => {
      setQRunning(true);
      setStep((s) => s + 1);
      setBubble(<>¡Pregunta de <V>comprensión</V>! 30 segundos.</>);
      setPhase("question");
    }, 500);
  };

  const awardQuestion = (teamIdx: number | null) => {
    setQRunning(false);
    setQRevealed(true);
    setQAnswered(true);
    setStep((s) => s + 1);
    if (teamIdx !== null) {
      setScores((s) => { const n = [...s]; n[teamIdx] += QUESTION_PTS; return n; });
      setBubble(<>¡<V>{TEAMS[teamIdx].full}</V> +{QUESTION_PTS} pts (comprensión)!</>);
    } else {
      setBubble("¡Nadie acierta! La respuesta era...");
    }
  };

  const nextRound = () => {
    if (roundIdx + 1 >= totalRounds) {
      setStep((s) => s + 1);
      setBubble(<>¡<V>Fin del juego</V>! ¿Quién gana?</>);
      setPhase("result");
    } else {
      const nextIdx = roundIdx + 1;
      setRoundIdx(nextIdx);
      startRound(EMAILS[emailIndices[nextIdx]].fragments.length);
    }
  };

  const speedPts = getSpeedPts(elapsed);
  const currentTierIdx = SPEED_TIERS.findIndex((t) => elapsed < t.max);
  const timerColor = elapsed < 30 ? "#3F6B14" : elapsed < 45 ? "#D68910" : elapsed < 60 ? "#C0392B" : "#C0392B";

  /* ══════ SETUP ══════ */
  if (phase === "setup") {
    return (
      <div className="w-full h-full flex items-center justify-center overflow-y-auto md:overflow-hidden">
        <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
          <div className="flex flex-col gap-3 min-w-0">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <span
                className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]"
                style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}
              >
                CHIPI
              </span>
              <span
                className="px-3 py-1 rounded-full font-semibold"
                style={{ fontSize: "clamp(18px, 1.3vw, 20px)", background: "#FFE8D6", color: "#C0392B" }}
              >
                Desafío
              </span>
            </div>

            {/* Título */}
            <h1
              className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[var(--color-pf-ink)]"
              style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
            >
              ¡Ordena el desastre!
            </h1>

            {/* Dinámica del juego */}
            <div className="rounded-2xl px-5 py-4 space-y-2"
              style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <p
                className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] uppercase tracking-wider opacity-80"
                style={{ fontSize: "clamp(28px, 2.6vw, 36px)" }}
              >
                ¿Cómo se juega?
              </p>
              <ol
                className="list-decimal list-inside space-y-2 text-[var(--color-pf-ink)] leading-snug"
                style={{ fontSize: "clamp(26px, 2.4vw, 32px)" }}
              >
                <li>Vais a ver un <strong>correo electrónico desordenado</strong> en 8 o 9 fragmentos.</li>
                <li>Escribid en vuestro cuaderno, hoja o en la pizarra el <strong>orden correcto</strong> (ej: 3-1-5-9-7-2-6-8-4) lo más rápido posible.</li>
                <li>El primer equipo en terminar dice <strong>¡Listo!</strong> y paramos el cronómetro.</li>
                <li>Comprobamos en pantalla: si es correcto, ganáis <strong>puntos de orden + bonus de rapidez</strong>. Si no, otro equipo puede intentarlo (solo puntos de orden).</li>
                <li>Después respondéis una <strong>pregunta de comprensión</strong> (30s) que vale {QUESTION_PTS} puntos extra.</li>
              </ol>
            </div>

            {/* Puntuación — 3 categorías */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="font-semibold text-white bg-[var(--color-pf-ink)] px-5 py-2 rounded-full flex items-center gap-2"
                style={{ fontSize: "clamp(24px, 2.2vw, 30px)" }}
              >
                <EnvelopeSimple size={26} weight="bold" />
                {EMAILS.length} correos
              </span>
              <span
                className="px-4 py-2 rounded-full font-semibold"
                style={{ fontSize: "clamp(24px, 2.2vw, 30px)", background: "#E8F5E0", color: "#3F6B14" }}
              >
                Orden = {ORDER_PTS} pts
              </span>
              <span
                className="px-4 py-2 rounded-full font-semibold"
                style={{ fontSize: "clamp(24px, 2.2vw, 30px)", background: "#FEF5E7", color: "#D68910" }}
              >
                Rapidez = {SPEED_TIERS[0].pts}–{SPEED_TIERS[SPEED_TIERS.length - 1].pts} pts
              </span>
              <span
                className="px-4 py-2 rounded-full font-semibold"
                style={{ fontSize: "clamp(24px, 2.2vw, 30px)", background: "#D6EAF8", color: "#2E86C1" }}
              >
                Comprensión = {QUESTION_PTS} pts
              </span>
            </div>

            {/* Config */}
            <div className="flex flex-wrap items-center gap-5 mt-1 rounded-2xl px-5 py-4"
              style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.08)" }}>
              {/* Equipos */}
              <div className="flex items-center gap-2">
                <span
                  className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-70"
                  style={{ fontSize: "clamp(18px, 1.3vw, 20px)" }}
                >
                  EQUIPOS
                </span>
                {[2, 3, 4].map((n) => (
                  <button key={n} onClick={() => setNumTeams(n)}
                    className="w-12 h-12 rounded-full font-[family-name:var(--font-pf-display)] transition active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                    style={{
                      fontSize: "clamp(20px, 1.6vw, 24px)",
                      background: numTeams === n ? "var(--color-pf-spark)" : "white",
                      color: numTeams === n ? "#fff" : "var(--color-pf-ink)",
                      border: numTeams === n ? "2px solid var(--color-pf-spark)" : "2px solid rgba(0,0,0,0.12)",
                      boxShadow: numTeams === n ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
                    }}>{n}</button>
                ))}
              </div>
              <div className="w-px h-10" style={{ background: "rgba(0,0,0,0.1)" }} />
              {/* Rondas */}
              <div className="flex items-center gap-2">
                <span
                  className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-70"
                  style={{ fontSize: "clamp(18px, 1.3vw, 20px)" }}
                >
                  RONDAS
                </span>
                {[3, 5, 8, 10, 12].map((n) => (
                  <button key={n} onClick={() => setNumRounds(n)}
                    className="px-3 h-12 rounded-full font-[family-name:var(--font-pf-display)] transition active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                    style={{
                      fontSize: "clamp(20px, 1.6vw, 24px)",
                      background: numRounds === n ? "var(--color-pf-spark)" : "white",
                      color: numRounds === n ? "#fff" : "var(--color-pf-ink)",
                      border: numRounds === n ? "2px solid var(--color-pf-spark)" : "2px solid rgba(0,0,0,0.12)",
                      boxShadow: numRounds === n ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
                    }}>{n}</button>
                ))}
              </div>
            </div>

            {/* Start */}
            <button onClick={startGame}
              className="mt-2 px-14 py-4 rounded-full font-[family-name:var(--font-pf-display)] text-white uppercase tracking-wider transition active:scale-95 hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2 min-h-[44px]"
              style={{
                fontSize: "clamp(28px, 3vw, 44px)",
                background: "var(--color-pf-spark)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                animation: "btnPulse 2s ease-in-out infinite",
              }}>
              ¡JUGAR!
            </button>
          </div>

          {/* Chipi */}
          <CharacterStage bubble={bubble} step={step}>
            <ChipiSpark className="w-full h-auto" />
          </CharacterStage>
        </div>
      </div>
    );
  }

  /* ══════ RESULT ══════ */
  if (phase === "result") {
    const ranking = Array.from({ length: numTeams }, (_, i) => ({ i, s: scores[i] })).sort((a, b) => b.s - a.s);
    const winners = ranking.filter((r) => r.s === ranking[0].s);

    return (
      <div className="w-full h-full flex items-center justify-center overflow-y-auto md:overflow-hidden">
        <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4 md:gap-6 items-center px-3 md:px-4">
          <div className="flex flex-col gap-3 min-w-0 items-center md:items-start">
            <div className="flex items-center gap-3">
              <Trophy size={36} weight="fill" style={{ color: "var(--color-pf-spark)" }} />
              <h1
                className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[var(--color-pf-ink)]"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                ¡Fin del juego!
              </h1>
            </div>

            <div className="w-full max-w-[500px] space-y-2">
              {ranking.map((r, pos) => (
                <div key={r.i} className="flex items-center justify-between px-5 py-3 rounded-2xl"
                  style={{
                    background: pos === 0 ? TEAMS[r.i].soft : "rgba(0,0,0,0.03)",
                    border: pos === 0 ? `2px solid ${TEAMS[r.i].color}` : "2px solid rgba(0,0,0,0.06)",
                  }}>
                  <div className="flex items-center gap-3">
                    <span
                      className="font-[family-name:var(--font-pf-display)] w-8"
                      style={{ fontSize: "clamp(28px, 2.4vw, 36px)", color: pos === 0 ? TEAMS[r.i].color : "rgba(0,0,0,0.25)" }}
                    >
                      {pos + 1}.
                    </span>
                    <span
                      className="font-[family-name:var(--font-pf-display)]"
                      style={{ fontSize: "clamp(22px, 1.8vw, 28px)", color: TEAMS[r.i].color }}
                    >
                      {TEAMS[r.i].full}
                    </span>
                  </div>
                  <span
                    className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]"
                    style={{ fontSize: "clamp(30px, 3.2vw, 48px)" }}
                  >
                    {r.s}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] mt-1"
              style={{ fontSize: "clamp(26px, 2.4vw, 36px)" }}
            >
              {winners.length === 1 ? `¡Gana ${TEAMS[winners[0].i].full}!` : "¡Empate!"}
            </p>

            <button onClick={() => { setPhase("setup"); setStep((s) => s + 1); setBubble(<>¿Quién ordena <V>más rápido</V>?</>); }}
              className="px-10 py-3 rounded-full font-[family-name:var(--font-pf-display)] text-white uppercase tracking-wider transition active:scale-95 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2 min-h-[44px]"
              style={{ fontSize: "clamp(20px, 1.6vw, 24px)", background: "var(--color-pf-spark)", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}>
              ¿OTRA PARTIDA?
            </button>
          </div>

          <CharacterStage bubble={bubble} step={step}>
            <ChipiSpark className="w-full h-auto" />
          </CharacterStage>
        </div>
      </div>
    );
  }

  /* ══════ PLAY / CHECK / QUESTION ══════ */
  const OPTION_LABELS = ["A", "B", "C"];

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto md:overflow-hidden">
      {/* Top bar */}
      <div className="flex-shrink-0 flex flex-wrap items-center justify-between gap-2 px-4 py-2"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-70"
            style={{ fontSize: "clamp(18px, 1.3vw, 20px)" }}
          >
            RONDA
          </span>
          <span
            className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]"
            style={{ fontSize: "clamp(24px, 2.4vw, 36px)" }}
          >
            {currentRound}
            <span className="opacity-30" style={{ fontSize: "clamp(18px, 1.3vw, 20px)" }}>
              /{totalRounds}
            </span>
          </span>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.04)" }}>
            <EnvelopeSimple size={18} weight="bold" style={{ color: "var(--color-pf-spark)" }} />
            <span
              className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-80"
              style={{ fontSize: "clamp(18px, 1.3vw, 20px)" }}
            >
              {email.author} ({email.city})
            </span>
          </div>
        </div>

        {/* Timer */}
        {(phase === "play" || phase === "check") && (
          <div className="flex items-center gap-2">
            <Timer size={22} weight="bold" style={{ color: timerColor }} />
            <span
              className="font-[family-name:var(--font-pf-display)]"
              style={{ fontSize: "clamp(28px, 3vw, 42px)", color: timerColor }}
            >
              {elapsed}s
            </span>
            {phase === "check" && (
              <span
                className="px-3 py-1 rounded-full font-semibold"
                style={{ fontSize: "clamp(18px, 1.3vw, 20px)", background: "#E8F5E0", color: "#3F6B14" }}
              >
                = {speedPts} pts rapidez
              </span>
            )}
          </div>
        )}

        {phase === "question" && (
          <div className="flex items-center gap-2">
            <Lightning size={22} weight="fill" style={{ color: "#D68910" }} />
            {!qRevealed && (
              <span className="font-[family-name:var(--font-pf-display)]"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)", color: qTimer <= 10 ? "#C0392B" : "#D68910", animation: qTimer <= 10 ? "pulse 0.5s ease-in-out infinite" : "none" }}>
                {qTimer}s
              </span>
            )}
          </div>
        )}

        {/* Scores */}
        <div className="flex items-center gap-2">
          {Array.from({ length: numTeams }, (_, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full"
              style={{ background: TEAMS[i].soft, border: `1px solid ${TEAMS[i].color}30` }}>
              <span className="font-[family-name:var(--font-pf-display)] font-bold" style={{ fontSize: "clamp(18px, 1.4vw, 20px)", color: TEAMS[i].color }}>{TEAMS[i].name}</span>
              <span className="font-[family-name:var(--font-pf-display)] font-bold text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(18px, 1.4vw, 20px)" }}>{scores[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 min-h-0 flex items-center justify-center overflow-y-auto px-3 md:px-4">
        {(phase === "play" || phase === "check") && (
          <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[1.2fr_2.5fr_1fr] gap-3 md:gap-5 items-start">
            {/* LEFT: Scrambled fragments — compact list */}
            <div className="flex flex-col gap-1 min-w-0" style={{ maxHeight: "52vh", overflowY: "auto" }}>
              <p className="font-[family-name:var(--font-pf-display)] tracking-wider mb-0.5"
                style={{ fontSize: "clamp(18px, 1.5vw, 20px)", color: "var(--color-pf-spark)" }}>
                FRAGMENTOS
              </p>
              {email.shuffle.map((fragIdx, displayIdx) => {
                const displayNum = displayIdx + 1;
                const isPlaced = phase === "check" && slots.includes(displayNum);
                const isSelected = phase === "check" && selectedFrag === displayNum;
                return (
                  <button key={displayIdx}
                    onClick={() => phase === "check" && !verified && selectFragment(displayNum)}
                    disabled={phase !== "check" || verified}
                    className="flex items-start gap-2 px-2.5 py-1.5 min-h-[44px] rounded-lg text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                    style={{
                      background: isSelected ? "var(--color-pf-spark)" : "white",
                      border: isSelected ? "2px solid var(--color-pf-spark)" : "1px solid rgba(0,0,0,0.08)",
                      opacity: isPlaced && !isSelected ? 0.35 : 1,
                      cursor: phase === "check" && !verified ? "pointer" : "default",
                      boxShadow: isSelected ? "0 4px 16px rgba(0,0,0,0.15)" : "none",
                    }}>
                    <span className="font-[family-name:var(--font-pf-display)] flex-shrink-0 w-7 text-center font-bold"
                      style={{ fontSize: "clamp(22px, 2.2vw, 26px)", color: isSelected ? "#fff" : "var(--color-pf-spark)" }}>
                      {displayNum}
                    </span>
                    <p className="font-[family-name:var(--font-pf-display)] leading-snug"
                      style={{ fontSize: "clamp(22px, 2.2vw, 26px)", color: isSelected ? "#fff" : "var(--color-pf-ink)" }}>
                      {email.fragments[fragIdx]}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* CENTER: Email template — prominent */}
            <div className="min-w-0 rounded-2xl overflow-hidden"
              style={{ background: "#FFFDF7", border: "2px solid rgba(0,0,0,0.12)", boxShadow: "0 6px 28px rgba(0,0,0,0.08)", maxHeight: "52vh", overflowY: "auto" }}>
              {/* Email header */}
              <div className="px-5 py-3"
                style={{ background: "#F5F0E8", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <p className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
                  <span className="opacity-40">De:</span> <span className="font-semibold">{email.author}@correo.es</span>
                </p>
                <p className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
                  <span className="opacity-40">Para:</span> <span className="font-semibold">{email.recipient}@correo.com</span>
                </p>
                <p className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
                  <span className="opacity-40">Asunto:</span> <span className="font-semibold">{email.subject}</span>
                </p>
              </div>

              {/* Slots — body of the email, agrupados por párrafo */}
              <div className="flex flex-col gap-4 p-4">
                {EMAIL_PARAGRAPHS[emailIndices[roundIdx] ?? 0].map((slotIdxs, pIdx) => (
                  <div key={pIdx} className="flex flex-wrap items-baseline gap-x-2 gap-y-1.5">
                    {slotIdxs.map((slotIdx) => {
                      const slotVal = slots[slotIdx];
                      const hasValue = slotVal !== null;
                      const fragmentText = hasValue ? email.fragments[email.shuffle[slotVal - 1]] : null;
                      const canPlace = phase === "check" && !verified;
                      const isDropTarget = canPlace && selectedFrag !== null && !hasValue;

                      return (
                        <button key={slotIdx}
                          onClick={() => canPlace && placeInSlot(slotIdx)}
                          disabled={!canPlace}
                          className="inline-flex items-baseline gap-1.5 px-2 py-1 min-h-[44px] rounded-md transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                          style={{
                            background: isDropTarget ? "rgba(255,140,50,0.08)" : "transparent",
                            border: isDropTarget
                              ? "2px dashed var(--color-pf-spark)"
                              : hasValue ? "2px solid transparent" : "2px dashed rgba(0,0,0,0.18)",
                            cursor: canPlace ? "pointer" : "default",
                          }}>
                          <span className="flex-shrink-0 inline-flex items-center justify-center font-[family-name:var(--font-pf-display)] text-[14px] px-1.5 rounded leading-none"
                            style={{
                              minWidth: "22px",
                              height: "22px",
                              background: hasValue ? "var(--color-pf-spark)" : "rgba(0,0,0,0.06)",
                              color: hasValue ? "#fff" : "rgba(0,0,0,0.35)",
                            }}>
                            {hasValue ? slotVal : "?"}
                          </span>
                          <span className="font-[family-name:var(--font-pf-display)] leading-snug"
                            style={{ fontSize: "clamp(22px, 2.2vw, 26px)", color: fragmentText ? "var(--color-pf-ink)" : "rgba(0,0,0,0.3)" }}>
                            {fragmentText || (isDropTarget ? "Colocar aquí" : "· · · · · · ·")}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}

                {/* Correct order if wrong */}
                {verified && !verifyCorrect && (
                  <div className="mt-2 px-3 py-2 rounded-xl" style={{ background: "#E8F5E0", border: "1px solid rgba(63,107,20,0.2)" }}>
                    <p className="font-[family-name:var(--font-pf-display)] mb-1" style={{ fontSize: "clamp(18px, 1.5vw, 20px)", color: "#3F6B14" }}>ORDEN CORRECTO:</p>
                    {email.fragments.map((frag, i) => {
                      const displayNum = email.shuffle.indexOf(i) + 1;
                      return (
                        <p key={i} className="font-[family-name:var(--font-pf-display)] leading-snug text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(18px, 1.6vw, 20px)" }}>
                          <span className="font-semibold" style={{ color: "#3F6B14" }}>{displayNum}</span> {frag}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Chipi */}
            <CharacterStage bubble={bubble} step={step}>
              <ChipiSpark className="w-full h-auto" />
            </CharacterStage>
          </div>
        )}

        {/* QUESTION — email visible + pregunta */}
        {phase === "question" && (
          <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[1.3fr_1.2fr_1fr] gap-3 md:gap-5 items-start">
            {/* LEFT: email ordered for reference */}
            <div className="min-w-0 rounded-2xl overflow-hidden"
              style={{ background: "#FFFDF7", border: "1px solid rgba(0,0,0,0.1)", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <div className="px-4 py-2"
                style={{ background: "#F5F0E8", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <p className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}>
                  <span className="opacity-40">De:</span> <span className="font-semibold">{email.author}@correo.es</span>
                </p>
                <p className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}>
                  <span className="opacity-40">Para:</span> <span className="font-semibold">{email.recipient}@correo.com</span>
                </p>
                <p className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}>
                  <span className="opacity-40">Asunto:</span> <span className="font-semibold">{email.subject}</span>
                </p>
              </div>
              <div className="px-4 py-3 space-y-1">
                {email.fragments.map((frag, i) => (
                  <p key={i} className="font-[family-name:var(--font-pf-display)] leading-snug text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
                    {frag}
                  </p>
                ))}
              </div>
            </div>

            {/* CENTER: question + options */}
            <div className="flex flex-col gap-3 justify-center">
              <p className="font-[family-name:var(--font-pf-display)] leading-snug text-[var(--color-pf-ink)] px-2" style={{ fontSize: "clamp(24px, 2.6vw, 32px)" }}>
                {email.question}
              </p>
              <div className="flex flex-col gap-2">
                {email.options.map((opt, i) => {
                  const isCorrect = qRevealed && i === email.correct;
                  const isWrong = qRevealed && i !== email.correct;
                  return (
                    <button key={i}
                      onClick={() => { if (!qRevealed) { setQRunning(false); setQRevealed(true); setStep((s) => s + 1); setBubble("¡Veamos la respuesta!"); } }}
                      className="flex items-center gap-3 px-4 py-2.5 min-h-[44px] rounded-xl transition-all w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pf-spark)] focus-visible:ring-offset-2"
                      style={{
                        background: isCorrect ? "#E8F5E0" : "white",
                        border: isCorrect ? "2px solid #3F6B14" : "2px solid rgba(0,0,0,0.08)",
                        opacity: isWrong ? 0.3 : 1,
                        boxShadow: isCorrect ? "0 4px 16px rgba(63,107,20,0.2)" : "none",
                        cursor: qRevealed ? "default" : "pointer",
                      }}>
                      <span className="font-[family-name:var(--font-pf-display)] w-9 text-center"
                        style={{ fontSize: "clamp(20px, 2vw, 24px)", color: isCorrect ? "#3F6B14" : "var(--color-pf-spark)" }}>
                        {OPTION_LABELS[i]}
                      </span>
                      <span className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)]" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Chipi */}
            <CharacterStage bubble={bubble} step={step}>
              <ChipiSpark className="w-full h-auto" />
            </CharacterStage>
          </div>
        )}
      </div>

      {/* Actions bar */}
      <div className="flex-shrink-0 flex items-center justify-center gap-3 px-4 py-2"
        style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="flex-1 max-w-[700px]">
          {phase === "play" && (
            <button onClick={stopTimer}
              className="w-full py-3 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] text-white uppercase tracking-wider transition active:scale-[0.98] hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-pf-spark)]/40"
              style={{ fontSize: "clamp(22px, 2.4vw, 28px)", background: "var(--color-pf-spark)", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
              ¡LISTO! PARAR
            </button>
          )}

          {phase === "check" && !verified && (
            <div className="flex items-center gap-3">
              <p className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-50 flex-shrink-0" style={{ fontSize: "clamp(18px, 1.4vw, 20px)" }}>
                Selecciona fragmento → coloca en el email
              </p>
              <button onClick={verifyOrder}
                disabled={slots.some((s) => s === null)}
                className="flex-1 py-3 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] text-white uppercase tracking-wider transition active:scale-[0.98] hover:opacity-90 disabled:opacity-30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3F6B14]/40"
                style={{ fontSize: "clamp(20px, 2vw, 24px)", background: "#3F6B14", boxShadow: "0 4px 16px rgba(63,107,20,0.2)" }}>
                COMPROBAR
              </button>
            </div>
          )}

          {phase === "check" && verified && verifyCorrect && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-60" style={{ fontSize: "clamp(18px, 1.4vw, 20px)" }}>¿QUIÉN ACIERTA?</span>
              {Array.from({ length: numTeams }, (_, i) => (
                <button key={i} onClick={() => awardOrder(i)}
                  className="px-5 py-2 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] text-white transition active:scale-95 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ fontSize: "clamp(18px, 1.6vw, 20px)", background: TEAMS[i].color, boxShadow: "0 3px 10px rgba(0,0,0,0.12)" }}>
                  {TEAMS[i].full}
                </button>
              ))}
              <button onClick={() => awardOrder(null)}
                className="px-5 py-2 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-60 transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ fontSize: "clamp(18px, 1.6vw, 20px)", border: "2px solid rgba(0,0,0,0.18)" }}>
                NADIE
              </button>
            </div>
          )}

          {phase === "check" && verified && !verifyCorrect && (
            <div className="flex items-center gap-3">
              <button onClick={retryOrder}
                className="flex-1 py-3 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] uppercase tracking-wider transition active:scale-[0.98] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ fontSize: "clamp(18px, 1.6vw, 20px)", background: "white", color: "var(--color-pf-spark)", border: "2px solid var(--color-pf-spark)" }}>
                OTRO EQUIPO
              </button>
              <button onClick={skipToQuestion}
                className="flex-1 py-3 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] uppercase tracking-wider transition active:scale-[0.98] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ fontSize: "clamp(18px, 1.6vw, 20px)", background: "#FEF5E7", color: "#D68910", border: "2px solid #D68910" }}>
                IR A PREGUNTA →
              </button>
            </div>
          )}

          {phase === "question" && !qRevealed && (
            <button onClick={() => { setQRunning(false); setQRevealed(true); setStep((s) => s + 1); setBubble("¡Veamos la respuesta!"); }}
              className="w-full py-3 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] uppercase tracking-wider transition active:scale-[0.98] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ fontSize: "clamp(20px, 2vw, 24px)", background: "#FEF5E7", color: "#D68910", border: "2px solid #D68910" }}>
              MOSTRAR RESPUESTA
            </button>
          )}

          {phase === "question" && qRevealed && !qAnswered && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-60" style={{ fontSize: "clamp(18px, 1.4vw, 20px)" }}>¿QUIÉN ACIERTA?</span>
              {Array.from({ length: numTeams }, (_, i) => (
                <button key={i} onClick={() => awardQuestion(i)}
                  className="px-4 py-2 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] text-white transition active:scale-95 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ fontSize: "clamp(18px, 1.6vw, 20px)", background: TEAMS[i].color }}>
                  {TEAMS[i].name}
                </button>
              ))}
              <button onClick={() => awardQuestion(null)}
                className="px-4 py-2 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] text-[var(--color-pf-ink)] opacity-60 transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ fontSize: "clamp(18px, 1.6vw, 20px)", border: "2px solid rgba(0,0,0,0.18)" }}>
                NADIE
              </button>
            </div>
          )}

          {phase === "question" && qAnswered && (
            <button onClick={nextRound}
              className="w-full py-3 min-h-[44px] rounded-full font-[family-name:var(--font-pf-display)] text-white uppercase tracking-wider transition active:scale-[0.98] hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-pf-spark)]/40"
              style={{ fontSize: "clamp(20px, 2vw, 24px)", background: "var(--color-pf-spark)", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}>
              {roundIdx + 1 >= totalRounds ? "VER RESULTADOS" : "SIGUIENTE RONDA →"}
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.1)} }
        @keyframes bubbleIn { 0%{opacity:0;transform:scale(0.9)} 100%{opacity:1;transform:scale(1)} }
        @keyframes btnPulse { 0%,100%{box-shadow:0 0 0 0 rgba(255,140,50,0.4)} 50%{box-shadow:0 0 0 8px rgba(255,140,50,0)} }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
