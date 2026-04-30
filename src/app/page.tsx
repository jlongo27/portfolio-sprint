import NavBar from "./NavBar";

const bgDesktop =
  "https://www.figma.com/api/mcp/asset/8e2afe22-0ea0-4139-9bb4-5f4aaf2f13f0";
const bgMobile =
  "https://www.figma.com/api/mcp/asset/9d9a8c39-8f1f-49c3-8fde-d8e3c3d25973";

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
    top: 490,
    behindText: false,
  },
  {
    name: "Sofia Martínez",
    text: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "https://www.figma.com/api/mcp/asset/d01fb03e-994a-4dd3-a86f-171cbbd4348b",
    rotation: -4.15,
    left: 987,
    top: 475,
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

function PortfolioCard({
  name,
  tags,
  img,
  tall = false,
  mobile = false,
}: {
  name: string;
  tags: string[];
  img: string;
  tall?: boolean;
  mobile?: boolean;
}) {
  const imgH = mobile ? "h-[390px]" : tall ? "h-[744px]" : "h-[699px]";
  const titleCls = mobile
    ? "text-[24px] tracking-[-0.96px]"
    : "text-[36px] tracking-[-1.44px]";
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className={`relative w-full overflow-hidden ${imgH} flex flex-col justify-end pb-4 pl-4`}>
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="relative flex gap-3 items-center flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-full text-[14px] text-[#111] font-medium tracking-[-0.56px] whitespace-nowrap"
              style={interStyle}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p
          className={`font-black not-italic uppercase leading-[1.1] text-black ${titleCls}`}
          style={interStyle}
        >
          {name}
        </p>
        <div className="shrink-0 size-[32px]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="15.5" stroke="black" strokeWidth="1" />
            <path
              d="M11.5 20.5L20.5 11.5M20.5 11.5H14.5M20.5 11.5V17.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  logo,
  text,
  name,
  className = "",
}: {
  logo: string;
  text: string;
  name: string;
  className?: string;
}) {
  return (
    <div className={`bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] ${className}`}>
      <div className="h-[30px]">
        <img
          src={logo}
          alt=""
          className="h-full w-auto max-w-[150px] object-contain object-left"
        />
      </div>
      <p
        className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.72px] not-italic"
        style={interStyle}
      >
        {text}
      </p>
      <p
        className="text-[16px] font-black uppercase leading-[1.1] tracking-[-0.64px] text-black whitespace-nowrap"
        style={interStyle}
      >
        {name}
      </p>
    </div>
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
        <a
          href="#"
          className="bg-black text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-full"
          style={interStyle}
        >
          Let&apos;s talk
        </a>
      </div>
      <div className="flex flex-col justify-between shrink-0">
        <CornerBracket className="rotate-90" />
        <CornerBracket className="rotate-180" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
    <main className="relative h-screen overflow-hidden">
      {/*
        Desktop background.
        Container fills the full viewport height and bleeds ~35% horizontally.
        object-position "center 20%" keeps the face at a stable distance from
        the top (≈ 20% × viewport-height) at every viewport width. This works
        because when objectPosition-y equals the face's position in the image,
        the face-to-top distance simplifies to objectPosition-y × vh — a
        constant independent of how wide (and therefore how tall) the image
        renders via object-cover.
      */}
      {/*
        Desktop background.
        Full-viewport container bleeds ~35% left/right so the image fills edge-to-edge.
        object-cover + objectPosition "center 30%" keeps the face at ~30% from the top
        at any viewport width — face stays below the navbar and above the H1 text.
      */}
      <div
        className="absolute hidden md:block pointer-events-none"
        style={{
          left: "-34.79%",
          right: "-34.79%",
          top: 0,
          bottom: 0,
        }}
      >
        <img
          src={bgDesktop}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
      </div>

      {/* Mobile background — bleeds ~40% beyond right edge */}
      <div
        className="absolute md:hidden pointer-events-none"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          left: 0,
          right: "-39.47%",
          height: "847px",
        }}
      >
        <img
          src={bgMobile}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Mobile frosted glass — bottom-anchored, no mask (matches Figma) */}
      <div
        className="md:hidden absolute inset-x-0 h-[349px] backdrop-blur-[5px] bg-[rgba(217,217,217,0.01)] bottom-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
        }}
      />

      {/*
        Desktop frosted glass.
        Figma positions this at top-[498px] in an 849px frame = 58.7vh.
        Sibling of the content div so content (NavBar, H1, description) paints
        after it in DOM order → description text appears crisp on top of the blur.
        No mask — Figma has no mask on this element.
      */}
      <div
        className="hidden md:block absolute inset-x-0 h-[349px] backdrop-blur-[5px] bg-[rgba(217,217,217,0.01)]"
        style={{ top: "58.7vh" }}
      />

      {/*
        Content — no z-index so it doesn't create a stacking context.
        Without a new stacking context, mix-blend-overlay on the h1 composites
        against the background image rendered in main's stacking context.
      */}
      <div className="relative h-full flex flex-col px-8 pb-6 max-md:px-4 max-md:pb-6 md:gap-[240px] max-md:gap-[calc(40vh_-_72px)]">
        <NavBar />

        {/*
          flex-1 makes the hero fill the remaining 50vh so justify-between
          can pin the name to the top and the description/CTA to the bottom,
          ensuring the Let's talk button is always visible within the viewport.
        */}
        <section className="flex flex-col w-full flex-1 justify-between">

          {/* Label + Name */}
          <div className="flex flex-col w-full">
            <div className="px-[18px]">
              <span
                className="text-white mix-blend-overlay uppercase text-[14px] leading-[1.1]"
                style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
              >
                [ Hello I&apos;m ]
              </span>
            </div>
            {/*
              Desktop: single line, 13.75vw scales proportionally so it always
              fits (same ratio as the Figma's 198px / 1440px).
              Mobile: two block spans break naturally; 25.6vw = 96px at 375px.
            */}
            <h1
              className="text-white mix-blend-overlay capitalize font-medium text-center w-full tracking-[-0.07em] md:text-[13.75vw] md:leading-[1.1] md:whitespace-nowrap text-[25.6vw] leading-[0.8]"
            >
              <span className="block md:inline">Harvey</span>
              <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
              <span className="block md:inline">Specter</span>
            </h1>

          </div>

          {/* Description + CTA */}
          <div className="flex flex-col md:items-end w-full">
            <div className="flex flex-col gap-4 items-start max-w-[294px]">
              <p className="text-[14px] font-bold italic uppercase tracking-[-0.04em] text-[#1f1f1f] leading-[1.1]">
                H.Studio is a{" "}
                <span className="font-normal">full-service</span>
                {" "}creative studio creating beautiful digital experiences and
                products. We are an{" "}
                <span className="font-normal">award winning</span>
                {" "}design and art group specializing in branding, web design
                and engineering.
              </p>
              <a
                href="#"
                className="inline-flex items-center bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>

        </section>
      </div>
    </main>

    {/* Bio / Intro Section */}
    <section className="flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-[120px]">
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
    <section className="px-4 md:pl-8 md:pr-0 py-12 md:py-[80px]">
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
          <div className="flex items-center gap-3 md:flex-1">
            <div className="flex flex-col self-stretch justify-between shrink-0">
              <CornerBracket />
              <CornerBracket className="-rotate-90" />
            </div>
            <p
              className="flex-1 py-3 text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] not-italic"
              style={interStyle}
            >
              Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
            </p>
            <div className="flex flex-col self-stretch justify-between shrink-0">
              <CornerBracket className="rotate-90" />
              <CornerBracket className="rotate-180" />
            </div>
          </div>

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
            <div
              className="w-[calc(100%+2rem)] -mx-4 md:w-[436px] md:mx-0 overflow-hidden"
              style={{ aspectRatio: "436/614" }}
            >
              <img src={aboutPortrait} alt="" className="w-full h-full object-cover" />
            </div>
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
      <div className="relative w-full aspect-[3/4] md:aspect-video">
        <img
          src="https://www.figma.com/api/mcp/asset/62c7402e-30ef-488e-b4ce-71ee45520f76"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-12">

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
          <div key={svc.num} className="flex flex-col gap-[9px] w-full">

            {/* Number + rule */}
            <span className="text-[14px] text-white uppercase leading-[1.1]" style={monoStyle}>
              {svc.num}
            </span>
            <hr className="w-full border-t border-white m-0" />

            {/* Content row: desktop justify-between, mobile stacked */}
            <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-start md:justify-between pt-[9px]">

              {/* Service name */}
              <p
                className="text-[36px] text-white font-bold italic leading-[1.1] tracking-[-1.44px] uppercase shrink-0"
                style={interStyle}
              >
                {svc.name}
              </p>

              {/* Description + image */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <p
                  className="text-[14px] text-white leading-[1.3] tracking-[-0.56px] not-italic md:w-[393px]"
                  style={interStyle}
                >
                  {svc.description}
                </p>
                <div className="relative size-[151px] shrink-0 overflow-hidden">
                  <img
                    src={svc.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>

    {/* Selected Work / Portfolio Section */}
    <section className="px-4 md:px-8 py-12 md:py-[80px]">

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

      {/* Mobile: single column, cards 1–4 then CTA */}
      <div className="flex flex-col gap-6 md:hidden">
        {portfolioProjects.map((p) => (
          <PortfolioCard key={p.name} name={p.name} tags={p.tags} img={p.img} tall={p.tall} mobile />
        ))}
        <PortfolioCTA className="w-full" />
      </div>

      {/* Desktop: 2-column staggered masonry */}
      <div className="hidden md:flex items-end gap-6 w-full">
        {/* Left column: self-stretch so it matches right column height, then justify-between
            distributes Card1, Card2, and CTA evenly — matching Figma's justify-between layout */}
        <div className="flex-1 self-stretch flex flex-col justify-between">
          <PortfolioCard name={portfolioProjects[0].name} tags={portfolioProjects[0].tags} img={portfolioProjects[0].img} tall={portfolioProjects[0].tall} />
          <PortfolioCard name={portfolioProjects[1].name} tags={portfolioProjects[1].tags} img={portfolioProjects[1].img} tall={portfolioProjects[1].tall} />
          <PortfolioCTA className="w-[465px]" />
        </div>
        {/* Right column: starts 240px lower, Agency 976, Minimal Playground */}
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          <PortfolioCard name={portfolioProjects[2].name} tags={portfolioProjects[2].tags} img={portfolioProjects[2].img} tall={portfolioProjects[2].tall} />
          <PortfolioCard name={portfolioProjects[3].name} tags={portfolioProjects[3].tags} img={portfolioProjects[3].img} tall={portfolioProjects[3].tall} />
        </div>
      </div>

    </section>

    {/* Testimonials Section */}

    {/* MOBILE */}
    <section className="md:hidden px-4 py-16 flex flex-col gap-8">
      <h2
        className="capitalize font-medium not-italic text-black text-[64px] leading-[0.8] tracking-[-4.48px] text-center w-full"
        style={interStyle}
      >
        Testimonials
      </h2>
      <div className="-mx-4 overflow-x-auto flex items-center pb-2">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="shrink-0 -mr-[10px]"
            style={{ transform: `rotate(${i % 2 === 0 ? -3.5 : 2}deg)` }}
          >
            <TestimonialCard logo={t.logo} text={t.text} name={t.name} className="w-[260px]" />
          </div>
        ))}
      </div>
    </section>

    {/* DESKTOP */}
    {/*
      Section height = 900px at 1440px (62.5vw), matching the Figma frame exactly.
      Inner container fills section and uses flex justify-center to center h2 with py-[8.33vw] (=120px at 1440px) padding.
      Cards are absolutely positioned using px values divided by 1440 for vw scaling.
    */}
    <section className="hidden md:block relative h-[62.5vw] overflow-hidden">
      {/* Flex centering shell — matches Figma's flex+justify-center+py-[120px] */}
      <div className="absolute inset-0 flex flex-col items-center justify-center py-[8.33vw] px-[2.22vw]">
        <h2
          className="capitalize font-medium not-italic text-black text-[13.75vw] leading-[1.1] tracking-[-0.07em] text-center w-full"
          style={{ ...interStyle, zIndex: 1, position: "relative" }}
        >
          Testimonials
        </h2>
      </div>
      {/* Absolutely positioned cards — positions from Figma (px / 1440 * 100 = vw) */}
      {testimonials.map((t) => (
        <div
          key={t.name}
          className="absolute"
          style={{
            left: `${(t.left / 1440 * 100).toFixed(2)}vw`,
            top: `${(t.top / 1440 * 100).toFixed(2)}vw`,
            transform: `rotate(${t.rotation}deg)`,
            zIndex: t.behindText ? 0 : 2,
          }}
        >
          <TestimonialCard logo={t.logo} text={t.text} name={t.name} className="w-[24.51vw]" />
        </div>
      ))}
    </section>

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
            <div key={i} className="shrink-0 w-[300px] flex flex-col gap-4">
              <div className="relative w-full h-[398px] overflow-hidden shrink-0">
                <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] not-italic" style={interStyle}>
                {item.text}
              </p>
              <a href="#" className="inline-flex gap-[10px] items-center border-b border-black pb-1 overflow-hidden">
                <span className="text-[14px] font-medium text-black tracking-[-0.56px] whitespace-nowrap" style={interStyle}>Read more</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="-rotate-90 shrink-0">
                  <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
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
              <div className={`flex-1 flex flex-col gap-4 ${i === 1 ? "pt-[120px] px-[31px]" : i === 0 ? "pr-[31px]" : "pl-[31px]"}`}>
                <div className="relative w-full h-[469px] overflow-hidden shrink-0">
                  <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <p className="flex-1 text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] not-italic" style={interStyle}>
                  {item.text}
                </p>
                <a href="#" className="inline-flex gap-[10px] items-center border-b border-black pb-1 overflow-hidden">
                  <span className="text-[14px] font-medium text-black tracking-[-0.56px] whitespace-nowrap" style={interStyle}>Read more</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="-rotate-90 shrink-0">
                    <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>

    {/* Footer */}
    {/*
      Mobile (1-492): bg-black, pt-48px px-16px, column layout.
        Top: CTA phrase + Let's talk button + 4 social links + horizontal divider.
        Bottom: legal links (centered) + [ Coded By Claude ] + giant H.Studio text.
      Desktop: 2-column top (CTA+button left, social links right), then divider,
        then legal row, then full-width H.Studio.
      H.Studio font size: 91.425px / 375px mobile = 24.38vw scales proportionally.
    */}
    <footer className="bg-black overflow-hidden">

      {/* ── MOBILE ── */}
      <div className="md:hidden px-4 pt-12 flex flex-col gap-12">

        {/* CTA + social + divider */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 w-[298px]">
              <p
                className="text-white text-[24px] font-light italic leading-[1.1] tracking-[-0.96px] uppercase"
                style={interStyle}
              >
                Have a{" "}
                <span className="font-black not-italic">project</span>
                {" "}in mind?
              </p>
              <a
                href="#"
                className="self-start border border-white text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-full whitespace-nowrap"
                style={interStyle}
              >
                Let&apos;s talk
              </a>
            </div>
            {["Facebook", "Instagram", "X.com", "LinkedIn"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-[18px] font-normal leading-[1.1] tracking-[-0.72px] uppercase"
                style={interStyle}
              >
                {link}
              </a>
            ))}
          </div>
          <hr className="border-t border-white w-full m-0" />
        </div>

        {/* Legal + branding */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-[34px] items-center justify-center pb-8">
            <a href="#" className="text-white text-[12px] uppercase tracking-[-0.48px] underline leading-[1.1]" style={interStyle}>Licences</a>
            <a href="#" className="text-white text-[12px] uppercase tracking-[-0.48px] underline leading-[1.1]" style={interStyle}>Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white text-[10px] uppercase leading-[1.1]" style={monoStyle}>[ Coded By Claude ]</span>
            <p className="text-white font-semibold capitalize leading-[0.8] tracking-[-0.06em] text-[24.38vw]" style={interStyle}>
              H.Studio
            </p>
          </div>
        </div>

      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col px-8 pt-16">

        {/* Top row: CTA | Facebook+Instagram | X.com+LinkedIn */}
        <div className="flex items-start justify-between pb-12">
          <div className="flex flex-col gap-4">
            <p
              className="text-white text-[24px] font-light italic leading-[1.1] tracking-[-0.96px] uppercase"
              style={interStyle}
            >
              Have a{" "}
              <span className="font-black not-italic">project</span>
              {" "}in mind?
            </p>
            <a
              href="#"
              className="self-start border border-white text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-full whitespace-nowrap"
              style={interStyle}
            >
              Let&apos;s talk
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {["Facebook", "Instagram"].map((link) => (
              <a key={link} href="#" className="text-white text-[18px] font-normal leading-[1.1] tracking-[-0.72px] uppercase hover:opacity-60 transition-opacity" style={interStyle}>
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {["X.com", "LinkedIn"].map((link) => (
              <a key={link} href="#" className="text-white text-[18px] font-normal leading-[1.1] tracking-[-0.72px] uppercase hover:opacity-60 transition-opacity" style={interStyle}>
                {link}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-t border-white w-full m-0" />

        {/* Bottom: rotated label | H.Studio | legal pinned bottom-right */}
        <div className="relative flex items-end pt-6">
          {/* [ CODED BY CLAUDE ] rotated -90deg, reads bottom-to-top */}
          <div className="shrink-0 w-20 self-stretch flex items-center justify-center">
            <span
              className="-rotate-90 whitespace-nowrap text-white text-[10px] uppercase leading-[1.1]"
              style={monoStyle}
            >
              [ Coded By Claude ]
            </span>
          </div>
          {/* Giant H.Studio */}
          <p
            className="text-white font-semibold capitalize leading-[0.8] tracking-[-0.06em] text-[24.38vw]"
            style={interStyle}
          >
            H.Studio
          </p>
          {/* Legal links — absolute bottom-right */}
          <div className="absolute bottom-2 right-0 flex gap-8 items-center">
            <a href="#" className="text-white text-[12px] uppercase tracking-[-0.48px] underline leading-[1.1]" style={interStyle}>Licences</a>
            <a href="#" className="text-white text-[12px] uppercase tracking-[-0.48px] underline leading-[1.1]" style={interStyle}>Privacy Policy</a>
          </div>
        </div>

      </div>

    </footer>
    </>
  );
}
