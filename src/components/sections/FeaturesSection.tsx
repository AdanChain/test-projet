import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";
import Image from "next/image";

// Bottom feature cards data
const bottomFeatureCards = [
  {
    title: "Write code",
    description: "Create applications in more than 25 languages.",
    screenshot: "/imgs/TestimonialsSection/coderunner@2x.png.png",
    icon: "/imgs/TestimonialsSection/icon-coderunner.png.png",
    bgColor: "bg-amber-50",
  },
  {
    title: "Join meetings in a click",
    description: "Quickly access links to your meetings from menu bar.",
    screenshot: "/imgs/TestimonialsSection/meeter@2x.png.png",
    icon: "/imgs/TestimonialsSection/icon-meeter.png.png",
    bgColor: "bg-blue-900",
  },
];

export function FeaturesSection() {
  return (
    <Section id="apps" className="py-20 pt-8 lg:pt-8 lg:pb-24">
      <Container className="relative w-[1180px] h-[1519px] pr-0 pl-0 pt-16 border-t border-[#E5E5E5]">
        {/* Section header - title on left, subtitle on right */}
        <div className="mb-10 flex items-start justify-between pt-10">
          <h2 className="w-[550px] h-[52.84px] max-w-[550px] font-avenir font-semibold text-[36px] leading-[51.84px] tracking-[1px] text-white flex items-center pr-[55px] pb-[0.84px] pl-[10px]">
            What you get on Setapp.
          </h2>
          <p className="w-[600px] h-[72.34px] max-w-[600px] font-avenir font-normal text-[18px] leading-[32.04px] text-white flex items-center pr-[45px] pb-[7.34px] pl-[10px]">
            With a single monthly subscription at $9.99, you get 240+ apps for
            your Mac.
          </p>
        </div>

        <div className="absolute top-[260.83px] w-[1200px] h-[1258px] flex flex-col gap-5">
          {/* Top large card - Keep your Mac clean */}
          <Card className="overflow-hidden w-[1180px] h-[605px] rounded-[20px] bg-[#DF96AE] p-0 shadow-card-soft border-0 flex flex-col justify-between pt-[60px]">
            <div className="pb-6">
              {/* Header with icon and text */}
              <div className="w-[1180px] h-[80px] flex items-start gap-8 mb-6 pr-[552px] pl-[60px]">
                <div className="w-[80px] h-[80px] flex items-center justify-center">
                  <Image
                    src="/imgs/TestimonialsSection/icon-cmm.png.png"
                    alt="Mac cleaning app icon"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[456px] h-[73.54px]">
                  <p className="font-avenir font-semibold text-[26px] leading-[40.04px] text-[#26262B] flex items-center">
                    Keep your Mac clean
                  </p>
                  <p className="font-avenir w-[500px] font-normal text-[18px] leading-[32.04px] text-[#26262B] flex items-center">
                    Remove junk, scan for malware, wipe email attachments.
                  </p>
                </div>
              </div>

              {/* App screenshot */}
              <div className="relative mt-2 w-[1180px] h-[465px] rounded-[26px] pr-[37px] pl-[37px] flex items-center justify-center">
                <Image
                  src="/imgs/TestimonialsSection/cmm-big@2x.png.png"
                  alt="CleanMyMac application interface"
                  width={1106}
                  height={465}
                  className="max-w-[1106px] object-cover"
                />
              </div>
          </div>
          </Card>

          {/* Bottom row - two feature cards */}
          <div className="w-[1200px] h-[633px] grid grid-cols-2 gap-5 pr-[10px] pl-[10px]">
            {bottomFeatureCards.map((card) => {
              // Set background color based on card title
              const bgColor = card.title === "Join meetings in a click" 
                ? "bg-[#384C75]" 
                : "bg-[#F4F0E4]";
              
              return (
              <Card
                key={card.title}
                className={`w-[580px] h-[632.6px] flex flex-col justify-between rounded-[20px] ${bgColor} px-10 pb-[59.54px] pt-8 shadow-card-soft border-0`}
              >
                {/* Screenshot at top */}
                <div className="mb-4 h-64 w-full overflow-hidden rounded-2xl flex items-center justify-center">
                  <Image
                    src={card.screenshot}
                    alt={`${card.title} screenshot`}
                    width={420}
                    height={260}
                    className="object-contain"
                  />
                </div>

                {/* Icon and text at bottom */}
                <div className="flex items-center gap-3">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={32}
                    height={32}
                  />
                  <div>
                    <p className={`mb-1 text-sm font-semibold ${card.title === "Join meetings in a click" ? "text-white" : "text-gray-900"}`}>
                      {card.title}
                    </p>
                    <p className={`text-[11px] ${card.title === "Join meetings in a click" ? "text-white/80" : "text-gray-700"}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
              );
            })}
          </div>
        </div>

      </Container>
    </Section>
  );
}

