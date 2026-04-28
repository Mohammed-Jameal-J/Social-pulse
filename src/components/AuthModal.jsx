import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || import.meta.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID || import.meta.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || import.meta.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || import.meta.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID || import.meta.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
const app           = initializeApp(firebaseConfig);
const auth          = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const INPUT_STYLE = {
  width:        "100%",
  padding:      "11px 14px",
  border:       "1.5px solid var(--border)",
  borderRadius: "var(--r-md)",
  fontSize:     "14px",
  fontFamily:   "var(--font-body)",
  color:        "var(--text-primary)",
  outline:      "none",
  transition:   "border-color var(--t-fast)",
  background:   "#fff",
};

function Input({ label, rightLabel, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 14 }}>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>{label}</label>
          {rightLabel}
        </div>
      )}
      <input
        {...props}
        onFocus={e => { setFocused(true); props.onFocus?.(e); }}
        onBlur={e  => { setFocused(false); props.onBlur?.(e);  }}
        style={{ ...INPUT_STYLE, borderColor: focused ? "var(--sp-blue)" : "var(--border)" }}
      />
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
      <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

export default function AuthModal({ isOpen, defaultTab = "register", onClose, onAuthSuccess = () => {} }) {
  const [tab,      setTab]      = useState(defaultTab);
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");
  const [success,  setSuccess]  = useState("");
  const [showPass, setShowPass] = useState(false);

  // Reset state when modal opens
  const reset = () => {
    setError(""); setSuccess(""); setName(""); setEmail(""); setPassword(""); setLoading(false);
  };

  const switchTab = (t) => { setTab(t); reset(); };

  // ── Email/password auth ───────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(""); setSuccess("");
    try {
      if (tab === "register") {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if (name.trim()) {
          await updateProfile(cred.user, { displayName: name.trim() });
        }
        setSuccess("Welcome to SocialPulse! Redirecting to dashboard…");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess("Welcome back! Redirecting to dashboard…");
      }
      onAuthSuccess();
      setTimeout(() => { reset(); }, 1800);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Google auth ───────────────────────────────────────────────────────────
  const handleGoogle = async () => {
    setLoading(true); setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      setSuccess("Signed in with Google!");
      onAuthSuccess();
      setTimeout(() => { reset(); }, 1500);
    } catch (err) {
      setError(err.message || "Google sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position:       "fixed",
        inset:          0,
        background:     "rgba(5,12,26,.65)",
        backdropFilter: "blur(6px)",
        zIndex:         200,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        16,
        animation:      "scalein .2s ease",
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background:   "#fff",
        borderRadius: "var(--r-xl)",
        padding:      "44px 40px",
        width:        460,
        maxWidth:     "100%",
        position:     "relative",
        boxShadow:    "0 24px 72px rgba(0,0,0,.24)",
        animation:    "fadeUp .25s ease",
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position:   "absolute",
            top:        16,
            right:      16,
            background: "var(--bg-mid)",
            border:     "none",
            borderRadius:"50%",
            width:      34,
            height:     34,
            fontSize:   16,
            color:      "var(--text-muted)",
            cursor:     "pointer",
            display:    "flex",
            alignItems: "center",
            justifyContent:"center",
            transition: "all var(--t-fast)",
          }}
          onMouseEnter={e => { e.currentTarget.style.background="#e2e8f0"; e.currentTarget.style.color="var(--text-primary)"; }}
          onMouseLeave={e => { e.currentTarget.style.background="var(--bg-mid)"; e.currentTarget.style.color="var(--text-muted)"; }}
        >✕</button>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ marginBottom: 14 }}>
            <Logo size="sm" />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 4 }}>
            {tab === "register" ? "Create your account" : "Welcome back"}
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
            {tab === "register" ? "Start your free 14-day trial — no credit card required" : "Sign in to your SocialPulse workspace"}
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{
          display:      "flex",
          background:   "var(--bg-mid)",
          borderRadius: "var(--r-md)",
          padding:      "4px",
          marginBottom: 24,
        }}>
          {["register","login"].map(t => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              style={{
                flex:         1,
                padding:      "9px",
                border:       "none",
                borderRadius: "var(--r-sm)",
                fontSize:     "13.5px",
                fontWeight:   700,
                fontFamily:   "var(--font-body)",
                cursor:       "pointer",
                transition:   "all var(--t-med)",
                background:   tab === t ? "#fff" : "transparent",
                color:        tab === t ? "var(--sp-blue)" : "var(--text-muted)",
                boxShadow:    tab === t ? "var(--shadow-sm)" : "none",
              }}
            >
              {t === "register" ? "Sign up" : "Log in"}
            </button>
          ))}
        </div>

        {/* Google */}
        <button
          onClick={handleGoogle}
          disabled={loading}
          style={{
            width:          "100%",
            padding:        "11px 20px",
            border:         "1.5px solid var(--border)",
            borderRadius:   "var(--r-md)",
            background:     "#fff",
            fontFamily:     "var(--font-body)",
            fontSize:       "14px",
            fontWeight:     600,
            color:          "var(--text-secondary)",
            cursor:         loading ? "not-allowed" : "pointer",
            opacity:        loading ? 0.6 : 1,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            gap:            "10px",
            transition:     "all var(--t-fast)",
            marginBottom:   16,
          }}
          onMouseEnter={e => { e.currentTarget.style.background="#f9fafb"; e.currentTarget.style.borderColor="#9ca3af"; }}
          onMouseLeave={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.borderColor="var(--border)"; }}
        >
          <GoogleIcon />
          Continue with Google
        </button>

        {/* Divider */}
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
          <div style={{ flex:1, height:1, background:"var(--border)" }} />
          <span style={{ fontSize:12, color:"var(--text-muted)", fontWeight:500 }}>or with email</span>
          <div style={{ flex:1, height:1, background:"var(--border)" }} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {tab === "register" && (
            <Input label="Full name" type="text" placeholder="Jane Smith" value={name}
              onChange={e => setName(e.target.value)} required />
          )}
          <Input label="Work email" type="email" placeholder="you@company.com" value={email}
            onChange={e => setEmail(e.target.value)} required />
          <Input
            label="Password"
            rightLabel={tab === "login" && (
              <a href="#" style={{ fontSize: 12, color: "var(--sp-blue)", fontWeight: 600 }}>Forgot?</a>
            )}
            type={showPass ? "text" : "password"}
            placeholder={tab === "register" ? "Min. 8 characters" : "Your password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={8}
          />

          {/* Show password */}
          <label style={{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:"var(--text-muted)", cursor:"pointer", marginBottom:20, userSelect:"none" }}>
            <input type="checkbox" checked={showPass} onChange={e => setShowPass(e.target.checked)}
              style={{ accentColor:"var(--sp-blue)", width:14, height:14 }} />
            Show password
          </label>

          {error && (
            <div style={{ background:"#FFF1F2", border:"1px solid #FECDD3", borderRadius:"var(--r-md)", padding:"10px 14px", fontSize:13, color:"#BE123C", marginBottom:14 }}>
              ⚠ {error}
            </div>
          )}
          {success && (
            <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:"var(--r-md)", padding:"10px 14px", fontSize:13, color:"#15803D", marginBottom:14 }}>
              ✓ {success}
            </div>
          )}

          <Button variant="primary" size="lg" fullWidth type="submit" disabled={loading}>
            {loading
              ? <><span style={{ width:16,height:16,border:"2px solid rgba(255,255,255,.4)",borderTop:"2px solid #fff",borderRadius:"50%",display:"inline-block",animation:"spin .7s linear infinite" }} /> Please wait…</>
              : tab === "register" ? "Create free account →" : "Sign in →"
            }
          </Button>
        </form>

        {tab === "register" && (
          <p style={{ fontSize:12, color:"var(--text-muted)", textAlign:"center", marginTop:16, lineHeight:1.6 }}>
            By signing up you agree to our{" "}
            <a href="#" style={{ color:"var(--sp-blue)" }}>Terms of Service</a> and{" "}
            <a href="#" style={{ color:"var(--sp-blue)" }}>Privacy Policy</a>.
          </p>
        )}
      </div>
    </div>
  );
}
