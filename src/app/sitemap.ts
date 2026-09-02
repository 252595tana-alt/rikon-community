import type { MetadataRoute } from "next";
import { rooms } from "@/lib/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rikon-community.vercel.app";
  const pages = ["", "/rooms", "/about", "/safety", "/emergency", "/terms", "/privacy"];
  return [...pages.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })), ...rooms.map((room) => ({ url: `${base}/rooms/${room.slug}`, changeFrequency: "weekly" as const, priority: 0.6 }))];
}
