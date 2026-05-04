import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";
import ProjectsHero from "./ProjectsHero";
import ProjectsGrid from "./ProjectsGrid";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Projects — Harvey Specter",
  description: "Selected brand, photography, web, and campaign work.",
};

export default async function ProjectsPage() {
  const { data: portfolioItems } = await sanityFetch({ query: PORTFOLIO_QUERY });

  return (
    <>
      <ProjectsHero count={portfolioItems?.length ?? 0} />
      <ProjectsGrid items={portfolioItems ?? []} />
      <Footer />
    </>
  );
}
