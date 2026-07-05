import React, { useMemo } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { info } from "../data/menu";

// Compute whether the pizzeria is open right now (Europe/Rome).
function isOpenNow() {
  try {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Rome",
      hour12: false,
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
    const parts = fmt.formatToParts(new Date());
    const weekday = parts.find((p) => p.type === "weekday").value; // Mon, Tue...
    const hour = parseInt(parts.find((p) => p.type === "hour").value, 10);
    const minute = parseInt(parts.find((p) => p.type === "minute").value, 10);
    const nowMin = hour * 60 + minute;
    // Map to our order (Mon..Sun)
    const map = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
    const day = info.hours[map[weekday]];
    if (!day) return false;
    for (const s of day.slots) {
      const [start, end] = s.split("–").map((x) => x.trim());
      const [sh, sm] = start.split(":").map(Number);
      const [eh, em] = end.split(":").map(Number);
      const startMin = sh * 60 + sm;
      const endMin = eh * 60 + em;
      if (nowMin >= startMin && nowMin <= endMin) return true;
    }
    return false;
  } catch {
    return false;
  }
}

export default function Info({ t, lang }) {
  const open = useMemo(() => isOpenNow(), []);
  const mapsQuery = encodeURIComponent(info.address);

  return (
    <section id="info" data-testid="info-section" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-5">
          <div className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--brand-terracotta))]">
            — {lang === "it" ? "Visitaci" : "Visit us"}
          </div>
          <h2 className="font-serif text-4xl leading-none tracking-tight md:text-6xl">
            {t.info.title}
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest">
            <span
              data-testid="open-indicator"
              className={`h-2 w-2 rounded-full ${open ? "bg-[hsl(var(--brand-olive))]" : "bg-[hsl(var(--brand-terracotta))]"}`}
              aria-hidden
            ></span>
            {open ? t.info.openTag : t.info.closedTag}
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <div className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-foreground/50">
                <MapPin className="h-3.5 w-3.5" />
                {t.info.address}
              </div>
              <p className="font-serif text-lg leading-snug">{info.address}</p>
              <a
                data-testid="info-directions-link"
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-sm text-[hsl(var(--brand-terracotta))] underline-offset-4 hover:underline"
              >
                {lang === "it" ? "Apri in Google Maps →" : "Open in Google Maps →"}
              </a>
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-foreground/50">
                <Phone className="h-3.5 w-3.5" />
                {t.info.phone}
              </div>
              <a data-testid="info-phone-link" href={info.phoneHref} className="font-serif text-lg text-foreground hover:text-[hsl(var(--brand-terracotta))]">
                {info.phoneDisplay}
              </a>
            </div>

            <Button
              data-testid="info-call-btn"
              asChild
              className="rounded-full bg-[hsl(var(--brand-terracotta))] px-6 py-6 text-[hsl(var(--brand-cream))] shadow-none hover:bg-[hsl(var(--brand-terracotta))]/90"
            >
              <a href={info.phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                {t.cta.call}
              </a>
            </Button>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-foreground/50">
            <Clock className="h-3.5 w-3.5" />
            {t.info.hours}
          </div>
          <ul data-testid="info-hours-list" className="divide-y divide-border/60 rounded-md border border-border bg-[hsl(var(--brand-cream))]">
            {info.hours.map((h) => (
              <li key={h.day_it} className="flex items-baseline justify-between gap-3 px-5 py-4">
                <span className="font-serif text-base uppercase tracking-wide">
                  {lang === "it" ? h.day_it : h.day_en}
                </span>
                <div className="menu-leader h-3 flex-1 opacity-40"></div>
                <span className="font-serif text-sm md:text-base tabular-nums">
                  {h.slots.length ? h.slots.join("  ·  ") : t.info.closed}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 overflow-hidden rounded-md border border-border">
            <img
              src="https://images.pexels.com/photos/21792440/pexels-photo-21792440.jpeg"
              alt="Pizze italiane in tavola"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
