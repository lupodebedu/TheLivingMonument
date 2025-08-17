"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex rounded-md border">
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="rounded-r-none border-r"
        >
          EN
        </Button>
        <Button
          variant={language === "it" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("it")}
          className="rounded-l-none"
        >
          IT
        </Button>
      </div>
    </div>
  )
}
