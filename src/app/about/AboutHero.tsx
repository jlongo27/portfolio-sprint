"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "../NavBar";

gsap.registerPlugin(ScrollTrigger);

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle  = { fontFamily: "var(--font-geist-mono, monospace)" };

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const labelRef   = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bottomRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      gsap.from([labelRef.current, headingRef.current, bottomRef.current], {
        opacity: 0,
        y: 32,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      const st = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
        invalidateOnRefresh: true,
      };

      // Background drifts down slower than scroll → parallax depth
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: st,
      });

      // Text floats up gently — no opacity fade
      gsap.to(labelRef.current, {
        y: () => window.innerHeight * -0.08,
        ease: "none",
        scrollTrigger: st,
      });

      gsap.to(headingRef.current, {
        y: () => window.innerHeight * -0.14,
        ease: "none",
        scrollTrigger: st,
      });

      gsap.to(bottomRef.current, {
        y: () => window.innerHeight * -0.05,
        ease: "none",
        scrollTrigger: st,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
      {/* Background image — parallaxes independently */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ top: "-10%", bottom: "-10%" }}
      >
        <img
          src="/hero-desktop.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Subtle overlay — enough for text legibility, not enough to wash out the image */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <NavBar darkText />

      <div className="relative h-full flex flex-col justify-between px-8 py-6 max-md:px-4">

        {/* Label */}
        <div ref={labelRef} className="pt-24 md:pt-32 will-change-transform">
          <span className="text-white text-[14px] uppercase leading-[1.1]" style={monoStyle}>
            [ About Harvey Specter ]
          </span>
        </div>

        {/* Main heading */}
        <div ref={headingRef} className="will-change-transform">
          <h1
            className="text-white font-light not-italic uppercase tracking-[-0.08em] leading-[0.86] text-[22vw] md:text-[13.75vw]"
            style={interStyle}
          >
            Harvey<br />Specter
          </h1>
        </div>

        {/* Bottom row */}
        <div ref={bottomRef} className="flex items-end justify-between pb-2 will-change-transform">
          <span className="text-white text-[14px] uppercase leading-[1.1]" style={monoStyle}>
            Creative Director&nbsp;&nbsp;/&nbsp;&nbsp;Photographer
          </span>
          <span className="hidden md:block text-white text-[14px] leading-[1.1]" style={monoStyle}>
            Chicago&nbsp;&nbsp;—&nbsp;&nbsp;2016 &ndash; Present
          </span>
        </div>

      </div>
    </section>
  );
}
