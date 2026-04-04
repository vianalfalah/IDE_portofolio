# IDE Portfolio - Oviano Gunadi AL Falah

This is an interactive, IDE-themed portfolio built for Oviano Gunadi AL Falah. It simulates a code editor (like VS Code or a modern IDE) where visitors can "browse" files to see the developer's experience, skills, and projects.

## Tech Stack
* Core: **Next.js** (App Router), **React** (TypeScript)
* Styling: **Tailwind CSS**, Custom CSS Variables for Theming (`globals.css`)
* State Management: **Zustand** (`store/ideStore.ts`)
* Animation: **Framer Motion**
* UI Components: Custom primitive components + integrated Lucide Icons.

---

## 🤖 Agent Guide & Repository Architecture

If you are an AI assistant or another developer working on this project, please adhere to the following architecture and data-flow patterns:

### 1. File Structure and Sidebar Tree (`lib/fileTree.ts`)
The sidebar of the IDE reads from `lib/fileTree.ts`. This file defines the exact hierarchy of folders and files visible in the sidebar. 
* If you need to add a new project or file, you **must** update the `fileTree` array in `lib/fileTree.ts`.
* Example FileNode: `{ id: "experience/qoin/payment-gateway", name: "payment-gateway", type: "file", ext: ".tsx", icon: "code" }`.
* The `id` is heavily used throughout the app as the **primary key** (`activeFile` in the store).

### 2. File Content Storage (`lib/projectContent.tsx`)
This file is the "database" of the portfolio projects. There are two main exports:
* `projectContents`: A key-value lookup (where the key is the file `id`) mapping to `ProjectData`.
* `indexContents`: A key-value lookup mapping to `IndexSummary` (used for the `index.tsx` files inside folders).
* **If you add a new project**, make sure its object is created here under the exact same ID used in `fileTree.ts`.

### 3. Rendering Engine (`components/ide/EditorContent.tsx`)
This component acts as the "Editor". It takes the `activeFile` ID and decides what to render:
* **Static Content**: Static pages like `readme`, `education`, `skills`, and `contact` are hardcoded functions in this file. They use `<CodeLine>` wrappers to manually simulate code syntax.
* **Project Viewer**: If the ID matches an entry in `projectContents`, it renders `ProjectView` dynamic component, looping through the properties to create a code-like representation.
* **Image Fallback Mechanism**: The `ProjectView` automatically builds image URLs looking into the `public/` directory (e.g., `/assets/images/projects/{projectId}/preview-{index}.png`). If an image doesn't exist locally yet, it gracefully falls back to the `img.src` fallback URL (usually a dummy Unsplash image).

### 4. Global State (`store/ideStore.ts`)
The `ideStore` (Zustand) tracks:
* `activeFile`: The currently open file in the main view.
* `openFiles`: The array of files mapped to the tabs at the top of the editor.
* `expandedFolders`: Tracks which sidebar folders are toggled open.
* `theme`: (If implemented) tracks dark/light or semantic theme states.

---

## 📁 Image Preview Directories & Mapping

All projects defined in `lib/projectContent.tsx` will look for images in specific mapped folders. To replace dummy images, simply place your `.png` or `.jpg` files inside the corresponding folder using the naming convention `preview-1.png`, `preview-2.png`, etc.

**Base Path:** `public/assets/images/projects/`

### 1. PT QOIN DIGITAL INDONESIA
| Project Name | Path to Place Images |
|---|---|
| Web Admin & Client Payment Gateway | `experience/qoin/payment-gateway/` |
| Web Admin Qoincash & Qoin Crypto | `experience/qoin/cash-crypto/` |
| Web Admin Korlantas | `experience/qoin/korlantas/` |
| Landing Page Perusahaan | `experience/qoin/landing-page/` |

### 2. Freelance & Other Projects
| Project Name | Path to Place Images |
|---|---|
| DSS AHU Analytics Dashboard | `freelance/dss-ahu/dashboard/` |
| Siloam IPD Hospital Management | `freelance/siloam/ipd/` |

### Example Mapping:
If you want to add two screenshots for the *Siloam IPD* project:
1. Copy your first screenshot to: `public/assets/images/projects/freelance/siloam/ipd/preview-1.png`
2. Copy your second screenshot to: `public/assets/images/projects/freelance/siloam/ipd/preview-2.png`

The application will automatically detect those local files and prioritize them over the dummy images!

---

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3013](http://localhost:3013) with your browser to see the result. (Check the console log, port may differ).
