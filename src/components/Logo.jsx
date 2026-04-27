export default function Logo({ light = false, size = "md" }) {
  const sizes = {
    sm: { icon: 28, text: 16 },
    md: { icon: 36, text: 20 },
    lg: { icon: 48, text: 26 },
  };
  const { icon, text } = sizes[size] || sizes.md;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, userSelect: "none" }}>
      {/* Animated icon mark */}
      <div
        style={{
          width:        icon,
          height:       icon,
          borderRadius: Math.round(icon * 0.28),
          background:   "linear-gradient(135deg, #0057FF 0%, #5B21FF 55%, #00C48C 100%)",
          display:      "flex",
          alignItems:   "center",
          justifyContent: "center",
          flexShrink:   0,
          boxShadow:    "0 4px 14px rgba(0,87,255,.4)",
          position:     "relative",
          overflow:     "hidden",
        }}
      >
        {/* Pulse ring inside */}
        <div
          style={{
            position:     "absolute",
            inset:        0,
            borderRadius: "inherit",
            background:   "radial-gradient(circle at 30% 30%, rgba(255,255,255,.25) 0%, transparent 65%)",
          }}
        />
        <svg
          width={icon * 0.55}
          height={icon * 0.55}
          viewBox="0 0 22 22"
          fill="none"
        >
          {/* "SP" waveform icon */}
          <circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,.4)" strokeWidth="1" />
          <polyline
            points="3,11 6,7 9,14 12,5 15,12 18,9"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <span
        style={{
          fontFamily:    "var(--font-display)",
          fontSize:      text,
          fontWeight:    800,
          letterSpacing: "-0.5px",
          color:         light ? "#fff" : "var(--text-primary)",
          lineHeight:    1,
        }}
      >
        Social
        <span
          style={{
            background:            "linear-gradient(90deg, #0057FF, #5B21FF)",
            WebkitBackgroundClip:  "text",
            WebkitTextFillColor:   "transparent",
            backgroundClip:        "text",
          }}
        >
          Pulse
        </span>
      </span>
    </div>
  );
}
