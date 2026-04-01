import { ChevronRight } from "lucide-react";
import { FileId } from "./Sidebar";

const filePathMap: Record<FileId, string> = {
  readme: "README.md",
  experience: "experience.tsx",
  freelance: "freelance.tsx",
  education: "education.ts",
  skills: "skills.json",
  contact: "contact.ts",
};

const Breadcrumb = ({ activeFile }: { activeFile: FileId }) => (
  <div className="flex items-center gap-1 px-3 py-1 text-xs text-muted-foreground bg-background border-b border-border">
    <span>portfolio</span>
    <ChevronRight size={10} />
    <span>src</span>
    <ChevronRight size={10} />
    <span className="text-foreground">{filePathMap[activeFile]}</span>
  </div>
);

export default Breadcrumb;
