import Link from "next/link";
import { ArrowUpRight, CircleHelp, LogIn } from "lucide-react";

export function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true"><i /><i /></span>
      <span className="brand-copy">
        <strong>りこんの窓口</strong>
        <small>COMMUNITY</small>
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link className="brand-link" href="/" aria-label="りこんの窓口コミュニティ トップへ">
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <Link href="/#rooms">相談部屋</Link>
          <Link href="/#how-it-works">この場所でできること</Link>
          <Link href="/#safety">安心・安全</Link>
          <a href="https://252595tana-alt.github.io/rikon-support-navi-prototype/" target="_blank" rel="noreferrer">支援ナビ <ArrowUpRight aria-hidden="true" /></a>
        </nav>
        <div className="header-actions">
          <Link className="emergency-link" href="/emergency">
            <CircleHelp aria-hidden="true" /> 緊急の方へ
          </Link>
          <Link className="header-login" href="/login">
            <LogIn aria-hidden="true" /> ログイン
          </Link>
        </div>
      </div>
    </header>
  );
}
