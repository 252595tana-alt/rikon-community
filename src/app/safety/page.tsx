import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, EyeOff, Flag, HeartHandshake, LockKeyhole, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "安心・安全への取り組み" };

const rules = [
  { icon: EyeOff, title: "個人を特定できる情報を書かない", text: "本名、住所、勤務先、学校名、電話番号、SNSアカウントなどは投稿しないでください。" },
  { icon: HeartHandshake, title: "相手の選択を決めつけない", text: "「離婚すべき」などの断定ではなく、自分の経験として伝えることを大切にします。" },
  { icon: Flag, title: "不安を感じたらすぐに通報", text: "攻撃的な表現、勧誘、個人情報の要求などは、返信せずに運営へ知らせてください。" },
  { icon: LockKeyhole, title: "会話を外へ持ち出さない", text: "投稿の転載やスクリーンショット共有など、メンバーの安心を損なう行為は禁止します。" },
];

export default function SafetyPage() {
  return (
    <main id="main-content" className="subpage">
      <PageHero eyebrow="SAFETY FIRST" title={<>あなたの安全を、<br />会話より先に。</>} lead="安心して話せる場を守るために、参加者と運営が一緒に守るルールを定めています。" />
      <section className="content-section safety-page">
        <div className="shell">
          <div className="safety-summary">
            <ShieldCheck aria-hidden="true" />
            <div><p className="eyebrow"><span /> SAFETY BY DESIGN</p><h2>匿名性と、見守りの仕組み。</h2><p>認証情報とコミュニティ上の公開名を分け、投稿は参加メンバーだけに表示します。不適切な内容は通報でき、運営が確認します。</p></div>
          </div>
          <div className="rule-grid">
            {rules.map((rule, index) => { const Icon = rule.icon; return <article key={rule.title}><span>0{index + 1}</span><Icon aria-hidden="true" /><h2>{rule.title}</h2><p>{rule.text}</p></article>; })}
          </div>
          <div className="moderation-flow">
            <div><p className="eyebrow"><span /> MODERATION</p><h2>困った投稿を見つけたら</h2></div>
            <ol><li><span>1</span><strong>通報する</strong><p>投稿メニューから理由を選びます。</p></li><li><span>2</span><strong>運営が確認</strong><p>内容とリスクの程度を確認します。</p></li><li><span>3</span><strong>必要な対応</strong><p>非表示、注意、利用制限などを行います。</p></li></ol>
          </div>
          <div className="emergency-banner">
            <AlertTriangle aria-hidden="true" />
            <div><strong>いま危険が迫っている、または命に関わるとき</strong><p>このコミュニティは緊急対応や24時間監視を行う窓口ではありません。安全な場所へ移動し、公的な緊急窓口へ連絡してください。</p></div>
            <Link className="button button--coral" href="/emergency">緊急の相談先を見る <ArrowRight /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
