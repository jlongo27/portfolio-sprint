"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AboutPortrait({ src, className = "", style }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!overlayRef.current || !containerRef.current) return;

      gsap.fromTo(
        overlayRef.current,
        { scaleX: 1 },
        {
          scaleX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={style}>
      <img src={src} alt="" className="w-full h-full object-cover scale-[1.03]" />
      <div
        ref={overlayRef}
        className="absolute bg-black"
        style={{ inset: "-2px", transformOrigin: "right center" }}
      />
    </div>
  );
}
