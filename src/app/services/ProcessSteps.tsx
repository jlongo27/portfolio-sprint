"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle  = { fontFamily: "var(--font-geist-mono, monospace)" };

interface Step {
  num: string;
  title: string;
  body: string;
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current.filter(Boolean), {
        y: 48,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black/10">
      {steps.map((step, i) => (
        <div
          key={step.num}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="bg-[#f3f3f3] flex flex-col gap-4 px-6 py-8 md:px-8 md:py-10"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[12px] text-[#1f1f1f]/50 uppercase leading-[1.1]" style={monoStyle}>
              [ {step.num} ]
            </span>
            <hr className="border-t border-black/20 m-0" />
          </div>
          <p
            className="text-[26px] md:text-[22px] font-bold italic text-black tracking-[-0.04em] leading-[1.05] uppercase"
            style={interStyle}
          >
            {step.title}
          </p>
          <p className="text-[14px] text-[#1f1f1f] leading-[1.55] tracking-[-0.56px]" style={interStyle}>
            {step.body}
          </p>
        </div>
      ))}
    </div>
  );
}
