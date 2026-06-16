import Navbar from "@/components/layout/Navbar";
import { MoveRight, Smartphone, Laptop, Server, Share2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share Clipboard Between Devices | Seamless Text Sync",
  description: "Want to share your clipboard between devices? Sync text and files between Windows, Mac, Linux, and Mobile instantly with our free online utility.",
  keywords: ["share clipboard between devices", "sync clipboard", "cross platform clipboard", "clipboard share online"],
};

export default function ShareClipboardBetweenDevices() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-16 px-6 bg-white border-b-4 border-bauhaus-ink">
          <div className="max-w-7xl mx-auto space-y-8 text-center">
            <div className="flex justify-center gap-8 mb-4">
               <Laptop className="w-12 h-12 text-bauhaus-red" />
               <Share2 className="w-12 h-12 text-bauhaus-ink animate-pulse" />
               <Smartphone className="w-12 h-12 text-bauhaus-blue" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Share Clipboard <br /> <span className="text-bauhaus-yellow">Between Devices.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-bauhaus-ink/70 max-w-3xl mx-auto">
              Syncing your clipboard shouldn't be hard. Our tool works across all platforms, allowing you to move data from your desktop to your mobile or from one server to another effortlessly.
            </p>
            <div className="pt-8 flex justify-center">
              <Link href="/tools/koppie" className="bauhaus-btn text-xl group bg-bauhaus-ink text-white">
                Start Syncing Now
                <MoveRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-bauhaus-ink text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
                <h2 className="text-4xl font-black uppercase tracking-tight">Multi-Platform Support</h2>
                <p className="text-lg opacity-80 leading-relaxed">
                   Whether you're a developer on Linux, a designer on macOS, or a power user on Windows, our cross-device clipboard sync tool has you covered. 
                   With a simple terminal command or web interface, your data is everywhere you need it to be.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 border-2 border-white/20 bauhaus-card bg-white/5">
                      <span className="font-bold">macOS & Linux</span>
                      <p className="text-xs opacity-60">Full CLI Support</p>
                   </div>
                   <div className="p-4 border-2 border-white/20 bauhaus-card bg-white/5">
                      <span className="font-bold">Windows</span>
                      <p className="text-xs opacity-60">PowerShell Ready</p>
                   </div>
                   <div className="p-4 border-2 border-white/20 bauhaus-card bg-white/5">
                      <span className="font-bold">Mobile</span>
                      <p className="text-xs opacity-60">Web Interface</p>
                   </div>
                   <div className="p-4 border-2 border-white/20 bauhaus-card bg-white/5">
                      <span className="font-bold">Servers</span>
                      <p className="text-xs opacity-60">SSH & Docker</p>
                   </div>
                </div>
             </div>
             <div className="bg-white/10 p-8 rounded-lg border-2 border-white/20 font-mono text-sm space-y-4">
                <p className="text-bauhaus-yellow"># Push local clipboard to cloud</p>
                <p>$ pbpaste | koppie send</p>
                <p className="text-green-400">✓ Synced! Code: 7721</p>
                <p className="pt-4 text-bauhaus-blue"># Pull on any other machine</p>
                <p>$ koppie 7721 > config.json</p>
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
