"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Language, type Translations, translations } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    try {
      // Only access localStorage on the client side
      if (typeof window !== "undefined") {
        const savedLanguage = localStorage.getItem("hydroponic-language") as Language
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "it")) {
          setLanguage(savedLanguage)
        }
      }
    } catch (error) {
      console.log("[v0] Error loading saved language:", error)
      // Fallback to default language if localStorage fails
      setLanguage("en")
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("hydroponic-language", lang)
      }
    } catch (error) {
      console.log("[v0] Error saving language preference:", error)
    }
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  }

  if (!isClient) {
    // Return default English translations during SSR
    return (
      <LanguageContext.Provider
        value={{
          language: "en",
          setLanguage: handleSetLanguage,
          t: translations.en,
        }}
      >
        {children}
      </LanguageContext.Provider>
    )
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
