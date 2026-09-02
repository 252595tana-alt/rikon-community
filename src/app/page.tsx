import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  HeartHandshake,
  LockKeyhole,
  MessageCircleHeart,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CommunityExplorer } from "@/components/community-explorer";
import { HeroCanvas } from "@/components/webgl/hero-canvas";

const steps = [
  {
    number: "01",
    title: "話す",
    en: "SHARE",
    text: "名前も顔も出さずに、いまの気持ちを言葉にする。読むだけでも大丈夫です。",
    icon: MessageCircleHeart,
  },
  {
    number: "02",
    title: "知る",
    en: "LEARN",
    text: "同じ悩みを通った人の経験や、運営が確認した支援情報から選択肢を知る。",
    icon: BookOpenText,
  },
  {
    number: "03",
    title: "つながる",
    en: "CONNECT",
    text: "必要なときは、地域の制度や専門家など、自分に合う支援へつながる。",
    icon: Route,
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-inner shell">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--light">
              <span /> ひとりで抱えなくていい場所
            </p>
            <h1 id="hero-title">
              話せることから、
              <span className="hero-title-line"><em>次の一歩</em>は始まる。</span>
            </h1>
            <p className="hero-lead">
              離婚を考えはじめたときも、手続きの途中も、
              <br className="desktop-only" />
              その後の暮らしも。似た経験を持つ誰かと、匿名で話せます。
            </p>
            <div className="hero-actions">
              <Link className="button button--mint" href="#rooms">
                相談部屋を見つける <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="#safety">
                安心して使うために
              </Link>
            </div>
            <ul className="trust-list" aria-label="サービスの特徴">
              <li><LockKeyhole aria-hidden="true" /> 匿名で参加</li>
              <li><ShieldCheck aria-hidden="true" /> 投稿は会員限定</li>
              <li>18歳以上</li>
            </ul>
          </div>

          <div className="hero-art" aria-label="それぞれの悩みが安心できる場所へつながっていく様子">
            <HeroCanvas />
            <div className="orbit-label orbit-label--one"><span />お金・生活</div>
            <div className="orbit-label orbit-label--two"><span />子育て</div>
            <div className="orbit-label orbit-label--three"><span />これから</div>
            <div className="hero-core">
              <span className="hero-core__small">YOU ARE</span>
              <strong>NOT<br />ALONE</strong>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#how-it-works">
          <span>SCROLL</span><ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section className="pathway" id="how-it-works" aria-labelledby="pathway-title">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow"><span /> この場所でできること</p>
              <h2 id="pathway-title">気持ちを、<br />次の行動へ。</h2>
            </div>
            <p>
              答えを急がなくて大丈夫。話す、知る、つながる。
              <br />いま必要なところから始められます。
            </p>
          </div>
          <div className="step-grid">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article className="step-card" key={step.number}>
                  <div className="step-card__top">
                    <span className="step-card__number">{step.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <p className="step-card__en">{step.en}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rooms-section" id="rooms" aria-labelledby="rooms-title">
        <div className="shell">
          <div className="section-heading section-heading--split section-heading--rooms">
            <div>
              <p className="eyebrow"><span /> 6つの匿名相談部屋</p>
              <h2 id="rooms-title">いまの悩みに近い部屋から。</h2>
            </div>
            <p>参加前に部屋の雰囲気を確認できます。投稿内容は参加メンバーだけに表示されます。</p>
          </div>
          <CommunityExplorer />
        </div>
      </section>

      <section className="safety-panel" id="safety" aria-labelledby="safety-title">
        <div className="shell safety-panel__grid">
          <div className="safety-orbit" aria-hidden="true">
            <span className="safety-orbit__ring" />
            <ShieldCheck />
          </div>
          <div className="safety-copy">
            <p className="eyebrow eyebrow--light"><span /> 安心のための設計</p>
            <h2 id="safety-title">あなたの安全を、<br />会話より先に。</h2>
            <p>
              本名や連絡先を公開せずに参加できます。不快な投稿の通報、個人情報を含む表現への注意、運営による確認で、安心できる場を守ります。
            </p>
            <div className="safety-features">
              <span><LockKeyhole aria-hidden="true" /> 完全匿名</span>
              <span><ShieldCheck aria-hidden="true" /> 通報・確認</span>
              <span><HeartHandshake aria-hidden="true" /> 支援への案内</span>
            </div>
            <Link className="button button--outline" href="/emergency">
              緊急時の相談先を確認 <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="support-bridge" aria-labelledby="support-title">
        <div className="shell support-bridge__inner">
          <div>
            <p className="eyebrow"><span /> りこんの窓口とつながる</p>
            <h2 id="support-title">話したあとは、<br />必要な情報へ。</h2>
          </div>
          <div className="support-cards">
            <a className="support-card support-card--nav" href="https://252595tana-alt.github.io/rikon-support-navi-prototype/" target="_blank" rel="noreferrer">
              <span className="support-card__icon"><Sparkles aria-hidden="true" /></span>
              <span><small>状況を整理したい</small><strong>支援ナビを使う</strong></span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="support-card support-card--window" href="https://rikon-window.vercel.app" target="_blank" rel="noreferrer">
              <span className="support-card__icon"><HeartHandshake aria-hidden="true" /></span>
              <span><small>サービス全体を知りたい</small><strong>りこんの窓口へ</strong></span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="final-cta__glow" aria-hidden="true" />
        <div className="shell final-cta__inner">
          <p>YOU DON&apos;T HAVE TO CARRY IT ALONE.</p>
          <h2 id="cta-title">ここなら、ひとりじゃない。</h2>
          <span>まずは、気になる部屋をのぞいてみませんか。</span>
          <Link className="button button--coral" href="#rooms">
            相談部屋を見つける <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
