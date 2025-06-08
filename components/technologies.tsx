"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Code, Database, Figma, GitBranch, Server } from "lucide-react"

type TechCategory = {
  icon: React.ReactNode
  title: string
  skills: { name: string; level: number }[]
}

export default function Technologies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const techCategories: TechCategory[] = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Linguagens",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 85 },
        { name: "Python", level: 80 },
      ],
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Frameworks/Bibliotecas",
      skills: [
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
      ],
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      title: "Ferramentas",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Banco de dados",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      icon: <Figma className="h-6 w-6 text-primary" />,
      title: "Design & Outras",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "APIs REST", level: 75 },
        { name: "Integração com IA", level: 70 },
      ],
    },
  ]

  if (!mounted) return null

  return (
    <section id="technologies" className="section bg-secondary/30" ref={ref}>
      <h2 className="section-heading">
        <Code className="h-6 w-6 text-primary" /> Tecnologias
      </h2>
      <div className={`grid md:grid-cols-2 gap-8 ${inView ? "animate-in" : "opacity-0"}`}>
        {techCategories.map((category, index) => (
          <div
            key={index}
            className={`space-y-4 ${inView ? (index % 2 === 0 ? "animate-in-left" : "animate-in-right") : "opacity-0"}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {category.icon} {category.title}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="hover:translate-x-1 transition-transform duration-300">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="tech-progress"
                      style={{
                        width: inView ? `${skill.level}%` : "0%",
                        transition: `width 1s ease-out ${skillIndex * 0.2 + 0.5}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
