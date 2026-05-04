import type { Metadata } from "next";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { NEWS_QUERY } from "@/sanity/lib/queries";
import NewsHero from "./NewsHero";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "News — Harvey Specter",
  description: "Studio journal: project launches, insights, and behind the scenes.",
};

const interStyle = { fontFamily: "var(--font-inter), sans-serif" };
const monoStyle  = { fontFamily: "var(--font-geist-mono, monospace)" };
const playfairStyle = { fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 400 };

function formatDate(dateStr: string | null) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function NewsPage() {
  const { data: articles } = await sanityFetch({ query: NEWS_QUERY });

  return (
    <>
      <NewsHero count={articles?.length ?? 0} />

      <section className="bg-white px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-10">

        <div className="flex flex-col gap-3 items-end w-full">
          <span className="text-[14px] text-[#1f1f1f] text-right uppercase leading-[1.1]" style={monoStyle}>
            [ All Articles ]
          </span>
          <hr className="w-full border-t border-black m-0" />
        </div>

        {!articles?.length && (
          <p className="text-[14px] text-[#1f1f1f]/50 uppercase" style={monoStyle}>
            No articles yet — check back soon.
          </p>
        )}

        <div className="flex flex-col divide-y divide-black/10">
          {articles?.map((article: { _id: string; title: string | null; slug: string | null; category: string | null; publishedAt: string | null; excerpt: string | null; imageUrl: string | null }) => (
            <Link
              key={article._id}
              href={`/news/${article.slug ?? "#"}`}
              className="group flex flex-col md:flex-row md:items-start gap-6 py-10 md:py-12 hover:opacity-100"
            >
              {/* Image */}
              <div className="md:w-[320px] shrink-0 aspect-video overflow-hidden bg-[#f3f3f3]">
                {article.imageUrl ? (
                  <img
                    src={article.imageUrl}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-[#e8e8e8]" />
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 md:pt-2 flex-1">
                <div className="flex items-center gap-4">
                  {article.category && (
                    <span className="text-[11px] uppercase tracking-[0.06em] text-[#1f1f1f]/50" style={monoStyle}>
                      {article.category}
                    </span>
                  )}
                  {article.publishedAt && (
                    <>
                      <span className="text-[#1f1f1f]/20 text-[11px]">—</span>
                      <span className="text-[11px] uppercase tracking-[0.04em] text-[#1f1f1f]/40" style={monoStyle}>
                        {formatDate(article.publishedAt)}
                      </span>
                    </>
                  )}
                </div>

                <h2
                  className="text-black font-light not-italic uppercase tracking-[-0.06em] leading-[1] text-[clamp(24px,3.5vw,48px)] group-hover:opacity-70 transition-opacity duration-300"
                  style={interStyle}
                >
                  {article.title}
                </h2>

                <p className="text-[14px] text-[#1f1f1f]/70 leading-[1.5] tracking-[-0.03em] line-clamp-3" style={interStyle}>
                  {article.excerpt}
                </p>

                <span
                  className="text-[12px] uppercase tracking-[0.06em] text-[#1f1f1f] underline underline-offset-4 mt-auto"
                  style={monoStyle}
                >
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}
