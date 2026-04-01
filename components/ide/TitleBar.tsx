"use client";
import { useTheme } from "@/lib/hooks/useTheme";
import { Sun, Moon, Minus, Square, X } from "lucide-react";

const TitleBar = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <div className="flex items-center justify-between bg-ide-titlebar h-9 px-3 select-none border-b border-border">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: "hsl(45, 90%, 50%)" }}
          />
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: "hsl(120, 50%, 50%)" }}
          />
        </div>
        <span className="text-xs text-muted-foreground ml-3">
          vian.dev — DevEditor
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          title={
            theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
        >
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
        <div className="flex items-center gap-0.5 ml-2 text-muted-foreground">
          <button className="p-1 hover:bg-secondary rounded">
            <Minus size={12} />
          </button>
          <button className="p-1 hover:bg-secondary rounded">
            <Square size={10} />
          </button>
          <button className="p-1 hover:bg-destructive/20 hover:text-destructive rounded">
            <X size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
