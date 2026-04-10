"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

import {ProductCard} from "@/components/ProductCard";

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
          <span className="mb-5 inline-block rounded-full border border-border/70 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
            {t("eyebrow")}
          </span>
          <h2 className="section-heading">
            {t("title")}
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
                <ProductCard
                  title={t(`${card}.title`)}
                  description={t(`${card}.desc`)}
                  image={image}
                  details={details || undefined}
                  media={
                    card === "specials" ? (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="overflow-hidden rounded-2xl border border-border/60">
                          <Image
                            src="/images/azucar.jpg"
                            alt={`${t(`${card}.title`)} azucar`}
                            width={700}
                            height={700}
                            className="h-44 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-border/60">
                          <Image
                            src="/images/canela.jpg"
                            alt={`${t(`${card}.title`)} canela`}
                            width={700}
                            height={700}
                            className="h-44 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    ) : undefined
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
