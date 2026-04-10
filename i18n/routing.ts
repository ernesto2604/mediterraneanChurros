import {defineRouting} from "next-intl/routing";

import {defaultLocale, locales, localePrefix} from "@/lib/i18n";

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale,
  localePrefix,
});
