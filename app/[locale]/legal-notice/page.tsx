import type {AppLocale} from "@/lib/i18n";

type Content = {
  title: string;
  intro: string;
  owner: string;
  responsibility: string;
};

const contentByLocale: Record<AppLocale, Content> = {
  es: {
    title: "Aviso legal",
    intro: "Información legal del sitio web Mediterranean Churros.",
    owner: "Titular del sitio: Mediterranean Churros (marca comercial).",
    responsibility:
      "Este sitio tiene carácter informativo. Para datos legales definitivos, incorpora aquí los datos fiscales y de contacto oficiales.",
  },
  en: {
    title: "Legal notice",
    intro: "Legal information for the Mediterranean Churros website.",
    owner: "Website owner: Mediterranean Churros (commercial brand).",
    responsibility:
      "This website is for informational purposes. Add official tax and contact details here for final legal compliance.",
  },
  de: {
    title: "Impressum",
    intro: "Rechtliche Informationen zur Website von Mediterranean Churros.",
    owner: "Inhaber der Website: Mediterranean Churros (Marke).",
    responsibility:
      "Diese Website dient Informationszwecken. Für die endgültige Rechtskonformität bitte offizielle Steuer- und Kontaktdaten ergänzen.",
  },
  fr: {
    title: "Mentions légales",
    intro: "Informations légales du site Mediterranean Churros.",
    owner: "Propriétaire du site: Mediterranean Churros (marque commerciale).",
    responsibility:
      "Ce site est informatif. Pour une conformité juridique complète, ajoutez ici les données fiscales et de contact officielles.",
  },
  it: {
    title: "Note legali",
    intro: "Informazioni legali del sito Mediterranean Churros.",
    owner: "Titolare del sito: Mediterranean Churros (marchio commerciale).",
    responsibility:
      "Questo sito ha finalità informative. Per la conformità legale completa, inserisci qui i dati fiscali e di contatto ufficiali.",
  },
};

type Props = {
  params: Promise<{locale: string}>;
};

export default async function LegalNoticePage({params}: Props) {
  const {locale} = await params;
  const content = contentByLocale[(locale as AppLocale) ?? "de"] ?? contentByLocale.de;

  return (
    <main className="section-spacing">
      <div className="page-shell max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">{content.title}</h1>
        <p className="mb-4 text-muted-foreground">{content.intro}</p>
        <p className="mb-3 text-muted-foreground">{content.owner}</p>
        <p className="text-muted-foreground">{content.responsibility}</p>
      </div>
    </main>
  );
}
