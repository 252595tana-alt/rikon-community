"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardCheck, House, MapPinned, UserRound } from "lucide-react";

const items = [
  { href: "/", label: "ホーム", icon: House },
  { href: "https://rikon-window.vercel.app/diagnosis/start", label: "離婚診断", icon: ClipboardCheck, external: true },
  { href: "https://252595tana-alt.github.io/rikon-support-navi-prototype/", label: "支援ナビ", icon: MapPinned, external: true },
  { href: "/login", label: "ログイン", icon: UserRound },
];

export function MobileNav() {
  const pathname = usePathname();
  const activeHref = pathname === "/" ? "/" : pathname === "/login" ? "/login" : "";

  return (
    <nav className="mobile-nav" aria-label="モバイルナビゲーション">
      {items.map((item) => {
        const Icon = item.icon;
        const active = activeHref === item.href;
        const content = (
          <>
            <Icon aria-hidden="true" />
            <span>{item.label}</span>
          </>
        );

        if (item.external) {
          return (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
              {content}
            </a>
          );
        }

        return (
          <Link
            key={item.href}
            className={active ? "is-active" : undefined}
            href={item.href}
            aria-current={active ? (item.href.includes("#") ? "location" : "page") : undefined}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
