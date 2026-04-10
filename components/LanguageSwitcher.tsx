"use client";

import {useLocale, useTranslations} from "next-intl";
import {useTransition} from "react";

import {usePathname, useRouter} from "@/i18n/navigation";
import type {AppLocale} from "@/lib/i18n";

const localeLabels: Record<AppLocale, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
  fr: "FR",
  it: "IT",
};

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const currentLocale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChangeLocale = (nextLocale: AppLocale) => {
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  };

  return (
    <div aria-label={t("label")} className="inline-flex rounded-full border border-border/70 bg-card p-1">
      {(Object.keys(localeLabels) as AppLocale[]).map((locale) => (
        <button
          key={locale}
          type="button"
          disabled={isPending}
          onClick={() => handleChangeLocale(locale)}
          className={[
            "min-w-10 rounded-full px-2 py-1.5 text-xs font-semibold transition",
            currentLocale === locale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          ].join(" ")}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}
