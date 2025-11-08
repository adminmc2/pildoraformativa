"use client";

import { MorphingText } from "@/components/ui/morphing-text";

export default function MorphingTextDemo() {
  return (
    <div className="w-full">
      <MorphingText
        texts={[
          "Aprende",
          "Español",
          "Gramática",
          "Vocabulario",
          "Cultura",
        ]}
      />
      <div className="text-center mt-12">
        <p className="text-2xl font-black text-black">
          Texto con efecto de transformación fluida
        </p>
      </div>
    </div>
  );
}
