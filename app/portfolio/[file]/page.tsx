import { Metadata } from "next"
import { IDEShell } from "@/components/IDEShell"
import { portfolioFiles } from "@/lib/content"

interface PageProps {
  params: Promise<{ file: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { file } = await params
  const data = portfolioFiles[file]

  if (!data) {
    return {
      title: "File Not Found | Oviano Gunadi AL",
    }
  }

  return {
    title: `${data.title} | Oviano Gunadi AL`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      url: `https://vianalfalah-portofolio.vercel.app/portfolio/${file}`,
      siteName: "Oviano Gunadi AL Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
    alternates: {
      canonical: `https://vianalfalah-portofolio.vercel.app/portfolio/${file}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(portfolioFiles).map((file) => ({
    file: file,
  }))
}

export default async function PortfolioFile({ params }: PageProps) {
  const { file } = await params

  // Validate file exists
  if (!portfolioFiles[file]) {
    return <IDEShell initialFile="readme" />
  }

  return (
    <IDEShell
      initialFile={file}
      files={Object.keys(portfolioFiles)}
    />
  )
}
