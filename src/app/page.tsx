import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";
import HeroSection from "./HeroSection";
import TestimonialsSlider from "./TestimonialsSlider";
import AnimatedButton from "./AnimatedButton";
import AboutPortrait from "./AboutPortrait";
import BlurReveal from "./BlurReveal";
import ScrollDriftLeft from "./ScrollDriftLeft";
import ServiceItem from "./ServiceItem";
import PortfolioCard from "./PortfolioCard";
import TestimonialsDesktop from "./TestimonialsDesktop";
import FooterReveal from "./FooterReveal";
import NewsCard from "./NewsCard";
import Footer from "./Footer";

const aboutPortrait =
  "https://www.figma.com/api/mcp/asset/2a20a424-0066-41c7-ad8b-3788f170f1b5";

const services = [
  {
    num: "[ 1 ]",
    name: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/a7597aaa-670e-48d8-89be-343cf65adf5d",
  },
  {
    num: "[ 2 ]",
    name: "Web Design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/298505a3-b55e-44dc-8c4e-d1c425ba2281",
  },
  {
    num: "[ 3 ]",
    name: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/2e29334a-b900-4d07-a12b-f687886d50dc",
  },
  {
    num: "[ 4 ]",
    name: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/3b717fb4-90c8-45dc-b851-bef4f292a5f1",
  },
];

