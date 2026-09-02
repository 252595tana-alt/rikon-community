"use client";

import dynamic from "next/dynamic";

const ConnectionField = dynamic(() => import("./connection-field"), {
  ssr: false,
  loading: () => <div className="webgl-loading" aria-hidden="true" />,
});

export function HeroCanvas() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <div className="css-orbit-fallback" />
      <ConnectionField />
    </div>
  );
}
