"use client";

import { useEffect, useState } from "react";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";

type Item = {
  before: string;
  after: string;
  options: string[];
  correct: number;
  hint: string;
};

const ITEMS: Item[] = [
  {
    before: "¿Estudias música en ",
    after: " instituto?",
    options: ["tu", "su", "mi"],
    correct: 0,
    hint: "Pregunta a TI (tú → tu)",
  },
  {
    before: "Yo vivo con ",
    after: " familia.",
    options: ["mis", "mi", "su"],
    correct: 1,
    hint: "Yo → mi · familia es una",
  },
  {
    before: "Ellos tienen ",
    after: " ordenador en la habitación.",
    options: ["sus", "su", "mi"],
    correct: 1,
    hint: "Ellos, pero ordenador es uno",
  },
  {
    before: "Graciela vive con ",
    after: " tíos.",
    options: ["su", "sus", "mis"],
    correct: 1,
    hint: "Graciela, pero tíos son varios",
  },
  {
    before: "Yo tengo ",
    after: " libros en la cartera.",
    options: ["mi", "mis", "sus"],
    correct: 1,
    hint: "Yo → mi/mis · libros son varios",
  },
  {
    before: "Javier tiene ",
    after: " bicicleta en la calle.",
    options: ["sus", "su", "tu"],
    correct: 1,
    hint: "Javier, bicicleta es una",
  },
  {
    before: "Mi hermano y yo tenemos dos mochilas iguales. ",
    after: " mochilas son rojas.",
    options: ["Nuestro", "Nuestras", "Sus"],
    correct: 1,
    hint: "Nosotros + mochilas (femenino plural)",
  },
  {
    before: "La casa de mis tíos es muy grande y ",
    after: " jardín es muy bonito.",
    options: ["sus", "su", "nuestro"],
    correct: 1,
    hint: "De mis tíos, pero jardín es uno",
  },
  {
    before: "Mis compañeros y yo estamos muy contentos. ",
    after: " profesor de matemáticas es muy simpático.",
    options: ["Nuestra", "Nuestro", "Su"],
    correct: 1,
    hint: "Nosotros + profesor (masculino singular)",
  },
];

type Phase = "setup" | "playing" | "result";
type Feedback = "none" | "correct" | "wrong";

const COLORS = [
  { name: "Equipo 1", bg: "var(--color-pf-star)", soft: "var(--color-pf-star-soft)" },
  { name: "Equipo 2", bg: "var(--color-pf-flower)", soft: "var(--color-pf-flower-soft)" },
  { name: "Equipo 3", bg: "var(--color-pf-pill)", soft: "var(--color-pf-pill-soft)" },
  { name: "Equipo 4", bg: "var(--color-pf-moon)", soft: "var(--color-pf-moon-soft)" },
];

