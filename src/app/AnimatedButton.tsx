"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children: React.ReactNode;
}

interface LinkProps extends BaseProps { href: string; }
interface ButtonProps extends BaseProps { href?: undefined; }

type Props = LinkProps | ButtonProps;

export default function AnimatedButton({ href, className = "", style, onClick, children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cs = getComputedStyle(el);
    const origBg = cs.getPropertyValue("--btn-bg").trim() || "#000000";
    const origFg = cs.getPropertyValue("--btn-fg").trim() || "#ffffff";

    const onEnter = () =>
      gsap.to(el, { backgroundColor: origFg, color: origBg, duration: 0.28, ease: "power2.inOut" });
    const onLeave = () =>
      gsap.to(el, { backgroundColor: origBg, color: origFg, duration: 0.32, ease: "power2.inOut" });

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const cls = `bg-[var(--btn-bg,#000000)] text-[var(--btn-fg,#ffffff)] border border-[var(--btn-bg,#000000)] ${className}`;

  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={cls} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} type="button" className={cls} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
