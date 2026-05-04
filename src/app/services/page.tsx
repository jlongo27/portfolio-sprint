import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import ServicesHero from "./ServicesHero";
import ProcessSteps from "./ProcessSteps";
import AnimatedButton from "../AnimatedButton";
import BlurReveal from "../BlurReveal";
import ScrollDriftLeft from "../ScrollDriftLeft";
import ServiceItem from "../ServiceItem";
import TestimonialsSlider from "../TestimonialsSlider";
import TestimonialsDesktop from "../TestimonialsDesktop";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Services — Harvey Specter",
  description: "Brand identity, photography, web design, and creative campaign direction.",
};

const interStyle    = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle     = { fontFamily: "var(--font-geist-mono, monospace)" };
const playfairStyle = { fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 400 };

const fullBleed = "https://www.figma.com/api/mcp/asset/62c7402e-30ef-488e-b4ce-71ee45520f76";

function CornerBracket({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M14 2H2V14" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


const testimonials = [
  {
    name: "Lukas Weber",
    text: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "https://www.figma.com/api/mcp/asset/859665a0-0db3-4b53-9e40-e82b135a3ebf",
    rotation: 2.9,
    left: 676,
    top: 220,
    behindText: true,
  },
  {
    name: "Marko Stojković",
    text: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: "https://www.figma.com/api/mcp/asset/1bffd6ac-6234-417f-8756-d6e7b1eb11be",
    rotation: -6.85,
    left: 102,
    top: 142,
    behindText: false,
  },
  {
    name: "Sarah Jenkins",
    text: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: "https://www.figma.com/api/mcp/asset/9640f659-79ed-40c3-b6fc-e6fec0552fb7",
    rotation: 2.23,
    left: 305,
    top: 539,
    behindText: false,
  },
  {
    name: "Sofia Martínez",
    text: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "https://www.figma.com/api/mcp/asset/d01fb03e-994a-4dd3-a86f-171cbbd4348b",
    rotation: -4.15,
    left: 987,
    top: 523,
    behindText: false,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    body: "We start by listening. Deep dives into your brand, audience, and competitors to surface the insight that should shape everything.",
  },
  {
    num: "02",
    title: "Define",
    body: "Strategy before aesthetics. A crystallised brief, clear goals, and agreed scope — before a single pixel is placed or frame is shot.",
  },
  {
    num: "03",
    title: "Design",
    body: "Execution with intention. Every deliverable crafted with the same rigour, reviewed against the brief, refined until it's right.",
  },
  {
    num: "04",
    title: "Deploy",
    body: "Launch is the beginning. We support rollout, review performance, and stay close to ensure the work keeps working in the real world.",
  },
];

export default async function ServicesPage() {
  const { data: services } = await sanityFetch({ query: SERVICES_QUERY });

  return (
    <>
      <ServicesHero />

      {/* ── Intro ── */}
      <section className="bg-white px-4 md:px-8 py-12 md:py-[120px]">
        <div className="flex flex-col gap-8 w-full">

          <div className="flex flex-col gap-3 items-end w-full">
            <span className="text-[14px] text-[#1f1f1f] text-right uppercase leading-[1.1]" style={monoStyle}>
              [ Full-service creative studio ]
            </span>
            <hr className="w-full border-t border-black m-0" />
          </div>

          <p
            className="text-[clamp(28px,4.5vw,72px)] font-light not-italic leading-[1.05] tracking-[-0.06em] uppercase"
            style={interStyle}
          >
            Four disciplines.{" "}
            <span style={playfairStyle}>One studio.</span>
            <br className="hidden md:block" />
            {" "}No handoffs, no dilution —{" "}
            <br className="hidden md:block" />
            just work that endures.
          </p>

        </div>
      </section>

      {/* ── Approach ── */}
      <section className="bg-white px-4 md:px-8 py-12 md:py-[80px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          <span className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1] shrink-0" style={monoStyle}>
            [ Our approach ]
          </span>

          <ScrollDriftLeft className="flex items-center gap-3 md:max-w-[640px]" from={0} to={-60}>
            <div className="flex flex-col self-stretch justify-between shrink-0">
              <CornerBracket />
              <CornerBracket className="-rotate-90" />
            </div>
            <p className="flex-1 py-3 text-[14px] text-[#1f1f1f] leading-[1.5] tracking-[-0.56px] not-italic" style={interStyle}>
              Every engagement starts with understanding — not assumption. We dig into your market, your audience, and your objectives before we touch a single deliverable. Great creative is never an accident. It&apos;s the product of clear thinking, deep craft, and genuine partnership between studio and client.
            </p>
            <div className="flex flex-col self-stretch justify-between shrink-0">
              <CornerBracket className="rotate-90" />
              <CornerBracket className="rotate-180" />
            </div>
          </ScrollDriftLeft>

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

      {/* ── Services — identical to home page services section ── */}
      <section className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-12 [--btn-bg:#ffffff] [--btn-fg:#000000]">

        <span className="text-[14px] text-white uppercase leading-[1.1]" style={monoStyle}>
          [ services ]
        </span>

        <div
          className="flex items-center justify-between w-full text-white uppercase font-light not-italic tracking-[-0.08em]"
          style={{ ...interStyle, fontSize: "clamp(32px, 6.67vw, 96px)", lineHeight: "normal" }}
        >
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        <div className="flex flex-col gap-12 w-full">
          {services.map((svc, i) => (
            <ServiceItem
              key={svc._id}
              num={`[ ${i + 1} ]`}
              name={svc.name ?? ""}
              description={svc.description ?? ""}
              img={svc.imageUrl ?? ""}
            />
          ))}
        </div>

      </section>

      {/* ── Process ── */}
      <section className="bg-[#f3f3f3] px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8">
        <div className="flex flex-col gap-3 items-end w-full">
          <span className="text-[14px] text-[#1f1f1f] text-right uppercase leading-[1.1]" style={monoStyle}>
            [ How we work ]
          </span>
          <hr className="w-full border-t border-black m-0" />
        </div>
        <div
          className="flex items-center justify-between w-full text-black uppercase font-light not-italic tracking-[-0.08em]"
          style={{ ...interStyle, fontSize: "clamp(32px, 6.67vw, 96px)", lineHeight: "normal" }}
        >
          <span>[4]</span>
          <span>Steps</span>
        </div>
        <ProcessSteps steps={processSteps} />
      </section>

      {/* ── Testimonials ── */}

      {/* MOBILE */}
      <section className="md:hidden bg-white px-4 py-16 flex flex-col gap-8">
        <h2
          className="capitalize font-medium not-italic text-black text-[64px] leading-[0.8] tracking-[-4.48px] text-center w-full"
          style={interStyle}
        >
          Testimonials
        </h2>
        <div className="-mx-4">
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      {/* DESKTOP */}
      <TestimonialsDesktop testimonials={testimonials} />

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

      <Footer />
    </>
  );
}
