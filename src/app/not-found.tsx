import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main id="main-content" className="not-found"><p>404</p><h1>ページが見つかりません</h1><span>URLが変更されたか、ページが削除された可能性があります。</span><Link className="button button--dark" href="/"><ArrowLeft /> トップへ戻る</Link></main>;
}
