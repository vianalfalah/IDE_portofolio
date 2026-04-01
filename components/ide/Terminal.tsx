'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Terminal as TermIcon, X } from "lucide-react";

const terminalLines = [
  { type: "command" as const, text: "$ npm run dev" },
  { type: "output" as const, text: "  VITE v5.4.19  ready in 234ms" },
  { type: "output" as const, text: "" },
  { type: "success" as const, text: "  ➜  Local:   http://localhost:5173/" },
  { type: "output" as const, text: "  ➜  Network: http://192.168.1.42:5173/" },
  { type: "output" as const, text: "" },
  { type: "command" as const, text: '$ echo "Welcome to my portfolio! 🚀"' },
  { type: "success" as const, text: "Welcome to my portfolio! 🚀" },
  { type: "command" as const, text: "$ cat about.txt" },
  { type: "output" as const, text: "Frontend Developer | 5+ years experience" },
  { type: "output" as const, text: "Passionate about clean code & great UX" },
  { type: "output" as const, text: "Navigate using the file explorer on the left ←" },
];

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-t border-border flex flex-col shrink-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1 text-xs text-muted-foreground hover:text-foreground bg-ide-tab transition-colors"
      >
        <TermIcon size={12} />
        <span className="font-medium">TERMINAL</span>
        {isOpen ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 180 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="bg-ide-terminal h-full p-3 overflow-y-auto ide-scrollbar font-mono text-xs leading-relaxed">
              {terminalLines.map((line, i) => (
                <div key={i} className={
                  line.type === "command" ? "text-foreground font-medium" :
                  line.type === "success" ? "text-ide-terminal-foreground" :
                  "text-muted-foreground"
                }>
                  {line.text || "\u00A0"}
                </div>
              ))}
              <div className="flex items-center text-foreground mt-1">
                <span>$ </span>
                <span className="w-2 h-4 bg-foreground animate-blink ml-0.5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Terminal;

