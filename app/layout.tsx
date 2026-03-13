import type { Metadata } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gobblin by Kabeelah | Hidden Forest Cafe, Old Manali",
  description:
    "A hidden forest cafe tucked along the river in Old Manali, Himachal Pradesh. Follow the river. Find the magic.",
  keywords: [
    "Gobblin",
    "Kabeelah",
    "Old Manali",
    "forest cafe",
    "Himachal Pradesh",
    "hidden cafe",
  ],
  openGraph: {
    title: "Gobblin by Kabeelah",
    description: "Follow the river. Find the magic.",
    type: "website",
    locale: "en_IN",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}
