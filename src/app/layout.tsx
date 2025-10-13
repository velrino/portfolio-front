import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denis Magalhães - velrino",
  description: "Portfólio de Denis Magalhães (velrino)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocaleProvider>
          <div className="min-h-screen flex flex-col">
            <header className="p-4 border-b">
              <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">velrino</h1>
                <LanguageSwitcher />
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
