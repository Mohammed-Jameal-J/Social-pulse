import { useEffect } from "react";

const FOOTER_LINKS = {
  Product: [
    "Keyword Research",
    "SEO Audit",
    "Rank Tracker",
    "Content Writer",
    "AI Visibility",
    "Backlink Analysis",
  ],
  SocialPulse: [
    "About us",
    "Pricing",
    "Security",
    "Integrations",
    "Developers",
    "Careers",
  ],
  "More tools": [
    "Traffic & Market",
    "Gap Analysis",
    "Site Mapping",
    "Page Speed",
    "Local SEO",
    "Social Tracker",
  ],
  Company: [
    "Blog",
    "Partners",
    "Press",
    "Customer Stories",
    "Events",
    "Contact us",
  ],
  Support: [
    "Help Center",
    "API docs",
    "Status",
    "Community",
    "Privacy policy",
    "Terms of service",
  ],
};

/*
  HOW IT WORKS:
  ─────────────────────────────────────────────────────────
  • Brand reveal = position:fixed, bottom:0, z-index:-1
    → Always sits at the very bottom of the viewport.

  • Footer = position:relative, z-index:1, background:#fff
    → White footer slides up over the reveal as you scroll.

  • No white spacer div. Instead we add padding-bottom to
    <body> equal to the reveal height so the browser gives
    you enough scroll room to fully expose the reveal at
    page end.

  • useEffect sets body paddingBottom on mount and cleans
    up on unmount.
  ─────────────────────────────────────────────────────────
*/

const REVEAL_H = 280; // px — tweak as you like

export default function Footer() {
  useEffect(() => {
    document.body.style.paddingBottom = `${REVEAL_H}px`;
    return () => { document.body.style.paddingBottom = ""; };
  }, []);

  return (
    <>
      {/* ─── FIXED BRAND REVEAL ─── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: REVEAL_H,
          zIndex: -1,
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",

          /*
            SocialPulse brand colours:
            --sp-blue   ≈ #0057FF   (primary blue)
            --sp-violet ≈ #7C3AED   (accent violet)

            Gradient: deep navy → electric blue → violet → indigo
            Scanlines in brand blue for that Semrush texture feel.
          */
          background:
            "linear-gradient(120deg, #0a0e2a 0%, #0d1a4a 20%, #0038b8 45%, #1a0550 72%, #0d0f2e 100%)",
        }}
      >
        {/* Tight vertical scanlines in brand blue */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,120,255,0.18) 0px, rgba(0,120,255,0.18) 1px, transparent 1px, transparent 4px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Subtle radial glow in centre */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(0,87,255,0.35) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Giant wordmark */}
        <span
          style={{
            display: "block",
            fontSize: "clamp(48px, 10vw, 120px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "#fff",
            fontFamily:
              "'Arial Black','Helvetica Neue',Helvetica,Impact,sans-serif",
            textTransform: "uppercase",
            userSelect: "none",
            whiteSpace: "nowrap",
            lineHeight: 0.88,
            marginBottom: "-0.055em",
            position: "relative",
            zIndex: 1,
          }}
        >
          SocialPulse
        </span>
      </div>

      {/* ─── FOOTER (white bg, z:1 — slides up over the reveal) ─── */}
      <footer
        style={{
          background: "#fff",
          color: "var(--text-primary)",
          borderTop: "1px solid var(--border)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 28px 32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 2.6fr",
              alignItems: "start",
              gap: 48,
            }}
          >
            {/* Left — CTA */}
            <div>
              <div
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  marginBottom: 18,
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                Get started with SocialPulse today
              </div>
              <p
                style={{
                  maxWidth: 520,
                  color: "var(--text-secondary)",
                  fontSize: "clamp(15px, 2vw, 17px)",
                  lineHeight: 1.8,
                  marginBottom: 28,
                }}
              >
                Try SocialPulse free for seven days. Cancel anytime.
              </p>
              <button
                style={{
                  padding: "14px 28px",
                  borderRadius: "var(--r-full)",
                  border: "none",
                  background: "var(--sp-blue)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 12px 32px rgba(0,87,255,.18)",
                  transition: "transform .2s ease, box-shadow .2s ease",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Start free trial
              </button>
            </div>

            {/* Right — link columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                gap: 32,
              }}
            >
              {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                <div key={title}>
                  <div
                    style={{
                      fontSize: "12px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 16,
                    }}
                  >
                    {title}
                  </div>
                  {links.map(link => (
                    <div key={link} style={{ marginBottom: 12 }}>
                      <a
                        href="#"
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "14px",
                          lineHeight: 1.75,
                          transition: "color .15s ease",
                          textDecoration: "none",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = "var(--text-primary)"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                      >
                        {link}
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border)", padding: "24px 28px 28px" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              {["𝕏", "in", "▶", "●"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "var(--r-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--bg-card)",
                    color: "var(--text-primary)",
                    fontSize: 16,
                    textDecoration: "none",
                    boxShadow: "0 8px 20px rgba(16,24,40,.06)",
                    transition: "all .2s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--sp-blue)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "var(--bg-card)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                flexWrap: "wrap",
                color: "var(--text-secondary)",
                fontSize: "14px",
              }}
            >
              <span>© {new Date().getFullYear()} SocialPulse. All rights reserved.</span>
              <a href="#" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Terms of Service</a>
              <a href="#" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Cookie Settings</a>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 980px) {
            footer > div:nth-child(1) > div {
              grid-template-columns: 1fr !important;
            }
            footer > div:nth-child(1) > div > div:nth-child(2) {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 24px;
            }
          }
          @media (max-width: 740px) {
            footer > div:nth-child(1) > div > div:nth-child(2) {
              grid-template-columns: 1fr !important;
              gap: 24px;
            }
          }
          @media (max-width: 640px) {
            footer > div:nth-child(1) {
              padding: 40px 16px 24px;
            }
            footer > div:nth-child(1) > div > div:nth-child(1) { order: 2; }
            footer > div:nth-child(1) > div > div:nth-child(2) {
              order: 1;
              grid-template-columns: 1fr !important;
            }
            footer > div:nth-child(1) > div > div:nth-child(2) > div { min-width: 0; }
            footer > div:nth-child(2) { padding: 24px 16px 24px; }
            footer > div:nth-child(2) > div {
              flex-direction: column;
              align-items: flex-start;
            }
            footer > div:nth-child(2) > div > div {
              width: 100%;
            }
          }
        `}</style>
      </footer>
    </>
  );
}
