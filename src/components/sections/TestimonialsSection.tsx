import Image from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";

const secondaryFeatureCards = [
  {
    title: "Write code",
    description: "Create applications in more than 25 languages.",
    image: "/imgs/code.svg.png",
  },
  {
    title: "Join meetings in a click",
    description: "Quickly access links to your meetings from menu bar.",
    image: "/imgs/teamwork.svg.png",
  },
];

export function TestimonialsSection() {
  return (
    <Section id="stories" className="py-20 lg:py-24">
      <Container>
        <div>
          
        </div>
      </Container>
    </Section>
  );
}
