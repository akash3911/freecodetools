import Link from "next/link";
import { Terminal, Box, Search } from "lucide-react";

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

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-bauhaus-ink bg-white dark:bg-bauhaus-ink dark:border-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-bauhaus-red border-2 border-bauhaus-ink shadow-[2px_2px_0px_#121212] dark:border-white dark:shadow-[2px_2px_0px_#F0F0F0]" />
          <span className="text-2xl font-black uppercase tracking-tighter">
            freecodetools<span className="text-bauhaus-blue">.dev</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-widest text-sm">
          <Link href="/#tools" className="hover:text-bauhaus-red transition-colors">Tools</Link>
          <Link href="/docs" className="hover:text-bauhaus-blue transition-colors">Docs</Link>
          <Link href="https://github.com/akash3911/koppiecli" target="_blank" className="hover:text-bauhaus-yellow transition-colors flex items-center gap-2">
            <GithubIcon className="w-4 h-4" />
            GitHub
          </Link>
        </div>

        <button className="bauhaus-btn py-2 px-4 text-xs md:text-sm">
          Join Beta
        </button>
      </div>
    </nav>
  );
}
