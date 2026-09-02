import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "利用規約" };

export default function TermsPage() {
  return <main id="main-content" className="subpage legal-page"><PageHero eyebrow="TERMS" title="利用規約" lead="コミュニティを安心して利用するための基本ルールです。" /><section className="content-section"><div className="shell legal-content"><p className="legal-date">最終更新：2026年9月2日</p><h2>1. はじめに</h2><p>本サービスは、18歳以上の方を対象とした匿名コミュニティです。体験の共有と支援情報への案内を目的とし、法律・医療上の判断や緊急対応を提供するものではありません。</p><h2>2. 禁止事項</h2><p>個人情報の掲載、誹謗中傷、差別的表現、脅迫、営業・勧誘、なりすまし、投稿の無断転載、その他コミュニティの安全を損なう行為を禁止します。</p><h2>3. 投稿と運営対応</h2><p>安全確保のため、運営は投稿の非表示、利用制限等を行うことがあります。投稿に緊急性が疑われる場合でも、常時監視や個別の救助を保証するものではありません。</p><h2>4. 体験談と情報</h2><p>参加者の投稿は個人の体験や意見です。重要な判断は、公的機関や資格を持つ専門家にもご相談ください。</p><div className="draft-notice">正式提供前に、運営主体・問い合わせ先・準拠法等を確定し、本規約を更新します。</div></div></section></main>;
}
