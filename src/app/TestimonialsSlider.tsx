"use client";
import { useRef, useState, useCallback } from "react";

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };

const rotations = [-3.5, 2, -3, 2.5];

function TestimonialCard({
  logo,
  text,
  name,
  className = "",
}: {
  logo: string;
  text: string;
  name: string;
  className?: string;
}) {
  return (
    <div className={`bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] ${className}`}>
      <div className="h-[30px]">
        <img src={logo} alt="" className="h-full w-auto max-w-[150px] object-contain object-left" />
      </div>
      <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.72px]" style={interStyle}>
        {text}
      </p>
      <p className="text-[16px] font-black uppercase leading-[1.1] tracking-[-0.64px] text-black" style={interStyle}>
        {name}
      </p>
    </div>
  );
}

type Testimonial = {
  name: string;
  text: string;
  logo: string;
};

export default function TestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    const items = Array.from(el.children) as HTMLElement[];
    let closest = 0;
    let minDist = Infinity;
    items.forEach((item, i) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const dist = Math.abs(center - itemCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const item = el.children[index] as HTMLElement;
    if (!item) return;
    const targetLeft = item.offsetLeft - (el.clientWidth - item.offsetWidth) / 2;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-scroll flex snap-x snap-mandatory py-6"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      >
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="snap-center shrink-0 w-[82vw] px-3 first:ml-[9vw] last:mr-[9vw]"
            style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
          >
            <TestimonialCard logo={t.logo} text={t.text} name={t.name} className="w-full" />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-5 h-2 bg-black" : "w-2 h-2 bg-[#ccc]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
