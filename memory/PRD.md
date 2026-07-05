# Pizzeria San Francisco — Sito Vetrina

## Original problem statement
questo è il menù della pizzeria in cui lavoro, creami un sito con un qr code
che porti a questo sito, alla fine del sito lasciami uno spazio per mettere
il link della pagina Instagram e tiktok e affianco a questi metti il numero
telefonico che allego con le varie informazioni.

- Pizzeria: Pizzeria San Francisco
- Indirizzo: Piazzetta Donatori di Sangue, 2, 37012 San Vito Al Mantico VR
- Telefono: 331 149 2875
- Orari: lun/mar 18–21:30; mer/gio/ven/sab/dom 12–13:30 e 18–21:30

## User personas
- Cliente curioso che scansiona il QR code al tavolo o sul volantino
  → vuole vedere il menù rapidamente sul telefono
- Cliente locale che vuole chiamare per prenotare o ordinare
  → cerca il pulsante di chiamata e gli orari
- Turista/inglese di passaggio → menu in inglese

## Core requirements (static)
- Sito React single-page, mobile-first, bilingue IT/EN
- Menu completo (~94 voci) organizzato per categorie
- QR code scaricabile che punta all'URL del sito
- Click-to-call verso il numero della pizzeria (tel:+393311492875)
- Placeholder link Instagram e TikTok nel footer + numero di telefono
- Info: indirizzo (con link Google Maps), orari, indicatore "Aperto ora"

## Architecture
- Frontend: React 19, Tailwind CSS, shadcn/ui, lucide-react, qrcode.react
- Backend: template FastAPI + MongoDB non modificato (non necessario per MVP)
- Design: light theme "Organic & Earthy" (terracotta #C05A46 + crema #FDFBF7)
- Typography: Playfair Display (heading) + Work Sans (body)
- Path files:
  - `/app/frontend/src/App.js`
  - `/app/frontend/src/sections/{Header,Hero,Menu,Info,QrSection,Footer}.jsx`
  - `/app/frontend/src/data/menu.js` — 94 voci menu + info pizzeria
  - `/app/frontend/src/i18n/dict.js` — traduzioni IT/EN
  - `/app/frontend/src/index.css` — palette, font, texture grain

## Implemented (2025-12)
- [x] Hero editoriale con forno a legna + polaroid Margherita
- [x] Sticky header con toggle IT/EN e CTA chiamata
- [x] Menu editoriale con dot-leader tra nome pizza e 3 prezzi (Tonda/Taglio/Maxi)
- [x] Sidebar categorie sticky + ricerca live con empty state
- [x] Sezione Info con orari settimanali, link Google Maps, indicatore "Aperto ora"
  basato su fuso Europe/Rome
- [x] Sezione QR code: SVG live che punta all'URL corrente, download PNG 1024×1024
- [x] Footer scuro con Instagram + TikTok (placeholder) + card telefono affiancate
- [x] Traduzione completa IT ↔ EN
- [x] Testato: 94 voci menu, tutti i tel: link, download QR, search, no overflow

## Backlog / Next actions
- P1: Sostituire i placeholder social nel footer con i veri URL @pizzeriasf
      (istruzioni al proprietario: modificare `src/sections/Footer.jsx` righe href)
- P2: Prenotazione online (form + email o Google Calendar) al posto del solo tel:
- P2: Gallery foto delle pizze reali (attualmente immagini stock Pexels)
- P2: Sezione allergeni completa collegata al simbolo "*"
- P3: PWA + logo/favicon personalizzato della pizzeria
- P3: Menu del giorno / offerte speciali stagionali gestibili senza redeploy
- P3: Integrazione WhatsApp Business come alternativa al click-to-call
