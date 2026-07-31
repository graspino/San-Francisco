import React from "react";
import { Link } from "react-router-dom";
import { Phone, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { info } from "../data/menu";
// 1. IMPORTA IL BANNER
import { banner } from "../data/banner";

export default function Header({ lang, setLang, t }) {
  const toggleLang = () => setLang(lang === "it" ? "en" : "it");

  // 2. CONTROLLA LE DATE
  const today = new Date();
  const showBanner = banner.active && today >= new Date(banner.from) && today <= new Date(banner.until);

  return (
    // 3. IL DIV STICKY TIENE TUTTO IN CIMA
    <div className="sticky top-0 z-40">
      
      {/* 4. IL BANNER (Color Terracotta/Marrone) */}
      {showBanner && (
        <div className="bg-[hsl(var(--brand-terracotta))] py-1.5 px-4 text-center text-sm font-medium text-[hsl(var(--brand-cream))]">
          {lang === "it" ? banner.message_it : banner.message_en}
        </div>
      )}

      <header
        data-testid="site-header"
        className="border-b border-border/70 bg-background/85 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          {/* Brand */}
          <a href="#top" data-testid="brand-link" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-[hsl(var(--brand-cream))] ring-1 ring-border">
              <img
                src="https://customer-assets.emergentagent.com/job_sanfran-pizzeria/artifacts/vnux44fh_logopizzeria.jpeg"
                alt="Logo Pizzeria San Francisco"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden font-serif text-lg leading-none tracking-tight sm:block">
              Pizzeria <span className="italic text-[hsl(var(--brand-terracotta))]">San Francisco</span>
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link data-testid="nav-menu" to="/menu" className="text-sm uppercase tracking-widest text-foreground/80 hover:text-[hsl(var(--brand-terracotta))] transition-colors">
              {t.nav.menu}
            </Link>
            <a data-testid="nav-info" href="#info" className="text-sm uppercase tracking-widest text-foreground/80 hover:text-[hsl(var(--brand-terracotta))] transition-colors">
              {t.nav.info}
            </a>
            <a data-testid="nav-qr" href="#qr" className="text-sm uppercase tracking-widest text-foreground/80 hover:text-[hsl(var(--brand-terracotta))] transition-colors">
              {t.nav.qr}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              data-testid="lang-toggle"
              onClick={toggleLang}
              className="group flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/80 hover:border-[hsl(var(--brand-terracotta))] hover:text-[hsl(var(--brand-terracotta))] transition-all"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className={lang === "it" ? "font-semibold text-[hsl(var(--brand-terracotta))]" : ""}>IT</span>
              <span className="text-border">/</span>
              <span className={lang === "en" ? "font-semibold text-[hsl(var(--brand-terracotta))]" : ""}>EN</span>
            </button>
            <Button
              data-testid="header-call-btn"
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
    </div>
  );
}
