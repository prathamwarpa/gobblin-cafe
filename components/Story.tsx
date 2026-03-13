"use client"

import { FadeUp } from "@/components/FadeUp"

function StoryLeaves() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}
    >
      <div className="leaf-wrapper" style={{ left: "8%", animationDuration: "14s", animationDelay: "2s" }}>
        <div className="leaf-inner" style={{ animationDuration: "14s" }}>
          <svg width="20" height="28" viewBox="0 0 24 34" fill="#5a9060">
            <path d="M12 2C7 2 2 8 2 17c0 7 4 13 10 15V2z" />
            <path d="M12 2c5 0 10 6 10 15 0 7-4 13-10 15V2z" opacity="0.7" />
          </svg>
        </div>
      </div>
      <div className="leaf-wrapper" style={{ left: "82%", animationDuration: "11s", animationDelay: "6s" }}>
        <div className="leaf-inner" style={{ animationDuration: "11s" }}>
          <svg width="16" height="22" viewBox="0 0 24 34" fill="#3d6b2a">
            <path d="M12 2C7 2 2 8 2 17c0 7 4 13 10 15V2z" />
            <path d="M12 2c5 0 10 6 10 15 0 7-4 13-10 15V2z" opacity="0.7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function Story() {
  return (
    <section
      id="story"
      style={{
        position: "relative",
        padding: "clamp(60px, 10vw, 120px) clamp(20px, 5vw, 48px)",
        overflow: "hidden",
        background: "#0f0900",
      }}
    >
      {/* Floating leaves */}
      <StoryLeaves />

      {/* Grid content */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
          position: "relative",
          zIndex: 4,
        }}
        className="story-grid"
      >
        {/* Text — editorial manuscript column */}
        <FadeUp delay={0} className="story-text">
          <div style={{ borderLeft: "1px solid var(--gb-border)", paddingLeft: "20px" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                fontFamily: "var(--font-sans)",
                marginBottom: "20px",
              }}
            >
              Our story
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--text-warm)",
                lineHeight: 1.3,
                marginBottom: "28px",
              }}
            >
              A hidden forest,<br />a secret table
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                fontFamily: "var(--font-sans)",
                marginBottom: "20px",
              }}
            >
              Nestled in the deodar forest above Old Manali, Gobblin is what happens when you follow
              the river far enough. Kabeelah built this place not as a business, but as an extension
              of herself — a clearing in the woods where strangers become friends and time slows down
              to match the current of the Beas.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                fontFamily: "var(--font-sans)",
              }}
            >
              The menu changes with the seasons, the music shifts with the mood, and the forest
              does the decorating. No signboard on the main road. No reservation line. Just a wooden
              goblin carved into a pine tree and a path that rewards the curious. If you found us,
              you were meant to.
            </p>
          </div>
        </FadeUp>

        {/* Image */}
        <FadeUp delay={150} className="story-image">
          <div
            style={{
              position: "relative",
              aspectRatio: "1 / 1",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid var(--gb-border)",
              boxShadow: "0 0 40px rgba(26, 15, 0, 0.6)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80"
              alt="Misty deodar forest — the path to Gobblin"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.8) saturate(0.75)",
                transition: "transform 0.7s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
              }
            />
            {/* Bottom gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(26,15,0,0.65) 0%, transparent 55%)",
                pointerEvents: "none",
              }}
            />
            {/* Quote overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "16px",
                right: "16px",
                background: "rgba(26, 15, 0, 0.75)",
                border: "1px solid var(--gb-border)",
                borderRadius: "4px",
                padding: "14px 18px",
                backdropFilter: "blur(6px)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
                  fontStyle: "italic",
                  color: "var(--text-gold)",
                  lineHeight: 1.5,
                }}
              >
                &ldquo;The forest finds you when you&apos;re ready.&rdquo;
              </p>
              <p
                style={{
                  marginTop: "6px",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                — Kabeelah
              </p>
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; }
          .story-image { order: -1; }
        }
      `}</style>
    </section>
  )
}
