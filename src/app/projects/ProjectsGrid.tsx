"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioCard from "../PortfolioCard";

gsap.registerPlugin(ScrollTrigger);

const monoStyle  = { fontFamily: "var(--font-geist-mono, monospace)" };
const interStyle = { fontFamily: "var(--font-inter), sans-serif" };

interface Item {
  _id: string;
  title: string | null;
  slug: string | null;
  categories: string[] | null;
  coverImageUrl: string | null;
  tall: boolean | null;
}

export default function ProjectsGrid({ items }: { items: Item[] }) {
  const allCategories = Array.from(new Set(items.flatMap((i) => i.categories ?? [])));
  const filters = ["All", ...allCategories];

  const [active, setActive] = useState("All");

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  const filtered = active === "All"
    ? items
    : items.filter((i) => i.categories?.includes(active));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Animate cards in when filter changes
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = Array.from(gridRef.current.children) as HTMLElement[];
    gsap.from(cards, {
      y: 20,
      opacity: 0,
      duration: 0.45,
      stagger: 0.06,
      ease: "power3.out",
      clearProps: "all",
    });
  }, [active]);

  return (
    <section ref={sectionRef} className="bg-white px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-10">

      {/* Header row */}
      <div ref={headerRef} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 items-end w-full">
          <span className="text-[14px] text-[#1f1f1f] text-right uppercase leading-[1.1]" style={monoStyle}>
            [ All Projects ]
          </span>
          <hr className="w-full border-t border-black m-0" />
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-[7px] rounded-full text-[12px] uppercase tracking-[0.02em] border transition-colors duration-200 ${
                active === f
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-[#1f1f1f] border-black/25 hover:border-black"
              }`}
              style={monoStyle}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto self-center text-[12px] text-[#1f1f1f]/50 uppercase" style={monoStyle}>
            {filtered.length}&nbsp;{filtered.length === 1 ? "work" : "works"}
          </span>
        </div>
      </div>

      {/* Mobile: single column */}
      <div ref={gridRef} className="flex flex-col gap-8 md:hidden">
        {filtered.map((p) => (
          <PortfolioCard
            key={p._id}
            name={p.title ?? ""}
            tags={p.categories ?? []}
            img={p.coverImageUrl ?? ""}
            tall={p.tall ?? false}
            mobile
          />
        ))}
      </div>

      {/* Desktop: 2-column grid */}
      <div className="hidden md:grid grid-cols-2 gap-x-6 gap-y-16 items-start">
        {filtered.map((p, i) => (
          <div key={p._id} className={i % 2 === 1 ? "mt-[120px]" : ""}>
            <PortfolioCard
              name={p.title ?? ""}
              tags={p.categories ?? []}
              img={p.coverImageUrl ?? ""}
              tall={p.tall ?? false}
            />
          </div>
        ))}
      </div>

    </section>
  );
}
