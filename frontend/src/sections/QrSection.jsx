import React, { useCallback, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";
import { Button } from "../components/ui/button";

export default function QrSection({ t, lang }) {
  const wrapRef = useRef(null);
  const url = "https://san-francisco-omega-five.vercel.app";

  const handleDownload = useCallback(() => {
    const svg = wrapRef.current?.querySelector("svg");
    if (!svg) return;
    // Render SVG to PNG using canvas
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const svg64 = btoa(unescape(encodeURIComponent(source)));
    const image64 = "data:image/svg+xml;base64," + svg64;
    const img = new Image();
    img.onload = () => {
      const size = 1024;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#FDFBF7";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      const a = document.createElement("a");
      a.download = "pizzeria-san-francisco-qr.png";
      a.href = canvas.toDataURL("image/png");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    img.src = image64;
  }, []);

  return (
    <section id="qr" data-testid="qr-section" className="border-t border-border bg-[hsl(var(--brand-cream))]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-6">
          <div className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--brand-terracotta))]">
            — {lang === "it" ? "Menu digitale" : "Digital menu"}
          </div>
          <h2 className="font-serif text-4xl leading-none tracking-tight md:text-6xl">
            {t.qr.title}
          </h2>
          <p className="mt-6 max-w-md text-foreground/70">{t.qr.subtitle}</p>
          <div className="mt-8">
            <Button
              data-testid="qr-download-btn"
              onClick={handleDownload}
              className="rounded-full bg-[hsl(var(--brand-ink))] px-6 py-6 text-[hsl(var(--brand-cream))] shadow-none hover:bg-[hsl(var(--brand-ink))]/90"
            >
              <Download className="mr-2 h-4 w-4" />
              {t.qr.download}
            </Button>
          </div>
          <div className="mt-6 max-w-md text-xs text-foreground/50">
            {lang === "it"
              ? "Il QR porta al sito ufficiale della pizzeria: san-francisco-omega-five.vercel.app"
              : "The QR opens the pizzeria's official site: san-francisco-omega-five.vercel.app"}
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="relative mx-auto flex max-w-md items-center justify-center">
            {/* Decorative frame */}
            <div className="absolute inset-0 rotate-3 rounded-md border border-[hsl(var(--brand-terracotta))]/40"></div>
            <div className="absolute inset-0 -rotate-2 rounded-md border border-border"></div>
            <div ref={wrapRef} className="relative rounded-md border border-border bg-background p-8 shadow-sm">
              <QRCodeSVG
                value={url}
                size={256}
                bgColor="#FDFBF7"
                fgColor="#2A2421"
                level="M"
                includeMargin={false}
              />
              <div className="mt-4 text-center font-serif text-sm italic text-foreground/60">
                pizzeria san francisco
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
