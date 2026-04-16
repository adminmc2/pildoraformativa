"use client";

import { ReactNode } from "react";

export function CharacterStage({
  children,
  bubble,
  step,
}: {
  children: ReactNode;
  bubble?: ReactNode;
  step: number;
}) {
  return (
    <div className="relative flex items-center justify-center min-w-0">
      <div
        className="relative"
        style={{
          width: "min(34vw, 44vh)",
          maxWidth: 400,
          animation:
            "stageSlideIn 900ms cubic-bezier(0.16,1,0.3,1), stageFloat 5.5s ease-in-out 900ms infinite",
        }}
      >
        {children}
      </div>

      {bubble && (
        <div
          key={`b-${step}`}
          className="absolute top-[15%] -right-[20%] bg-white rounded-[24px] px-7 py-4 shadow-[0_18px_48px_-14px_rgba(0,0,0,0.22)] max-w-[280px] z-10"
          style={{
            animation: "bubbleIn 560ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <p className="font-[family-name:var(--font-pf-display)] text-[clamp(18px,2.4vh,30px)] leading-snug text-[var(--color-pf-ink)]">
            {bubble}
          </p>
          <div className="absolute top-1/2 -left-[10px] -translate-y-1/2 w-[18px] h-[18px] bg-white rotate-45 rounded-[3px]" />
        </div>
      )}

      <style jsx>{`
        @keyframes stageSlideIn {
          0% {
            opacity: 0;
            transform: translateX(90px) scale(0.8) rotate(6deg);
          }
          60% {
            transform: translateX(-8px) scale(1.03) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0);
          }
        }
        @keyframes stageFloat {
          0%, 100% {
            transform: translateY(0) rotate(0);
          }
          33% {
            transform: translateY(-10px) rotate(1.2deg);
          }
          66% {
            transform: translateY(-4px) rotate(-0.8deg);
          }
        }
        @keyframes bubbleIn {
          0% {
            opacity: 0;
            transform: translateX(-10px) scale(0.8);
          }
          50% {
            transform: translateX(4px) scale(1.04);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
