import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, HeartPulse, Phone, ShieldAlert } from "lucide-react";

export const metadata: Metadata = { title: "緊急の相談先", robots: { index: true, follow: true } };

export default function EmergencyPage() {
  return (
    <main id="main-content" className="emergency-page">
      <section className="emergency-hero">
        <div className="shell">
          <Link className="back-link back-link--light" href="/"><ArrowLeft /> トップへ戻る</Link>
          <p className="eyebrow eyebrow--light"><span /> URGENT SUPPORT</p>
          <h1>いま、安全が<br />脅かされている方へ。</h1>
          <p>身の危険や命に関わる状況では、コミュニティへの投稿より先に、安全な場所へ移動して緊急窓口へ連絡してください。</p>
        </div>
      </section>
      <section className="emergency-list">
        <div className="shell narrow-content">
          <article className="emergency-card emergency-card--urgent">
            <span className="emergency-card__icon"><ShieldAlert /></span>
            <div><p>事件・暴力など、警察官にすぐ来てほしい</p><h2>警察への緊急通報</h2><a href="tel:110"><Phone /> 110</a></div>
          </article>
          <article className="emergency-card emergency-card--urgent">
            <span className="emergency-card__icon"><HeartPulse /></span>
            <div><p>けが・急病・命に関わる状態</p><h2>救急・消防</h2><a href="tel:119"><Phone /> 119</a></div>
          </article>
          <article className="emergency-card">
            <span className="emergency-card__icon"><Phone /></span>
            <div><p>配偶者やパートナーからの暴力について相談したい</p><h2>DV相談ナビ</h2><a href="tel:%238008">#8008 <small>（はれれば）</small></a><span>最寄りの配偶者暴力相談支援センターにつながります。受付時間は相談機関により異なり、通話料がかかります。</span><a className="source-link" href="https://www.gender.go.jp/policy/no_violence/dv_navi/index.html" target="_blank" rel="noreferrer">内閣府の案内を確認 <ArrowUpRight /></a></div>
          </article>
          <article className="emergency-card">
            <span className="emergency-card__icon"><HeartPulse /></span>
            <div><p>つらい気持ちや生活上の困りごとを相談したい</p><h2>よりそいホットライン</h2><a href="tel:0120279338">0120-279-338</a><span>通話料無料。どなたでも利用できる相談窓口です。音声ガイダンスで専門的な対応も選べます。</span><a className="source-link" href="https://www.mhlw.go.jp/mamorouyokokoro/" target="_blank" rel="noreferrer">厚生労働省の案内を確認 <ArrowUpRight /></a></div>
          </article>
          <div className="emergency-note"><strong>このサイトについて</strong><p>りこんの窓口 コミュニティは、警察・医療機関・相談支援機関ではなく、投稿を常時監視していません。返信を待たず、公的窓口を利用してください。</p></div>
        </div>
      </section>
    </main>
  );
}
