"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

function CornerBracket({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M14 2H2V14" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function AboutTextBox({ className = "", children }: Props) {
  const rootRef  = useRef<HTMLDivElement>(null);
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bgRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root  = rootRef.current;
    const left  = leftRef.current;
    const right = rightRef.current;
    const bg    = bgRef.current;
    if (!root || !left || !right || !bg) return;

    const tl = gsap.timeline({ paused: true });
    tl.to(left,  { x: -5, duration: 0.4, ease: "power3.out" }, 0)
      .to(right, { x:  5, duration: 0.4, ease: "power3.out" }, 0)
      .to(bg,    { opacity: 1, duration: 0.3, ease: "power2.out" }, 0);

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();
    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);
    return () => {
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className={`relative flex items-center gap-3 ${className}`}>
      {/* Subtle bg tint on hover */}
      <div ref={bgRef} className="absolute inset-0 bg-[#f5f5f5] rounded-[2px]" style={{ opacity: 0 }} />

      <div ref={leftRef} className="relative flex flex-col self-stretch justify-between shrink-0">
        <CornerBracket />
        <CornerBracket className="-rotate-90" />
      </div>

      <div className="relative flex-1">
        {children}
      </div>

      <div ref={rightRef} className="relative flex flex-col self-stretch justify-between shrink-0">
        <CornerBracket className="rotate-90" />
        <CornerBracket className="rotate-180" />
      </div>
    </div>
  );
}
