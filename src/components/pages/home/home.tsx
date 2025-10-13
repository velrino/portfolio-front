"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import { NestedOrbitSystem } from "@/components/nested-orbit-system/nested-orbit-system";

export default function HomeComponent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </>
  );
}

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div id="hero" className="relative min-h-screen w-full overflow-hidden">
      <VideoBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 text-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white max-w-4xl">
          {t("home.welcome")}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          {t("home.subtitle")}
        </p>

        <nav className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            {t("navigation.home")}
          </Link>
          <Link
            href="/cv"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            {t("navigation.cv")}
          </Link>
          <Link
            href="/cv"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-center shadow-lg"
          >
            {t("navigation.cv")}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  return <div className="min-h-screen">About</div>;
};

export const SkillsSection = () => {
  return (
    <div className="min-h-screen">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Minhas <span className="outlined-text">Habilidades</span>
        </h2>
        <p className="text-white/80 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Algumas dos meus conhecimentos/Habilidades recorrentes
        </p>
      </div>
      <NestedOrbitSystem />
    </div>
  );
};
