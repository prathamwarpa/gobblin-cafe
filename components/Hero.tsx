"use client"

import { useEffect, useState } from "react"
import { Particles } from "@/components/ui/particles"
import { SparklesText } from "@/components/ui/sparkles-text"

const LEAF_COLORS = ["#3d6b2a", "#4a8035", "#2d5a22", "#5a9060", "#3d7030"]
const LEAF_SIZES = [18, 22, 16, 24, 20]

function LeafFall({ in: inSection }: { in?: boolean }) {
  if (!inSection) return null
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className={`leaf-wrapper leaf-${n}`}>
          <div className={`leaf-inner leaf-inner-${n}`}>
            <svg
              width={LEAF_SIZES[n - 1]}
              height={LEAF_SIZES[n - 1] * 1.4}
              viewBox="0 0 24 34"
              fill={LEAF_COLORS[n - 1]}
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.8 }}
            >
              <path d="M12 2C7 2 2 8 2 17c0 7 4 13 10 15V2z" />
              <path d="M12 2c5 0 10 6 10 15 0 7-4 13-10 15V2z" opacity="0.7" />
              <line x1="12" y1="2" x2="12" y2="32" stroke="#2a5020" strokeWidth="0.8" opacity="0.5" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  const [particleCount, setParticleCount] = useState(40)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (window.innerWidth <= 768) setParticleCount(20)
  }, [])

  function scrollToStory() {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d0800",
      }}
    >
      {/* Pure dark background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#0d0800",
          zIndex: 0,
        }}
      />

      {/* Atmospheric circle */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "0.5px solid rgba(212,169,106,0.04)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      {/* Leaf Fall */}
      <LeafFall in />

      {/* Firefly Particles */}
      {mounted && (
        <Particles
          className="absolute inset-0 z-[3]"
          quantity={particleCount}
          staticity={30}
          ease={80}
          size={1.5}
          color="#D4A96A"
          vx={0.05}
          vy={-0.05}
        />
      )}

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {/* Eyebrow label */}
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--text-dim)",
            fontFamily: "var(--font-sans)",
            marginBottom: "20px",
            animation: "hero-fade-in 0.8s ease-out 0.1s both",
          }}
        >
          Old Manali · Hidden in the Forest
        </p>

        {/* Title with Sparkles + Shimmer */}
        <div
          style={{
            animation: "hero-fade-in 0.9s ease-out 0.2s both",
            marginBottom: "24px",
          }}
        >
          <SparklesText
            text="Gobblin by Kabeelah"
            sparklesCount={8}
            colors={{ first: "#D4A96A", second: "#F0D090" }}
            className="shimmer-text"
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(0.65rem, 1.8vw, 0.8rem)",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "var(--text-warm)",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            marginBottom: "40px",
            animation: "hero-fade-in 0.8s ease-out 0.5s both",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              width: "40px",
              height: "0.5px",
              background: "#D4A96A",
              opacity: 0.4,
            }}
          />
          Follow the river
          <span
            style={{
              width: "40px",
              height: "0.5px",
              background: "#D4A96A",
              opacity: 0.4,
            }}
          />
        </p>

        {/* CTA */}
        <button
          onClick={scrollToStory}
          style={{
            border: "1px solid var(--text-warm)",
            background: "transparent",
            color: "var(--text-warm)",
            padding: "12px 40px",
            borderRadius: "2px",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontFamily: "var(--font-sans)",
            minHeight: "44px",
            transition: "background 0.3s ease, color 0.3s ease",
            animation: "hero-fade-in 0.8s ease-out 0.7s both",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = "var(--bg-bark)"
            el.style.color = "var(--text-gold)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = "transparent"
            el.style.color = "var(--text-warm)"
          }}
        >
          Explore
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          cursor: "pointer",
        }}
        onClick={scrollToStory}
        aria-label="Scroll down"
      >
        <svg
          width="20"
          height="32"
          viewBox="0 0 20 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="18"
            height="28"
            rx="9"
            stroke="var(--text-dim)"
            strokeWidth="1"
          />
          <rect
            x="9"
            y="6"
            width="2"
            height="6"
            rx="1"
            fill="var(--text-warm)"
          />
        </svg>
      </div>
    </section>
  )
}
