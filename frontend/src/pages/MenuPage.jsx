import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import Menu from "../sections/Menu";
import Banner from "../sections/Banner";
import { dict } from "../i18n/dict";
import { info } from "../data/menu";

export default function MenuPage() {
  const [lang, setLang] = useState("it");
  const t = dict[lang];
  const toggleLang = () => setLang(lang === "it" ? "en" : "it");

  return (
    <div data-testid="menu-page" className="min-h-screen bg-background text-foreground">
      <Banner lang={lang} setLang={setLang} />
      <header
        data-testid="menu-page-header"
        className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link
            data-testid="menu-back-link"
            to="/"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/70 transition-colors hover:text-[hsl(var(--brand-terracotta))]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            {lang === "it" ? "Torna al sito" : "Back to site"}
          </Link>

          <Link to="/" className="hidden items-center gap-3 md:flex" aria-label="Pizzeria San Francisco">
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-[hsl(var(--brand-cream))] ring-1 ring-border">
              <img
                src="https://customer-assets.emergentagent.com/job_sanfran-pizzeria/artifacts/vnux44fh_logopizzeria.jpeg"
                alt="Logo Pizzeria San Francisco"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-serif text-lg leading-none tracking-tight">
              Pizzeria <span className="italic text-[hsl(var(--brand-terracotta))]">San Francisco</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              data-testid="menu-page-lang-toggle"
              onClick={toggleLang}
              className="group hidden md:flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/80 hover:border-[hsl(var(--brand-terracotta))] hover:text-[hsl(var(--brand-terracotta))] transition-all"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className={lang === "it" ? "font-semibold text-[hsl(var(--brand-terracotta))]" : ""}>IT</span>
              <span className="text-border">/</span>
              <span className={lang === "en" ? "font-semibold text-[hsl(var(--brand-terracotta))]" : ""}>EN</span>
            </button>
            <Button
              data-testid="menu-page-call-btn"
              asChild
              className="hidden rounded-full bg-[hsl(var(--brand-terracotta))] px-4 text-[hsl(var(--brand-cream))] shadow-none hover:bg-[hsl(var(--brand-terracotta))]/90 sm:inline-flex"
            >
              <a href={info.phoneHref}>
                <Phone className="mr-1.5 h-4 w-4" />
                {t.cta.callShort}
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <Menu t={t} lang={lang} />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-10">
          <Link
            data-testid="menu-back-bottom"
            to="/"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/70 transition-colors hover:text-[hsl(var(--brand-terracotta))]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            {lang === "it" ? "Torna al sito" : "Back to site"}
          </Link>
        </div>
      </footer>
    </div>
  );
}
