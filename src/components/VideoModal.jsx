import { useEffect, useRef } from "react";

// Replace this URL with your hosted product demo video
// Example: Firebase Storage public URL or CDN-hosted .mp4
const DEMO_VIDEO_URL =
  "https://www.w3schools.com/html/mov_bbb.mp4";
// For SemRush-style enterprise demo, swap above with your own:
// "https://your-cdn.com/socialpulse-demo.mp4"

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => videoRef.current?.play(), 100);
      document.body.style.overflow = "hidden";
    } else {
      videoRef.current?.pause();
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position:       "fixed",
        inset:          0,
        background:     "rgba(2,8,28,.92)",
        backdropFilter: "blur(10px)",
        zIndex:         300,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "20px",
        animation:      "scalein .25s ease",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position:   "fixed",
          top:        20,
          right:      20,
          background: "rgba(255,255,255,.12)",
          border:     "1px solid rgba(255,255,255,.2)",
          borderRadius:"50%",
          width:      44,
          height:     44,
          color:      "#fff",
          fontSize:   18,
          cursor:     "pointer",
          display:    "flex",
          alignItems: "center",
          justifyContent:"center",
          transition: "all .2s",
          zIndex:     10,
        }}
        onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,.22)"}
        onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,.12)"}
        title="Close (Esc)"
      >✕</button>

      {/* Video container */}
      <div style={{
        width:        "100%",
        maxWidth:     1100,
        borderRadius: 20,
        overflow:     "hidden",
        boxShadow:    "0 40px 120px rgba(0,0,0,.8)",
        background:   "#000",
        position:     "relative",
        animation:    "fadeUp .3s ease",
      }}>
        {/* Gradient top bar */}
        <div style={{
          position:   "absolute",
          top:        0,
          left:       0,
          right:      0,
          height:     48,
          background: "linear-gradient(to bottom, rgba(0,0,0,.45), transparent)",
          zIndex:     5,
          pointerEvents:"none",
        }} />

        {/* Badge */}
        <div style={{
          position:     "absolute",
          top:          14,
          left:         18,
          zIndex:       6,
          background:   "rgba(0,0,0,.5)",
          backdropFilter:"blur(8px)",
          borderRadius: 100,
          padding:      "5px 14px",
          fontSize:     12,
          fontWeight:   700,
          color:        "#fff",
          fontFamily:   "var(--font-body)",
          display:      "flex",
          alignItems:   "center",
          gap:          7,
        }}>
          <span style={{ width:8,height:8,borderRadius:"50%",background:"#EF4444",display:"inline-block",boxShadow:"0 0 0 0 rgba(239,68,68,.5)",animation:"pulse-ring 2s infinite" }}/>
          SocialPulse · Product Demo
        </div>

        <video
          ref={videoRef}
          src={DEMO_VIDEO_URL}
          controls
          playsInline
          style={{ width: "100%", display: "block", maxHeight: "80vh", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
