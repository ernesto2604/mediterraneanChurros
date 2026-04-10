"use client";

import {MapPin} from "lucide-react";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

const cityKeys = ["zurich", "geneva", "lausanne"] as const;

export function EventsSection() {
  const t = useTranslations("events");

  return (
    <section id="events" className="section-spacing">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div
            initial={{opacity: 0, x: -25}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.55}}
          >
            <h2 className="mb-4 text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
              {t("title")}
            </h2>
            <p className="mb-4 max-w-3xl text-muted-foreground md:text-lg">{t("paragraphOne")}</p>
            <p className="max-w-3xl text-muted-foreground md:text-lg">{t("paragraphTwo")}</p>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 25}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.55, delay: 0.05}}
            className="rounded-4xl border border-border/70 bg-card/90 p-7"
          >
            <p className="mb-4 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {t("upcoming")}
            </p>
            <ul className="space-y-3">
              {cityKeys.map((city) => (
                <li key={city} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <MapPin className="size-4" />
                  </span>
                  <span className="text-sm font-medium md:text-base">{t(city)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
