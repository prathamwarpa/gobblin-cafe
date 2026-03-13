"use client"

import { useEffect, useRef } from "react"

/**
 * Applies a parallax translateY effect to the returned ref element.
 * The element should be an absolutely-positioned background layer inside
 * an overflow:hidden section container.
 *
 * @param speed  Multiplier of scroll offset (0.2 = moves at 20% of scroll speed)
 */
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Capture the element's document-absolute top once on mount
    // so the formula has a stable reference point.
    let offset = window.scrollY + el.getBoundingClientRect().top

    const onScroll = () => {
      if (window.innerWidth < 768) return
      el.style.transform = `translateY(${(window.scrollY - offset) * speed}px)`
    }

    const onResize = () => {
      // Recalculate offset after resize (layout may change)
      el.style.transform = ""
      offset = window.scrollY + el.getBoundingClientRect().top
      onScroll()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [speed])

  return ref
}
