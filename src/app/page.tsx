import NavBar from "./NavBar";

const bgDesktop =
  "https://www.figma.com/api/mcp/asset/8421e35e-c87b-451d-b656-88bd33b3967a";
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
    name: "Marko Stojković",
    text: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: "https://www.figma.com/api/mcp/asset/1bffd6ac-6234-417f-8756-d6e7b1eb11be",
    rotation: -6.85,
    left: 102,
    top: 142,
  },
  {
    name: "Lukas Weber",
    text: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "https://www.figma.com/api/mcp/asset/859665a0-0db3-4b53-9e40-e82b135a3ebf",
    rotation: 2.9,
    left: 676,
    top: 272,
  },
  {
    name: "Sarah Jenkins",
    text: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: "https://www.figma.com/api/mcp/asset/9640f659-79ed-40c3-b6fc-e6fec0552fb7",
    rotation: 2.23,
    left: 305,
    top: 553,
  },
  {
    name: "Sofia Martínez",
    text: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "https://www.figma.com/api/mcp/asset/d01fb03e-994a-4dd3-a86f-171cbbd4348b",
    rotation: -4.15,
    left: 987,
    top: 546,
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
          style={{ objectPosition: "center 25%" }}
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

      {/*
        Frosted glass strip.
        mask-image fades it out upward so the top edge dissolves rather than cuts hard.
        Position: bottom on mobile, mid-page on desktop.
      */}
      <div
        className="absolute inset-x-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)] bottom-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 35%)",
        }}
      />

      {/*
        Content — no z-index so it doesn't create a stacking context.
        Without a new stacking context, mix-blend-overlay on the h1 composites
        against the background image rendered in main's stacking context.
      */}
      <div className="relative h-full flex flex-col px-8 pb-6 max-md:px-4 max-md:pb-6 md:gap-[calc(40vh_-_72px)] max-md:gap-[calc(40vh_-_72px)]">
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
    {/*
      Desktop: giant centered "Testimonials" heading, 4 cards absolutely scattered
      around/over it at specific rotations matching the Figma layout.
      Mobile: title at top, cards in a horizontal scroll strip below.
    */}
    {/*
      All sizes and positions are expressed as vw fractions of the 1440px Figma frame,
      so the layout is pixel-perfect at 1440px and scales proportionally at any width.
      Formula: value_px / 1440 * 100 = vw
    */}
    <section className="relative overflow-hidden py-16 px-4 md:px-0 md:py-[8.33vw] md:min-h-[62.5vw] md:flex md:flex-col md:items-center md:justify-center">

      {/* Heading — full width so text-center works correctly */}
      <h2
        className="capitalize font-medium not-italic text-black leading-[0.8]
                   text-[64px] tracking-[-0.07em] px-4
                   md:text-[13.75vw] md:leading-[1.1] md:text-center md:w-full md:px-0"
        style={interStyle}
      >
        Testimonials
      </h2>

      {/* Mobile: horizontal scroll strip */}
      <div className="md:hidden mt-8 -mx-4 overflow-x-auto flex gap-4 px-4 pb-2">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="shrink-0"
            style={{ transform: `rotate(${i % 2 === 0 ? -3.5 : 2}deg)` }}
          >
            <TestimonialCard logo={t.logo} text={t.text} name={t.name} className="w-[260px]" />
          </div>
        ))}
      </div>

      {/* Desktop: absolutely positioned scattered cards — all values in vw */}
      {testimonials.map((t) => (
        <div
          key={t.name}
          className="hidden md:block absolute"
          style={{
            left: `${(t.left / 1440 * 100).toFixed(2)}vw`,
            top: `${(t.top / 1440 * 100).toFixed(2)}vw`,
            transform: `rotate(${t.rotation}deg)`,
          }}
        >
          <TestimonialCard logo={t.logo} text={t.text} name={t.name} className="w-[24.51vw]" />
        </div>
      ))}

    </section>
    </>
  );
}
