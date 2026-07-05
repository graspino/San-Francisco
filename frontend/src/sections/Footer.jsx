import React from "react";
import { Instagram, Phone, MapPin } from "lucide-react";
import { info } from "../data/menu";

// TikTok icon (lucide has no built-in, inline SVG)
const TiktokIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.52V7.1a4.85 4.85 0 0 1-1.84-.41z" />
  </svg>
);

export default function Footer({ t, lang }) {
  return (
    <footer
      id="contact"
      data-testid="site-footer"
      className="bg-[hsl(var(--brand-ink))] text-[hsl(var(--brand-cream))]"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--brand-cream))]/60">
              Pizzeria
            </div>
            <div className="font-serif text-4xl leading-none tracking-tight">
              San <span className="italic text-[hsl(var(--accent))]">Francisco</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[hsl(var(--brand-cream))]/70">
              {t.footer.built}
            </p>
          </div>

          {/* Social + Phone block */}
          <div className="md:col-span-7">
            <div className="mb-6 text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--brand-cream))]/60">
              {t.footer.follow}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Instagram */}
              <a
                data-testid="footer-instagram"
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-md border border-[hsl(var(--brand-cream))]/15 bg-[hsl(var(--brand-cream))]/5 px-4 py-4 transition-colors hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--brand-cream))]/10"
              >
                <Instagram className="h-5 w-5 text-[hsl(var(--accent))]" />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--brand-cream))]/60">
                    {t.footer.instagram}
                  </div>
                  <div className="truncate font-serif italic">@pizzeria-sf</div>
                </div>
              </a>

              {/* TikTok */}
              <a
                data-testid="footer-tiktok"
                href="https://tiktok.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-md border border-[hsl(var(--brand-cream))]/15 bg-[hsl(var(--brand-cream))]/5 px-4 py-4 transition-colors hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--brand-cream))]/10"
              >
                <TiktokIcon className="h-5 w-5 text-[hsl(var(--accent))]" />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--brand-cream))]/60">
                    {t.footer.tiktok}
                  </div>
                  <div className="truncate font-serif italic">@pizzeria-sf</div>
                </div>
              </a>

              {/* Phone */}
              <a
                data-testid="footer-phone"
                href={info.phoneHref}
                className="group flex items-center gap-3 rounded-md border border-[hsl(var(--accent))]/60 bg-[hsl(var(--accent))]/10 px-4 py-4 transition-colors hover:bg-[hsl(var(--accent))]/20"
              >
                <Phone className="h-5 w-5 text-[hsl(var(--accent))]" />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--brand-cream))]/70">
                    {t.footer.call}
                  </div>
                  <div className="truncate font-serif">{info.phoneDisplay}</div>
                </div>
              </a>
            </div>

            {/* Address row */}
            <div className="mt-8 flex items-start gap-3 text-sm text-[hsl(var(--brand-cream))]/70">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{info.address}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[hsl(var(--brand-cream))]/10 pt-6 text-xs text-[hsl(var(--brand-cream))]/50 sm:flex-row sm:items-center">
          <div>{t.footer.copyright}</div>
          <div className="uppercase tracking-widest">San Vito al Mantico · Verona · IT</div>
        </div>
      </div>
    </footer>
  );
}
