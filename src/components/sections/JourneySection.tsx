import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import Image from "next/image";

export function JourneySection() {
  return (
    <Section className="pt-8 pb-24">
      <Container className="relative flex flex-col gap-8">
        {/* View all superpowers link - centered at top */}
        <div className="flex flex-row justify-center items-center mb-10">
          <a
            href="#superpowers"
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity relative"
          >
            <div>
             <Image src="/imgs/Vector.png" alt="Arrow" width={23} height={21} />
            </div>
            <span className="font-avenir font-medium text-[20px] leading-[30px] tracking-[1.6px] text-center text-white flex items-center">
              View all superpowers
            </span>
          </a>
        </div>

        {/* Main content area */}
        <div className="w-full max-w-[1180px] min-h-[156.84px] h-auto md:h-[156.84px] flex flex-col md:flex-row items-start justify-between mb-0 gap-4 md:gap-0">
          {/* Left side - Heading */}
          <h2 className="font-avenir font-bold text-white text-2xl md:text-[36px] leading-tight md:leading-[51.84px] tracking-[1px]">
            Your Setapp journey.
          </h2>

          {/* Right side - Description */}
          <p className="font-avenir font-normal text-white text-base md:text-[18px] leading-relaxed md:leading-[32.04px] max-w-full md:max-w-[600px]">
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </div>

        {/* Separator line */}
        <div className="border-t border-[#E5E5E5]"></div>
      </Container>
    </Section>
  );
}
