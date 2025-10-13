import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/navigation/navigation";
import { TouchHandler } from "@/components/touch-handler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denis Magalhães - Velrino",
  description: "Portfólio de Denis Magalhães (velrino)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
              <Navigation />
              <main className="flex-1 overflow-x-hidden w-full">
                {children}
              </main>
            </div>
          </LocaleProvider>
        </ThemeProvider>
        <TouchHandler />
        <Analytics />
      </body>
    </html>
  );
}
