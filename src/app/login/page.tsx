import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, LockKeyhole, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = { title: "ログイン・新規登録", robots: { index: false, follow: false } };

export default function LoginPage() {
  return (
    <main id="main-content" className="login-page">
      <div className="login-visual" aria-hidden="true"><div className="login-orbit" /><p>YOU ARE<br /><strong>NOT ALONE.</strong></p></div>
      <section className="login-panel">
        <Link className="back-link" href="/"><ArrowLeft /> トップへ戻る</Link>
        <div className="login-panel__inner">
          <span className="login-lock"><LockKeyhole /></span>
          <p className="eyebrow"><span /> PRIVATE &amp; ANONYMOUS</p>
          <h1>安心して話せる場所へ。</h1>
          <p>認証に使う情報は、コミュニティの公開名として表示されません。</p>
          <div className="login-benefits"><span><Check /> 匿名の公開名</span><span><Check /> 投稿は会員限定</span><span><Check /> いつでも退会可能</span></div>
          <button className="auth-button auth-button--line" type="button" disabled><MessageCircle /> LINEで続ける <small>準備中</small></button>
          <button className="auth-button" type="button" disabled><Mail /> メールで続ける <small>準備中</small></button>
          <p className="login-note">認証機能はバックエンド接続後に利用できます。いまは公開ページと相談部屋の雰囲気をご覧いただけます。</p>
          <div className="login-legal">続行すると、<Link href="/terms">利用規約</Link>と<Link href="/privacy">プライバシーポリシー</Link>に同意したものとみなされます。</div>
        </div>
      </section>
    </main>
  );
}
