"use client";

import { useState } from "react";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <span className="text-base font-semibold tracking-[-0.04em] text-black capitalize">
          H.Studio
        </span>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-14 text-base font-semibold tracking-[-0.04em] text-black capitalize">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:opacity-60 transition-opacity">
              {link}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:inline-flex items-center bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full"
        >
          Let&apos;s talk
        </a>
      </nav>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col px-8 py-6">
          <div className="flex items-center justify-between mb-16">
            <span className="text-base font-semibold tracking-[-0.04em] text-black capitalize">
              H.Studio
            </span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-4xl font-semibold tracking-[-0.04em] capitalize"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="mt-auto inline-flex items-center self-start bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </>
  );
}
