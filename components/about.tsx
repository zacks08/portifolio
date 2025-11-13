"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, MapPin, Mail, Brain, Phone } from "lucide-react"
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
          <h3 className="text-2xl font-semibold mb-4 text-primary">Perfil Profissional</h3>
          <p className="text-lg mb-6">
            Sou desenvolvedor Back-End com experiência em Laravel 12, Node.js, React e Next.js, atuando no
            desenvolvimento de sistemas completos, integrações de APIs e otimização de desempenho.
          </p>
          <p className="text-lg mb-6">
            Tenho perfil de liderança, pensamento analítico e facilidade para trabalhar com metodologias ágeis. Busco
            sempre aprimorar meus conhecimentos e aplicar tecnologia para resolver problemas reais de forma eficiente.
          </p>
          <div className="flex flex-col gap-3 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:isaac.dev.contato08@gmail.com" className="hover:text-primary transition-colors">
                isaac.dev.contato08@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+5585985377239" className="hover:text-primary transition-colors">
                (85) 98537-7239
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Fortaleza - CE, Brasil</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="sm:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" /> Objetivo
              </h3>
              <p>
                Atuar na área de tecnologia e gestão, seja como Desenvolvedor Back-End, gerente de processos ou vendedor
                de soluções tecnológicas. Busco crescer profissionalmente, aplicando meus conhecimentos técnicos e de
                liderança para gerar resultados concretos e contribuir para o crescimento da empresa.
              </p>
            </CardContent>
          </Card>
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
        </div>
      </div>
    </section>
  )
}
