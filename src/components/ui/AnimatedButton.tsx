"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { ContainerTextFlip } from "./container-text-flip";

interface AnimatedButtonProps {
  className?: string;
  onClick?: () => void;
}

export function AnimatedButton({ className, onClick }: AnimatedButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative px-12 py-4 bg-sgel-red text-white font-sans font-bold text-xl",
        "border-[4px] border-black rounded-xl cursor-pointer",
        "hover:bg-sgel-yellow hover:text-sgel-dark",
        "transition-all duration-300",
        className
      )}
      style={{
        boxShadow: '6px 6px 0px rgba(0,0,0,0.8)',
        filter: 'drop-shadow(3px 3px 1px rgba(0,0,0,0.3))',
        transform: 'rotate(-2deg)'
      }}
    >
      <ContainerTextFlip
        words={["COMENZAR", "EMPEZAR", "INICIAR", "ADELANTE"]}
        interval={2500}
        className="bg-transparent text-inherit"
        textClassName="text-inherit"
      />
    </motion.button>
  );
}
