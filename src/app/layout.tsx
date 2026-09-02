import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import type { ReactNode } from "react";
import { MobileNav } from "@/components/mobile-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rikon-community.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "りこんの窓口 コミュニティ｜ひとりで抱えなくていい場所",
    template: "%s｜りこんの窓口 コミュニティ",
  },
  description:
    "離婚を考えはじめた方、手続き中の方、その後の暮らしを歩む方が、匿名で気持ちや経験を分かち合えるコミュニティです。",
  applicationName: "りこんの窓口 コミュニティ",
  icons: { icon: "/icon.svg" },
  keywords: ["離婚相談", "匿名コミュニティ", "ひとり親", "生活再建", "りこんの窓口"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "りこんの窓口 コミュニティ",
    title: "話せることから、次の一歩は始まる。",
    description: "匿名で話す、知る、支援につながる。りこんの窓口の安心コミュニティ。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffaf5",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={notoSansJp.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          本文へ移動
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileNav />
      </body>
    </html>
  );
}
