"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Locale } from "@/types/locale";

// Types
interface DropdownItem {
  href: string;
  title: string;
  description?: string;
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
}

// Dropdown Component
function DropdownMenu({ title, items }: DropdownMenuProps) {
  return (
    <div className="relative group">
      <button className="text-white/80 hover:text-white transition flex items-center gap-1">
        {title}
        <svg
          className="w-4 h-4 transition-transform group-hover:rotate-180"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="fixed top-16 left-0 right-0 w-full min-h-[75vh] max-h-[75vh] bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t border-gray-100 overflow-auto">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block group/item hover:bg-gray-50 rounded-lg p-4 -m-4 transition"
              >
                <h4 className="font-semibold text-gray-900 text-lg mb-1 group-hover/item:text-indigo transition">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-gray-600 text-sm">{item.description}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navigation() {
  const { locale, setLocale } = useLocale();
  const { t } = useTranslation();

  const pathname = usePathname();
  const [isPastFeatures, setIsPastFeatures] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Check if we're on the home page
  const isHomePage = pathname === "/" || pathname === "";

  useEffect(() => {
    console.log({ isHomePage });
    if (!isHomePage) {
      setIsPastFeatures(false);
      return;
    }

    const el = document.getElementById("demo");
    if (!el) return;

    const HEADER = 0;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const isInViewport =
        rect.top <= window.innerHeight && rect.bottom >= HEADER;
      setIsPastFeatures(isInViewport);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHomePage]);

  // Dropdown items for Sections
  const sectionsDropdownItems: DropdownItem[] = [
    {
      href: isHomePage ? "#features" : "/#features",
      title: t("nav.dropdown.features.title"),
      description: t("nav.dropdown.features.desc"),
    },
    {
      href: isHomePage ? "#ecosystem" : "/#ecosystem",
      title: "Ecossistema",
      description: "Nosso ecossistema de soluções",
    },
    {
      href: isHomePage ? "#cases" : "/#cases",
      title: t("nav.dropdown.cases.title"),
      description: t("nav.dropdown.cases.desc"),
    },
    {
      href: isHomePage ? "#social-proof" : "/#social-proof",
      title: "Validação",
      description: "Números e validação de mercado",
    },
    {
      href: isHomePage ? "#establishments" : "/#establishments",
      title: t("nav.dropdown.establishments.title"),
      description: t("nav.dropdown.establishments.desc"),
    },
    {
      href: isHomePage ? "#technology" : "/#technology",
      title: "Tecnologia",
      description: "Stack tecnológico enterprise",
    },
    {
      href: isHomePage ? "#investors" : "/#investors",
      title: t("nav.dropdown.investors.title"),
      description: t("nav.dropdown.investors.desc"),
    },
    {
      href: isHomePage ? "#team" : "/#team",
      title: "Time",
      description: "Nosso time de especialistas",
    },
    {
      href: isHomePage ? "#advertisers" : "/#advertisers",
      title: t("nav.dropdown.advertisers.title"),
      description: t("nav.dropdown.advertisers.desc"),
    },
    {
      href: isHomePage ? "#enterprise" : "/#enterprise",
      title: "Enterprise",
      description: "Soluções para grandes corporações",
    },
    {
      href: isHomePage ? "#press" : "/#press",
      title: "Imprensa",
      description: "Cobertura na mídia",
    },
    {
      href: isHomePage ? "#testimonials" : "/#testimonials",
      title: t("nav.dropdown.testimonials.title"),
      description: t("nav.dropdown.testimonials.desc"),
    },
  ];

  // Dropdown items for Demo
  const demoDropdownItems: DropdownItem[] = [
    {
      href: "/demo",
      title: t("nav.dropdown.demo.interactive.title"),
      description: t("nav.dropdown.demo.interactive.desc"),
    },
    {
      href: "/demo/dashboard",
      title: t("nav.dropdown.demo.dashboard.title"),
      description: t("nav.dropdown.demo.dashboard.desc"),
    },
    {
      href: "/demo/campaigns",
      title: t("nav.dropdown.demo.campaigns.title"),
      description: t("nav.dropdown.demo.campaigns.desc"),
    },
    {
      href: "/demo/reports",
      title: t("nav.dropdown.demo.reports.title"),
      description: t("nav.dropdown.demo.reports.desc"),
    },
    {
      href: "/demo/ai",
      title: t("nav.dropdown.demo.ai.title"),
      description: t("nav.dropdown.demo.ai.desc"),
    },
    {
      href: "/demo/integration",
      title: t("nav.dropdown.demo.integration.title"),
      description: t("nav.dropdown.demo.integration.desc"),
    },
  ];

  return (
    <nav
      className={cn(
        `fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-white/10`,
        isPastFeatures ? "bg-gradient-to-r from-violet/50 to-indigo/50" : ""
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8  rounded-full flex items-center justify-center">
              <img src="/logo/white.png" />
            </div>
            <span className="text-white font-bold text-xl">Velrino</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu
              title={t("nav.sections")}
              items={sectionsDropdownItems}
            />
            <DropdownMenu title={t("nav.demo")} items={demoDropdownItems} />
            <a
              href={isHomePage ? "#investors" : "/#investors"}
              className="text-white/80 hover:text-white transition"
            >
              {t("nav.contact")}
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              aria-label={t("nav.toggle")}
              className="text-white/80 hover:text-white transition text-sm border border-white/20 rounded-full px-3 py-1"
              onClick={() =>
                setLocale(locale === Locale.PT_BR ? Locale.EN_US : Locale.PT_BR)
              }
            >
              {locale === Locale.PT_BR ? "EN" : "PT"}
            </button>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full h-full bg-gradient-to-br from-indigo to-violet antialiased border-none p-0 [&>button]:hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Header com logo e botão de fechar */}
                  <SheetHeader className="flex-row items-center justify-between p-6 border-b border-white/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <img src="/logo/white.png" />
                      </div>
                      <SheetTitle className="text-white font-bold text-xl">
                        Velrino
                      </SheetTitle>
                    </div>

                    <SheetClose asChild>
                      <button
                        className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-md transition"
                        aria-label="Fechar menu"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </SheetClose>
                  </SheetHeader>

                  {/* Navigation Links with Accordion */}
                  <div className="flex-1 overflow-y-auto px-6 py-8">
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full [&_[data-state=open]>button>svg]:rotate-90"
                    >
                      {/* Home Link */}
                      <SheetClose asChild>
                        <a
                          href={isHomePage ? "#" : "/"}
                          className="flex items-center justify-between text-white/80 hover:text-white transition text-lg font-medium py-4 border-b border-white/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("nav.home")}
                          <ChevronRight className="h-5 w-5" />
                        </a>
                      </SheetClose>

                      {/* Sections Accordion */}
                      <AccordionItem
                        value="sections"
                        className="border-b border-white/10 [&_svg]:text-white/60"
                      >
                        <AccordionTrigger className="text-white/80 hover:text-white text-lg font-medium py-4 hover:no-underline [&[data-state=open]]:text-white">
                          {t("nav.sections")}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="py-2 space-y-1">
                            {sectionsDropdownItems.map((item, index) => (
                              <SheetClose asChild key={index}>
                                <a
                                  href={item.href}
                                  className="block pl-4 py-3 hover:bg-white/5 rounded-lg transition"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <h4 className="text-white font-medium mb-1">
                                    {item.title}
                                  </h4>
                                  <p className="text-white/60 text-sm">
                                    {item.description}
                                  </p>
                                </a>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Demo Accordion */}
                      <AccordionItem
                        value="demo"
                        className="border-b border-white/10 [&_svg]:text-white/60"
                      >
                        <AccordionTrigger className="text-white/80 hover:text-white text-lg font-medium py-4 hover:no-underline [&[data-state=open]]:text-white">
                          {t("nav.demo")}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="py-2 space-y-1">
                            {demoDropdownItems.map((item, index) => (
                              <SheetClose asChild key={index}>
                                <a
                                  href={item.href}
                                  className="block pl-4 py-3 hover:bg-white/5 rounded-lg transition"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <h4 className="text-white font-medium mb-1">
                                    {item.title}
                                  </h4>
                                  <p className="text-white/60 text-sm">
                                    {item.description}
                                  </p>
                                </a>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Investors Link */}
                      <SheetClose asChild>
                        <a
                          href={isHomePage ? "#investors" : "/#investors"}
                          className="flex items-center justify-between text-white/80 hover:text-white transition text-lg font-medium py-4 border-b border-white/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("nav.contact")}
                          <ChevronRight className="h-5 w-5" />
                        </a>
                      </SheetClose>
                    </Accordion>
                  </div>

                  {/* Footer com toggle de idioma */}
                  <div className="p-6 border-t border-white/20">
                    <button
                      className="w-full text-white/80 hover:text-white transition text-lg border border-white/20 rounded-full py-3 hover:bg-white/10"
                      onClick={() =>
                        setLocale(
                          locale === Locale.PT_BR ? Locale.EN_US : Locale.PT_BR
                        )
                      }
                    >
                      {locale === Locale.PT_BR ? "🇺🇸 English" : "🇧🇷 Português"}
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
