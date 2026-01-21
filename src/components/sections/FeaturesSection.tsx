import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";

export function FeaturesSection() {
  return (
    <Section id="apps" className="py-20 lg:py-24 pt-0">
      <Container>
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-subtle mb-2">
            What you get
          </p>
          <h2 className="text-2xl font-semibold">
            Superpowers for your Mac, in one place.
          </h2>
        </div>

        <div className="grid grid-cols-[1.2fr_1fr] gap-8 items-start">
          <Card className="bg-gradient-to-br from-[#FF9ECF] via-[#E676FF] to-[#7C6BFF] p-[2px]">
            <div className="rounded-[26px] bg-surface-subtle p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-white">
                    Focus on deep work
                  </p>
                  <p className="text-[11px] text-text-subtle">
                    Apps that keep you in the flow.
                  </p>
                </div>
                <span className="rounded-full bg-black/30 px-3 py-1 text-[11px] text-text-muted">
                  Productivity
                </span>
              </div>

              <div className="rounded-2xl bg-black/50 px-4 py-3">
                <div className="flex items-center justify-between mb-2 text-[11px] text-text-muted">
                  <span>Tasks Today</span>
                  <span>12</span>
                </div>
                <div className="h-1.5 rounded-full bg-surface-soft overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-accent.pink" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-[11px] text-text-subtle">
                <div className="rounded-2xl bg-surface-soft px-3 py-2">
                  <p className="text-xs text-white mb-1">Plan your day</p>
                  <p>Time blocking, reminders, and more.</p>
                </div>
                <div className="rounded-2xl bg-surface-soft px-3 py-2">
                  <p className="text-xs text-white mb-1">Stay focused</p>
                  <p>Block distractions in one click.</p>
                </div>
                <div className="rounded-2xl bg-surface-soft px-3 py-2">
                  <p className="text-xs text-white mb-1">Review progress</p>
                  <p>See where your time really goes.</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col gap-6">
            <Card className="bg-surface-subtle p-5">
              <p className="text-xs font-medium mb-1 text-white">
                Keep everything secure
              </p>
              <p className="text-[11px] text-text-subtle mb-4">
                Password managers, backup tools, and security utilities keep
                your data safe without extra subscriptions.
              </p>
              <div className="flex items-center gap-3 text-[11px] text-text-muted">
                <div className="h-8 w-8 rounded-xl bg-accent.blue/20" />
                <div>
                  <p className="text-xs text-white">Encrypted vaults</p>
                  <p>Only you own your keys.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-surface-subtle p-5">
              <p className="text-xs font-medium mb-1 text-white">
                Create without friction
              </p>
              <p className="text-[11px] text-text-subtle mb-4">
                Design, write, capture ideas, and ship faster with creative apps
                that live right in your Dock.
              </p>
              <div className="flex items-center gap-3 text-[11px] text-text-muted">
                <div className="h-8 w-8 rounded-xl bg-accent.yellow/20" />
                <div>
                  <p className="text-xs text-white">Built for makers</p>
                  <p>From wireframes to final copy.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}

