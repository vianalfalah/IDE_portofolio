import { useState } from "react";
import { FileText, ChevronDown, ChevronRight, FolderOpen, Folder, Code, User, Briefcase, GraduationCap, Mail, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type FileId = "readme" | "experience" | "freelance" | "education" | "skills" | "contact";

interface SidebarProps {
  activeFile: FileId;
  onFileSelect: (file: FileId) => void;
}

const files: { id: FileId; name: string; icon: React.ElementType; ext: string }[] = [
  { id: "readme", name: "README", icon: FileText, ext: ".md" },
  { id: "experience", name: "experience", icon: Briefcase, ext: ".tsx" },
  { id: "freelance", name: "freelance", icon: Code, ext: ".tsx" },
  { id: "education", name: "education", icon: GraduationCap, ext: ".ts" },
  { id: "skills", name: "skills", icon: Wrench, ext: ".json" },
  { id: "contact", name: "contact", icon: Mail, ext: ".ts" },
];

const Sidebar = ({ activeFile, onFileSelect }: SidebarProps) => {
  const [explorerOpen, setExplorerOpen] = useState(true);

  return (
    <div className="w-56 bg-ide-sidebar border-r border-border flex flex-col shrink-0">
      {/* Activity bar icons */}
      <div className="flex flex-col items-center py-2 gap-3 border-b border-border px-2">
        <button className="p-1.5 text-ide-sidebar-active" title="Explorer">
          <FolderOpen size={20} />
        </button>
        <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors" title="About">
          <User size={20} />
        </button>
      </div>

      {/* File explorer */}
      <div className="flex-1 overflow-y-auto ide-scrollbar">
        <button
          className="flex items-center gap-1 w-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ide-sidebar-foreground hover:bg-secondary/50"
          onClick={() => setExplorerOpen(!explorerOpen)}
        >
          {explorerOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          Portfolio
        </button>

        <AnimatePresence>
          {explorerOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-1 px-5 py-1 text-xs text-ide-sidebar-foreground">
                <FolderOpen size={14} className="text-ide-sidebar-active/70" />
                <span>src</span>
              </div>
              {files.map((file) => (
                <button
                  key={file.id}
                  onClick={() => onFileSelect(file.id)}
                  className={`flex items-center gap-1.5 w-full px-8 py-1 text-xs transition-colors ${
                    activeFile === file.id
                      ? "bg-ide-selection text-foreground"
                      : "text-ide-sidebar-foreground hover:bg-secondary/50"
                  }`}
                >
                  <file.icon size={14} className={activeFile === file.id ? "text-ide-sidebar-active" : ""} />
                  <span>{file.name}<span className="text-muted-foreground">{file.ext}</span></span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Sidebar;
