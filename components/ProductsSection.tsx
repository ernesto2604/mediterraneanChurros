"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = ["classic", "filled", "signature", "specials"] as const;
const cardImages: Partial<Record<(typeof cards)[number], string>> = {
  classic: "/images/churroTradicional.jpeg",
  filled: "/images/chocolate.jpg",
  signature: "/images/cafe.jpg",
};

export function ProductsSection() {
  const t = useTranslations("products");

  return (
    <section id="products" className="section-spacing">
      <div className="page-shell">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.25}}
          transition={{duration: 0.55}}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
            {t("sectionTitle")}
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, idx) => {
            const details = t(`${card}.details`);
            const image = cardImages[card];

            return (
              <motion.div
                key={card}
                initial={{opacity: 0, y: 28}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.25}}
                transition={{duration: 0.45, delay: idx * 0.08}}
              >
                <Card className="h-full rounded-3xl border border-border/70 bg-card/85 py-0 shadow-[0_20px_50px_-35px_color-mix(in_oklab,var(--foreground)_40%,transparent)]">
                  <CardHeader className="px-6 pt-6">
                    <CardTitle className="text-2xl tracking-tight">{t(`${card}.title`)}</CardTitle>
                    <CardDescription>{t(`${card}.desc`)}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    {card === "specials" ? (
                      <div className="mb-4 grid grid-cols-2 gap-3">
                        <div className="overflow-hidden rounded-2xl border border-border/60">
                          <Image
                            src="/images/azucar.jpg"
                            alt={`${t(`${card}.title`)} azucar`}
                            width={700}
                            height={700}
                            className="h-44 w-full object-cover object-center"
                          />
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-border/60">
                          <Image
                            src="/images/canela.jpg"
                            alt={`${t(`${card}.title`)} canela`}
                            width={700}
                            height={700}
                            className="h-44 w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    ) : null}
                    {image ? (
                      <div className="mb-4 overflow-hidden rounded-2xl border border-border/60">
                        <Image
                          src={image}
                          alt={t(`${card}.title`)}
                          width={900}
                          height={650}
                          className="h-44 w-full object-cover object-center"
                        />
                      </div>
                    ) : null}
                    {details ? (
                      <p className="text-sm leading-relaxed text-muted-foreground">{details}</p>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
