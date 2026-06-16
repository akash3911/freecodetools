import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AppWrapper from "@/components/AppWrapper";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "FreeCodeTools.dev | Professional Developer Utilities",
    template: "%s | FreeCodeTools.dev"
  },
  description: "A comprehensive collection of high-quality developer tools, utilities, and productivity enhancers. Open-source, privacy-focused, and built for speed.",
  keywords: ["developer tools", "dev utils", "koppie", "json formatter", "regex tester", "base64", "jwt decoder", "http inspector", "coding tools", "productivity"],
  authors: [{ name: "Akash" }],
  creator: "Akash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freecodetools.dev",
    siteName: "FreeCodeTools.dev",
    title: "FreeCodeTools.dev | Professional Developer Utilities",
    description: "High-quality, open-source developer tools and productivity enhancers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreeCodeTools.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeCodeTools.dev | Professional Developer Utilities",
    description: "High-quality, open-source developer tools and productivity enhancers.",
    images: ["/og-image.png"],
    creator: "@akash3911",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-adsense-account": "ca-pub-5891495023434653",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          outfit.variable,
          jetbrainsMono.variable
        )}
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
