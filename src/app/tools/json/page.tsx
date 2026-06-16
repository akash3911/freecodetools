import Navbar from "@/components/layout/Navbar";
import { FileJson, Clipboard, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator - Professional Developer Utilities",
  description: "Validate, format, and visualize complex JSON structures with our high-performance tool. Features intuitive tree views and syntax highlighting.",
  keywords: ["json formatter", "json validator", "json beautifier", "json editor", "developer tools", "json"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JSON Formatter",
  "operatingSystem": "Web",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "High-performance JSON validation and formatting tool with intuitive tree views.",
  "url": "https://freecodetools.dev/tools/json"
};

export default function JsonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-grow">
        <section className="pt-20 pb-16 px-6 bg-white border-b-4 border-bauhaus-ink">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bauhaus-blue text-white font-bold text-xs uppercase tracking-widest shadow-hard">
              Core Tool
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              JSON <span className="text-bauhaus-yellow">Formatter.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-bauhaus-ink/70 max-w-2xl">
              Clean up, validate, and explore your JSON data with our high-performance interactive formatter.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-bauhaus-offwhite">
          <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[400px] border-4 border-dashed border-bauhaus-ink opacity-20">
             <p className="text-2xl font-black uppercase tracking-tighter">Tool Implementation Pending</p>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-bauhaus-ink py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-widest">
          <span>© 2026 FREECODETOOLS.DEV</span>
          <div className="flex gap-8">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
