export const locales = ["es", "en", "de", "fr", "it"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "de";
export const localePrefix = "always";
