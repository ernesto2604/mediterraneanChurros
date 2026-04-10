"use client";

import {NextStudio} from "next-sanity/studio";

import config from "@/sanity.config";

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!projectId || !dataset) {
    return (
      <main className="section-spacing">
        <div className="page-shell max-w-2xl">
          <h1 className="section-heading mb-4">Sanity Studio no configurado</h1>
          <p className="section-body text-muted-foreground">
            Faltan variables de entorno en Vercel: NEXT_PUBLIC_SANITY_PROJECT_ID y/o
            NEXT_PUBLIC_SANITY_DATASET.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
