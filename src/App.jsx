import { useState } from "react";
import "./styles/tokens.css";

// Components
import Navbar     from "./components/Navbar";
import AuthModal  from "./components/AuthModal";
import VideoModal from "./components/VideoModal";
import Footer     from "./components/Footer";

// Sections
import HeroSection                     from "./sections/HeroSection";
import { TickerSection, StatsSection } from "./sections/StatsSection";
import ProductSection                  from "./sections/ProductSection";
import ToolsSection                    from "./sections/ToolsSection";
import AIVisibilitySection             from "./sections/AIVisibilitySection";
import PricingSection                  from "./sections/PricingSection";
import TestimonialsSection             from "./sections/TestimonialsSection";
import CTASection                      from "./sections/CTASection";

export default function App() {
  const [authOpen,  setAuthOpen]  = useState(false);
  const [authTab,   setAuthTab]   = useState("register");
  const [videoOpen, setVideoOpen] = useState(false);

  const openAuth = (tab = "register") => {
    setAuthTab(tab);
    setAuthOpen(true);
  };

  return (
    <>
      {/* ── Navigation ── */}
      <Navbar onOpenAuth={openAuth} />

      {/* ── Page sections ── */}
      <main>
        <HeroSection
          onOpenAuth={openAuth}
          onOpenVideo={() => setVideoOpen(true)}
        />

        <TickerSection />
        <StatsSection />

        <ProductSection
          onOpenAuth={openAuth}
          onOpenVideo={() => setVideoOpen(true)}
        />

        <ToolsSection />

        <AIVisibilitySection onOpenAuth={openAuth} />

        <TestimonialsSection />

        <PricingSection onOpenAuth={openAuth} />

        <CTASection
          onOpenAuth={openAuth}
          onOpenVideo={() => setVideoOpen(true)}
        />
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Modals ── */}
      <AuthModal
        isOpen={authOpen}
        defaultTab={authTab}
        onClose={() => setAuthOpen(false)}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
