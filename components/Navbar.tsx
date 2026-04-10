"use client";

import Image from "next/image";
import {Menu, X} from "lucide-react";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";

import {LanguageSwitcher} from "@/components/LanguageSwitcher";
import {buttonVariants} from "@/components/ui/button";

type Props = {
  locale: string;
};

const navItems = [
  {key: "products", href: "#products"},
  {key: "story", href: "#story"},
  {key: "events", href: "#events"},
  {key: "contact", href: "#contact"},
] as const;

export function Navbar({locale}: Props) {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{opacity: 0, y: -14}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45, ease: "easeOut"}}
      className={`sticky top-0 z-50 border-b border-border/50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : "bg-background/85 backdrop-blur-lg"
      }`}
    >
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <a href={`/${locale}`} className="flex items-center gap-3">
          <span className="overflow-hidden rounded-full border border-border/70 bg-card shadow-sm">
            <Image
              src="/images/logo.jpeg"
              alt="Mediterranean Churros logo"
              width={40}
              height={40}
              className="size-10 object-cover"
              priority
            />
          </span>
          <span className="leading-none">
            <span className="block text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Mediterranean
            </span>
            <span className="block text-base font-semibold tracking-[0.08em] uppercase text-primary">
              Churros
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a href="#contact" className={buttonVariants({size: "lg", className: "rounded-full px-6"})}>
            {t("cta")}
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card transition-all duration-300 hover:-translate-y-0.5 md:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="page-shell border-t border-border/40 py-4 md:hidden">
          <div className="mb-4">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <a
              href="#contact"
              className={buttonVariants({className: "mt-2 justify-center rounded-full"})}
              onClick={() => setIsOpen(false)}
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
