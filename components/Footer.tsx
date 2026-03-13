"use client"

export function Footer() {
  return (
    <footer
      style={{
        background: "#080500",
        borderTop: "1px solid var(--gb-border)",
        padding: "clamp(48px, 8vw, 80px) clamp(20px, 5vw, 48px) clamp(32px, 5vw, 48px)",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: 700,
              color: "var(--text-gold)",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              marginBottom: "4px",
            }}
          >
            Gobblin by Kabeelah
          </p>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Old Manali · Himachal Pradesh
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "var(--gb-border)",
          }}
        />

        {/* Info row */}
        <div
          style={{
            display: "flex",
            gap: "clamp(20px, 4vw, 48px)",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Hours */}
          <div>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                fontFamily: "var(--font-sans)",
                marginBottom: "4px",
              }}
            >
              Open
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Every day · 10am to 12:30am
            </p>
          </div>

          <div
            style={{
              width: "1px",
              height: "32px",
              background: "var(--gb-border)",
            }}
            className="footer-divider"
          />

          {/* Phone */}
          <div>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                fontFamily: "var(--font-sans)",
                marginBottom: "4px",
              }}
            >
              Call us
            </p>
            <a
              href="tel:+919876543210"
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-sans)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-warm)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              +91 98765 43210
            </a>
          </div>

          <div
            style={{
              width: "1px",
              height: "32px",
              background: "var(--gb-border)",
            }}
            className="footer-divider"
          />

          {/* Instagram */}
          <div>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                fontFamily: "var(--font-sans)",
                marginBottom: "4px",
              }}
            >
              Instagram
            </p>
            <a
              href="https://www.instagram.com/gobblinbykabeelah"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-sans)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s",
                minHeight: "44px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-warm)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @gobblinbykabeelah
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "var(--gb-border)",
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontStyle: "italic",
            color: "var(--text-dim)",
            lineHeight: 1.5,
          }}
        >
          A place that finds you when you&apos;re ready
        </p>

        {/* Copyright */}
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "1px",
            color: "var(--text-dim)",
            fontFamily: "var(--font-sans)",
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} Gobblin by Kabeelah · Old Manali, HP
        </p>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .footer-divider {
            display: none;
          }
        }
      `}</style>
    </footer>
  )
}
