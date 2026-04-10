import {groq} from "next-sanity";

import {AppLocale} from "@/lib/i18n";
import {sanityClient} from "@/lib/sanity/client";

export type EventLocationItem = {
  city: string;
  dateStart?: string;
  dateEnd?: string;
};

const eventLocationsQuery = groq`
  *[_type == "eventLocation" && coalesce(isActive, true) == true]
  | order(coalesce(orderRank, 999) asc) {
    "city": select(
      $locale == "es" => coalesce(cityEs, cityEn, cityDe, cityFr, cityIt),
      $locale == "en" => coalesce(cityEn, cityEs, cityDe, cityFr, cityIt),
      $locale == "de" => coalesce(cityDe, cityEn, cityEs, cityFr, cityIt),
      $locale == "fr" => coalesce(cityFr, cityEn, cityEs, cityDe, cityIt),
      $locale == "it" => coalesce(cityIt, cityEn, cityEs, cityDe, cityFr),
      coalesce(cityEn, cityEs, cityDe, cityFr, cityIt)
    ),
    dateStart,
    dateEnd
  }
`;

export async function getEventLocations(locale: AppLocale): Promise<EventLocationItem[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const data = await sanityClient.fetch<EventLocationItem[]>(eventLocationsQuery, {locale});
    return (data ?? []).filter((item) => item?.city);
  } catch {
    return [];
  }
}
