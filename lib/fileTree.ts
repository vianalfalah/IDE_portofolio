export type FileNodeType = "file" | "folder";

export interface FileNode {
  id: string;
  name: string;
  type: FileNodeType;
  ext?: string;
  children?: FileNode[];
  icon?: string;
}

export const fileTree: FileNode[] = [
  {
    id: "readme",
    name: "README",
    type: "file",
    ext: ".md",
    icon: "file-text",
  },
  {
    id: "experience",
    name: "experience",
    type: "folder",
    children: [
      { id: "experience/index", name: "index", type: "file", ext: ".tsx", icon: "file-text" },
      {
        id: "experience/qoin",
        name: "qoin-digital-indonesia",
        type: "folder",
        children: [
          { id: "experience/qoin/payment-gateway", name: "payment-gateway", type: "file", ext: ".tsx", icon: "code" },
          { id: "experience/qoin/cash-crypto", name: "cash-crypto", type: "file", ext: ".tsx", icon: "code" },
          { id: "experience/qoin/korlantas", name: "korlantas", type: "file", ext: ".tsx", icon: "code" },
          { id: "experience/qoin/landing-page", name: "landing-page", type: "file", ext: ".tsx", icon: "code" },
        ],
      },
    ],
  },
  {
    id: "freelance",
    name: "freelance",
    type: "folder",
    children: [
      { id: "freelance/index", name: "index", type: "file", ext: ".tsx", icon: "file-text" },
      {
        id: "freelance/dss-ahu",
        name: "dss-ahu",
        type: "folder",
        children: [
          { id: "freelance/dss-ahu/dashboard", name: "analytics-dashboard", type: "file", ext: ".tsx", icon: "code" },
        ],
      },
      {
        id: "freelance/siloam",
        name: "siloam-ipd",
        type: "folder",
        children: [
          { id: "freelance/siloam/ipd", name: "hospital-management", type: "file", ext: ".tsx", icon: "code" },
        ],
      },
    ],
  },
  { id: "education", name: "education", type: "file", ext: ".ts", icon: "graduation-cap" },
  { id: "skills", name: "skills", type: "file", ext: ".json", icon: "wrench" },
  { id: "contact", name: "contact", type: "file", ext: ".ts", icon: "mail" },
];

// Get file name with extension for display
export function getFileName(fileId: string): string {
  const find = (nodes: FileNode[]): string | null => {
    for (const node of nodes) {
      if (node.id === fileId) return node.name + (node.ext || "");
      if (node.children) {
        const found = find(node.children);
        if (found) return found;
      }
    }
    return null;
  };
  return find(fileTree) || fileId;
}

// Get breadcrumb path segments
export function getBreadcrumb(fileId: string): string[] {
  const parts = fileId.split("/");
  const result: string[] = ["portfolio", "src"];
  
  const find = (nodes: FileNode[], path: string[]): boolean => {
    for (const node of nodes) {
      if (node.id === fileId) {
        result.push(node.name + (node.ext || ""));
        return true;
      }
      if (node.children && fileId.startsWith(node.id + "/")) {
        result.push(node.name);
        return find(node.children, path);
      }
    }
    return false;
  };
  
  find(fileTree, parts);
  return result;
}

// Get language for status bar
export function getLanguage(fileId: string): string {
  const find = (nodes: FileNode[]): string | null => {
    for (const node of nodes) {
      if (node.id === fileId) {
        if (node.ext === ".md") return "Markdown";
        if (node.ext === ".tsx") return "TypeScript React";
        if (node.ext === ".ts") return "TypeScript";
        if (node.ext === ".json") return "JSON";
        return "Plain Text";
      }
      if (node.children) {
        const found = find(node.children);
        if (found) return found;
      }
    }
    return null;
  };
  return find(fileTree) || "Plain Text";
}
