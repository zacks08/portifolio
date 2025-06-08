"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, MapPin, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Configuração do EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Isaac",
        reply_to: formData.email,
      }

      // Enviar o email usando EmailJS
      // Você precisará substituir estes IDs pelos seus próprios do EmailJS
      const response = await emailjs.send(
        "service_emailjs", // ID do serviço (você precisará criar)
        "template_contact", // ID do template (você precisará criar)
        templateParams,
        "YOUR_PUBLIC_KEY", // Chave pública do EmailJS (você precisará obter)
      )

      if (response.status === 200) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Responderei em breve.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Falha ao enviar mensagem")
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) return null

  return (
    <section id="contact" className="section bg-secondary/30" ref={ref}>
      <div className="text-center mb-12">
        <h2 className="section-heading justify-center">
          <Mail className="h-6 w-6 text-primary" /> Contato
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Vamos transformar suas ideias em realidade! Entre em contato para discutir projetos, parcerias ou apenas para
          trocar uma ideia sobre tecnologia.
        </p>
      </div>

      <div className={`max-w-6xl mx-auto ${inView ? "animate-in" : "opacity-0"}`}>
        {/* Cards de contato */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:isaac.dev.contato08@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              isaac.dev.contato08@gmail.com
            </a>
          </div>

          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Localização</h3>
            <p className="text-sm text-muted-foreground">Fortaleza - CE, Brasil</p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Resposta</h3>
            <p className="text-sm text-muted-foreground">Até 24 horas</p>
          </div>
        </div>


            <div className="mt-6 pt-6 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground">
                Ou entre em contato diretamente pelo email:{" "}
                <a href="mailto:isaac.dev.contato08@gmail.com" className="text-primary hover:underline font-medium">
                  isaac.dev.contato08@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