export function SlideDesafio() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [numTeams, setNumTeams] = useState(2);
  const [timerSeconds, setTimerSeconds] = useState(8);
  const [scores, setScores] = useState<number[]>([0, 0, 0, 0]);
  const [activeTeam, setActiveTeam] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(8);
  const [feedback, setFeedback] = useState<Feedback>("none");
  const [wrongOnce, setWrongOnce] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const item = ITEMS[itemIndex];

  useEffect(() => {
    if (phase !== "playing") return;
    if (feedback !== "none") return;
    if (timeLeft <= 0) {
      handleWrong(true);
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, phase, feedback]);

  const startGame = () => {
    setScores(Array(4).fill(0));
    setActiveTeam(0);
    setItemIndex(0);
    setTimeLeft(timerSeconds);
    setFeedback("none");
    setWrongOnce(false);
    setShowHint(false);
    setPhase("playing");
  };

  const nextItem = () => {
    if (itemIndex >= ITEMS.length - 1) {
      setPhase("result");
      return;
    }
    setItemIndex((i) => i + 1);
    setActiveTeam((t) => (t + 1) % numTeams);
    setTimeLeft(timerSeconds);
    setFeedback("none");
    setWrongOnce(false);
    setShowHint(false);
  };

  const handleCorrect = () => {
    setFeedback("correct");
    const newScores = [...scores];
    newScores[activeTeam] += 1;
    setScores(newScores);
    setTimeout(() => nextItem(), 900);
  };

  const handleWrong = (fromTimer = false) => {
    if (!wrongOnce && !fromTimer) {
      setFeedback("wrong");
      setShowHint(true);
      setTimeout(() => {
        setFeedback("none");
        setWrongOnce(true);
      }, 900);
      return;
    }
    setFeedback("wrong");
    setTimeout(() => nextItem(), 900);
  };

  const chooseOption = (i: number) => {
    if (feedback !== "none") return;
    if (i === item.correct) handleCorrect();
    else handleWrong(false);
  };

  // ——— SETUP ———
  if (phase === "setup") {
    return (
      <div className="w-full h-full max-w-[1200px] mx-auto grid grid-cols-[1.2fr_1fr] gap-8 items-stretch overflow-hidden">
        <div className="flex flex-col min-h-0 overflow-hidden justify-center">
          <div className="flex-shrink-0 mb-1 flex items-center gap-3">
            <span className="font-[family-name:var(--font-pf-display)] text-lg text-[var(--color-pf-ink)]">
              CHIPI
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "var(--color-pf-spark-soft)",
                color: "#8A2F10",
              }}
            >
              Desafío
            </span>
          </div>

          <h1 className="flex-shrink-0 font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(40px,5.5vw,96px)] text-[var(--color-pf-ink)] mb-4">
            ¡A jugar!
          </h1>

          <div className="flex-shrink-0 bg-white rounded-[28px] px-8 py-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] space-y-5">
            <div>
              <p className="text-lg font-semibold text-[var(--color-pf-ink)] mb-3">
                ¿Cuántos equipos?
              </p>
              <div className="flex gap-3">
                {[2, 3, 4].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNumTeams(n)}
                    className={`w-16 h-16 rounded-2xl font-[family-name:var(--font-pf-display)] text-3xl transition ${
                      numTeams === n
                        ? "bg-[var(--color-pf-ink)] text-white"
                        : "bg-[var(--color-pf-spark-soft)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-spark)]/30"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold text-[var(--color-pf-ink)] mb-3">
                ¿Cuánto tiempo por frase?
              </p>
              <div className="flex gap-3">
                {[5, 8, 10].map((s) => (
                  <button
                    key={s}
                    onClick={() => setTimerSeconds(s)}
                    className={`px-6 h-16 rounded-2xl font-[family-name:var(--font-pf-display)] text-2xl transition ${
                      timerSeconds === s
                        ? "bg-[var(--color-pf-ink)] text-white"
                        : "bg-[var(--color-pf-spark-soft)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-spark)]/30"
                    }`}
                  >
                    {s}s
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startGame}
              className="w-full py-5 rounded-full bg-[var(--color-pf-spark)] text-white font-[family-name:var(--font-pf-display)] text-3xl hover:opacity-90 transition"
            >
              ¡EMPEZAR!
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center min-h-0 overflow-hidden">
          <ChipiSpark className="w-full max-w-[260px] h-auto" />
        </div>
      </div>
    );
  }

  // ——— RESULT ———
  if (phase === "result") {
    const maxScore = Math.max(...scores.slice(0, numTeams));
    const winners = scores
      .slice(0, numTeams)
      .map((s, i) => (s === maxScore ? i : -1))
      .filter((i) => i >= 0);
    return (
      <div className="w-full h-full max-w-[1200px] mx-auto grid grid-cols-[1.2fr_1fr] gap-8 items-stretch overflow-hidden">
        <div className="flex flex-col min-h-0 overflow-hidden justify-center">
          <h1 className="flex-shrink-0 font-[family-name:var(--font-pf-display)] uppercase leading-[0.88] tracking-tight text-[clamp(40px,5.5vw,96px)] text-[var(--color-pf-ink)] mb-4">
            ¡Fin!
          </h1>
          <div className="flex-1 min-h-0 bg-white rounded-[28px] px-8 py-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] overflow-auto">
            <p className="text-2xl font-semibold text-[var(--color-pf-ink)] mb-6">
              Resultado final
            </p>
            <div className="space-y-3 mb-8">
              {scores.slice(0, numTeams).map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-4 rounded-2xl"
                  style={{ background: COLORS[i].soft }}
                >
                  <span className="font-[family-name:var(--font-pf-display)] text-2xl">
                    {COLORS[i].name}
                  </span>
                  <span className="font-[family-name:var(--font-pf-display)] text-4xl">
                    {s}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-[family-name:var(--font-pf-display)] text-3xl text-[var(--color-pf-ink)] mb-6">
              {winners.length === 1
                ? `🏆 Gana el ${COLORS[winners[0]].name}`
                : "🏆 ¡Empate!"}
            </p>
            <button
              onClick={() => setPhase("setup")}
              className="px-8 py-3 rounded-full bg-[var(--color-pf-ink)] text-white font-semibold hover:opacity-90 transition"
            >
              ↺ Jugar de nuevo
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center min-h-0 overflow-hidden">
          <ChipiSpark className="w-full max-w-[260px] h-auto" />
        </div>
      </div>
    );
  }

  // ——— PLAYING ———
  const activeColor = COLORS[activeTeam];
  return (
    <div className="w-full h-full max-w-[1400px] mx-auto flex flex-col min-h-0 overflow-hidden">
      <div className="flex-shrink-0 flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-pf-display)] text-lg">
            CHIPI
          </span>
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: "var(--color-pf-spark-soft)",
              color: "#8A2F10",
            }}
          >
            Desafío
          </span>
        </div>
        <div className="flex items-center gap-3">
          {scores.slice(0, numTeams).map((s, i) => (
            <div
              key={i}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-pf-display)] text-lg ${
                i === activeTeam ? "ring-4 ring-[var(--color-pf-ink)]" : ""
              }`}
              style={{ background: COLORS[i].soft }}
            >
              {COLORS[i].name}: {s}
            </div>
          ))}
        </div>
        <div className="font-[family-name:var(--font-pf-display)] text-3xl text-[var(--color-pf-ink)]">
          {itemIndex + 1}/{ITEMS.length}
        </div>
      </div>

      <div
        className="flex-1 min-h-0 flex flex-col rounded-[28px] px-8 py-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] transition-colors duration-200 overflow-hidden"
        style={{
          background:
            feedback === "correct"
              ? "var(--color-pf-pill-soft)"
              : feedback === "wrong"
              ? "var(--color-pf-spark-soft)"
              : "#ffffff",
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div
            className="px-5 py-2 rounded-full font-[family-name:var(--font-pf-display)] text-xl text-white"
            style={{ background: activeColor.bg }}
          >
            Turno: {activeColor.name}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-40 h-3 bg-black/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--color-pf-ink)] transition-[width] duration-1000 ease-linear"
                style={{ width: `${(timeLeft / timerSeconds) * 100}%` }}
              />
            </div>
            <span className="font-[family-name:var(--font-pf-display)] text-3xl w-12 text-right">
              {timeLeft}s
            </span>
          </div>
        </div>

        <p className="flex-1 min-h-0 flex items-center font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.6vw,40px)] leading-[1.15] text-[var(--color-pf-ink)] mb-4">
          {item.before}
          <span
            className="inline-block px-4 py-1 mx-2 rounded-2xl"
            style={{
              background: "rgba(10,10,10,0.08)",
              color: "var(--color-pf-ink)",
              minWidth: 120,
              textAlign: "center",
            }}
          >
            ___
          </span>
          {item.after}
        </p>

        <div className="flex-shrink-0 grid grid-cols-3 gap-3">
          {item.options.map((opt, i) => {
            const isCorrect = feedback === "correct" && i === item.correct;
            const isWrong = feedback === "wrong" && i !== item.correct;
            return (
              <button
                key={i}
                onClick={() => chooseOption(i)}
                disabled={feedback !== "none"}
                className={`px-6 py-4 rounded-[20px] font-[family-name:var(--font-pf-display)] text-[clamp(22px,2.4vw,36px)] transition ${
                  isCorrect
                    ? "bg-[var(--color-pf-pill)] text-white"
                    : isWrong
                    ? "bg-white text-[var(--color-pf-ink)] opacity-40"
                    : "bg-[var(--color-pf-star-soft)] text-[var(--color-pf-ink)] hover:bg-[var(--color-pf-star)]"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {showHint && feedback === "none" && (
          <div
            className="mt-6 bg-[var(--color-pf-moon-soft)] rounded-2xl px-6 py-4 text-[var(--color-pf-ink)] text-lg font-semibold"
            style={{ animation: "hintIn 300ms ease-out" }}
          >
            💡 Pista: {item.hint}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes hintIn {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
