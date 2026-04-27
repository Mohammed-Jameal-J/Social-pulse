import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import { HERO_STATS } from "../data/constants";

// ── Replace with your own hosted hero background video ────────────────────────
// Recommended: Upload a dark, abstract tech/data visualization video to
// Firebase Storage and paste the public URL here.
const HERO_VIDEO = "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4";

export default function HeroSection({ onOpenAuth, onOpenVideo }) {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      position:   "relative",
      minHeight:  "100vh",
      display:    "flex",
      alignItems: "center",
      overflow:   "hidden",
      background: "var(--bg-dark)",
    }}>
      {/* Background video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        muted
        loop
        playsInline
        style={{
          position:   "absolute",
          inset:      0,
          width:      "100%",
          height:     "100%",
          objectFit:  "cover",
          zIndex:     0,
          opacity:    0.35,
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position:   "absolute",
        inset:      0,
        background: "linear-gradient(135deg, rgba(0,6,30,.94) 0%, rgba(0,30,100,.86) 50%, rgba(45,0,100,.82) 100%)",
        zIndex:     1,
      }} />

      {/* Noise texture overlay */}
      <div style={{
        position:   "absolute",
        inset:      0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E\")",
        zIndex:     2,
        pointerEvents:"none",
      }} />

      {/* Grid lines */}
      <div style={{
        position: "absolute",
        inset:    0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        zIndex: 2,
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position:  "relative",
        zIndex:    3,
        maxWidth:  1280,
        margin:    "0 auto",
        padding:   "120px 28px 100px",
        width:     "100%",
      }}>
        <div style={{
          display:       "flex",
          alignItems:    "center",
          gap:           72,
          flexWrap:      "wrap",
        }}>
          {/* ── Left copy ── */}
          <div style={{
            flex:      1,
            minWidth:  280,
            opacity:   loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(28px)",
            transition:"opacity .8s ease, transform .8s ease",
          }}>
            {/* Badge */}
            <div style={{
              display:      "inline-flex",
              alignItems:   "center",
              gap:          8,
              background:   "rgba(255,255,255,.08)",
              border:       "1px solid rgba(255,255,255,.16)",
              borderRadius: "var(--r-full)",
              padding:      "6px 16px",
              fontSize:     13,
              fontWeight:   600,
              color:        "#93C5FD",
              marginBottom: 28,
              backdropFilter:"blur(8px)",
            }}>
              <span style={{
                width:        8,
                height:       8,
                borderRadius: "50%",
                background:   "#10B981",
                flexShrink:   0,
                boxShadow:    "0 0 0 0 rgba(16,185,129,.5)",
                animation:    "pulse-ring 2s infinite",
              }} />
              New: AI Visibility Index is live
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily:    "var(--font-display)",
              fontSize:      "clamp(40px, 5.5vw, 70px)",
              fontWeight:    800,
              lineHeight:    1.04,
              color:         "#fff",
              marginBottom:  24,
              letterSpacing: "-1.5px",
            }}>
              Be found everywhere<br />
              <span style={{
                background:           "linear-gradient(90deg, #60A5FA 0%, #A78BFA 55%, #34D399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip:       "text",
                backgroundSize:       "200% 200%",
                animation:            "gradMove 5s ease infinite",
              }}>search happens.</span>
            </h1>

            {/* Sub */}
            <p style={{
              fontSize:     18,
              color:        "rgba(255,255,255,.65)",
              lineHeight:   1.8,
              marginBottom: 40,
              maxWidth:     520,
            }}>
              The AI-powered SEO platform built to help brands rank higher, win more traffic,
              and dominate every search channel — traditional and AI.
            </p>

            {/* CTAs */}
            <div style={{ display:"flex", gap:14, flexWrap:"wrap", alignItems:"center", marginBottom: 20 }}>
              <Button variant="primary" size="xl" onClick={() => onOpenAuth("register")}>
                Start for free →
              </Button>

              {/* Play button */}
              <button
                onClick={onOpenVideo}
                style={{
                  display:      "flex",
                  alignItems:   "center",
                  gap:          12,
                  background:   "transparent",
                  border:       "none",
                  cursor:       "pointer",
                  padding:      "8px 4px",
                }}
              >
                <div style={{
                  width:         56,
                  height:        56,
                  borderRadius:  "50%",
                  background:    "#fff",
                  display:       "flex",
                  alignItems:    "center",
                  justifyContent:"center",
                  boxShadow:     "0 6px 28px rgba(0,0,0,.3)",
                  transition:    "transform .25s, box-shadow .25s",
                  flexShrink:    0,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform="scale(1.1)"; e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 6px 28px rgba(0,0,0,.3)"; }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <polygon points="7,4 17,10 7,16" fill="#0057FF" />
                  </svg>
                </div>
                <span style={{ fontSize:14, fontWeight:600, color:"rgba(255,255,255,.6)" }}>Watch 2-min demo</span>
              </button>
            </div>

            <p style={{ fontSize:12, color:"rgba(255,255,255,.3)", marginBottom: 48 }}>
              No credit card required · Free plan available
            </p>

            {/* Stats */}
            <div style={{ display:"flex", gap:40, flexWrap:"wrap", paddingTop:12, borderTop:"1px solid rgba(255,255,255,.08)" }}>
              {HERO_STATS.map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontFamily:"var(--font-display)", fontSize:28, fontWeight:800, color:"#fff", letterSpacing:"-0.5px" }}>{num}</div>
                  <div style={{ fontSize:12, color:"rgba(255,255,255,.4)", marginTop:2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Dashboard card ── */}
          <div style={{
            flex:      "0 0 420px",
            maxWidth:  "100%",
            opacity:   loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(28px) scale(.97)",
            transition:"opacity .9s ease .2s, transform .9s ease .2s",
          }}>
            <DashboardCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:   "absolute",
        bottom:     32,
        left:       "50%",
        transform:  "translateX(-50%)",
        zIndex:     3,
        display:    "flex",
        flexDirection:"column",
        alignItems: "center",
        gap:        8,
        opacity:    .5,
      }}>
        <span style={{ fontSize:10, color:"#fff", letterSpacing:3, textTransform:"uppercase", fontFamily:"var(--font-display)" }}>Scroll</span>
        <div style={{
          width:    20,
          height:   32,
          border:   "1.5px solid rgba(255,255,255,.3)",
          borderRadius: 10,
          display:  "flex",
          justifyContent:"center",
          paddingTop:6,
        }}>
          <div style={{
            width:8, height:8, borderRadius:"50%", background:"rgba(255,255,255,.6)",
            animation:"float 1.8s ease-in-out infinite",
          }}/>
        </div>
      </div>
    </section>
  );
}

