import type {AppLocale} from "@/lib/i18n";

type Content = {
  title: string;
  intro: string;
  note: string;
};

const contentByLocale: Record<AppLocale, Content> = {
  es: {
    title: "Cookies",
    intro: "Este sitio utiliza solo cookies técnicas necesarias para su funcionamiento básico.",
    note:
      "Si en el futuro se incorporan cookies de analítica o marketing, se actualizará esta política y el sistema de consentimiento.",
  },
  en: {
    title: "Cookies",
    intro: "This website currently uses only technical cookies required for basic functionality.",
    note:
      "If analytics or marketing cookies are added in the future, this policy and consent system will be updated.",
  },
  de: {
    title: "Cookies",
    intro: "Diese Website verwendet derzeit nur technisch notwendige Cookies für die Grundfunktion.",
    note:
      "Falls in Zukunft Analyse- oder Marketing-Cookies eingesetzt werden, werden diese Richtlinie und das Einwilligungssystem aktualisiert.",
  },
  fr: {
    title: "Cookies",
    intro: "Ce site utilise actuellement uniquement des cookies techniques nécessaires à son fonctionnement de base.",
    note:
      "Si des cookies d'analyse ou de marketing sont ajoutés plus tard, cette politique et le système de consentement seront mis à jour.",
  },
  it: {
    title: "Cookies",
    intro: "Questo sito utilizza attualmente solo cookie tecnici necessari al funzionamento di base.",
    note:
      "Se in futuro verranno aggiunti cookie di analisi o marketing, questa policy e il sistema di consenso saranno aggiornati.",
  },
};

type Props = {
  params: Promise<{locale: string}>;
};

export default async function CookiesPage({params}: Props) {
  const {locale} = await params;
  const content = contentByLocale[(locale as AppLocale) ?? "de"] ?? contentByLocale.de;

  return (
    <main className="section-spacing">
      <div className="page-shell max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">{content.title}</h1>
        <p className="mb-3 text-muted-foreground">{content.intro}</p>
        <p className="text-muted-foreground">{content.note}</p>
      </div>
    </main>
  );
}
