"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";

const P = ({ children }: { children: ReactNode }) => (
  <span className="italic" style={{ color: "#ff6b4a" }}>{children}</span>
);

/* ——— Types & Data ——— */
type Round = { before: string; after: string; options: [string, string, string]; correct: number; answerColor: string };
type Phase = "setup" | "question" | "marking" | "result";

const ROUNDS: Round[] = [
  { before: "Hoy hablamos de la familia. ¿Cómo se llama ", after: " padre?", options: ["tu", "su", "mi"], correct: 0, answerColor: "#7C5CFF" },
  { before: "Mira la familia de Javier. ", after: " madre se llama Catalina.", options: ["mis", "su", "tus"], correct: 1, answerColor: "#E91FCE" },
  { before: "¿Tienes hermanos? — Sí, ", after: " hermanos se llaman Ana y Carlos.", options: ["mi", "mis", "sus"], correct: 1, answerColor: "#7C5CFF" },
  { before: "¿Os gustan las clases? — ¡Sí! ", after: " profesoras son muy simpáticas.", options: ["Nuestros", "Nuestras", "Vuestras"], correct: 1, answerColor: "#E91FCE" },
  { before: "Chicos, abrid ", after: " libros por la página 36.", options: ["nuestros", "sus", "vuestros"], correct: 2, answerColor: "#7C5CFF" },
  { before: "David y Javier van al colegio. ", after: " mochilas son nuevas.", options: ["nuestras", "sus", "vuestras"], correct: 1, answerColor: "#E91FCE" },
  { before: "¿En qué clase estáis? — ", after: " clase es la 2B.", options: ["nuestra", "vuestra", "su"], correct: 0, answerColor: "#E91FCE" },
];

const TEAMS = [
  { name: "P1", full: "Equipo 1", bg: "#F5C842", neon: "#ffe066" },
  { name: "P2", full: "Equipo 2", bg: "#ff4ecd", neon: "#ff79e0" },
  { name: "P3", full: "Equipo 3", bg: "#4ade80", neon: "#6ee7a0" },
  { name: "P4", full: "Equipo 4", bg: "#818cf8", neon: "#a5b4fc" },
];

const OPTION_LABELS = ["A", "B", "C"];

function questionBubble(idx: number): ReactNode {
  if (idx === 0) return <>¡Levantad dedos!<br/>A = 1 dedo, B = 2 dedos, C = 3 dedos</>;
  if (idx === ROUNDS.length - 1) return "¡Última ronda! ¡A por ella!";
  return ["¡Siguiente! ¿Preparados?", "¡Rápido, rápido!", "¡A ver esta!", "¡Atentos!"][(idx - 1) % 4];
}
function reactionBubble(cc: number, total: number, streak: number, ans: string): ReactNode {
  if (streak >= 3) return <>¡¡Racha x3!! ¡Imparables!</>;
  if (cc === total) return <>¡Todos acertáis! <P>{ans}</P>, clarísimo.</>;
  if (cc === 0) return <>Era <P>{ans}</P>. ¡La siguiente la clavamos!</>;
  if (streak === 2) return <>¡Racha x2! <P>{ans}</P>, ¡bien!</>;
  return <>¡Bien jugado! Era <P>{ans}</P>.</>;
}

/* ——— Star pixel decorations ——— */
function PixelStar({ x, y, delay }: { x: string; y: string; delay: string }) {
  return (
    <div className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
      style={{ left: x, top: y, background: "#ffd4a0", boxShadow: "0 0 4px #ffd4a0, 0 0 8px rgba(255,180,100,0.4)", animation: `starTwinkle 2s ease-in-out ${delay} infinite` }} />
  );
}

/* ================================================================
   DIAPOSITIVA CHIPI — DESAFÍO CAJA FUERTE
   Fondo naranja oscuro único. Sin CRT. Contenido directo.
   Texto con glow neón. Botones A/B/C arcade.
   ================================================================ */
