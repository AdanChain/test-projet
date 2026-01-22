import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";
import Image from "next/image";

// User testimonials with proper styling
const userTestimonials = [
  {
    quote:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    author: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    platform: "Twitter",
    bgColor: "bg-[#71719A]",
    textColor: "#FFFFFF",
    icon: "/imgs/Frame.png", // Placeholder - update with actual Twitter icon
  },
  {
    quote:
      "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    author: "Mauricio Sanchez",
    handle: "@m741s",
    platform: "Instagram",
    bgColor: "bg-[#D9AE89]",
    textColor: "text-[#FFFFFF]",
    icon: "/imgs/Frame (1).png", // Placeholder - update with actual Instagram icon
  },
  {
    quote:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    author: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    platform: "Facebook",
    bgColor: "bg-[#765070]",
    textColor: "#FFFFFF",
    icon: "/imgs/Frame3.png", // Placeholder - update with actual Facebook icon
  },
];

export function QuotesSection() {
  return (
    <Section className="relative flex justify-center min-h-[746.52px] h-auto pt-0 pr-4 pb-8 md:pb-12 pl-4 md:pr-[40px] md:pl-[40px] bg-white opacity-100 border-0 overflow-hidden -mt-px -mb-px">
      <Container className="absolute bottom-0 w-full max-w-[1260px] min-h-[626.52px] h-auto md:h-[626.52px] pr-4 pb-0 pl-4 md:pr-[30px] md:pl-[30px] opacity-100 flex flex-col items-center gap-8 md:gap-12 relative">
        {/* Header section */}
        <div className="w-full max-w-[1200px] h-auto md:h-[64.08px] flex flex-col md:flex-row items-start justify-between mb-6 md:mb-8 opacity-100 gap-4 md:gap-0">
          <div className="pr-0 md:pr-32">
            <h2 className="font-avenir font-semibold text-[#26262B] text-2xl md:text-[36px] leading-tight md:leading-[47.88px] tracking-[1.3px] flex items-center mb-2">
              Setapp in your words.
            </h2>
          </div>
          <p className="font-avenir font-normal text-gray-600 text-base md:text-[18px] leading-relaxed md:leading-[32.04px] tracking-[0%] flex items-center w-full md:w-[300px] min-h-[65px] h-auto md:h-[65px] max-w-full md:max-w-[300px] pr-0 md:pr-[25px] pl-0 md:pl-[10px] relative top-0 md:top-[-0.5px] opacity-100">
            What you say about how Setapp powers you up.
          </p>

          {/* Social media icons and carousel controls */}
          <div className="flex flex-col items-start md:items-end gap-4 md:gap-8">
            {/* Social media icons */}
            <div className="flex items-center gap-3">
              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center opacity-[0.9]">
                <Image src="/imgs/Vector (6).png" alt="Facebook" width={48} height={48} className="w-full h-full object-cover" />
              </div>
              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center opacity-[0.9]">
                <Image src="/imgs/Frame (2).png" alt="Twitter" width={48} height={48} className="w-full h-full object-cover" />
              </div>
              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center opacity-[0.9]">
                <Image src="/imgs/inst.png" alt="Instagram" width={48} height={48} className="w-full h-full object-cover" />
              </div>
              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center opacity-[0.9]">
                <Image src="/imgs/Frame (3).png" alt="YouTube" width={48} height={48} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Carousel navigation arrows */}
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full !bg-white hover:bg-gray-50 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 14 24" fill="none" className="text-[#26262B] w-full h-full">
                  <path d="M10 6L4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" opacity={0.7} />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full !bg-white hover:bg-gray-50 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 14 24" fill="none" className="text-[#26262B] w-full h-full">
                  <path d="M4 6L10 12L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" opacity={0.7} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[1180px] h-[562.44px] opacity-100 flex flex-col">
          {/* Testimonial cards */}
          <div className="grid grid-cols-3 gap-5 mb-8 flex-1 w-[1200px] h-[432.44px] opacity-100 pt-[5px] pr-[10px] pb-[5px] pl-[10px]">
            {userTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`bgColor: !bg-[#F5F5F5] ${testimonial.textColor} p-6 pt-2 rounded-[15px] border-0 flex flex-col items-center justify-between w-[380px] h-[422.44px] opacity-100`}
              >
                <p className={`font-avenir font-medium text-[26px] leading-[40.04px] tracking-[0%] ${testimonial.textColor} ${testimonial.bgColor} flex items-start w-[366px] !h-[299.48px] min-h-[299.48px] max-h-[299.48px] opacity-100 pt-[28.5px] ${testimonial.handle === "@m741s" ? "pr-12" : "pr-[22px]"} pb-[38.98px] pl-[22px] rounded-[8px]`}>
                  {testimonial.quote}
                </p>
                <div className="flex flex-col w-[366px] !h-[57.45px] min-h-[57.45px] max-h-[57.45px] justify-between opacity-100 pr-[22px] pl-[22px]">
                  <div className="w-full flex flex-col h-full">
                    <p className="font-avenir font-semibold text-[18px] leading-[32.04px] tracking-[0%] mb-2 text-[#26262B] flex items-center">
                      {testimonial.author}
                    </p>
                    <div className="flex justify-between">
                      <p className={`font-avenir font-normal text-[16px] leading-[100%] tracking-[0%] ${testimonial.textColor === "text-white" ? "text-white/80" : "text-gray-600"} flex items-center`}>
                        {testimonial.handle}
                      </p>
                      <div className={`${
                        testimonial.handle === "@m741s" ? "w-[19px] h-[18px]" :
                        testimonial.handle === "@ArashPourhabibi" ? "w-[22px] h-[18px]" :
                        testimonial.handle === "@meredith.sweet.silberstein" ? "w-[9px] h-[32.04px]" :
                        "w-6 h-6"
                      } flex items-center justify-center opacity-100`}>
                        <Image
                          src={testimonial.icon}
                          alt={testimonial.platform}
                          width={
                            testimonial.handle === "@m741s" ? 19 :
                            testimonial.handle === "@ArashPourhabibi" ? 22 :
                            testimonial.handle === "@meredith.sweet.silberstein" ? 9 : 24
                          }
                          height={
                            testimonial.handle === "@m741s" ? 18 :
                            testimonial.handle === "@ArashPourhabibi" ? 18 :
                            testimonial.handle === "@meredith.sweet.silberstein" ? 32.04 : 24
                          }
                          className="object-contain"
                          style={
                            testimonial.handle === "@meredith.sweet.silberstein" 
                              ? { width: "9px", height: "19px" }
                              : undefined
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Carousel indicator dots */}
          <div className="flex items-center justify-center gap-[25px]">
            <div className="w-3 h-3 rounded-full bg-[#26262B]"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>

          {/* Bottom border line */}
          <div className="w-full h-[1px] bg-[#999999] mt-8 md:mt-12"></div>
        </div>
      </Container>
    </Section>
  );
}

