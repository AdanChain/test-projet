import { HeaderHeroSection } from "@/components/sections/HeaderHeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { QuotesSection } from "@/components/sections/QuotesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main>
      <HeaderHeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <QuotesSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
}

