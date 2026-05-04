"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useContactModal } from "./ContactModalContext";
import ContactForm from "./ContactForm";

const monoStyle  = { fontFamily: "var(--font-geist-mono, monospace)" };
const interStyle = { fontFamily: "var(--font-inter), sans-serif" };
const playfairStyle = { fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 400 };

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const wrapRef  = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hasOpened = useRef(false);

  useEffect(() => {
    const wrap  = wrapRef.current;
    const panel = panelRef.current;
    const overlay = overlayRef.current;
    if (!wrap || !panel || !overlay) return;

    if (isOpen) {
      hasOpened.current = true;
      document.body.style.overflow = "hidden";
      gsap.set(wrap, { display: "block" });
      gsap.timeline()
        .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" })
        .fromTo(panel, { x: "100%" }, { x: "0%", duration: 0.55, ease: "power4.out" }, 0);
    } else if (hasOpened.current) {
      document.body.style.overflow = "";
      gsap.timeline({
        onComplete: () => gsap.set(wrap, { display: "none" }),
      })
        .to(panel, { x: "100%", duration: 0.4, ease: "power3.in" })
        .to(overlay, { opacity: 0, duration: 0.25, ease: "power2.in" }, "-=0.2");
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);

  return (
    <div ref={wrapRef} style={{ display: "none" }} className="fixed inset-0 z-[500]">
      {/* Backdrop */}
      <div ref={overlayRef} className="absolute inset-0 bg-black/60" onClick={closeModal} />

      {/* Panel */}
      <div
        ref={panelRef}
        className="absolute top-0 right-0 bottom-0 w-full md:w-[520px] bg-white overflow-y-auto flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-black/10 shrink-0">
          <span className="text-[12px] text-[#1f1f1f]/50 uppercase tracking-[0.04em]" style={monoStyle}>
            [ Get In Touch ]
          </span>
          <button
            onClick={closeModal}
            aria-label="Close"
            className="size-8 flex items-center justify-center hover:opacity-50 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round">
              <line x1="3" y1="3" x2="15" y2="15" />
              <line x1="15" y1="3" x2="3" y2="15" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col px-8 py-10 gap-10">
          <div>
            <h2
              className="text-black font-light not-italic uppercase tracking-[-0.07em] leading-[0.9] text-[clamp(36px,5vw,56px)]"
              style={interStyle}
            >
              Let&apos;s <span style={playfairStyle}>work</span><br />together.
            </h2>
          </div>
          <ContactForm onSuccess={closeModal} />
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-black/10 shrink-0">
          <p className="text-[12px] text-[#1f1f1f]/40 leading-[1.5]" style={monoStyle}>
            joselongolant@gmail.com&nbsp;&nbsp;—&nbsp;&nbsp;Chicago, IL
          </p>
        </div>
      </div>
    </div>
  );
}
