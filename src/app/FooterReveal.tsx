"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterReveal({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    // Measure footer height before GSAP transforms it, then lock the wrapper height
    const h = inner.getBoundingClientRect().height;
    wrapper.style.height = `${h}px`;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",   // footer area enters viewport
            end: "bottom bottom",  // footer bottom reaches viewport bottom
            scrub: 1.2,
          },
        }
      );
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    // bg-black so the "empty" wrapper matches the footer colour before it rises in
    <div ref={wrapperRef} className="overflow-hidden bg-black">
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
