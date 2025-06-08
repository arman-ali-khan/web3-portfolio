import { HeroSectionV2 } from '@/components/sections/hero-section-v2';
import { FeaturesSection } from '@/components/sections/features-section';
import { StatsSection } from '@/components/sections/stats-section';
import { TechnologiesSection } from '@/components/sections/technologies-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CtaSection } from '@/components/sections/cta-section';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';

export default function Home2() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSectionV2 />
        <FeaturesSection />
        <StatsSection />
        <TechnologiesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}