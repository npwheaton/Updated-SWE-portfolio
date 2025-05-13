import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nathaniel Wheaton | Software Engineer Portfolio",
  description: "Portfolio showcasing skills, experience, and projects of a Software Engineer",
  keywords: ["Software Engineer", "WMS", "Portfolio", "Frontend Development", "Backend Development","Fullstack Developer"],
  authors: [
    {
      name: "Nathaniel Wheaton",
      url: "https://npwheaton.github.io",
    },
  ],
  icons: {
    icon: [
      { url: '/nwlogo2.png' }
    ],
    apple: [
      { url: '/nwlogo2.png' }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/nwlogo2png" />
        <link rel="apple-touch-icon" href="/nwlogo2.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientBody>{children}</ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
