"use client";

import {MapPin} from "lucide-react";
import {motion} from "framer-motion";
import {useLocale, useTranslations} from "next-intl";

type EventCityItem = {
  city: string;
  dateStart?: string;
  dateEnd?: string;
};

type Props = {
  cities?: EventCityItem[];
};

export function EventsSection({cities}: Props) {
  const locale = useLocale();
  const t = useTranslations("events");
  const fallbackCities: EventCityItem[] = [
    {city: t("zurich")},
    {city: t("geneva")},
    {city: t("lausanne")},
  ];
  const eventCities = cities && cities.length > 0 ? cities : fallbackCities;

  const parseDate = (value?: string): Date | null => {
    if (!value) {
      return null;
    }

    const [year, month, day] = value.split("-").map(Number);
    if (!year || !month || !day) {
      return null;
    }

    return new Date(year, month - 1, day);
  };

  const getLocaleTag = (appLocale: string) => {
    const map: Record<string, string> = {
      es: "es-ES",
      en: "en-GB",
      de: "de-DE",
      fr: "fr-FR",
      it: "it-IT",
    };

    return map[appLocale] ?? appLocale;
  };

  const formatEventDate = (item: EventCityItem) => {
    const start = parseDate(item.dateStart);
    if (start) {
      const localeTag = getLocaleTag(locale);
      const fullFormatter = new Intl.DateTimeFormat(localeTag, {
        day: "numeric",
        month: "long",
      });

      const end = parseDate(item.dateEnd);
      if (!end) {
        return fullFormatter.format(start);
      }

      const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
      if (sameMonth) {
        const monthLabel = new Intl.DateTimeFormat(localeTag, {month: "long"}).format(start);
        return `${start.getDate()}-${end.getDate()} ${monthLabel}`;
      }

      return `${fullFormatter.format(start)} - ${fullFormatter.format(end)}`;
    }

    return t("defaultDate");
  };

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
                  key={`${item.city}-${item.dateStart ?? "no-date"}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border/55 bg-background/80 px-4 py-3.5 transition-all duration-300 hover:border-border/80 hover:bg-background hover:shadow-[0_12px_30px_-24px_color-mix(in_oklab,var(--foreground)_40%,transparent)]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-secondary/65 text-secondary-foreground transition-colors duration-300 group-hover:bg-secondary/85">
                      <MapPin className="size-4" />
                    </span>
                    <span className="truncate text-sm font-medium tracking-tight md:text-base">
                      {item.city}
                    </span>
                  </div>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {formatEventDate(item)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
