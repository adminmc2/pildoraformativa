"use client";
import { useState } from "react";
import { Lens } from "@/components/ui/lens";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LensDemo() {
  const [hovering, setHovering] = useState(false);

  return (
    <div>
      <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-white border-4 border-black p-8 my-10"
        style={{ boxShadow: "12px 12px 0px rgba(0,0,0,0.8)" }}>
        <div className="relative z-10">
          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              src="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              width={500}
              height={500}
              className="rounded-2xl border-4 border-black"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.8)" }}
            />
          </Lens>
          <motion.div
            animate={{
              filter: hovering ? "blur(2px)" : "blur(0px)",
            }}
            className="py-4 relative z-20"
          >
            <h2 className="text-black text-3xl text-left font-black mb-2">
              Efecto Lupa
            </h2>
            <p className="text-gray-700 text-left font-bold text-lg">
              Pasa el ratón sobre la imagen para ampliar los detalles
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
