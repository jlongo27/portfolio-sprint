"use client";

import AnimatedButton from "./AnimatedButton";
import FooterReveal from "./FooterReveal";
import { useContactModal } from "./ContactModalContext";

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle  = { fontFamily: "var(--font-geist-mono, monospace)" };

export default function Footer() {
  const { openModal } = useContactModal();
  return (
    <FooterReveal>
      <footer className="bg-black overflow-hidden [--btn-bg:#ffffff] [--btn-fg:#000000]">

        {/* ── MOBILE ── */}
        <div className="md:hidden px-4 pt-12 flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 w-[298px]">
                <p className="text-white text-[24px] font-light italic leading-[1.1] tracking-[-0.96px] uppercase" style={interStyle}>
                  Have a{" "}<span className="font-black not-italic">project</span>{" "}in mind?
                </p>
                <AnimatedButton onClick={openModal} className="self-start text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-full whitespace-nowrap" style={interStyle}>
                  Let&apos;s talk
                </AnimatedButton>
              </div>
              {["Facebook", "Instagram", "X.com", "LinkedIn"].map((link) => (
                <a key={link} href="#" className="text-white text-[18px] font-normal leading-[1.1] tracking-[-0.72px] uppercase" style={interStyle}>
                  {link}
                </a>
              ))}
            </div>
            <hr className="border-t border-white w-full m-0" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-[34px] items-center justify-center pb-8">
              <a href="#" className="text-white text-[12px] uppercase tracking-[-0.48px] underline leading-[1.1]" style={interStyle}>Licences</a>
              <a href="#" className="text-white text-[12px] uppercase tracking-[-0.48px] underline leading-[1.1]" style={interStyle}>Privacy Policy</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white text-[10px] uppercase leading-[1.1]" style={monoStyle}>[ Coded By Claude ]</span>
              <p className="text-white font-semibold capitalize leading-[0.8] tracking-[-0.06em] text-[24.38vw]" style={interStyle}>H.Studio</p>
            </div>
          </div>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:flex flex-col px-8 pt-12 gap-[120px]">
          <div className="flex flex-col gap-12">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3 w-[298px]">
                <p className="text-white text-[24px] font-light italic leading-[1.1] tracking-[-0.96px] uppercase" style={interStyle}>
                  Have a{" "}<span className="font-black not-italic">project</span>{" "}in mind?
                </p>
                <AnimatedButton onClick={openModal} className="self-start text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-full whitespace-nowrap" style={interStyle}>
                  Let&apos;s talk
                </AnimatedButton>
              </div>
              <div className="flex flex-col gap-3 items-center">
                {["Facebook", "Instagram"].map((link) => (
                  <a key={link} href="#" className="text-white text-[18px] font-normal leading-[1.1] tracking-[-0.72px] uppercase hover:opacity-60 transition-opacity" style={interStyle}>{link}</a>
                ))}
              </div>
              <div className="flex flex-col gap-3 items-end">
                {["X.com", "LinkedIn"].map((link) => (
                  <a key={link} href="#" className="text-white text-[18px] font-normal leading-[1.1] tracking-[-0.72px] uppercase hover:opacity-60 transition-opacity" style={interStyle}>{link}</a>
                ))}
              </div>
            </div>
            <hr className="border-t border-white w-full m-0" />
          </div>
          <div className="flex items-end justify-between">
            <div className="relative overflow-hidden flex-1 h-[15.21vw]">
              <div className="absolute left-0 inset-y-0 w-[15px] flex items-center justify-center">
                <span className="-rotate-90 whitespace-nowrap text-white text-[10px] uppercase leading-[1.1]" style={monoStyle}>[ Coded By Claude ]</span>
              </div>
              <p className="absolute whitespace-nowrap text-white font-semibold capitalize leading-[0.8] text-[20.14vw]"
                style={{ ...interStyle, top: "50%", transform: "translateY(-50%)", letterSpacing: "-0.06em", left: "1rem" }}>
                H.Studio
              </p>
            </div>
            <div className="flex gap-[34px] items-center shrink-0 pb-8">
              <a href="#" className="text-white text-[12px] uppercase tracking-[-0.48px] underline leading-[1.1]" style={interStyle}>Licences</a>
              <a href="#" className="text-white text-[12px] uppercase tracking-[-0.48px] underline leading-[1.1]" style={interStyle}>Privacy Policy</a>
            </div>
          </div>
        </div>

      </footer>
    </FooterReveal>
  );
}
