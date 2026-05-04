"use client";

import { useState } from "react";

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle  = { fontFamily: "var(--font-geist-mono, monospace)" };

const PROJECT_TYPES = ["Brand Identity", "Web Design", "Photography", "Campaign", "Other"];

interface Props {
  onSuccess?: () => void;
  dark?: boolean;
}

export default function ContactForm({ onSuccess, dark = false }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });

  const text   = dark ? "text-white" : "text-black";
  const border = dark ? "border-white/20 focus:border-white" : "border-black/20 focus:border-black";
  const label  = dark ? "text-white/50" : "text-[#1f1f1f]/50";
  const bg     = dark ? "bg-transparent" : "bg-transparent";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // Wire up an email service (Resend, SendGrid, etc.) here.
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setTimeout(() => onSuccess?.(), 1800);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4 py-12 items-center text-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="19.5" stroke={dark ? "white" : "black"} strokeOpacity="0.2" />
          <path d="M12 20L18 26L28 14" stroke={dark ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className={`text-[18px] font-light tracking-[-0.04em] ${text}`} style={interStyle}>
          Message received — we&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name + Email row */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-2 flex-1">
          <label className={`text-[11px] uppercase tracking-[0.08em] ${label}`} style={monoStyle}>Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`${bg} border-b ${border} ${text} py-2 text-[15px] tracking-[-0.03em] outline-none transition-colors placeholder:opacity-30`}
            style={interStyle}
            placeholder="Harvey Specter"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label className={`text-[11px] uppercase tracking-[0.08em] ${label}`} style={monoStyle}>Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${bg} border-b ${border} ${text} py-2 text-[15px] tracking-[-0.03em] outline-none transition-colors placeholder:opacity-30`}
            style={interStyle}
            placeholder="harvey@pearsonhardman.com"
          />
        </div>
      </div>

      {/* Project type */}
      <div className="flex flex-col gap-3">
        <label className={`text-[11px] uppercase tracking-[0.08em] ${label}`} style={monoStyle}>Project Type</label>
        <div className="flex gap-2 flex-wrap">
          {PROJECT_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setForm({ ...form, type: t })}
              className={`px-3 py-[6px] rounded-full text-[12px] uppercase tracking-[0.01em] border transition-colors duration-200 ${
                form.type === t
                  ? dark ? "bg-white text-black border-white" : "bg-black text-white border-black"
                  : dark ? "border-white/20 text-white/60 hover:border-white/50" : "border-black/20 text-[#1f1f1f]/60 hover:border-black/50"
              }`}
              style={monoStyle}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className={`text-[11px] uppercase tracking-[0.08em] ${label}`} style={monoStyle}>Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${bg} border-b ${border} ${text} py-2 text-[15px] tracking-[-0.03em] outline-none transition-colors resize-none placeholder:opacity-30`}
          style={interStyle}
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`self-start px-6 py-3 rounded-full text-[14px] font-medium tracking-[-0.03em] transition-opacity duration-200 ${
          dark
            ? "bg-white text-black hover:opacity-80"
            : "bg-black text-white hover:opacity-75"
        } disabled:opacity-40`}
        style={interStyle}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
