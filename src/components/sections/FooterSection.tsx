import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import Image from "next/image";

// Footer link groups matching the design exactly
const linkGroups = {
  Home: [
    "How It Works",
    "All Apps",
    "Pricing",
    "Setapp for Teams",
    "Blog",
    "Podcast",
    "Download",
  ],
  About: [
    "Support",
    "Education Discount",
    "Family Plan",
    "For Developers",
    "Gift Cards",
    "Redeem Card or Code",
    "Setapp Reviews",
    "Affiliate Program",
    "Mac Developer Survey 2023",
  ],
  "Getting started with Setapp": [
    "Remote access to other Mac",
    "Fix macOS Ventura problems",
    "Best productivity apps",
    "Best YouTube downloaders",
    "Uninstall apps",
  ],
};

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <Section as="footer" className="py-20 lg:py-24 pt-10 pb-12 border-t border-border-subtle/60">
      <Container className="flex flex-col gap-10">
        {/* Top row: logo + newsletter */}
        <div className="flex items-start justify-between">
          {/* Left: logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-surface-subtle flex items-center justify-center">
                <Image
                  src="/imgs/header/logo.png"
                  alt="Setapp"
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-sm font-semibold tracking-wide">SETAPP</span>
            </div>
            <p className="text-sm text-text-muted mb-4 max-w-xs">
              Updates from our team, written with love ❤️
            </p>
            {/* Newsletter signup */}
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg bg-surface-subtle border border-border-subtle px-4 py-2 text-sm text-white placeholder:text-text-subtle focus:outline-none focus:border-white/40 w-64"
              />
              <button className="h-10 w-10 rounded-lg bg-white text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors">
                →
              </button>
            </div>
          </div>

          {/* Right: three link columns */}
          <div className="grid grid-cols-3 gap-10 text-[11px] text-text-subtle">
            {Object.entries(linkGroups).map(([section, links]) => (
              <div key={section}>
                <p className="mb-3 text-xs font-medium text-white">{section}</p>
                <ul className="space-y-1.5">
                  {links.map((label) => (
                    <li key={label}>
                      <a href="#" className="hover:text-white transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: copyright + legal + language + social */}
        <div className="flex items-center justify-between text-[11px] text-text-subtle pt-6 border-t border-border-subtle/60">
          {/* Left: DMCA badge + copyright + legal links */}
          <div className="flex flex-col gap-3">
            {/* DMCA badge */}
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-gray-700 text-white text-xs rounded">
                DMCA
              </button>
              <button className="px-3 py-1.5 bg-gray-600 text-white text-xs rounded">
                PROTECTED
              </button>
            </div>
            {/* Copyright and legal */}
            <div className="flex flex-col gap-1">
              <p className="text-[10px]">
                © {currentYear} Setapp Limited, 9 Tallow Street, Youghal, Co.
                Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex items-center gap-2">
                <a href="#" className="hover:text-white transition-colors text-[10px]">
                  Terms of Use
                </a>
                <span className="text-[10px]">•</span>
                <a href="#" className="hover:text-white transition-colors text-[10px]">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Right: language selector + social icons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-surface-subtle border border-border-subtle rounded-lg px-3 py-1.5">
              <Image
                src="/imgs/header/en.svg.png"
                alt="English"
                width={16}
                height={12}
              />
              <select className="bg-transparent text-xs text-white focus:outline-none cursor-pointer">
                <option>English</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-white text-xs font-bold">f</span>
              </button>
              <button
                className="h-7 w-7 rounded-full bg-sky-400 flex items-center justify-center hover:bg-sky-500 transition-colors"
                aria-label="Twitter"
              >
                <span className="text-white text-xs">🐦</span>
              </button>
              <button
                className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <span className="text-white text-xs">📷</span>
              </button>
              <button
                className="h-7 w-7 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <span className="text-white text-xs">▶</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

