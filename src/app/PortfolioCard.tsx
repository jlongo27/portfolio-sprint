"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };

interface Props {
  name: string;
  tags: string[];
  img: string;
  tall?: boolean;
  mobile?: boolean;
}

export default function PortfolioCard({ name, tags, img, tall = false, mobile = false }: Props) {
  const rootRef       = useRef<HTMLDivElement>(null);
  const imgRef        = useRef<HTMLImageElement>(null);
  const circleFillRef = useRef<SVGCircleElement>(null);
  const arrowPathRef  = useRef<SVGPathElement>(null);

  useEffect(() => {
    const root        = rootRef.current;
    const imgEl       = imgRef.current;
    const circleFill  = circleFillRef.current;
    const arrowPath   = arrowPathRef.current;
    if (!root || !imgEl || !circleFill || !arrowPath) return;

    const tl = gsap.timeline({ paused: true });
    tl.to(root,       { y: -8,                        duration: 0.5,  ease: "power3.out" }, 0)
      .to(imgEl,      { scale: 1.06,                  duration: 0.6,  ease: "power3.out" }, 0)
      .to(circleFill, { opacity: 1,                   duration: 0.3,  ease: "power2.out" }, 0)
      .to(arrowPath,  { attr: { stroke: "#ffffff" },  duration: 0.25, ease: "power2.out" }, 0.05);

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();
    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);
    return () => {
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const imgH = mobile ? "h-[390px]" : tall ? "h-[744px]" : "h-[699px]";
  const titleCls = mobile ? "text-[24px] tracking-[-0.96px]" : "text-[36px] tracking-[-1.44px]";

  return (
    <div ref={rootRef} className="flex flex-col gap-[10px] w-full cursor-pointer">
      <div className={`relative w-full overflow-hidden ${imgH} flex flex-col justify-end pb-4 pl-4`}>
        <img
          ref={imgRef}
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="relative flex gap-3 items-center flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-full text-[14px] text-[#111] font-medium tracking-[-0.56px] whitespace-nowrap"
              style={interStyle}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <p
          className={`font-black not-italic uppercase leading-[1.1] text-black ${titleCls}`}
          style={interStyle}
        >
          {name}
        </p>
        <div className="shrink-0 size-[32px]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            {/* Filled circle — fades in on hover behind the stroke circle */}
            <circle ref={circleFillRef} cx="16" cy="16" r="15.5" fill="black" style={{ opacity: 0 }} />
            <circle cx="16" cy="16" r="15.5" stroke="black" strokeWidth="1" />
            <path
              ref={arrowPathRef}
              d="M11.5 20.5L20.5 11.5M20.5 11.5H14.5M20.5 11.5V17.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
