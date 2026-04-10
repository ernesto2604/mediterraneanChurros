"use client";

import {AtSign, Mail, MapPin} from "lucide-react";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {FormEvent, useState} from "react";

import {buttonVariants} from "@/components/ui/button";

export function ContactSection() {
  const t = useTranslations("contact");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="page-shell">
        <motion.div
          initial={{opacity: 0, y: 26}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.55}}
          className="rounded-4xl border border-border/70 bg-primary p-7 text-primary-foreground md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-12">
            <div>
              <span className="mb-5 inline-block rounded-full border border-primary-foreground/35 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
                {t("eyebrow")}
              </span>
              <h2 className="section-heading mb-4 max-w-xl">
                {t("title")}
              </h2>
              <p className="section-body max-w-xl text-primary-foreground/85">{t("subtitle")}</p>
              <p className="section-body mt-3 max-w-xl text-primary-foreground/85">{t("subtitleTwo")}</p>
              <p className="mt-4 mb-7 max-w-xl text-sm text-primary-foreground/75 md:text-base">
                {t("serviceLine")}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm font-medium transition hover:bg-primary-foreground/15">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                    <MapPin className="size-4" />
                  </span>
                  <span>
                    {t("countryLabel")}: {t("countryValue")}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://instagram.com/mediterraneanchurros"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm font-medium transition hover:bg-primary-foreground/15"
                  >
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                      <AtSign className="size-4" />
                    </span>
                    <span className="truncate">{t("instagramLabel")}</span>
                  </a>

                  <a
                    href={`mailto:${t("emailValue")}`}
                    className="flex items-center gap-3 rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm font-medium transition hover:bg-primary-foreground/15"
                  >
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                      <Mail className="size-4" />
                    </span>
                    <span className="truncate">{t("emailLabel")}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-primary-foreground/25 bg-background/95 p-6 text-foreground md:p-7">
              <h3 className="mb-5 text-xl font-semibold tracking-tight text-foreground">{t("writeUs")}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-muted-foreground">
                    {t("formName")}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    placeholder={t("formNamePlaceholder")}
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#B87949] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-muted-foreground">
                    {t("formEmail")}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("formEmailPlaceholder")}
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#B87949] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-muted-foreground">
                    {t("formMessage")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder={t("formMessagePlaceholder")}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#B87949] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full justify-center rounded-full cursor-pointer",
                  })}
                >
                  {t("formSubmit")}
                </button>
                {isSent ? (
                  <p className="text-sm text-muted-foreground">{t("formSuccess")}</p>
                ) : null}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
