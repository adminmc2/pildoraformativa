"use client";

import { Highlighter } from "@/components/ui/highlighter";

export default function HighlighterDemo() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="bg-white border-4 border-black rounded-2xl p-8 [box-shadow:8px_8px_0px_rgba(0,0,0,0.8)]">
        <h3 className="text-3xl font-black text-black mb-6">
          Reglas del Plural en Español
        </h3>
        <p className="text-2xl font-bold text-gray-800 leading-relaxed">
          Los nombres terminados en{" "}
          <Highlighter action="highlight" color="#FFEB3B" strokeWidth={3}>
            vocal
          </Highlighter>{" "}
          añaden{" "}
          <Highlighter action="circle" color="#4CAF50" strokeWidth={2}>
            -S
          </Highlighter>
          , mientras que los terminados en{" "}
          <Highlighter action="highlight" color="#FF9800" strokeWidth={3}>
            consonante
          </Highlighter>{" "}
          añaden{" "}
          <Highlighter action="circle" color="#2196F3" strokeWidth={2}>
            -ES
          </Highlighter>
          .
        </p>
      </div>

      <div className="bg-white border-4 border-black rounded-2xl p-8 [box-shadow:8px_8px_0px_rgba(0,0,0,0.8)]">
        <h3 className="text-3xl font-black text-black mb-6">
          Ejemplos Importantes
        </h3>
        <p className="text-2xl font-bold text-gray-800 leading-relaxed">
          Palabras como{" "}
          <Highlighter action="underline" color="#E91E63" strokeWidth={2}>
            casa → casas
          </Highlighter>{" "}
          y{" "}
          <Highlighter action="underline" color="#9C27B0" strokeWidth={2}>
            flor → flores
          </Highlighter>{" "}
          siguen estas reglas. Sin embargo,{" "}
          <Highlighter action="box" color="#F44336" strokeWidth={2}>
            lápiz → lápices
          </Highlighter>{" "}
          cambia la{" "}
          <Highlighter action="strike-through" color="#FF5722" strokeWidth={2}>
            Z por C
          </Highlighter>
          .
        </p>
      </div>

      <div className="bg-white border-4 border-black rounded-2xl p-8 [box-shadow:8px_8px_0px_rgba(0,0,0,0.8)]">
        <h3 className="text-3xl font-black text-black mb-6">
          Casos Especiales
        </h3>
        <p className="text-2xl font-bold text-gray-800 leading-relaxed">
          Recuerda que las palabras{" "}
          <Highlighter action="bracket" color="#00BCD4" strokeWidth={2}>
            invariables
          </Highlighter>{" "}
          como{" "}
          <Highlighter action="highlight" color="#CDDC39" strokeWidth={3}>
            crisis
          </Highlighter>{" "}
          no cambian en plural. ¡Es{" "}
          <Highlighter action="circle" color="#8BC34A" strokeWidth={2}>
            muy importante
          </Highlighter>{" "}
          recordarlo!
        </p>
      </div>
    </div>
  );
}
