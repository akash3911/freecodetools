"use client";

import { useState, useEffect } from "react";
import { PortfolioLoader } from "./PortfolioLoader";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  // Prevent scroll when loader is active
  useEffect(() => {
    document.body.style.overflow = showLoader ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  return (
    <>
      {showLoader && <PortfolioLoader onComplete={() => setShowLoader(false)} />}
      <div
        className={`min-h-screen font-outfit relative z-10 transition-opacity duration-500 ${
          showLoader ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
