import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import "./globals.css";
import { ThemeProvider } from "@/context/themeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Being Kinyua",
  description: "Showcasing my projects, skills, and achievements.",
  keywords:
    "portfolio, web development, nextjs, tailwind, blogs, data science, AI, Machine learning, poetry, poems, art",
  openGraph: {
    title: "My Portfolio",
    description: "Explore my portfolio and latest projects.",
    type: "website",
    url: "https://myportfolio.com",
    images: [
      {
        url: "https://myportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kinyua", // 🔹 Updated with real name
      jobTitle: "Web Developer",
      url: "https://myportfolio.com",
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon for Branding */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <main className="min-h-screen">{children}</main>
          </Suspense>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
