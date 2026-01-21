import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export function JourneySection() {
  return (
    <Section className="py-20 lg:py-24">
      <Container className="relative">
        {/* View all superpowers link - centered at top */}
        <div className="flex justify-center mb-10">
          <a
            href="#superpowers"
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity relative"
          >
            <div className="w-[27px] h-[21px] pt-[2px] pr-[2.31px] pb-[2px] pl-[2px] relative top-[17.5px] left-[1px]">
              <svg
                width="27"
                height="21"
                viewBox="0 0 27 21"
                fill="none"
                className="text-white"
              >
                <path
                  d="M15 1L22 10.5L15 20"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-avenir font-medium text-[20px] leading-[30px] tracking-[1.6px] text-center text-white flex items-center">
              View all superpowers
            </span>
          </a>
        </div>

        {/* Main content area */}
        <div className="w-[1180px] h-[156.84px] flex items-start justify-between mb-10">
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
 