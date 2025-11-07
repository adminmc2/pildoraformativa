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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group px-12 py-4 border-2 border-sgel-red text-sgel-red font-sans font-semibold text-xl",
        "hover:bg-sgel-red hover:text-white hover:border-sgel-red",
        "transition-colors duration-300 cursor-pointer rounded-md",
        className
      )}
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
