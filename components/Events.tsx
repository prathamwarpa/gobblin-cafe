"use client"

import { useEffect, useRef, useState } from "react"

import { FadeUp } from "@/components/FadeUp"

const events = [
  {
    tag: "Every Saturday",
    name: "Saturday Night Sessions",
    description:
      "Local musicians, travelling artists, and the occasional surprise. Acoustic sets start at 8pm and fade into forest sounds by midnight. No cover, just show up.",
    detail: "8 pm onwards · Outdoors under the pines",
    link: "https://www.instagram.com/gobblinbykabeelah",
    icon: "♪",
    pulseColor: "#D4A96A",
    pulseShadowStart: "rgba(212,169,106,0.5)",
    pulseShadowEnd: "rgba(212,169,106,0)",
    eventNumber: "01",
  },
  {
    tag: "Full Moon",
    name: "Full Moon Party",
    description:
      "Once a month when the moon is full, Gobblin opens late into the night. Forest dancing, bonfires, cocktails, and the kind of conversations you remember for years.",
    detail: "Check Instagram for dates · 9 pm to 2 am",
    link: "https://www.instagram.com/gobblinbykabeelah",
    icon: "◎",
    pulseColor: "#C070A0",
    pulseShadowStart: "rgba(192,112,160,0.5)",
    pulseShadowEnd: "rgba(192,112,160,0)",
    eventNumber: "02",
  },
]

function DriftingLeaf() {
  return (
    <div className="events-leaf-drift" aria-hidden="true">
      <svg width="18" height="24" viewBox="0 0 24 34" fill="#5a9060">
        <path d="M12 2C7 2 2 8 2 17c0 7 4 13 10 15V2z" />
        <path d="M12 2c5 0 10 6 10 15 0 7-4 13-10 15V2z" opacity="0.7" />
      </svg>
    </div>
  )
}

