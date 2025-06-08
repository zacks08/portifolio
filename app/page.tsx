import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Technologies from "@/components/technologies"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Extras from "@/components/extras"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ThemeDebug from "./debug"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeDebug />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Extras />
      <Contact />
      <Footer />
    </main>
  )
}
