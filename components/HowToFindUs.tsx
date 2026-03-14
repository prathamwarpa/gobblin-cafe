"use client"

import { FadeUp } from "@/components/FadeUp"
import { Carousel } from "@/components/ui/carousel"

const journeySlides = [
  {
    title: "01 — Enter Old Manali",
    button: "Cross the bridge",
    src: "https://media.istockphoto.com/id/1128928374/photo/old-temple-in-himalayas-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=jdewqyiKyZc1zMJ11lbieQQuUlO97czP_ddFwtjCnoU=",
  },
  {
    title: "02 — Follow the River",
    button: "Hear the Beas",
    src: "https://manalitourism.co.in/images/places-to-visit/headers/beas-river-manali-header-manali-tourism.jpg.jpg",
  },
  {
    title: "03 — Find the Goblin Sign",
    button: "Look for the carving",
    src: "https://media.gettyimages.com/id/527114332/photo/this-is-a-small-format-stone-lithograph-poster-advertising-a-soap-from-circa-1908.jpg?s=612x612&w=0&k=20&c=V6L_oR6aN4-L8gCKsiuqq_V-q77BwDNk6sOoTT9nuNU=",
  },
  {
    title: "04 — Walk into the Forest",
    button: "Follow the music",
    src: "https://media.gettyimages.com/id/152221201/photo/a-trail-leading-through-kauai-farmland.jpg?s=612x612&w=0&k=20&c=hAG6AwdRwZPT_MkIfs6q-kO64keGL51UdjiYfQMBBV8=",
  },
]


export function HowToFindUs() {
  return (
    <section
      id="find-us"
      style={{
        position: "relative",
        padding: "clamp(60px, 10vw, 120px) 0",
        overflow: "hidden",
        background: "#0b0700",
        borderTop: "1px solid var(--gb-border)",
      }}
    >
      {/* Header */}
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
              marginBottom: "16px",
            }}
          >
            How to find us
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 4.5vw, 2.9rem)",
              fontWeight: 700,
              color: "var(--text-gold)",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            We&apos;re not on the main road.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontStyle: "italic",
              color: "var(--text-warm)",
              fontWeight: 400,
              marginBottom: "clamp(40px, 6vw, 64px)",
            }}
          >
            That&apos;s the point.
          </p>
        </FadeUp>
      </div>

      {/* Journey Carousel — same 3D effect as Gallery */}
      <FadeUp delay={100}>
        <div style={{ paddingBottom: "clamp(96px, 20vw, 160px)", position: "relative", zIndex: 2 }}>
          <Carousel slides={journeySlides} />
        </div>
      </FadeUp>

      {/* Google Maps embed */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          marginTop: "clamp(16px, 6vw, 36px)",
          padding: "0 clamp(20px, 5vw, 48px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <FadeUp delay={200}>
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid var(--gb-border)",
              position: "relative",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5!2d77.1892!3d32.2731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904879c5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sOld%20Manali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="340"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(175deg) saturate(0.5) brightness(0.7)",
                display: "block",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gobblin by Kabeelah — Old Manali location"
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                background: "rgba(26, 15, 0, 0.88)",
                border: "1px solid var(--gb-border)",
                borderRadius: "6px",
                padding: "10px 16px",
                backdropFilter: "blur(6px)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.95rem",
                  color: "var(--text-gold)",
                  fontWeight: 600,
                }}
              >
                Old Manali, Himachal Pradesh
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "1px",
                  marginTop: "2px",
                }}
              >
                Follow the river path from Manu Temple
              </p>
            </div>
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.85rem",
              color: "var(--text-dim)",
              fontFamily: "var(--font-sans)",
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            No GPS coordinates will take you here. Ask a local, follow the sound of the river,
            and trust your instincts. We&apos;ll be at the end.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
