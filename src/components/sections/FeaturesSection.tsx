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
          <h2 className="text-2xl font-semibold">What you get on Setapp.</h2>
          <p className="max-w-sm text-sm text-text-muted">
            With a single monthly subscription at $9.99, you get 240+ apps for
            your Mac.
          </p>
        </div>

        <div className="absolute top-[260.83px] left-[-10px] w-[1200px] h-[1258px] flex flex-col gap-5">
          {/* Top large card - Keep your Mac clean */}
          <Card className="overflow-hidden w-[1180px] h-[605px] rounded-[20px] bg-[#DF96AE] p-0 shadow-card-soft border-0 flex flex-col justify-between pt-[60px]">
            <div className="px-10 pb-6">
              {/* Header with icon and text */}
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-white/80 flex items-center justify-center shadow-card">
                  <Image
                    src="/imgs/TestimonialsSection/icon-cmm.png.png"
                    alt="Mac cleaning app icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-black">
                    Keep your Mac clean
                  </p>
                  <p className="text-sm text-black/80">
                    Remove junk, scan for malware, wipe email attachments.
                  </p>
                </div>
              </div>

              {/* App screenshot */}
              <div className="relative mt-2 rounded-[26px] bg-gradient-to-br from-[#C162FF] via-[#B14FE9] to-[#F37FB0] shadow-card-soft overflow-hidden h-96">
                <Image
                  src="/imgs/TestimonialsSection/cmm-big@2x.png.png"
                  alt="CleanMyMac application interface"
                  fill
                  className="object-cover"
                />
              </div>
          </div>
          </Card>

          {/* Bottom row - two feature cards */}
          <div className="grid grid-cols-2 gap-5">
            {bottomFeatureCards.map((card) => (
              <Card
                key={card.title}
                className={`flex flex-col rounded-[32px] ${card.bgColor} px-10 py-8 shadow-card-soft border-0`}
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
                    <p
                      className={`mb-1 text-sm font-semibold ${card.bgColor === "bg-blue-900" ? "text-white" : "text-gray-900"
                        }`}
                    >
                      {card.title}
                    </p>
                    <p
                      className={`text-[11px] ${card.bgColor === "bg-blue-900"
                          ? "text-text-subtle"
                          : "text-gray-700"
                        }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
}

