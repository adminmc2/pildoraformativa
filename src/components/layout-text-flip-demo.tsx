"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "framer-motion";

export default function LayoutTextFlipDemo() {
  return (
    <div>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Aprende "
          words={["Español", "Gramática", "Vocabulario", "Cultura"]}
          duration={2500}
        />
      </motion.div>
      <p className="mt-8 text-center text-2xl font-bold text-black">
        Con materiales dinámicos y divertidos que harán que el aprendizaje sea una aventura.
      </p>
    </div>
  );
}
