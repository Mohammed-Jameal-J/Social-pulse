import { AI_SCORES } from "../data/constants";
import Button from "../components/Button";

export default function AIVisibilitySection({ onOpenAuth }) {
  return (
    <section style={{ background:"var(--bg-mid)", padding:"100px 28px" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"flex", gap:80, alignItems:"center", flexWrap:"wrap" }}>

          {/* Left copy */}
          <div style={{ flex:1, minWidth:280 }}>
            <span style={{
              fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
              color:"var(--sp-violet)", display:"block", marginBottom:12,
            }}>AI-First SEO</span>

            <h2 style={{
              fontFamily:"var(--font-display)", fontSize:"clamp(26px,3.5vw,44px)", fontWeight:800,
              color:"var(--text-primary)", letterSpacing:"-0.8px", marginBottom:20, lineHeight:1.1,
            }}>
              Built for the age of<br />
              <span style={{
                background:"linear-gradient(90deg, #5B21FF, #0057FF)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>AI search.</span>
            </h2>

            <p style={{ fontSize:16, color:"var(--text-secondary)", lineHeight:1.8, marginBottom:32 }}>
              SocialPulse tracks how AI models like ChatGPT, Gemini, and Perplexity reference your brand —
              so you dominate both traditional and AI-powered search before competitors catch on.
            </p>

            {[
              { icon:"🤖", label:"AI Visibility Index scoring" },
              { icon:"📌", label:"LLM citation tracking per model" },
              { icon:"⚡", label:"Answer Engine Optimisation suite" },
              { icon:"📊", label:"AEO score per page & content type" },
              { icon:"🔔", label:"Real-time AI referral monitoring" },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display:"flex", alignItems:"center", gap:12,
                padding:"10px 0", borderBottom:"1px solid var(--border)",
              }}>
                <span style={{ fontSize:18, lineHeight:1, width:22, textAlign:"center" }}>{icon}</span>
                <span style={{ fontSize:14, color:"var(--text-secondary)", fontWeight:500 }}>{label}</span>
              </div>
            ))}

            <Button variant="primary" size="lg" style={{ marginTop:32 }} onClick={() => onOpenAuth("register")}>
              Check your AI score →
            </Button>
          </div>

          {/* Right: AI index card */}
          <div style={{ flex:"0 0 400px", maxWidth:"100%" }}>
            <AIIndexCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function AIIndexCard() {
  return (
    <div style={{
      background:   "var(--bg-card)",
      border:       "1px solid var(--border)",
      borderRadius: "var(--r-xl)",
      padding:      32,
      boxShadow:    "var(--shadow-md)",
    }}>
      {/* Card header */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
        <span style={{ fontFamily:"var(--font-display)", fontSize:15, fontWeight:700, color:"var(--text-primary)" }}>
          AI Visibility Index
        </span>
        <span style={{
          fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:"var(--r-full)",
          background:"#ECFDF5", color:"#059669",
        }}>Live data</span>
      </div>
      <p style={{ fontSize:12, color:"var(--text-muted)", marginBottom:28 }}>
        Your brand's presence across major AI search models
      </p>

      {AI_SCORES.map(({ name, score, color }) => (
        <div key={name} style={{ marginBottom:18 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:13, marginBottom:7 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:color, display:"inline-block" }}/>
              <span style={{ fontWeight:600, color:"var(--text-secondary)" }}>{name}</span>
            </div>
            <span style={{ fontWeight:800, color, fontFamily:"var(--font-display)" }}>{score}%</span>
          </div>
          <div style={{ height:8, background:"var(--bg-mid)", borderRadius:4, overflow:"hidden" }}>
            <div style={{
              height:"100%", width:`${score}%`, background:color, borderRadius:4,
              transition:"width 1.2s cubic-bezier(.22,.68,0,1.2)",
            }}/>
          </div>
        </div>
      ))}

      {/* Overall score */}
      <div style={{
        marginTop:22,
        padding:"14px 18px",
        background:"linear-gradient(135deg, #EEF3FF, #F5F0FF)",
        border:"1px solid #DDE8FF",
        borderRadius:"var(--r-lg)",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
      }}>
        <div>
          <div style={{ fontSize:12, color:"var(--text-muted)", marginBottom:2 }}>Overall AI Presence</div>
          <div style={{ fontFamily:"var(--font-display)", fontSize:22, fontWeight:800, color:"var(--sp-blue)" }}>
            9.2 / 10
          </div>
        </div>
        <div style={{
          background:"var(--sp-blue)", color:"#fff", fontSize:11, fontWeight:800,
          padding:"6px 12px", borderRadius:"var(--r-full)", letterSpacing:.5,
        }}>Top 5%</div>
      </div>
    </div>
  );
}
