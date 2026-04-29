import NavBar from "./NavBar";

const bgDesktop =
  "https://www.figma.com/api/mcp/asset/8421e35e-c87b-451d-b656-88bd33b3967a";
const bgMobile =
  "https://www.figma.com/api/mcp/asset/9d9a8c39-8f1f-49c3-8fde-d8e3c3d25973";

const aboutPortrait =
  "https://www.figma.com/api/mcp/asset/2a20a424-0066-41c7-ad8b-3788f170f1b5";

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
    </>
  );
}
