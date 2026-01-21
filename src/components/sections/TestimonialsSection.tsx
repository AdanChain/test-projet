import Image from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";

export function TestimonialsSection() {
  return (
    <Section id="stories" className="py-20 lg:py-24 relative">
      <Container className="relative">
        {/* Jason Staczek testimonial card with z-index 10 */}
        <Card className="relative z-[10] w-full rounded-[20px] bg-[#6A4B7C] p-10 shadow-card-soft border-0 overflow-hidden">
          <div className="flex items-start gap-8">
            {/* Left side - Text content */}
            <div className="flex-1">
              <p className="font-avenir font-normal text-white text-[24px] leading-[36px] mb-6">
                Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer hover:opacity-90 transition-opacity">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#6A4B7C] ml-1"
                  >
                    <path
                      d="M8 5v14l11-7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-avenir font-normal text-white text-[16px]">
                    Jason Staczek
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Portrait image */}
            <div className="flex-shrink-0">
              <Image
                src="/imgs/image 67.png"
                alt="Jason Staczek"
                width={400}
                height={400}
                className="rounded-[20px] object-cover"
              />
            </div>
          </div>

          {/* Carousel navigation arrows - top right */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
