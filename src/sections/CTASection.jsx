import Button from "../components/Button";

const CTA_VIDEO = "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4";

export default function CTASection({ onOpenAuth, onOpenVideo }) {
  return (
    <section style={{
      position:  "relative",
      padding:   "120px 28px",
      overflow:  "hidden",
      textAlign: "center",
    }}>
      {/* Video BG */}
      <video
        src={CTA_VIDEO}
        muted
        loop
        playsInline
        autoPlay
        style={{
          position:  "absolute",
          inset:     0,
          width:     "100%",
          height:    "100%",
          objectFit: "cover",
          zIndex:    0,
          opacity:   .25,
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position:   "absolute",
        inset:      0,
        background: "linear-gradient(135deg, #001464 0%, #3B0096 50%, #000B30 100%)",
        zIndex:     1,
      }}/>

      {/* Grid lines */}
      <div style={{
        position:"absolute", inset:0, zIndex:2, pointerEvents:"none",
        backgroundImage:`linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)`,
        backgroundSize:"64px 64px",
      }}/>

      {/* Content */}
      <div style={{ position:"relative", zIndex:3 }}>
        {/* Badge */}
        <div style={{
          display:"inline-flex", alignItems:"center", gap:8,
          background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.14)",
          borderRadius:"var(--r-full)", padding:"6px 18px", fontSize:12.5,
          fontWeight:600, color:"#93C5FD", marginBottom:28,
        }}>
          <span style={{ width:7, height:7, borderRadius:"50%", background:"#10B981", flexShrink:0 }}/>
          Join 50,000+ marketers worldwide
        </div>

        <h2 style={{
          fontFamily:    "var(--font-display)",
          fontSize:      "clamp(30px, 5vw, 60px)",
          fontWeight:    800,
          color:         "#fff",
          letterSpacing: "-1.5px",
          lineHeight:    1.06,
          marginBottom:  20,
        }}>
          Stay ahead of what's next.<br/>
          <span style={{
            background:"linear-gradient(90deg, #60A5FA, #A78BFA)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>Start free today.</span>
        </h2>

        <p style={{
          fontSize:18, color:"rgba(255,255,255,.65)", lineHeight:1.75,
          maxWidth:500, margin:"0 auto 40px",
        }}>
          No setup fees. No contracts. Free plan available.
          Upgrade when your traffic does.
        </p>

        {/* CTA buttons */}
        <div style={{ display:"flex", justifyContent:"center", gap:14, flexWrap:"wrap" }}>
          <Button variant="white" size="xl" onClick={() => onOpenAuth("register")}>
            Get started free →
          </Button>
          <Button variant="ghost" size="xl" onClick={onOpenVideo}
            icon={
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <polygon points="7,4 15,9 7,14" fill="white"/>
              </svg>
            }
          >
            Watch demo
          </Button>
        </div>

        <p style={{ color:"rgba(255,255,255,.3)", fontSize:12.5, marginTop:20 }}>
          No credit card required · Cancel anytime · GDPR compliant
        </p>

        {/* Social proof */}
        <div style={{ marginTop:48, display:"flex", justifyContent:"center", gap:32, flexWrap:"wrap" }}>
          {[
            { num:"50K+", label:"Active users" },
            { num:"4.9/5", label:"Average rating" },
            { num:"99.9%", label:"Uptime SLA"    },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign:"center" }}>
              <div style={{
                fontFamily:"var(--font-display)", fontSize:26, fontWeight:800, color:"#fff",
                letterSpacing:"-0.5px",
              }}>{num}</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,.38)", marginTop:2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
