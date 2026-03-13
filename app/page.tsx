"use client"

import { useState } from "react"

import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { Story } from "@/components/Story"
import { Events } from "@/components/Events"
import { HowToFindUs } from "@/components/HowToFindUs"
import { Gallery } from "@/components/Gallery"
import { Footer } from "@/components/Footer"
import { ScrollProgress } from "@/components/ScrollProgress"
import { SectionDivider } from "@/components/SectionDivider"
import { MenuOverlay } from "@/components/MenuOverlay"

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ScrollProgress />
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <main>
        <Hero />
        <SectionDivider />
        <Story />
        <SectionDivider />
        <section
          style={{
            padding: "clamp(40px, 8vw, 84px) 20px",
            display: "flex",
            justifyContent: "center",
            background: "#110a00",
          }}
        >
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              border: "1px solid var(--gb-border)",
              background: "var(--bg-card)",
              color: "var(--text-warm)",
              borderRadius: "999px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "12px",
              padding: "12px 22px",
              fontFamily: "var(--font-sans)",
              transition: "color 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-gold)"
              e.currentTarget.style.borderColor = "var(--text-warm)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-warm)"
              e.currentTarget.style.borderColor = "var(--gb-border)"
            }}
          >
            Open Menu
          </button>
        </section>
        <SectionDivider />
        <HowToFindUs />
        <SectionDivider />
        <Events />
        <SectionDivider />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