export function SlideDesafioB() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [numTeams, setNumTeams] = useState(2);
  const [timerSec, setTimerSec] = useState(8);
  const [roundIdx, setRoundIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(8);
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [streaks, setStreaks] = useState([0, 0, 0, 0]);
  const [checked, setChecked] = useState([false, false, false, false]);
  const [fastest, setFastest] = useState<number | null>(null);
  const [done, setDone] = useState(0);
  const [bubble, setBubble] = useState<ReactNode>("¿Quién abrirá la caja?");
  const [busy, setBusy] = useState(false);
  const round = ROUNDS[roundIdx];

  useEffect(() => {
    if (phase !== "question") return;
    if (timeLeft <= 0) { setBubble("¡Tiempo! Veamos..."); setPhase("marking"); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, phase]);

  const start = () => { setScores([0,0,0,0]); setStreaks([0,0,0,0]); setRoundIdx(0); setTimeLeft(timerSec); setChecked([false,false,false,false]); setFastest(null); setDone(0); setBubble(questionBubble(0)); setBusy(false); setPhase("question"); };
  const reveal = () => { setPhase("marking"); setBubble(<>¿Quién ha dicho <P>{round.options[round.correct]}</P>?</>); };
  const toggleTeam = (i: number) => { if (busy) return; setChecked((p) => { const n=[...p]; n[i]=!n[i]; return n; }); };
  const toggleSpeed = (i: number) => { if (busy) return; setFastest((p) => (p===i?null:i)); };
  const confirmRound = () => {
    if (busy) return; setBusy(true);
    const ns=[...scores]; const nk=[...streaks]; let cc=0;
    for (let i=0;i<numTeams;i++) { if (checked[i]) { cc++; nk[i]++; let pts=1; if(nk[i]>=3) pts=3; else if(nk[i]===2) pts=2; if(fastest===i) pts+=1; ns[i]+=pts; } else { nk[i]=0; } }
    setScores(ns); setStreaks(nk); setDone(d=>d+1);
    setBubble(reactionBubble(cc,numTeams,Math.max(...nk.slice(0,numTeams)),round.options[round.correct]));
    const isLast=roundIdx>=ROUNDS.length-1;
    setTimeout(()=>{ setBusy(false); if(isLast){setBubble("¡Fin del juego! ¿Quién gana?");setPhase("result");} else{const next=roundIdx+1;setRoundIdx(next);setTimeLeft(timerSec);setChecked([false,false,false,false]);setFastest(null);setBubble(questionBubble(next));setPhase("question");} },1800);
  };

  /* ====== SETUP ====== */
  if (phase === "setup") {
    return (
      <div className="w-full h-full relative overflow-hidden rounded-[20px]">
        <PixelStar x="5%" y="8%" delay="0s" /><PixelStar x="92%" y="6%" delay="0.6s" />
        <PixelStar x="10%" y="85%" delay="1.2s" /><PixelStar x="88%" y="78%" delay="0.3s" />
        <PixelStar x="45%" y="3%" delay="0.9s" /><PixelStar x="75%" y="92%" delay="1.5s" />

        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="flex gap-4 md:gap-12 items-center max-w-[1200px] w-full px-8">
            {/* Left — título y config */}
            <div className="flex-1 flex flex-col items-center gap-5">
              <p className="font-[family-name:var(--font-pf-display)] text-xl tracking-[0.3em] uppercase"
                style={{ color: "#ff6b4a", textShadow: "0 0 10px rgba(255,107,74,0.5)", animation: "blink 1.2s step-end infinite" }}>
                ¡A JUGAR!
              </p>

              <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.82] tracking-tight text-center text-[clamp(72px,12vw,140px)]"
                style={{ color: "#fff", textShadow: "0 0 24px rgba(255,107,74,0.6), 0 0 70px rgba(255,107,74,0.3)" }}>
                CAJA<br/>FUERTE
              </h1>

              {/* Round progress dots */}
              <div className="flex items-center gap-4">
                {ROUNDS.map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded-full border-2 transition-all"
                    style={{ borderColor: "#ff6b4a", background: "transparent", boxShadow: "0 0 8px rgba(255,107,74,0.4)", animation: `dotPop 400ms ease-out ${i * 100}ms both` }} />
                ))}
              </div>

              {/* Config */}
              <div className="flex items-center gap-6 mt-2 rounded-2xl px-8 py-5"
                style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-pf-display)] text-[17px] tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>EQUIPOS</span>
                  {[2,3,4].map(n=>(
                    <button key={n} onClick={()=>setNumTeams(n)}
                      className="w-13 h-13 rounded-full font-[family-name:var(--font-pf-display)] text-2xl transition active:scale-90"
                      style={{
                        width: 52, height: 52,
                        background: numTeams===n ? "#ff6b4a" : "transparent",
                        color: numTeams===n ? "#fff" : "rgba(255,255,255,0.5)",
                        border: numTeams===n ? "2px solid #ff8a6a" : "2px solid rgba(255,255,255,0.15)",
                        boxShadow: numTeams===n ? "0 0 14px rgba(255,107,74,0.5), 0 4px 0 #cc4a2a" : "none",
                      }}>{n}</button>
                  ))}
                </div>
                <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.1)" }} />
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-pf-display)] text-[17px] tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>TIEMPO</span>
                  {[5,8,10].map(s=>(
                    <button key={s} onClick={()=>setTimerSec(s)}
                      className="px-4 rounded-full font-[family-name:var(--font-pf-display)] text-xl transition active:scale-90"
                      style={{
                        height: 52,
                        background: timerSec===s ? "#ff6b4a" : "transparent",
                        color: timerSec===s ? "#fff" : "rgba(255,255,255,0.5)",
                        border: timerSec===s ? "2px solid #ff8a6a" : "2px solid rgba(255,255,255,0.15)",
                        boxShadow: timerSec===s ? "0 0 14px rgba(255,107,74,0.5), 0 4px 0 #cc4a2a" : "none",
                      }}>{s}s</button>
                  ))}
                </div>
              </div>

              <button onClick={start}
                className="mt-2 px-20 py-5 rounded-full font-[family-name:var(--font-pf-display)] text-4xl text-white uppercase tracking-wider transition active:scale-95"
                style={{
                  background: "linear-gradient(180deg, #ff6b4a 0%, #e05530 100%)",
                  boxShadow: "0 0 30px rgba(255,107,74,0.5), 0 6px 0 #b03a1a, 0 8px 20px rgba(0,0,0,0.4)",
                  textShadow: "0 0 10px rgba(255,255,255,0.5)",
                  animation: "neonPulse 2s ease-in-out infinite",
                }}>
                ¡JUGAR!
              </button>
            </div>

            {/* Right — Chipi */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="rounded-xl px-5 py-3 max-w-[200px]"
                style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)", animation: "fadeUp 500ms ease-out 800ms both" }}>
                <p className="font-[family-name:var(--font-pf-display)] text-[clamp(15px,1.5vw,18px)] text-center leading-snug text-white/80">¿Quién abrirá la caja?</p>
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
          @keyframes dotPop { 0%{opacity:0;transform:scale(0)} 70%{transform:scale(1.3)} 100%{opacity:1;transform:scale(1)} }
          @keyframes starTwinkle { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }
        `}</style>
      </div>
    );
  }

  /* ====== RESULT ====== */
  if (phase === "result") {
    const ranking = Array.from({length:numTeams},(_,i)=>({i,s:scores[i]})).sort((a,b)=>b.s-a.s);
    const winners = ranking.filter(r=>r.s===ranking[0].s);

    return (
      <div className="w-full h-full relative overflow-hidden rounded-[20px]">
        <PixelStar x="5%" y="10%" delay="0s" /><PixelStar x="92%" y="15%" delay="0.4s" />
        <PixelStar x="12%" y="80%" delay="0.8s" /><PixelStar x="88%" y="75%" delay="1.2s" />

        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="flex gap-4 md:gap-12 items-center max-w-[1200px] w-full px-8">
            {/* Left — puntuaciones */}
            <div className="flex-1 flex flex-col items-center gap-4">
              <h1 className="font-[family-name:var(--font-pf-display)] uppercase leading-[0.85] tracking-tight text-center text-[clamp(60px,10vw,120px)]"
                style={{ color: "#fff", textShadow: "0 0 24px rgba(255,107,74,0.6), 0 0 70px rgba(255,107,74,0.3)" }}>
                ¡FIN DEL<br/>JUEGO!
              </h1>

              <div className="flex items-center gap-4 mb-2">
                {ROUNDS.map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded-full transition-all"
                    style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: `dotPop 300ms ease-out ${i * 60}ms both` }} />
                ))}
              </div>

              <div className="w-full max-w-[500px] space-y-2.5">
                <p className="font-[family-name:var(--font-pf-display)] text-lg tracking-[0.3em] uppercase text-center mb-2"
                  style={{ color: "#ff6b4a", textShadow: "0 0 8px rgba(255,107,74,0.5)" }}>PUNTUACIONES</p>
                {ranking.map((r, pos) => (
                  <div key={r.i} className="flex items-center justify-between px-6 py-4 rounded-xl"
                    style={{ background: pos === 0 ? "rgba(255,107,74,0.12)" : "rgba(0,0,0,0.15)", border: pos === 0 ? "1px solid rgba(255,107,74,0.3)" : "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-3">
                      <span className="font-[family-name:var(--font-pf-display)] text-3xl w-10" style={{ color: pos === 0 ? "#ff6b4a" : "rgba(255,255,255,0.4)" }}>{pos === 0 ? "🏆" : `${pos + 1}.`}</span>
                      <span className="font-[family-name:var(--font-pf-display)] text-2xl" style={{ color: TEAMS[r.i].neon, textShadow: `0 0 8px ${TEAMS[r.i].bg}` }}>{TEAMS[r.i].full}</span>
                    </div>
                    <span className="font-[family-name:var(--font-pf-display)] text-5xl text-white" style={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}>{r.s}</span>
                  </div>
                ))}
              </div>

              <p className="font-[family-name:var(--font-pf-display)] text-3xl text-center mt-2"
                style={{ color: "#fff", textShadow: "0 0 12px rgba(255,107,74,0.5)" }}>
                {winners.length === 1 ? `🏆 ¡Gana ${TEAMS[winners[0].i].full}!` : "🏆 ¡Empate!"}
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

            {/* Right — Chipi */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="rounded-xl px-5 py-3 max-w-[200px]"
                style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="font-[family-name:var(--font-pf-display)] text-[clamp(15px,1.5vw,18px)] text-center leading-snug text-white/80">{bubble}</p>
              </div>
              <div style={{ filter: "drop-shadow(0 0 3px rgba(255,220,160,0.9)) drop-shadow(0 0 6px rgba(255,200,130,0.6))" }}>
                <ChipiSpark className="w-[min(24vw,30vh)] h-auto" />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes dotPop { 0%{opacity:0;transform:scale(0)} 70%{transform:scale(1.3)} 100%{opacity:1;transform:scale(1)} }
          @keyframes starTwinkle { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }
        `}</style>
      </div>
    );
  }

  /* ====== QUESTION / MARKING ====== */
  const pct = (timeLeft / timerSec) * 100;
  const timerColor = pct > 60 ? "#4ade80" : pct > 30 ? "#ffe066" : "#ff6b4a";

  return (
    <div className="w-full h-full relative overflow-hidden rounded-[20px]">
      <PixelStar x="3%" y="8%" delay="0s" /><PixelStar x="97%" y="12%" delay="0.7s" />

      <div className="relative z-10 w-full h-full flex gap-4 p-4">
        {/* Main content */}
        <div className="flex-1 min-w-0 flex flex-col gap-2 rounded-2xl p-5"
          style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Top bar — RONDA + scores */}
          <div className="flex-shrink-0 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-pf-display)] text-base tracking-[0.2em] uppercase"
                style={{ color: "#ff6b4a", textShadow: "0 0 8px rgba(255,107,74,0.5)" }}>
                RONDA
              </span>
              <span className="font-[family-name:var(--font-pf-display)] text-3xl text-white"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.3)" }}>
                {roundIdx + 1}<span className="text-lg text-white/30">/{ROUNDS.length}</span>
              </span>
              <div className="flex items-center gap-1.5 ml-1">
                {ROUNDS.map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full transition-all duration-300"
                    style={{
                      background: i < done ? "#4ade80" : i === roundIdx ? "#ff6b4a" : "rgba(255,255,255,0.15)",
                      boxShadow: i < done ? "0 0 6px #4ade80" : i === roundIdx ? "0 0 6px #ff6b4a" : "none",
                    }} />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {Array.from({ length: numTeams }, (_, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                  style={{ background: "rgba(0,0,0,0.2)", border: `1px solid ${TEAMS[i].bg}30` }}>
                  <span className="font-[family-name:var(--font-pf-display)] text-sm font-bold"
                    style={{ color: TEAMS[i].neon }}>{TEAMS[i].name}</span>
                  <span className="font-[family-name:var(--font-pf-display)] text-xl font-bold text-white">{scores[i]}</span>
                  {streaks[i] >= 2 && (
                    <span className="font-[family-name:var(--font-pf-display)] text-xs font-bold"
                      style={{ color: "#ff6b4a" }}>x{Math.min(streaks[i], 3)}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Timer */}
          <div className="flex-shrink-0 flex items-center justify-center py-1">
            {phase === "question" ? (
              <div className="flex items-center gap-4">
                <div className="w-32 md:w-48 h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div className="h-full rounded-full transition-[width] duration-1000 ease-linear"
                    style={{ width: `${pct}%`, background: timerColor, boxShadow: `0 0 10px ${timerColor}` }} />
                </div>
                <span className="font-[family-name:var(--font-pf-display)] text-5xl"
                  style={{ color: timerColor, textShadow: `0 0 16px ${timerColor}`, animation: timeLeft <= 3 ? "countdownPulse 0.5s ease-in-out infinite" : "none" }}>
                  {timeLeft}
                </span>
              </div>
            ) : (
              <span className="font-[family-name:var(--font-pf-display)] text-xl tracking-[0.3em] uppercase"
                style={{ color: "#4ade80", textShadow: "0 0 10px rgba(74,222,128,0.5)", animation: "blink 0.8s step-end 3" }}>
                ★ RESPUESTA ★
              </span>
            )}
          </div>

          {/* Sentence */}
          <div className="flex items-center justify-center flex-1 min-h-0 px-4">
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(34px,4.5vw,60px)] leading-[1.2] text-center text-white"
              style={{ textShadow: "0 0 12px rgba(255,255,255,0.15)" }}>
              {round.before}
              <span className="inline-block px-5 py-1 mx-2 rounded-xl transition-all duration-300"
                style={{
                  background: phase === "marking" ? round.answerColor : "rgba(255,255,255,0.08)",
                  color: phase === "marking" ? "#fff" : "rgba(255,255,255,0.4)",
                  minWidth: 110, textAlign: "center",
                  border: phase === "marking" ? `2px solid ${round.answerColor}` : "2px solid rgba(255,255,255,0.15)",
                  boxShadow: phase === "marking" ? `0 0 24px ${round.answerColor}` : "none",
                  textShadow: phase === "marking" ? `0 0 10px ${round.answerColor}` : "none",
                  animation: phase === "question" ? "slotBlink 1s step-end infinite" : "none",
                }}>
                {phase === "marking" ? round.options[round.correct] : "???"}
              </span>
              {round.after}
            </p>
          </div>

          {/* Options A/B/C */}
          <div className="flex-shrink-0 flex justify-center gap-4 md:gap-8 mb-2">
            {round.options.map((opt, i) => {
              const isCorrect = phase === "marking" && i === round.correct;
              const isFaded = phase === "marking" && i !== round.correct;
              return (
                <div key={i} className="flex flex-col items-center gap-1.5 transition-all duration-300"
                  style={{ opacity: isFaded ? 0.2 : 1, transform: isCorrect ? "scale(1.1)" : "scale(1)" }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center font-[family-name:var(--font-pf-display)] text-3xl font-bold transition-all duration-300"
                    style={{
                      background: isCorrect
                        ? `linear-gradient(180deg, ${round.answerColor} 0%, ${round.answerColor}cc 100%)`
                        : "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
                      color: isCorrect ? "#fff" : "rgba(255,255,255,0.7)",
                      border: isCorrect ? `3px solid ${round.answerColor}` : "3px solid rgba(255,255,255,0.15)",
                      boxShadow: isCorrect
                        ? `0 0 24px ${round.answerColor}, 0 4px 0 ${round.answerColor}80`
                        : isFaded ? "none" : "0 4px 0 rgba(0,0,0,0.3)",
                    }}>
                    {OPTION_LABELS[i]}
                  </div>
                  <span className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.2vw,18px)] transition-all duration-300"
                    style={{ color: isFaded ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.5)" }}>
                    {i === 0 ? "☝️ 1 dedo" : i === 1 ? "✌️ 2 dedos" : "🤟 3 dedos"}
                  </span>
                  <span className="font-[family-name:var(--font-pf-display)] text-[clamp(28px,3vw,44px)] transition-all duration-300"
                    style={{
                      color: isCorrect ? "#fff" : isFaded ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.9)",
                      textShadow: isCorrect ? `0 0 10px ${round.answerColor}` : "none",
                    }}>
                    {opt}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex-shrink-0">
            {phase === "question" && (
              <button onClick={reveal}
                className="w-full py-3.5 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(18px,2vw,26px)] text-white uppercase tracking-wider transition active:scale-[0.98]"
                style={{
                  background: "linear-gradient(180deg, #ff6b4a 0%, #e05530 100%)",
                  boxShadow: "0 0 24px rgba(255,107,74,0.4), 0 4px 0 #b03a1a",
                  textShadow: "0 0 8px rgba(255,255,255,0.4)",
                }}>
                MOSTRAR RESPUESTA
              </button>
            )}
            {phase === "marking" && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-[family-name:var(--font-pf-display)] text-sm tracking-wider uppercase text-white/50">¿ACIERTO?</span>
                  {Array.from({ length: numTeams }, (_, i) => (
                    <button key={i} onClick={() => toggleTeam(i)} disabled={busy}
                      className="px-4 py-2 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(16px,1.5vw,20px)] transition active:scale-95 disabled:opacity-40"
                      style={{
                        background: checked[i] ? TEAMS[i].bg : "rgba(255,255,255,0.06)",
                        color: checked[i] ? "#fff" : TEAMS[i].neon,
                        border: `2px solid ${checked[i] ? TEAMS[i].bg : TEAMS[i].bg + "40"}`,
                        boxShadow: checked[i] ? `0 0 14px ${TEAMS[i].bg}` : "none",
                      }}>
                      {checked[i] ? "✓ " : ""}{TEAMS[i].name}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-[family-name:var(--font-pf-display)] text-sm tracking-wider uppercase" style={{ color: "#ffe066" }}>¿MÁS RÁPIDO? (+1)</span>
                  {Array.from({ length: numTeams }, (_, i) => (
                    <button key={i} onClick={() => toggleSpeed(i)} disabled={busy}
                      className="px-3 py-1.5 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(15px,1.3vw,18px)] transition active:scale-95 disabled:opacity-40"
                      style={{
                        background: fastest === i ? "#ffe066" : "rgba(255,255,255,0.04)",
                        color: fastest === i ? "#1e0f05" : "rgba(255,255,255,0.35)",
                        border: fastest === i ? "2px solid #ffe066" : "2px solid rgba(255,224,102,0.15)",
                        boxShadow: fastest === i ? "0 0 12px rgba(255,224,102,0.5)" : "none",
                      }}>
                      {fastest === i ? "⚡" : ""}{TEAMS[i].name}
                    </button>
                  ))}
                </div>
                <button onClick={confirmRound} disabled={busy}
                  className="w-full py-3 rounded-full font-[family-name:var(--font-pf-display)] text-[clamp(18px,2vw,26px)] text-white uppercase tracking-wider transition active:scale-[0.98] disabled:opacity-50"
                  style={{
                    background: busy ? "linear-gradient(180deg, #4ade80 0%, #22c55e 100%)" : "linear-gradient(180deg, #ff6b4a 0%, #e05530 100%)",
                    boxShadow: busy ? "0 0 16px rgba(74,222,128,0.4), 0 4px 0 #16a34a" : "0 0 20px rgba(255,107,74,0.4), 0 4px 0 #b03a1a",
                    textShadow: "0 0 8px rgba(255,255,255,0.3)",
                  }}>
                  {busy ? "✓ HECHO" : "SIGUIENTE →"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right — Chipi */}
        <div className="w-[120px] md:w-[160px] flex-shrink-0 flex flex-col items-center justify-end gap-3 pb-2">
          <div className="rounded-xl px-3.5 py-2.5 max-w-[160px]" key={`${roundIdx}-${phase}-${busy}`}
            style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.08)", animation: "fadeUp 400ms ease-out" }}>
            <p className="font-[family-name:var(--font-pf-display)] text-[clamp(15px,1.5vw,18px)] text-center leading-snug text-white/80">{bubble}</p>
          </div>
          <div style={{ filter: "drop-shadow(0 0 3px rgba(255,220,160,0.9)) drop-shadow(0 0 6px rgba(255,200,130,0.6))" }}>
            <ChipiSpark className="w-[110px] h-auto" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp { 0%{opacity:0;transform:translateY(8px)} 100%{opacity:1;transform:translateY(0)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes slotBlink { 0%,100%{border-color:rgba(255,255,255,0.15)} 50%{border-color:rgba(255,255,255,0.4)} }
        @keyframes countdownPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
        @keyframes starTwinkle { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }
      `}</style>
    </div>
  );
}
