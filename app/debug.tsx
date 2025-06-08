"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeDebug() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("Theme:", theme)
    console.log("Resolved theme:", resolvedTheme)
  }, [theme, resolvedTheme])

  if (!mounted) return null

  return null
}
