"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };

interface Props {
  img: string;
  text: string;
  className?: string;
  imgHeight?: string;
}

export default function NewsCard({ img, text, className = "", imgHeight = "h-[469px]" }: Props) {
  const rootRef  = useRef<HTMLDivElement>(null);
  const imgRef   = useRef<HTMLImageElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root    = rootRef.current;
    const imgEl   = imgRef.current;
    const arrowEl = arrowRef.current;
    if (!root || !imgEl || !arrowEl) return;

    const tl = gsap.timeline({ paused: true });
    tl.to(imgEl,   { scale: 1.06,  duration: 0.55, ease: "power3.out" }, 0)
      .to(arrowEl, { x: 4, y: -4, duration: 0.4,  ease: "power3.out" }, 0);

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
    <div ref={rootRef} className={`flex flex-col gap-4 cursor-pointer ${className}`}>
      <div className={`relative w-full ${imgHeight} overflow-hidden shrink-0`}>
        <img
          ref={imgRef}
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <p className="flex-1 text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] not-italic" style={interStyle}>
        {text}
      </p>
      <a href="#" className="inline-flex gap-[10px] items-center border-b border-black pb-1 overflow-hidden self-start">
        <span className="text-[14px] font-medium text-black tracking-[-0.56px] whitespace-nowrap" style={interStyle}>
          Read more
        </span>
        <svg
          ref={arrowRef}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden
          className="-rotate-90 shrink-0"
        >
          <path
            d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
