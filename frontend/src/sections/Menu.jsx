import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { menu, menuCategories } from "../data/menu";

function formatEuro(v) {
  if (v == null) return "—";
  return `€ ${v.toFixed(2).replace(".", ",")}`;
}

function CategoryNav({ activeId, onSelect, t, lang }) {
  return (
    <nav data-testid="menu-category-nav" className="lg:sticky lg:top-24 lg:self-start">
      <div className="mb-4 text-[10px] uppercase tracking-[0.24em] text-foreground/50">
        {lang === "it" ? "Categorie" : "Categories"}
      </div>
      <ul className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
        {menuCategories.map((c) => {
          const isActive = c.id === activeId;
          return (
            <li key={c.id}>
              <button
                data-testid={`cat-nav-${c.id}`}
                onClick={() => onSelect(c.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all border ${
                  isActive
                    ? "border-[hsl(var(--brand-terracotta))] bg-[hsl(var(--brand-terracotta))]/10 text-[hsl(var(--brand-terracotta))] font-medium"
                    : "border-transparent text-foreground/70 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {lang === "it" ? c.it : c.en}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function PriceCell({ value, label }) {
  return (
    <div className="min-w-[3.5rem] text-right">
      <div className="text-[9px] uppercase tracking-widest text-foreground/40">{label}</div>
      <div className={`font-serif text-sm md:text-base ${value == null ? "text-foreground/30" : "text-foreground"}`}>
        {formatEuro(value)}
      </div>
    </div>
  );
}

function MenuItem({ item, lang, t }) {
  return (
    <li data-testid={`menu-item-${item.name}`} className="group py-4">
      <div className="flex items-baseline gap-3">
        <h3 className="font-serif text-lg md:text-xl uppercase tracking-wide text-foreground">
          {item.name}
        </h3>
        <div className="menu-leader h-3 flex-1 opacity-60"></div>
        <div className="flex gap-4">
          <PriceCell value={item.tonda} label={t.menu.cols.tonda} />
          <PriceCell value={item.taglio} label={t.menu.cols.taglio} />
          <PriceCell value={item.maxi} label={t.menu.cols.maxi} />
        </div>
      </div>
      <p className="mt-1 max-w-3xl text-sm italic text-foreground/60">
        {lang === "it" ? item.it : item.en}
      </p>
    </li>
  );
}

export default function Menu({ t, lang }) {
  // Stato iniziale aggiornato per rispecchiare il nuovo ID della categoria principale
  const [activeId, setActiveId] = useState("classici");
  const [query, setQuery] = useState("");

  const handleSelect = (id) => {
    setActiveId(id);
    const el = document.getElementById(`cat-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    const results = {};
    for (const cat of menuCategories) {
      const items = (menu[cat.id] || []).filter((it) => {
        return (
          it.name.toLowerCase().includes(q) ||
          it.it.toLowerCase().includes(q) ||
          it.en.toLowerCase().includes(q)
        );
      });
      if (items.length) results[cat.id] = items;
    }
    return results;
  }, [query]);

  return (
    <section id="menu" data-testid="menu-section" className="border-t border-border bg-[hsl(var(--brand-cream))]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--brand-terracotta))]">
              — {lang === "it" ? "La Carta" : "The Card"}
            </div>
            <h2 data-testid="menu-title" className="font-serif text-4xl leading-none tracking-tight md:text-6xl">
              {t.menu.title}
            </h2>
            <p className="mt-4 max-w-lg text-foreground/70">{t.menu.subtitle}</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
            <Input
              data-testid="menu-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="rounded-full border-border bg-background pl-9 placeholder:text-foreground/40 focus-visible:ring-1 focus-visible:ring-[hsl(var(--brand-terracotta))]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Nav */}
          <aside className="lg:col-span-3">
            <CategoryNav activeId={activeId} onSelect={handleSelect} t={t} lang={lang} />
          </aside>

          {/* Menu list */}
          <div className="lg:col-span-9">
            {(filtered ? menuCategories.filter((c) => filtered[c.id]) : menuCategories).map((c) => {
              const items = filtered ? filtered[c.id] : menu[c.id];
              if (!items || items.length === 0) return null;
              return (
                <div key={c.id} id={`cat-${c.id}`} data-testid={`category-${c.id}`} className="mb-16 scroll-mt-24">
                  <div className="mb-6 flex items-baseline gap-3">
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
                      {lang === "it" ? c.it : c.en}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-foreground/40">
                      · {items.length}
                    </span>
                  </div>
                  <ul className="divide-y divide-border/60">
                    {items.map((it) => (
                      <MenuItem key={it.name} item={it} lang={lang} t={t} />
                    ))}
                  </ul>
                </div>
              );
            })}

            {filtered && Object.keys(filtered).length === 0 && (
              <div
                data-testid="menu-empty"
                className="rounded-md border border-dashed border-border bg-background px-6 py-16 text-center text-foreground/60"
              >
                {lang === "it" ? "Nessun risultato per" : "No results for"} “{query}”.
              </div>
            )}

            <p className="mt-6 text-xs italic text-foreground/50">{t.menu.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
