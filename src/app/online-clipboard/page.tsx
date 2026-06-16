import Navbar from "@/components/layout/Navbar";
import { MoveRight, Clipboard, Lock, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Clipboard | Encrypted Text Sharing Tool",
  description: "Secure online clipboard for developers. Sync snippets, logs, and notes across devices without signing in. Fast, private, and easy to use.",
  keywords: ["online clipboard", "cloud clipboard", "share text online", "web clipboard"],
};

export default function OnlineClipboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-16 px-6 bg-white border-b-4 border-bauhaus-ink">
          <div className="max-w-7xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Online <span className="text-bauhaus-blue">Clipboard.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-bauhaus-ink/70 max-w-3xl">
              A private space in the cloud for your snippets. Perfect for moving configuration files, SSH keys, or long terminal logs between machines.
            </p>
            <div className="pt-4">
              <Link href="/tools/koppie" className="bauhaus-btn text-xl group">
                Access Cloud Clipboard
                <MoveRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-bauhaus-offwhite">
           <div className="max-w-4xl mx-auto bauhaus-card p-12 bg-white space-y-6">
              <h2 className="text-4xl font-black uppercase">Why use a cloud clipboard?</h2>
              <p className="text-lg font-medium leading-relaxed">
                Modern development often happens across multiple environments: your local IDE, a remote staging server, a production cluster, and your mobile phone. 
                Traditional methods like emailing snippets to yourself are slow and insecure. Our <strong>Online Clipboard</strong> solves this by providing a 
                transient, encrypted bridge between all your environments.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                   <div className="w-6 h-6 bg-bauhaus-red rounded-full" />
                   <span className="font-bold">No Login Required:</span> Just send and receive.
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-6 h-6 bg-bauhaus-blue rounded-full" />
                   <span className="font-bold">End-to-End Security:</span> Your data is your own.
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-6 h-6 bg-bauhaus-yellow rounded-full" />
                   <span className="font-bold">CLI Integration:</span> Works where you work.
                </li>
              </ul>
           </div>
        </section>
      </main>
      <footer className="border-t-4 border-bauhaus-ink py-12 px-6 bg-white text-center">
        <span className="font-black uppercase tracking-tighter">freecodetools.dev</span>
      </footer>
    </div>
  );
}
