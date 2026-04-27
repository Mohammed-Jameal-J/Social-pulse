import { useState } from "react";
import Button from "../components/Button";
import { PLANS } from "../data/constants";

export default function PricingSection({ onOpenAuth }) {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" style={{ padding:"100px 28px", background:"var(--bg-page)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <span style={{
            fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
            color:"var(--sp-blue)", display:"block", marginBottom:12,
          }}>Pricing</span>
          <h2 style={{
            fontFamily:"var(--font-display)", fontSize:"clamp(28px,4vw,48px)", fontWeight:800,
            color:"var(--text-primary)", letterSpacing:"-1px", marginBottom:14,
          }}>Simple, transparent pricing.</h2>
          <p style={{ fontSize:17, color:"var(--text-secondary)", maxWidth:460, margin:"0 auto 28px", lineHeight:1.7 }}>
            Start free. Scale when you're ready. No hidden fees, no contracts.
          </p>

          {/* Billing toggle */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:12,
            background:"var(--bg-mid)", borderRadius:"var(--r-full)", padding:"4px 4px 4px 16px",
            border:"1px solid var(--border)",
          }}>
            <span style={{ fontSize:13, fontWeight:600, color: annual ? "var(--text-muted)" : "var(--text-primary)" }}>Monthly</span>
            <button
              onClick={() => setAnnual(a => !a)}
              style={{
                width:48, height:26, borderRadius:"var(--r-full)",
                background: annual ? "var(--sp-blue)" : "#CBD5E1",
                border:"none", cursor:"pointer", position:"relative", transition:"background .25s",
              }}
            >
              <div style={{
                width:20, height:20, borderRadius:"50%", background:"#fff",
                position:"absolute", top:3, left: annual ? 25 : 3,
                transition:"left .25s", boxShadow:"0 1px 4px rgba(0,0,0,.2)",
              }}/>
            </button>
            <div style={{ display:"flex", alignItems:"center", gap:6, paddingRight:4 }}>
              <span style={{ fontSize:13, fontWeight:600, color: annual ? "var(--text-primary)" : "var(--text-muted)" }}>Annual</span>
              <span style={{
                fontSize:11, fontWeight:800, padding:"3px 8px", borderRadius:"var(--r-full)",
                background:"#ECFDF5", color:"#059669",
              }}>Save 20%</span>
            </div>
          </div>
        </div>

        {/* Plans grid */}
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",
          gap:20, alignItems:"start",
        }}>
          {PLANS.map(plan => (
            <PlanCard key={plan.name} plan={plan} annual={annual} onOpenAuth={onOpenAuth} />
          ))}
        </div>

        {/* Enterprise note */}
        <p style={{ textAlign:"center", fontSize:13, color:"var(--text-muted)", marginTop:32 }}>
          All plans include a 14-day free trial. No credit card required.{" "}
          <a href="#" style={{ color:"var(--sp-blue)", fontWeight:600 }}>View full feature comparison →</a>
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan, annual, onOpenAuth }) {
  const discounted = annual && plan.price ? Math.round(plan.price * 0.8) : plan.price;

  return (
    <div style={{
      background:   plan.popular ? "var(--bg-dark)" : "var(--bg-card)",
      border:       plan.popular ? "2px solid #3B82F6" : "1.5px solid var(--border)",
      borderRadius: "var(--r-xl)",
      padding:      "32px 28px",
      position:     "relative",
      boxShadow:    plan.popular ? "0 8px 40px rgba(0,87,255,.2)" : "var(--shadow-sm)",
      transition:   "transform .25s, box-shadow .25s",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform="translateY(-4px)";
      e.currentTarget.style.boxShadow=plan.popular ? "0 20px 60px rgba(0,87,255,.3)" : "var(--shadow-md)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform="none";
      e.currentTarget.style.boxShadow=plan.popular ? "0 8px 40px rgba(0,87,255,.2)" : "var(--shadow-sm)";
    }}
    >
      {plan.popular && (
        <div style={{
          position:"absolute", top:-14, left:"50%", transform:"translateX(-50%)",
          background:"linear-gradient(90deg,#0057FF,#5B21FF)", color:"#fff",
          fontSize:11, fontWeight:800, padding:"5px 18px",
          borderRadius:"var(--r-full)", letterSpacing:1.5, textTransform:"uppercase",
          whiteSpace:"nowrap", boxShadow:"0 4px 14px rgba(0,87,255,.4)",
        }}>Most popular</div>
      )}

      <div style={{
        fontSize:13, fontWeight:600, color:plan.popular ? "#93C5FD" : "var(--text-muted)",
        marginBottom:6,
      }}>{plan.tagline}</div>

      <div style={{
        fontFamily:"var(--font-display)", fontSize:18, fontWeight:800,
        color:plan.popular ? "#fff" : "var(--text-primary)", marginBottom:12,
      }}>{plan.name}</div>

      {/* Price */}
      <div style={{ marginBottom:8 }}>
        {plan.price ? (
          <div style={{ display:"flex", alignItems:"baseline", gap:4 }}>
            <span style={{
              fontFamily:"var(--font-display)", fontSize:44, fontWeight:800, lineHeight:1,
              color:plan.popular ? "#fff" : "var(--text-primary)",
            }}>${discounted}</span>
            <span style={{ fontSize:14, color:plan.popular ? "#93C5FD" : "var(--text-muted)", fontWeight:500 }}>
              /{plan.period}
            </span>
          </div>
        ) : (
          <div style={{
            fontFamily:"var(--font-display)", fontSize:38, fontWeight:800, lineHeight:1,
            color:plan.popular ? "#fff" : "var(--text-primary)",
          }}>Custom</div>
        )}
      </div>

      {plan.domains && (
        <div style={{ fontSize:12, color:plan.popular ? "#64748B" : "var(--text-muted)", marginBottom:24 }}>
          Up to {plan.domains} domain{plan.domains > 1 ? "s" : ""}
        </div>
      )}

      {/* CTA */}
      <Button
        variant={plan.price ? (plan.popular ? "white" : "primary") : "dark"}
        fullWidth
        size="md"
        style={{ marginBottom:24 }}
        onClick={() => onOpenAuth("register")}
      >
        {plan.price ? "Get started" : "Contact sales"}
      </Button>

      {/* Features */}
      <div style={{ borderTop:`1px solid ${plan.popular ? "#1E3A5F" : "var(--border)"}`, paddingTop:20 }}>
        {plan.features.map(f => (
          <div key={f} style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:10 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink:0, marginTop:1 }}>
              <circle cx="8" cy="8" r="8" fill={plan.popular ? "#1D4ED8" : "#DBEAFE"}/>
              <path d="M5 8L7 10L11 6" stroke={plan.popular ? "#93C5FD" : "#1D4ED8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize:13.5, color:plan.popular ? "#94A3B8" : "var(--text-secondary)" }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
