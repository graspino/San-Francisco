import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import QrSection from "./sections/QrSection";
import Footer from "./sections/Footer";
import MenuPage from "./pages/MenuPage";
import { dict } from "./i18n/dict";

function HomePage() {
  const [lang, setLang] = useState("it");
  const t = dict[lang];

  return (
    <div data-testid="home-page" className="min-h-screen bg-background text-foreground">
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Info t={t} lang={lang} />
        <QrSection t={t} lang={lang} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
