"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "w-full max-w-3xl mx-auto bg-black border-3 border-black rounded-2xl overflow-hidden [box-shadow:8px_8px_0px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b-3 border-black">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black"></div>
        </div>
        <span className="text-white text-sm font-bold ml-2">Terminal</span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm text-white space-y-1">
        {children}
      </div>
    </div>
  );
}

interface TypingAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypingAnimation({
  children,
  className,
  delay = 0,
  speed = 50,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const text = typeof children === "string" ? children : String(children);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, speed);

      return typingInterval;
    };

    timeoutId = setTimeout(() => {
      const interval = startTyping();
      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, delay, speed]);

  return (
    <div className={cn("font-mono", className)}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">▋</span>}
    </div>
  );
}

interface AnimatedSpanProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSpan({
  children,
  className,
  delay = 0,
}: AnimatedSpanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: delay,
      }}
      className={cn("font-mono", className)}
    >
      {children}
    </motion.div>
  );
}
