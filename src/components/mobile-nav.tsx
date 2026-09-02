"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, LayoutGrid, ShieldCheck, UserRound } from "lucide-react";

const items = [
  { href: "/", label: "ホーム", icon: House },
  { href: "/rooms", label: "相談部屋", icon: LayoutGrid },
  { href: "/safety", label: "安心・安全", icon: ShieldCheck },
  { href: "/login", label: "ログイン", icon: UserRound },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="mobile-nav" aria-label="モバイルナビゲーション">
      {items.map((item) => {
        const Icon = item.icon;
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link key={item.href} className={active ? "is-active" : undefined} href={item.href} aria-current={active ? "page" : undefined}>
            <Icon aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
