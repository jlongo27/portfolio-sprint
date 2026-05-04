import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import AnimatedButton from "../AnimatedButton";
import AboutPortrait from "../AboutPortrait";
import BlurReveal from "../BlurReveal";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "About — Harvey Specter",
  description: "Creative director, photographer, and founder of H.Studio.",
};

const portrait     = "https://www.figma.com/api/mcp/asset/2a20a424-0066-41c7-ad8b-3788f170f1b5";
const fullBleed    = "https://www.figma.com/api/mcp/asset/62c7402e-30ef-488e-b4ce-71ee45520f76";

const interStyle   = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle    = { fontFamily: "var(--font-geist-mono, monospace)" };
const playfairStyle = { fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 400 };

function CornerBracket({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M14 2H2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const philosophy = [
  {
    num: "[ 01 ]",
    title: "Craft Over Everything",
    body: "No shortcuts. Every decision — from kerning to camera angle — is deliberate. Great work is the result of a thousand small choices made with intention.",
  },
  {
    num: "[ 02 ]",
    title: "Story Before Aesthetics",
    body: "Beautiful work without narrative is decoration. Every project starts with understanding what needs to be said, then finding the most compelling way to say it.",
  },
  {
    num: "[ 03 ]",
    title: "Partnership First",
    body: "The best creative outcomes emerge from genuine collaboration. We bring the expertise; you bring the vision. Neither alone is enough.",
  },
];

const expertise = [
  "Brand Identity & Strategy",
  "Photography & Art Direction",
  "Web Design & Engineering",
  "Creative Campaign Direction",
  "Visual Storytelling",
];

const stats = [
  { value: "8+",   label: "Years in industry" },
  { value: "120+", label: "Brands worked with" },
  { value: "4",    label: "Award categories" },
  { value: "3",    label: "Continents served" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <AboutHero />

      {/* ── Statement ── */}
      <section className="bg-white px-4 md:px-8 py-12 md:py-[120px]">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 items-end w-full">
            <span className="text-[14px] text-[#1f1f1f] text-right uppercase leading-[1.1]" style={monoStyle}>
              [ 8+ years in industry ]
            </span>
            <hr className="w-full border-t border-black m-0" />
          </div>
          <p
            className="text-[32px] md:text-[3.5vw] font-light not-italic leading-[1.1] tracking-[-0.06em] uppercase max-w-[900px]"
            style={interStyle}
          >
            A creative director who transforms brands through{" "}
            <span style={playfairStyle}>craft,</span>{" "}
            photography, and strategy. Based in Chicago.{" "}
            Available worldwide.
          </p>
        </div>
      </section>

      {/* ── Bio + Portrait ── */}
      <section className="bg-white px-4 md:pl-8 md:pr-0 py-12 md:py-[80px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">

          {/* Left: text */}
          <div className="flex flex-col gap-8 md:flex-1 md:max-w-[520px]">

            <span className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>
              [ Background ]
            </span>

            <div className="flex flex-col gap-5">
              <p className="text-[14px] text-[#1f1f1f] leading-[1.5] tracking-[-0.56px] not-italic" style={interStyle}>
                Born and raised on the south side of Chicago, Harvey developed an eye for the gritty and the beautiful in equal measure. His path into creative direction came not through academia but through obsession — carrying a camera everywhere, studying design relentlessly, and building brands from the ground up.
              </p>
              <p className="text-[14px] text-[#1f1f1f] leading-[1.5] tracking-[-0.56px] not-italic" style={interStyle}>
                Over eight years, that obsession became H.Studio: a full-service creative agency serving brands that refuse to be ordinary. Every engagement is an opportunity to make something that endures — work that still feels right five years from now.
              </p>
              <p className="text-[14px] text-[#1f1f1f] leading-[1.5] tracking-[-0.56px] not-italic" style={interStyle}>
                When he&apos;s not in the studio, Harvey shoots on 35mm film, consults for early-stage startups on brand positioning, and mentors emerging designers through a quarterly workshop series.
              </p>
            </div>

            <AnimatedButton className="self-start text-[14px] font-medium tracking-[-0.56px] px-5 py-3 rounded-full" style={interStyle}>
              Let&apos;s talk
            </AnimatedButton>
          </div>

          {/* Right: portrait, bleeds to viewport edge on desktop */}
          <AboutPortrait
            src={portrait}
            className="w-full md:w-[436px] md:mx-0 -mx-4 md:-mx-0"
            style={{ aspectRatio: "436/614", width: undefined }}
          />

        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white px-4 md:px-8 py-12 md:py-[80px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 items-start w-full">
            <hr className="w-full border-t border-black m-0" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-black pt-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2 md:px-8 first:md:pl-0 last:md:pr-0">
                <span
                  className="text-[56px] md:text-[4vw] font-light not-italic leading-[1] tracking-[-0.06em] text-black"
                  style={interStyle}
                >
                  {s.value}
                </span>
                <span className="text-[12px] text-[#1f1f1f] uppercase leading-[1.2]" style={monoStyle}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed photo ── */}
      <section className="w-full overflow-hidden">
        <BlurReveal className="relative w-full aspect-[3/4] md:aspect-video">
          <img
            src={fullBleed}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
          />
        </BlurReveal>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-12 [--btn-bg:#ffffff] [--btn-fg:#000000]">

        <span className="text-[14px] text-white uppercase leading-[1.1]" style={monoStyle}>
          [ Philosophy ]
        </span>

        <div
          className="flex items-center justify-between w-full text-white uppercase font-light not-italic tracking-[-0.08em]"
          style={{ ...interStyle, fontSize: "clamp(32px, 6.67vw, 96px)", lineHeight: "normal" }}
        >
          <span>[3]</span>
          <span>Principles</span>
        </div>

        <div className="flex flex-col gap-12 w-full">
          {philosophy.map((p) => (
            <div key={p.num} className="flex flex-col gap-[9px] w-full">
              <span className="text-[14px] text-white uppercase leading-[1.1]" style={monoStyle}>
                {p.num}
              </span>
              <hr className="w-full border-t border-white m-0" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between pt-[9px]">
                <p
                  className="text-[36px] text-white font-bold italic leading-[1.1] tracking-[-1.44px] uppercase shrink-0"
                  style={interStyle}
                >
                  {p.title}
                </p>
                <p
                  className="text-[14px] text-white leading-[1.5] tracking-[-0.56px] not-italic md:max-w-[480px]"
                  style={interStyle}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── Expertise ── */}
      <section className="bg-[#f3f3f3] px-4 md:px-8 py-12 md:py-[80px]">
        <div className="flex flex-col gap-8">

          <div className="flex flex-col gap-3 items-end w-full">
            <span className="text-[14px] text-[#1f1f1f] text-right uppercase leading-[1.1]" style={monoStyle}>
              [ Expertise ]
            </span>
            <hr className="w-full border-t border-black m-0" />
          </div>

          <div className="flex flex-col w-full">
            {expertise.map((item, i) => (
              <div key={item}>
                <div className="relative overflow-hidden group cursor-default">
                  {/* Black fill slides in from the left on hover */}
                  <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />

                  <div className="relative flex items-center justify-between py-5 md:py-7">
                    <div className="flex items-center gap-6">
                      <span
                        className="text-[12px] text-[#1f1f1f] group-hover:text-white uppercase leading-[1.1] tabular-nums transition-colors duration-300 delay-100"
                        style={monoStyle}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="text-[24px] md:text-[2.5vw] font-light not-italic text-black group-hover:text-white uppercase tracking-[-0.06em] leading-[1] transition-colors duration-300 delay-100"
                        style={interStyle}
                      >
                        {item}
                      </span>
                    </div>
                    <div className="text-[#1f1f1f] group-hover:text-white transition-colors duration-300 delay-100">
                      <CornerBracket className="rotate-90" />
                    </div>
                  </div>
                </div>
                {i < expertise.length - 1 && <hr className="border-t border-black m-0" />}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-4 md:px-8 py-16 md:py-[120px] flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h2
          className="text-black font-light not-italic uppercase tracking-[-0.08em] leading-[0.86] text-[13vw] md:text-[7vw]"
          style={interStyle}
        >
          Ready to<br />
          <span style={playfairStyle}>collaborate?</span>
        </h2>
        <div className="flex flex-col gap-4 items-start md:items-end md:pb-2">
          <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] not-italic md:text-right md:max-w-[280px]" style={interStyle}>
            Every great project starts with a conversation. Tell me about yours.
          </p>
          <AnimatedButton className="text-[14px] font-medium tracking-[-0.56px] px-5 py-3 rounded-full" style={interStyle}>
            Let&apos;s talk
          </AnimatedButton>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
