import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText, HeartHandshake, MessageCircleHeart } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "この場所について" };

export default function AboutPage() {
  return (
    <main id="main-content" className="subpage">
      <PageHero
        eyebrow="ABOUT THIS PLACE"
        title={<>答えを出す前に、<br />安心して立ち止まれる場所。</>}
        lead="りこんの窓口 コミュニティは、離婚を考える人と経験した人が、匿名で気持ちと経験を分かち合うための場所です。"
      />
      <section className="content-section">
        <div className="shell narrow-content">
          <p className="lead-copy">離婚にまつわる悩みは、法律やお金だけではありません。子どものこと、仕事、住まい、周囲の目、そして言葉にしづらい気持ち。ここでは、決断を急がせず、一人ひとりの選択を尊重します。</p>
          <div className="value-grid">
            <article><MessageCircleHeart /><span>01</span><h2>話す</h2><p>本名も顔写真も不要。結論が出ていない気持ちも、そのまま言葉にできます。</p></article>
            <article><BookOpenText /><span>02</span><h2>知る</h2><p>経験者の声と、運営が確認した情報を分けて表示し、選択肢を増やします。</p></article>
            <article><HeartHandshake /><span>03</span><h2>つながる</h2><p>必要に応じて、地域の制度や専門家、公的な相談窓口へ案内します。</p></article>
          </div>
          <div className="principle-card">
            <p className="eyebrow"><span /> OUR PRINCIPLE</p>
            <h2>決めるのは、あなた。</h2>
            <p>コミュニティの体験談も、AIによる案内も、法律・医療上の判断ではありません。最終的な選択を誘導せず、考えるための材料を届けます。</p>
            <Link className="text-link" href="/rooms">相談部屋を見てみる <ArrowRight /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
