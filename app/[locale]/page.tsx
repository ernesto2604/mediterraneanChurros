import {ContactSection} from "@/components/ContactSection";
import {EventsSection} from "@/components/EventsSection";
import {Footer} from "@/components/Footer";
import {HeroSection} from "@/components/HeroSection";
import {Navbar} from "@/components/Navbar";
import {ProductsSection} from "@/components/ProductsSection";
import {StorySection} from "@/components/StorySection";

type Props = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;

  return (
    <div className="relative overflow-x-clip">
      <Navbar locale={locale} />
      <main>
        <HeroSection />
        <ProductsSection />
        <StorySection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
