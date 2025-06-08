"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

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

    // Simulando envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve.",
      })
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
    }, 1500)
  }

  if (!mounted) return null

  return (
    <section id="contact" className="section bg-secondary/30" ref={ref}>
      <h2 className="section-heading">
        <Mail className="h-6 w-6 text-primary" /> Contato
      </h2>
      <div className={`grid md:grid-cols-2 gap-8 ${inView ? "animate-in" : "opacity-0"}`}>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Vamos conversar!</h3>
          <p className="mb-6">
            Estou sempre aberto a novas oportunidades, parcerias e projetos interessantes. Se você tem uma ideia ou
            apenas quer bater um papo sobre tecnologia, empreendedorismo ou inovação, entre em contato!
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:isaac.dev.contato@gmail.com" className="hover:text-primary transition-colors">
                isaac.dev.contato@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Nome
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Sua mensagem..."
                rows={5}
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" /> Enviar Mensagem
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
