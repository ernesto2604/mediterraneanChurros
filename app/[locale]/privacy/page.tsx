import type {AppLocale} from "@/lib/i18n";

type Content = {
  title: string;
  intro: string;
  dataUse: string;
  rights: string;
};

const contentByLocale: Record<AppLocale, Content> = {
  es: {
    title: "Privacidad",
    intro: "Tratamos los datos enviados en el formulario de contacto con la única finalidad de responder tu consulta.",
    dataUse:
      "Los datos no se ceden a terceros, salvo obligación legal. Conservación: el tiempo necesario para gestionar la comunicación.",
    rights:
      "Puedes solicitar acceso, rectificación o eliminación escribiendo a hello@mediterraneanchurros.ch.",
  },
  en: {
    title: "Privacy",
    intro: "We process data submitted through the contact form only to reply to your inquiry.",
    dataUse:
      "Data is not shared with third parties unless required by law. Retention: only as long as needed to manage communication.",
    rights:
      "You can request access, correction or deletion by writing to hello@mediterraneanchurros.ch.",
  },
  de: {
    title: "Datenschutz",
    intro: "Wir verarbeiten Daten aus dem Kontaktformular ausschließlich zur Beantwortung Ihrer Anfrage.",
    dataUse:
      "Daten werden nicht an Dritte weitergegeben, außer bei gesetzlicher Pflicht. Speicherung: nur solange für die Kommunikation erforderlich.",
    rights:
      "Sie können Auskunft, Berichtigung oder Löschung per E-Mail an hello@mediterraneanchurros.ch anfragen.",
  },
  fr: {
    title: "Confidentialité",
    intro: "Nous traitons les données envoyées via le formulaire de contact uniquement pour répondre à votre demande.",
    dataUse:
      "Les données ne sont pas transmises à des tiers, sauf obligation légale. Conservation: uniquement le temps nécessaire à la communication.",
    rights:
      "Vous pouvez demander l'accès, la rectification ou la suppression via hello@mediterraneanchurros.ch.",
  },
  it: {
    title: "Privacy",
    intro: "Trattiamo i dati inviati tramite il modulo di contatto solo per rispondere alla tua richiesta.",
    dataUse:
      "I dati non vengono ceduti a terzi, salvo obblighi di legge. Conservazione: solo per il tempo necessario alla comunicazione.",
    rights:
      "Puoi richiedere accesso, rettifica o cancellazione scrivendo a hello@mediterraneanchurros.ch.",
  },
};

type Props = {
  params: Promise<{locale: string}>;
};

export default async function PrivacyPage({params}: Props) {
  const {locale} = await params;
  const content = contentByLocale[(locale as AppLocale) ?? "de"] ?? contentByLocale.de;

  return (
    <main className="section-spacing">
      <div className="page-shell max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">{content.title}</h1>
        <p className="mb-4 text-muted-foreground">{content.intro}</p>
        <p className="mb-3 text-muted-foreground">{content.dataUse}</p>
        <p className="text-muted-foreground">{content.rights}</p>
      </div>
    </main>
  );
}
