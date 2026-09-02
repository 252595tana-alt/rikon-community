import type { Metadata } from "next";
import { CommunityExplorer } from "@/components/community-explorer";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "相談部屋を探す",
  description: "いまの悩みに近い6つの匿名相談部屋から、安心して話せる場所を探せます。",
};

export default function RoomsPage() {
  return (
    <main id="main-content" className="subpage">
      <PageHero
        eyebrow="ANONYMOUS ROOMS"
        title={<>いまの悩みに近い<br />部屋から。</>}
        lead="参加前にテーマや雰囲気を確認できます。投稿本文は参加メンバーだけに表示されます。"
      />
      <section className="rooms-index">
        <div className="shell">
          <CommunityExplorer />
        </div>
      </section>
    </main>
  );
}
