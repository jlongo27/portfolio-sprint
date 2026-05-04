"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
  className?: string;
  from?: number;
  to?: number;
}

export default function ScrollDriftLeft({ children, className = "", from = 0, to = -80 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) {
      if (ref.current) gsap.set(ref.current, { clearProps: "all" });
      return;
    }
    const ctx = gsap.context(() => {
      if (!ref.current) return;
      gsap.fromTo(ref.current, { x: from }, {
        x: to,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [from, to]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
