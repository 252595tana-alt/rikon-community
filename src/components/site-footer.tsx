import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__top">
        <div className="footer-brand">
          <Brand />
          <p>悩みを話す。必要な情報を知る。<br />そして、自分に合う支援につながる。</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>COMMUNITY</strong>
            <Link href="/#rooms">相談部屋</Link>
            <Link href="/#safety">安心・安全</Link>
            <Link href="/emergency">緊急の方へ</Link>
          </div>
          <div>
            <strong>SUPPORT</strong>
            <a href="https://252595tana-alt.github.io/rikon-support-navi-prototype/" target="_blank" rel="noreferrer">支援ナビ <ArrowUpRight /></a>
            <a href="https://rikon-window.vercel.app" target="_blank" rel="noreferrer">りこんの窓口 <ArrowUpRight /></a>
          </div>
          <div>
            <strong>POLICY</strong>
            <Link href="/terms">利用規約</Link>
            <Link href="/privacy">プライバシー</Link>
          </div>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© 2026 りこんの窓口</p>
        <p>本サービスは法律相談・医療相談・緊急対応を代替するものではありません。</p>
      </div>
    </footer>
  );
}
