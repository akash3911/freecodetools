import Navbar from "@/components/layout/Navbar";
import { MoveRight, Zap, Shield, Globe, Terminal } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copy Paste Online | Share Text Between Devices Instantly",
  description: "Looking for a way to copy paste online? Share text, snippets, and commands between your laptop, phone, and servers instantly with our secure, login-free tool.",
  keywords: ["copy paste online", "online clipboard", "share text between devices", "cross device copy paste"],
};

export default function CopyPasteOnline() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-16 px-6 bg-white border-b-4 border-bauhaus-ink">
          <div className="max-w-7xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Copy Paste <span className="text-bauhaus-red">Online.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-bauhaus-ink/70 max-w-3xl">
              The fastest way to move text across your devices. No accounts, no emails, no friction. Just copy on one device and paste on another in seconds.
            </p>
            <div className="pt-4">
              <Link href="/tools/koppie" className="bauhaus-btn text-xl group">
                Try Koppie CLI
                <MoveRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-bauhaus-offwhite">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="bauhaus-card p-8 space-y-4 bg-white">
              <div className="w-12 h-12 bg-bauhaus-yellow border-4 border-bauhaus-ink flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase">Instant Sync</h3>
              <p className="font-medium text-bauhaus-ink/60">Upload your text and get a 4-digit code. Enter the code on any other device to retrieve it instantly.</p>
            </div>
            <div className="bauhaus-card p-8 space-y-4 bg-white">
              <div className="w-12 h-12 bg-bauhaus-blue border-4 border-bauhaus-ink flex items-center justify-center text-white">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase">Secure & Private</h3>
              <p className="font-medium text-bauhaus-ink/60">Your data is stored temporarily and automatically deleted after retrieval. We value your privacy.</p>
            </div>
            <div className="bauhaus-card p-8 space-y-4 bg-white">
              <div className="w-12 h-12 bg-bauhaus-red border-4 border-bauhaus-ink flex items-center justify-center text-white">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase">CLI Optimized</h3>
              <p className="font-medium text-bauhaus-ink/60">Built for developers. Use our lightweight CLI to pipe command outputs directly to your cloud clipboard.</p>
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
