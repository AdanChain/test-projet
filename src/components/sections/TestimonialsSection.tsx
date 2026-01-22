import Image from "next/image";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";

export function TestimonialsSection() {
  return (
    <Section id="stories" className="pt-4 pb-16 relative border-0 overflow-hidden -mb-px" style={{ background: 'linear-gradient(to bottom, #26262B 0%, #26262B 50%, #FFFFFF 50%, #FFFFFF 100%)' }}>
      <div className="relative pr-4 pl-4 md:pr-8 md:pl-8 rounded-[20px] overflow-hidden z-10 w-full max-w-[1440px] min-h-[720px] h-auto md:h-[720px] mx-auto">
        {/* Jason Staczek testimonial card with z-index 10 */}
        <Card className="relative z-[10] flex w-full h-full rounded-[20px] !bg-[#754F70] p-4 md:p-10 border-0 overflow-hidden">
          <div className="w-full h-full flex flex-col md:flex-row items-start gap-4 md:gap-8 pl-0 md:pl-8">
            {/* Left side - Text content */}
            <div className="h-full flex flex-col justify-around flex-1 w-full md:w-auto">
              <div className="w-full md:w-[556px] h-auto md:h-[163.12px] relative md:absolute md:top-[209px] opacity-100">
                <p className="font-avenir font-medium text-white text-[26px] leading-[40.04px] tracking-[0%] flex items-center mb-6">
                  Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.
                </p>
                <div>
                  <p className="font-avenir font-normal text-white text-[16px] opacity-[0.8] leading-[100%] tracking-[0%] flex items-center">
                    Jason Staczek
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="absolute bottom-[150px] w-[74px] h-[74px] bg-[#ffffffcc] rounded-[37px] flex items-center justify-center shadow-lg cursor-pointer hover:opacity-90 transition-opacity opacity-100">
                 <Image src="/imgs/Vector-1.png" alt="Play" width={12.96} height={15.95} className="object-contain opacity-100" />
                </div>
              </div>
            </div>

            {/* Right side - Portrait image */}
            <div className="flex-shrink-0 w-full md:w-[670px]">
              <Image
                src="/imgs/image 67.png"
                alt="Jason Staczek"
                width={670}
                height={690}
                className="rounded-[20px] object-cover w-full h-auto md:w-[670px] md:h-[690px]"
              />
            </div>
          </div>

          {/* Carousel navigation arrows - top right */}
          <div className="absolute top-4 md:top-[70px] right-4 md:right-6 h-[24px] flex items-center gap-2 opacity-100 -rotate-180">
            <button className="w-8 h-8 rounded-full flex items-center justify-center transition-colors">
              <svg width="14" height="24" viewBox="5 0 14 24" fill="none" className="text-white opacity-[0.49]">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center transition-colors">
              <svg width="14" height="24" viewBox="5 0 14 24" fill="none" className="text-white opacity-[0.49]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Card>
      </div>

    </Section>
  );
}
