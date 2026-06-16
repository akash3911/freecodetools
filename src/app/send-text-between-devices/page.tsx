import Navbar from "@/components/layout/Navbar";
import { MoveRight, Send, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send Text Between Devices | Instant P2P-like Snippet Sharing",
  description: "Need to send text between devices quickly? Our tool allows you to pipe terminal output, logs, or snippets to any other machine using a simple 4-digit code.",
  keywords: ["send text between devices", "transfer snippets between machines", "terminal text share", "ssh clipboard sharing"],
};

export default function SendTextBetweenDevices() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-16 px-6 bg-white border-b-4 border-bauhaus-ink">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-bauhaus-yellow border-2 border-bauhaus-ink font-bold text-xs uppercase tracking-widest">
                  Developer Utility
               </div>
               <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                  Send Text <br /> <span className="text-bauhaus-red">Between</span> <br /> <span className="text-bauhaus-blue">Devices.</span>
               </h1>
               <p className="text-xl md:text-2xl font-medium text-bauhaus-ink/70">
                  Instantly transfer text, logs, and commands between your terminal and any other device. No more slack messages to yourself.
               </p>
               <div className="pt-4">
                  <Link href="/tools/koppie" className="bauhaus-btn text-xl group">
                     Get Started
                     <MoveRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </div>
            <div className="bauhaus-card p-8 bg-bauhaus-offwhite space-y-6 transform rotate-1">
               <h3 className="text-2xl font-black uppercase">How it works</h3>
               <div className="space-y-4">
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-bauhaus-ink text-white flex items-center justify-center font-bold">1</div>
                     <p className="font-medium text-sm">Run <code>koppie send "text"</code> on device A.</p>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-bauhaus-ink text-white flex items-center justify-center font-bold">2</div>
                     <p className="font-medium text-sm">Receive a unique 4-digit code (e.g., 9901).</p>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-bauhaus-ink text-white flex items-center justify-center font-bold">3</div>
                     <p className="font-medium text-sm">Run <code>koppie 9901</code> on device B to receive the text.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
           <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-4xl font-black uppercase text-center">Perfect for Terminal Power Users</h2>
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="p-8 border-4 border-bauhaus-ink shadow-hard-blue bg-white">
                    <h4 className="font-black uppercase mb-2">Pipe command output</h4>
                    <code className="text-xs bg-bauhaus-offwhite p-2 block border-2 border-bauhaus-ink mb-4">
                       grep "error" access.log | koppie send
                    </code>
                    <p className="text-sm font-medium opacity-70">Instantly share log snippets with teammates or move them to your main workstation for analysis.</p>
                 </div>
                 <div className="p-8 border-4 border-bauhaus-ink shadow-hard-red bg-white">
                    <h4 className="font-black uppercase mb-2">Transfer SSH commands</h4>
                    <code className="text-xs bg-bauhaus-offwhite p-2 block border-2 border-bauhaus-ink mb-4">
                       koppie send "ssh user@192.168.1.10"
                    </code>
                    <p className="text-sm font-medium opacity-70">Move complex SSH strings from your password manager on your phone directly to your terminal.</p>
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
