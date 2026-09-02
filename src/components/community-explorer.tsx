"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleUserRound,
  Compass,
  Heart,
  MessageCircle,
  Search,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { rooms } from "@/lib/rooms";

const filters = [
  { value: "all", label: "すべて" },
  { value: "life", label: "お金・生活" },
  { value: "work", label: "仕事" },
  { value: "family", label: "ひとり親" },
  { value: "experience", label: "経験者" },
  { value: "listen", label: "気持ち" },
] as const;

const iconMap: Record<(typeof rooms)[number]["icon"], LucideIcon> = {
  wallet: WalletCards,
  briefcase: BriefcaseBusiness,
  mother: CircleUserRound,
  father: CircleUserRound,
  compass: Compass,
  heart: Heart,
};

export function CommunityExplorer() {
  const [category, setCategory] = useState<(typeof filters)[number]["value"]>("all");
  const [query, setQuery] = useState("");

  const visibleRooms = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("ja-JP");
    return rooms.filter((room) => {
      const matchesCategory = category === "all" || room.category === category;
      const searchable = [room.title, room.description, ...room.tags].join(" ").toLocaleLowerCase("ja-JP");
      return matchesCategory && (!normalized || searchable.includes(normalized));
    });
  }, [category, query]);

  return (
    <div className="community-explorer">
      <div className="explorer-tools">
        <label className="search-field">
          <Search aria-hidden="true" />
          <span className="sr-only">相談部屋を検索</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="悩みやキーワードで検索"
          />
        </label>
        <div className="filter-chips" aria-label="相談部屋のカテゴリー">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={category === filter.value ? "is-active" : undefined}
              type="button"
              onClick={() => setCategory(filter.value)}
              aria-pressed={category === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count" aria-live="polite">{visibleRooms.length}件の相談部屋</p>
      <div className="room-grid">
        {visibleRooms.map((room) => {
          const Icon = iconMap[room.icon];
          return (
            <article className={`room-card room-card--${room.accent}`} key={room.slug}>
              <div className="room-card__header">
                <span className="room-icon"><Icon aria-hidden="true" /></span>
                {room.badge && <span className="room-badge">{room.badge}</span>}
              </div>
              <div className="room-card__body">
                <p className="room-label">ANONYMOUS ROOM</p>
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <div className="room-tags">
                  {room.tags.map((tag) => <span key={tag}>#{tag}</span>)}
                </div>
              </div>
              <div className="room-card__activity">
                <div className="member-dots" aria-hidden="true"><i /><i /><i /></div>
                <span><UsersRound aria-hidden="true" /> {room.members.toLocaleString("ja-JP")}人</span>
                <span><MessageCircle aria-hidden="true" /> 今日 {room.postsToday}</span>
              </div>
              <Link className="room-card__link" href={`/rooms/${room.slug}`} aria-label={`${room.title}を見る`}>
                部屋を見る <ArrowRight aria-hidden="true" />
              </Link>
            </article>
          );
        })}
      </div>
      {visibleRooms.length === 0 && (
        <div className="empty-state">
          <Search aria-hidden="true" />
          <h3>一致する部屋がありません</h3>
          <p>別のキーワード、または「すべて」をお試しください。</p>
          <button type="button" onClick={() => { setCategory("all"); setQuery(""); }}>検索をリセット</button>
        </div>
      )}
    </div>
  );
}
