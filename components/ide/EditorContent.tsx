'use client'
import { motion, AnimatePresence } from "framer-motion";
import { projectContents, indexContents, type ProjectData, type IndexSummary } from "@/lib/projectContent";
import { Badge } from "@/components/ui/badge";

interface EditorContentProps {
  activeFile: string;
}

const CodeLine = ({ num, children }: { num: number; children: React.ReactNode }) => (
  <div className="flex hover:bg-ide-selection/30 transition-colors">
    <span className="w-12 text-right pr-4 text-ide-line-number select-none shrink-0">{num}</span>
    <span className="flex-1">{children}</span>
  </div>
);

const Kw = ({ children }: { children: React.ReactNode }) => <span className="text-syntax-keyword">{children}</span>;
const Str = ({ children }: { children: React.ReactNode }) => <span className="text-syntax-string">{children}</span>;
const Fn = ({ children }: { children: React.ReactNode }) => <span className="text-syntax-function">{children}</span>;
const Cm = ({ children }: { children: React.ReactNode }) => <span className="text-syntax-comment italic">{children}</span>;
const Tp = ({ children }: { children: React.ReactNode }) => <span className="text-syntax-type">{children}</span>;
const Pr = ({ children }: { children: React.ReactNode }) => <span className="text-syntax-property">{children}</span>;
const Nm = ({ children }: { children: React.ReactNode }) => <span className="text-syntax-number">{children}</span>;

// === INDEX / SUMMARY VIEW ===
const IndexView = ({ data }: { data: IndexSummary }) => {
  let line = 1;
  return (
    <div className="text-sm leading-7">
      <CodeLine num={line++}><Cm>{`// ${data.title} — ${data.subtitle}`}</Cm></CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}><Kw>import</Kw> {'{ '}<Tp>Career</Tp>{' }'} <Kw>from</Kw> <Str>"@/types/portfolio"</Str>;</CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}><Cm>{`// Periode: ${data.period}`}</Cm></CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}><Kw>const</Kw> <Fn>summary</Fn>: <Tp>Career</Tp>[] = [</CodeLine>
      {data.entries.map((entry, i) => (
        <div key={i}>
          <CodeLine num={line++}>{'  {'}</CodeLine>
          <CodeLine num={line++}>{'    '}<Pr>company</Pr>: <Str>"{entry.company}"</Str>,</CodeLine>
          <CodeLine num={line++}>{'    '}<Pr>role</Pr>: <Str>"{entry.role}"</Str>,</CodeLine>
          <CodeLine num={line++}>{'    '}<Pr>period</Pr>: <Str>"{entry.period}"</Str>,</CodeLine>
          <CodeLine num={line++}>{'    '}<Pr>projects</Pr>: <Nm>{entry.projectCount}</Nm>,</CodeLine>
          <CodeLine num={line++}>{'    '}<Pr>highlights</Pr>: [</CodeLine>
          {entry.highlights.map((h, j) => (
            <CodeLine key={j} num={line++}>{'      '}<Str>"{h}"</Str>,</CodeLine>
          ))}
          <CodeLine num={line++}>{'    ],'}</CodeLine>
          <CodeLine num={line++}>{'  },'}</CodeLine>
        </div>
      ))}
      <CodeLine num={line++}>{'];'}</CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}><Cm>{'// 📂 Buka folder perusahaan di sidebar untuk melihat detail project'}</Cm></CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}><Kw>export default</Kw> <Fn>summary</Fn>;</CodeLine>
    </div>
  );
};

