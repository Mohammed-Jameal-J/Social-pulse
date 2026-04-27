import { useState } from "react";
import Button from "../components/Button";
import { PRODUCT_TABS } from "../data/constants";

// ── Replace with your own product demo videos ─────────────────────────────────
// Upload .mp4 files to Firebase Storage (public) and paste URLs here
const VIDEOS = {
  audit:   "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4",
  rank:    "https://videos.pexels.com/video-files/7579474/7579474-hd_1920_1080_24fps.mp4",
  ai:      "https://videos.pexels.com/video-files/7661060/7661060-hd_1920_1080_24fps.mp4",
  content: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4",
};

function CheckIcon({ color }) {
  return (
    <div style={{
      width:          22,
      height:         22,
      borderRadius:   "50%",
      background:     color || "var(--sp-blue)",
      display:        "flex",
      alignItems:     "center",
      justifyContent: "center",
      flexShrink:     0,
    }}>
      <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
        <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function ProductSection({ onOpenAuth, onOpenVideo }) {
  const [activeTab, setActiveTab] = useState("audit");
  const tab = PRODUCT_TABS.find(t => t.id === activeTab);

  return (
    <section id="features" style={{ background:"var(--bg-mid)", padding:"100px 28px" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <span style={{
            fontSize:      12,
            fontWeight:    700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color:         "var(--sp-blue)",
            display:       "block",
            marginBottom:  12,
          }}>Product walkthrough</span>
          <h2 style={{
            fontFamily:    "var(--font-display)",
            fontSize:      "clamp(28px, 4vw, 48px)",
            fontWeight:    800,
            color:         "var(--text-primary)",
            letterSpacing: "-1px",
            marginBottom:  14,
          }}>See SocialPulse in action.</h2>
          <p style={{ fontSize:17, color:"var(--text-secondary)", maxWidth:520, margin:"0 auto", lineHeight:1.7 }}>
            Watch how marketers find opportunities, fix issues, and outrank competitors using our AI-powered suite.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{
          display:        "flex",
          borderBottom:   "1px solid var(--border)",
          marginBottom:   44,
          overflowX:      "auto",
          gap:            4,
        }}>
          {PRODUCT_TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding:      "10px 22px",
                border:       "none",
                borderBottom: activeTab === t.id ? `2.5px solid ${t.color}` : "2.5px solid transparent",
                background:   "transparent",
                fontFamily:   "var(--font-body)",
                fontSize:     14,
                fontWeight:   600,
                color:        activeTab === t.id ? t.color : "var(--text-muted)",
                cursor:       "pointer",
                transition:   "all .2s",
                display:      "flex",
                alignItems:   "center",
                gap:          8,
                whiteSpace:   "nowrap",
                marginBottom: "-1px",
              }}
            >
              {t.label}
              {t.badge && (
                <span style={{
                  fontSize:     10,
                  fontWeight:   700,
                  padding:      "2px 7px",
                  borderRadius: "var(--r-full)",
                  background:   activeTab === t.id ? t.color : "var(--border)",
                  color:        activeTab === t.id ? "#fff" : "var(--text-muted)",
                  letterSpacing:.5,
                }}>{t.badge}</span>
              )}
            </button>
          ))}
        </div>

        {/* Video + copy */}
        <div style={{
          display:    "flex",
          gap:        60,
          alignItems: "center",
          flexWrap:   "wrap",
        }}>
          {/* Video panel */}
          <div style={{
            flex:         "0 0 620px",
            maxWidth:     "100%",
            borderRadius: "var(--r-xl)",
            overflow:     "hidden",
            boxShadow:    "var(--shadow-lg)",
            background:   "#000",
            position:     "relative",
          }}>
            <video
              key={activeTab}
              src={VIDEOS[activeTab]}
              autoPlay
              muted
              loop
              playsInline
              style={{ width:"100%", display:"block", aspectRatio:"16/9", objectFit:"cover" }}
            />

            {/* Overlay live badge */}
            <div style={{
              position:  "absolute",
              bottom:    16,
              left:      16,
              display:   "flex",
              gap:       8,
            }}>
              <div style={{
                background:    "rgba(0,0,0,.6)",
                backdropFilter:"blur(10px)",
                borderRadius:  "var(--r-full)",
                padding:       "5px 14px",
                fontSize:      11.5,
                fontWeight:    700,
                color:         "#fff",
                display:       "flex",
                alignItems:    "center",
                gap:           7,
                fontFamily:    "var(--font-body)",
              }}>
                <span style={{ color:"#10B981", fontSize:8 }}>●</span>
                Live · {tab.label}
              </div>
            </div>

            {/* Expand button */}
            <button
              onClick={onOpenVideo}
              style={{
                position:      "absolute",
                top:           12,
                right:         12,
                background:    "rgba(0,0,0,.5)",
                backdropFilter:"blur(6px)",
                border:        "1px solid rgba(255,255,255,.14)",
                borderRadius:  "var(--r-md)",
                color:         "#fff",
                fontSize:      12,
                fontWeight:    600,
                padding:       "6px 12px",
                cursor:        "pointer",
                fontFamily:    "var(--font-body)",
                display:       "flex",
                alignItems:    "center",
                gap:           5,
                transition:    "all .2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background="rgba(0,0,0,.75)"}
              onMouseLeave={e => e.currentTarget.style.background="rgba(0,0,0,.5)"}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.5 1.5H10.5V4.5M10.5 1.5L7 5M4.5 10.5H1.5V7.5M1.5 10.5L5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Full screen
            </button>
          </div>

          {/* Copy panel */}
          <div style={{ flex:1, minWidth:260 }}>
            {/* Stats pills */}
            <div style={{ display:"flex", gap:10, marginBottom:22 }}>
              {tab.stats.map(({ val, label }) => (
                <div key={label} style={{
                  background:   "var(--bg-card)",
                  border:       `1.5px solid ${tab.color}22`,
                  borderRadius: "var(--r-md)",
                  padding:      "8px 16px",
                  textAlign:    "center",
                }}>
                  <div style={{ fontFamily:"var(--font-display)", fontSize:20, fontWeight:800, color:tab.color }}>{val}</div>
                  <div style={{ fontSize:11, color:"var(--text-muted)", marginTop:1 }}>{label}</div>
                </div>
              ))}
            </div>

            <h3 style={{
              fontFamily:    "var(--font-display)",
              fontSize:      "clamp(22px, 2.8vw, 36px)",
              fontWeight:    800,
              color:         "var(--text-primary)",
              marginBottom:  16,
              letterSpacing: "-0.5px",
              lineHeight:    1.15,
            }}>{tab.headline}</h3>

            <p style={{ fontSize:16, color:"var(--text-secondary)", lineHeight:1.8, marginBottom:28 }}>
              {tab.desc}
            </p>

            {tab.features.map(f => (
              <div key={f} style={{
                display:      "flex",
                alignItems:   "center",
                gap:          12,
                padding:      "10px 0",
                borderBottom: "1px solid var(--border)",
              }}>
                <CheckIcon color={tab.color} />
                <span style={{ fontSize:14, color:"var(--text-secondary)", fontWeight:500 }}>{f}</span>
              </div>
            ))}

            <Button
              variant="primary"
              size="lg"
              style={{ marginTop:28, background:tab.color }}
              onClick={() => onOpenAuth("register")}
            >
              Try {tab.label} free →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
