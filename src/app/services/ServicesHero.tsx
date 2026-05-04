"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "../NavBar";

gsap.registerPlugin(ScrollTrigger);

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle  = { fontFamily: "var(--font-geist-mono, monospace)" };

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef   = useRef<HTMLDivElement>(null);
  const numRef     = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const ruleRef    = useRef<HTMLHRElement>(null);
  const bottomRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([labelRef.current, numRef.current], {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });

      // Text rises into frame — clip opens from bottom while heading drifts up
      gsap.fromTo(
        headingRef.current,
        { clipPath: "inset(0% 0% 100% 0%)", y: 32 },
        { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1.1, ease: "power4.out", delay: 0.25 }
      );

      gsap.from([ruleRef.current, bottomRef.current], {
        opacity: 0,
        y: 12,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.85,
      });

      const st = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
        invalidateOnRefresh: true,
      };

      gsap.to(headingRef.current, {
        y: () => window.innerHeight * -0.14,
        opacity: 0,
        ease: "none",
        scrollTrigger: st,
      });

      gsap.to(bottomRef.current, {
        y: () => window.innerHeight * -0.05,
        opacity: 0,
        ease: "none",
        scrollTrigger: st,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-white flex flex-col">
      <NavBar darkText />

      <div className="flex-1 flex flex-col justify-between pt-28 md:pt-36 pb-8">

        {/* Top row — padded */}
        <div className="flex items-start justify-between px-8 max-md:px-4">
          <div ref={labelRef} className="will-change-transform">
            <span className="text-[#1f1f1f] text-[14px] uppercase leading-[1.1]" style={monoStyle}>
              [ What We Do ]
            </span>
          </div>
          <div ref={numRef} className="will-change-transform text-right">
            <span
              className="text-[clamp(64px,10vw,140px)] font-light not-italic leading-[0.85] tracking-[-0.08em] text-[#1f1f1f]/15"
              style={interStyle}
            >
              04
            </span>
          </div>
        </div>

        {/* Main heading — full-width, clips at viewport edge */}
        <div
          ref={headingRef}
          className="overflow-hidden will-change-transform"
          style={{ clipPath: "inset(0% 0% 0% 0%)" }}
        >
          <h1
            className="text-black font-light not-italic uppercase tracking-[-0.08em] leading-[0.86] text-[19vw] md:text-[16vw] pl-8 max-md:pl-4"
            style={interStyle}
          >
            Services
          </h1>
        </div>

        {/* Rule + bottom — padded */}
        <div className="px-8 max-md:px-4 flex flex-col gap-4">
          <hr ref={ruleRef} className="border-t border-black/20 m-0" />
          <div ref={bottomRef} className="flex items-end justify-between will-change-transform">
            <div className="flex gap-4 md:gap-10 text-[#1f1f1f] text-[12px] uppercase leading-[1.1]" style={monoStyle}>
              <span>Brand</span>
              <span>Photography</span>
              <span className="hidden md:inline">Web</span>
              <span className="hidden md:inline">Campaigns</span>
            </div>
            <span className="text-[#1f1f1f] text-[14px] leading-[1.1]" style={monoStyle}>
              Chicago&nbsp;&nbsp;—&nbsp;&nbsp;H.Studio
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
