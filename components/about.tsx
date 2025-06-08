"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, MapPin, Mail, Brain } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="about" className="section" ref={ref}>
      <h2 className="section-heading">
        <User className="h-6 w-6 text-primary" /> Sobre Mim
      </h2>
      <div className={`grid md:grid-cols-2 gap-8 ${inView ? "animate-in" : "opacity-0"}`}>
        <div>
          <p className="text-lg mb-6">
            Sou o Isaac, estudante técnico em Informática, com espírito empreendedor e foco em soluções criativas. Já
            liderei projetos escolares e startups, gosto de resolver problemas reais com tecnologia.
          </p>
          <p className="text-lg mb-6">
            Amo aprender constantemente, valorizo saúde física e mental, e sou movido por metas e desafios. Minha paixão
            está na interseção entre tecnologia, design e inovação.
          </p>
          <div className="flex flex-col gap-3 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:isaac.dev.contato@gmail.com" className="hover:text-primary transition-colors">
                isaac.dev.contato@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Fortaleza - CE, Brasil</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" /> Visão
              </h3>
              <p>
                Criar soluções tecnológicas que impactem positivamente a vida das pessoas, combinando inovação e design.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" /> Missão
              </h3>
              <p>
                Desenvolver habilidades técnicas e empreendedoras para transformar ideias em produtos reais e
                escaláveis.
              </p>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" /> Objetivos
              </h3>
              <p>
                Concluir minha formação técnica com excelência, lançar projetos inovadores no mercado e continuar
                aprendendo novas tecnologias para expandir meu conhecimento e impacto.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
