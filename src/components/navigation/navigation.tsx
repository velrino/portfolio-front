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
import { Menu, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Locale } from "@/types/locale";
import Link from "next/link";

export function Navigation() {
  const { locale, setLocale } = useLocale();
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === "/" || pathname === "";

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navItems = [
    { href: isHomePage ? "#about" : "/#about", label: t("nav.about") },
    { href: isHomePage ? "#experience" : "/#experience", label: t("nav.experience") },
    { href: isHomePage ? "#awards" : "/#awards", label: t("navigation.awards") },
    { href: isHomePage ? "#talks" : "/#talks", label: t("nav.talks") },
    { href: isHomePage ? "#skills" : "/#skills", label: t("nav.skills") },
    { href: isHomePage ? "#contact" : "/#contact", label: t("nav.contact") },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">velrino</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side - Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              aria-label={t("nav.toggle")}
              className="text-sm border border-border rounded-full px-3 py-1 hover:border-primary transition-colors"
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
                  className="md:hidden p-2 hover:bg-accent rounded-md transition"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full h-full p-0">
                <div className="flex flex-col h-full bg-gradient-to-br from-primary/10 to-secondary/10">
                  <SheetHeader className="p-6 border-b">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                      <SheetClose asChild>
                        <button
                          className="p-2 hover:bg-accent rounded-md transition"
                          aria-label="Close menu"
                        >
                          <X className="h-6 w-6" />
                        </button>
                      </SheetClose>
                    </div>
                  </SheetHeader>

                  {/* Mobile Navigation Links */}
                  <div className="flex-1 flex flex-col justify-center gap-6 px-8">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="text-2xl font-semibold text-center py-3 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Language Toggle Mobile */}
                  <div className="p-6 border-t">
                    <button
                      className="w-full text-center border-2 border-border rounded-lg py-4 text-lg hover:border-primary hover:bg-primary/5 transition-all"
                      onClick={() =>
                        setLocale(
                          locale === Locale.PT_BR ? Locale.EN_US : Locale.PT_BR
                        )
                      }
                    >
                      {locale === Locale.PT_BR ? "English" : "Português"}
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