function DashboardCard() {
  return (
    <div style={{
      background:    "rgba(255,255,255,.06)",
      border:        "1px solid rgba(255,255,255,.1)",
      borderRadius:  "var(--r-xl)",
      padding:       30,
      backdropFilter:"blur(20px)",
      boxShadow:     "0 24px 80px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.1)",
      animation:     "float 6s ease-in-out infinite",
    }}>
      {/* Card header */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <span style={{ fontSize:13, fontWeight:700, color:"#fff", fontFamily:"var(--font-display)" }}>Site Health Overview</span>
        <span style={{ fontSize:11, fontWeight:700, color:"#10B981", background:"rgba(16,185,129,.14)", padding:"4px 10px", borderRadius:"var(--r-full)" }}>↑ 12% this week</span>
      </div>

      {/* Score ring + bars */}
      <div style={{ display:"flex", gap:20, alignItems:"center", marginBottom:24 }}>
        {/* Circular score */}
        <div style={{
          width:80, height:80, borderRadius:"50%",
          border:"5px solid #3B82F6",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:22, fontWeight:800, color:"#93C5FD", flexShrink:0,
          boxShadow:"0 0 24px rgba(59,130,246,.35)",
          fontFamily:"var(--font-display)",
        }}>92</div>

        <div style={{ flex:1 }}>
          {[
            ["SEO Score",    "88%","#3B82F6"],
            ["AI Visibility","74%","#A78BFA"],
            ["Performance",  "96%","#10B981"],
          ].map(([label,val,color]) => (
            <div key={label} style={{ marginBottom:10 }}>
              <div style={{ display:"flex", justifyContent:"space-between", fontSize:11.5, marginBottom:4 }}>
                <span style={{ color:"rgba(255,255,255,.5)" }}>{label}</span>
                <span style={{ fontWeight:700, color }}>{val}</span>
              </div>
              <div style={{ height:5, background:"rgba(255,255,255,.08)", borderRadius:3 }}>
                <div style={{ height:"100%", width:val, background:color, borderRadius:3, transition:"width 1s ease" }}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini stats */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
        {[["1,240","Keywords"],["28","Issues"],["5","Domains"]].map(([n,l]) => (
          <div key={l} style={{
            background:"rgba(255,255,255,.06)", borderRadius:"var(--r-md)", padding:12, textAlign:"center",
            border:"1px solid rgba(255,255,255,.06)",
          }}>
            <div style={{ fontFamily:"var(--font-display)", fontSize:20, fontWeight:800, color:"#fff" }}>{n}</div>
            <div style={{ fontSize:10, color:"rgba(255,255,255,.35)", marginTop:2 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* AI badge */}
      <div style={{
        marginTop:14, background:"rgba(167,139,250,.12)", border:"1px solid rgba(167,139,250,.22)",
        borderRadius:"var(--r-md)", padding:"10px 14px", fontSize:13, color:"#C4B5FD", fontWeight:600,
      }}>
        🤖 AI Score: <strong>9.2 / 10</strong> — Top 5%
      </div>
    </div>
  );
}
