import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="page-hero__mesh" aria-hidden="true" />
      <div className="shell page-hero__inner">
        <p className="eyebrow eyebrow--light"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
        {children}
      </div>
    </section>
  );
}
