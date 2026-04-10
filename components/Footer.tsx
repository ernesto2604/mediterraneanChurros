"use client";

import {useTranslations} from "next-intl";

import {Link} from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/35 py-6">
      <div className="page-shell flex flex-col gap-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-[0.1em] text-foreground uppercase">{t("brand")}</p>
          <p className="mt-1 text-xs sm:text-sm">
            {t("tagline")} <span className="hidden sm:inline">-</span> {year} {t("rights")}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
          <Link href="/legal-notice" className="transition hover:text-foreground">{t("legal")}</Link>
          <Link href="/privacy" className="transition hover:text-foreground">{t("privacy")}</Link>
          <Link href="/cookies" className="transition hover:text-foreground">{t("cookies")}</Link>
        </nav>
      </div>
    </footer>
  );
}
