import { X, FileText, Briefcase, Code, GraduationCap, Wrench, Mail } from "lucide-react";
import { FileId } from "./Sidebar";

interface TabBarProps {
  openTabs: FileId[];
  activeTab: FileId;
  onTabSelect: (tab: FileId) => void;
  onTabClose: (tab: FileId) => void;
}

const fileInfo: Record<FileId, { name: string; icon: React.ElementType }> = {
  readme: { name: "README.md", icon: FileText },
  experience: { name: "experience.tsx", icon: Briefcase },
  freelance: { name: "freelance.tsx", icon: Code },
  education: { name: "education.ts", icon: GraduationCap },
  skills: { name: "skills.json", icon: Wrench },
  contact: { name: "contact.ts", icon: Mail },
};

const TabBar = ({ openTabs, activeTab, onTabSelect, onTabClose }: TabBarProps) => {
  return (
    <div className="flex bg-ide-tab border-b border-border overflow-x-auto ide-scrollbar">
      {openTabs.map((tab) => {
        const info = fileInfo[tab];
        const isActive = tab === activeTab;
        const Icon = info.icon;
        return (
          <div
            key={tab}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs cursor-pointer border-r border-border group min-w-0 shrink-0 transition-colors ${
              isActive
                ? "bg-ide-tab-active text-foreground border-t-2 border-t-ide-tab-border"
                : "text-muted-foreground hover:bg-secondary/50 border-t-2 border-t-transparent"
            }`}
            onClick={() => onTabSelect(tab)}
          >
            <Icon size={14} className={isActive ? "text-ide-sidebar-active" : ""} />
            <span className="truncate">{info.name}</span>
            <button
              className="ml-1 p-0.5 rounded opacity-0 group-hover:opacity-100 hover:bg-secondary transition-all"
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab);
              }}
            >
              <X size={12} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;