export function Events() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [headingInView, setHeadingInView] = useState(false)

  useEffect(() => {
    const headingNode = headingRef.current
    if (!headingNode) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeadingInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(headingNode)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="events" className="events-section">
      <DriftingLeaf />

      <div className="events-container">
        <FadeUp delay={0}>
          <p className="events-label">Events & nights</p>
          <h2
            ref={headingRef}
            className={`events-heading ${headingInView ? "events-heading-animate" : ""}`}
          >
            Weekends in the forest
          </h2>
          <div className="events-divider" aria-hidden="true">
            <svg viewBox="0 0 120 16" width="120" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8H44" stroke="#3d2510" strokeWidth="1" />
              <path d="M76 8H116" stroke="#3d2510" strokeWidth="1" />
              <path d="M60 2C56 2 53 5 53 8C53 11 56 14 60 14C64 14 67 11 67 8C67 5 64 2 60 2Z" stroke="#3d2510" strokeWidth="1" />
              <path d="M60 8C58 8 56 9 55 11" stroke="#3d2510" strokeWidth="1" />
              <path d="M60 8C62 8 64 9 65 11" stroke="#3d2510" strokeWidth="1" />
            </svg>
          </div>
        </FadeUp>

        <div className="events-grid">
          {events.map((event, i) => (
            <FadeUp key={event.name} delay={i * 120}>
              <article className="events-card">
                <span className="events-card-top-accent" aria-hidden="true" />

                <span
                  className="events-pulse-dot"
                  style={{
                    background: event.pulseColor,
                    ["--pulse-color" as string]: event.pulseColor,
                    ["--pulse-shadow-start" as string]: event.pulseShadowStart,
                    ["--pulse-shadow-end" as string]: event.pulseShadowEnd,
                  }}
                />

                <span className="events-card-number" aria-hidden="true">
                  {event.eventNumber}
                </span>

                <div className="events-card-content">
                  <div className="events-row-top">
                    <span className="events-icon-wrap" aria-hidden="true">
                      <span className="events-icon">{event.icon}</span>
                    </span>
                    <span className="events-pill">{event.tag}</span>
                  </div>

                  <div>
                    <h3 className="events-card-title">{event.name}</h3>
                    <p className="events-card-description">{event.description}</p>
                    <p className="events-card-detail">{event.detail}</p>
                  </div>

                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`events-cta ${i === 0 ? "events-cta-one" : "events-cta-two"}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Updates on Instagram
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>

      <style>{`
        .events-section {
          position: relative;
          padding: 120px clamp(20px, 5vw, 48px) 140px;
          overflow: hidden;
          background: #0f0900;
        }

        .events-leaf-drift {
          position: absolute;
          top: -28px;
          left: -20px;
          z-index: 2;
          pointer-events: none;
          opacity: 0.5;
          animation: events-leaf-drift 14s linear 2s infinite;
        }

        .events-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 4;
        }

        .events-label {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-dim);
          font-family: var(--font-sans);
          text-align: center;
          margin-bottom: 14px;
        }

        .events-heading {
          font-family: 'Cormorant Garamond', var(--font-serif), Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-style: italic;
          font-weight: 600;
          line-height: 1.1;
          color: #F0D090;
          text-align: center;
          margin-bottom: 0;
          background: linear-gradient(100deg, #D4A96A 0%, #F0D090 34%, #FFF8E8 50%, #F0D090 66%, #D4A96A 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: none;
        }

        .events-heading-animate {
          animation: shimmer-sweep 1.25s ease-out both;
        }

        .events-divider {
          width: 120px;
          margin: 20px auto 60px;
          opacity: 1;
        }

        .events-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .events-card {
          position: relative;
          height: 100%;
          border: 0.5px solid rgba(212, 169, 106, 0.15);
          border-radius: 12px;
          background: linear-gradient(135deg, #241408 0%, #1e1006 50%, #241408 100%);
          box-shadow: inset 0 1px 0 rgba(212, 169, 106, 0.1);
          transition: transform 0.4s ease-out;
          overflow: hidden;
        }

        .events-card-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          border-top: 1px solid rgba(212, 169, 106, 0.4);
          transition: border-top-color 0.3s ease;
          z-index: 2;
          pointer-events: none;
        }

        .events-card-number {
          position: absolute;
          right: 16px;
          bottom: -8px;
          font-family: 'Cormorant Garamond', var(--font-serif), Georgia, serif;
          font-size: 8rem;
          line-height: 0.88;
          color: #3d2510;
          opacity: 0.2;
          pointer-events: none;
          z-index: 0;
          transition: opacity 0.4s ease;
          user-select: none;
        }

        .events-card-content {
          position: relative;
          z-index: 1;
          padding: clamp(28px, 4vw, 40px);
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-height: 100%;
        }

        .events-card:hover {
          transform: translateY(-3px);
        }

        .events-card:hover .events-card-number {
          opacity: 0.35;
        }

        .events-card:hover .events-card-top-accent {
          border-top-color: rgba(212, 169, 106, 0.8);
        }

        .events-pulse-dot {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: block;
          z-index: 2;
          animation: events-pulse 2s ease-in-out infinite;
        }

        .events-row-top {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .events-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 0.5px solid rgba(212, 169, 106, 0.2);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(212, 169, 106, 0.05);
          flex-shrink: 0;
        }

        .events-icon {
          font-size: 24px;
          line-height: 1;
          color: var(--text-warm);
        }

        .events-pill {
          position: relative;
          overflow: hidden;
          display: inline-block;
          border: 0.5px solid rgba(212, 169, 106, 0.3);
          border-radius: 18px;
          padding: 4px 14px;
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #D4A96A;
          font-family: var(--font-sans);
          background: transparent;
        }

        .events-pill::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -65%;
          width: 55%;
          background: linear-gradient(90deg, transparent, rgba(212, 169, 106, 0.4), transparent);
          transform: skewX(-20deg);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .events-card:hover .events-pill::before {
          opacity: 1;
          animation: events-pill-border-shimmer 1s linear;
        }

        .events-card-title {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 600;
          color: var(--text-gold);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .events-card-description {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--text-muted);
          font-family: var(--font-sans);
          margin-bottom: 16px;
        }

        .events-card-detail {
          font-size: 11px;
          letter-spacing: 1.5px;
          color: var(--text-dim);
          font-family: var(--font-sans);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .events-cta {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--gb-border);
          padding: 10px 20px;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--text-warm);
          font-family: var(--font-sans);
          width: fit-content;
          min-height: 44px;
          transition: border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease;
        }

        .events-cta-one {
          border-radius: 2px;
          background: transparent;
        }

        .events-cta-one::before {
          content: "";
          position: absolute;
          inset: 0;
          width: 0;
          background: #3d2510;
          z-index: -1;
          transition: width 0.4s ease;
        }

        .events-cta-one:hover {
          border-color: rgba(212, 169, 106, 0.5);
          color: #F0D090;
        }

        .events-cta-one:hover::before {
          width: 100%;
        }

        .events-cta-two {
          border-radius: 24px;
          background: rgba(212, 169, 106, 0.04);
        }

        .events-cta-two:hover {
          border-color: rgba(212, 169, 106, 0.5);
          color: #F0D090;
          background: rgba(61, 37, 16, 0.55);
        }

        @media (max-width: 640px) {
          .events-section {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .events-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .events-card-number {
            display: none;
          }
        }

        @keyframes events-leaf-drift {
          0% {
            transform: translate(0, -20px) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.5;
          }
          100% {
            transform: translate(calc(100vw + 80px), calc(100% + 380px)) rotate(240deg);
            opacity: 0;
          }
        }

        @keyframes events-pulse {
          0% {
            box-shadow: 0 0 0 0 var(--pulse-shadow-start);
          }
          100% {
            box-shadow: 0 0 0 14px var(--pulse-shadow-end);
          }
        }

        @keyframes events-pill-border-shimmer {
          0% {
            left: -65%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>
    </section>
  )
}
