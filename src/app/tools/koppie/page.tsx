import Navbar from "@/components/layout/Navbar";
import { 
  Clipboard, 
  Terminal, 
  Zap, 
  Globe, 
  Lock, 
  Download, 
  ShieldCheck,
  Smartphone,
  Laptop,
  Server
} from "lucide-react";
import Link from "next/link";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function KoppiePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Tool Hero */}
        <section className="pt-20 pb-16 px-6 bg-white dark:bg-bauhaus-ink border-b-4 border-bauhaus-ink dark:border-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-bauhaus-red text-white font-bold text-xs uppercase tracking-widest shadow-hard">
                Featured Tool
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Copy once.<br />
                <span className="text-bauhaus-blue">Paste anywhere.</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-bauhaus-ink/70 dark:text-white/70 max-w-xl">
                Koppie is a lightweight CLI that lets developers instantly move text, commands, logs, and snippets between devices using short numeric codes.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#install" className="bauhaus-btn">
                  <Download className="mr-2 w-5 h-5" />
                  Install CLI
                </Link>
                <Link href="https://github.com/akash3911/koppiecli" target="_blank" className="bauhaus-btn bg-bauhaus-yellow border-bauhaus-ink text-bauhaus-ink">
                  <GithubIcon className="mr-2 w-5 h-5" />
                  View Source
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <div className="bauhaus-card p-6 bg-bauhaus-ink border-white/20 shadow-hard-red transform rotate-2">
                 <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-bauhaus-red" />
                      <div className="w-3 h-3 rounded-full bg-bauhaus-yellow" />
                      <div className="w-3 h-3 rounded-full bg-bauhaus-blue" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Koppie v1.0.0</span>
                 </div>
                 <div className="font-mono text-sm md:text-base space-y-4 text-white">
                    <div className="space-y-1">
                      <p className="text-white/40 font-bold tracking-widest text-[10px] uppercase">Device A (MacBook)</p>
                      <p><span className="text-bauhaus-red">$</span> koppie send "ssh root@prod-1"</p>
                      <p className="text-green-400">✓ Content synced. Use code: <span className="underline decoration-2 underline-offset-4">8421</span></p>
                    </div>
                    <div className="pt-4 space-y-1">
                      <p className="text-white/40 font-bold tracking-widest text-[10px] uppercase">Device B (Ubuntu Server)</p>
                      <p><span className="text-bauhaus-blue">$</span> koppie 8421</p>
                      <p className="text-white bg-bauhaus-blue/30 px-2 py-1 inline-block">ssh root@prod-1</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-bauhaus-offwhite dark:bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">
              Why use <span className="text-bauhaus-red">Koppie?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Smartphone,
                  title: "Cross-Device",
                  desc: "Seamlessly share between your laptop, server, CI/CD pipeline, and even mobile.",
                  color: "bg-bauhaus-red"
                },
                {
                  icon: Zap,
                  title: "Instant Sync",
                  desc: "Zero configuration. Just send and retrieve using a simple 4-digit code.",
                  color: "bg-bauhaus-yellow"
                },
                {
                  icon: ShieldCheck,
                  title: "Secure",
                  desc: "Transient storage. Your data is automatically deleted after retrieval or expiry.",
                  color: "bg-bauhaus-blue"
                },
                {
                  icon: Globe,
                  title: "Cloud Native",
                  desc: "Works anywhere with an internet connection. No local network required.",
                  color: "bg-bauhaus-ink"
                }
              ].map((f, i) => (
                <div key={i} className="bauhaus-card p-8 space-y-4">
                  <div className={`w-12 h-12 flex items-center justify-center border-4 border-bauhaus-ink dark:border-white ${f.color} text-white`}>
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight">{f.title}</h3>
                  <p className="font-medium text-bauhaus-ink/60 dark:text-white/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="install" className="py-24 px-6 border-y-4 border-bauhaus-ink dark:border-white bg-white dark:bg-bauhaus-ink">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Quick <span className="text-bauhaus-yellow">Install.</span>
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="font-bold uppercase tracking-widest text-xs opacity-60">Using NPM</p>
                  <div className="bauhaus-card p-4 bg-bauhaus-offwhite dark:bg-[#1A1A1A] flex items-center justify-between group">
                    <code className="font-mono font-bold text-bauhaus-blue">npm install -g koppie</code>
                    <button className="text-bauhaus-ink/40 hover:text-bauhaus-ink dark:text-white/40 dark:hover:text-white transition-colors">
                      <Clipboard className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-bold uppercase tracking-widest text-xs opacity-60">Using Yarn</p>
                  <div className="bauhaus-card p-4 bg-bauhaus-offwhite dark:bg-[#1A1A1A] flex items-center justify-between">
                    <code className="font-mono font-bold text-bauhaus-red">yarn global add koppie</code>
                    <button className="text-bauhaus-ink/40 hover:text-bauhaus-ink dark:text-white/40 dark:hover:text-white transition-colors">
                      <Clipboard className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-bold uppercase tracking-widest text-xs opacity-60">Using PNPM</p>
                  <div className="bauhaus-card p-4 bg-bauhaus-offwhite dark:bg-[#1A1A1A] flex items-center justify-between">
                    <code className="font-mono font-bold text-bauhaus-yellow">pnpm add -g koppie</code>
                    <button className="text-bauhaus-ink/40 hover:text-bauhaus-ink dark:text-white/40 dark:hover:text-white transition-colors">
                      <Clipboard className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-bauhaus-yellow/10 p-8 md:p-12 border-4 border-dashed border-bauhaus-yellow flex flex-col justify-center space-y-6">
              <h3 className="text-3xl font-black uppercase tracking-tighter">Usage Examples</h3>
              <ul className="space-y-4 font-bold text-sm uppercase tracking-wider">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 bg-bauhaus-red" />
                  <span>Send a message: <code className="text-bauhaus-red ml-2">koppie send "Hello"</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 bg-bauhaus-blue" />
                  <span>Retrieve by code: <code className="text-bauhaus-blue ml-2">koppie 1234</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 bg-bauhaus-yellow" />
                  <span>Pipe data: <code className="text-bauhaus-yellow ml-2">cat log.txt | koppie send</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 bg-bauhaus-ink dark:bg-white" />
                  <span>Check status: <code className="text-bauhaus-ink dark:text-white ml-2">koppie --status</code></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              How it <span className="text-bauhaus-blue">Works.</span>
            </h2>
            
            <div className="relative space-y-24">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-bauhaus-ink/10 dark:bg-white/10 -translate-x-1/2 hidden md:block" />
              
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="md:text-right space-y-4">
                  <div className="inline-block px-4 py-1 bg-bauhaus-red text-white font-black text-xl mb-4">01</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Upload</h3>
                  <p className="font-medium text-bauhaus-ink/60 dark:text-white/60">
                    Run <code className="bg-bauhaus-offwhite dark:bg-white/10 px-2 py-1">koppie send</code>. Your data is encrypted and sent to our transient storage.
                  </p>
                </div>
                <div className="hidden md:block" />
              </div>

              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="hidden md:block" />
                <div className="md:text-left space-y-4">
                  <div className="inline-block px-4 py-1 bg-bauhaus-blue text-white font-black text-xl mb-4">02</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Generate Code</h3>
                  <p className="font-medium text-bauhaus-ink/60 dark:text-white/60">
                    A unique 4-digit numeric code is generated instantly. This code is your temporary key.
                  </p>
                </div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="md:text-right space-y-4">
                  <div className="inline-block px-4 py-1 bg-bauhaus-yellow text-bauhaus-ink font-black text-xl mb-4">03</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Retrieve</h3>
                  <p className="font-medium text-bauhaus-ink/60 dark:text-white/60">
                    On another device, run <code className="bg-bauhaus-offwhite dark:bg-white/10 px-2 py-1">koppie [code]</code>. The data is pulled and deleted from the server.
                  </p>
                </div>
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto bauhaus-card bg-bauhaus-red p-12 md:p-24 text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
              Stop emailing <span className="text-bauhaus-yellow">snippets</span> to yourself.
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white/80 max-w-2xl mx-auto">
              Start using Koppie today and experience the fastest way to share data between terminals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link href="https://www.npmjs.com/package/koppie" target="_blank" className="bauhaus-btn bg-white text-bauhaus-ink border-bauhaus-ink">
                Install from NPM
              </Link>
              <Link href="/" className="bauhaus-btn bg-bauhaus-ink text-white border-white">
                Explore More Tools
              </Link>
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
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="https://github.com/akash3911/koppiecli" target="_blank" className="hover:underline">GitHub</Link>
            <Link href="https://www.npmjs.com/package/koppie" target="_blank" className="hover:underline">NPM</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
          </div>
          
          <div className="text-xs font-bold uppercase tracking-widest text-bauhaus-ink/40 dark:text-white/40">
            © 2026 FREECODETOOLS.DEV
          </div>
        </div>
      </footer>
    </div>
  );
}
