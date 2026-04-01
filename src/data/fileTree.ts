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
        id: "experience/tech-startup",
        name: "tech-startup-indonesia",
        type: "folder",
        children: [
          { id: "experience/tech-startup/dashboard-app", name: "dashboard-app", type: "file", ext: ".tsx", icon: "code" },
          { id: "experience/tech-startup/design-system", name: "design-system", type: "file", ext: ".tsx", icon: "code" },
        ],
      },
      {
        id: "experience/digital-agency",
        name: "digital-agency-jakarta",
        type: "folder",
        children: [
          { id: "experience/digital-agency/ecommerce-platform", name: "ecommerce-platform", type: "file", ext: ".tsx", icon: "code" },
          { id: "experience/digital-agency/corporate-web", name: "corporate-web", type: "file", ext: ".tsx", icon: "code" },
        ],
      },
      {
        id: "experience/software-house",
        name: "software-house-bandung",
        type: "folder",
        children: [
          { id: "experience/software-house/crm-system", name: "crm-system", type: "file", ext: ".tsx", icon: "code" },
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
        id: "freelance/fashion-brand",
        name: "fashion-brand-lokal",
        type: "folder",
        children: [
          { id: "freelance/fashion-brand/ecommerce", name: "ecommerce", type: "file", ext: ".tsx", icon: "code" },
        ],
      },
      {
        id: "freelance/startup-fintech",
        name: "startup-fintech",
        type: "folder",
        children: [
          { id: "freelance/startup-fintech/dashboard", name: "dashboard-analytics", type: "file", ext: ".tsx", icon: "code" },
        ],
      },
      {
        id: "freelance/manufaktur",
        name: "perusahaan-manufaktur",
        type: "folder",
        children: [
          { id: "freelance/manufaktur/company-profile", name: "company-profile", type: "file", ext: ".tsx", icon: "code" },
        ],
      },
      {
        id: "freelance/lembaga-pendidikan",
        name: "lembaga-pendidikan",
        type: "folder",
        children: [
          { id: "freelance/lembaga-pendidikan/lms", name: "lms-platform", type: "file", ext: ".tsx", icon: "code" },
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
