import {ContactSection} from "@/components/ContactSection";
import {EventsSection} from "@/components/EventsSection";
import {Footer} from "@/components/Footer";
import {HeroSection} from "@/components/HeroSection";
import {Navbar} from "@/components/Navbar";
import {ProductsSection} from "@/components/ProductsSection";
import {StorySection} from "@/components/StorySection";
import {AppLocale} from "@/lib/i18n";
import {getEventLocations} from "@/lib/sanity/queries";

type Props = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  const eventLocations = await getEventLocations(locale as AppLocale);

  return (
    <div className="relative overflow-x-clip">
      <Navbar locale={locale} />
      <main>
        <HeroSection />
        <ProductsSection />
        <StorySection />
        <EventsSection cities={eventLocations} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
