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
    bgColor: "bg-[#8C82B0]",
    borderColor: "border-[#8C82B0]",
    textColor: "text-white",
    icon: "/imgs/footer/Vector.png", // Placeholder - update with actual Twitter icon
  },
  {
    quote:
      "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    author: "Mauricio Sanchez",
    handle: "@m741s",
    platform: "Instagram",
    bgColor: "bg-[#D9B38C]",
    borderColor: "border-[#D9B38C]",
    textColor: "text-[#26262B]",
    icon: "/imgs/footer/Vector (1).png", // Placeholder - update with actual Instagram icon
  },
  {
    quote:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    author: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    platform: "Facebook",
    bgColor: "bg-[#7A4A7A]",
    borderColor: "border-[#7A4A7A]",
    textColor: "text-white",
    icon: "/imgs/footer/Vector (2).png", // Placeholder - update with actual Facebook icon
  },
];

export function QuotesSection() {
  return (
    <Section className="py-20 lg:py-24 pt-10 bg-white">
      <Container>
        {/* Header section */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="font-avenir font-bold text-[#26262B] text-[36px] leading-[51.84px] tracking-[1px] mb-2">
              Setapp in your words.
            </h2>
            <p className="font-avenir font-normal text-gray-600 text-[18px] leading-[32.04px]">
              What you say about how Setapp powers you up.
            </p>
          </div>

          {/* Social media icons and carousel controls */}
          <div className="flex flex-col items-end gap-4">
            {/* Social media icons */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
                <span className="text-white text-xs">🐦</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs">📷</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white text-xs">▶</span>
              </div>
            </div>

            {/* Carousel navigation arrows */}
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {userTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`${testimonial.bgColor} ${testimonial.textColor} p-6 rounded-[20px] shadow-card-soft border-0`}
            >
              <p className={`font-avenir font-normal text-[16px] leading-[24px] mb-4 ${testimonial.textColor}`}>
                {testimonial.quote}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-avenir font-bold text-[14px] mb-1 ${testimonial.textColor}`}>
                    {testimonial.author}
                  </p>
                  <p className={`font-avenir font-normal text-[12px] ${testimonial.textColor === "text-white" ? "text-white/80" : "text-gray-600"}`}>
                    {testimonial.handle}
                  </p>
                </div>
                <div className="w-6 h-6">
                  <Image
                    src={testimonial.icon}
                    alt={testimonial.platform}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#26262B]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </Container>
    </Section>
  );
}

