"use client";

import { useEffect, useState } from "react";

interface PortfolioLoaderProps {
  onComplete: () => void;
}

export const PortfolioLoader = ({ onComplete }: PortfolioLoaderProps) => {
  const [progress, setProgress] = useState(20);

  // Dot texture on the percentage text
  const dotStyle: React.CSSProperties = {
    color: "transparent",
    backgroundImage: "radial-gradient(#111 1.3px, transparent 1.4px)",
    backgroundSize: "7px 7px",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  useEffect(() => {
    let loadingInterval: number | null = null;
    let doneTimeout: number | null = null;

    loadingInterval = window.setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(100, prev + Math.ceil(Math.random() * 8));
        if (next >= 100) {
          if (loadingInterval) window.clearInterval(loadingInterval);
          doneTimeout = window.setTimeout(onComplete, 220); // short delay after hitting 100%
        }
        return next;
      });
    }, 140);

    return () => {
      if (loadingInterval) window.clearInterval(loadingInterval);
      if (doneTimeout) window.clearTimeout(doneTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-white dark:bg-[#121212]">
      <div className="text-right px-4">
        <div
          className="text-[clamp(64px,16vw,210px)] leading-none font-outfit font-black tabular-nums"
          style={dotStyle}
        >
          {String(progress).padStart(3, "0")}%
        </div>
        <p className="text-[10px] md:text-xs font-outfit uppercase tracking-[0.22em] text-bauhaus-ink/65 dark:text-white/65 mt-1">
          [/LOADING]
        </p>
      </div>
    </div>
  );
};
