import { useState } from "react";

const VARIANTS = {
  primary: {
    background: "var(--sp-blue)",
    color: "#fff",
    border: "none",
    hoverBg: "var(--sp-blue-dark)",
    hoverShadow: "var(--shadow-blue)",
  },
  secondary: {
    background: "transparent",
    color: "var(--sp-blue)",
    border: "1.5px solid var(--sp-blue)",
    hoverBg: "#EEF3FF",
    hoverShadow: "none",
  },
  ghost: {
    background: "rgba(255,255,255,.12)",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,.28)",
    hoverBg: "rgba(255,255,255,.22)",
    hoverShadow: "none",
  },
  white: {
    background: "#fff",
    color: "var(--sp-blue)",
    border: "none",
    hoverBg: "#EEF3FF",
    hoverShadow: "0 8px 28px rgba(0,0,0,.18)",
  },
  dark: {
    background: "var(--bg-dark)",
    color: "#fff",
    border: "none",
    hoverBg: "#0D1E3B",
    hoverShadow: "var(--shadow-md)",
  },
};

const SIZES = {
  sm: { padding: "8px 18px",  fontSize: "13px", borderRadius: "var(--r-md)", height: "36px"  },
  md: { padding: "10px 22px", fontSize: "14px", borderRadius: "var(--r-md)", height: "42px"  },
  lg: { padding: "13px 30px", fontSize: "15px", borderRadius: "var(--r-md)", height: "50px"  },
  xl: { padding: "15px 38px", fontSize: "16px", borderRadius: "var(--r-md)", height: "56px"  },
};

export default function Button({
  children,
  variant = "primary",
  size    = "md",
  fullWidth = false,
  disabled  = false,
  icon      = null,
  iconRight = false,
  style     = {},
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        justifyContent: "center",
        gap:            "8px",
        fontFamily:     "var(--font-body)",
        fontWeight:     700,
        letterSpacing:  "-0.1px",
        cursor:         disabled ? "not-allowed" : "pointer",
        opacity:        disabled ? 0.6 : 1,
        transition:     "all var(--t-med)",
        whiteSpace:     "nowrap",
        width:          fullWidth ? "100%" : "auto",
        border:         v.border,
        background:     hovered && !disabled ? v.hoverBg : v.background,
        color:          v.color,
        boxShadow:      hovered && !disabled ? v.hoverShadow : "none",
        transform:      hovered && !disabled ? "translateY(-1px)" : "none",
        ...s,
        ...style,
      }}
      {...props}
    >
      {icon && !iconRight && <span style={{ fontSize: "16px", lineHeight: 1 }}>{icon}</span>}
      {children}
      {icon && iconRight && <span style={{ fontSize: "16px", lineHeight: 1 }}>{icon}</span>}
    </button>
  );
}
