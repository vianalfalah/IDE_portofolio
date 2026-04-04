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
  url?: string;
}

export const projectContents: Record<string, ProjectData> = {
  // === EXPERIENCE PROJECTS ===
  "experience/qoin/payment-gateway": {
    title: "Web Admin dan Web Client Payment Gateway",
    company: "PT QOIN DIGITAL INDONESIA",
    role: "Frontend Developer",
    period: "2021 — 2026",
    summary: "Aplikasi web untuk monitoring transaksi dan portal client payment gateway.",
    description: [
      "Mengembangkan dashboard admin untuk memonitor seluruh transaksi payment gateway",
      "Membangun portal client untuk manajemen merchant dan laporan transaksi",
      "Integrasi REST API yang aman untuk pemrosesan data real-time",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop", alt: "Dashboard Preview" },
      { src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=600&h=340&fit=crop", alt: "Transaction Monitor" },
    ],
    stack: ["React", "TypeScript", "Redux", "Tailwind CSS", "REST API"],
  },
  "experience/qoin/cash-crypto": {
    title: "Web Admin Qoincash dan Qoin Crypto",
    company: "PT QOIN DIGITAL INDONESIA",
    role: "Frontend Developer",
    period: "2021 — 2026",
    summary: "Sistem admin untuk operasional dompet digital Qoincash dan platform transaksi Qoin Crypto.",
    description: [
      "Mengembangkan dashboard untuk fitur e-wallet Qoincash",
      "Membangun antarmuka monitoring transaksi crypto dengan grafik data real-time",
      "Optimalisasi rendering data kompleks dengan TanStack Query",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=600&h=340&fit=crop", alt: "Crypto Dashboard" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop", alt: "Analytics Charts" },
    ],
    stack: ["Next.js", "React", "TanStack Query", "Zustand", "Tailwind CSS"],
  },
  "experience/qoin/korlantas": {
    title: "Web Admin Korlantas",
    company: "PT QOIN DIGITAL INDONESIA",
    role: "Frontend Developer",
    period: "2021 — 2026",
    summary: "Platform admin operasional pendukung ekosistem Korlantas.",
    description: [
      "Membangun modul dashboard untuk manajemen data lalu lintas dan operasional",
      "Integrasi API untuk memvisualisasikan data pemantauan",
      "Memastikan kompatibilitas dan stabilitas aplikasi untuk penggunaan tinggi",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=340&fit=crop", alt: "Admin Panel" },
      { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=340&fit=crop", alt: "Data Management" },
    ],
    stack: ["React", "Material UI", "Redux", "Axios"],
  },
  "experience/qoin/landing-page": {
    title: "Landing Page Perusahaan",
    company: "PT QOIN DIGITAL INDONESIA",
    role: "Frontend Developer",
    period: "2021 — 2026",
    summary: "Website landing page profil dan produk perusahan Qoin.",
    url: "https://www.qoin.id/",
    description: [
      "Membangun landing page yang responsif dan berkinerja tinggi",
      "Optimasi SEO dan performa Core Web Vitals dengan Next.js",
      "Pembuatan komponen UI yang menarik untuk memaksimalkan conversion rate",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=340&fit=crop", alt: "Landing Page" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=340&fit=crop", alt: "Website Preview" },
    ],
    stack: ["Next.js", "TypeScript", "SCSS", "Tailwind CSS", "Framer Motion"],
  },

  // === FREELANCE / OTHER PROJECTS ===
  "freelance/dss-ahu/dashboard": {
    title: "DSS AHU Analytics Dashboard",
    company: "DSS AHU",
    role: "Frontend Developer",
    period: "2026 — Now",
    summary: "Enterprise-level dashboard application for monitoring legal administrative services across Indonesia.",
    description: [
      "Implemented advanced analytics dashboard with multi-level drill-down (up to 4 layers)",
      "Integrated interactive maps using OpenLayer and Mapbox GL for geographic data",
      "Created real-time data visualizations using various charting libraries",
      "Tracked performance analysis, PNBP revenue, and service satisfaction metrics",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop", alt: "Analytics Dashboard" },
      { src: "https://images.unsplash.com/photo-1524850011238-e3d235c2d4c9?w=600&h=340&fit=crop", alt: "Interactive Maps" },
    ],
    stack: ["React", "OpenLayer", "Mapbox GL", "ApexCharts", "ECharts", "D3.js"],
  },
  "freelance/siloam/ipd": {
    title: "Siloam IPD Hospital Management",
    company: "Siloam IPD",
    role: "Frontend Developer",
    period: "2023 — 2024",
    summary: "Internal hospital management interface supporting inpatient processes and master data management.",
    description: [
      "Developed interface supporting inpatient processes and operational workflow",
      "Integrated backend APIs to manage crucial hospital operational data",
      "Built responsive and reusable UI components",
      "Ensured high reliability for healthcare administration",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1538108149393-cebb47ac17e4?w=600&h=340&fit=crop", alt: "Hospital Setup" },
      { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=340&fit=crop", alt: "Medical Dashboard" },
    ],
    stack: ["React", "Material UI", "REST API", "JavaScript", "Responsive Design"],
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
    period: "2021 — Sekarang (5+ tahun)",
    entries: [
      {
        company: "PT QOIN DIGITAL INDONESIA",
        role: "Frontend Developer",
        period: "Jan 2021 — Mar 2026",
        projectCount: 4,
        highlights: [
          "Pengembangan web admin & client payment gateway",
          "Pembuatan admin dashboard Qoincash & Qoin Crypto",
          "Web admin Korlantas",
          "Landing page produk dengan optimasi Next.js",
        ],
      },
    ],
  },
  "freelance/index": {
    title: "Project Experience",
    subtitle: "Proyek Profesional",
    period: "2023 — Sekarang",
    entries: [
      {
        company: "DSS AHU",
        role: "Frontend Developer",
        period: "2026 — Now",
        projectCount: 1,
        highlights: ["Enterprise-level legal administrative dashboard", "Interactive maps & multi-level drill-down"],
      },
      {
        company: "Siloam IPD",
        role: "Frontend Developer",
        period: "2023 — 2024",
        projectCount: 1,
        highlights: ["Hospital management interface for inpatient processes"],
      },
    ],
  },
};
