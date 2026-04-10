"use client";

import Image from "next/image";
import {ArrowRight} from "lucide-react";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

import {buttonVariants} from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center py-8 md:py-10">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-4xl border border-border/60 bg-card/80 p-8 shadow-[0_20px_80px_-40px_color-mix(in_oklab,var(--foreground)_35%,transparent)] md:p-14">
          <div className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-accent/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-secondary/70 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{duration: 0.6, ease: "easeOut"}}
              className="max-w-3xl"
            >
              <span className="eyebrow">{t("tag")}</span>

              <h1 className="mb-6 text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
                {t("title")}
              </h1>
              <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("subtitle")}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className={buttonVariants({
                    size: "lg",
                    className: "rounded-full px-7 text-sm tracking-wide uppercase",
                  })}
                >
                  {t("primaryCta")}
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#products"
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className: "rounded-full px-7 text-sm tracking-wide uppercase",
                  })}
                >
                  {t("secondaryCta")}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 18, scale: 0.98}}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              viewport={{once: true, amount: 0.25}}
              transition={{duration: 0.6, ease: "easeOut", delay: 0.08}}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-4xl bg-gradient-to-br from-accent/40 via-secondary/20 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-2 shadow-[0_20px_60px_-35px_color-mix(in_oklab,var(--foreground)_55%,transparent)]">
                <Image
                  src="/images/churros.jpeg"
                  alt="Fresh premium churros"
                  width={1000}
                  height={1200}
                  className="h-[300px] w-full rounded-2xl object-cover object-center md:h-[420px]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
