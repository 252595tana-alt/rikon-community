import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  HeartHandshake,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CommunityExplorer } from "@/components/community-explorer";
import { HeroCanvas } from "@/components/webgl/hero-canvas";

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
        <a className="scroll-cue" href="#rooms">
          <span>SCROLL</span><ArrowDown aria-hidden="true" />
        </a>
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

    </main>
  );
}