// === PROJECT DETAIL VIEW ===
const ProjectView = ({ data }: { data: ProjectData }) => {
  let line = 1;
  return (
    <div className="text-sm leading-7">
      <CodeLine num={line++}><Cm>{`// ${data.title} — ${data.company}`}</Cm></CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}><Kw>import</Kw> {'{ '}<Tp>Project</Tp>{' }'} <Kw>from</Kw> <Str>"@/types/portfolio"</Str>;</CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}><Kw>const</Kw> <Fn>project</Fn>: <Tp>Project</Tp> = {'{'}</CodeLine>
      <CodeLine num={line++}>{'  '}<Pr>title</Pr>: <Str>"{data.title}"</Str>,</CodeLine>
      <CodeLine num={line++}>{'  '}<Pr>company</Pr>: <Str>"{data.company}"</Str>,</CodeLine>
      {data.role && <CodeLine num={line++}>{'  '}<Pr>role</Pr>: <Str>"{data.role}"</Str>,</CodeLine>}
      <CodeLine num={line++}>{'  '}<Pr>period</Pr>: <Str>"{data.period}"</Str>,</CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}>{'  '}<Cm>{`// ${data.summary}`}</Cm></CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}>{'  '}<Pr>highlights</Pr>: [</CodeLine>
      {data.description.map((d, i) => (
        <CodeLine key={i} num={line++}>{'    '}<Str>"{d}"</Str>,</CodeLine>
      ))}
      <CodeLine num={line++}>{'  ],'}</CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>

      {/* Preview Images */}
      <CodeLine num={line++}>{'  '}<Cm>{'// 📸 Preview'}</Cm></CodeLine>
      <CodeLine num={line++}>{'  '}<Pr>screenshots</Pr>: [</CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>

      {/* Render images inline with code aesthetic */}
      <div className="pl-12 pr-4 py-2 flex gap-3 overflow-x-auto ide-scrollbar">
        {data.images.map((img, i) => (
          <div key={i} className="shrink-0 rounded border border-border overflow-hidden group relative">
            <img
              src={img.src}
              alt={img.alt}
              className="w-[280px] h-[160px] object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm px-2 py-1 text-[10px] text-muted-foreground">
              {img.alt}
            </div>
          </div>
        ))}
      </div>

      <CodeLine num={line++}>{'  ],'}</CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>

      {/* Tech Stack */}
      <CodeLine num={line++}>{'  '}<Cm>{'// 🛠 Tech Stack'}</Cm></CodeLine>
      <CodeLine num={line++}>{'  '}<Pr>stack</Pr>: [</CodeLine>
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
      <CodeLine num={line++}>{'  ],'}</CodeLine>
      <CodeLine num={line++}>{'}'}</CodeLine>
      <CodeLine num={line++}><span></span></CodeLine>
      <CodeLine num={line++}><Kw>export default</Kw> <Fn>project</Fn>;</CodeLine>
    </div>
  );
};

// === ORIGINAL CONTENT VIEWS ===
const ReadmeContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}><Cm>{`# 👋 Hello, I'm a Frontend Developer`}</Cm></CodeLine>
    <CodeLine num={2}><span></span></CodeLine>
    <CodeLine num={3}><Cm>## About Me</Cm></CodeLine>
    <CodeLine num={4}><span></span></CodeLine>
    <CodeLine num={5}><span>Seorang <Str>Frontend Web Developer</Str> berpengalaman lebih dari</span></CodeLine>
    <CodeLine num={6}><span><Nm>5 tahun</Nm> dalam membangun aplikasi web modern yang</span></CodeLine>
    <CodeLine num={7}><span>performant, accessible, dan user-friendly.</span></CodeLine>
    <CodeLine num={8}><span></span></CodeLine>
    <CodeLine num={9}><Cm>## Tech Stack</Cm></CodeLine>
    <CodeLine num={10}><span></span></CodeLine>
    <CodeLine num={11}><span>- ⚛️  <Str>React</Str> / <Str>Next.js</Str> / <Str>Vue.js</Str></span></CodeLine>
    <CodeLine num={12}><span>- 📘  <Str>TypeScript</Str> / <Str>JavaScript ES6+</Str></span></CodeLine>
    <CodeLine num={13}><span>- 🎨  <Str>Tailwind CSS</Str> / <Str>Styled Components</Str> / <Str>SCSS</Str></span></CodeLine>
    <CodeLine num={14}><span>- 🧪  <Str>Jest</Str> / <Str>React Testing Library</Str> / <Str>Cypress</Str></span></CodeLine>
    <CodeLine num={15}><span>- 🔧  <Str>Git</Str> / <Str>CI/CD</Str> / <Str>Docker</Str></span></CodeLine>
    <CodeLine num={16}><span></span></CodeLine>
    <CodeLine num={17}><Cm>## Quick Start</Cm></CodeLine>
    <CodeLine num={18}><span></span></CodeLine>
    <CodeLine num={19}><span>Navigate file explorer di sidebar kiri untuk melihat:</span></CodeLine>
    <CodeLine num={20}><span>- 📂 <Str>experience/</Str> — Pengalaman kerja profesional</span></CodeLine>
    <CodeLine num={21}><span>- 📂 <Str>freelance/</Str> — Proyek freelance</span></CodeLine>
    <CodeLine num={22}><span>- 📄 <Str>education.ts</Str> — Pendidikan & pelatihan</span></CodeLine>
    <CodeLine num={23}><span>- 📄 <Str>skills.json</Str> — Technical skills</span></CodeLine>
    <CodeLine num={24}><span>- 📄 <Str>contact.ts</Str> — Kontak & sosial media</span></CodeLine>
  </div>
);

const EducationContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}><Cm>{'// education.ts — Pendidikan & Pelatihan'}</Cm></CodeLine>
    <CodeLine num={2}><span></span></CodeLine>
    <CodeLine num={3}><Kw>interface</Kw> <Tp>Education</Tp> {'{'}</CodeLine>
    <CodeLine num={4}>{'  '}<Pr>institution</Pr>: <Tp>string</Tp>;</CodeLine>
    <CodeLine num={5}>{'  '}<Pr>degree</Pr>: <Tp>string</Tp>;</CodeLine>
    <CodeLine num={6}>{'  '}<Pr>period</Pr>: <Tp>string</Tp>;</CodeLine>
    <CodeLine num={7}>{'}'}</CodeLine>
    <CodeLine num={8}><span></span></CodeLine>
    <CodeLine num={9}><Kw>const</Kw> <Fn>formalEducation</Fn>: <Tp>Education</Tp>[] = [</CodeLine>
    <CodeLine num={10}>{'  {'}</CodeLine>
    <CodeLine num={11}>{'    '}<Pr>institution</Pr>: <Str>"Universitas Teknologi Indonesia"</Str>,</CodeLine>
    <CodeLine num={12}>{'    '}<Pr>degree</Pr>: <Str>"S1 Teknik Informatika"</Str>,</CodeLine>
    <CodeLine num={13}>{'    '}<Pr>period</Pr>: <Str>"2015 — 2019"</Str>,</CodeLine>
    <CodeLine num={14}>{'  },'}</CodeLine>
    <CodeLine num={15}>{']'}</CodeLine>
    <CodeLine num={16}><span></span></CodeLine>
    <CodeLine num={17}><Cm>{'// Sertifikasi & Pelatihan'}</Cm></CodeLine>
    <CodeLine num={18}><Kw>const</Kw> <Fn>certifications</Fn> = [</CodeLine>
    <CodeLine num={19}>{'  '}<Str>"Meta Frontend Developer Professional Certificate"</Str>,</CodeLine>
    <CodeLine num={20}>{'  '}<Str>"AWS Certified Cloud Practitioner"</Str>,</CodeLine>
    <CodeLine num={21}>{'  '}<Str>"Google UX Design Certificate"</Str>,</CodeLine>
    <CodeLine num={22}>{'  '}<Str>"Dicoding — Menjadi React Web Developer Expert"</Str>,</CodeLine>
    <CodeLine num={23}>{'  '}<Str>"FreeCodeCamp — Responsive Web Design"</Str>,</CodeLine>
    <CodeLine num={24}>{']'}</CodeLine>
    <CodeLine num={25}><span></span></CodeLine>
    <CodeLine num={26}><Kw>export</Kw> {'{ '}<Fn>formalEducation</Fn>, <Fn>certifications</Fn>{' }'};</CodeLine>
  </div>
);

const SkillsContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}>{'{'}</CodeLine>
    <CodeLine num={2}>{'  '}<Pr>"name"</Pr>: <Str>"Frontend Developer Skills"</Str>,</CodeLine>
    <CodeLine num={3}>{'  '}<Pr>"lastUpdated"</Pr>: <Str>"2024"</Str>,</CodeLine>
    <CodeLine num={4}>{'  '}<Pr>"languages"</Pr>: [</CodeLine>
    <CodeLine num={5}>{'    '}<Str>"TypeScript"</Str>, <Str>"JavaScript"</Str>, <Str>"HTML5"</Str>, <Str>"CSS3"</Str></CodeLine>
    <CodeLine num={6}>{'  ],'}</CodeLine>
    <CodeLine num={7}>{'  '}<Pr>"frameworks"</Pr>: [</CodeLine>
    <CodeLine num={8}>{'    '}<Str>"React"</Str>, <Str>"Next.js"</Str>, <Str>"Vue.js"</Str>, <Str>"Nuxt.js"</Str></CodeLine>
    <CodeLine num={9}>{'  ],'}</CodeLine>
    <CodeLine num={10}>{'  '}<Pr>"styling"</Pr>: [</CodeLine>
    <CodeLine num={11}>{'    '}<Str>"Tailwind CSS"</Str>, <Str>"Styled Components"</Str>, <Str>"SCSS/SASS"</Str>, <Str>"CSS Modules"</Str></CodeLine>
    <CodeLine num={12}>{'  ],'}</CodeLine>
    <CodeLine num={13}>{'  '}<Pr>"stateManagement"</Pr>: [</CodeLine>
    <CodeLine num={14}>{'    '}<Str>"Redux Toolkit"</Str>, <Str>"Zustand"</Str>, <Str>"React Query"</Str>, <Str>"Pinia"</Str></CodeLine>
    <CodeLine num={15}>{'  ],'}</CodeLine>
    <CodeLine num={16}>{'  '}<Pr>"testing"</Pr>: [</CodeLine>
    <CodeLine num={17}>{'    '}<Str>"Jest"</Str>, <Str>"React Testing Library"</Str>, <Str>"Cypress"</Str>, <Str>"Playwright"</Str></CodeLine>
    <CodeLine num={18}>{'  ],'}</CodeLine>
    <CodeLine num={19}>{'  '}<Pr>"tools"</Pr>: [</CodeLine>
    <CodeLine num={20}>{'    '}<Str>"Git"</Str>, <Str>"Docker"</Str>, <Str>"Figma"</Str>, <Str>"Webpack"</Str>, <Str>"Vite"</Str></CodeLine>
    <CodeLine num={21}>{'  ],'}</CodeLine>
    <CodeLine num={22}>{'  '}<Pr>"softSkills"</Pr>: [</CodeLine>
    <CodeLine num={23}>{'    '}<Str>"Team Leadership"</Str>, <Str>"Code Review"</Str>,</CodeLine>
    <CodeLine num={24}>{'    '}<Str>"Agile/Scrum"</Str>, <Str>"Technical Writing"</Str></CodeLine>
    <CodeLine num={25}>{'  ]'}</CodeLine>
    <CodeLine num={26}>{'}'}</CodeLine>
  </div>
);

const ContactContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}><Cm>{'// contact.ts — Let\'s Connect!'}</Cm></CodeLine>
    <CodeLine num={2}><span></span></CodeLine>
    <CodeLine num={3}><Kw>const</Kw> <Fn>contact</Fn> = {'{'}</CodeLine>
    <CodeLine num={4}>{'  '}<Pr>email</Pr>: <Str>"developer@example.com"</Str>,</CodeLine>
    <CodeLine num={5}>{'  '}<Pr>linkedin</Pr>: <Str>"linkedin.com/in/developer"</Str>,</CodeLine>
    <CodeLine num={6}>{'  '}<Pr>github</Pr>: <Str>"github.com/developer"</Str>,</CodeLine>
    <CodeLine num={7}>{'  '}<Pr>website</Pr>: <Str>"developer.dev"</Str>,</CodeLine>
    <CodeLine num={8}>{'  '}<Pr>location</Pr>: <Str>"Indonesia 🇮🇩"</Str>,</CodeLine>
    <CodeLine num={9}>{'}'}</CodeLine>
    <CodeLine num={10}><span></span></CodeLine>
    <CodeLine num={11}><Cm>{'// Available for:'}</Cm></CodeLine>
    <CodeLine num={12}><Cm>{'// ✅ Full-time positions'}</Cm></CodeLine>
    <CodeLine num={13}><Cm>{'// ✅ Freelance projects'}</Cm></CodeLine>
    <CodeLine num={14}><Cm>{'// ✅ Open source collaboration'}</Cm></CodeLine>
    <CodeLine num={15}><Cm>{'// ✅ Technical consulting'}</Cm></CodeLine>
    <CodeLine num={16}><span></span></CodeLine>
    <CodeLine num={17}><Kw>export default</Kw> <Fn>contact</Fn>;</CodeLine>
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
      return <ProjectView data={projectContents[activeFile]} />;
    }

    // Fallback
    return (
      <div className="text-sm leading-7">
        <CodeLine num={1}><Cm>{'// File not found'}</Cm></CodeLine>
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

