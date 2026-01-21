import Image from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function HeaderHeroSection() {
  return (
    <Section className="pt-[17px] pb-24">
      <header className="border-b border-border-subtle/60">
        <div className="mx-auto w-full max-w-[1440px] px-8">
          <div className="flex items-center justify-between h-[40px]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl flex items-center justify-center">
                <Image src="/imgs/header/logo.png" alt="Setapp" width={20} height={32} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <nav
                className="flex items-center h-[39.76px] justify-center gap-0"
                aria-label="Primary"
              >
                <a
                  href="#how-it-works"
                  className="h-[26px] w-[93px] flex items-center justify-center text-xs text-text-muted hover:text-white transition-colors"
                >
                  How it works
                </a>
                <a
                  href="#apps"
                  className="h-[26px] w-[93px] flex items-center justify-center text-xs text-text-muted hover:text-white transition-colors"
                >
                  All apps
                </a>
                <a
                  href="#pricing"
                  className="h-[26px] w-[93px] flex items-center justify-center text-xs text-text-muted hover:text-white transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#teams"
                  className="h-[26px] w-[93px] flex items-center justify-center text-xs text-text-muted hover:text-white transition-colors"
                >
                  For Teams
                </a>
                <a
                  href="#blog"
                  className="h-[26px] w-[93px] flex items-center justify-center text-xs text-text-muted hover:text-white transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#podcast"
                  className="h-[26px] w-[93px] flex items-center justify-center text-xs text-text-muted hover:text-white transition-colors"
                >
                  Podcast
                </a>
              </nav>

              <div className="flex items-center gap-0">
                <div className="h-4 w-px bg-border-subtle mx-3" />
                <div className="flex items-center">
                  <Image src="/imgs/header/en.svg.png" alt="en" width={18} height={13.5} />
                </div>
                <button className="text-xs text-text-muted hover:text-white transition-colors">
                  Sign In
                </button>
                <button
                  className="ml-3 h-[32px] w-[101.03px] flex items-center justify-center text-xs text-white border border-white rounded-[6px] transition-colors hover:bg-white/10 pt-[5.5px] pr-[23.03px] pb-[6.5px] pl-[23px]"
                >
                  Try free
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>

      <Container className="mt-16 flex gap-16">
        <div className="flex-1">
          <Badge tone="pink" className="mb-5">
            Dozens of apps. One subscription.
          </Badge>
          <h1 className="text-[40px] leading-[1.1] font-semibold mb-4">
            Do more with your Mac for just $9.99/month.
          </h1>
          <p className="text-sm text-text-muted max-w-md mb-8">
            Unlock a curated collection of premium Mac apps for productivity,
            creativity, and everything in between. No clutter, no ads, just the
            tools you need.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <Button size="lg">Get Setapp for Mac</Button>
            <button className="text-xs text-text-muted hover:text-white underline-offset-4 hover:underline">
              View full app catalog
            </button>
          </div>
          <p className="text-[11px] text-text-subtle">
            7‑day free trial, then $9.99/month. Cancel anytime.
          </p>
        </div>

        <div className="flex-1">
          <Card className="relative overflow-hidden bg-gradient-to-br from-[#FF9ECF] via-[#E676FF] to-[#7C6BFF] p-[2px]">
            <div className="h-full w-full rounded-[26px] bg-surface-subtle p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-2xl bg-white/10 flex items-center justify-center">
                    <span className="text-sm font-semibold">S</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Setapp on Mac</p>
                    <p className="text-[11px] text-text-subtle">
                      Your subscription hub
                    </p>
                  </div>
                </div>
                <Button size="md" variant="secondary">
                  Open
                </Button>
              </div>
              <div className="relative mt-2 rounded-2xl bg-black/50 p-4">
                <div className="flex items-center justify-between mb-3 text-[11px] text-text-muted">
                  <span>Productivity</span>
                  <span>Installed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-pink-400/80" />
                  <div className="text-xs">
                    <p className="font-medium">Focus Timer</p>
                    <p className="text-text-subtle">
                      Block distractions, stay in the zone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-[11px] text-text-subtle">
                <div className="rounded-2xl bg-surface-soft px-3 py-2">
                  <p className="text-xs text-white mb-1">200+ apps</p>
                  <p>Curated tools for every workflow.</p>
                </div>
                <div className="rounded-2xl bg-surface-soft px-3 py-2">
                  <p className="text-xs text-white mb-1">One price</p>
                  <p>No extra upgrade fees, ever.</p>
                </div>
                <div className="rounded-2xl bg-surface-soft px-3 py-2">
                  <p className="text-xs text-white mb-1">Always updated</p>
                  <p>Apps stay fresh automatically.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

