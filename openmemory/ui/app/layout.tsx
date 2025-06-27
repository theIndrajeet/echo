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
      <body className="h-screen font-sans antialiased flex flex-col bg-[#FFFEF9]">
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <ScrollArea className="h-[calc(100vh-64px)]">{children}</ScrollArea>
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
