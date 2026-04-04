"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  projectContents,
  indexContents,
  type ProjectData,
  type IndexSummary,
} from "@/lib/projectContent";
import { Badge } from "@/components/ui/badge";

interface EditorContentProps {
  activeFile: string;
}

const CodeLine = ({
  num,
  children,
}: {
  num: number;
  children: React.ReactNode;
}) => (
  <div className="flex hover:bg-ide-selection/30 transition-colors">
    <span className="w-12 text-right pr-4 text-ide-line-number select-none shrink-0">
      {num}
    </span>
    <span className="flex-1 whitespace-pre-wrap break-words">{children}</span>
  </div>
);

const Kw = ({ children }: { children: React.ReactNode }) => (
  <span className="text-syntax-keyword">{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-syntax-string">{children}</span>
);
const Fn = ({ children }: { children: React.ReactNode }) => (
  <span className="text-syntax-function">{children}</span>
);
const Cm = ({ children }: { children: React.ReactNode }) => (
  <span className="text-syntax-comment italic">{children}</span>
);
const Tp = ({ children }: { children: React.ReactNode }) => (
  <span className="text-syntax-type">{children}</span>
);
const Pr = ({ children }: { children: React.ReactNode }) => (
  <span className="text-syntax-property">{children}</span>
);
const Nm = ({ children }: { children: React.ReactNode }) => (
  <span className="text-syntax-number">{children}</span>
);

// === INDEX / SUMMARY VIEW ===
const IndexView = ({ data }: { data: IndexSummary }) => {
  let line = 1;
  return (
    <div className="text-sm leading-7">
      <CodeLine num={line++}>
        <Cm>{`// ${data.title} — ${data.subtitle}`}</Cm>
      </CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        <Kw>import</Kw> {"{ "}
        <Tp>Career</Tp>
        {" }"} <Kw>from</Kw> <Str>"@/types/portfolio"</Str>;
      </CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        <Cm>{`// Periode: ${data.period}`}</Cm>
      </CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        <Kw>const</Kw> <Fn>summary</Fn>: <Tp>Career</Tp>[] = [
      </CodeLine>
      {data.entries.map((entry, i) => (
        <div key={i}>
          <CodeLine num={line++}>{"  {"}</CodeLine>
          <CodeLine num={line++}>
            {"    "}
            <Pr>company</Pr>: <Str>"{entry.company}"</Str>,
          </CodeLine>
          <CodeLine num={line++}>
            {"    "}
            <Pr>role</Pr>: <Str>"{entry.role}"</Str>,
          </CodeLine>
          <CodeLine num={line++}>
            {"    "}
            <Pr>period</Pr>: <Str>"{entry.period}"</Str>,
          </CodeLine>
          <CodeLine num={line++}>
            {"    "}
            <Pr>projects</Pr>: <Nm>{entry.projectCount}</Nm>,
          </CodeLine>
          <CodeLine num={line++}>
            {"    "}
            <Pr>highlights</Pr>: [
          </CodeLine>
          {entry.highlights.map((h, j) => (
            <CodeLine key={j} num={line++}>
              {"      "}
              <Str>"{h}"</Str>,
            </CodeLine>
          ))}
          <CodeLine num={line++}>{"    ],"}</CodeLine>
          <CodeLine num={line++}>{"  },"}</CodeLine>
        </div>
      ))}
      <CodeLine num={line++}>{"];"}</CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        <Cm>
          {
            "// 📂 Buka folder perusahaan di sidebar untuk melihat detail project"
          }
        </Cm>
      </CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        <Kw>export default</Kw> <Fn>summary</Fn>;
      </CodeLine>
    </div>
  );
};

// === PROJECT DETAIL VIEW ===
const ProjectView = ({ data, projectId }: { data: ProjectData; projectId: string }) => {
  let line = 1;
  return (
    <div className="text-sm leading-7">
      <CodeLine num={line++}>
        <Cm>{`// ${data.title} — ${data.company}`}</Cm>
      </CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        <Kw>import</Kw> {"{ "}
        <Tp>Project</Tp>
        {" }"} <Kw>from</Kw> <Str>"@/types/portfolio"</Str>;
      </CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        <Kw>const</Kw> <Fn>project</Fn>: <Tp>Project</Tp> = {"{"}
      </CodeLine>
      <CodeLine num={line++}>
        {"  "}
        <Pr>title</Pr>: <Str>"{data.title}"</Str>,
      </CodeLine>
      <CodeLine num={line++}>
        {"  "}
        <Pr>company</Pr>: <Str>"{data.company}"</Str>,
      </CodeLine>
      {data.role && (
        <CodeLine num={line++}>
          {"  "}
          <Pr>role</Pr>: <Str>"{data.role}"</Str>,
        </CodeLine>
      )}
      <CodeLine num={line++}>
        {"  "}
        <Pr>period</Pr>: <Str>"{data.period}"</Str>,
      </CodeLine>
      {data.url && (
        <CodeLine num={line++}>
          {"  "}
          <Pr>link</Pr>: <a href={data.url} target="_blank" rel="noopener noreferrer" className="text-syntax-string hover:underline">"{data.url}"</a>,
        </CodeLine>
      )}
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        {"  "}
        <Cm>{`// ${data.summary}`}</Cm>
      </CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        {"  "}
        <Pr>highlights</Pr>: [
      </CodeLine>
      {data.description.map((d, i) => (
        <CodeLine key={i} num={line++}>
          {"    "}
          <Str>"{d}"</Str>,
        </CodeLine>
      ))}
      <CodeLine num={line++}>{"  ],"}</CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>

      {/* Preview Images */}
      <CodeLine num={line++}>
        {"  "}
        <Cm>{"// 📸 Preview"}</Cm>
      </CodeLine>
      <CodeLine num={line++}>
        {"  "}
        <Pr>screenshots</Pr>: [
      </CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>

      {/* Render images inline with code aesthetic */}
      <div className="pl-12 pr-4 py-2 flex gap-3 overflow-x-auto ide-scrollbar">
        {data.images.map((img, i) => {
          // Map to convention: /assets/images/projects/{projectId}/preview-{number}.png or similar
          // For simplicty we'll try to load .jpg, .png usually handled by using standard names.
          // By default we try `.png` then fallback to dummy.
          const localPath = `/assets/images/projects/${projectId}/preview-${i + 1}.png`;
          return (
            <div
              key={i}
              className="shrink-0 rounded border border-border overflow-hidden group relative bg-muted"
            >
              <img
                src={localPath}
                alt={img.alt}
                onError={(e) => {
                  // Fallback to dummy image if local image isn't available yet
                  e.currentTarget.src = img.src;
                }}
                className="w-[280px] h-[160px] object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm px-2 py-1 text-[10px] text-muted-foreground">
                {img.alt}
              </div>
            </div>
          );
        })}
      </div>

      <CodeLine num={line++}>{"  ],"}</CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>

      {/* Tech Stack */}
      <CodeLine num={line++}>
        {"  "}
        <Cm>{"// 🛠 Tech Stack"}</Cm>
      </CodeLine>
      <CodeLine num={line++}>
        {"  "}
        <Pr>stack</Pr>: [
      </CodeLine>
      <div className="pl-12 pr-4 py-2 flex flex-wrap gap-1.5">
        {data.stack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="text-[11px] font-mono bg-ide-selection text-foreground border-border"
          >
            {tech}
          </Badge>
        ))}
      </div>
      <CodeLine num={line++}>{"  ],"}</CodeLine>
      <CodeLine num={line++}>{"}"}</CodeLine>
      <CodeLine num={line++}>
        <span></span>
      </CodeLine>
      <CodeLine num={line++}>
        <Kw>export default</Kw> <Fn>project</Fn>;
      </CodeLine>
    </div>
  );
};

// === ORIGINAL CONTENT VIEWS ===
const ReadmeContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}>
      <Cm>{`# 👋 Hi, I'm Oviano Gunadi AL Falah`}</Cm>
    </CodeLine>
    <CodeLine num={2}>
      <Cm>{`# Frontend Web Developer`}</Cm>
    </CodeLine>
    <CodeLine num={3}>
      <span></span>
    </CodeLine>
    <CodeLine num={4}>
      <Cm>## About Me</Cm>
    </CodeLine>
    <CodeLine num={5}>
      <span></span>
    </CodeLine>
    <CodeLine num={6}>
      <span>
        <Str>Frontend Developer</Str> dengan pengalaman <Nm>5+ tahun</Nm>
      </span>
    </CodeLine>
    <CodeLine num={7}>
      <span>
        membangun scalable web applications dan data-driven dashboards
      </span>
    </CodeLine>
    <CodeLine num={8}>
      <span>menggunakan React dan Next.js.</span>
    </CodeLine>
    <CodeLine num={9}>
      <span></span>
    </CodeLine>

    {/* CV Download Button */}
    <div className="pl-12 pr-4 py-2">
      <a
        href="https://drive.google.com/file/d/1uYclZnNEWD8VIaR4PFXRdbKEiTKsVhhe/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        Download CV
      </a>
    </div>

    <CodeLine num={10}>
      <span></span>
    </CodeLine>
    <CodeLine num={11}>
      <Cm>## Tech Stack</Cm>
    </CodeLine>
    <CodeLine num={12}>
      <span></span>
    </CodeLine>
    <CodeLine num={13}>
      <span>
        - ⚛️ <Str>React.js</Str> / <Str>Next.js</Str>
      </span>
    </CodeLine>
    <CodeLine num={14}>
      <span>
        - 📘 <Str>TypeScript</Str> / <Str>JavaScript</Str>
      </span>
    </CodeLine>
    <CodeLine num={15}>
      <span>
        - 🎨 <Str>Tailwind CSS</Str> / <Str>SCSS</Str> / <Str>Material UI</Str> / <Str>Shadcn UI</Str>
      </span>
    </CodeLine>
    <CodeLine num={16}>
      <span>
        - 📦 <Str>Redux</Str> / <Str>Zustand</Str> / <Str>TanStack Query</Str>
      </span>
    </CodeLine>
    <CodeLine num={17}>
      <span>
        - 🔧 <Str>Git</Str> / <Str>Bitbucket</Str> / <Str>Jira</Str> / <Str>Figma</Str>
      </span>
    </CodeLine>
    <CodeLine num={18}>
      <span></span>
    </CodeLine>
    <CodeLine num={19}>
      <Cm>## Quick Start</Cm>
    </CodeLine>
    <CodeLine num={20}>
      <span></span>
    </CodeLine>
    <CodeLine num={21}>
      <span>Navigate file explorer di sidebar kiri untuk melihat:</span>
    </CodeLine>
    <CodeLine num={22}>
      <span>
        - 📂 <Str>experience/</Str> — Pengalaman kerja profesional
      </span>
    </CodeLine>
    <CodeLine num={23}>
      <span>
        - 📂 <Str>freelance/</Str> — Proyek freelance
      </span>
    </CodeLine>
    <CodeLine num={24}>
      <span>
        - 📄 <Str>contact.ts</Str> — Kontak & sosial media
      </span>
    </CodeLine>
  </div>
);

const EducationContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}>
      <Cm>{"// education.ts — Pendidikan & Pelatihan"}</Cm>
    </CodeLine>
    <CodeLine num={2}>
      <span></span>
    </CodeLine>
    <CodeLine num={3}>
      <Kw>interface</Kw> <Tp>Education</Tp> {"{"}
    </CodeLine>
    <CodeLine num={4}>
      {"  "}
      <Pr>institution</Pr>: <Tp>string</Tp>;
    </CodeLine>
    <CodeLine num={5}>
      {"  "}
      <Pr>degree</Pr>: <Tp>string</Tp>;
    </CodeLine>
    <CodeLine num={6}>
      {"  "}
      <Pr>period</Pr>: <Tp>string</Tp>;
    </CodeLine>
    <CodeLine num={7}>{"}"}</CodeLine>
    <CodeLine num={8}>
      <span></span>
    </CodeLine>
    <CodeLine num={9}>
      <Kw>const</Kw> <Fn>formalEducation</Fn>: <Tp>Education</Tp>[] = [
    </CodeLine>
    <CodeLine num={10}>{"  {"}</CodeLine>
    <CodeLine num={11}>
      {"    "}
      <Pr>institution</Pr>: <Str>"Universitas Indraprasta PGRI (UNINDRA)"</Str>,
    </CodeLine>
    <CodeLine num={12}>
      {"    "}
      <Pr>degree</Pr>: <Str>"S1 Teknik Informatika"</Str>,
    </CodeLine>
    <CodeLine num={13}>
      {"    "}
      <Pr>period</Pr>: <Str>"2018 — 2022"</Str>,
    </CodeLine>
    <CodeLine num={14}>{"  },"}</CodeLine>
    <CodeLine num={15}>{"]"}</CodeLine>
    <CodeLine num={16}>
      <span></span>
    </CodeLine>
    <CodeLine num={17}>
      <Cm>{"// Sertifikasi & Pelatihan"}</Cm>
    </CodeLine>
    <CodeLine num={18}>
      <Kw>const</Kw> <Fn>certifications</Fn> = [
    </CodeLine>
    <CodeLine num={19}>
      {"  "}
      <Str>"Bootcamp Dumbways.ID - Fullstack Web Developer"</Str>,
    </CodeLine>
    <CodeLine num={20}>{"]"}</CodeLine>
    <CodeLine num={21}>
      <span></span>
    </CodeLine>
    <CodeLine num={22}>
      <Kw>export</Kw> {"{ "}
      <Fn>formalEducation</Fn>, <Fn>certifications</Fn>
      {" }"};
    </CodeLine>
  </div>
);

const SkillsContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}>{"{"}</CodeLine>
    <CodeLine num={2}>
      {"  "}
      <Pr>"name"</Pr>: <Str>"Frontend Developer Skills"</Str>,
    </CodeLine>
    <CodeLine num={3}>
      {"  "}
      <Pr>"lastUpdated"</Pr>: <Str>"2024"</Str>,
    </CodeLine>
    <CodeLine num={4}>
      {"  "}
      <Pr>"languages"</Pr>: [
    </CodeLine>
    <CodeLine num={5}>
      {"    "}
      <Str>"TypeScript"</Str>, <Str>"JavaScript"</Str>
    </CodeLine>
    <CodeLine num={6}>{"  ],"}</CodeLine>
    <CodeLine num={7}>
      {"  "}
      <Pr>"frameworks"</Pr>: [
    </CodeLine>
    <CodeLine num={8}>
      {"    "}
      <Str>"React.js"</Str>, <Str>"Next.js"</Str>
    </CodeLine>
    <CodeLine num={9}>{"  ],"}</CodeLine>
    <CodeLine num={10}>
      {"  "}
      <Pr>"styling"</Pr>: [
    </CodeLine>
    <CodeLine num={11}>
      {"    "}
      <Str>"Tailwind CSS"</Str>, <Str>"SCSS"</Str>, <Str>"Material UI"</Str>,{" "}
      <Str>"Shadcn UI"</Str>
    </CodeLine>
    <CodeLine num={12}>{"  ],"}</CodeLine>
    <CodeLine num={13}>
      {"  "}
      <Pr>"stateManagement"</Pr>: [
    </CodeLine>
    <CodeLine num={14}>
      {"    "}
      <Str>"Redux"</Str>, <Str>"Zustand"</Str>, <Str>"TanStack Query"</Str>
    </CodeLine>
    <CodeLine num={15}>{"  ],"}</CodeLine>
    <CodeLine num={16}>
      {"  "}
      <Pr>"tools"</Pr>: [
    </CodeLine>
    <CodeLine num={17}>
      {"    "}
      <Str>"Git"</Str>, <Str>"Bitbucket"</Str>, <Str>"Keycloak"</Str>,{" "}
      <Str>"Postman"</Str>,
    </CodeLine>
    <CodeLine num={18}>
      {"    "}
      <Str>"Insomnia"</Str>, <Str>"Jira"</Str>, <Str>"Figma"</Str>, <Str>"VS Code"</Str>
    </CodeLine>
    <CodeLine num={19}>{"  ]"}</CodeLine>
    <CodeLine num={20}>{"}"}</CodeLine>
  </div>
);

const ContactContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}>
      <Cm>{"// contact.ts — Let's Connect!"}</Cm>
    </CodeLine>
    <CodeLine num={2}>
      <span></span>
    </CodeLine>
    <CodeLine num={3}>
      <Kw>const</Kw> <Fn>contact</Fn> = {"{"}
    </CodeLine>
    <CodeLine num={4}>
      {"  "}
      <Pr>name</Pr>: <Str>"Oviano Gunadi AL Falah"</Str>,
    </CodeLine>
    <CodeLine num={5}>
      {"  "}
      <Pr>email</Pr>: <Str>"vianalfalah248@gmail.com"</Str>,
    </CodeLine>
    <CodeLine num={6}>
      {"  "}
      <Pr>phone</Pr>: <Str>"0896 3629 9984"</Str>,
    </CodeLine>
    <CodeLine num={7}>
      {"  "}
      <Pr>linkedin</Pr>: <Str>"www.linkedin.com/in/vianalfalah"</Str>,
    </CodeLine>
    <CodeLine num={8}>
      {"  "}
      <Pr>github</Pr>: <Str>"https://github.com/vianalfalah"</Str>,
    </CodeLine>
    <CodeLine num={9}>
      {"  "}
      <Pr>location</Pr>: <Str>"Indonesia 🇮🇩"</Str>,
    </CodeLine>
    <CodeLine num={10}>{"}"}</CodeLine>
    <CodeLine num={10}>
      <span></span>
    </CodeLine>

    {/* CV Download Button */}
    <div className="pl-12 pr-4 py-2">
      <a
        href="https://drive.google.com/file/d/1uYclZnNEWD8VIaR4PFXRdbKEiTKsVhhe/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        Download CV
      </a>
    </div>

    <CodeLine num={11}>
      <span></span>
    </CodeLine>
    <CodeLine num={12}>
      <Cm>{"// Available for:"}</Cm>
    </CodeLine>
    <CodeLine num={13}>
      <Cm>{"// ✅ Full-time positions"}</Cm>
    </CodeLine>
    <CodeLine num={14}>
      <Cm>{"// ✅ Freelance projects"}</Cm>
    </CodeLine>
    <CodeLine num={15}>
      <Cm>{"// ✅ Open source collaboration"}</Cm>
    </CodeLine>
    <CodeLine num={17}>
      <span></span>
    </CodeLine>
    <CodeLine num={18}>
      <Kw>export default</Kw> <Fn>contact</Fn>;
    </CodeLine>
  </div>
);

// Static content map for non-project files
const staticContentMap: Record<string, React.FC> = {
  readme: ReadmeContent,
  education: EducationContent,
  skills: SkillsContent,
  contact: ContactContent,
};

const EditorContent = ({ activeFile }: EditorContentProps) => {
  const renderContent = () => {
    // Check static content first
    if (staticContentMap[activeFile]) {
      const Content = staticContentMap[activeFile];
      return <Content />;
    }

    // Check index summaries
    if (indexContents[activeFile]) {
      return <IndexView data={indexContents[activeFile]} />;
    }

    // Check project content
    if (projectContents[activeFile]) {
      return <ProjectView data={projectContents[activeFile]} projectId={activeFile} />;
    }

    // Fallback
    return (
      <div className="text-sm leading-7">
        <CodeLine num={1}>
          <Cm>{"// File not found"}</Cm>
        </CodeLine>
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto ide-scrollbar p-0 font-mono">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFile}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="py-2"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EditorContent;
