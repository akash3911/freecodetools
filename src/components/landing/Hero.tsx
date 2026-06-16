import { Terminal, MoveRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-bauhaus-ink dark:border-white bg-bauhaus-yellow font-bold text-xs uppercase tracking-widest shadow-[4px_4px_0px_#121212] dark:shadow-[4px_4px_0px_#F0F0F0] text-bauhaus-ink">
            Now in Beta
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            Build <span className="text-bauhaus-red">faster.</span><br />
            Ship <span className="text-bauhaus-blue">better.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-bauhaus-ink/80 dark:text-white/80 max-w-xl leading-snug">
            A comprehensive collection of production-grade developer tools, generators, and utilities for the modern engineer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tools" className="bauhaus-btn text-lg group">
              Explore Tools
              <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/docs" className="bauhaus-btn bg-bauhaus-ink text-white dark:bg-white dark:text-bauhaus-ink shadow-none hover:shadow-hard transition-all border-none">
              Documentation
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="bauhaus-card p-4 md:p-6 bg-[#0F0F0F] border-white/20 shadow-hard-blue">
            <div className="flex gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-bauhaus-red" />
              <div className="w-3 h-3 rounded-full bg-bauhaus-yellow" />
              <div className="w-3 h-3 rounded-full bg-bauhaus-blue" />
            </div>
            
            <div className="font-mono text-sm md:text-base space-y-2 text-white/90">
              <p className="text-white/40"># Install the first tool: Koppie</p>
              <p><span className="text-bauhaus-yellow">$</span> npm install -g koppie</p>
              <p className="text-white/40"># Send content instantly</p>
              <p><span className="text-bauhaus-yellow">$</span> koppie send "hello world"</p>
              <p className="text-green-400">✓ Uploaded</p>
              <p className="text-bauhaus-blue">Code: 4829</p>
              <p className="mt-4 text-white/40"># Retrieve anywhere</p>
              <p><span className="text-bauhaus-yellow">$</span> koppie 4829</p>
              <p className="text-green-400">✓ Retrieved</p>
              <p>hello world</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-bauhaus-red -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-bauhaus-blue opacity-20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
