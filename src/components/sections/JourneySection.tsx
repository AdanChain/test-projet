import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

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
             <img src="/imgs/Vector.png" alt="Arrow" width={22.69} height={21} />
            </div>
            <span className="font-avenir font-medium text-[20px] leading-[30px] tracking-[1.6px] text-center text-white flex items-center">
              View all superpowers
            </span>
          </a>
        </div>

        {/* Main content area */}
        <div className="w-[1180px] h-[156.84px] flex items-start justify-between mb-0">
          {/* Left side - Heading */}
          <h2 className="font-avenir font-bold text-white text-[36px] leading-[51.84px] tracking-[1px]">
            Your Setapp journey.
          </h2>

          {/* Right side - Description */}
          <p className="font-avenir font-normal text-white text-[18px] leading-[32.04px] max-w-[600px]">
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </div>

        {/* Separator line */}
        <div className="border-t border-[#E5E5E5]"></div>
      </Container>
    </Section>
  );
}
