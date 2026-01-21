import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function PricingSection() {
  return (
    <Section id="pricing" className="py-20 lg:py-24 pt-6">
      <Container>
        <Card className="bg-surface-subtle px-10 py-10 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-subtle mb-2">
              Pricing
            </p>
            <h2 className="text-2xl font-semibold mb-2">
              Superpowers starting at $9.99/month.
            </h2>
            <p className="text-sm text-text-muted max-w-md">
              7 days free, then a flat monthly price. No per‑app licenses, no
              surprise upgrade fees, cancel anytime.
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 text-right">
            <div className="text-sm">
              <span className="text-3xl font-semibold mr-1">$9.99</span>
              <span className="text-text-subtle text-xs">/ month</span>
            </div>
            <Button size="lg">Start free trial</Button>
            <p className="text-[11px] text-text-subtle">
              No credit card charged during trial.
            </p>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

