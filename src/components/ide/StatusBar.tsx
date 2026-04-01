import { GitBranch, Bell, CheckCircle } from "lucide-react";
import { FileId } from "./Sidebar";

const langMap: Record<FileId, string> = {
  readme: "Markdown",
  experience: "TypeScript React",
  freelance: "TypeScript React",
  education: "TypeScript",
  skills: "JSON",
  contact: "TypeScript",
};

interface StatusBarProps {
  activeFile: FileId;
}

const StatusBar = ({ activeFile }: StatusBarProps) => {
  return (
    <div className="flex items-center justify-between bg-ide-statusbar text-ide-statusbar-foreground h-6 px-3 text-xs select-none shrink-0">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch size={12} /> main
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle size={12} /> 0 errors
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span>{langMap[activeFile]}</span>
        <span>UTF-8</span>
        <span>Spaces: 2</span>
        <Bell size={12} />
      </div>
    </div>
  );
};

export default StatusBar;
