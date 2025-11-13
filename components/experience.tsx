"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Experience = {
  title: string
  company: string
  period: string
  description: string[]
}

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences: Experience[] = [
    {
      title: "Desenvolvedor Back-End",
      company: "Sertanus Tecnologia",
      period: "Agosto 2025 - Atual",
      description: [
        "Desenvolvimento de sistemas web com Laravel 12, Node.js e React",
        "Criação de APIs REST, estruturação de banco de dados e otimização de performance",
        "Participação em projetos colaborativos com foco em entregas rápidas e escaláveis",
      ],
    },
    {
      title: "Assistente Administrativo e Desenvolvedor de Processos",
      company: "Fly Camisaria",
      period: "Junho 2025 - Atual",
      description: [
        "Responsável pela folha de pagamento e automação de rotinas administrativas",
        "Criação de scripts e sistemas internos para controle de ponto e cálculos salariais",
        "Apoio nas estratégias digitais e gerenciamento do Instagram da marca",
      ],
    },
    {
      title: "Gerente de Pedidos e Desenvolvedor Interno",
      company: "Restaurante Dona Nia",
      period: "Novembro 2025 - Atual",
      description: [
        "Controle e organização dos pedidos da cozinha, entregas e consumo local",
        "Desenvolvimento de soluções digitais para gestão de pedidos e relatórios operacionais",
        "Coordenação de equipe e melhoria de processos com foco em eficiência e experiência do cliente",
      ],
    },
    {
      title: "Líder de startup escolar",
      company: "Armoni",
      period: "2024 - 2025",
      description: [
        "Organização da equipe e criação do pitch",
        "Desenvolvimento do app/site e teste com usuários",
        "Design de UI/UX e integração com IA",
        "Apresentação do projeto em feiras e eventos",
      ],
    },
  ]

  if (!mounted) return null

  return (
    <section id="experience" className="section bg-secondary/30" ref={ref}>
      <h2 className="section-heading">
        <Briefcase className="h-6 w-6 text-primary" /> Experiência Profissional
      </h2>
      <div className={`space-y-6 ${inView ? "animate-in" : "opacity-0"}`}>
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                <div>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription className="text-primary font-medium mt-1">{exp.company}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
