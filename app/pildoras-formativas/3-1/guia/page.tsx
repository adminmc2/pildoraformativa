"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

import { GuiaDidacticaPDF } from "@/components/pildoras-formativas/pdf/guia-template";

export default function GuiaPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer width="100%" height="100%" showToolbar>
        <GuiaDidacticaPDF />
      </PDFViewer>
    </div>
  );
}
