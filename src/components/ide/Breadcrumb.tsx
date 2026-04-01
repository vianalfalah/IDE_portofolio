import { ChevronRight } from "lucide-react";
import { getBreadcrumb } from "@/data/fileTree";

const Breadcrumb = ({ activeFile }: { activeFile: string }) => {
  const segments = getBreadcrumb(activeFile);

  return (
    <div className="flex items-center gap-1 px-3 py-1 text-xs text-muted-foreground bg-background border-b border-border">
      {segments.map((seg, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={10} />}
          <span className={i === segments.length - 1 ? "text-foreground" : ""}>{seg}</span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
