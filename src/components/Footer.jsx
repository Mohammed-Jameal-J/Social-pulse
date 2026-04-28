import { useEffect, useState } from "react";

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

const REVEAL_H = 280;
const MOBILE_HIDDEN_LINKS = new Set([
  "Privacy policy",
  "Terms of service",
  "Cookie Settings",
]);

export default function Footer() {
  const [openSections, setOpenSections] = useState({});
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.paddingBottom = `${REVEAL_H}px`;
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, []);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

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
          background:
            "linear-gradient(120deg, #0a0e2a 0%, #0d1a4a 20%, #0038b8 45%, #1a0550 72%, #0d0f2e 100%)",
        }}
      >
        {/* Scanlines */}
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
        {/* Radial glow */}
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
        {/* Wordmark */}
        <span
          style={{
            display: "block",
            fontSize: "clamp(36px, 10vw, 120px)",
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

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          background: "#fff",
          color: "var(--text-primary)",
          borderTop: "1px solid var(--border)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: isMobile ? "32px 18px 22px" : "64px 28px 32px",
          }}
        >
          {/* Top section: CTA + Links */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.4fr 2.6fr",
              alignItems: "start",
              gap: isMobile ? 36 : 48,
            }}
          >
            {/* Left — CTA */}
            <div>
              <div
                style={{
                  fontSize: isMobile ? "24px" : "clamp(32px, 4vw, 44px)",
                  fontWeight: 800,
                  lineHeight: isMobile ? 1.2 : 1.05,
                  marginBottom: isMobile ? 14 : 18,
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                Get started with SocialPulse today
              </div>
              <p
                style={{
                  maxWidth: isMobile ? "100%" : 520,
                  color: "var(--text-secondary)",
                  fontSize: isMobile ? "15px" : "clamp(15px, 2vw, 17px)",
                  lineHeight: 1.75,
                  marginBottom: isMobile ? 22 : 28,
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
                  width: isMobile ? "100%" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Start free trial
              </button>
            </div>

            {/* Right — link columns */}
            {isMobile ? (
              /* Mobile: accordion */
              <div style={{ borderTop: "1px solid var(--border)" }}>
                {Object.entries(FOOTER_LINKS).map(([title, links]) => {
                  const filteredLinks = isMobile
                    ? links.filter((link) => !MOBILE_HIDDEN_LINKS.has(link))
                    : links;

                  if (isMobile && filteredLinks.length === 0) {
                    return null;
                  }

                  return (
                    <div
                      key={title}
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                    <button
                      onClick={() => toggleSection(title)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 0",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {title}
                      <span
                        style={{
                          fontSize: "18px",
                          lineHeight: 1,
                          transform: openSections[title]
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          display: "inline-block",
                        }}
                      >
                        +
                      </span>
                    </button>

                    {openSections[title] && (
                      <div style={{ paddingBottom: 16 }}>
                        {filteredLinks.map((link) => (
                          <div key={link} style={{ marginBottom: 12 }}>
                            <a
                              href="#"
                              style={{
                                color: "var(--text-secondary)",
                                fontSize: "14px",
                                lineHeight: 1.75,
                                textDecoration: "none",
                                display: "block",
                                padding: "2px 0",
                              }}
                            >
                              {link}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              </div>
            ) : (
              /* Desktop: grid columns */
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
                    {links.map((link) => (
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
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color =
                              "var(--text-primary)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color =
                              "var(--text-secondary)";
                          }}
                        >
                          {link}
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: isMobile ? "20px 20px 24px" : "24px 28px 28px",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              gap: 16,
            }}
          >
            {/* Social icons */}
            <div
              style={{ display: "flex", gap: 12, alignItems: "center" }}
            >
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--sp-blue)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg-card)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Legal links */}
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                gap: isMobile ? 8 : 24,
                color: "var(--text-secondary)",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              <span>
                © {new Date().getFullYear()} SocialPulse. All rights reserved.
              </span>
              {!isMobile &&
                ["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
                  (label) => (
                    <a
                      key={label}
                      href="#"
                      style={{
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                      }}
                    >
                      {label}
                    </a>
                  )
                )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
