import { FileId } from "./Sidebar";
import { motion, AnimatePresence } from "framer-motion";

interface EditorContentProps {
  activeFile: FileId;
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
    <CodeLine num={20}><span>- 📄 <Str>experience.tsx</Str> — Pengalaman kerja profesional</span></CodeLine>
    <CodeLine num={21}><span>- 📄 <Str>freelance.tsx</Str> — Proyek freelance</span></CodeLine>
    <CodeLine num={22}><span>- 📄 <Str>education.ts</Str> — Pendidikan & pelatihan</span></CodeLine>
    <CodeLine num={23}><span>- 📄 <Str>skills.json</Str> — Technical skills</span></CodeLine>
    <CodeLine num={24}><span>- 📄 <Str>contact.ts</Str> — Kontak & sosial media</span></CodeLine>
  </div>
);

const ExperienceContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}><Cm>{'// experience.tsx — Pengalaman Kerja Profesional'}</Cm></CodeLine>
    <CodeLine num={2}><span></span></CodeLine>
    <CodeLine num={3}><Kw>import</Kw> {'{ '}<Tp>Experience</Tp>{' }'} <Kw>from</Kw> <Str>"@/types/career"</Str>;</CodeLine>
    <CodeLine num={4}><span></span></CodeLine>
    <CodeLine num={5}><Kw>const</Kw> <Fn>workExperience</Fn>: <Tp>Experience</Tp>[] = [</CodeLine>
    <CodeLine num={6}>{'  {'}</CodeLine>
    <CodeLine num={7}>{'    '}<Pr>company</Pr>: <Str>"Tech Startup Indonesia"</Str>,</CodeLine>
    <CodeLine num={8}>{'    '}<Pr>role</Pr>: <Str>"Senior Frontend Developer"</Str>,</CodeLine>
    <CodeLine num={9}>{'    '}<Pr>period</Pr>: <Str>"2022 — Sekarang"</Str>,</CodeLine>
    <CodeLine num={10}>{'    '}<Pr>highlights</Pr>: [</CodeLine>
    <CodeLine num={11}>{'      '}<Str>"Memimpin tim frontend 5 orang"</Str>,</CodeLine>
    <CodeLine num={12}>{'      '}<Str>"Migrasi dari CRA ke Next.js, performa +40%"</Str>,</CodeLine>
    <CodeLine num={13}>{'      '}<Str>"Implementasi design system & component library"</Str>,</CodeLine>
    <CodeLine num={14}>{'      '}<Str>"Code review & mentoring junior developer"</Str>,</CodeLine>
    <CodeLine num={15}>{'    ],'}</CodeLine>
    <CodeLine num={16}>{'  },'}</CodeLine>
    <CodeLine num={17}>{'  {'}</CodeLine>
    <CodeLine num={18}>{'    '}<Pr>company</Pr>: <Str>"Digital Agency Jakarta"</Str>,</CodeLine>
    <CodeLine num={19}>{'    '}<Pr>role</Pr>: <Str>"Frontend Developer"</Str>,</CodeLine>
    <CodeLine num={20}>{'    '}<Pr>period</Pr>: <Str>"2020 — 2022"</Str>,</CodeLine>
    <CodeLine num={21}>{'    '}<Pr>highlights</Pr>: [</CodeLine>
    <CodeLine num={22}>{'      '}<Str>"Develop 10+ web app untuk klien enterprise"</Str>,</CodeLine>
    <CodeLine num={23}>{'      '}<Str>"Integrasi REST API & GraphQL"</Str>,</CodeLine>
    <CodeLine num={24}>{'      '}<Str>"Optimasi SEO & Core Web Vitals"</Str>,</CodeLine>
    <CodeLine num={25}>{'    ],'}</CodeLine>
    <CodeLine num={26}>{'  },'}</CodeLine>
    <CodeLine num={27}>{'  {'}</CodeLine>
    <CodeLine num={28}>{'    '}<Pr>company</Pr>: <Str>"Software House Bandung"</Str>,</CodeLine>
    <CodeLine num={29}>{'    '}<Pr>role</Pr>: <Str>"Junior Frontend Developer"</Str>,</CodeLine>
    <CodeLine num={30}>{'    '}<Pr>period</Pr>: <Str>"2019 — 2020"</Str>,</CodeLine>
    <CodeLine num={31}>{'    '}<Pr>highlights</Pr>: [</CodeLine>
    <CodeLine num={32}>{'      '}<Str>"Belajar React & modern JavaScript"</Str>,</CodeLine>
    <CodeLine num={33}>{'      '}<Str>"Slicing UI dari Figma ke responsive web"</Str>,</CodeLine>
    <CodeLine num={34}>{'      '}<Str>"Kolaborasi dengan tim backend & designer"</Str>,</CodeLine>
    <CodeLine num={35}>{'    ],'}</CodeLine>
    <CodeLine num={36}>{'  },'}</CodeLine>
    <CodeLine num={37}>{']'}</CodeLine>
    <CodeLine num={38}><span></span></CodeLine>
    <CodeLine num={39}><Kw>export default</Kw> <Fn>workExperience</Fn>;</CodeLine>
  </div>
);

const FreelanceContent = () => (
  <div className="text-sm leading-7">
    <CodeLine num={1}><Cm>{'// freelance.tsx — Proyek Freelance'}</Cm></CodeLine>
    <CodeLine num={2}><span></span></CodeLine>
    <CodeLine num={3}><Kw>import</Kw> {'{ '}<Tp>Project</Tp>{' }'} <Kw>from</Kw> <Str>"@/types/portfolio"</Str>;</CodeLine>
    <CodeLine num={4}><span></span></CodeLine>
    <CodeLine num={5}><Kw>const</Kw> <Fn>freelanceProjects</Fn>: <Tp>Project</Tp>[] = [</CodeLine>
    <CodeLine num={6}>{'  {'}</CodeLine>
    <CodeLine num={7}>{'    '}<Pr>name</Pr>: <Str>"E-Commerce Platform"</Str>,</CodeLine>
    <CodeLine num={8}>{'    '}<Pr>client</Pr>: <Str>"Fashion Brand Lokal"</Str>,</CodeLine>
    <CodeLine num={9}>{'    '}<Pr>tech</Pr>: [<Str>"Next.js"</Str>, <Str>"Tailwind"</Str>, <Str>"Stripe"</Str>],</CodeLine>
    <CodeLine num={10}>{'    '}<Pr>description</Pr>: <Str>"Full e-commerce dengan payment gateway"</Str>,</CodeLine>
    <CodeLine num={11}>{'    '}<Pr>year</Pr>: <Nm>2023</Nm>,</CodeLine>
    <CodeLine num={12}>{'  },'}</CodeLine>
    <CodeLine num={13}>{'  {'}</CodeLine>
    <CodeLine num={14}>{'    '}<Pr>name</Pr>: <Str>"Dashboard Analytics"</Str>,</CodeLine>
    <CodeLine num={15}>{'    '}<Pr>client</Pr>: <Str>"Startup Fintech"</Str>,</CodeLine>
    <CodeLine num={16}>{'    '}<Pr>tech</Pr>: [<Str>"React"</Str>, <Str>"D3.js"</Str>, <Str>"TypeScript"</Str>],</CodeLine>
    <CodeLine num={17}>{'    '}<Pr>description</Pr>: <Str>"Real-time data visualization dashboard"</Str>,</CodeLine>
    <CodeLine num={18}>{'    '}<Pr>year</Pr>: <Nm>2023</Nm>,</CodeLine>
    <CodeLine num={19}>{'  },'}</CodeLine>
    <CodeLine num={20}>{'  {'}</CodeLine>
    <CodeLine num={21}>{'    '}<Pr>name</Pr>: <Str>"Company Profile Website"</Str>,</CodeLine>
    <CodeLine num={22}>{'    '}<Pr>client</Pr>: <Str>"Perusahaan Manufaktur"</Str>,</CodeLine>
    <CodeLine num={23}>{'    '}<Pr>tech</Pr>: [<Str>"Vue.js"</Str>, <Str>"GSAP"</Str>, <Str>"Prismic CMS"</Str>],</CodeLine>
    <CodeLine num={24}>{'    '}<Pr>description</Pr>: <Str>"Website interaktif dengan animasi premium"</Str>,</CodeLine>
    <CodeLine num={25}>{'    '}<Pr>year</Pr>: <Nm>2022</Nm>,</CodeLine>
    <CodeLine num={26}>{'  },'}</CodeLine>
    <CodeLine num={27}>{'  {'}</CodeLine>
    <CodeLine num={28}>{'    '}<Pr>name</Pr>: <Str>"Learning Management System"</Str>,</CodeLine>
    <CodeLine num={29}>{'    '}<Pr>client</Pr>: <Str>"Lembaga Pendidikan"</Str>,</CodeLine>
    <CodeLine num={30}>{'    '}<Pr>tech</Pr>: [<Str>"React"</Str>, <Str>"Node.js"</Str>, <Str>"MongoDB"</Str>],</CodeLine>
    <CodeLine num={31}>{'    '}<Pr>description</Pr>: <Str>"Platform e-learning dengan video streaming"</Str>,</CodeLine>
    <CodeLine num={32}>{'    '}<Pr>year</Pr>: <Nm>2021</Nm>,</CodeLine>
    <CodeLine num={33}>{'  },'}</CodeLine>
    <CodeLine num={34}>{']'}</CodeLine>
    <CodeLine num={35}><span></span></CodeLine>
    <CodeLine num={36}><Kw>export default</Kw> <Fn>freelanceProjects</Fn>;</CodeLine>
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

const contentMap: Record<FileId, React.FC> = {
  readme: ReadmeContent,
  experience: ExperienceContent,
  freelance: FreelanceContent,
  education: EducationContent,
  skills: SkillsContent,
  contact: ContactContent,
};

const EditorContent = ({ activeFile }: EditorContentProps) => {
  const Content = contentMap[activeFile];
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
          <Content />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EditorContent;
