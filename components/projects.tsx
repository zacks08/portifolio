"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Rocket, ChevronLeft, ChevronRight } from "lucide-react"

type Project = {
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  github?: string
  demo?: string
  status?: "completed" | "development" | "planning"
  year?: string
  teamSize?: string
  role?: string
}

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev" | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Estados para controlar o arrasto
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects: Project[] = [
    {
      title: "API de Usuários",
      description:
        "API REST para cadastro, consulta, atualização e remoção de usuários, desenvolvida com Node.js, Express e Prisma ORM utilizando MongoDB.",
      longDescription:
        "API completa com funcionalidades de CRUD para gerenciamento de usuários. Implementa cadastro, listagem com filtros (nome, email, idade), atualização e remoção de usuários. Desenvolvida com boas práticas de programação e documentação detalhada para facilitar o uso e manutenção.",
      technologies: ["Node.js", "Express", "Prisma ORM", "MongoDB", "REST API"],
      github: "https://github.com/zacks08/node-usuarios",
      status: "completed",
      year: "2025",
      teamSize: "Individual",
      role: "Desenvolvedor Full-Stack",
    },
    {
      title: "API de Estoque de Produtos",
      description:
        "API REST para cadastro, consulta, atualização e remoção de produtos em estoque, desenvolvida com Node.js, Express e Prisma ORM utilizando MongoDB.",
      longDescription:
        "Sistema completo de gerenciamento de estoque com funcionalidades CRUD para produtos. Implementa cadastro, listagem, consulta por ID, atualização e remoção de produtos. Inclui validações de segurança e suporte a filtros de consulta. Desenvolvida com foco em boas práticas e segurança de dados.",
      technologies: ["Node.js", "Express", "Prisma ORM", "MongoDB", "REST API"],
      github: "https://github.com/zacks08/node-estoque",
      status: "completed",
      year: "2025",
      teamSize: "Individual",
      role: "Desenvolvedor Full-Stack",
    },
    {
      title: "Armoni",
      description:
        "Plataforma de personalização de moda com IA que recomenda roupas baseadas no estilo do usuário, clima e ocasião.",
      longDescription:
        "Startup desenvolvida em equipe durante o 2º ano do ensino médio. Como único desenvolvedor da equipe de 4 pessoas, criei um site completo com integração à NIA (IA personalizada via GPT) que monta outfits personalizados. O projeto incluiu apresentação em feira de startups e criação de presença digital completa.",
      technologies: ["HTML", "CSS", "JavaScript", "IA/GPT", "Design"],
      github: "https://github.com/zacks08/Armoni",
      demo: "https://armoni-six.vercel.app",
      status: "completed",
      year: "2024",
      teamSize: "4 pessoas",
      role: "Desenvolvedor Full-Stack",
    },
    {
      title: "EXPOTEC",
      description:
        "Landing page visual e impactante para feira de tecnologia, desenvolvida com foco em design atrativo para leigos em tecnologia.",
      longDescription:
        "Projeto desenvolvido individualmente para feira de curso da escola. Originalmente seria continuação da Armoni, mas devido ao baixo engajamento da equipe, precisei criar algo novo rapidamente. Isso me ensinou a importância de sempre ter um plano B e estar preparado para mudanças. O site tem design extremamente visual para prender a atenção de estudantes do 9º ano.",
      technologies: ["HTML", "CSS", "Design Visual", "GitHub Pages"],
      github: "https://github.com/zacks08/soda_",
      demo: "https://zacks08.github.io/soda_/",
      status: "completed",
      year: "2024",
      teamSize: "Individual",
      role: "Desenvolvedor & Designer",
    },
  ]

  const nextProject = () => {
    if (isTransitioning) return
    setDirection("next")
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      setIsTransitioning(false)
    }, 300)
    setTranslateX(0)
  }

  const prevProject = () => {
    if (isTransitioning) return
    setDirection("prev")
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
      setIsTransitioning(false)
    }, 300)
    setTranslateX(0)
  }

  const goToProject = (index: number) => {
    if (isTransitioning) return
    setDirection(index > currentIndex ? "next" : "prev")
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 300)
    setTranslateX(0)
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "development":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "planning":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  const getStatusText = (status?: string) => {
    switch (status) {
      case "completed":
        return "Concluído"
      case "development":
        return "Em desenvolvimento"
      case "planning":
        return "Planejamento"
      default:
        return "Status indefinido"
    }
  }

  // Funções para controlar o arrasto
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (isTransitioning) return
    setIsDragging(true)

    // Captura a posição inicial do mouse ou toque
    if ("touches" in e) {
      setStartX(e.touches[0].clientX)
    } else {
      setStartX(e.clientX)
    }
  }

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || isTransitioning) return

    // Calcula o deslocamento
    let currentX: number
    if ("touches" in e) {
      currentX = e.touches[0].clientX
    } else {
      currentX = e.clientX
    }

    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging || isTransitioning) return

    setIsDragging(false)

    // Determina se deve mudar de slide com base no deslocamento
    if (translateX > 100) {
      prevProject()
    } else if (translateX < -100) {
      nextProject()
    }

    // Reset do deslocamento
    setTranslateX(0)
  }

  // Adiciona eventos para cancelar o arrasto se o mouse sair da área
  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        handleDragEnd()
      }
    }

    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("touchend", handleMouseUp)

    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  if (!mounted) return null

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="section" ref={ref}>
      <h2 className="section-heading">
        <Rocket className="h-6 w-6 text-primary" /> Projetos
      </h2>
      <div className={`${inView ? "animate-in" : "opacity-0"}`}>
        {/* Carrossel */}
        <div className="relative">
          {/* Projeto atual */}
          <div
            className="overflow-hidden cursor-grab"
            ref={carouselRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className={`flex transition-transform duration-500 ease-out ${isDragging ? "" : "duration-500"}`}
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
                cursor: isDragging ? "grabbing" : "grab",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 transition-opacity duration-300 ${
                    isTransitioning && index === currentIndex
                      ? direction === "next"
                        ? "opacity-0 translate-x-10"
                        : "opacity-0 -translate-x-10"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  <Card className="overflow-hidden border border-border mx-2 card-hover">
                    <CardHeader className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {project.status && (
                            <Badge className={`${getStatusColor(project.status)} badge-glow`}>
                              {getStatusText(project.status)}
                            </Badge>
                          )}
                          {project.year && (
                            <Badge variant="secondary" className="badge-glow">
                              {project.year}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>
                        <div className="flex flex-wrap gap-2 mt-2 mb-3">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="badge-glow">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {project.role && <div className="text-sm text-primary font-medium">{project.role}</div>}
                        {project.teamSize && <div className="text-xs text-muted-foreground">{project.teamSize}</div>}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm leading-relaxed mb-3">{project.description}</div>
                      {project.longDescription && (
                        <div className="text-xs text-muted-foreground leading-relaxed">{project.longDescription}</div>
                      )}
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      {project.github && (
                        <Button variant="outline" size="sm" className="btn-pulse" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Github className="h-4 w-4" /> GitHub
                          </a>
                        </Button>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <Button size="sm" className="btn-pulse" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="h-4 w-4" /> Demo
                          </a>
                        </Button>
                      )}
                      {(!project.github && !project.demo) || project.demo === "#" ? (
                        <Badge variant="outline" className="badge-glow">
                          {getStatusText(project.status)}
                        </Badge>
                      ) : null}
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          {projects.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                onClick={prevProject}
                aria-label="Projeto anterior"
                disabled={isTransitioning}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                onClick={nextProject}
                aria-label="Próximo projeto"
                disabled={isTransitioning}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Indicadores de página */}
        {projects.length > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}

        {/* Contador de projetos */}
        {projects.length > 1 && (
          <div className="text-center mt-4 text-sm text-muted-foreground">
            {currentIndex + 1} de {projects.length} projetos
          </div>
        )}
      </div>
    </section>
  )
}
