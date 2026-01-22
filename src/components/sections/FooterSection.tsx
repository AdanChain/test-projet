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
    <Section as="footer" className="flex items-center justify-center pt-0 pr-4 pl-4 pb-0 border-t border-border-subtle/60 min-h-[629.84px] h-auto md:h-[629.84px] opacity-100 bg-[#2B2D32]">
      <div className="flex flex-col justify-center gap-6 md:gap-10 w-full max-w-[1440px] min-h-[529.84px] h-auto md:h-[529.84px] opacity-100 mx-auto px-4 md:px-0">
        {/* Top row: logo + newsletter */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-[1380px] min-h-[325px] h-auto md:h-[325px] opacity-100 gap-6 md:gap-0">
          {/* Left: logo */}
          <div className="w-full md:w-[460px] max-w-full md:max-w-[460px] min-h-[325px] h-auto md:h-[325px] opacity-100 flex flex-col gap-8 md:gap-[78px] pr-0 md:pr-[10px] pb-4 md:pb-[109px] pl-0 md:pl-[10px]">
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
                  className="flex-1 h-[50.23px] opacity-100 pt-[14px] pr-[12px] pb-[14.23px] pl-[12px] rounded-tl-[6px] rounded-bl-[6px] bg-[#404547] text-sm text-white placeholder:text-gray-400 focus:outline-none border-0"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-4 md:gap-y-0 text-[11px] text-white min-h-[100%] h-auto md:h-[100%] w-full md:w-auto">
            {Object.entries(linkGroups).map(([section, links]) => (
              <div key={section} className="h-full flex flex-col">
                <p className="font-avenir font-medium text-white text-[16px] leading-[32px] tracking-[0%] align-middle mb-1 w-full max-w-full">{section}</p>
                <ul className="flex flex-col gap-0 flex-1">
                  {links.map((label) => (
                    <li key={label} className="mb-0">
                      <a href="#" className="font-avenir font-normal text-white text-[16px] leading-[32px] tracking-[0%] align-middle hover:text-white transition-colors block">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* DMCA badge */}
          <div className="flex items-center rounded overflow-hidden w-full sm:w-[150px] h-[26px] opacity-100 gap-[1px]">
            <button className="font-arial font-bold text-white text-[11px] leading-[26px] tracking-[0%] align-middle uppercase bg-[#969799] rounded-l border-0 px-3 py-0 h-full">
              DMCA
            </button>
            <button className="font-arial font-bold text-white text-[11px] leading-[26px] tracking-[0%] align-middle uppercase bg-[#404547] rounded-r border-0 px-3 py-0 w-[83.83999633789062px] h-[26px] opacity-100">
              PROTECTED
            </button>
          </div>
          <div className="flex items-center gap-2 rounded-lg px-3 py-1.5">
            <Image
              src="/imgs/header/en.svg.png"
              alt="English"
              width={16}
              height={12}
            />
            <select className="font-avenir font-normal bg-transparent text-white text-[16px] leading-[28.48px] tracking-[0%] align-middle focus:outline-none cursor-pointer appearance-none pr-4">
              <option>English</option>
            </select>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="flex-shrink-0">
              <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="flex items-start justify-between text-[11px] pt-6 border-t border-[#E5E5E5]">

          <div className="flex flex-col gap-4 w-full max-w-full">
            {/* Copyright and legal */}
            <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-0">
              <p className="font-avenir font-normal text-white text-[10px] sm:text-[12px] leading-[21.36px] tracking-[0%] align-middle opacity-100 max-w-full">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex gap-2">
                <button
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Image src="/imgs/footer/Vector.png" alt="Facebook" width={26} height={26} className="filter brightness-0 invert opacity-45" />
                </button>
                <button
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Image src="/imgs/footer/Vector (1).png" alt="Twitter" width={26} height={26} className="filter brightness-0 invert opacity-45" />
                </button>
                <button
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Image src="/imgs/footer/Vector (2).png" alt="Instagram" width={26} height={26} className="filter brightness-0 invert opacity-45" />
                </button>
                <button
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="YouTube"
                >
                  <Image src="/imgs/footer/Vector (3).png" alt="YouTube" width={26} height={26} className="filter brightness-0 invert opacity-45" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <a href="#" className="font-avenir font-normal text-[#969799] text-[12px] leading-[21.36px] tracking-[0%] align-middle hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="font-avenir font-normal text-[#969799] text-[12px] leading-[21.36px] tracking-[0%] align-middle hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

