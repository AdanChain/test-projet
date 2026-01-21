import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <Section id="stories" className="pt-10">
      <Container>
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-subtle mb-2">
            Your Setapp journey
          </p>
          <h2 className="text-2xl font-semibold">
            See how creators and teams stay in flow.
          </h2>
        </div>

        <Card className="grid grid-cols-[1.1fr_0.9fr] gap-10 items-center bg-surface-subtle px-10 py-10">
          <div>
            <p className="text-sm text-text-muted mb-4">
              “Setapp is like having a fully stocked toolbox on my Mac. I
              stopped hunting for one-off apps and just focus on the work that
              matters.”
            </p>
            <p className="text-sm font-medium mb-1 text-white">
              Alex Martin
            </p>
            <p className="text-xs text-text-subtle">Designer &amp; founder</p>

            <div className="mt-8 flex items-center gap-4 text-[11px] text-text-subtle">
              <button className="h-8 w-8 rounded-full border border-border-subtle flex items-center justify-center hover:border-white">
                &#8592;
              </button>
              <button className="h-8 w-8 rounded-full border border-border-subtle flex items-center justify-center hover:border-white">
                &#8594;
              </button>
              <div className="ml-4 flex gap-1">
                <span className="h-1.5 w-4 rounded-full bg-white" />
                <span className="h-1.5 w-2 rounded-full bg-surface-soft" />
                <span className="h-1.5 w-2 rounded-full bg-surface-soft" />
              </div>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl bg-gradient-to-br from-[#B28CFF] via-[#FF9ECF] to-[#FED7AA] overflow-hidden flex items-end justify-center">
            <div className="relative h-52 w-40">
              <Image
                src="/imgs/Frame.png"
                alt="Customer portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

