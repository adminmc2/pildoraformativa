"use client";

import { PilarStar } from "@/components/pildoras-formativas/characters/pilar-star";
import { FloraFlower } from "@/components/pildoras-formativas/characters/flora-flower";
import { VitoPill } from "@/components/pildoras-formativas/characters/vito-pill";
import { LunaMoon } from "@/components/pildoras-formativas/characters/luna-moon";
import { ChipiSpark } from "@/components/pildoras-formativas/characters/chipi-spark";
import { useState } from "react";

const CHARS = [
  { id: "pilar", name: "Pili", El: PilarStar },
  { id: "flora", name: "Flora", El: FloraFlower },
  { id: "vito", name: "Vito", El: VitoPill },
  { id: "luna", name: "Luna", El: LunaMoon },
  { id: "chipi", name: "Chipi", El: ChipiSpark },
] as const;

const CSS_VARS: Record<string, string> = {
  "--color-pf-ink": "#0A0A0A",
  "--color-pf-star": "#F5C842",
  "--color-pf-flower": "#E91FCE",
  "--color-pf-pill": "#8FC751",
  "--color-pf-moon": "#7C5CFF",
  "--color-pf-spark": "#FF6B4A",
};

function downloadOne(id: string) {
  const el = document.getElementById(`c-${id}`);
  if (!el) return;
  const svg = el.querySelector("svg");
  if (!svg) return;

  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("width", "400");
  clone.setAttribute("height", "500");

  let xml = new XMLSerializer().serializeToString(clone);
  for (const [v, hex] of Object.entries(CSS_VARS)) {
    while (xml.includes(`var(${v})`)) {
      xml = xml.replace(`var(${v})`, hex);
    }
  }

  const svgBlob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  img.onload = () => {
    const c = document.createElement("canvas");
    c.width = 800;
    c.height = 1000;
    const ctx = c.getContext("2d")!;
    ctx.drawImage(img, 0, 0, 800, 1000);
    URL.revokeObjectURL(url);
    const a = document.createElement("a");
    a.download = `${id}.png`;
    a.href = c.toDataURL("image/png");
    a.click();
  };
  img.src = url;
}

export default function Content() {
  const [status, setStatus] = useState("");

  const downloadAll = () => {
    setStatus("Descargando...");
    CHARS.forEach(({ id }, i) => {
      setTimeout(() => {
        downloadOne(id);
        if (i === CHARS.length - 1) setStatus("Listo");
      }, i * 700);
    });
  };

  return (
    <div style={{ padding: 40, background: "#FAF6EC", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Exportar personajes a PNG
      </h1>
      <button
        onClick={downloadAll}
        style={{
          padding: "12px 24px",
          fontSize: 16,
          fontWeight: "bold",
          background: "#0A0A0A",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          marginBottom: 8,
        }}
      >
        Descargar todos como PNG
      </button>
      {status && <p style={{ fontWeight: "bold", marginBottom: 24 }}>{status}</p>}
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 24 }}>
        {CHARS.map(({ id, name, El }) => (
          <div key={id} id={`c-${id}`} style={{ textAlign: "center", width: 200 }}>
            <El className="w-[200px] h-[250px]" />
            <p style={{ marginTop: 8, fontWeight: "bold" }}>{name}</p>
            <button
              onClick={() => downloadOne(id)}
              style={{
                marginTop: 4,
                padding: "4px 12px",
                fontSize: 12,
                background: "#666",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Descargar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
