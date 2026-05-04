"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };

function TestimonialCard({ logo, text, name, className = "" }: { logo: string; text: string; name: string; className?: string }) {
  return (
    <div className={`bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] ${className}`}>
      <div className="h-[30px]">
        <img src={logo} alt="" className="h-full w-auto max-w-[150px] object-contain object-left" />
      </div>
      <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.72px] not-italic" style={interStyle}>
        {text}
      </p>
      <p className="text-[16px] font-black uppercase leading-[1.1] tracking-[-0.64px] text-black whitespace-nowrap" style={interStyle}>
        {name}
      </p>
    </div>
  );
}

type Testimonial = {
  name: string;
  text: string;
  logo: string;
  rotation: number;
  left: number;
  top: number;
  behindText: boolean;
};

// Each card drifts at a different y rate for depth
const yRanges = [
  { from: 60, to: -60 },   // Lukas Weber      — upper right,  fast drift
  { from: 30, to: -90 },   // Marko Stojković  — upper left,   largest range
  { from: 80, to: -30 },   // Sarah Jenkins    — lower center, starts further down
  { from: 40, to: -55 },   // Sofia Martínez   — lower right,  medium
];

export default function TestimonialsDesktop({ testimonials }: { testimonials: Testimonial[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card || !sectionRef.current) return;
        const { from, to } = yRanges[i] ?? { from: 0, to: -60 };
        gsap.fromTo(
          card,
          { y: from },
          {
            y: to,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hidden md:block relative h-[62.5vw] overflow-hidden bg-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center py-[8.33vw] px-[2.22vw]">
        <h2
          className="capitalize font-medium not-italic text-black text-[13.75vw] leading-[1.1] tracking-[-0.07em] text-center w-full"
          style={{ ...interStyle, zIndex: 1, position: "relative" }}
        >
          Testimonials
        </h2>
      </div>

      {testimonials.map((t, i) => (
        // Outer div: GSAP y target + absolute positioning (no CSS transform here)
        <div
          key={t.name}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="absolute"
          style={{
            left: `${((t.left / 1440) * 100).toFixed(2)}vw`,
            top: `${((t.top / 1440) * 100).toFixed(2)}vw`,
            zIndex: t.behindText ? 0 : 2,
          }}
        >
          {/* Inner div: CSS rotation only — separate from GSAP transform */}
          <div style={{ transform: `rotate(${t.rotation}deg)` }}>
            <TestimonialCard logo={t.logo} text={t.text} name={t.name} className="w-[24.51vw]" />
          </div>
        </div>
      ))}
    </section>
  );
}
