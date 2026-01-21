import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";

// User testimonials with proper styling
const userTestimonials = [
  {
    quote:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    author: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    platform: "Twitter",
    bgColor: "bg-purple-600",
    textColor: "text-white",
  },
  {
    quote:
      "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    author: "Mauricio Sanchez",
    handle: "@MauricioSanchez",
    platform: "Instagram",
    bgColor: "bg-orange-400",
    textColor: "text-black",
  },
  {
    quote:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    author: "Meredith Sweet",
    handle: "@meredith.sweet.sfba.realtor",
    platform: "Facebook",
    bgColor: "bg-purple-700",
    textColor: "text-white",
  },
];

export function QuotesSection() {
  return (
    <Section className="py-20 lg:py-24 pt-10">
      <Container>
        <div>

        </div>
      </Container>
    </Section>
  );
}

