"use client";

import {MapPin} from "lucide-react";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

type EventCity = {
  cityKey: "zurich" | "geneva" | "lausanne";
  dateKey: "zurichDate" | "genevaDate" | "lausanneDate";
};

const eventCities: EventCity[] = [
  {cityKey: "zurich", dateKey: "zurichDate"},
  {cityKey: "geneva", dateKey: "genevaDate"},
  {cityKey: "lausanne", dateKey: "lausanneDate"},
];

export function EventsSection() {
  const t = useTranslations("events");

  return (
    <section id="events" className="section-spacing">
      <div className="page-shell">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <motion.div
            initial={{opacity: 0, x: -22}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.55}}
            className="pt-1"
          >
            <span className="mb-5 inline-block rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
              {t("eyebrow")}
            </span>
            <h2 className="section-heading mb-4 max-w-xl">
              {t("title")}
            </h2>
            <p className="section-body mb-4 max-w-2xl text-muted-foreground">
              {t("paragraphOne")}
            </p>
            <p className="section-body max-w-2xl text-muted-foreground">
              {t("paragraphTwo")}
            </p>
          </motion.div>

          <motion.aside
            initial={{opacity: 0, x: 22}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.55, delay: 0.05}}
            className="rounded-4xl border border-border/60 bg-[linear-gradient(155deg,color-mix(in_oklab,var(--card)_92%,white),color-mix(in_oklab,var(--secondary)_20%,white))] p-6 shadow-[0_20px_55px_-38px_color-mix(in_oklab,var(--foreground)_45%,transparent)] md:p-7"
          >
            <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              {t("upcoming")}
            </p>
            <ul className="space-y-3" aria-label={t("listAria")}>
              {eventCities.map((item) => (
                <li
                  key={item.cityKey}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border/55 bg-background/80 px-4 py-3.5 transition-all duration-300 hover:border-border/80 hover:bg-background hover:shadow-[0_12px_30px_-24px_color-mix(in_oklab,var(--foreground)_40%,transparent)]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-secondary/65 text-secondary-foreground transition-colors duration-300 group-hover:bg-secondary/85">
                      <MapPin className="size-4" />
                    </span>
                    <span className="truncate text-sm font-medium tracking-tight md:text-base">
                      {t(item.cityKey)}
                    </span>
                  </div>
                  <span className="shrink-0 text-sm text-muted-foreground">{t(item.dateKey)}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
