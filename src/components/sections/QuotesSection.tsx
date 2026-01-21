import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";

const quotes = [
  {
    label: "Writers",
    quote:
      "“I replaced half a dozen separate subscriptions with Setapp. All my writing tools are just there.”",
    name: "Jordan, copywriter",
  },
  {
    label: "Developers",
    quote:
      "“From diff tools to menu bar utilities, Setapp has an app for every part of my workflow.”",
    name: "Ravi, iOS engineer",
  },
  {
    label: "Teams",
    quote:
      "“New teammates get a Mac and Setapp. That’s our whole onboarding stack.”",
    name: "Chiara, ops lead",
  },
];

export function QuotesSection() {
  return (
    <Section className="py-20 lg:py-24 pt-10">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-subtle mb-2">
              In your words
            </p>
            <h2 className="text-2xl font-semibold">Why people stay with Setapp.</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {quotes.map((item) => (
            <Card key={item.label} className="bg-surface-subtle px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text-subtle mb-3">
                {item.label}
              </p>
              <p className="text-sm text-text-muted mb-4">{item.quote}</p>
              <p className="text-xs text-white">{item.name}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

