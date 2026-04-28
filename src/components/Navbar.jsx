import { useState, useEffect } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { NAV_LINKS } from "../data/constants";

export default function Navbar({ onOpenAuth, isAuthenticated }) {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeDropdown,setActiveDropdown] = useState(null);
  const [mobileOpen,    setMobileOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle = {
    position:       "fixed",
    top:            0,
    left:           0,
    right:          0,
    zIndex:         90,
    transition:     "all .3s ease",
    background:     scrolled ? "rgba(255,255,255,.96)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)"            : "none",
    borderBottom:   scrolled ? "1px solid var(--border)" : "none",
    boxShadow:      scrolled ? "var(--shadow-sm)"         : "none",
  };

  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth:      1280,
        margin:        "0 auto",
        padding:       "0 28px",
        height:        70,
        display:       "flex",
        alignItems:    "center",
        justifyContent:"space-between",
        gap:           16,
      }}>
        {/* Logo */}
        <a href="/" style={{ flexShrink: 0 }}>
          <Logo light={!scrolled} />
        </a>

        {/* Desktop nav - hidden on mobile */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, justifyContent: "center" }}>
          {NAV_LINKS.map(link => (
            <div
              key={link.label}
              style={{ position: "relative" }}
              onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                style={{
                  background:    "transparent",
                  border:        "none",
                  padding:       "8px 14px",
                  fontSize:      "14px",
                  fontWeight:    600,
                  color:         scrolled ? "var(--text-secondary)" : "rgba(255,255,255,.82)",
                  cursor:        "pointer",
                  borderRadius:  "var(--r-md)",
                  transition:    "all var(--t-fast)",
                  display:       "flex",
                  alignItems:    "center",
                  gap:           5,
                  fontFamily:    "var(--font-body)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color      = scrolled ? "var(--sp-blue)" : "#fff";
                  e.currentTarget.style.background = scrolled ? "#EEF3FF" : "rgba(255,255,255,.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color      = scrolled ? "var(--text-secondary)" : "rgba(255,255,255,.82)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
                {link.submenu && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>

              {/* Dropdown */}
              {link.submenu && activeDropdown === link.label && (
                <div style={{
                  position:     "absolute",
                  top:          "calc(100% + 8px)",
                  left:         "50%",
                  transform:    "translateX(-50%)",
                  background:   "#fff",
                  border:       "1px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  boxShadow:    "var(--shadow-lg)",
                  padding:      "12px",
                  width:        380,
                  animation:    "fadeUp .2s ease",
                  zIndex:       100,
                }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                    {link.submenu.map(item => (
                      <div
                        key={item.title}
                        style={{
                          display:      "flex",
                          alignItems:   "flex-start",
                          gap:          10,
                          padding:      "10px 12px",
                          borderRadius: "var(--r-md)",
                          cursor:       "pointer",
                          transition:   "background var(--t-fast)",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "var(--bg-mid)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                      >
                        <span style={{ fontSize: 20, lineHeight: 1.2, flexShrink: 0 }}>{item.icon}</span>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 1 }}>{item.title}</div>
                          <div style={{ fontSize: 11.5, color: "var(--text-muted)", lineHeight: 1.4 }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTAs - responsive */}
        <div className="cta-buttons" style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 10px)", flexShrink: 0 }}>
          {!isAuthenticated && (
            <Button
              variant={scrolled ? "secondary" : "ghost"}
              size="sm"
              onClick={() => onOpenAuth("login")}
            >
              Log in
            </Button>
          )}
          <Button
            variant="primary"
            size="sm"
            onClick={() => onOpenAuth("register")}
          >
            Get started free
          </Button>

          {/* Hamburger - visible on mobile */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "transparent",
              border:     "none",
              padding:    "8px",
              cursor:     "pointer",
              display:    "flex",
              flexDirection: "column",
              gap:        "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{
              width:       24,
              height:      2,
              background:  scrolled ? "var(--text-primary)" : "#fff",
              borderRadius: "1px",
              transition:  "all .2s ease",
              transform:   mobileOpen ? "rotate(45deg) translateY(10px)" : "none",
            }}/>
            <div style={{
              width:       24,
              height:      2,
              background:  scrolled ? "var(--text-primary)" : "#fff",
              borderRadius: "1px",
              transition:  "all .2s ease",
              opacity:     mobileOpen ? 0 : 1,
            }}/>
            <div style={{
              width:       24,
              height:      2,
              background:  scrolled ? "var(--text-primary)" : "#fff",
              borderRadius: "1px",
              transition:  "all .2s ease",
              transform:   mobileOpen ? "rotate(-45deg) translateY(-10px)" : "none",
            }}/>
          </button>
        </div>
      </div>

      {/* Mobile menu - visible on mobile */}
      {mobileOpen && (
        <div style={{
          position:     "absolute",
          top:          70,
          left:         0,
          right:        0,
          background:   scrolled ? "rgba(255,255,255,.96)" : "rgba(5,12,26,.98)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          padding:      "20px 28px",
          display:      "flex",
          flexDirection: "column",
          gap:          16,
          animation:    "fadeUp .2s ease",
          zIndex:       89,
          maxHeight:    "calc(100vh - 70px)",
          overflowY:    "auto",
        }}>
          {/* Mobile nav links */}
          {NAV_LINKS.map(link => (
            <div key={link.label}>
              <button
                style={{
                  background:    "transparent",
                  border:        "none",
                  padding:       "12px 0",
                  fontSize:      "15px",
                  fontWeight:    600,
                  color:         scrolled ? "var(--text-primary)" : "#fff",
                  cursor:        "pointer",
                  width:         "100%",
                  textAlign:     "left",
                  transition:    "color var(--t-fast)",
                  fontFamily:    "var(--font-body)",
                  display:       "flex",
                  justifyContent: "space-between",
                  alignItems:    "center",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = scrolled ? "var(--sp-blue)" : "#fff";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = scrolled ? "var(--text-primary)" : "#fff";
                }}
              >
                {link.label}
                {link.submenu && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              {link.submenu && (
                <div style={{ paddingLeft: 16, borderLeft: "1px solid var(--border)", marginLeft: 8, paddingTop: 8 }}>
                  {link.submenu.map(item => (
                    <div
                      key={item.title}
                      style={{
                        padding:       "8px 0",
                        fontSize:      "13px",
                        color:         scrolled ? "var(--text-secondary)" : "#fff",
                        cursor:        "pointer",
                        transition:    "color var(--t-fast)",
                      }}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
            <Button
              variant={scrolled ? "secondary" : "ghost"}
              size="sm"
              onClick={() => { onOpenAuth("login"); setMobileOpen(false); }}
              style={{ width: "100%", textAlign: "center" }}
            >
              Log in
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => { onOpenAuth("register"); setMobileOpen(false); }}
              style={{ width: "100%", textAlign: "center" }}
            >
              Get started free
            </Button>
          </div>
        </div>
      )}

      {/* Inline keyframe for dropdown and media queries */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateX(-50%) translateY(8px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .cta-buttons { display: none !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
          .cta-buttons { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
