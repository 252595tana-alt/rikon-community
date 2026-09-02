"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { House, LayoutGrid, ShieldCheck, UserRound } from "lucide-react";

const items = [
  { href: "/", label: "ホーム", icon: House },
  { href: "/#rooms", label: "相談部屋", icon: LayoutGrid },
  { href: "/#safety", label: "安心・安全", icon: ShieldCheck },
  { href: "/login", label: "ログイン", icon: UserRound },
];

export function MobileNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    if (pathname !== "/") return;

    const updateActiveSection = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 240);
      const roomsTop = document.querySelector<HTMLElement>("#rooms")?.offsetTop ?? Number.POSITIVE_INFINITY;
      const safetyTop = document.querySelector<HTMLElement>("#safety")?.offsetTop ?? Number.POSITIVE_INFINITY;

      if (marker >= safetyTop) setActiveSection("/#safety");
      else if (marker >= roomsTop) setActiveSection("/#rooms");
      else setActiveSection("/");
    };

    const initialFrame = window.requestAnimationFrame(updateActiveSection);
    const initialTimer = window.setTimeout(updateActiveSection, 150);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.clearTimeout(initialTimer);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname]);

  const activeHref = pathname.startsWith("/rooms/")
    ? "/#rooms"
    : pathname === "/"
      ? activeSection
      : pathname === "/login"
        ? "/login"
        : "";

  return (
    <nav className="mobile-nav" aria-label="モバイルナビゲーション">
      {items.map((item) => {
        const Icon = item.icon;
        const active = activeHref === item.href;
        return (
          <Link
            key={item.href}
            className={active ? "is-active" : undefined}
            href={item.href}
            aria-current={active ? (item.href.includes("#") ? "location" : "page") : undefined}
          >
            <Icon aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
