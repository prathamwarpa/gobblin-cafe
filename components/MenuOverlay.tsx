"use client"

import { useEffect } from "react"

import { Carousel, TestimonialCard } from "@/components/retro-testimonial"

type MenuItem = {
  name: string
  description: string
  price: string
  image: string
}

type MenuCategory = {
  id: string
  label: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    label: "Pizza",
    items: [
      {
        name: "Margherita Classica",
        description: "San marzano tomato, fior di latte mozzarella, basil and extra virgin olive oil.",
        price: "₹ 420",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=700&q=80",
      },
      {
        name: "Smoked Chicken Pepper",
        description: "House-smoked chicken, roasted peppers, caramelized onion and mozzarella.",
        price: "₹ 540",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=80",
      },
      {
        name: "Truffle Mushroom",
        description: "Wild mushrooms, truffle cream, arugula and aged parmesan.",
        price: "₹ 560",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=700&q=80",
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      {
        name: "Arrabbiata Rigatoni",
        description: "Rigatoni tossed in spicy tomato sauce with garlic, basil and parmesan.",
        price: "₹ 390",
        image: "https://images.unsplash.com/photo-1608756687911-aa1599ab0386?w=700&q=80",
      },
      {
        name: "Alfredo Fettuccine",
        description: "Creamy parmesan alfredo, fettuccine ribbons and cracked black pepper.",
        price: "₹ 440",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700&q=80",
      },
      {
        name: "Pesto Penne",
        description: "Basil pesto, toasted pine nuts, cherry tomato and pecorino.",
        price: "₹ 410",
        image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=700&q=80",
      },
    ],
  },
  {
    id: "continental",
    label: "Continental",
    items: [
      {
        name: "Herb Grilled Chicken",
        description: "Herb-marinated chicken breast, garlic mash and buttered seasonal vegetables.",
        price: "₹ 590",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&q=80",
      },
      {
        name: "Pan-Seared Fish",
        description: "Lemon butter fish fillet, sauteed greens and roasted potatoes.",
        price: "₹ 640",
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=700&q=80",
      },
      {
        name: "Steak and Jus",
        description: "Char-grilled steak, pepper jus, confit garlic and grilled asparagus.",
        price: "₹ 760",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&q=80",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      {
        name: "Berry Fizz",
        description: "Mixed berry puree, lime, mint and sparkling water.",
        price: "₹ 220",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7?w=700&q=80",
      },
      {
        name: "Citrus Cooler",
        description: "Orange, lemon, basil and tonic over ice.",
        price: "₹ 240",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=700&q=80",
      },
      {
        name: "Cold Coffee",
        description: "Slow-brewed coffee, vanilla, milk foam and dark chocolate dust.",
        price: "₹ 260",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=80",
      },
    ],
  },
]

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: open ? "rgba(17, 10, 0, 0.96)" : "rgba(17, 10, 0, 0)",
        overflowY: "auto",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "opacity, background-color",
      }}
    >
      <div
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 24px",
            background: "rgba(17, 10, 0, 0.92)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid var(--gb-border)",
          }}
        >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1rem",
            color: "var(--text-gold)",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          Gobblin
        </span>

        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            background: "none",
            border: "1px solid var(--gb-border)",
            borderRadius: "999px",
            padding: "7px 14px",
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--text-warm)",
            fontFamily: "var(--font-sans)",
          }}
        >
          Close
        </button>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "28px 20px 84px" }}>
          <div style={{ textAlign: "center", marginBottom: "26px" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontStyle: "italic",
                color: "var(--text-warm)",
                lineHeight: 1.15,
                fontWeight: 400,
              }}
            >
              The Menu
            </h2>
          </div>

          <div className="menu-modal-chips">
            {menuCategories.map((category) => (
              <a key={category.id} href={`#overlay-menu-${category.id}`} className="menu-modal-chip">
                {category.label}
              </a>
            ))}
          </div>

          {menuCategories.map((category) => (
            <div id={`overlay-menu-${category.id}`} key={category.id} className="overlay-menu-category">
              <h3 className="overlay-menu-title">{category.label}</h3>
              <Carousel
                items={category.items.map((item, index) => (
                  <TestimonialCard
                    key={`${category.id}-${item.name}`}
                    index={index}
                    layout
                    testimonial={{
                      name: item.name,
                      designation: `Price · ${item.price}`,
                      description: item.description,
                      profileImage: item.image,
                    }}
                  />
                ))}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .menu-modal-chips {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: clamp(28px, 5vw, 44px);
        }

        .menu-modal-chip {
          border: 1px solid var(--gb-border);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 11px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--text-dim);
          font-family: var(--font-sans);
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .menu-modal-chip:hover {
          border-color: var(--text-warm);
          color: var(--text-warm);
        }

        .overlay-menu-category {
          scroll-margin-top: 90px;
          margin-bottom: clamp(38px, 6vw, 64px);
        }

        .overlay-menu-title {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2.8vw, 1.75rem);
          color: var(--text-gold);
        }
      `}</style>
    </div>
  )
}