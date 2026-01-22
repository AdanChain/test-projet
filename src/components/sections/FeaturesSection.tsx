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
      <Container className="relative w-full max-w-[1180px] min-h-[1519px] h-auto md:h-[1519px] px-8 xl:px-0 pt-8 md:pt-16">
        {/* Border top - respects container padding */}
        <div className="border-t border-[#E5E5E5] mb-8 md:mb-10"></div>
        {/* Section header - title on left, subtitle on right */}
        <div className="mb-10 flex flex-col md:flex-row items-start justify-between pt-6 md:pt-10 gap-4 md:gap-0">
          <h2 className="w-full md:w-[550px] !min-h-[52.84px] h-auto md:!h-[52.84px] max-w-full md:max-w-[550px] font-avenir font-semibold text-2xl md:text-[36px] leading-tight md:leading-[51.84px] tracking-[1px] text-white flex items-center pr-0 md:pr-[55px] pb-0 md:pb-[0.84px] pl-0 md:pl-[10px]">
            What you get on Setapp.
          </h2>
          <p className="w-full md:w-[600px] !min-h-[72.34px] h-auto md:!h-[72.34px] max-w-full md:max-w-[600px] font-avenir font-normal text-base md:text-[18px] leading-relaxed md:leading-[32.04px] text-white flex items-center pr-0 md:pr-[45px] pb-0 md:pb-[7.34px] pl-0 md:pl-[10px]">
            With a single monthly subscription at $9.99, you get 240+ apps for
            your Mac.
          </p>
        </div>

        <div className="relative md:absolute md:top-[260.83px] w-full max-w-[1200px] min-h-[1258px] h-auto md:h-[1258px] flex flex-col gap-5">
          {/* Top large card - Keep your Mac clean */}
          <Card className="overflow-hidden w-full max-w-[1180px] min-h-[605px] h-auto md:h-[605px] rounded-[20px] !bg-[#DF96AE] p-0 border-0 flex flex-col justify-between pt-8 md:pt-[60px]">
            <div className="pb-6">
              {/* Header with icon and text */}
              <div className="w-full max-w-[1180px] min-h-[80px] h-auto md:h-[80px] flex flex-col md:flex-row items-start gap-4 md:gap-8 mb-6 pr-4 pl-4 md:pr-[552px] md:pl-[60px]">
                <div className="w-[80px] h-[80px] flex items-center justify-center">
                  <Image
                    src="/imgs/TestimonialsSection/icon-cmm.png.png"
                    alt="Mac cleaning app icon"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full md:w-[456px] min-h-[73.54px] h-auto md:h-[73.54px]">
                  <p className="font-avenir font-semibold text-xl md:text-[26px] leading-tight md:leading-[40.04px] text-[#26262B] flex items-center">
                    Keep your Mac clean
                  </p>
                  <p className="font-avenir w-full md:w-[500px] font-normal text-base md:text-[18px] leading-relaxed md:leading-[32.04px] text-[#26262B] flex items-center">
                    Remove junk, scan for malware, wipe email attachments.
                  </p>
                </div>
              </div>

              {/* App screenshot */}
              <div className="relative mt-2 w-full max-w-[1180px] min-h-[465px] h-auto md:h-[465px] rounded-[26px] pr-4 pl-4 md:pr-[37px] md:pl-[37px] flex items-center justify-center">
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
          <div className="w-full max-w-[1200px] min-h-[633px] h-auto md:h-[633px] grid grid-cols-1 md:grid-cols-2 gap-5 pr-0 md:pr-[10px]">
            {bottomFeatureCards.map((card) => {
              // Set background color based on card title
              const bgColor = card.title === "Join meetings in a click"
                ? "!bg-[#384C75]"
                : "!bg-[#F4F0E4]";

              // Set padding-bottom based on card title
              const paddingBottom = card.title === "Write code"
                ? "pb-8 md:pb-16"
                : "pb-0";

              return (
                <Card
                  key={card.title}
                  className={`w-full max-w-[580px] min-h-[632.6px] h-auto md:h-[632.6px] flex flex-col items-center justify-between rounded-[20px] ${bgColor} px-4 md:px-10 ${paddingBottom} pt-8 md:pt-16 border-0 mx-auto`}
                >
                  {/* Screenshot at top */}
                  {card.title === "Write code" ? (
                    <div className="relative mb-4 w-full max-w-[580px] min-h-[400.52px] h-auto md:h-[400.52px] overflow-visible rounded-[20px] flex flex-col items-center">
                      <Image
                        src={card.screenshot}
                        alt={`${card.title} screenshot`}
                        fill
                        className="object-cover !top-[-20px]"
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-[580px] min-h-[160.54px] h-auto md:h-[160.54px] flex flex-col items-start gap-[19px] pr-4 pl-4 md:pr-[60px] md:pl-[60px]">
                      <Image
                        src={card.icon}
                        alt={`${card.title} icon`}
                        width={68}
                        height={68}
                      />
                      <div>
                        <p className={`font-avenir font-semibold text-xl md:text-[26px] leading-tight md:leading-[40.04px] tracking-[0%] flex items-center ${card.title === "Join meetings in a click" ? "text-white" : "text-[#26262B]"}`}>
                          {card.title}
                        </p>
                        <p className={`font-avenir font-normal text-base md:text-[18px] leading-relaxed md:leading-[32.04px] tracking-[0%] flex items-center ${card.title === "Join meetings in a click" ? "text-white" : "text-[#26262B]"}`}>
                          {card.description}
                        </p>
                </div>
              </div>
                  )}

                  {card.title === "Write code" ? (
                    <div className="w-full max-w-[580px] min-h-[172.54px] h-auto md:h-[172.54px] flex flex-col items-start gap-[19px] pr-4 pl-4 md:pr-[60px] md:pl-[60px]">
                      <Image
                        src={card.icon}
                        alt={`${card.title} icon`}
                        width={80}
                        height={80}
                      />
                      <div className="w-full md:w-[460px] min-h-[73.54px] h-auto md:h-[73.54px] pr-0 md:pr-[77px]">
                        <p className="font-avenir font-semibold text-xl md:text-[26px] leading-tight md:leading-[40.04px] tracking-[0%] text-[#26262B] flex items-center">
                          {card.title}
                        </p>
                        <p className="font-avenir w-full md:w-[500px] max-w-full md:max-w-[500px] font-normal text-base md:text-[18px] leading-relaxed md:leading-[32.04px] tracking-[0%] text-[#26262B] flex items-center">
                          {card.description}
                        </p>
                </div>
              </div>
                  ) : (
                    <div className="mb-0 w-full max-w-[580px] min-h-[360px] h-auto md:h-[360px] overflow-hidden rounded-[20px] flex items-center justify-center">

                      <Image
                        src={card.screenshot}
                        alt={`${card.title} screenshot`}
                        width={580}
                        height={360}
                        className="object-contain"
                      />
                    </div>
                  )}

            </Card>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}

