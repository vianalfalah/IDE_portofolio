// Project content data for experience and freelance sections

export interface ProjectData {
  title: string;
  company: string;
  role?: string;
  period: string;
  summary: string;
  description: string[];
  images: { src: string; alt: string }[];
  stack: string[];
}

export const projectContents: Record<string, ProjectData> = {
  // === EXPERIENCE PROJECTS ===
  "experience/tech-startup/dashboard-app": {
    title: "Internal Dashboard App",
    company: "Tech Startup Indonesia",
    role: "Senior Frontend Developer",
    period: "2023",
    summary: "Dashboard internal untuk monitoring KPI, sales analytics, dan manajemen tim dengan real-time data visualization.",
    description: [
      "Membangun dashboard analytics dari nol menggunakan Next.js App Router",
      "Implementasi real-time chart dengan Recharts & WebSocket",
      "Responsive design untuk akses mobile oleh C-level",
      "Optimasi load time dari 4s ke 1.2s dengan code splitting",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop", alt: "Dashboard Overview" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop", alt: "Analytics Charts" },
    ],
    stack: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "WebSocket", "React Query"],
  },
  "experience/tech-startup/design-system": {
    title: "Design System & Component Library",
    company: "Tech Startup Indonesia",
    role: "Senior Frontend Developer",
    period: "2022 — 2023",
    summary: "Membangun design system dan component library internal yang digunakan oleh 3 tim product.",
    description: [
      "Membuat 50+ reusable components dengan Storybook documentation",
      "Token-based theming system mendukung multi-brand",
      "Automated visual regression testing dengan Chromatic",
      "Mengurangi development time fitur baru sebesar 35%",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=340&fit=crop", alt: "Component Library" },
      { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=340&fit=crop", alt: "Design Tokens" },
    ],
    stack: ["React", "TypeScript", "Storybook", "Styled Components", "Chromatic", "Rollup"],
  },
  "experience/digital-agency/ecommerce-platform": {
    title: "E-Commerce Enterprise Platform",
    company: "Digital Agency Jakarta",
    role: "Frontend Developer",
    period: "2021",
    summary: "Platform e-commerce untuk klien retail besar dengan fitur multi-vendor dan payment integration.",
    description: [
      "Develop storefront dengan Next.js dan headless CMS",
      "Integrasi payment gateway (Midtrans, Xendit)",
      "Product catalog dengan advanced filtering & search",
      "Optimasi SEO mencapai score 95+ di Lighthouse",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop", alt: "E-Commerce Store" },
      { src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=340&fit=crop", alt: "Product Page" },
    ],
    stack: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "Midtrans", "Contentful"],
  },
  "experience/digital-agency/corporate-web": {
    title: "Corporate Web Applications",
    company: "Digital Agency Jakarta",
    role: "Frontend Developer",
    period: "2020 — 2021",
    summary: "Multiple corporate websites dan web apps untuk klien enterprise di berbagai industri.",
    description: [
      "Develop 8+ corporate websites dengan CMS integration",
      "Landing page dengan conversion-optimized design",
      "Admin panel untuk content management",
      "Cross-browser compatibility & responsive design",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=340&fit=crop", alt: "Corporate Website" },
      { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=340&fit=crop", alt: "Admin Panel" },
    ],
    stack: ["React", "Vue.js", "SCSS", "WordPress", "REST API", "Figma"],
  },
  "experience/software-house/crm-system": {
    title: "CRM System",
    company: "Software House Bandung",
    role: "Junior Frontend Developer",
    period: "2019 — 2020",
    summary: "Customer Relationship Management system untuk UMKM dengan fitur pipeline management.",
    description: [
      "Slicing UI dari Figma ke responsive React components",
      "Drag-and-drop pipeline board untuk sales tracking",
      "Form builder untuk custom data collection",
      "Kolaborasi erat dengan tim backend & UI designer",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=340&fit=crop", alt: "CRM Dashboard" },
      { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=340&fit=crop", alt: "Pipeline Board" },
    ],
    stack: ["React", "JavaScript", "Material UI", "Redux", "REST API", "Figma"],
  },

  // === FREELANCE PROJECTS ===
  "freelance/fashion-brand/ecommerce": {
    title: "E-Commerce Platform",
    company: "Fashion Brand Lokal",
    period: "2023",
    summary: "Full e-commerce platform dengan payment gateway, inventory management, dan customer portal.",
    description: [
      "Custom storefront dengan Next.js & Stripe integration",
      "Inventory management system dengan real-time stock updates",
      "Customer account portal dengan order tracking",
      "Mobile-first responsive design dengan conversion rate +25%",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=340&fit=crop", alt: "Fashion Store" },
      { src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=340&fit=crop", alt: "Product Catalog" },
    ],
    stack: ["Next.js", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL", "Vercel"],
  },
  "freelance/startup-fintech/dashboard": {
    title: "Dashboard Analytics",
    company: "Startup Fintech",
    period: "2023",
    summary: "Real-time data visualization dashboard untuk monitoring transaksi dan financial metrics.",
    description: [
      "Complex data visualization dengan D3.js & custom charts",
      "Real-time updates via WebSocket connection",
      "Export report ke PDF & Excel",
      "Role-based access control untuk multi-level users",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop", alt: "Analytics Dashboard" },
      { src: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=340&fit=crop", alt: "Financial Charts" },
    ],
    stack: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js", "MongoDB"],
  },
  "freelance/manufaktur/company-profile": {
    title: "Company Profile Website",
    company: "Perusahaan Manufaktur",
    period: "2022",
    summary: "Website interaktif dengan animasi premium dan multi-language support.",
    description: [
      "Scroll-based animations dengan GSAP & ScrollTrigger",
      "Multi-language support (ID/EN) dengan Prismic CMS",
      "Product showcase dengan 3D viewer",
      "Contact form dengan automated email notification",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=340&fit=crop", alt: "Company Profile" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=340&fit=crop", alt: "Product Showcase" },
    ],
    stack: ["Vue.js", "GSAP", "Prismic CMS", "Three.js", "SCSS", "Netlify"],
  },
  "freelance/lembaga-pendidikan/lms": {
    title: "Learning Management System",
    company: "Lembaga Pendidikan",
    period: "2021",
    summary: "Platform e-learning dengan video streaming, quiz system, dan progress tracking.",
    description: [
      "Video player custom dengan progress tracking",
      "Quiz & assessment system dengan auto-grading",
      "Student dashboard dengan learning analytics",
      "Instructor panel untuk content management",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=340&fit=crop", alt: "LMS Dashboard" },
      { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=340&fit=crop", alt: "Learning Interface" },
    ],
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3", "FFmpeg"],
  },
};

export interface IndexSummary {
  title: string;
  subtitle: string;
  period: string;
  entries: {
    company: string;
    role: string;
    period: string;
    projectCount: number;
    highlights: string[];
  }[];
}

export const indexContents: Record<string, IndexSummary> = {
  "experience/index": {
    title: "Work Experience",
    subtitle: "Pengalaman Kerja Profesional",
    period: "2019 — Sekarang (5+ tahun)",
    entries: [
      {
        company: "Tech Startup Indonesia",
        role: "Senior Frontend Developer",
        period: "2022 — Sekarang",
        projectCount: 2,
        highlights: [
          "Memimpin tim frontend 5 orang",
          "Migrasi CRA ke Next.js, performa +40%",
          "Implementasi design system & component library",
        ],
      },
      {
        company: "Digital Agency Jakarta",
        role: "Frontend Developer",
        period: "2020 — 2022",
        projectCount: 2,
        highlights: [
          "Develop 10+ web app untuk klien enterprise",
          "Integrasi REST API & GraphQL",
          "Optimasi SEO & Core Web Vitals",
        ],
      },
      {
        company: "Software House Bandung",
        role: "Junior Frontend Developer",
        period: "2019 — 2020",
        projectCount: 1,
        highlights: [
          "Belajar React & modern JavaScript",
          "Slicing UI dari Figma ke responsive web",
          "Kolaborasi dengan tim backend & designer",
        ],
      },
    ],
  },
  "freelance/index": {
    title: "Freelance Projects",
    subtitle: "Proyek Freelance & Side Projects",
    period: "2021 — Sekarang",
    entries: [
      {
        company: "Fashion Brand Lokal",
        role: "Full-Stack Developer",
        period: "2023",
        projectCount: 1,
        highlights: ["E-commerce platform dengan payment gateway"],
      },
      {
        company: "Startup Fintech",
        role: "Frontend Developer",
        period: "2023",
        projectCount: 1,
        highlights: ["Real-time analytics dashboard"],
      },
      {
        company: "Perusahaan Manufaktur",
        role: "Frontend Developer",
        period: "2022",
        projectCount: 1,
        highlights: ["Interactive company profile dengan animasi premium"],
      },
      {
        company: "Lembaga Pendidikan",
        role: "Full-Stack Developer",
        period: "2021",
        projectCount: 1,
        highlights: ["Learning management system dengan video streaming"],
      },
    ],
  },
};
