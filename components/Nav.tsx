"use client"

import { useState, useEffect } from "react"
import { MenuVertical } from "@/components/menu-vertical"

const navLinks = [
  { label: "The Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Find Us", href: "#find-us" },
]

export function Nav({ onOpenMenu }: { onOpenMenu: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleNavClick(href: string) {
    setOpen(false)

    if (href === "#menu") {
      onOpenMenu()
      return
    }

    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav
        className="gob-nav-shell"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s ease, border-bottom 0.4s ease",
          background: scrolled ? "rgba(26, 15, 0, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid var(--gb-border)" : "none",
        }}
      >
        <a
          className="gob-nav-brand"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            fontWeight: 700,
            color: "var(--text-gold)",
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          Gobblin
        </a>

        <div style={{ gap: "32px", alignItems: "center" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                background: "none",
                border: "none",
                fontFamily: "var(--font-sans)",
                padding: "8px 0",
                minHeight: "44px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-warm)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-dim)")}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="gob-nav-toggle flex md:hidden flex-col items-center justify-center gap-[5px]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            padding: "10px",
            minWidth: "44px",
            minHeight: "44px",
          }}
        >
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--text-warm)", transition: "transform 0.3s ease, opacity 0.3s ease", transform: open ? "rotate(45deg) translateY(6.5px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--text-warm)", transition: "opacity 0.3s ease", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--text-warm)", transition: "transform 0.3s ease, opacity 0.3s ease", transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
        </button>
      </nav>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 39,
          background: "rgba(10, 5, 0, 0.6)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        onClick={() => setOpen(false)}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "280px",
          zIndex: 50,
          background: "var(--bg-bark)",
          borderLeft: "1px solid var(--gb-border)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          padding: "80px 22px 40px",
          gap: "10px",
        }}
      >
        <p style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "24px", fontFamily: "var(--font-sans)" }}>
          Navigate
        </p>
        <MenuVertical
          menuItems={navLinks}
          color="var(--text-gold)"
          skew={2}
          className="px-0"
          onItemClick={handleNavClick}
        />
        <p style={{ marginTop: "auto", fontSize: "11px", color: "var(--text-dim)", fontFamily: "var(--font-sans)", letterSpacing: "1px" }}>
          Every day · 10am – 12:30am
        </p>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .gob-nav-shell {
            left: auto !important;
            right: 12px !important;
            top: 12px !important;
            width: auto !important;
            padding: 0 !important;
            background: transparent !important;
            border-bottom: none !important;
            backdrop-filter: none !important;
          }

          .gob-nav-brand {
            display: none;
          }

          .gob-nav-toggle {
            border: 1px solid var(--gb-border);
            border-radius: 999px;
            background: rgba(26, 15, 0, 0.9) !important;
            backdrop-filter: blur(8px);
          }
        }
      `}</style>
    </>
  )
}
