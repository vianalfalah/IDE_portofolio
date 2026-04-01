import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/hooks/useTheme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vianalfalah-portofolio.vercel.app"),
  title: {
    default: "Portfolio - Oviano Gunadi AL",
    template: "%s | Oviano Gunadi AL",
  },
  description: "Frontend Web Developer with 5+ years experience in React, Next.js, TypeScript, and modern web technologies",
  keywords: ["frontend developer", "react", "nextjs", "typescript", "web developer", "oviano gunadi"],
  authors: [{ name: "Oviano Gunadi AL" }],
  creator: "Oviano Gunadi AL",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Oviano Gunadi AL Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@oviano",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