const testimonials = [
  {
    name: "Lukas Weber",
    text: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "https://www.figma.com/api/mcp/asset/859665a0-0db3-4b53-9e40-e82b135a3ebf",
    rotation: 2.9,
    left: 676,
    top: 220,
    behindText: true,  // Figma: this card is below the heading in layer order
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

const portfolioProjects = [
  {
    name: "Surfers Paradise",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/e237bd42-9829-4bd2-a463-259fa5707df6",
    tall: true,
  },
  {
    name: "Cyberpunk Caffe",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/5ac10ee9-acb7-41d6-9dee-d89bbade276c",
    tall: false,
  },
  {
    name: "Agency 976",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/c7e8684d-ab12-4758-aadf-cabf10533f96",
    tall: false,
  },
  {
    name: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/61e9ab2d-7931-4861-bf88-b3db890734d6",
    tall: true,
  },
];

const newsItems = [
  {
    img: "https://www.figma.com/api/mcp/asset/a1cc8045-2aeb-4fcc-b48a-02cda4c90b62",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://www.figma.com/api/mcp/asset/c13fad28-b341-4cd0-a8a3-b7b96f631414",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://www.figma.com/api/mcp/asset/4783974d-7f84-4fa3-b027-e862963c2770",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle = { fontFamily: "var(--font-geist-mono, monospace)" };
const playfairStyle = { fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 400 };

function CornerBracket({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M14 2H2V14" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


function PortfolioCTA({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-3 items-stretch ${className}`}>
      <div className="flex flex-col justify-between shrink-0">
        <CornerBracket />
        <CornerBracket className="-rotate-90" />
      </div>
      <div className="flex flex-col gap-[10px] items-start py-3 flex-1 min-w-0">
        <p
          className="text-[14px] text-[#1f1f1f] italic leading-[1.3] tracking-[-0.56px]"
          style={interStyle}
        >
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <AnimatedButton
          className="text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-full"
          style={interStyle}
        >
          Let&apos;s talk
        </AnimatedButton>
      </div>
      <div className="flex flex-col justify-between shrink-0">
        <CornerBracket className="rotate-90" />
        <CornerBracket className="rotate-180" />
      </div>
    </div>
  );
}

export default async function Home() {
  const { data: portfolioItems } = await sanityFetch({ query: PORTFOLIO_QUERY });

  return (
    <>
    <HeroSection />

    {/* Bio / Intro Section */}
    <section className="bg-white flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-[120px]">
      <div className="flex flex-col gap-6 w-full">

        {/* Header: label + rule */}
        <div className="flex flex-col gap-3 items-end w-full">
          <span
            className="text-[14px] text-[#1f1f1f] text-right uppercase leading-[1.1]"
            style={monoStyle}
          >
            [ 8+ years in industry ]
          </span>
          <hr className="w-full border-t border-black m-0" />
        </div>

        {/* Body text */}
        <div className="flex flex-col gap-2 w-full">

          {/* "001" — mobile only, centered above all lines */}
          <span
            className="md:hidden text-center text-[14px] text-[#1f1f1f] leading-[1.1] mb-1"
            style={monoStyle}
          >
            001
          </span>

          {/* Line 1: A creative director   / */}
          <div className="flex items-baseline gap-3 justify-center md:justify-start uppercase">
            <span
              className="text-[32px] md:text-[6.67vw] font-light not-italic tracking-[-0.08em] leading-[0.84] whitespace-pre"
              style={interStyle}
            >
              {`A creative director   /`}
            </span>
            <span
              className="hidden md:inline text-[14px] text-[#1f1f1f] leading-[1.1]"
              style={monoStyle}
            >
              001
            </span>
          </div>

          {/* Line 2: Photographer */}
          <div className="flex justify-center md:justify-start md:pl-[14.86vw] uppercase">
            <span
              className="text-[32px] md:text-[6.67vw] font-light not-italic tracking-[-0.08em] leading-[0.84]"
              style={interStyle}
            >
              Photographer
            </span>
          </div>

          {/* Line 3: Born & raised */}
          <div className="flex justify-center md:justify-start md:pl-[42.36vw] uppercase">
            <span
              className="text-[32px] md:text-[6.67vw] font-light not-italic tracking-[-0.08em] leading-[0.84]"
              style={interStyle}
            >
              Born{" "}
              <span style={playfairStyle}>&amp;</span>
              {" "}raised
            </span>
          </div>

          {/* Line 4: on the south side */}
          <div className="flex justify-center md:justify-start uppercase">
            <span
              className="text-[32px] md:text-[6.67vw] font-light not-italic tracking-[-0.08em] leading-[0.84]"
              style={interStyle}
            >
              on the south side
            </span>
          </div>

          {/* Line 5: of chicago. + [ creative freelancer ] */}
          {/* Mobile: stacked centered. Desktop: "of chicago." indented with label absolutely placed beside it */}
          <div className="flex flex-col items-center md:block md:relative md:pl-[42.08vw] uppercase">
            <span
              className="text-[32px] md:text-[6.67vw] font-light not-italic tracking-[-0.08em] leading-[0.84]"
              style={interStyle}
            >
              of chicago.
            </span>
            <span
              className="text-[14px] text-[#1f1f1f] leading-[1.1] uppercase md:absolute md:left-[74.9vw] md:top-[1.8vw]"
              style={monoStyle}
            >
              [ creative freelancer ]
            </span>
          </div>

        </div>
      </div>
    </section>
    {/* About / Portrait Section */}
    {/*
      Desktop: no right padding so portrait bleeds to viewport edge.
      [ About ] label anchored top-left; right block (68.3vw) contains
      the corner-bracketed text box + a flex-row column of (002 | portrait).
      Mobile: full-bleed portrait via negative margin cancelling section px-4.
    */}
    <section className="bg-white px-4 md:pl-8 md:pr-0 py-12 md:py-[80px]">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

        {/* [ About ] label — desktop left column, hidden on mobile */}
        <span
          className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1] shrink-0"
          style={monoStyle}
        >
          [ About ]
        </span>

        {/* Right block: 68.3vw = 983px at 1440px */}
        <div className="flex flex-col md:flex-row md:items-end md:w-[68.3vw] gap-5 md:gap-8">

          {/* Mobile-only labels (002 + [ About ]) */}
          <div className="flex flex-col gap-5 md:hidden">
            <span className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>002</span>
            <span className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>[ About ]</span>
          </div>

          {/* Corner-bracketed text box */}
          <ScrollDriftLeft className="flex items-center gap-3 md:flex-1" from={0} to={-80}>
            <div className="flex flex-col self-stretch justify-between shrink-0">
              <CornerBracket />
              <CornerBracket className="-rotate-90" />
            </div>
            <p
              className="flex-1 py-3 text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] not-italic max-md:text-center"
              style={interStyle}
            >
              Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
            </p>
            <div className="flex flex-col self-stretch justify-between shrink-0">
              <CornerBracket className="rotate-90" />
              <CornerBracket className="rotate-180" />
            </div>
          </ScrollDriftLeft>

          {/* Portrait column
              Desktop: flex row — "002" label LEFT of portrait, both top-aligned.
              Mobile: only portrait visible (002 shown above); portrait bleeds to edges. */}
          <div className="flex items-start gap-[24px] md:shrink-0">
            <span
              className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1]"
              style={monoStyle}
            >
              002
            </span>
            {/* w-[calc(100%+2rem)] + -mx-4 cancels px-4 section padding on mobile for full bleed */}
            <AboutPortrait
              src={aboutPortrait}
              className="w-[calc(100%+2rem)] -mx-4 md:w-[436px] md:mx-0"
              style={{ aspectRatio: "436/614" }}
            />
          </div>

        </div>
      </div>
    </section>

    {/* Full-bleed Photography Section */}
    {/*
      Desktop: landscape 16:9 crop, image centered (object-cover default).
      Mobile: portrait 3:4 crop; Figma shows the image at 213% width offset
      -36% left, which frames the face/camera at ~60% from the left — matched
      via object-position on mobile.
    */}
    <section className="w-full overflow-hidden">
      <BlurReveal className="relative w-full aspect-[3/4] md:aspect-video">
        <img
          src="https://www.figma.com/api/mcp/asset/62c7402e-30ef-488e-b4ce-71ee45520f76"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
        />
      </BlurReveal>
    </section>

    {/* Services Section */}
    <section className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-12 [--btn-bg:#ffffff] [--btn-fg:#000000]">

      {/* [ services ] label */}
      <span className="text-[14px] text-white uppercase leading-[1.1]" style={monoStyle}>
        [ services ]
      </span>

      {/* [4]  /  Deliverables header */}
      <div
        className="flex items-center justify-between w-full text-white uppercase font-light not-italic tracking-[-0.08em]"
        style={{ ...interStyle, fontSize: "clamp(32px, 6.67vw, 96px)", lineHeight: "normal" }}
      >
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service list */}
      <div className="flex flex-col gap-12 w-full">
        {services.map((svc) => (
          <ServiceItem
            key={svc.num}
            num={svc.num}
            name={svc.name}
            description={svc.description}
            img={svc.img}
          />
        ))}
      </div>

    </section>

    {/* Selected Work / Portfolio Section */}
    <section className="bg-white px-4 md:px-8 py-12 md:py-[80px]">

      {/* Header */}
      <div className="flex items-start justify-between w-full mb-8 md:mb-[61px]">
        <div className="flex flex-col gap-4 md:gap-0">
          {/* [ portfolio ] mobile label — sits above the title */}
          <span
            className="md:hidden uppercase text-[14px] text-[#1f1f1f] leading-[1.1]"
            style={monoStyle}
          >
            [ portfolio ]
          </span>
          <div className="flex items-start gap-[10px] uppercase">
            <h2
              className="font-light not-italic text-black tracking-[-0.08em] leading-[0.86] text-[32px] md:text-[6.67vw]"
              style={interStyle}
            >
              Selected
              <br />
              Work
            </h2>
            <span className="text-[14px] text-[#1f1f1f] leading-[1.1]" style={monoStyle}>
              004
            </span>
          </div>
        </div>
        {/* [ portfolio ] desktop — rotated -90° vertical label on far right */}
        <div className="hidden md:flex h-[110px] items-center justify-center w-[15px] shrink-0">
          <span
            className="-rotate-90 whitespace-nowrap uppercase text-[14px] text-[#1f1f1f] leading-[1.1]"
            style={monoStyle}
          >
            [ portfolio ]
          </span>
        </div>
      </div>

      {/* Mobile: single column, all cards then CTA */}
      <div className="flex flex-col gap-6 md:hidden">
        {portfolioItems?.map((p) => (
          <PortfolioCard key={p._id} name={p.title ?? ""} tags={p.categories ?? []} img={p.coverImageUrl ?? ""} tall={p.tall ?? false} mobile />
        ))}
        <PortfolioCTA className="w-full" />
      </div>

      {/* Desktop: 2-column staggered masonry */}
      {portfolioItems && portfolioItems.length >= 4 && (
        <div className="hidden md:flex items-end gap-6 w-full">
          {/* Left column: self-stretch so it matches right column height, then justify-between
              distributes Card1, Card2, and CTA evenly — matching Figma's justify-between layout */}
          <div className="flex-1 self-stretch flex flex-col justify-between">
            <PortfolioCard name={portfolioItems[0].title ?? ""} tags={portfolioItems[0].categories ?? []} img={portfolioItems[0].coverImageUrl ?? ""} tall={portfolioItems[0].tall ?? false} />
            <PortfolioCard name={portfolioItems[1].title ?? ""} tags={portfolioItems[1].categories ?? []} img={portfolioItems[1].coverImageUrl ?? ""} tall={portfolioItems[1].tall ?? false} />
            <PortfolioCTA className="w-[465px]" />
          </div>
          {/* Right column: starts 240px lower */}
          <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
            <PortfolioCard name={portfolioItems[2].title ?? ""} tags={portfolioItems[2].categories ?? []} img={portfolioItems[2].coverImageUrl ?? ""} tall={portfolioItems[2].tall ?? false} />
            <PortfolioCard name={portfolioItems[3].title ?? ""} tags={portfolioItems[3].categories ?? []} img={portfolioItems[3].coverImageUrl ?? ""} tall={portfolioItems[3].tall ?? false} />
          </div>
        </div>
      )}

    </section>

    {/* Testimonials Section */}

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

    {/* DESKTOP — parallax testimonials */}
    <TestimonialsDesktop testimonials={testimonials} />

    {/* News / Latest Section */}
    <section className="bg-[#f3f3f3]">

      {/* MOBILE */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <h2
          className="uppercase font-light not-italic text-black text-[32px] leading-[0.86] tracking-[-2.56px]"
          style={interStyle}
        >
          Keep up with my latest news &amp; achievements
        </h2>
        <div className="-mx-4 overflow-x-auto flex gap-4 px-4 pb-2">
          {newsItems.map((item, i) => (
            <NewsCard key={i} img={item.img} text={item.text} className="shrink-0 w-[300px]" imgHeight="h-[398px]" />
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      {/*
        Left column: 110×706px container with title rotated -90deg (reads bottom-to-top).
        Right area: 3 news cards with vertical dividers. Middle card offset 120px down via pt-[120px].
        justify-between distributes the 246px gap between title and cards.
      */}
      <div className="hidden md:flex items-end justify-between px-8 py-[120px]">
        {/* Rotated title */}
        <div className="relative shrink-0 w-[110px] h-[706px] flex items-center justify-center overflow-hidden">
          <div className="-rotate-90 flex-none">
            <div className="flex flex-col uppercase font-light not-italic text-black text-[64px] leading-[0.86] tracking-[-5.12px] whitespace-nowrap" style={interStyle}>
              <span>Keep up with my latest</span>
              <span>news &amp; achievements</span>
            </div>
          </div>
        </div>

        {/* Cards row — 3 equal columns with vertical dividers */}
        <div className="flex items-start w-[1020px]">
          {newsItems.map((item, i) => (
            <div key={i} className="contents">
              {i > 0 && <div className="self-stretch w-px bg-black shrink-0" />}
              <NewsCard
                img={item.img}
                text={item.text}
                className={`flex-1 ${i === 1 ? "pt-[120px] px-[31px]" : i === 0 ? "pr-[31px]" : "pl-[31px]"}`}
              />
            </div>
          ))}
        </div>
      </div>

    </section>

    <Footer />
    </>
  );
}
