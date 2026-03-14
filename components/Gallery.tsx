"use client"

import { useEffect, useRef } from "react"
import { FadeUp } from "@/components/FadeUp"

const FLIP_SPEED = 750
const flipTiming: KeyframeAnimationOptions = { duration: FLIP_SPEED, iterations: 1 }

const flipAnimationTop: Keyframe[] = [
  { transform: "rotateX(0)" },
  { transform: "rotateX(-90deg)" },
  { transform: "rotateX(-90deg)" },
]
const flipAnimationBottom: Keyframe[] = [
  { transform: "rotateX(90deg)" },
  { transform: "rotateX(90deg)" },
  { transform: "rotateX(0)" },
]
const flipAnimationTopReverse: Keyframe[] = [
  { transform: "rotateX(-90deg)" },
  { transform: "rotateX(-90deg)" },
  { transform: "rotateX(0)" },
]
const flipAnimationBottomReverse: Keyframe[] = [
  { transform: "rotateX(0)" },
  { transform: "rotateX(90deg)" },
  { transform: "rotateX(90deg)" },
]

const imageGroups: { title: string; url: string }[][] = [
  [
    { title: "The Forest Path", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=1000&fit=crop" },
    { title: "Under the Deodars", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=1000&fit=crop" },
    { title: "Morning Mist", url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&h=1000&fit=crop" },
  ],
  [
    { title: "Forest Cocktails", url: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=1000&fit=crop" },
    { title: "Around the Table", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=1000&fit=crop" },
    { title: "Dark Wood & Warm Light", url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=1000&fit=crop" },
  ],
  [
    { title: "After Midnight", url: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&h=1000&fit=crop" },
    { title: "The River Below", url: "https://images.pexels.com/photos/223022/pexels-photo-223022.jpeg" },
    { title: "Into the Clearing", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=1000&fit=crop" },
  ],
]

function FlipUnit({ images }: { images: { title: string; url: string }[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const unitsRef = useRef<HTMLElement[]>([])
  const indexRef = useRef(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    unitsRef.current = Array.from(el.querySelectorAll<HTMLElement>(".fg-unit"))
    unitsRef.current.forEach((u) => applyImg(u, 0))
    showTitle(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const applyImg = (el: HTMLElement, idx: number) => {
    el.style.backgroundImage = `url('${images[idx].url}')`
  }

  const showTitle = (idx: number) => {
    const el = containerRef.current
    if (!el) return
    el.setAttribute("data-title", images[idx].title)
    el.style.setProperty("--title-y", "0px")
    el.style.setProperty("--title-opacity", "1")
  }

  const navigate = (dir: number) => {
    const newIdx = (indexRef.current + dir + images.length) % images.length
    indexRef.current = newIdx
    const isReverse = dir < 0
    const el = containerRef.current
    if (!el) return

    el.querySelector<HTMLElement>(".fg-overlay-top")?.animate(
      isReverse ? flipAnimationTopReverse : flipAnimationTop,
      flipTiming
    )
    el.querySelector<HTMLElement>(".fg-overlay-bottom")?.animate(
      isReverse ? flipAnimationBottomReverse : flipAnimationBottom,
      flipTiming
    )

    el.style.setProperty("--title-y", "-1rem")
    el.style.setProperty("--title-opacity", "0")
    el.setAttribute("data-title", "")

    unitsRef.current.forEach((unit, i) => {
      const delay =
        (isReverse && i !== 1 && i !== 2) || (!isReverse && (i === 1 || i === 2))
          ? FLIP_SPEED - 200
          : 0
      setTimeout(() => applyImg(unit, newIdx), delay)
    })

    setTimeout(() => showTitle(newIdx), FLIP_SPEED * 0.5)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div ref={containerRef} className="flip-gallery">
        <div className="fg-unit fg-top" />
        <div className="fg-unit fg-bottom" />
        <div className="fg-unit fg-overlay-top" />
        <div className="fg-unit fg-overlay-bottom" />
      </div>

      <div className="fg-nav">
        <button onClick={() => navigate(-1)} aria-label="Previous" className="fg-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button onClick={() => navigate(1)} aria-label="Next" className="fg-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        position: "relative",
        padding: "clamp(60px, 10vw, 120px) 0",
        overflow: "hidden",
        background: "#0d0800",
        borderTop: "1px solid var(--gb-border)",
        borderBottom: "1px solid var(--gb-border)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 48px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <FadeUp delay={0}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              fontFamily: "var(--font-sans)",
              textAlign: "center",
              marginBottom: "14px",
            }}
          >
            Gallery
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 3.4vw, 2.3rem)",
              fontStyle: "italic",
              color: "var(--text-warm)",
              textAlign: "center",
              marginBottom: "clamp(40px, 6vw, 64px)",
              fontWeight: 400,
            }}
          >
            The forest in frames
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="fg-row">
            {imageGroups.map((group, i) => (
              <FlipUnit key={i} images={group} />
            ))}
          </div>
        </FadeUp>
      </div>

      <style>{`
        .flip-gallery {
          position: relative;
          width: 220px;
          height: 360px;
          perspective: 800px;
          text-align: center;
        }

        .flip-gallery::after {
          content: '';
          position: absolute;
          background-color: var(--bg-bark);
          width: 100%;
          height: 4px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 10;
        }

        .flip-gallery::before {
          content: attr(data-title);
          color: var(--text-dim);
          font-size: 0.65rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: var(--font-sans);
          position: absolute;
          left: 0;
          width: 100%;
          top: calc(100% + 1.2rem);
          opacity: var(--title-opacity, 0);
          transform: translateY(var(--title-y, 0));
          transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
        }

        .fg-unit {
          position: absolute;
          width: 100%;
          height: 50%;
          overflow: hidden;
          background-size: 220px 360px;
          background-repeat: no-repeat;
        }

        .fg-top,
        .fg-overlay-top {
          top: 0;
          transform-origin: bottom;
          background-position: top;
        }

        .fg-bottom,
        .fg-overlay-bottom {
          bottom: 0;
          transform-origin: top;
          background-position: bottom;
        }

        .fg-nav {
          display: flex;
          gap: 10px;
          margin-top: 52px;
        }

        .fg-btn {
          background: transparent;
          border: 1px solid var(--gb-border);
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-warm);
          transition: border-color 0.2s ease;
        }

        .fg-btn:hover {
          border-color: var(--text-warm);
        }

        .fg-row {
          display: flex;
          justify-content: center;
          gap: clamp(28px, 6vw, 72px);
          flex-wrap: wrap;
          padding-bottom: 80px;
        }

        @media (max-width: 640px) {
          .flip-gallery {
            width: 180px;
            height: 300px;
          }
          .fg-unit {
            background-size: 180px 300px;
          }
          .fg-row {
            gap: 24px;
          }
        }
      `}</style>
    </section>
  )
}
