import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import ToolCard from "@/components/tools/ToolCard";
import Link from "next/link";
import { 
  Clipboard, 
  Code, 
  FileJson, 
  Terminal, 
  Cpu, 
  Globe, 
  Hash, 
  Zap,
  Lock,
  RefreshCw,
  Search
} from "lucide-react";

const tools = [
  {
    title: "Koppie",
    description: "Cross-device clipboard sharing CLI using short numeric codes. Copy on your laptop, paste on your server instantly.",
    href: "/tools/koppie",
    icon: Clipboard,
    color: "red" as const,
  },
  {
    title: "JSON Formatter",
    description: "Validate, format, and visualize complex JSON structures with high-performance processing and intuitive tree views.",
    href: "/tools/json",
    icon: FileJson,
    color: "blue" as const,
  },
  {
    title: "Regex Lab",
    description: "Test and debug regular expressions in real-time with detailed explanation and visual breakdown of matches.",
    href: "/tools/regex",
    icon: Search,
    color: "yellow" as const,
  },
  {
    title: "Base64 Converter",
    description: "Encode and decode text or files to Base64 format with support for various character encodings and large files.",
    href: "/tools/base64",
    icon: RefreshCw,
    color: "blue" as const,
  },
  {
    title: "JWT Decoder",
    description: "Securely decode and inspect JSON Web Tokens locally. No data ever leaves your browser.",
    href: "/tools/jwt",
    icon: Lock,
    color: "red" as const,
  },
  {
    title: "HTTP Inspector",
    description: "Mock and inspect HTTP requests, test endpoints, and generate client code in multiple languages.",
    href: "/tools/http",
    icon: Globe,
    color: "yellow" as const,
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Tools Section */}
        <section id="tools" className="py-24 px-6 bg-bauhaus-offwhite dark:bg-[#0D0D0D] border-y-4 border-bauhaus-ink dark:border-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                  Universal <span className="text-bauhaus-blue">Toolbox.</span>
                </h2>
                <p className="text-lg md:text-xl font-medium text-bauhaus-ink/60 dark:text-white/60 max-w-2xl">
                  A growing collection of essential utilities designed for developers who value speed, simplicity, and performance.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 border-4 border-bauhaus-ink dark:border-white bg-bauhaus-red" />
                <div className="w-12 h-12 border-4 border-bauhaus-ink dark:border-white bg-bauhaus-yellow" />
                <div className="w-12 h-12 border-4 border-bauhaus-ink dark:border-white bg-bauhaus-blue" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button className="bauhaus-btn group">
                View All Tools
                <Zap className="ml-2 w-4 h-4 fill-bauhaus-yellow text-bauhaus-yellow group-hover:scale-125 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-1 bg-bauhaus-red" />
              <h3 className="text-2xl font-black uppercase tracking-tight">Open Source</h3>
              <p className="font-medium text-bauhaus-ink/70 dark:text-white/70 leading-relaxed">
                Everything we build is open source. Audit the code, contribute features, or host it yourself. Transparency is our core value.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-1 bg-bauhaus-blue" />
              <h3 className="text-2xl font-black uppercase tracking-tight">Privacy First</h3>
              <p className="font-medium text-bauhaus-ink/70 dark:text-white/70 leading-relaxed">
                Your data stays with you. Most tools run entirely in the browser, and server-side tools use end-to-end encryption or transient storage.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-1 bg-bauhaus-yellow" />
              <h3 className="text-2xl font-black uppercase tracking-tight">Developer Centric</h3>
              <p className="font-medium text-bauhaus-ink/70 dark:text-white/70 leading-relaxed">
                Built by developers, for developers. Clean interfaces, keyboard shortcuts, and CLI-first integrations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto bauhaus-card bg-bauhaus-blue p-12 md:p-24 text-center space-y-8 dark:shadow-[12px_12px_0px_#F0C020]">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
              Ready to <span className="text-bauhaus-yellow">level up</span> your workflow?
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white/80 max-w-2xl mx-auto">
              Join thousands of developers using freecodetools.dev every day to build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <button className="bauhaus-btn bg-white text-bauhaus-ink border-bauhaus-ink hover:shadow-hard-yellow">
                Get Started Now
              </button>
              <button className="bauhaus-btn bg-bauhaus-ink text-white border-white hover:shadow-hard-red">
                Star on GitHub
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-bauhaus-ink dark:border-white py-12 px-6 bg-white dark:bg-bauhaus-ink">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-bauhaus-red border-2 border-bauhaus-ink" />
            <span className="font-black uppercase tracking-tighter">freecodetools.dev</span>
          </div>
          
          <div className="flex gap-8 font-bold uppercase tracking-widest text-xs">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
          
          <div className="text-xs font-bold uppercase tracking-widest text-bauhaus-ink/40 dark:text-white/40">
            © 2026 FREECODETOOLS.DEV
          </div>
        </div>
      </footer>
    </div>
  );
}
