import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Providers } from "./providers";
import { Merriweather, Inter, Noto_Sans } from "next/font/google";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-sans',
});

export const metadata = {
  title: "Echo",
  description: "Your AI's perfect memory.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${merriweather.variable} ${inter.variable} ${notoSans.variable}`}>
      <body className="h-screen font-sans antialiased flex flex-col relative overflow-hidden">
        {/* Global Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#F26B22] via-[#25997F] to-[#1C2F72] animate-gradient-shift z-0"></div>
        
        {/* Animated geometric patterns */}
        <div className="fixed inset-0 opacity-10 z-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border border-white rounded-full animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute bottom-40 right-40 w-20 h-20 border border-white rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-28 h-28 border border-white rounded-full animate-pulse-slow animation-delay-600"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
        </div>

        {/* Glowing orbs */}
        <div className="fixed inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-xl animate-orb-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FFC930]/10 rounded-full blur-xl animate-orb-float-reverse"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/8 rounded-full blur-lg animate-orb-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-white/6 rounded-full blur-xl animate-orb-float animation-delay-1000"></div>
        </div>

        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative z-10 flex flex-col h-screen">
              <Navbar />
              <ScrollArea className="flex-1">{children}</ScrollArea>
              <Toaster />
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
