import { HeroSectionV2 } from '@/components/sections/hero-section-v2';
import { AboutSectionV2 } from '@/components/sections/about-section-v2';
import { ExperienceSectionV2 } from '@/components/sections/experience-section-v2';
import { PortfolioSectionV2 } from '@/components/sections/portfolio-section-v2';
import { ServicesSectionV2 } from '@/components/sections/services-section-v2';
import { ContactSectionV2 } from '@/components/sections/contact-section-v2';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';

export default function Home2() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSectionV2 />
        <AboutSectionV2 />
        <ExperienceSectionV2 />
        <PortfolioSectionV2 />
        <ServicesSectionV2 />
        <ContactSectionV2 />
      </main>
      <Footer />
    </div>
  );
}