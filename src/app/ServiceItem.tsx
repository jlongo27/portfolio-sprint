"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle = { fontFamily: "var(--font-geist-mono, monospace)" };

interface Props {
  num: string;
  name: string;
  description: string;
  img: string;
}

export default function ServiceItem({ num, name, description, img }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const ruleRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const nameEl = nameRef.current;
    const imgEl = imgRef.current;
    const ruleEl = ruleRef.current;
    if (!root || !nameEl || !imgEl || !ruleEl) return;

    const tl = gsap.timeline({ paused: true });
    tl.to(nameEl, { x: 14, duration: 0.4, ease: "power3.out" }, 0)
      .to(imgEl, { scale: 1.08, duration: 0.5, ease: "power3.out" }, 0)
      .to(ruleEl, { opacity: 0.4, duration: 0.3, ease: "power2.out" }, 0);

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
    <div ref={rootRef} className="flex flex-col gap-[9px] w-full cursor-default">
      <span className="text-[14px] text-white uppercase leading-[1.1]" style={monoStyle}>
        {num}
      </span>
      <hr ref={ruleRef} className="w-full border-t border-white m-0" />

      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-start md:justify-between pt-[9px]">
        <p
          ref={nameRef}
          className="text-[36px] text-white font-bold italic leading-[1.1] tracking-[-1.44px] uppercase shrink-0"
          style={interStyle}
        >
          {name}
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <p
            className="text-[14px] text-white leading-[1.3] tracking-[-0.56px] not-italic md:w-[393px]"
            style={interStyle}
          >
            {description}
          </p>
          <div className="relative size-[151px] shrink-0 overflow-hidden">
            <img
              ref={imgRef}
              src={img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
