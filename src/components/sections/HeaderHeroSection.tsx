import Image from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

// Main navigation items - keeping this simple for now
const mainNav = [
  "How it works",
  "All apps",
  "Pricing",
  "For Teams",
  "Blog",
  "Podcast",
];

export function HeaderHeroSection() {
  return (
    <Section className="pt-[17px] pb-24">
      {/* Header bar with nav */}
      <header className="border-border-subtle/60">
        <div className="mx-auto w-full max-w-[1440px] px-8">
          <div className="flex items-center justify-between h-[40px]">
            {/* Logo on the left */}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl flex items-center justify-center">
                <Image src="/imgs/header/logo.png" alt="Setapp" width={20} height={32} />
              </div>
            </div>

            {/* Center nav + right side actions */}
            <div className="flex items-center gap-3">
              <nav className="flex items-center h-[39.76px] justify-center gap-0" aria-label="Primary">
                {mainNav.map((label) => {
                  const href = `#${label.toLowerCase().replace(/\s+/g, "-")}`;
                  return (
                    <a
                      key={label}
                      href={href}
                      className="h-[26px] w-[93px] flex items-center justify-center text-[14px] text-white hover:opacity-80 transition-opacity"
                    >
                      {label}
                    </a>
                  );
                })}
              </nav>

              {/* Language selector, sign in, and CTA */}
              <div className="flex items-center gap-[25px]">
                <div className="h-4 w-px bg-border-subtle mx-3" />
                <Image src="/imgs/header/en.svg.png" alt="English" width={18} height={13.5} />
                <button className="text-[14px] text-text-muted hover:text-white transition-colors">
                  Sign In
                </button>
                <button
                  className="h-[32px] w-[101.03px] flex items-center justify-center text-[14px] text-white border border-white rounded-[6px] transition-colors hover:bg-white/10 pt-[5.5px] pr-[23.03px] pb-[6.5px] pl-[23px]"
                >
                  Try free
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero content - exact dimensions and positioning */}
      <div className="relative w-[1440px] h-[595.59px] bg-[#26262B] mx-auto mt-32 flex justify-center">
        {/* Logo container - centered horizontally */}
        <div className="absolute top-[15.63px] w-[128.75px] h-[128.75px] rounded-[16px] bg-[#000000] flex items-center justify-center">
          {/* Logo image - centered within container */}
          <Image
            src="/imgs/header-container/logo.png"
            alt="Setapp logo"
            width={60}
            height={93.44}
          />
        </div>

        {/* Left side floating cards - positioned relative to center */}
        {/* Top left - Work with pics (orange diamond) */}
        <div className="absolute top-[46px] left-[100px]">
          <Image 
            src="/imgs/header-container/pics.svg.png" 
            alt="Work with pics" 
            width={173} 
            height={173} 
            className="drop-shadow-lg"
          />
        </div>
        {/* Small pink circular icon - slightly overlapping */}
        <div className="absolute top-[177px] left-[100px] z-10">
          <Image 
            src="/imgs/header-container/macpaw.svg.png" 
            alt="Macpaw" 
            width={58} 
            height={58} 
            className="drop-shadow-lg"
          />
        </div>
        {/* VPN PDF AD BLOCKER (light blue diamond) */}
        <div className="absolute top-[169.64px] left-[204px] pt-0 pl-0">
          <Image 
            src="/imgs/header-container/pdf.svg.png" 
            alt="PDF VPN Ad Blocker" 
            width={141.71} 
            height={141.71} 
            className="drop-shadow-lg"
          />
        </div>
        {/* Boost teamwork (light blue hexagonal) */}
        <div className="absolute top-[338.51px] left-[95px] pt-0 pb-0">
          <Image 
            src="/imgs/header-container/teamwork.svg.png" 
            alt="Boost teamwork" 
            width={226.93} 
            height={113.97} 
            className="drop-shadow-lg"
          />
        </div>
        {/* Stay secure (light green diamond) */}
        <div className="absolute top-[418px] left-[100px]">
          <Image 
            src="/imgs/header-container/secure.svg.png" 
            alt="Stay secure" 
            width={175} 
            height={176} 
            className="drop-shadow-lg"
          />
        </div>

        {/* Right side floating cards - positioned relative to center */}
        {/* Top right - Fix wifi (light orange rectangle) */}
        <div className="absolute top-[63.84px] right-[65px]">
          <Image 
            src="/imgs/header-container/wifi.svg.png" 
            alt="Fix wifi" 
            width={201.52} 
            height={126.33} 
            className="drop-shadow-lg"
          />
        </div>
        {/* Plan your day (light blue rectangle) */}
        <div className="absolute top-[124px] right-[190px]">
          <Image 
            src="/imgs/header-container/plan.svg.png" 
            alt="Plan your day" 
            width={169} 
            height={169} 
            className="drop-shadow-lg"
          />
        </div>
        {/* Convert HEIC to JPG (white jagged circle) */}
        <div className="absolute top-[235px] right-[45px] z-10">
          <Image 
            src="/imgs/header-container/converter.svg.png" 
            alt="Convert HEIC to JPG" 
            width={155} 
            height={153} 
            className="drop-shadow-lg"
          />
        </div>
        {/* Manage your Mac (light pink rectangle) - positioned below Convert HEIC to JPG */}
        <div className="absolute top-[336px] right-[100px] z-0">
          <Image 
            src="/imgs/header-container/manage.svg.png" 
            alt="Manage your Mac" 
            width={230} 
            height={128} 
            className="drop-shadow-lg"
          />
        </div>
        {/* Code easier (light orange square) */}
        <div className="absolute top-[440px] right-[120px] z-[1]">
          <Image 
            src="/imgs/header-container/code.svg.png" 
            alt="Code easier" 
            width={152} 
            height={153} 
            className="drop-shadow-lg"
          />
        </div>

        {/* Headline - exact positioning and styling */}
        <div className="absolute top-[199px] left-1/2 -translate-x-1/2 w-[680px] h-[204.51px] max-w-[680px] flex items-center justify-center pr-[56.64px] pb-[0.51px] pl-[56.36px]">
          <h1 className="font-avenir font-bold text-[64px] text-white leading-[67.84px] tracking-[1px] text-center">
            Dozens of apps.
            <br />
            One subscription.
            <br />
            $9.99
          </h1>
        </div>

        {/* CTA buttons container - centered horizontally */}
        <div className="absolute top-[451.51px] left-1/2 -translate-x-1/2 w-[365.93px] h-[52px] flex items-center gap-4">
          <button className="w-[209.93px] h-[52px] flex items-center justify-center rounded-[6px] bg-white border border-white pt-[14px] pr-[30.93px] pb-[14px] pl-[32px] text-[14px] font-medium text-black hover:bg-gray-100 transition-colors">
            Try free for 7 days
          </button>
          <button className="w-[62px] h-[52px] flex items-center justify-center rounded-[6px] bg-white border border-white pt-[10px] pr-[15px] pb-[10px] pl-[15px] hover:bg-gray-100 transition-colors">
            <Image
              src="/imgs/header-container/apple.png"
              alt="Sign in with Apple"
              width={24}
              height={24}
            />
          </button>
          <button className="w-[62px] h-[52px] flex items-center justify-center rounded-[6px] bg-white border border-white pt-[10px] pr-[15px] pb-[10px] pl-[15px] hover:bg-gray-100 transition-colors">
            <Image
              src="/imgs/header-container/google.svg.png"
              alt="Sign in with Google"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Subheading */}
        <p className="absolute top-[531.01px] left-1/2 -translate-x-1/2 w-[320px] h-[65px] max-w-[320px] font-avenir font-normal text-[18px] leading-[32.04px] text-gray-400 text-center flex items-center justify-center pr-[1.28px] pl-[1.72px]">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>
      </div>
    </Section>
  );
}

