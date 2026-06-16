import { 
  Clipboard, 
  FileJson, 
  Search, 
  RefreshCw, 
  Lock, 
  Globe,
  LucideIcon
} from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: "red" | "blue" | "yellow";
  keywords: string[];
  status: "live" | "beta" | "planned";
}

export const tools: Tool[] = [
  {
    id: "koppie",
    title: "Koppie",
    description: "Cross-device clipboard sharing CLI using short numeric codes. Copy on your laptop, paste on your server instantly.",
    href: "/tools/koppie",
    icon: Clipboard,
    color: "red",
    keywords: ["clipboard sharing", "cli tool", "cross-device sync", "terminal clipboard", "developer utility", "koppie", "copy paste online", "online clipboard", "share clipboard online", "copy text between devices", "cross device clipboard"],
    status: "live"
  },
  {
    id: "json",
    title: "JSON Formatter",
    description: "Validate, format, and visualize complex JSON structures with high-performance processing and intuitive tree views.",
    href: "/tools/json",
    icon: FileJson,
    color: "blue",
    keywords: ["json formatter", "json validator", "json beautifier", "json editor", "developer tools", "json"],
    status: "beta"
  },
  {
    id: "regex",
    title: "Regex Lab",
    description: "Test and debug regular expressions in real-time with detailed explanation and visual breakdown of matches.",
    href: "/tools/regex",
    icon: Search,
    color: "yellow",
    keywords: ["regex tester", "regex debugger", "regular expression", "javascript regex", "python regex"],
    status: "planned"
  },
  {
    id: "base64",
    title: "Base64 Converter",
    description: "Encode and decode text or files to Base64 format with support for various character encodings and large files.",
    href: "/tools/base64",
    icon: RefreshCw,
    color: "blue",
    keywords: ["base64 encode", "base64 decode", "binary to base64", "image to base64"],
    status: "planned"
  },
  {
    id: "jwt",
    title: "JWT Decoder",
    description: "Securely decode and inspect JSON Web Tokens locally. No data ever leaves your browser.",
    href: "/tools/jwt",
    icon: Lock,
    color: "red",
    keywords: ["jwt decoder", "json web token", "decode jwt", "inspect jwt", "auth tools"],
    status: "planned"
  },
  {
    id: "http",
    title: "HTTP Inspector",
    description: "Mock and inspect HTTP requests, test endpoints, and generate client code in multiple languages.",
    href: "/tools/http",
    icon: Globe,
    color: "yellow",
    keywords: ["http inspector", "rest api tester", "mock api", "http client", "api debugger"],
    status: "planned"
  }
];

export const getToolById = (id: string) => tools.find(t => t.id === id);
