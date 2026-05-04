import type { Metadata } from "next";
import NavBar from "../NavBar";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Contact — Harvey Specter",
  description: "Get in touch to start a project.",
};

const interStyle    = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle     = { fontFamily: "var(--font-geist-mono, monospace)" };
const playfairStyle = { fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 400 };

const DETAILS = [
  { label: "Email",    value: "hello@h.studio",  href: "mailto:hello@h.studio" },
  { label: "Location", value: "Chicago, IL",      href: null },
  { label: "Instagram", value: "@h.studio",       href: "#" },
  { label: "LinkedIn",  value: "H.Studio",        href: "#" },
];

export default function ContactPage() {
  return (
    <>
      <NavBar darkText />

      {/* Hero */}
      <section className="bg-white px-4 md:px-8 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="flex flex-col gap-4">
          <span className="text-[14px] text-[#1f1f1f]/50 uppercase leading-[1.1]" style={monoStyle}>
            [ Get In Touch ]
          </span>
          <h1
            className="text-black font-light not-italic uppercase tracking-[-0.08em] leading-[0.86] text-[clamp(56px,10vw,144px)]"
            style={interStyle}
          >
            Let&apos;s <span style={playfairStyle}>talk.</span>
          </h1>
        </div>
      </section>

      {/* Rule */}
      <div className="px-4 md:px-8">
        <hr className="border-t border-black/15 m-0" />
      </div>

      {/* Content */}
      <section className="bg-white px-4 md:px-8 py-12 md:py-[80px]">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">

          {/* Left — details */}
          <div className="flex flex-col gap-10 md:w-[300px] shrink-0">
            <p className="text-[15px] text-[#1f1f1f]/70 leading-[1.6] tracking-[-0.03em]" style={interStyle}>
              Every great project starts with a conversation. Tell me what you&apos;re building — I&apos;ll tell you how we can make it exceptional.
            </p>
            <div className="flex flex-col gap-6">
              {DETAILS.map(({ label, value, href }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-[0.06em] text-[#1f1f1f]/40" style={monoStyle}>
                    {label}
                  </span>
                  {href ? (
                    <a href={href} className="text-[15px] text-black hover:opacity-50 transition-opacity tracking-[-0.03em]" style={interStyle}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-[15px] text-black tracking-[-0.03em]" style={interStyle}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-1 max-w-[600px]">
            <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
