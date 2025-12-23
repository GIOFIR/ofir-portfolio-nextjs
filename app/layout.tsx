import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ofir Giat | Software Developer",
    template: "%s | Ofir Giat",
  },
  description:
    "Software developer specializing in backend systems, APIs, and clean architecture.",
  openGraph: {
    title: "Ofir Giat | Software Developer",
    description:
      "Backend and full-stack projects, APIs, and system design examples.",
    url: "https://ofir-portfolio-nextjs.vercel.app",
    siteName: "Ofir Giat Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <header className="border-b bg-white">
          <nav className="max-w-4xl mx-auto flex gap-6 p-4">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto p-8">
          {children}
        </main>

        <footer className="border-t text-sm text-gray-500 text-center p-4">
          © {new Date().getFullYear()} Ofir Giat
        </footer>
      </body>
    </html>
  );
}
