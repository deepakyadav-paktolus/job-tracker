import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Providers from "./providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "TiM (Track in Minutes)",
  description: "Track your job applications in minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">    
       <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
       <Providers>{children}</Providers>
        <Toaster />
      </ThemeProvider></body>
    </html>
  );
}
