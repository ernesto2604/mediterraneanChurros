"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

export function StorySection() {
  const t = useTranslations("story");

  return (
    <section id="story" className="section-spacing">
      <div className="page-shell">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.5}}
          className="relative overflow-hidden rounded-4xl border border-border/70 bg-[linear-gradient(110deg,color-mix(in_oklab,var(--card)_88%,white),color-mix(in_oklab,var(--secondary)_50%,white))] p-8 md:p-14"
        >
          <div className="pointer-events-none absolute top-1/2 right-0 size-56 -translate-y-1/2 rounded-full bg-accent/35 blur-3xl" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="mb-6 max-w-3xl text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
                {t("title")}
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground whitespace-pre-line md:text-lg">
                {t("paragraph")}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-2 shadow-[0_20px_60px_-35px_color-mix(in_oklab,var(--foreground)_55%,transparent)]">
              <Image
                src="/images/amigos.jpg"
                alt="Equipo de Mediterranean Churros"
                width={1100}
                height={1200}
                className="h-[340px] w-full rounded-2xl object-cover object-center md:h-[420px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
