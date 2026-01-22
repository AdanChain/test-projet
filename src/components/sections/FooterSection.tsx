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
    <Section as="footer" className="flex items-center justify-center pt-0 pr-4 pl-4 pb-0 border-t border-border-subtle/60 h-[629.84px] opacity-100 bg-[#2B2D32]">
      <div className="flex flex-col justify-center gap-10 w-[1440px] h-[629.84px] opacity-100 mx-auto" style={{ width: '1440px', maxWidth: '1440px', height: '529.84px' }}>
        {/* Top row: logo + newsletter */}
        <div className="flex items-start justify-between w-[1380px] h-[325px] opacity-100">
          {/* Left: logo */}
          <div className="w-[460px] h-[325px] max-w-[460px] opacity-100 flex flex-col gap-[78px] pr-[10px] pb-[109px] pl-[10px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl flex items-center justify-start">
                <Image
                  src="/imgs/header/logo.png"
                  alt="Setapp"
                  width={20}
                  height={32}
                />
              </div>
              <Image
                src="/imgs/footer/Vector-4.png"
                alt="Setapp"
                width={69.16}
                height={13}
              />
            </div>
            <div className="w-full max-w-full">
              <p className="font-avenir font-normal text-white text-[16px] leading-[28.48px] tracking-[0%] align-middle mb-4 w-full max-w-full">
                Updates from our team, written with love <span className="text-orange-500">🧡</span>
              </p>

              <div className="flex items-center w-full max-w-full rounded-lg overflow-hidden border border-white/20">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[388px] h-[50.23px] opacity-100 pt-[14px] pr-[12px] pb-[14.23px] pl-[12px] rounded-tl-[6px] rounded-bl-[6px] bg-[#404547] text-sm text-white placeholder:text-gray-400 focus:outline-none border-0"
                />
                <button className="w-[54px] h-[50.23px] opacity-100 pt-[18.12px] pr-[23px] pb-[18.11px] pl-[23px] rounded-tr-[6px] rounded-br-[6px] border border-[1px] bg-white text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0">
                  <svg width="8" height="14" viewBox="0 0 14 24" fill="none" className="opacity-100 w-full h-full">
                    <path d="M2 2L12 12L2 22" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" transform="scale(1, 1)" className="w-full h-full" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* Right: three link columns */}
          <div className="grid grid-cols-3 gap-10 text-[11px] text-white">
            {Object.entries(linkGroups).map(([section, links]) => (
              <div key={section}>
                <p className="font-avenir font-medium text-white text-[16px] leading-[32px] tracking-[0%] align-middle mb-3 w-full max-w-full">{section}</p>
                <ul className="space-y-1.5">
                  {links.map((label) => (
                    <li key={label}>
                      <a href="#" className="font-avenir font-normal text-white text-[16px] leading-[32px] tracking-[0%] align-middle hover:text-white transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center justify-between gap-4">
          {/* DMCA badge */}
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-gray-700 text-white text-xs rounded">
              DMCA
            </button>
            <button className="px-3 py-1.5 bg-gray-600 text-white text-xs rounded">
              PROTECTED
            </button>
          </div>
          <div className="flex items-center gap-2 bg-[#1A1B21] border border-white/20 rounded-lg px-3 py-1.5">
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
        </div>
        {/* Bottom row: copyright + legal + language + social */}
        <div className="flex items-start justify-between text-[11px] pt-6 border-t border-gray-600">
          {/* Left: DMCA badge + copyright + legal links */}


          {/* Right: language selector + social icons */}
          <div className="flex items-center gap-4">
            {/* Copyright and legal */}
            <div className="flex flex-col gap-1">
              <p className="text-[10px] text-white">
                © {currentYear} Setapp Limited, 9 Tallow Street, Youghal, Co.
                Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex items-center gap-2">
                <a href="#" className="hover:text-white transition-colors text-[10px] text-white">
                  Terms of Use
                </a>
                <span className="text-[10px] text-white">•</span>
                <a href="#" className="hover:text-white transition-colors text-[10px] text-white">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                className="h-7 w-7 rounded-full border border-white/30 bg-[#1A1B21] flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Image src="/imgs/footer/Vector.png" alt="Facebook" width={16} height={16} className="filter brightness-0 invert" />
              </button>
              <button
                className="h-7 w-7 rounded-full border border-white/30 bg-[#1A1B21] flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Image src="/imgs/footer/Vector (1).png" alt="Twitter" width={16} height={16} className="filter brightness-0 invert" />
              </button>
              <button
                className="h-7 w-7 rounded-full border border-white/30 bg-[#1A1B21] flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Image src="/imgs/footer/Vector (2).png" alt="Instagram" width={16} height={16} className="filter brightness-0 invert" />
              </button>
              <button
                className="h-7 w-7 rounded-full border border-white/30 bg-[#1A1B21] flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <Image src="/imgs/footer/Vector (3).png" alt="YouTube" width={16} height={16} className="filter brightness-0 invert" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

