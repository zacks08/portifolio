"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Award, BookOpen, Heart, GraduationCap, Languages } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Extras() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      institution: "Amazon Web Services (AWS)",
      date: "Abril 2025",
      description: "Certificação fundamental em computação em nuvem AWS",
    },
    {
      name: "AWS Academy Graduate - Cloud Foundations",
      institution: "AWS Academy",
      date: "2025",
      description: "Graduação em fundamentos de nuvem AWS",
    },
    {
      name: "Huawei Talent AI Course",
      institution: "Huawei",
      date: "Março 2025",
      description: "Curso especializado em Inteligência Artificial",
    },
    {
      name: "Certificação de Gestão de Startups",
      institution: "Sebrae no Ceará",
      date: "Outubro 2024",
      description: "Gestão de start-ups, projetos e metodologias ágeis",
    },
  ]

  const courses = ["JavaScript", "React: Componentes e Hooks", "Banco de Dados Relacionais e NoSQL"]

  const hobbies = ["Saúde e nutrição", "Musculação", "Estudo de IA e startups", "Desenvolvimento de ideias inovadoras"]

  if (!mounted) return null

  return (
    <section id="extras" className="section" ref={ref}>
      <h2 className="section-heading">
        <BookOpen className="h-6 w-6 text-primary" /> Extras
      </h2>
      <div className={`${inView ? "animate-in" : "opacity-0"}`}>
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="certifications">Certificações</TabsTrigger>
            <TabsTrigger value="courses">Cursos</TabsTrigger>
            <TabsTrigger value="languages">Idiomas</TabsTrigger>
            <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
          </TabsList>
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" /> Formação Acadêmica
                </CardTitle>
                <CardDescription>Minha trajetória educacional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-primary">Curso Técnico em Informática</h4>
                  <p className="text-sm text-muted-foreground">EEEP Paulo Petrola</p>
                  <p className="text-xs text-muted-foreground mb-2">Janeiro 2023 - Dezembro 2025</p>
                  <p className="text-sm">
                    Formação técnica completa em desenvolvimento de sistemas, banco de dados, redes e infraestrutura de
                    TI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="certifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" /> Certificações
                </CardTitle>
                <CardDescription>Minhas certificações e conquistas acadêmicas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold text-primary">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.institution}</p>
                      <p className="text-xs text-muted-foreground mb-1">{cert.date}</p>
                      <p className="text-sm">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" /> Cursos
                </CardTitle>
                <CardDescription>Cursos que realizei para aprimorar minhas habilidades</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="languages">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary" /> Idiomas
                </CardTitle>
                <CardDescription>Minhas habilidades linguísticas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Português</span>
                    <span className="text-sm text-primary">Nativo</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Inglês</span>
                    <span className="text-sm text-muted-foreground">Básico</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Espanhol</span>
                    <span className="text-sm text-muted-foreground">Básico</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="hobbies">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" /> Hobbies
                </CardTitle>
                <CardDescription>Atividades que gosto de fazer no meu tempo livre</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
