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
    <div className="relative flex flex-col md:flex-row items-center justify-center min-w-0 gap-3 md:gap-0">
      <div
        className="relative w-[min(50vw,30vh)] md:w-[min(34vw,44vh)] max-w-[400px]"
        style={{
          animation:
            "stageSlideIn 900ms cubic-bezier(0.16,1,0.3,1), stageFloat 5.5s ease-in-out 900ms infinite",
        }}
      >
        {children}
      </div>

      {bubble && (
        <div
          key={`b-${step}`}
          className="relative md:absolute md:top-[15%] md:-right-[20%] bg-white rounded-[24px] px-5 py-3 md:px-7 md:py-4 shadow-[0_18px_48px_-14px_rgba(0,0,0,0.22)] max-w-[90vw] md:max-w-[280px] z-10"
          style={{
            animation: "bubbleIn 560ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <p className="font-[family-name:var(--font-pf-display)] text-[clamp(16px,2.4vh,30px)] leading-snug text-[var(--color-pf-ink)]">
            {bubble}
          </p>
          {/* Arrow: bottom on mobile, left on desktop */}
          <div className="hidden md:block absolute top-1/2 -left-[10px] -translate-y-1/2 w-[18px] h-[18px] bg-white rotate-45 rounded-[3px]" />
          <div className="block md:hidden absolute -top-[10px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-white rotate-45 rounded-[3px]" />
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
