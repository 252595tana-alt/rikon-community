import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, LockKeyhole, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";
import { JoinDialog } from "@/components/join-dialog";
import { getRoom, rooms } from "@/lib/rooms";

type RoomPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const room = getRoom((await params).slug);
  if (!room) return { title: "相談部屋が見つかりません" };
  return { title: room.title, description: room.description };
}

export default async function RoomPage({ params }: RoomPageProps) {
  const room = getRoom((await params).slug);
  if (!room) notFound();

  return (
    <main id="main-content" className={`room-detail room-detail--${room.accent}`}>
      <section className="room-detail__hero">
        <div className="shell">
          <Link className="back-link" href="/rooms"><ArrowLeft aria-hidden="true" /> 相談部屋一覧</Link>
          <div className="room-detail__title-row">
            <div>
              <p className="eyebrow"><span /> ANONYMOUS ROOM</p>
              <h1>{room.title}</h1>
              <p>{room.description}</p>
            </div>
            <div className="room-detail__numbers">
              <span><UsersRound aria-hidden="true" /><strong>{room.members.toLocaleString("ja-JP")}</strong>メンバー</span>
              <span><MessageCircle aria-hidden="true" /><strong>{room.postsToday}</strong>今日の投稿</span>
            </div>
          </div>
          <div className="room-detail__tags">{room.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
        </div>
      </section>

      <section className="room-preview">
        <div className="shell room-preview__grid">
          <div>
            <div className="room-preview__heading">
              <div><p className="eyebrow"><span /> ROOM PREVIEW</p><h2>この部屋の会話</h2></div>
              <span className="member-only"><LockKeyhole aria-hidden="true" /> メンバー限定</span>
            </div>
            <article className="locked-post">
              <div className="locked-post__avatar" aria-hidden="true" />
              <div className="locked-post__content">
                <span>匿名メンバー・今日</span>
                <h3>{room.question}</h3>
                <div className="blur-lines" aria-hidden="true"><i /><i /><i /></div>
                <div className="locked-notice"><LockKeyhole aria-hidden="true" /> 参加すると投稿と返信を読めます</div>
              </div>
            </article>
            <article className="locked-post locked-post--subdued" aria-hidden="true">
              <div className="locked-post__avatar" />
              <div className="locked-post__content"><span>匿名メンバー・昨日</span><div className="blur-lines"><i /><i /><i /></div></div>
            </article>
          </div>

          <aside className="join-card">
            <ShieldCheck aria-hidden="true" />
            <h2>安心して話せる部屋へ。</h2>
            <p>公開名はいつでも変更できます。参加した部屋や投稿内容が外部に公開されることはありません。</p>
            <JoinDialog roomTitle={room.title} />
            <Link href="/safety">参加前に安全ルールを確認</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
