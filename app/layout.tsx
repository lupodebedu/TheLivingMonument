import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Manrope } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Hydroponic Exhibition Project",
  description: "University hydroponic wall system with monitoring and control - Interactive exhibition showcase",
  generator: "v0.app",
  keywords: ["hydroponics", "agriculture", "IoT", "monitoring", "university", "exhibition", "sustainable"],
  authors: [{ name: "University Engineering Department" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistSans.variable};
  --font-manrope: ${manrope.variable};
}
        `}</style>
      </head>
      <body
        className={`${GeistSans.variable} ${manrope.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
