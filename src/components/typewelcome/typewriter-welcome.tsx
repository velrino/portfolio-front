"use client";

import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { useMemo } from "react";
import Typewriter from "typewriter-effect";

/**
 * Embaralha um array usando Fisher-Yates shuffle
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const TypewriterWelcome = ({ classname }: { classname?: string }) => {
  const { t } = useTranslation();

  // Converte as traduções em array e embaralha uma vez no mount
  const phrases = useMemo(() => {
    const phrasesArray = t("welcome.phrases") as unknown as string[];
    return shuffleArray(phrasesArray);
  }, [t]);

  return (
    <span className={cn("text-slate-400", classname)}>
      <Typewriter
        options={{
          strings: phrases,
          autoStart: true,
          loop: true,
          delay: 25,
          deleteSpeed: 30,
          cursor: "",
        }}
      />
    </span>
  );
};
