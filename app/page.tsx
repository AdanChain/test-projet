import { HeaderHeroSection } from "@/components/sections/HeaderHeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { QuotesSection } from "@/components/sections/QuotesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main>
      <HeaderHeroSection />
      <FeaturesSection />
      <JourneySection />
      <TestimonialsSection />
      <QuotesSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
}

