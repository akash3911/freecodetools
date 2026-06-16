import Navbar from "@/components/layout/Navbar";
import { MoveRight, Code, Terminal, Zap, Lock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share Code Snippets Online | Free Developer Tool",
  description: "Share code snippets online instantly. Our tool is built for developers to move code between IDEs, terminals, and remote servers with ease and security.",
  keywords: ["share code snippets online", "code pastebin", "developer snippet share", "share code between terminals"],
};

export default function ShareCodeSnippetsOnline() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-16 px-6 bg-white border-b-4 border-bauhaus-ink">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bauhaus-red text-white font-bold text-xs uppercase tracking-widest shadow-hard">
               Code Sharing
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Share Code <br /> <span className="text-bauhaus-blue">Snippets Online.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-bauhaus-ink/70 max-w-3xl">
              Don't let your code snippets get lost in translation. Move your logic between environments instantly with our high-performance snippet sharing tool.
            </p>
            <div className="pt-4">
              <Link href="/tools/koppie" className="bauhaus-btn text-xl group">
                Try Koppie Snippets
                <MoveRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-bauhaus-offwhite">
           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <h2 className="text-4xl font-black uppercase">Built for Developers</h2>
                 <p className="text-lg font-medium opacity-80 leading-relaxed">
                    Unlike generic pastebins, our tool is optimized for the developer workflow. 
                    Whether you're sharing a quick bug fix, a complex regex, or a multi-line shell script, 
                    we ensure it gets to the destination exactly as intended.
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white border-2 border-bauhaus-ink bauhaus-card">
                       <Code className="w-8 h-8 text-bauhaus-red shrink-0" />
                       <div>
                          <h4 className="font-bold uppercase text-sm">Preserve Formatting</h4>
                          <p className="text-xs opacity-60">No weird character conversions. Your code stays clean.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white border-2 border-bauhaus-ink bauhaus-card">
                       <Terminal className="w-8 h-8 text-bauhaus-blue shrink-0" />
                       <div>
                          <h4 className="font-bold uppercase text-sm">Terminal Ready</h4>
                          <p className="text-xs opacity-60">Paste directly into your terminal or editor.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white border-2 border-bauhaus-ink bauhaus-card">
                       <Lock className="w-8 h-8 text-bauhaus-yellow shrink-0" />
                       <div>
                          <h4 className="font-bold uppercase text-sm">Transient Storage</h4>
                          <p className="text-xs opacity-60">Snippets expire after use. No permanent digital footprint.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="bauhaus-card p-1 bg-bauhaus-ink shadow-hard-blue">
                 <div className="bg-white p-8 space-y-4">
                    <div className="flex gap-2 mb-4">
                       <div className="w-3 h-3 rounded-full bg-bauhaus-red" />
                       <div className="w-3 h-3 rounded-full bg-bauhaus-yellow" />
                       <div className="w-3 h-3 rounded-full bg-bauhaus-blue" />
                    </div>
                    <pre className="font-mono text-sm overflow-x-auto">
{`function quickFix() {
  // Shared via freecodetools.dev
  const data = await fetch('/api/v1/sync');
  return data.json();
}`}
                    </pre>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <footer className="border-t-4 border-bauhaus-ink py-12 px-6 bg-white text-center">
        <span className="font-black uppercase tracking-tighter">freecodetools.dev</span>
      </footer>
    </div>
  );
}
