import React from "react";
import { Phone, UtensilsCrossed, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { info } from "../data/menu";

export default function Hero({ t }) {
  return (
    <section id="top" data-testid="hero-section" className="relative overflow-hidden">
      <div className="grain relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 pt-10 pb-16 md:grid-cols-12 md:gap-12 md:px-10 md:pt-16 md:pb-24">
        {/* Left: Text */}
        <div className="relative z-10 md:col-span-7 flex flex-col justify-center">
          <span
            data-testid="hero-eyebrow"
            className="mb-6 inline-flex w-fit items-center gap-2 border-l-2 border-[hsl(var(--brand-terracotta))] pl-3 text-xs font-medium uppercase tracking-[0.24em] text-[hsl(var(--brand-terracotta))]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-terracotta))]"></span>
            {t.hero.eyebrow}
          </span>

          <h1 data-testid="hero-title" className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            {t.hero.title1}
            <br />
            <span className="italic text-[hsl(var(--brand-terracotta))]">{t.hero.title2}</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              data-testid="hero-view-menu-btn"
              asChild
              className="rounded-full bg-[hsl(var(--brand-ink))] px-6 py-6 text-[hsl(var(--brand-cream))] shadow-none hover:bg-[hsl(var(--brand-ink))]/90"
            >
              <a href="#menu">
                <UtensilsCrossed className="mr-2 h-4 w-4" />
                {t.hero.viewMenu}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              data-testid="hero-call-btn"
              asChild
              variant="outline"
              className="rounded-full border-[hsl(var(--brand-terracotta))] bg-transparent px-6 py-6 text-[hsl(var(--brand-terracotta))] shadow-none hover:bg-[hsl(var(--brand-terracotta))] hover:text-[hsl(var(--brand-cream))]"
            >
              <a href={info.phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                {t.hero.callNow}
              </a>
            </Button>
          </div>

          {/* Fine print */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-foreground/60">
            <span>San Vito al Mantico · Verona</span>
            <span className="hidden h-px w-6 bg-border sm:inline-block"></span>
            <a data-testid="hero-phone-inline" href={info.phoneHref} className="hover:text-[hsl(var(--brand-terracotta))]">
              {info.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Right: Image collage */}
        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-border">
            <img
              src="https://images.pexels.com/photos/29626982/pexels-photo-29626982.jpeg"
              alt="Forno a legna con fiamma calda"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-ink))]/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[hsl(var(--brand-cream))]">
              <div>
                <div className="font-serif text-xs italic opacity-80">Forno a legna</div>
                <div className="font-serif text-lg">Est. tradizione</div>
              </div>
              <div className="font-serif text-4xl italic leading-none opacity-90">01</div>
            </div>
          </div>
          {/* small floating card */}
          <div className="absolute -bottom-6 -left-6 hidden w-44 rotate-[-3deg] overflow-hidden rounded-md border border-border bg-[hsl(var(--brand-cream))] shadow-lg sm:block">
            <img
              src="https://images.pexels.com/photos/29609013/pexels-photo-29609013.jpeg"
              alt="Pizza margherita con basilico"
              className="h-32 w-full object-cover"
            />
            <div className="px-3 py-2">
              <div className="font-serif text-sm italic">Margherita</div>
              <div className="text-xs text-foreground/60">pomodoro · fior di latte · basilico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
