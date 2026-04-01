// Portfolio file routes configuration

export interface PortfolioFile {
  title: string
  description: string
  path: string
}

export const portfolioFiles: Record<string, PortfolioFile> = {
  readme: {
    title: "Home",
    description: "Welcome to my portfolio - built as an IDE interface",
    path: "/",
  },
  about: {
    title: "About Me",
    description: "Learn about my background, skills, and experience",
    path: "/about",
  },
  projects: {
    title: "Projects",
    description: "Explore my software development projects and contributions",
    path: "/projects",
  },
  contact: {
    title: "Contact",
    description: "Get in touch - email, GitHub, LinkedIn",
    path: "/contact",
  },
  "experience/index": {
    title: "Work Experience",
    description: "Professional work experience and career highlights",
    path: "/experience",
  },
  "freelance/index": {
    title: "Freelance Projects",
    description: "Freelance work and side projects",
    path: "/freelance",
  },
}

export const availableFiles = Object.keys(portfolioFiles)
