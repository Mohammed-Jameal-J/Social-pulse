export default function BottomBanner() {
  return (
    <div style={{
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      background: "#fff",
      borderTop: "1px solid rgba(14, 24, 81, .08)",
      boxShadow: "0 -20px 60px rgba(0, 87, 255, .08)",
      padding: "18px 28px",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
      }}>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.2,
            fontFamily: "var(--font-display)",
          }}>
            SocialPulse stays visible while you browse — insights, reporting, and planning from one place.
          </div>
          <div style={{
            marginTop: 6,
            color: "var(--text-secondary)",
            fontSize: 14,
            lineHeight: 1.6,
          }}>
            Launch campaigns faster, measure engagement clearly, and keep your team aligned with a single fixed Hub.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <button style={{
            padding: "12px 20px",
            borderRadius: "999px",
            border: "none",
            background: "var(--sp-blue)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 12px 28px rgba(0, 87, 255, .18)",
            transition: "transform .2s ease, background .2s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Start free trial
          </button>
          <a
            href="#"
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "var(--sp-blue)",
            }}
          >
            View plans
          </a>
        </div>
      </div>
    </div>
  );
}
