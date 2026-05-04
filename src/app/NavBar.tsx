"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import { useContactModal } from "./ContactModalContext";

const navLinks = [
  { label: "About",    href: "/about"    },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News",     href: "/news"     },
  { label: "Contact",  href: "/contact"  },
];

export default function NavBar({ darkText = false }: { darkText?: boolean }) {
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();

  const menuRef    = useRef<HTMLDivElement>(null);
  const menuBgRef  = useRef<HTMLDivElement>(null);
  const linkRefs   = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu  = menuRef.current;
    const bg    = menuBgRef.current;
    const links = linkRefs.current.filter(Boolean) as HTMLElement[];
    const cta   = menuCtaRef.current;
    if (!menu || !bg) return;

    if (open) {
      gsap.killTweensOf([bg, links, cta]);
      gsap.set(menu, { display: "block" });
      gsap.set(bg, { clipPath: "circle(0% at 94% 4%)" });
      gsap.set([links, cta], { opacity: 0, y: 28 });

      gsap.timeline()
        .to(bg, { clipPath: "circle(150% at 94% 4%)", duration: 0.75, ease: "power4.inOut" })
        .to([links, cta], { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: "power3.out" }, "-=0.35");
    } else {
      gsap.killTweensOf([bg, links, cta]);
      gsap.timeline({
        onComplete: () => { gsap.set(menu, { display: "none" }); },
      })
        .to([links, cta], { opacity: 0, y: -18, duration: 0.2, stagger: { each: 0.04, from: "end" }, ease: "power2.in" })
        .to(bg, { clipPath: "circle(0% at 94% 4%)", duration: 0.55, ease: "power4.inOut" }, "-=0.05");
    }
  }, [open]);

  const ink   = darkText ? "text-black" : "text-white";
  const line  = darkText ? "bg-black"   : "bg-white";
  const bdr   = darkText ? "border-black text-black" : "border-white text-white";
  const stroke = darkText ? "black" : "white";
  const blend  = darkText ? "" : "mix-blend-difference";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-6 max-md:px-4 ${blend}`}>
        <Link href="/" className={`${ink} text-base font-semibold tracking-[-0.04em] capitalize select-none`}>
          H.Studio
        </Link>

        {/* Desktop links */}
        <div className={`hidden md:flex items-center gap-14 text-base font-semibold tracking-[-0.04em] capitalize ${ink}`}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="relative py-1 group">
              {link.label}
              <span className={`absolute bottom-0 left-0 h-[1.5px] ${line} w-0 group-hover:w-full transition-[width] duration-300 ease-out`} />
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Desktop CTA */}
        <button
          onClick={openModal}
          className={`hidden md:inline-flex items-center border ${bdr} text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:scale-105 transition-transform duration-200`}
        >
          Let&apos;s talk
        </button>
      </nav>

      {/* Mobile menu */}
      <div ref={menuRef} style={{ display: "none" }} className="md:hidden fixed inset-0 z-50">
        <div
          ref={menuBgRef}
          className="absolute inset-0 bg-white"
          style={{ clipPath: "circle(0% at 94% 4%)" }}
        />

        <div className="relative z-10 flex flex-col h-full px-8 py-6 items-center justify-center gap-6 pt-24">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              ref={(el) => { linkRefs.current[i] = el; }}
              href={link.href}
              className="text-5xl font-semibold tracking-[-0.04em] capitalize text-black"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div ref={menuCtaRef} className="mt-6">
            <AnimatedButton
              className="inline-flex items-center text-sm font-medium tracking-[-0.04em] px-5 py-3 rounded-full"
              onClick={() => { setOpen(false); openModal(); }}
            >
              Let&apos;s talk
            </AnimatedButton>
          </div>
        </div>
      </div>
    </>
  );
}
