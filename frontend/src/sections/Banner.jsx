import React, { useEffect, useState } from "react";
import { banner } from "../data/banner";

function isActiveNow() {
  if (!banner.active) return false;
  if (banner.until) {
    const end = new Date(banner.until + "T23:59:59");
    if (new Date() > end) return false;
  }
  if (!banner.messages || banner.messages.length === 0) return false;
  return true;
}

export default function Banner({ lang = "it", setLang }) {
  const [idx, setIdx] = useState(0);
  const active = isActiveNow();
  const messages = banner.messages || [];

  useEffect(() => {
    if (!active || messages.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % messages.length);
    }, banner.intervalMs || 6000);
    return () => clearInterval(t);
  }, [active, messages.length]);

  const toggleLang = () => setLang && setLang(lang === "it" ? "en" : "it");

  const showBar = active || !!setLang;
  if (!showBar) return null;

  const current = active ? messages[idx] : null;
  const text = current ? (lang === "en" ? current.en : current.it) : "";

  return (
    <div
      data-testid="site-banner"
      className="w-full bg-[hsl(var(--brand-ink))] text-[hsl(var(--brand-cream))]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 md:px-10">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {active && (
            <>
              <span aria-hidden className="hidden sm:inline-flex h-3 w-1 overflow-hidden rounded-full flex-shrink-0">
                <span className="h-full w-1/3 bg-[#0F8A4E]" />
                <span className="h-full w-1/3 bg-white" />
                <span className="h-full w-1/3 bg-[#C0392B]" />
              </span>
              <p
                key={idx}
                data-testid="banner-message"
                className="banner-fade truncate text-xs md:text-sm font-medium tracking-wide"
              >
                {text}
              </p>
            </>
          )}
        </div>

        {setLang && (
          <button
            data-testid="banner-lang-toggle"
            onClick={toggleLang}
            className="flex flex-shrink-0 items-center gap-1 rounded-full border border-[hsl(var(--brand-cream))]/25 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[hsl(var(--brand-cream))]/80 transition-colors hover:border-[hsl(var(--brand-cream))]/60 hover:text-[hsl(var(--brand-cream))]"
            aria-label="Toggle language"
          >
            <span className={lang === "it" ? "text-[hsl(var(--brand-cream))]" : ""}>IT</span>
            <span className="opacity-40">/</span>
            <span className={lang === "en" ? "text-[hsl(var(--brand-cream))]" : ""}>EN</span>
          </button>
        )}
      </div>
    </div>
  );
}
