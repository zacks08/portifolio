export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-muted-foreground">© {currentYear} Isaac | Desenvolvedor & Empreendedor</p>
        <p className="text-sm mt-2 text-muted-foreground">Feito com ❤️ usando Next.js e Tailwind CSS</p>
      </div>
    </footer>
  )
}
