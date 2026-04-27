import { useState, useRef, useEffect } from "react";
import { TOOLS } from "../data/constants";

export default function ToolsSection() {
  const [hovered, setHovered] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef(null);

  // Check scroll position to enable/disable arrows
  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Check on mount and add scroll listener
  useEffect(() => {
    checkScroll();
    const carousel = carouselRef.current;
    carousel?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      carousel?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Scroll handler - adjusted for responsive card widths
  const scroll = (direction) => {
    if (carouselRef.current) {
      // Get first card's width + gap to calculate scroll distance
      const firstCard = carouselRef.current.querySelector("[style*='flex']");
      const scrollDistance = firstCard?.offsetWidth ? firstCard.offsetWidth + 16 : 246;
      carouselRef.current.scrollBy({
        left: direction === "right" ? scrollDistance : -scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="tools" style={{ padding:"100px 28px", background:"var(--bg-page)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:60 }}>
          <span style={{
            fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
            color:"var(--sp-blue)", display:"block", marginBottom:12,
          }}>All-in-one platform</span>
          <h2 style={{
            fontFamily:"var(--font-display)", fontSize:"clamp(28px,4vw,48px)",
            fontWeight:800, color:"var(--text-primary)", letterSpacing:"-1px",
          }}>Every tool you need to win.</h2>
          <p style={{ fontSize:17, color:"var(--text-secondary)", marginTop:14, maxWidth:480, margin:"14px auto 0", lineHeight:1.7 }}>
            One subscription. 13+ powerful tools working together.
          </p>
        </div>

        {/* Navigation Arrows - Above the carousel */}
        <div style={{
          display:     "flex",
          justifyContent: "flex-end",
          gap:         "clamp(8px, 2vw, 12px)",
          alignItems:  "center",
          marginBottom: "16px",
        }}>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              style={{
                width:              "clamp(36px, 8vw, 40px)",
                height:             "clamp(36px, 8vw, 40px)",
                borderRadius:       "50%",
                background:         canScrollLeft ? "var(--sp-blue)" : "#e0e0e0",
                border:             "none",
                color:              canScrollLeft ? "#fff" : "#999",
                fontSize:           "clamp(14px, 2vw, 18px)",
                fontWeight:         700,
                cursor:             canScrollLeft ? "pointer" : "not-allowed",
                display:            "flex",
                alignItems:         "center",
                justifyContent:     "center",
                transition:         "all .2s ease",
                opacity:            canScrollLeft ? 1 : 0.5,
                flexShrink:         0,
              }}
              onMouseEnter={e => {
                if (canScrollLeft) {
                  e.currentTarget.style.background = "#0056d4";
                  e.currentTarget.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={e => {
                if (canScrollLeft) {
                  e.currentTarget.style.background = "var(--sp-blue)";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              style={{
                width:              "clamp(36px, 8vw, 40px)",
                height:             "clamp(36px, 8vw, 40px)",
                borderRadius:       "50%",
                background:         canScrollRight ? "var(--sp-blue)" : "#e0e0e0",
                border:             "none",
                color:              canScrollRight ? "#fff" : "#999",
                fontSize:           "clamp(14px, 2vw, 18px)",
                fontWeight:         700,
                cursor:             canScrollRight ? "pointer" : "not-allowed",
                display:            "flex",
                alignItems:         "center",
                justifyContent:     "center",
                transition:         "all .2s ease",
                opacity:            canScrollRight ? 1 : 0.5,
                flexShrink:         0,
              }}
              onMouseEnter={e => {
                if (canScrollRight) {
                  e.currentTarget.style.background = "#0056d4";
                  e.currentTarget.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={e => {
                if (canScrollRight) {
                  e.currentTarget.style.background = "var(--sp-blue)";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              →
            </button>
          </div>

        {/* Carousel Container */}
        <div style={{ position:"relative" }}>
          {/* Carousel */}
          <div
            ref={carouselRef}
            style={{
              display:           "flex",
              gap:               16,
              overflowX:         "auto",
              overflowY:         "hidden",
              scrollBehavior:    "smooth",
              paddingBottom:     8,
              marginTop:         "clamp(12px, 3vw, 16px)",
              scrollbarWidth:    "none",
              msOverflowStyle:   "none",
            }}
            className="carousel-hide-scrollbar"
          >
            {TOOLS.map((tool, i) => (
              <div key={tool.name} style={{ flex:"0 0 clamp(180px, 90vw, 230px)" }}>
                <ToolCard
                  tool={tool}
                  isHovered={hovered === i}
                  onHover={() => setHovered(i)}
                  onLeave={() => setHovered(null)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom banner */}
        <div style={{
          marginTop:     40,
          background:    "linear-gradient(135deg, #EEF3FF 0%, #F5F0FF 100%)",
          border:        "1px solid #DDE8FF",
          borderRadius:  "var(--r-xl)",
          padding:       "28px 36px",
          display:       "flex",
          alignItems:    "center",
          justifyContent:"space-between",
          flexWrap:      "wrap",
          gap:           16,
        }}>
          <div>
            <div style={{ fontFamily:"var(--font-display)", fontSize:18, fontWeight:800, color:"var(--text-primary)", marginBottom:4 }}>
              API access for developers
            </div>
            <p style={{ fontSize:14, color:"var(--text-secondary)" }}>
              Integrate SocialPulse data into your own tools with our RESTful API.
            </p>
          </div>
          <a
            href="#"
            style={{
              display:      "inline-flex",
              alignItems:   "center",
              gap:          8,
              fontSize:     14,
              fontWeight:   700,
              color:        "var(--sp-blue)",
              border:       "1.5px solid var(--sp-blue)",
              borderRadius: "var(--r-md)",
              padding:      "10px 22px",
              transition:   "all .2s",
              whiteSpace:   "nowrap",
            }}
            onMouseEnter={e => { e.currentTarget.style.background="var(--sp-blue)"; e.currentTarget.style.color="#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="var(--sp-blue)"; }}
          >
            View API docs →
          </a>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool, isHovered, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        background:   "var(--bg-card)",
        border:       `1.5px solid ${isHovered ? "var(--sp-blue)" : "var(--border)"}`,
        borderRadius: "var(--r-lg)",
        padding:      "22px 20px",
        cursor:       "pointer",
        transition:   "all .25s ease",
        boxShadow:    isHovered ? "0 6px 24px rgba(0,87,255,.1)" : "none",
        transform:    isHovered ? "translateY(-4px)" : "none",
        position:     "relative",
        overflow:     "hidden",
      }}
    >
      {/* Gradient glow on hover */}
      {isHovered && (
        <div style={{
          position:   "absolute",
          top:        0,
          left:       0,
          right:      0,
          height:     2,
          background: "linear-gradient(90deg, var(--sp-blue), var(--sp-violet))",
        }}/>
      )}

      <div style={{ fontSize:28, marginBottom:12, lineHeight:1 }}>{tool.icon}</div>
      <div style={{
        fontSize:     14,
        fontWeight:   700,
        color:        isHovered ? "var(--sp-blue)" : "var(--text-primary)",
        marginBottom: 6,
        transition:   "color .2s",
        fontFamily:   "var(--font-display)",
      }}>{tool.name}</div>
      <div style={{ fontSize:12.5, color:"var(--text-muted)", lineHeight:1.55 }}>{tool.desc}</div>

      {isHovered && (
        <div style={{
          marginTop:    10,
          fontSize:     12,
          fontWeight:   700,
          color:        "var(--sp-blue)",
          display:      "flex",
          alignItems:   "center",
          gap:          4,
        }}>Explore →</div>
      )}
    </div>
  );
}
