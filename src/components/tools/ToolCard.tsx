import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: "red" | "blue" | "yellow";
  className?: string;
}

export default function ToolCard({ title, description, href, icon: Icon, color, className }: ToolCardProps) {
  const colorMap = {
    red: "hover:shadow-hard-red",
    blue: "hover:shadow-hard-blue",
    yellow: "hover:shadow-hard-yellow",
  };

  const borderMap = {
    red: "border-bauhaus-red",
    blue: "border-bauhaus-blue",
    yellow: "border-bauhaus-yellow",
  };

  return (
    <Link 
      href={href}
      className={cn(
        "bauhaus-card p-6 flex flex-col h-full group",
        colorMap[color],
        className
      )}
    >
      <div className={cn(
        "w-12 h-12 flex items-center justify-center border-4 mb-4 transition-transform group-hover:rotate-6",
        borderMap[color],
        "border-bauhaus-ink dark:border-white"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="text-xl font-black uppercase mb-2 tracking-tight group-hover:text-bauhaus-red transition-colors">
        {title}
      </h3>
      
      <p className="text-sm font-medium text-bauhaus-ink/70 dark:text-white/70 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-bauhaus-ink dark:border-white">
          Explore Tool
        </span>
        <div className={cn(
          "w-4 h-4 rounded-full",
          color === "red" && "bg-bauhaus-red",
          color === "blue" && "bg-bauhaus-blue",
          color === "yellow" && "bg-bauhaus-yellow"
        )} />
      </div>
    </Link>
  );
}
