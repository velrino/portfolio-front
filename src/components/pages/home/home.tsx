"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";

export default function HomeComponent() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen">
      <VideoBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          {t("home.welcome")}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          {t("home.subtitle")}
        </p>

        <nav className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("navigation.home")}
          </Link>
          <Link
            href="/cv"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("navigation.cv")}
          </Link>
        </nav>
      </div>
    </div>
  );
}
