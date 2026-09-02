import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "プライバシーポリシー" };

export default function PrivacyPage() {
  return <main id="main-content" className="subpage legal-page"><PageHero eyebrow="PRIVACY" title="プライバシーポリシー" lead="匿名性を大切にし、必要な情報だけを適切に取り扱います。" /><section className="content-section"><div className="shell legal-content"><p className="legal-date">最終更新：2026年9月2日</p><h2>1. 取得する情報</h2><p>正式提供時には、認証に必要な識別情報、利用規約への同意記録、サービス利用履歴、投稿・通報等の情報を取得します。コミュニティ上では認証情報と異なる匿名の公開名を使用します。</p><h2>2. 利用目的</h2><p>本人確認、サービス提供、安全管理、不正利用防止、問い合わせ対応、品質改善のために利用します。</p><h2>3. 安全管理</h2><p>アクセス制御、通信の暗号化、権限管理等を行い、取得情報への不要なアクセスを防ぎます。保存期間は正式提供前に確定します。</p><h2>4. 外部サービス</h2><p>認証、データ保管、AIによる案内、決済等に外部サービスを利用する場合は、提供先と範囲を明示します。</p><div className="draft-notice">正式提供前に、運営主体・問い合わせ先・保存期間・委託先等を確定し、本方針を更新します。</div></div></section></main>;
}
