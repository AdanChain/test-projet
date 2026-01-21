import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";
import Image from "next/image";

export function PricingSection() {
  return (
    <Section id="pricing" className="py-20 lg:py-24 pt-6 relative">
      <Container className="relative">
        {/* White CTA card with z-index 10 */}
        <Card className="relative z-[10] w-full rounded-[20px] bg-white p-10 shadow-card-soft border-0">
          <div className="flex items-start justify-between mb-8">
            {/* Logo */}
            <div className="w-16 h-16 rounded-[16px] bg-[#26262B] flex items-center justify-center">
              <Image
                src="/imgs/header/logo.png"
                alt="Setapp logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Headline and subheading */}
          <div className="mb-8">
            <h2 className="font-avenir font-bold text-[#26262B] text-[36px] leading-[51.84px] tracking-[1px] mb-2">
              Superpowers starting $9.99/month.
            </h2>
            <p className="font-avenir font-normal text-[#26262B] text-[18px] leading-[32.04px]">
              Free for 7 days.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="px-8 py-3 rounded-[6px] bg-[#26262B] text-white font-avenir font-medium text-[14px] hover:opacity-90 transition-opacity">
              Get started now
            </button>
            <button className="px-8 py-3 rounded-[6px] bg-gray-200 text-[#26262B] font-avenir font-medium text-[14px] hover:bg-gray-300 transition-colors">
              More about Setapp
            </button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

