import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";
import Image from "next/image";

export function PricingSection() {
  return (
    <Section id="pricing" className="pt-0 pb-8 md:pb-12 relative min-h-[607.59px] h-auto md:h-[607.59px] opacity-100 border-0 overflow-hidden -mt-px" style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, #2B2D32 50%, #2B2D32 100%)' }}>
      <div className="relative z-10 w-full max-w-[1440px] min-h-[607.59px] h-auto md:h-[607.59px] pr-4 pb-4 pl-4 md:pr-[40px] md:pb-[20px] md:pl-[40px] opacity-100 mx-auto">
        {/* White CTA card with z-index 10 */}
        <Card className="relative z-[10] w-full max-w-[1330px] min-h-[587.59px] h-auto md:h-[587.59px] rounded-[20px] !bg-[#f5f5f5] pr-4 pl-4 md:pr-[70px] md:pl-[70px] pt-8 md:pt-[110px] pb-8 md:pb-10 border-0 opacity-100 mx-auto">
          <div className="flex items-start justify-between mb-8">
            {/* Logo */}
            <div className="w-[76px] h-[120px] rounded-[16px] flex justify-start opacity-100">
              <Image
                src="/imgs/header/logo.png"
                alt="Setapp logo"
                width={76}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Headline and subheading */}
          <div className="mb-8 md:mb-12">
            <h2 className="font-avenir font-semibold text-[#26262B] text-2xl md:text-[46px] leading-tight md:leading-[59.8px] tracking-[1.3px] mb-2 align-middle">
              Superpowers starting $9.99/month.
            </h2>
            <p className="font-avenir font-semibold text-[#26262B] text-2xl md:text-[46px] leading-tight md:leading-[59.8px] tracking-[1.3px] align-middle">
              Free for 7 days.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button className="w-full sm:w-[193.41px] h-[50px] rounded-[6px] bg-[#26262B] text-white font-avenir font-normal text-[16px] leading-[24px] tracking-[1px] text-center align-middle opacity-100 hover:opacity-90 transition-opacity">
              Get started now
            </button>
            <button className="w-full sm:w-[220.57px] h-[50px] rounded-[6px] bg-transparent text-[#26262B] font-avenir font-normal text-[16px] leading-[24px] tracking-[1px] text-center align-middle border border-[#26262B] opacity-100 hover:bg-gray-100 transition-colors">
              More about Setapp
            </button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

