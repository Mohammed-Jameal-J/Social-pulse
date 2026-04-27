import { PLATFORM_STATS, TICKER_ITEMS } from "../data/constants";

export function TickerSection() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div style={{
      background:  "var(--bg-dark)",
      borderTop:   "1px solid var(--border-dark)",
      padding:     "12px 0",
      overflow:    "hidden",
    }}>
      <div style={{ display:"flex", whiteSpace:"nowrap", animation:"ticker 28s linear infinite" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display:     "inline-block",
              padding:     "0 36px",
              fontSize:    13,
              fontWeight:  600,
              color:       "#475569",
              borderRight: i < doubled.length - 1 ? "1px solid #1B2740" : "none",
              lineHeight:  "32px",
              flexShrink:  0,
            }}
          >{item}</span>
        ))}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section style={{
      background: "#020C1F",
      padding:    "72px 28px",
      borderBottom:"1px solid var(--border-dark)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section label */}
        <p style={{
          textAlign:     "center",
          fontSize:      12,
          fontWeight:    700,
          letterSpacing: 2.5,
          textTransform: "uppercase",
          color:         "#334155",
          marginBottom:  48,
        }}>Trusted by 50,000+ marketers worldwide</p>

        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap:                 "1px",
          background:          "var(--border-dark)",
          border:              "1px solid var(--border-dark)",
          borderRadius:        "var(--r-lg)",
          overflow:            "hidden",
        }}>
          {PLATFORM_STATS.map(({ num, label }) => (
            <div
              key={label}
              style={{
                background:  "#050C1A",
                padding:     "40px 32px",
                textAlign:   "center",
              }}
            >
              <div style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "clamp(32px, 4vw, 52px)",
                fontWeight:    800,
                letterSpacing: "-1px",
                background:    "linear-gradient(135deg, #60A5FA, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip: "text",
                lineHeight:    1,
                marginBottom:  8,
              }}>{num}</div>
              <div style={{ fontSize:14, color:"#475569", lineHeight:1.4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
