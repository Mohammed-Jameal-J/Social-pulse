import { TESTIMONIALS } from "../data/constants";

export default function TestimonialsSection() {
  return (
    <section style={{ background:"var(--bg-mid)", padding:"100px 28px" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <span style={{
            fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
            color:"var(--sp-blue)", display:"block", marginBottom:12,
          }}>Customer stories</span>
          <h2 style={{
            fontFamily:"var(--font-display)", fontSize:"clamp(26px,3.5vw,44px)", fontWeight:800,
            color:"var(--text-primary)", letterSpacing:"-0.8px",
          }}>Trusted by teams that care about ranking.</h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",
          gap:24,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Logos strip */}
        <div style={{ marginTop:64, textAlign:"center" }}>
          <p style={{ fontSize:12, fontWeight:600, letterSpacing:2, textTransform:"uppercase", color:"var(--text-muted)", marginBottom:28 }}>
            Trusted by leading brands
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:48, flexWrap:"wrap", opacity:.55 }}>
            {["Acme Inc","TechFlow","BrandScale","Orbit Agency","GrowthLab","Nexus Media"].map(brand => (
              <span key={brand} style={{
                fontFamily:"var(--font-display)", fontSize:16, fontWeight:800,
                color:"var(--text-secondary)", letterSpacing:"-0.3px",
              }}>{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div style={{
      background:   "var(--bg-card)",
      border:       "1px solid var(--border)",
      borderRadius: "var(--r-xl)",
      padding:      "28px",
      boxShadow:    "var(--shadow-sm)",
      transition:   "transform .25s, box-shadow .25s",
      position:     "relative",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform="translateY(-4px)";
      e.currentTarget.style.boxShadow="var(--shadow-md)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform="none";
      e.currentTarget.style.boxShadow="var(--shadow-sm)";
    }}
    >
      {/* Accent line */}
      <div style={{
        position:"absolute", top:0, left:24, right:24, height:2,
        background:"linear-gradient(90deg, var(--sp-blue), var(--sp-violet))",
        borderRadius:"0 0 2px 2px",
      }}/>

      {/* Stars */}
      <div style={{ display:"flex", gap:3, marginBottom:16 }}>
        {Array(testimonial.rating).fill(0).map((_, i) => (
          <span key={i} style={{ color:"#F59E0B", fontSize:16 }}>★</span>
        ))}
      </div>

      {/* Quote mark */}
      <div style={{
        fontFamily:"Georgia,serif", fontSize:56, lineHeight:.8,
        color:"var(--sp-blue)", opacity:.12, marginBottom:-8,
        fontWeight:900,
      }}>"</div>

      <p style={{ fontSize:15, color:"var(--text-secondary)", lineHeight:1.75, marginBottom:24, fontStyle:"italic" }}>
        "{testimonial.text}"
      </p>

      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <div style={{
          width:44, height:44, borderRadius:"50%", flexShrink:0,
          background:"linear-gradient(135deg, var(--sp-blue), var(--sp-violet))",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontFamily:"var(--font-display)", fontSize:14, fontWeight:800, color:"#fff",
        }}>{testimonial.avatar}</div>
        <div>
          <div style={{ fontSize:14, fontWeight:700, color:"var(--text-primary)" }}>{testimonial.name}</div>
          <div style={{ fontSize:12, color:"var(--text-muted)" }}>{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
