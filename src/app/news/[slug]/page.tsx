import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { NEWS_ARTICLE_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import NavBar from "../../NavBar";
import Footer from "../../Footer";

const interStyle    = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle     = { fontFamily: "var(--font-geist-mono, monospace)" };

function formatDate(dateStr: string | null) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await sanityFetch({ query: NEWS_ARTICLE_QUERY, params: { slug } });
  return {
    title: data ? `${data.title} — H.Studio` : "Article — H.Studio",
    description: data?.excerpt ?? undefined,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: article } = await sanityFetch({ query: NEWS_ARTICLE_QUERY, params: { slug } });

  if (!article) notFound();

  return (
    <>
      <NavBar darkText />

      <article className="bg-white pt-32 md:pt-40 pb-0">

        {/* Header */}
        <div className="px-4 md:px-8 mb-10 md:mb-14 flex flex-col gap-4">
          <Link href="/news" className="text-[12px] uppercase tracking-[0.06em] text-[#1f1f1f]/40 hover:text-black transition-colors" style={monoStyle}>
            ← Back to News
          </Link>
          <div className="flex items-center gap-4">
            {article.category && (
              <span className="text-[11px] uppercase tracking-[0.06em] text-[#1f1f1f]/50 border border-black/15 rounded-full px-3 py-1" style={monoStyle}>
                {article.category}
              </span>
            )}
            {article.publishedAt && (
              <span className="text-[11px] uppercase tracking-[0.04em] text-[#1f1f1f]/40" style={monoStyle}>
                {formatDate(article.publishedAt)}
              </span>
            )}
          </div>
          <h1
            className="text-black font-light not-italic uppercase tracking-[-0.07em] leading-[0.9] text-[clamp(36px,6vw,88px)]"
            style={interStyle}
          >
            {article.title}
          </h1>
          <p className="text-[16px] text-[#1f1f1f]/60 leading-[1.5] tracking-[-0.03em] max-w-[640px]" style={interStyle}>
            {article.excerpt}
          </p>
        </div>

        {/* Cover image */}
        {article.imageUrl && (
          <div className="w-full aspect-[16/7] overflow-hidden">
            <img src={article.imageUrl} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Body */}
        {article.body && (
          <div className="px-4 md:px-8 py-12 md:py-20 max-w-[720px]">
            <div
              className="prose prose-lg prose-neutral max-w-none"
              style={interStyle}
            >
              <PortableText value={article.body} />
            </div>
          </div>
        )}

      </article>

      <Footer />
    </>
  );
}
