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
    intro: "Tratamos los datos enviados en el formulario de contacto con la unica finalidad de responder tu consulta.",
    dataUse:
      "Los datos no se ceden a terceros, salvo obligacion legal. Conservacion: el tiempo necesario para gestionar la comunicacion.",
    rights:
      "Puedes solicitar acceso, rectificacion o eliminacion escribiendo a hello@mediterraneanchurros.ch.",
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
    intro: "Wir verarbeiten Daten aus dem Kontaktformular ausschliesslich zur Beantwortung Ihrer Anfrage.",
    dataUse:
      "Daten werden nicht an Dritte weitergegeben, ausser bei gesetzlicher Pflicht. Speicherung: nur solange fur die Kommunikation erforderlich.",
    rights:
      "Sie konnen Auskunft, Berichtigung oder Loschung per E-Mail an hello@mediterraneanchurros.ch anfragen.",
  },
  fr: {
    title: "Confidentialite",
    intro: "Nous traitons les donnees envoyees via le formulaire de contact uniquement pour repondre a votre demande.",
    dataUse:
      "Les donnees ne sont pas transmises a des tiers, sauf obligation legale. Conservation: uniquement le temps necessaire a la communication.",
    rights:
      "Vous pouvez demander l'acces, la rectification ou la suppression via hello@mediterraneanchurros.ch.",
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
  const content = contentByLocale[(locale as AppLocale) ?? "es"] ?? contentByLocale.es;

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
