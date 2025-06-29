"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Pequeno atraso para garantir que a animação ocorra após o carregamento
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Wallpaper animado interativo */}
      <div className="absolute inset-0 -z-10">
        {/* Gradiente de fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.15),transparent_75%)]" />

        {/* Partículas animadas */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary/40 rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                boxShadow: "0 0 8px rgba(var(--primary), 0.6)",
              }}
            />
          ))}
        </div>

        {/* Ondas animadas */}
        <div className="absolute inset-0 opacity-60">
          <div
            className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "1s" }}
          />
          <div
            className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse"
            style={{ animationDuration: "5s", animationDelay: "2s" }}
          />
        </div>

        {/* Círculos flutuantes */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/30 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-32 h-32 border-2 border-primary/35 rounded-full animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-primary/40 rounded-full animate-spin"
            style={{ animationDuration: "25s" }}
          />
        </div>

        {/* Grid animado */}
        <div className="absolute inset-0 opacity-15">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border-r border-b border-primary/30 animate-pulse"
                style={{
                  animationDelay: `${(i % 12) * 0.1}s`,
                  animationDuration: "3s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Linhas diagonais animadas */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-10 top-1/4 w-40 h-0.5 bg-primary/30 rotate-45 animate-pulse"
            style={{ animationDuration: "7s" }}
          />
          <div
            className="absolute right-20 top-1/3 w-60 h-0.5 bg-primary/25 -rotate-45 animate-pulse"
            style={{ animationDuration: "8s", animationDelay: "1.5s" }}
          />
          <div
            className="absolute left-1/3 bottom-1/4 w-40 h-0.5 bg-primary/35 rotate-45 animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          />
        </div>
      </div>
      <div
        className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Olá, eu sou <span className="text-primary">Isaac</span>
        </h1>
        <h2
          className={`text-xl md:text-2xl mb-8 text-muted-foreground transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          Estudante de Informática, Desenvolvedor e Empreendedor
        </h2>
        <p
          className={`text-lg mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          Transformando ideias em soluções tecnológicas inovadoras com foco em design, desenvolvimento e
          empreendedorismo.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Button
            size="lg"
            className="btn-pulse"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            Ver Projetos
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="btn-pulse"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            Entre em Contato
          </Button>
        </div>
        <div
          className={`mt-10 flex justify-center gap-4 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
            <a href="https://github.com/zacks08" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
            <a
              href="https://www.linkedin.com/in/isaac-de-sousa-821780327/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
            <a href="https://instagram.com/zacks_08" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <p
          className={`text-xs text-muted-foreground mt-2 opacity-75 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-75" : "opacity-0"}`}
        >
          *Instagram pessoal - conteúdo não profissional
        </p>
      </div>
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
          aria-label="Scroll down"
          className="animate-bounce hover:bg-primary/10"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
