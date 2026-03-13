"use client"

import { FadeUp } from "@/components/FadeUp"

const cards = [
  {
    title: "The Forest",
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L7 14h4L6 24h8v5h4v-5h8L21 14h4L16 3z" fill="var(--text-warm)" opacity="0.9" />
        <path d="M16 3L9 13h4L7 22h9v7h0V22h9L20 13h4L16 3z" fill="none" stroke="var(--text-warm)" strokeWidth="0.5" opacity="0.4" />
      </svg>
    ),
    description:
      "Tucked inside a deodar grove above the Beas river. No concrete, no clutter — just pine needles underfoot and stars overhead. The forest is the venue.",
  },
  {
    title: "The Food",
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4c-1.5 3-5 5-5 9a5 5 0 0010 0c0-4-3.5-6-5-9z" fill="var(--text-warm)" opacity="0.9" />
        <path d="M16 20v8M13 28h6" stroke="var(--text-warm)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="14" r="2" fill="var(--bg-deep)" />
      </svg>
    ),
    description:
      "Local trout, wild mushrooms, Himalayan herbs, and cocktails made with seasonal mountain fruit. Small kitchen, big imagination, zero shortcuts.",
  },
  {
    title: "The Vibe",
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="22" r="3" stroke="var(--text-warm)" strokeWidth="1.5" />
        <circle cx="22" cy="20" r="3" stroke="var(--text-warm)" strokeWidth="1.5" />
        <path d="M13 22V10l9-2v12" stroke="var(--text-warm)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 14l9-2" stroke="var(--text-warm)" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    description:
      "Some nights it's acoustic sets under hanging lanterns. Some nights it's silence and fireflies. Always warm, always unhurried, always exactly what you needed.",
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        position: "relative",
        padding: "clamp(60px, 10vw, 120px) clamp(20px, 5vw, 48px)",
        overflow: "hidden",
        background: "#0d0800",
        borderTop: "1px solid var(--gb-border)",
        borderBottom: "1px solid var(--gb-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <FadeUp delay={0}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              fontFamily: "var(--font-sans)",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            What awaits
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontStyle: "italic",
              color: "var(--text-warm)",
              textAlign: "center",
              marginBottom: "clamp(40px, 6vw, 64px)",
              fontWeight: 400,
            }}
          >
            Three things you&apos;ll remember
          </h2>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(16px, 3vw, 28px)",
          }}
          className="experience-grid"
        >
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 100}>
              <div
                className="exp-card"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, var(--bg-card) 0px, var(--bg-card) 2px, #2a1810 2px, #2a1810 4px)",
                  backgroundBlendMode: "normal",
                  border: "1px solid var(--gb-border)",
                  borderTop: "2px solid var(--text-warm)",
                  borderRadius: "0 0 12px 12px",
                  padding: "clamp(24px, 4vw, 36px) clamp(20px, 3vw, 28px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  height: "100%",
                  transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = "var(--accent-fairy)"
                  el.style.boxShadow = "0 0 20px rgba(192, 112, 160, 0.08)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = "var(--gb-border)"
                  el.style.boxShadow = "none"
                }}
              >
                {/* Floating icon */}
                <div className={`icon-float icon-float-${i}`} style={{ width: 36, height: 36 }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    fontWeight: 600,
                    color: "var(--text-gold)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
          }
          .exp-card {
            border-top: 2px solid var(--text-warm) !important;
          }
        }
      `}</style>
    </section>
  )
}
