"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./NavBar";
import AnimatedButton from "./AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

const bgDesktop = "/hero-desktop.jpg";
const bgMobile =
  "https://www.figma.com/api/mcp/asset/9d9a8c39-8f1f-49c3-8fde-d8e3c3d25973";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const bgDesktopRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLDivElement>(null);
  const harveyRef = useRef<HTMLSpanElement>(null);
  const specterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      if (!hero) return;

      const st = {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
        invalidateOnRefresh: true,
      };

      if (bgDesktopRef.current) {
        gsap.to(bgDesktopRef.current, { scale: 1.16, ease: "none", scrollTrigger: st });
      }

      const leftEls = [helloRef.current, harveyRef.current].filter(Boolean);
      if (leftEls.length) {
        gsap.to(leftEls, {
          x: () => window.innerWidth * -0.6,
          opacity: 0,
          ease: "none",
          scrollTrigger: st,
        });
      }

      if (specterRef.current) {
        gsap.to(specterRef.current, {
          x: () => window.innerWidth * 0.6,
          opacity: 0,
          ease: "none",
          scrollTrigger: st,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Desktop background */}
      <div
        ref={bgDesktopRef}
        className="absolute hidden md:block pointer-events-none will-change-transform"
        style={{
          width: "min(169.58vw, 2441px)",
          left: "50%",
          transform: "translateX(-50%)",
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

      {/* Mobile background */}
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

      {/* Mobile frosted glass */}
      <div
        className="md:hidden absolute inset-x-0 h-[349px] backdrop-blur-[5px] bg-[rgba(217,217,217,0.01)] bottom-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
        }}
      />

      {/* Desktop frosted glass */}
      <div
        className="hidden md:block absolute inset-x-0 h-[349px] backdrop-blur-[5px] bg-[rgba(217,217,217,0.01)]"
        style={{
          top: "58.7vh",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
        }}
      />

      {/* Content — NavBar is fixed (out of flow); section gets top padding to compensate */}
      <div className="relative h-full flex flex-col px-8 pb-6 max-md:px-4 max-md:pb-6">
        <NavBar />

        <section className="flex flex-col w-full flex-1 justify-between md:pt-[300px] max-md:pt-[40vh]">

          {/* Label + Name */}
          <div className="flex flex-col w-full">
            <div ref={helloRef} className="px-[18px] will-change-transform">
              <span
                className="text-white mix-blend-overlay uppercase text-[14px] leading-[1.1]"
                style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
              >
                [ Hello I&apos;m ]
              </span>
            </div>
            {/*
              Desktop: flex row so Harvey and Specter are independent flex items —
              GSAP can translateX each one without inline-flow artifacts.
              Mobile: block stack (flex-col) as before.
            */}
            <h1 className="text-white mix-blend-overlay capitalize font-medium w-full tracking-[-0.07em] md:text-[13.75vw] md:leading-[1.1] md:whitespace-nowrap text-[25.6vw] leading-[0.8] md:flex md:items-baseline md:justify-center">
              <span ref={harveyRef} className="block will-change-transform">Harvey</span>
              <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
              <span ref={specterRef} className="block will-change-transform">Specter</span>
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
              <AnimatedButton className="inline-flex items-center text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full">
                Let&apos;s talk
              </AnimatedButton>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
