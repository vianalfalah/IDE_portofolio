'use client'
import { useState } from "react";
import {
  FileText, ChevronDown, ChevronRight, FolderOpen, Folder,
  Code, User, Briefcase, GraduationCap, Mail, Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FileNode, fileTree } from "@/lib/fileTree";

interface SidebarProps {
  activeFile: string;
  onFileSelect: (file: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  "file-text": FileText,
  "code": Code,
  "briefcase": Briefcase,
  "graduation-cap": GraduationCap,
  "wrench": Wrench,
  "mail": Mail,
};

const FolderItem = ({
  node,
  depth,
  activeFile,
  onFileSelect,
  defaultOpen = false,
}: {
  node: FileNode;
  depth: number;
  activeFile: string;
  onFileSelect: (file: string) => void;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen || activeFile.startsWith(node.id + "/"));

  const isActive = activeFile.startsWith(node.id);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 w-full py-1 text-xs transition-colors hover:bg-secondary/50 ${
          isActive ? "text-foreground" : "text-ide-sidebar-foreground"
        }`}
        style={{ paddingLeft: `${depth * 12 + 20}px` }}
      >
        {open ? <ChevronDown size={12} className="shrink-0" /> : <ChevronRight size={12} className="shrink-0" />}
        {open ? (
          <FolderOpen size={14} className="text-ide-sidebar-active/70 shrink-0" />
        ) : (
          <Folder size={14} className="text-muted-foreground shrink-0" />
        )}
        <span className="truncate">{node.name}</span>
      </button>

      <AnimatePresence>
        {open && node.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="overflow-hidden"
          >
            {node.children.map((child) =>
              child.type === "folder" ? (
                <FolderItem
                  key={child.id}
                  node={child}
                  depth={depth + 1}
                  activeFile={activeFile}
                  onFileSelect={onFileSelect}
                />
              ) : (
                <FileItem
                  key={child.id}
                  node={child}
                  depth={depth + 1}
                  activeFile={activeFile}
                  onFileSelect={onFileSelect}
                />
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FileItem = ({
  node,
  depth,
  activeFile,
  onFileSelect,
}: {
  node: FileNode;
  depth: number;
  activeFile: string;
  onFileSelect: (file: string) => void;
}) => {
  const Icon = iconMap[node.icon || "code"] || Code;
  const isActive = activeFile === node.id;

  return (
    <button
      onClick={() => onFileSelect(node.id)}
      className={`flex items-center gap-1.5 w-full py-1 text-xs transition-colors ${
        isActive
          ? "bg-ide-selection text-foreground"
          : "text-ide-sidebar-foreground hover:bg-secondary/50"
      }`}
      style={{ paddingLeft: `${depth * 12 + 32}px` }}
    >
      <Icon size={14} className={isActive ? "text-ide-sidebar-active shrink-0" : "shrink-0"} />
      <span className="truncate">
        {node.name}
        <span className="text-muted-foreground">{node.ext}</span>
      </span>
    </button>
  );
};

const Sidebar = ({ activeFile, onFileSelect }: SidebarProps) => {
  const [explorerOpen, setExplorerOpen] = useState(true);

  return (
    <div className="w-56 bg-ide-sidebar border-r border-border flex flex-col shrink-0">
      <div className="flex flex-col items-center py-2 gap-3 border-b border-border px-2">
        <button className="p-1.5 text-ide-sidebar-active" title="Explorer">
          <FolderOpen size={20} />
        </button>
        <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors" title="About">
          <User size={20} />
        </button>
      </div>

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
              {fileTree.map((node) =>
                node.type === "folder" ? (
                  <FolderItem
                    key={node.id}
                    node={node}
                    depth={1}
                    activeFile={activeFile}
                    onFileSelect={onFileSelect}
                    defaultOpen={false}
                  />
                ) : (
                  <FileItem
                    key={node.id}
                    node={node}
                    depth={1}
                    activeFile={activeFile}
                    onFileSelect={onFileSelect}
                  />
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Sidebar;

